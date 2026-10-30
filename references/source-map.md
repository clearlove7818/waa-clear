# 全量来源与有效内容映射

这是维护用映射，不是工作规则或语义保真证明。每次使用必须按 [SKILL.md](../SKILL.md)的条件读取真正规则。全部源内容以本次本地冻结副本为准；原件／副本没有编辑，不声称匹配当前上游分支或 commit。许可、作者与 URL 见 [第三方通知](../THIRD_PARTY_NOTICES.md)。

## 冻结身份

冻结树摘要来自提供的非空逐文件 SHA-256 清单；完整清单和验证命令在任务过程资料。本包不含私人宿主路径、原始快照或报告。

| 输入 | 文件数 | 提供的树 SHA-256 |
| --- | --- | --- |
| STC-Simplified-Technical-Chinese | 51 | `0cee847cddf5464a842a9e718de3c28e62e02298498a998cc0cff81edeaec28f` |
| i-have-adhd | 3 | `900ab0d319628960d26b3ba2e197614e092f646df80858f3ffd835ec2e401dd3` |
| Tech-Doc-Style-Chinese | 15 | `a8d0f10fa79781e534f98ee2f3f318c09798face74766171e6e39adaa926200b` |
| 旧 waa-clear（仅对照） | 5 | `6e3b8784cc32c23d2f044303d1d2ee0246abd6f264fc5edd803e331be0e15f92` |

另有任务随附 `i-have-adhd.LICENSE`，完整复制到 [MIT 通知](../licenses/i-have-adhd-MIT.txt)；冻结 ADHD 没有 LICENSE。旧 clear 的 selective five-file scope 被拒绝，仅用以确认本次不得退回摘要，不把它当主体。

## STC 57 条规则

每行“源位置”均相对于 STC 输入根；源 heading 的 ID 不变。目标锚点包含完整指导、原因、演示与同处例外。样例 ID 是单独过程测试的索引，不是声称工具能证明该规则的全部语义。

