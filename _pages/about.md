---
permalink: /
title: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---
## 个人简介 (About Me)  


　　西北师范大学心理学学术型的在读博士研究生（二年级），主要从事执行功能与精神分裂症相关研究。研究中综合运用行为实验、脑影像（fMRI）、计算建模、机器学习和大语言模型等技术手段，致力于揭示认知功能的发展机制及其在精神疾病中的表现特征。

<a id="pub-papers"></a>
> **Email：** tyzhang9804@gmail.com  
<br>
<br>

## 科研论文（Research Publications）

### 已发表的论文 (Published Papers)

> **#1.** **Zhang, T.**, Yang, X., Mu, P., Huo, X., & Zhao, X. (2025). Stage-specific computational mechanisms of working memory deficits in first-episode and chronic schizophrenia. *Schizophrenia Research*, *282*, 203–213. [https://doi.org/10.1016/j.schres.2025.06.012](https://doi.org/10.1016/j.schres.2025.06.012)  <br>
> [下载论文 (PDF)](https://tyzhang98.github.io/zhang/files/paper1.pdf) | [论文代码](https://github.com/tyzhang98/Two-back-task-HDDM)  
> *[ 中科院二区，影响因子 3.5 \| 独立一作 ]*  
>  
<details>
<summary>Abstract（点击展开/折叠）</summary>
Background: Cognitive dysfunction, particularly working memory (WM) impairment, constitutes a core feature of schizophrenia and is largely unresponsive to available antipsychotic treatments. The computational mechanisms underlying WM deficits at different illness stages and their associations with clinical symptom dimensions remain poorly understood.<br>
Methods: We applied hierarchical drift diffusion modeling (HDDM) to dissect latent cognitive processes underlying WM performance in a two-back task among patients with first-episode schizophrenia (FES, N = 103, illness duration ≤2 years), chronic schizophrenia (ChSz, N = 108, illness duration ≥5 years), and healthy controls (HCs, N = 85). Multiple regression and mediation analyses were conducted to examine associations between HDDM parameters, clinical symptoms, and conventional metrics. <br>
Results: Both patient groups exhibited significant WM deficits compared to HCs, with ChSz patients demonstrating more pronounced impairments than FES patients. HDDM analysis revealed that patients showed significantly reduced drift rate and prolonged non-decision time compared to HCs. Notably, while non-decision time remained comparable between FES and ChSz groups, drift rate was significantly lower in ChSz patients, mediated the relationship between illness stage and WM performance, and negatively correlated with negative symptoms and general psychopathology. <br>
Conclusions: This study reveals distinct computational profiles of WM deficits across different stages of schizophrenia. While non-decision time impairments emerge early and persist, reduced drift rate progressively deteriorates with illness duration and is closely linked to specific clinical symptoms. These findings enhance our understanding of WM dysfunction across illness stages and support the development of targeted cognitive interventions tailored to illness stage and symptom severity.<br>


</details>

![研究设计及分析流程示意图](/zhang/images/Page1-Figure1.jpg)



### 审稿中的论文 (Under Review)

>**#1.** **Zhang, T.**, Zhao, X., Yeo, B. T. T., Huo, X., Eickhoff, S. B., & Chen, J. (2024). Leveraging stacked classifiers for multi-task executive function in schizophrenia yields diagnostic and prognostic insights. *medRxiv*. [https://doi.org/10.1101/2024.12.05.24318587](https://doi.org/10.1101/2024.12.05.24318587) <br>
*Schizophrenia Bulletin - Acceptable Only If Adequately Revised & Requiring Rereview*  
[下载论文 (PDF)](https://tyzhang98.github.io/zhang/files/paper2.pdf) | [论文代码](https://doi.org/10.6084/m9.figshare.26086594.v1)  
*[ 中科院一区Top，影响因子 4.8 | 共同一作，次序第一 ]*
>  
<details>
<summary>Abstract（点击展开/折叠）</summary>
Background: Executive functioning (EF) impairments are often seen in mental disorders, particularly schizophrenia, where they relate to adverse outcomes. As a heterogeneous construct, how specifically each dimension of EF to characterize the diagnostic and prognostic aspects of schizophrenia remains opaque.<br>
Study Design: We used classification models with a stacking approach on systematically measured EFs using 6 tasks to discriminate 195 patients with schizophrenia from healthy individuals. Baseline EF measurements were moreover employed to predict symptomatically remitted or non-remitted prognostic subgroups. EF feature importance was determined at the group-level and the ensuing individual importance scores were associated with four symptom dimensions.<br>
Study Results: The models highlighted the importance of inhibitory control (interference and response inhibitions) or working memory in accurately identifying individuals with schizophrenia (area under the curve [AUC] = 0.87) or those in remission (AUC = 0.81). Patients who are correctly classified, in the association with the contribution of interference inhibition function to our diagnostic classifier, present more severe baseline negative symptoms compared to those who are more likely to be misclassified. Also, linked to the function of working memory updating, patients who are successfully classified as remitted display milder cognitive symptoms at follow-up. Remitted patients do not differ significantly from non-remitted cases in baseline EF assessments or overall symptom severity.
<br>


</details>

![研究设计及分析流程示意图](/zhang/images/Page1-Figure2.jpg)


>**#2.** **Zhang, T.**, Su, M., Huo, X., & Zhao, X. (2025). Rethinking the effects of working memory training on executive functions in schizophrenia: A machine learning approach. *SSRN Scholarly Paper* No. 5277353. Social Science Research Network. [https://doi.org/10.2139/ssrn.5277353](https://doi.org/10.2139/ssrn.5277353)<br>
*International Journal of Clinical and Health Psychology - Under Review*  
[下载论文 (PDF)](https://tyzhang98.github.io/zhang/files/paper3.pdf) | [论文代码](https://github.com/tyzhang98/ML-PsyExecShift)  
*[ 中科院二区，影响因子 4.4 | 共同一作，次序第一 ]*

>  
<details>
<summary>Abstract（点击展开/折叠）</summary>
Background: Executive dysfunction in schizophrenia profoundly impairs functional outcomes and remains insufficiently addressed by standard pharmacological treatments. Although computerized cognitive training offers a promising intervention, traditional evaluation methods often fail to capture nuanced improvements along the psychosis-health continuum. This study aims to quantify changes in executive function (EF) profiles following cognitive training and identify candidate causal predictors of treatment response.<br>
Methods: Patients with schizophrenia were randomized into adaptive N-back training (n = 32), non-adaptive 1-back control (n = 33), or treatment-as-usual (n = 29) groups. EF was evaluated across working memory, cognitive flexibility, and inhibitory control domains at baseline and post-intervention. A support vector machine classifier, trained on an independent sample (195 schizophrenia patients, 169 controls) and calibrated via Platt scaling, quantified EF profile changes. An integrative causal machine learning framework identified baseline predictors of treatment response.<br>
Results: Adaptive working memory training resulted in significant near-transfer effects on untrained working memory updating tasks and reduced general psychopathology symptoms (pfdr < 0.05). The probability of being classified as having a neurotypical EF profile increased substantially in the adaptive training group (from 13.21% at baseline to 38.79% at follow-up, p < 0.001), with these changes correlating with symptom reduction. Working memory maintenance and response inhibition emerged as robust causal predictors of treatment response.<br>
Conclusions: Working memory training induces meaningful shifts in EF profiles in schizophrenia, promoting movement along the psychosis-health continuum toward neurotypical functioning. The classifier-based approach provides a more refined assessment of cognitive gains compared to traditional binary measures, while the causal analysis identifies specific EF domains that predict treatment response.<br>



</details>

![研究设计及分析流程示意图](/zhang/images/Page1-Figure3.jpg)

>**#3.** **Zhang, T.**, et al. Heterogeneous executive functions in schizophrenia delineate patient subtypes with different symptom profiles, inflammatory levels, and treatment responses: A cross-time clustering and validation study. <br>
*The British Journal of Psychiatry - Under Review*  
[下载论文 (PDF)](https://tyzhang98.github.io/zhang/files/paper4.pdf) | [论文代码](https://github.com/tyzhang98/Code_Heterogeneous_EFs_in_SCZ)  
*[ 中科院一区Top，影响因子 7.6 | 独立一作 ]*

>  
<details>
<summary>Abstract（点击展开/折叠）</summary>
Introduction: Executive function (EF) is a heterogeneous neuropsychological construct, and impairments in EF dimensions represent a core aspect of psychopathology in schizophrenia that vary across individual patients. Currently, how this inter-individual variability characterizes schizophrenia subgroups, along with their distinctions in clinical characteristics and prognostic outcomes, remains unclear.<br>
Methods: Three EF dimensions (inhibitory control, working memory, cognitive flexibility) were assessed in the main sample (N=329), its follow-up subset, and an independently “recurring local validation” patient sample (N=114). Fuzzy clustering was applied to baseline EF assessments to discover and validate the core subtypes after excluding cluster-ambiguous cases in the main and independent samples, respectively. Subtype-based classification trained on the main sample was then tested in the independent sample. Importantly, the stability of these subtypes and their remission statuses, along with associated longitudinal changes in clinical and biological factors, were evaluated, and baseline subtype memberships were also used to predict outcomes.<br>
Results: Two longitudinal stable, independently validated core EF subtypes were identified, with significantly variable baseline positive, affective, and cognitive symptoms; working memory updating functioning; and peripheral inflammatory and metabolic levels. This two-subtype differentiation allowed an accurate classification of novel patients’ subtype memberships and patients’ remission statuses not due to overall severity at intake. Remitted patients experienced significantly greater reductions in negative and cognitive symptoms, improved working memory maintenance, lower peripheral inflammatory levels, and more-superior metabolic functions over time.<br>
Conclusions: EF subtyping successfully captured the symptomatic, biochemical, and prognostic variations in individuals with schizophrenia, which could help to stratify patients with this disorder for targeted treatments. <br>



</details>

![研究设计及分析流程示意图](/zhang/images/Page1-Figure4.jpg)

>**#4.** **Zhang, T.**, et al. Two systems, two timelines: Computational evidence for dissociable development in inhibitory control across childhood and adolescence. <br>
*Child Development - Submitted*  
[下载论文 (PDF)](https://tyzhang98.github.io/zhang/files/paper5.pdf) | [论文代码](https://github.com/tyzhang98/inhibitory-control-dev-cogmodel-code)  
*[ 中科院一区Top，影响因子 3.8 | 独立一作 ]*

>  
<details>
<summary>Abstract（点击展开/折叠）</summary>
This study examined inhibitory control development in two samples of Chinese children: a primary sample (n = 1,122; 45.5% female; 91.9% Han, Mage = 12.42 years, range: 6.0–18.7) with 6-month longitudinal follow-up and an independent replication sample (n = 1,026; 45.1% female; 90.8% Han, Mage = 12.44 years, range: 6.1–18.8). Generalized Additive Models applied to Stroop and Go/No-Go tasks revealed four-phase nonlinear developmental trajectories. Response inhibition stabilized by 13.4 years, while interference inhibition developed until 15.8 years. Hierarchical drift diffusion modeling showed that interference inhibition developed through enhanced information accumulation (drift rate), whereas response inhibition developed through enhanced response bias control (starting point). Age-related processing speed improvements suggest shared foundational mechanisms. The findings contribute to a decision-computational framework.<br>



</details>

![研究设计及分析流程示意图](/zhang/images/Page1-Figure5.png)


### 正在准备的... (In Preparation...) 

>**#1.** Zhang, T., et al. Working memory updating deficits exert time perception dysfunction in schizophrenia: A cognitive computation study.<br>
[ *初稿完成，与合作者修稿中...* ]

### 学位论文 (Thesis)

>**硕士学位论文**  

题目：_另一种可能性：执行功能多任务评估为精神分裂症提供诊断信息_  
[下载论文 (PDF)](https://tyzhang98.github.io/zhang/files/Master.pdf)


>**博士学位论文**  
<a id="conf-talks"></a>
题目：_基于大语言模型模拟与预测人类执行功能加工与神经活动_  

<br>
<br>
<br>

## 2. 会议报告 (Conference Presentations)

**2025年心理与认知科学联合论坛暨北京大学心理与认知科学学院博士生论坛**  
- 报告形式：海报展贴 [下载海报 (PDF)](https://tyzhang98.github.io/zhang/files/slides1.pdf)
- 时间：2025年4月19日
- 地点：北京大学

**兰州市第三人民医院学术讲座**  
- 报告题目：认知计算精神病学：从思路到实操 [下载报告 (PDF)](https://tyzhang98.github.io/zhang/files/slides3.pdf)
- 时间：2024年11月26日
- 地点：兰州市第三人民医院
- [报道链接](https://mp.weixin.qq.com/s/9FDqAlwUzW0x5VWXVVJ02g?scene=1)

<!-- 把锚点放在这里 -->

**第二十五届全国心理学学术会议**  
- 报告形式：分论坛口头报告 [下载报告 (PDF)](https://tyzhang98.github.io/zhang/files/slides2.pdf)
- 时间：2024年10月14日  
<a id="research-projects"></a>
- 地点：四川师范大学  
<br>
<br>
<br>

## 3. 科研项目 (Research Projects)


**主持项目**
- **2024年省级博士创新之星科研项目**（主持，2024.11-至今）

**参与项目**
- **国家自然科学基金地区项目**（32260207）“认知训练对乡村儿童执行功能的提升“（参与，2022-2025）

<a id="collab"></a>
- **国家重点研发计划**（2021ZD0203800）科技创新2030—脑科学与类脑研究"重大项目：注意的神经环路机制研究（课题4：特殊人群注意研究及应用）（参与，2021.12-2026.12）
<br>
<br>
<br>

## 4. 寻求科研合作 (Seeking Research Collaboration)

### 合作模式

| 合作类型 | 我的职责 | 合作方职责 | 署名方式 |
|---------|---------|-----------|----------|
| **全程主导** | 研究构思、数据分析、论文撰写与投稿 | 数据采集 | 我为共一，次序第一；合作方为共一，次序第二；我导师为通讯 |
| **技术与研究思路支持** | 研究构思、数据分析（含方法与结果部分撰写） | 数据采集、其他部分撰写、投稿与修稿 | 我为共一，次序第二；合作方为共一，次序第一；我导师为通讯 |

### 联系方式

欢迎学术合作与交流！如有合作意向或学术问题讨论，请联系：tyzhang9804@gmail.com

<a id="resources"></a>
> **注：** 本人目前为在读博士研究生，合作前需征得导师同意

<br>
<br>
<br>

## 5. 研究资源 (Research Resources)

### 开放代码 (Open Code)
- **Stacking Model with SHAP Explanation** ([下载代码](https://tyzhang98.github.io/zhang/files/Stacking-SHAP.zip))
  - **Citation:** Zhang, T., Zhao, X., Yeo, B. T. T., Huo, X., Eickhoff, S. B., & Chen, J. (2024). Leveraging stacked classifiers for multi-task executive function in schizophrenia yields diagnostic and prognostic insights. *medRxiv*. https://doi.org/10.1101/2024.12.05.24318587

<br>
<br>

---

<p align="center">
*最后更新于: 2025年7月29日 GMT+8 16:07:06*
</p>

---