# 来源、许可与致谢

本包是个人改编版本，不是上游发布，不代表上游作者认可，也不声称 STC、tech-doc、GB/T 或 ASD-STE100 的合规认证。规则、词表和中文整合说明按 [CC BY 4.0 完整文本](LICENSE)提供；引用的第三方许可与免责声明保留。

## STC — Simplified Technical Chinese

- 原作者／维护者：Daimonia（杭州代梦智能科技有限公司）。
- 来源标识：[daimonia-ai/STC-Simplified-Technical-Chinese](https://github.com/daimonia-ai/STC-Simplified-Technical-Chinese)。URL 用于出处，不表示本次联网核对了最新分支。
- 改编材料：全部 G1–G22、C1–C10、D1–D8、W1–W9、I1–I8；完整三份 YAML 词表；场景读取和编辑流程；独立检查模块及完整派生数据。
- 规则／词表：CC BY 4.0。完整许可和免责声明见 [LICENSE](LICENSE)。三份 YAML 逐字节保留冻结输入。
- 源技能／代码：MIT，完整原通知见 [STC-MIT.txt](licenses/STC-MIT.txt)，含版权、授予与免责声明。原文中的“this repository”指 STC；其 writing rules and dictionary 仍属 CC BY 4.0。机器 JSON 反映 CC 词表内容，不因文件格式变成 MIT 词表。
- 改动：保留全部实质规则与例子；把 G2 改为使用已有授权术语表；词表按语境和事实裁决；句长／分组为推荐；引号随场景和项目；C10 保留完整三段选项但默认去掉空段；不编程度、原因、时间或不可逆性；D5 拆开双动作步骤；W5／W6／W9 区分未知、空状态和实际渲染。
- 工具改动：基于完整 STC 模块增加 style／quotes、上下文建议、两类引用保护、输入验证／符号链接边界、明确提取范围；保留报告和内容绑定 Anti-Echo。不复制 init、hooks、构建／安装器、依赖、视频或提供者调用。

## i-have-adhd

- 作者：Ayoub Ghriss。
- 来源标识：[ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd)。
- 原许可 MIT，完整版权和授权／免责声明见 [i-have-adhd-MIT.txt](licenses/i-have-adhd-MIT.txt)。冻结目录没有 LICENSE；使用任务随附的完整 MIT 文本作为许可证据，不声称本次向上游核验。
- 改编全部十条行为、六个例外、五种阅读顾虑、持续／退出与六项发出前核对，逐项映射，不只使用“灵感”。
- 改动：不借用诊断身份、记忆或神经化学普遍断言；把阅读顾虑转成可访问性设计考虑；一律 action-first 改为按任务答案／动作／结果；会话持续需明确请求；进度只在有用变化和恢复时；时间有依据才估；无真实用户依赖不造末行动；五项靠分组不截断。保留完整解释、安全与宿主例外。
- 不复制其平台 command／interface 文件；它们的偏好不覆盖本包的模型发现、自然语言 scope 和边界。

## 独立 Tech-Doc-Style-Chinese

- 作者 Fenng；来源标识：[Fenng/tech-doc-style-chinese](https://github.com/Fenng/tech-doc-style-chinese)。
- 它是独立可选协作对象，不打包其 Skill、规则库、脚本、平台配置或安装流程。
- 本包的协作比较／接口说明参考其读取路由、引号、主体、保护内容、任务模式和技术语境原则；为该比较说明保留 [tech-doc-MIT.txt](licenses/tech-doc-MIT.txt)完整原许可。许可文本不是合并其技能。

## 来源身份与维护

本次依据本地冻结内容，不是经联网核对的上游 commit。各源文件定位、冻结树身份、全量条目和改编去向见 [source-map.md](references/source-map.md)。原件与冻结副本不作为编辑目标。以后更新要重新核对源规则、词条／JSON、交互和 checker 的冲突裁决，不自动同步或安装。

新入口与检查器适配代码使用 [LICENSE-CODE](LICENSE-CODE)中的 MIT 授权；原 STC、ADHD 与 Fenng 版权通知依然适用。整合后的规则／说明作为 CC BY 4.0 改编内容，使用者仍需注明出处与改动；上述 MIT 来源部分的原有许可不被取消。

## 致谢

感谢 Daimonia 提供完整中文规范、词表与可离线检查工具；感谢 Ayoub Ghriss 提供降低行动／阅读负担的交互方法；感谢 Fenng 提供独立中文技术写作规范和明确语境边界。本次使用 yao-meta-skill 的个人 Scaffold 方法及 writing-for-agents 的强读取指向／同处例外方法，没有复制它们的工具或规则库。

STC 上游还致谢 Caveman 与 Daimonia humanize，并参考 GB/T 1.1—2020、GB/T 15834—2011、GB/T 15835—2011。本包保留这条来源说明，不声称查阅了这些完整标准。STC 参考 ASD-STE100 的结构但不分发其文本；本包也不含 ASD-STE100 正文或词典。ASD-STE100 的版权／商标属于 ASD，本包不是其官方中文版。
