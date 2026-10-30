# 可选只读检查器

此工具只读检查选定材料，支持风格、引号和用词提示，以及 Anti-Echo 冗余复核。普通对话可直接使用规则，不需要运行工具。

## 环境与支持边界

检查器需要 Node.js，无第三方运行依赖。**已验证环境为 macOS、Node.js 26.13.0。** 源码保留上游 Node.js 18+ 的运行门槛与低版本提示，其他版本的兼容性尚未验证。

不能运行 Node／shell／文件工具时，按完整规则人工复核，说明检查器未运行；不是技能读取失败。权限拒绝单独披露，不换路径／工具绕过。技术基线和实际验证版本在 README 中公开，不能把上游 18+ 当成本包实测。

## 调用

在完整技能目录所在位置，手工示例：

```sh
node waa-relax-go/tools/check.mjs --help
node waa-relax-go/tools/check.mjs 文档.md --profile for-document --style relax-go
node waa-relax-go/tools/check.mjs 技术说明.md --profile for-document --style tech-doc --quotes corner --format markdown
printf '%s\n' '点击「保存」。像素对齐。' | node waa-relax-go/tools/check.mjs --style tech-doc --json
```

安装目录不同时，使用本机实际目录代替示例 `waa-relax-go`，不依赖任何平台固定路径。入口没有 `init`、`install` 或 hook，不使用原 STC 包命令。

| 参数 | 用法 |
| --- | --- |
| 路径 | 指定文件或目录；没有路径时读取 stdin。空输入或目录无可检查文件返回 2，不算通过 |
| `--profile` | `for-chat`、`for-document`、`for-web-dev`、`for-instruction-writing` |
| `--style` | `relax-go` 默认弯引号；`tech-doc` 默认直角引号并给技术语境提示 |
| `--quotes` | `auto` 按风格；`curly` 弯引号；`corner` 直角引号；`preserve` 保留两类引号，不报其风格差异 |
| `--format` | `text` 可读报告（默认）或 `markdown` |
| `--json` | 完整结构化报告，包括 style、quotes、位置、rule、原句、建议、提取范围与计数；优先于 format |
| `--max-errors` | 非负安全整数；超过阈值返回 1，默认 0。不接受负数、小数、缺值或其他非法值 |
| `--no-warnings` | 隐藏普通 warning；计数保留，Anti-Echo pending 仍阻止通过 |
| `--anti-echo` | 未复核 G20 疑点返回 1 |
| `--review-decisions` | 已授权的 Anti-Echo 决定 JSON 路径；必须同时用 `--anti-echo` |
| `--` | 后续按路径处理，可检查以 `-` 开头的文件 |

重复路径按绝对定位去重。输入文件或父目录经过符号链接时拒绝读取，目录内符号链接不展开。目录递归只读 Markdown、文本和代码，跳过隐藏目录以及 `node_modules`、`dist`、`build`、`out`、`coverage`、`vendor`、`target`；不读取 FIFO 等非普通文件。

不指定场景时：`AGENTS.md`、`CLAUDE.md`、`SKILL.md` 使用指令场景；代码扩展名使用界面场景并提取字符串／JSX；其他使用文档场景。场景探测是候选，不证明字符串确实可见。

## 实际检查政策

| 规则 | 行为 |
| --- | --- |
| G3–G7 及 scoped 人称／I1 | 保留完整词表匹配、位置与原句，**warning**；先判断真实技术／官方／项目含义及原强度，不无条件替换 |
| G12 | 超过 40 的长度提示，**warning**；不截断解释／步骤，不强制 30 字步骤或 5 项列表 |
| G17 | 与选定 curly／corner 风格不同的引号为选定风格 **error**；`preserve` 不判两类引号错误。直引号给 warning |
| G19 | 中西文与数字边界无空格，warning；不修改字面量 |
| G20 | 可能无用的括号排除、自证、制作说明／界面标签，warning，启用 Anti-Echo 时 pending 阻止通过 |
| C3 | 可编辑对话感叹号，选定基线风格 error；固定语气／引用先保护 |
| D1／W1／W2／I2 | 人称、称呼混用、混合强度提示，warning；语境和项目约定优先 |

退出码：`0`＝未超过错误阈值且无待复核项；`1`＝超过错误阈值或有待复核项；`2`＝参数、输入、读取或运行失败。词语警告不使普通检查失败，含义由作者判断。

两类中文成对引号里的文字作为引用／词语提及跳过词表与代词；选定引号排版在可编辑周边单独检查。固定引语的两类引号可用 `--quotes preserve`，Markdown 引用块保持原文不查。不把技术术语加入全局白名单吞掉其他真正候选。需要 STC audit 与 tech-doc audit 时分别选择 style，不默默改成品约定。

`--style tech-doc` 适配引号与用词提示。语义、API 状态、段落格式和实际呈现按独立 tech-doc 要求人工复核。

<a id="anti-echo"></a>
## Anti-Echo 的内容绑定

先对明确选定的材料读取当前报告：

```sh
node waa-relax-go/tools/check.mjs 文档.md --anti-echo --json
```

报告 `antiEcho.pending` 给出 id、位置和原句。没用的内容删掉后重新检查；真实边界保留时，理由要写清删后如何导致具体误解、错误操作或未满足要求。只有任务已授权审稿记录文件时，才将当前 id 写入该过程文件；不为每次聊天创建文件。

```json
{
  "version": 1,
  "decisions": [
    {
      "id": "从当前报告复制的完整 64 位 id，不直接使用这段示例",
      "decision": "keep",
      "reason": "报价不含税，删去范围会让客户按含税总价安排预算。"
    }
  ]
}
```

该 JSON 是格式说明，示例 id 故意不是可放行的真实散列。传入错误 id、空 reason、重复 id、非 keep 或错误 version 会返回 2；不能把旧示例当已复核记录。

```sh
node waa-relax-go/tools/check.mjs 文档.md --anti-echo --review-decisions 审稿决定.json
```

id 绑定规范化路径、完整文件 SHA-256、位置、原句和触发文字。移动路径或文件任意变化会使旧 keep 无法匹配；新 pending 返回 1。`--no-warnings` 或放宽 error 阈值不能绕过 pending。文件路径为绝对定位，报告会包含本次指定文件的路径；不要把含隐私或凭证材料交给本工具，也不要无授权外传报告。

机器仅验证绑定、数据格式与非空理由，不能判断理由是否充分。未匹配多余内容仍须按 G20 人工看；非括号“没有东坡肉”可能不触发。这是继承的筛查限制，不是内容安全声明。

## 提取与保护限制

Markdown 跳过围栏／缩进代码、行内代码、URL／链接目标、引用块、frontmatter、注释和含 `✗` 的反例行；独立 `stc-disable-next-line` 注释跳过下一行。路径、简单模板占位符被位置保持的遮罩保护；直接指定 JSON 文件只标 `protected-json`，不检查键和值。被保护内容不算已经语义审阅。

代码字符串和 JSX 用轻量扫描器提取，遮罩简单路径／URL／插值和转义，保持定位。**不是 AST 或渲染器**：嵌套模板、复杂 JSX／HTML、实体、正则、多行引用、动态国际化与字符串拼接可能漏查或误查；不能确定某段是用户文案还是机器值。机器值始终不自动编辑，人工对完整字符串及真实页面复核（W8／W9）。JSON 保护、quote mode 和常见字面量已实测，不宣称任意语法均被保护。