| ID | 源位置 | 有效目标 | 保留／调整理由与样例 |
| --- | --- | --- | --- |
| G1 | `rules/for-all.md` G1 | [G1](../rules/for-all.md#g1) | 首选词一致，技术不同动作不合并；S01 |
| G2 | `rules/for-all.md` G2 | [G2](../rules/for-all.md#g2) | 使用已提供／获准术语表；缺表不扫不写治理；S02 |
| G3 | `rules/for-all.md` G3 | [G3](../rules/for-all.md#g3) | 全量 scoped 词表，先判义，防盲替；S03、CLI-L |
| G4 | `rules/for-all.md` G4 | [G4](../rules/for-all.md#g4) | 直接动词与对象，固定术语／状态保留；S04、CLI-P |
| G5 | `rules/for-all.md` G5 | [G5](../rules/for-all.md#g5) | 有据具体，缺项／未知，不编数字或强结论；S05、S06 |
| G6 | `rules/for-all.md` G6 | [G6](../rules/for-all.md#g6) | 删空话，保实际技术词与真实边界；S03、CLI-L |
| G7 | `rules/for-all.md` G7 | [G7](../rules/for-all.md#g7) | 空口号不代事实，有用对比保留；S07 |
| G8 | `rules/for-all.md` G8 | [G8](../rules/for-all.md#g8) | 首次缩写解释，不猜全称；S01 |
| G9 | `rules/for-all.md` G9 | [G9](../rules/for-all.md#g9) | 清楚主干、独立动作拆分；保完整关系；S08 |
| G10 | `rules/for-all.md` G10 | [G10](../rules/for-all.md#g10) | 条件先行，前提保留；S08、S09 |
| G11 | `rules/for-all.md` G11 | [G11](../rules/for-all.md#g11) | 主动句写清谁做什么；S01 |
| G12 | `rules/for-all.md` G12 | [G12](../rules/for-all.md#g12) | 保 40／30 推荐，不硬上限；S08、CLI-W |
| G13 | `rules/for-all.md` G13 | [G13](../rules/for-all.md#g13) | 保 3 层推荐与拆主句；名称／限定优先；S08 |
| G14 | `rules/for-all.md` G14 | [G14](../rules/for-all.md#g14) | 否定、范围、权限、字面精确；S09、S22 |
| G15 | `rules/for-all.md` G15 | [G15](../rules/for-all.md#g15) | 保可能／频率，不造确定性；S06、S10 |
| G16 | `rules/for-all.md` G16 | [G16](../rules/for-all.md#g16) | 明确指代，歧义重复名称；S01 |
| G17 | `rules/for-all.md` G17 | [G17](../rules/for-all.md#g17) | 基线弯／tech-doc 角／项目和固定引文优先；S11、CLI-Q |
| G18 | `rules/for-all.md` G18 | [G18](../rules/for-all.md#g18) | 数字单位，保护精度／范围；S09、S22 |
| G19 | `rules/for-all.md` G19 | [G19](../rules/for-all.md#g19) | 可见边界留白，不改机器内部；S22、CLI-X |
| G20 | `rules/for-all.md` G20 | [G20](../rules/for-all.md#g20) | 按读者删冗余；必要风险／证据／示例界限保留；不强制新记录；S12、CLI-A |
| G21 | `rules/for-all.md` G21 | [G21](../rules/for-all.md#g21) | 自然完整句子，不编观点／过程；S04 |
| G22 | `rules/for-all.md` G22 | [G22](../rules/for-all.md#g22) | 完整文稿／解释／步骤，足够就停；S08、S13 |
| C1 | `rules/for-chat.md` C1 | [C1](../rules/for-chat.md#c1) | 普通对话我／你，保宿主身份／前缀；S14 |
| C2 | `rules/for-chat.md` C2 | [C2](../rules/for-chat.md#c2) | 问答／安全动作／验证结果首行；S14、S15 |
| C3 | `rules/for-chat.md` C3 | [C3](../rules/for-chat.md#c3) | 无客套，固定语气／通知保留；S14、CLI-P |
| C4 | `rules/for-chat.md` C4 | [C4](../rules/for-chat.md#c4) | 观察证据／材料归属／当前来源，不编引用；S10、S15 |
| C5 | `rules/for-chat.md` C5 | [C5](../rules/for-chat.md#c5) | 300 字只分组，不擅写文件或替代完整聊天；S13 |
| C6 | `rules/for-chat.md` C6 | [C6](../rules/for-chat.md#c6) | 实质通知＋真实依赖，不重复批准；S16 |
| C7 | `rules/for-chat.md` C7 | [C7](../rules/for-chat.md#c7) | 结论一次，按需回顾；S17 |
| C8 | `rules/for-chat.md` C8 | [C8](../rules/for-chat.md#c8) | 有用变化与恢复，清单不重复旁白；S17 |
| C9 | `rules/for-chat.md` C9 | [C9](../rules/for-chat.md#c9) | 结构随内容和指定格式；S14、S22 |
| C10 | `rules/for-chat.md` C10 | [C10](../rules/for-chat.md#c10) | 全部真实动作可见；保三段选项，默认省空段；S15、S18 |
| D1 | `rules/for-document.md` D1 | [D1](../rules/for-document.md#d1) | 文档可独立读主体，专门中性角色优先；S19 |
| D2 | `rules/for-document.md` D2 | [D2](../rules/for-document.md#d2) | 结论／证据，不伪确定；S19 |
| D3 | `rules/for-document.md` D3 | [D3](../rules/for-document.md#d3) | 一段一主题，6 句推荐／技术一段一行；S19、S23 |
| D4 | `rules/for-document.md` D4 | [D4](../rules/for-document.md#d4) | 并列列表，多步编号不漏七步；S08 |
| D5 | `rules/for-document.md` D5 | [D5](../rules/for-document.md#d5) | 双动作验证邮件步骤拆开，前提／恢复完整；S08 |
| D6 | `rules/for-document.md` D6 | [D6](../rules/for-document.md#d6) | 风险先行，恢复来自产品，不按词猜永久；S09、S20 |
| D7 | `rules/for-document.md` D7 | [D7](../rules/for-document.md#d7) | 警告／注意／说明按实际风险；S20 |
| D8 | `rules/for-document.md` D8 | [D8](../rules/for-document.md#d8) | 注释机制／提交草稿改动先，不授予 Git；S19 |
| W1 | `rules/for-web-dev.md` W1 | [W1](../rules/for-web-dev.md#w1) | 主体明确，固定引用／项目文体保留；S21、CLI-P |
| W2 | `rules/for-web-dev.md` W2 | [W2](../rules/for-web-dev.md#w2) | 用户称呼一致，不冒称全站；S21 |
| W3 | `rules/for-web-dev.md` W3 | [W3](../rules/for-web-dev.md#w3) | 按钮动作＋对象，6 字推荐；不反推行为；S20 |
| W4 | `rules/for-web-dev.md` W4 | [W4](../rules/for-web-dev.md#w4) | 功能同名，覆盖范围诚实；S21 |
| W5 | `rules/for-web-dev.md` W5 | [W5](../rules/for-web-dev.md#w5) | 现象、未知／证据原因、已有恢复；S10、S24 |
| W6 | `rules/for-web-dev.md` W6 | [W6](../rules/for-web-dev.md#w6) | 真空白分类，不虚构 onboarding；S24 |
| W7 | `rules/for-web-dev.md` W7 | [W7](../rules/for-web-dev.md#w7) | 提示定义／读法，控件动作，必要可访问帮助保留；S21 |
| W8 | `rules/for-web-dev.md` W8 | [W8](../rules/for-web-dev.md#w8) | 完整字符串、保护占位符，不授予代码编辑；S22、CLI-X |
| W9 | `rules/for-web-dev.md` W9 | [W9](../rules/for-web-dev.md#w9) | 用户用途与渲染逐表面，未见诚实未验证；S25、CLI-X |
| I1 | `rules/for-instruction-writing.md` I1 | [I1](../rules/for-instruction-writing.md#i1) | 四组强度保原级别，保护英文治理；S26、CLI-P |
| I2 | `rules/for-instruction-writing.md` I2 | [I2](../rules/for-instruction-writing.md#i2) | 混合强度先确认，不升级或改变权限；S26 |
| I3 | `rules/for-instruction-writing.md` I3 | [I3](../rules/for-instruction-writing.md#i3) | 一要求＋同处例外，不借示例 24 小时；S26 |
| I4 | `rules/for-instruction-writing.md` I4 | [I4](../rules/for-instruction-writing.md#i4) | 条件／对象／动作，缺触发不编；S26 |
| I5 | `rules/for-instruction-writing.md` I5 | [I5](../rules/for-instruction-writing.md#i5) | 理由分开，因果有据；S26 |
| I6 | `rules/for-instruction-writing.md` I6 | [I6](../rules/for-instruction-writing.md#i6) | 名称路径可定位，机器标识精确；S22、S26 |
| I7 | `rules/for-instruction-writing.md` I7 | [I7](../rules/for-instruction-writing.md#i7) | 单一权威＋指向，不复制冲突规则；S26 |
| I8 | `rules/for-instruction-writing.md` I8 | [I8](../rules/for-instruction-writing.md#i8) | 可核对，取消无事实基础的新 50 行上限；S26 |

## 全部词表条目

条目锚点使用 YAML 中从 1 开始的条目顺序，不增加机器字段。**每行均保留全字段与全部 examples，不是只保留词名。** 适用性共同见 [有效词表裁决](../dictionary/README.md#applicability)。静态 `DICT` 检查全量 YAML／JSON 数据相等、来源字节相等；CLI-L 测语境分支，S03／S05／S20／S26 人工检查语义。

### avoid.yaml：51 条

| 条目 | 源与有效目标（同序完整字段） | 改编处置与性质 |
| --- | --- | --- |
| AV01 | [avoid.yaml](../dictionary/avoid.yaml) #1 应／应当／务必／一定要 | 字节保留；指令强度按原级别；DICT、S26 |
| AV02 | [avoid.yaml](../dictionary/avoid.yaml) #2 应该 | 字节保留；不得把推荐升级为要求；DICT、S26 |
| AV03 | [avoid.yaml](../dictionary/avoid.yaml) #3 我们 | 字节保留；按 profile、角色与引用；DICT、S21 |
| AV04 | [avoid.yaml](../dictionary/avoid.yaml) #4 建议／最好／尽量 | 字节保留；原强度优先，不新设公开函数范围；DICT、S26 |
| AV05 | [avoid.yaml](../dictionary/avoid.yaml) #5 不应／不要／禁止／严禁／切勿 | 字节保留；不改原禁止范围；DICT、S26 |
| AV06 | [avoid.yaml](../dictionary/avoid.yaml) #6 部分（数量） | 字节保留；章节与未知人数不编；DICT、S05 |
| AV07 | [avoid.yaml](../dictionary/avoid.yaml) #7 相关 | 字节保留；数学／技术与对象不明区分；DICT、S03 |
| AV08 | [avoid.yaml](../dictionary/avoid.yaml) #8 优化／提升／改善 | 字节保留；定性／变化事实不编；DICT、S06 |
| AV09 | [avoid.yaml](../dictionary/avoid.yaml) #9 沉淀 | 字节保留；化学含义优先，真空话改具体；DICT、S03 |
| AV10 | [avoid.yaml](../dictionary/avoid.yaml) #10 落地 | 字节保留；不从例句借下周一；DICT、S06 |
| AV11 | [avoid.yaml](../dictionary/avoid.yaml) #11 链路 | 字节保留；网络链路可用；DICT、CLI-L |
| AV12 | [avoid.yaml](../dictionary/avoid.yaml) #12 对齐 | 字节保留；像素意义保留，口径判义；DICT、S03 |
| AV13 | [avoid.yaml](../dictionary/avoid.yaml) #13 进行＋动作名词 | 字节保留；状态“进行中”保留；DICT、S04 |
| AV14 | [avoid.yaml](../dictionary/avoid.yaml) #14 闭环 | 字节保留；反馈控制可用，不造 3 天期限；DICT、S03 |
| AV15 | [avoid.yaml](../dictionary/avoid.yaml) #15 不是 X，而是 Y | 字节保留；有用事实对比不删；DICT、S07 |
| AV16 | [avoid.yaml](../dictionary/avoid.yaml) #16 一些 | 字节保留；缺数量／列表明确未知；DICT、S05 |
| AV17 | [avoid.yaml](../dictionary/avoid.yaml) #17 大家 | 字节保留；profile／原话／项目优先；DICT、S21 |
| AV18 | [avoid.yaml](../dictionary/avoid.yaml) #18 非常／极其／十分 | 字节保留；删强调不补新速度事实；DICT、S06 |
| AV19 | [avoid.yaml](../dictionary/avoid.yaml) #19 显著 | 字节保留；统计意义和未测量区分；DICT、S06 |
| AV20 | [avoid.yaml](../dictionary/avoid.yaml) #20 大量 | 字节保留；不能借 320；DICT、S05 |
| AV21 | [avoid.yaml](../dictionary/avoid.yaml) #21 你们 | 字节保留；文档中性主体／UI 项目称呼；DICT、S21 |
| AV22 | [avoid.yaml](../dictionary/avoid.yaml) #22 对于……而言 | 字节保留；改主干不编“觉得”的主体事实；DICT、S04 |
| AV23 | [avoid.yaml](../dictionary/avoid.yaml) #23 进一步 | 字节保留；确有下一步时保留含义，不造批量导出；DICT、S06 |
| AV24 | [avoid.yaml](../dictionary/avoid.yaml) #24 颗粒度 | 字节保留；技术粒度不一律禁；DICT、CLI-L |
| AV25 | [avoid.yaml](../dictionary/avoid.yaml) #25 大幅 | 字节保留；缺幅度不借 40%；DICT、S05 |
| AV26 | [avoid.yaml](../dictionary/avoid.yaml) #26 开展＋名词 | 字节保留；直接动词保对象；DICT、S04 |
| AV27 | [avoid.yaml](../dictionary/avoid.yaml) #27 做出／作出＋名词 | 字节保留；句意与对象优先；DICT、S04 |
| AV28 | [avoid.yaml](../dictionary/avoid.yaml) #28 底层逻辑 | 字节保留；机制须有据，不造 2 分钟；DICT、S10 |
| AV29 | [avoid.yaml](../dictionary/avoid.yaml) #29 予以／加以＋动作名词 | 字节保留；直接动词不改问题对象；DICT、S04 |
| AV30 | [avoid.yaml](../dictionary/avoid.yaml) #30 打造 | 字节保留；不凭词改成“重新开发”；DICT、S06 |
| AV31 | [avoid.yaml](../dictionary/avoid.yaml) #31 出错／异常（UI） | 字节保留；实际失败／原因／恢复，不借 1 分钟；DICT、S24 |
| AV32 | [avoid.yaml](../dictionary/avoid.yaml) #32 实现＋名词 | 字节保留；技术实现与未知增长区分；DICT、CLI-L |
| AV33 | [avoid.yaml](../dictionary/avoid.yaml) #33 适当／必要时／视情况 | 字节保留；触发标准不编；DICT、S26 |
| AV34 | [avoid.yaml](../dictionary/avoid.yaml) #34 赋能 | 字节保留；官方名保留，真空话待确认；DICT、CLI-L |
| AV35 | [avoid.yaml](../dictionary/avoid.yaml) #35 随着……的发展 | 字节保留；有意义背景与空壳区分；DICT、S12 |
| AV36 | [avoid.yaml](../dictionary/avoid.yaml) #36 抓手 | 字节保留；具体措施须有据，不新增 30 天提醒；DICT、S06 |
| AV37 | [avoid.yaml](../dictionary/avoid.yaml) #37 在……的背景下 | 字节保留；不借 10% 或同类降价原因；DICT、S10 |
| AV38 | [avoid.yaml](../dictionary/avoid.yaml) #38 助力 | 字节保留；不借 20 小时效果；DICT、S05 |
| AV39 | [avoid.yaml](../dictionary/avoid.yaml) #39 一站式 | 字节保留；已有功能列明，未给的不补；DICT、S06 |
| AV40 | [avoid.yaml](../dictionary/avoid.yaml) #40 极致 | 字节保留；无测量不造 1 秒；DICT、S05 |
| AV41 | [avoid.yaml](../dictionary/avoid.yaml) #41 若干 | 字节保留；缺数未知不造 4；DICT、S05 |
| AV42 | [avoid.yaml](../dictionary/avoid.yaml) #42 无缝 | 字节保留；不补同步周期或手动行为；DICT、S06 |
| AV43 | [avoid.yaml](../dictionary/avoid.yaml) #43 值得注意／需要注意／需要指出 | 字节保留；风险实质保留，删无用铺垫；DICT、S12 |
| AV44 | [avoid.yaml](../dictionary/avoid.yaml) #44 一定程度上 | 字节保留；有意义定性与未知量化不删义；DICT、S06 |
| AV45 | [avoid.yaml](../dictionary/avoid.yaml) #45 起到……的作用 | 字节保留；因果不从例句扩成万能保护；DICT、S10 |
| AV46 | [avoid.yaml](../dictionary/avoid.yaml) #46 综上所述／总的来说 | 字节保留；请求回顾保留，已知结论先；DICT、S17 |
| AV47 | [avoid.yaml](../dictionary/avoid.yaml) #47 众所周知 | 字节保留；未查不造 68%／后台出处；DICT、S10 |
| AV48 | [avoid.yaml](../dictionary/avoid.yaml) #48 全方位 | 字节保留；已知具体方面，不造夜间客服；DICT、S06 |
| AV49 | [avoid.yaml](../dictionary/avoid.yaml) #49 成功地／有效地 | 字节保留；不增加成功事实；DICT、S15 |
| AV50 | [avoid.yaml](../dictionary/avoid.yaml) #50 基于……的情况下 | 字节保留；条件和原数字保持；DICT、S09 |
| AV51 | [avoid.yaml](../dictionary/avoid.yaml) #51 不仅是……更是／不只是……更是 | 字节保留；空口号与有用递进区分；DICT、S07 |

### recommended.yaml：29 条

所有行保留 `word`、`pos`、`meaning`、已有 `not_same_as`、`example`、`profiles`。含义是使用约定，不能覆盖已知产品事实；例句的恢复、可见范围与时间不直接借用。

| 条目 | 源与有效目标（同序） | 实际适用裁决／检查 |
| --- | --- | --- |
| RE01 | [recommended.yaml](../dictionary/recommended.yaml) #1 删除 | 产品可能可恢复，不反推永久；DICT、S20 |
| RE02 | [recommended.yaml](../dictionary/recommended.yaml) #2 移除 | 组中取出和对象去掉不同；DICT、S20 |
| RE03 | [recommended.yaml](../dictionary/recommended.yaml) #3 清空 | 容器保留，恢复事实待核；DICT、S20 |
| RE04 | [recommended.yaml](../dictionary/recommended.yaml) #4 保存 | 实际草稿／修改行为；DICT、S21 |
| RE05 | [recommended.yaml](../dictionary/recommended.yaml) #5 提交 | 交处理不等发布，不借 1 工作日；DICT、S21 |
| RE06 | [recommended.yaml](../dictionary/recommended.yaml) #6 发布 | 目标可见范围真实，不默认所有访客；DICT、S21 |
| RE07 | [recommended.yaml](../dictionary/recommended.yaml) #7 取消 | 部分数据是否保留有据；DICT、S20 |
| RE08 | [recommended.yaml](../dictionary/recommended.yaml) #8 撤销 | 回到前状态实际能力；DICT、S20 |
| RE09 | [recommended.yaml](../dictionary/recommended.yaml) #9 关闭 | 窗口状态与未保存数据按真实行为；DICT、S20 |
| RE10 | [recommended.yaml](../dictionary/recommended.yaml) #10 打开 | 页面显示不同于启用；DICT、S21 |
| RE11 | [recommended.yaml](../dictionary/recommended.yaml) #11 启用 | 功能生效条件有据，不借短信方式；DICT、S21 |
| RE12 | [recommended.yaml](../dictionary/recommended.yaml) #12 停用 | 数据／重新启用以产品为准；DICT、S21 |
| RE13 | [recommended.yaml](../dictionary/recommended.yaml) #13 新建 | 新对象不同已有添加；DICT、S21 |
| RE14 | [recommended.yaml](../dictionary/recommended.yaml) #14 添加 | 对象已有与集合关系；DICT、S21 |
| RE15 | [recommended.yaml](../dictionary/recommended.yaml) #15 编辑 | 修改已有内容，scope 有界；DICT、S23 |
| RE16 | [recommended.yaml](../dictionary/recommended.yaml) #16 上传 | 原样传输与转换区别；DICT、S21 |
| RE17 | [recommended.yaml](../dictionary/recommended.yaml) #17 导入 | 转换对象依事实；DICT、S21 |
| RE18 | [recommended.yaml](../dictionary/recommended.yaml) #18 下载 | 原文件到本地；DICT、S21 |
| RE19 | [recommended.yaml](../dictionary/recommended.yaml) #19 导出 | 转换再存文件，不改行为；DICT、S21 |
| RE20 | [recommended.yaml](../dictionary/recommended.yaml) #20 检查 | 符合性判断，区别批准；DICT、S26 |
| RE21 | [recommended.yaml](../dictionary/recommended.yaml) #21 审核 | 有权限人员通过决定；DICT、S26 |
| RE22 | [recommended.yaml](../dictionary/recommended.yaml) #22 确认 | 实际语境可能核实，不能新设授权门槛；DICT、S16 |
| RE23 | [recommended.yaml](../dictionary/recommended.yaml) #23 同步 | 两处一致机制、周期不编；DICT、S21 |
| RE24 | [recommended.yaml](../dictionary/recommended.yaml) #24 刷新 | 重新显示不同于更新对象；DICT、S21 |
| RE25 | [recommended.yaml](../dictionary/recommended.yaml) #25 更新 | 版本／值实际变化；DICT、S21 |
| RE26 | [recommended.yaml](../dictionary/recommended.yaml) #26 失败 | 未达预期，不证明因果／零副作用；DICT、S10 |
| RE27 | [recommended.yaml](../dictionary/recommended.yaml) #27 警告 | 真实数据／安全／不可逆风险；DICT、S20 |
| RE28 | [recommended.yaml](../dictionary/recommended.yaml) #28 注意 | 操作失败／预期偏差风险；DICT、S20 |
| RE29 | [recommended.yaml](../dictionary/recommended.yaml) #29 说明 | 补充背景，不藏必要动作；DICT、S21 |

### terms.example.yaml：3 条

| 条目 | 源与有效目标 | 全字段／用途 |
| --- | --- | --- |
| TE01 | [terms.example.yaml](../dictionary/terms.example.yaml) #1 项目 | `term/meaning/not/en` 原样；只在用户请求模板时读取；DICT、S02 |
| TE02 | [terms.example.yaml](../dictionary/terms.example.yaml) #2 成员 | 同上，不当实际权限模型；DICT、S02 |
| TE03 | [terms.example.yaml](../dictionary/terms.example.yaml) #3 报告 | 同上，不覆盖项目正式“报表”；DICT、S02 |

<a id="adhd"></a>
## ADHD 全部行为／例外／检查

源位置相对于 i-have-adhd 的 `SKILL.md`。source title 和原始编号逐项定位；目标不是把整块标“受启发”。状态唯一完整定义在 activation-and-scope。

| 映射 | 原段落 | 有效内容 | 调整原因／样例 |
| --- | --- | --- | --- |
| AP | `Persistence` 两段 | [范围与停止](activation-and-scope.md) | 明确请求才会话持续，跨主题保留，停止只结束本模式；S27、S28 |
| R1 | `What ADHD changes about reading` #1 | [R1](interaction.md#r1) | 回看负担考虑，不断言屏幕外全忘；S17 |
| R2 | 同段 #2 | [R2](interaction.md#r2) | 理解到操作有成本，不将问答变作业；S14 |
| R3 | 同段 #3 | [R3](interaction.md#r3) | 起点可定位，不造小于 2 分钟；S16 |
| R4 | 同段 #4 | [R4](interaction.md#r4) | 含糊时间不利安排，不断言读者时间感；S29 |
| R5 | 同段 #5 | [R5](interaction.md#r5) | 可见完成，不借多巴胺断言；S15 |
| A1 | Rules #1 `Lead with the next action` | [A1](interaction.md#a1) | 答案／安全行动／真实结果；固定输出优先；S14、S22 |
| A2 | Rules #2 `Number multi-step tasks` | [A2](interaction.md#a2) | 有界编号，保前提／恢复，不能缩到失败；S08 |
| A3 | Rules #3 `End with one concrete next action` | [A3](interaction.md#a3) | 有真实依赖才末行动，不造 2 分钟／新任务；S15、S16 |
| A4 | Rules #4 `Suppress tangents` 两段 | [A4](interaction.md#a4) | 完授权目标、整合中间问题，风险不隐藏；S16 |
| A5 | Rules #5 `Restate state every turn`＋harness 例外 | [A5](interaction.md#a5) | 实质进展／恢复，清单避免双旁白；S17 |
| A6 | Rules #6 `Give specific time estimates` | [A6](interaction.md#a6) | 执行者、范围、依据／条件，未知如实；S29 |
| A7 | Rules #7 `Make completed work visible` | [A7](interaction.md#a7) | 验证结果与入口，文件不等运行；S15、S25 |
| A8 | Rules #8 `Matter-of-fact tone for errors` | [A8](interaction.md#a8) | 现象／已知或未知原因／已有恢复，不猜根因；S10 |
| A9 | Rules #9 `Cap lists to 5 items` 两段 | [A9](interaction.md#a9) | 小分组但相关内容全部可见；S08、S18 |
| A10 | Rules #10 `No preamble, no recap, no closing pleasantries` | [A10](interaction.md#a10) | 保真实 notice／请求 recap，完就停；S14、S17 |
| AX1 | `When to break the rules` #1 | [AX1](interaction.md#ax1) | 完整解释，概念不是步骤；S13 |
| AX2 | 同段 #2 | [AX2](interaction.md#ax2) | 安全／授权优先，不重复批准；S09、S16 |
| AX3 | 同段 #3 | [AX3](interaction.md#ax3) | 三次只是触发，证据早来就重查；S30 |
| AX4 | 同段 #4 | [AX4](interaction.md#ax4) | 一个实质澄清或有界假设，不危险猜测；S31 |
| AX5 | 同段 #5 | [AX5](interaction.md#ax5) | 全部相关选项／精确输出优先；S18、S22 |
| AX6 | 同段 #6 | [AX6](interaction.md#ax6) | 宿主通知／执行优先，权限不扩大；S22、S32 |
| P1 | `Pre-send check` delete #1 | [P1](interaction.md#p1) | 删无用将要公告，保必须通知；S14、S32 |
| P2 | 同段 delete #2 | [P2](interaction.md#p2) | 删客套／重复，保用户依赖／请求回顾；S15、S17 |
| P3 | 同段 delete #3 | [P3](interaction.md#p3) | 删无关旁支，保风险／证据；S12 |
| P4 | 同段 delete #4 | [P4](interaction.md#p4) | 保真实 hedge 防造确定性；S06、S10 |
| P5 | 同段 delete #5 | [P5](interaction.md#p5) | 字面动作不盲改技术／固定引语；S03 |
| P6 | 同段 first/last-line check | [P6](interaction.md#p6) | 按任务验首末，无依赖不造动作；S14、S15 |

`agents/gemini.toml`／`agents/openai.yaml` 是平台接口与重复行为，不复制；正文中的全部相关行为已按上表保留。它们的 platform-specific slash／unconditional mode 不覆盖本包自然语言 scope。

## 其他来源与工具处置

| 来源组件 | 去向与理由 |
| --- | --- |
| STC `SKILL.md` 场景读取／写改审／自查 | [入口](../SKILL.md)、[编辑流程](editing-workflow.md)；保 mandatory full reads，新增校对 scope，去 init/onboarding/default write |
| STC `rules/README.md` 强度／场景总览 | 入口＋各规则文件；规则 ID 完整，无额外未读归档 |
| STC `dictionary/README.md` 格式／类别／添加 | [词表指南](../dictionary/README.md)；保全部字段与 12 类，应用按语境 |
| STC `tools/check/src/{core,extract,advice,report,anti-echo,cli}.mjs` | [tools](../tools/README.md) 对应模块；保提取／报告／Anti-Echo，实改 style／quotes／语境／只读输入验证 |
| STC `tools/check/data/*.json` | 同路径全量复制，DICT 验每个 YAML 字段一致，不部分再造 |
| STC `tools/cli.mjs` | 新窄入口 `tools/check.mjs` 只调用 check；没有 init／package／homepage／hook |
| STC code tests | 在单独过程目录适配 core／CLI／report／Anti-Echo 测试；hook／init／web／bundle 不在产品 scope |
| STC build-data／build-skill／build-web、package／lock、init、hooks、snippets／WEB／ONBOARDING、assets／video | 不复制；依赖生成、安装、默认写入、hook、web 发布或重复入口，与本地个人目标无关；完整 prose／词表不删 |
| 独立 tech-doc 入口与四个 references | [协作接口](tech-doc-compatibility.md)按条件发现并读取；不复制／改写独立规则库；mode 不等 full tech-doc check |
| 旧 clear | 只对照被拒绝的选择性摘要，未沿用五文件／无需上游读取 scope，未修改 |

## 验证索引的性质

过程资料的 `verify-package.py` 检查真实非空文件、全部 ID／字段、链接／必读可达、许可、源身份、污染边界，并用破坏后的包作能失败的负例；不判断全部语义。`tests/checker.test.mjs` 与 `run-evidence.py` 实际同步执行 CLI 分支，记录命令／输出／退出码。`semantic-cases.json` 的 S01–S36 是惰性人工性质／反例，`semantic-review-v1.md` 是生产者语义复核，不是模型运行。`producer-responses-v1.md` 单独标注有限当前生产上下文的真实示例，不是 blind／isolated／跨平台／独立评估。`trigger-*.json`／yao `trigger_eval.py` 是词法代理，仅测试 description 和配置的词语覆盖，并保留已知误报。

本表和各规则原文须由接收者核对；map 完整不等于改编语义被证明。以后任务的源快照／样例／报告变化必须重新记录身份，不沿用本轮 hash 或通过结论。
