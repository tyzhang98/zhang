---
permalink: /
title: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---
## 个人简介 (About Me)  


西北师范大学心理学博士研究生（二年级在读），研究方向为认知心理学与计算科学交叉领域。主要采用行为实验、fMRI等认知神经科学方法，结合计算建模、机器学习和大语言模型等技术，探索认知功能的计算机制，并研究其在精神障碍中的损伤模式及干预策略。

当前关心的研究问题：
- 大语言模型的认知加工模式与人类认知加工及大脑活动的表征相似性  
  - [下载汇报(PDF)2025-8-22](https://tyzhang98.github.io/zhang/files/2025-8-22-Manuscript.pdf)
  - [下载汇报(PDF)2025-8-5](https://tyzhang98.github.io/zhang/files/初步结果.pdf)
- 人类认知加工能否通过统一的计算模型进行模拟与预测
- 精神分裂症认知加工损伤的计算机制

<a id="pub-papers"></a>
> **Email：** tyzhang9804@gmail.com  
<br>
<br>

## 科研论文（Research Publications）

<style>
    .timeline-container {
        max-width: 1000px;
        margin: 40px auto;
        padding: 0 20px;
    }

    .timeline {
        position: relative;
        padding: 20px 0;
    }

    .timeline::before {
        content: '';
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 100%;
        background: linear-gradient(to bottom, #667eea 0%, rgba(102,126,234,0.3) 100%);
        border-radius: 2px;
    }

    .timeline-item {
        margin-bottom: 50px;
        position: relative;
        opacity: 0;
        animation: fadeInUp 0.6s forwards;
    }

    .timeline-item:nth-child(1) { animation-delay: 0.1s; }
    .timeline-item:nth-child(2) { animation-delay: 0.2s; }
    .timeline-item:nth-child(3) { animation-delay: 0.3s; }
    .timeline-item:nth-child(4) { animation-delay: 0.4s; }
    .timeline-item:nth-child(5) { animation-delay: 0.5s; }
    .timeline-item:nth-child(6) { animation-delay: 0.6s; }
    .timeline-item:nth-child(7) { animation-delay: 0.7s; }
    .timeline-item:nth-child(8) { animation-delay: 0.8s; }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .timeline-content {
        width: 45%;
        background: white;
        padding: 25px;
        border-radius: 12px;
        box-shadow: 0 3px 15px rgba(0,0,0,0.1);
        position: relative;
        transition: transform 0.3s, box-shadow 0.3s;
        border-left: 4px solid #667eea;
    }

    .timeline-content:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 25px rgba(0,0,0,0.15);
    }

    .timeline-item:nth-child(odd) .timeline-content {
        margin-left: auto;
    }

    .timeline-item:nth-child(even) .timeline-content {
        margin-right: auto;
    }

    .timeline-marker {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 18px;
        height: 18px;
        background: white;
        border: 4px solid #667eea;
        border-radius: 50%;
        top: 25px;
        z-index: 10;
        transition: all 0.3s;
    }

    .timeline-item:hover .timeline-marker {
        transform: translateX(-50%) scale(1.4);
        background: #667eea;
    }

    .tl-date {
        display: inline-block;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 5px 14px;
        border-radius: 20px;
        font-size: 0.85em;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .tl-status {
        display: inline-block;
        padding: 4px 12px;
        border-radius: 15px;
        font-size: 0.75em;
        font-weight: 600;
        margin-left: 8px;
    }

    .tl-status.published {
        background: #10b981;
        color: white;
    }

    .tl-status.review {
        background: #f59e0b;
        color: white;
    }

    .tl-status.preparation {
        background: #6b7280;
        color: white;
    }

    .tl-paper-title {
        font-size: 1.05em;
        font-weight: bold;
        color: #1f2937;
        margin-bottom: 10px;
        line-height: 1.5;
    }

    .tl-journal {
        color: #667eea;
        font-weight: 600;
        margin-bottom: 8px;
        font-style: italic;
    }

    .tl-metrics {
        display: flex;
        gap: 12px;
        margin-top: 10px;
        flex-wrap: wrap;
    }

    .tl-metric {
        font-size: 0.8em;
        color: #6b7280;
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .tl-metric strong {
        color: #1f2937;
    }

    .tl-links {
        margin-top: 12px;
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    .tl-link-btn {
        padding: 5px 12px;
        background: #f3f4f6;
        border-radius: 6px;
        text-decoration: none;
        color: #4b5563;
        font-size: 0.8em;
        transition: all 0.2s;
        border: 1px solid #e5e7eb;
    }

    .tl-link-btn:hover {
        background: #667eea;
        color: white;
        border-color: #667eea;
    }

    .tl-figure {
        margin-top: 15px;
        border-radius: 8px;
        overflow: hidden;
        border: 1px solid #e5e7eb;
    }

    .tl-figure img {
        width: 100%;
        height: auto;
        display: block;
    }

    .tl-abstract {
        position: relative;
        margin-top: 12px;
    }

    .tl-abstract-trigger {
        display: inline-block;
        padding: 6px 14px;
        background: #f3f4f6;
        border-radius: 6px;
        font-size: 0.8em;
        color: #4b5563;
        cursor: help;
        transition: all 0.2s;
        border: 1px solid #e5e7eb;
    }

    .tl-abstract-trigger:hover {
        background: #667eea;
        color: white;
        border-color: #667eea;
    }

    .tl-abstract-content {
        display: none;
        position: absolute;
        bottom: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 2px solid #667eea;
        border-radius: 8px;
        padding: 15px;
        margin-bottom: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 100;
        max-height: 400px;
        overflow-y: auto;
        font-size: 0.85em;
        line-height: 1.6;
    }

    .tl-abstract-trigger:hover + .tl-abstract-content {
        display: block;
    }

    @media (max-width: 768px) {
        .timeline::before {
            left: 20px;
        }

        .timeline-content {
            width: calc(100% - 60px);
            margin-left: 60px !important;
        }

        .timeline-marker {
            left: 20px;
        }

        .tl-abstract-content {
            position: fixed;
            bottom: auto;
            top: 50%;
            left: 10px;
            right: 10px;
            transform: translateY(-50%);
        }
    }
</style>

<div class="timeline-container">
    <div class="timeline">
        <!-- 准备中 #2 -->
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2025 准备中</div>
                <span class="tl-status preparation">准备中</span>
                <div class="tl-paper-title">Understanding, Not Mimicking: Evidence for Genuine Computational Mechanisms in LLMs' Human-like Executive Function</div>
                <div class="tl-metrics">
                    <div class="tl-metric">👤 <strong>独立一作</strong></div>
                </div>
            </div>
        </div>

        <!-- 准备中 #1 -->
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2025 准备中</div>
                <span class="tl-status preparation">初稿完成</span>
                <div class="tl-paper-title">Working memory updating deficits exert time perception dysfunction in schizophrenia: A cognitive computation study</div>
                <div class="tl-metrics">
                    <div class="tl-metric">👤 <strong>独立一作</strong></div>
                </div>
            </div>
        </div>

        <!-- Under Review #3 -->
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2025</div>
                <span class="tl-status review">Under Review</span>
                <div class="tl-paper-title">Two systems, two timelines: Computational evidence for dissociable development in inhibitory control across childhood and adolescence</div>
                <div class="tl-journal">Child Development</div>
                <div class="tl-metrics">
                    <div class="tl-metric">📊 <strong>IF 3.8</strong></div>
                    <div class="tl-metric">⭐ <strong>中科院一区Top</strong></div>
                    <div class="tl-metric">👤 <strong>独立一作</strong></div>
                </div>
                <div class="tl-links">
                    <a href="https://tyzhang98.github.io/zhang/files/paper5.pdf" class="tl-link-btn">📄 PDF</a>
                    <a href="https://github.com/tyzhang98/inhibitory-control-dev-cogmodel-code" class="tl-link-btn">💻 代码</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger">📋 查看摘要</span>
                    <div class="tl-abstract-content">
                        <strong>Abstract:</strong> This study examined inhibitory control development in two samples of Chinese children: a primary sample (n = 1,122; 45.5% female; 91.9% Han, Mage = 12.42 years, range: 6.0–18.7) with 6-month longitudinal follow-up and an independent replication sample (n = 1,026; 45.1% female; 90.8% Han, Mage = 12.44 years, range: 6.1–18.8). Generalized Additive Models applied to Stroop and Go/No-Go tasks revealed four-phase nonlinear developmental trajectories. Response inhibition stabilized by 13.4 years, while interference inhibition developed until 15.8 years. Hierarchical drift diffusion modeling showed that interference inhibition developed through enhanced information accumulation (drift rate), whereas response inhibition developed through enhanced response bias control (starting point). Age-related processing speed improvements suggest shared foundational mechanisms. The findings contribute to a decision-computational framework.
                    </div>
                </div>
                <div class="tl-figure">
                    <img src="/zhang/images/Page1-Figure5.png" alt="研究设计及分析流程示意图">
                </div>
            </div>
        </div>

        <!-- Under Review #2 -->
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2025</div>
                <span class="tl-status review">Major Revision</span>
                <div class="tl-paper-title">Heterogeneous executive functions in schizophrenia delineate patient subtypes with different symptom profiles, inflammatory levels, and treatment responses</div>
                <div class="tl-journal">BMC Medicine</div>
                <div class="tl-metrics">
                    <div class="tl-metric">📊 <strong>IF 8.3</strong></div>
                    <div class="tl-metric">⭐ <strong>中科院一区Top</strong></div>
                    <div class="tl-metric">👤 <strong>独立一作</strong></div>
                </div>
                <div class="tl-links">
                    <a href="https://tyzhang98.github.io/zhang/files/paper4.pdf" class="tl-link-btn">📄 PDF</a>
                    <a href="https://github.com/tyzhang98/Code_Heterogeneous_EFs_in_SCZ" class="tl-link-btn">💻 代码</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger">📋 查看摘要</span>
                    <div class="tl-abstract-content">
                        <strong>Introduction:</strong> Executive function (EF) is a heterogeneous neuropsychological construct, and impairments in EF dimensions represent a core aspect of psychopathology in schizophrenia that vary across individual patients. Currently, how this inter-individual variability characterizes schizophrenia subgroups, along with their distinctions in clinical characteristics and prognostic outcomes, remains unclear.<br><br>
                        <strong>Methods:</strong> Three EF dimensions (inhibitory control, working memory, cognitive flexibility) were assessed in the main sample (N=329), its follow-up subset, and an independently "recurring local validation" patient sample (N=114). Fuzzy clustering was applied to baseline EF assessments to discover and validate the core subtypes after excluding cluster-ambiguous cases in the main and independent samples, respectively. Subtype-based classification trained on the main sample was then tested in the independent sample. Importantly, the stability of these subtypes and their remission statuses, along with associated longitudinal changes in clinical and biological factors, were evaluated, and baseline subtype memberships were also used to predict outcomes.<br><br>
                        <strong>Results:</strong> Two longitudinal stable, independently validated core EF subtypes were identified, with significantly variable baseline positive, affective, and cognitive symptoms; working memory updating functioning; and peripheral inflammatory and metabolic levels. This two-subtype differentiation allowed an accurate classification of novel patients' subtype memberships and patients' remission statuses not due to overall severity at intake. Remitted patients experienced significantly greater reductions in negative and cognitive symptoms, improved working memory maintenance, lower peripheral inflammatory levels, and more-superior metabolic functions over time.<br><br>
                        <strong>Conclusions:</strong> EF subtyping successfully captured the symptomatic, biochemical, and prognostic variations in individuals with schizophrenia, which could help to stratify patients with this disorder for targeted treatments.
                    </div>
                </div>
                <div class="tl-figure">
                    <img src="/zhang/images/Page1-Figure4.jpg" alt="研究设计及分析流程示意图">
                </div>
            </div>
        </div>

        <!-- Under Review #1 -->
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2024</div>
                <span class="tl-status review">Revise & Rereview</span>
                <div class="tl-paper-title">Leveraging stacked classifiers for multi-task executive function in schizophrenia yields diagnostic and prognostic insights</div>
                <div class="tl-journal">Schizophrenia Bulletin</div>
                <div class="tl-metrics">
                    <div class="tl-metric">📊 <strong>IF 4.8</strong></div>
                    <div class="tl-metric">⭐ <strong>中科院一区Top</strong></div>
                    <div class="tl-metric">👥 <strong>共同一作（次序第一）</strong></div>
                </div>
                <div class="tl-links">
                    <a href="https://doi.org/10.1101/2024.12.05.24318587" class="tl-link-btn">🔗 DOI</a>
                    <a href="https://tyzhang98.github.io/zhang/files/paper2.pdf" class="tl-link-btn">📄 PDF</a>
                    <a href="https://doi.org/10.6084/m9.figshare.26086594.v1" class="tl-link-btn">💻 代码</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger">📋 查看摘要</span>
                    <div class="tl-abstract-content">
                        <strong>Background:</strong> Executive functioning (EF) impairments are often seen in mental disorders, particularly schizophrenia, where they relate to adverse outcomes. As a heterogeneous construct, how specifically each dimension of EF to characterize the diagnostic and prognostic aspects of schizophrenia remains opaque.<br><br>
                        <strong>Study Design:</strong> We used classification models with a stacking approach on systematically measured EFs using 6 tasks to discriminate 195 patients with schizophrenia from healthy individuals. Baseline EF measurements were moreover employed to predict symptomatically remitted or non-remitted prognostic subgroups. EF feature importance was determined at the group-level and the ensuing individual importance scores were associated with four symptom dimensions.<br><br>
                        <strong>Study Results:</strong> The models highlighted the importance of inhibitory control (interference and response inhibitions) or working memory in accurately identifying individuals with schizophrenia (area under the curve [AUC] = 0.87) or those in remission (AUC = 0.81). Patients who are correctly classified, in the association with the contribution of interference inhibition function to our diagnostic classifier, present more severe baseline negative symptoms compared to those who are more likely to be misclassified. Also, linked to the function of working memory updating, patients who are successfully classified as remitted display milder cognitive symptoms at follow-up. Remitted patients do not differ significantly from non-remitted cases in baseline EF assessments or overall symptom severity.
                    </div>
                </div>
                <div class="tl-figure">
                    <img src="/zhang/images/Page1-Figure2.jpg" alt="研究设计及分析流程示意图">
                </div>
            </div>
        </div>

        <!-- Published #2 -->
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2025</div>
                <span class="tl-status published">Accepted</span>
                <div class="tl-paper-title">Rethinking the effects of working memory training on executive functions in schizophrenia: A machine learning approach</div>
                <div class="tl-journal">International Journal of Clinical and Health Psychology</div>
                <div class="tl-metrics">
                    <div class="tl-metric">📊 <strong>IF 4.4</strong></div>
                    <div class="tl-metric">⭐ <strong>中科院二区</strong></div>
                    <div class="tl-metric">👥 <strong>共同一作（次序第一）</strong></div>
                </div>
                <div class="tl-links">
                    <a href="https://doi.org/10.2139/ssrn.5277353" class="tl-link-btn">🔗 DOI</a>
                    <a href="https://tyzhang98.github.io/zhang/files/paper3.pdf" class="tl-link-btn">📄 PDF</a>
                    <a href="https://github.com/tyzhang98/ML-PsyExecShift" class="tl-link-btn">💻 代码</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger">📋 查看摘要</span>
                    <div class="tl-abstract-content">
                        <strong>Background:</strong> Executive dysfunction in schizophrenia profoundly impairs functional outcomes and remains insufficiently addressed by standard pharmacological treatments. While computerized cognitive training offers promise, traditional evaluation methods often fail to capture nuanced improvements along the psychosis-health continuum. This study aims to quantify executive function (EF) profile changes following cognitive training and identify robust baseline predictors of treatment response.<br><br>
                        <strong>Methods:</strong> Ninety-four schizophrenia patients were randomized to adaptive N-back training (n = 32), non-adaptive 1-back control (n = 33), or treatment-as-usual (n = 29). EF was assessed across working memory, cognitive flexibility, and inhibitory control domains. A support vector machine classifier, trained on an independent sample (195 patients, 169 controls) and calibrated via Platt scaling, quantified EF profile changes. An exploratory framework based on Granger causality principles identified baseline treatment predictors.<br><br>
                        <strong>Results:</strong> Adaptive training produced significant near-transfer effects on untrained working memory tasks and reduced general psychopathology (pfdr < 0.05), but no far-transfer effects to other EF domains. The probability of neurotypical EF classification increased substantially in the adaptive group (13.21% to 38.79%, p < 0.001), correlating with symptom reduction. Working memory maintenance and response inhibition emerged as the most robust baseline predictors of treatment response.<br><br>
                        <strong>Conclusions:</strong> Working memory training induces meaningful shifts in EF profiles in schizophrenia, promoting movement along the psychosis-health continuum toward neurotypical functioning. The classifier-based approach provides a more refined assessment compared to traditional binary measures, while the exploratory framework identifies specific EF domains predicting treatment response with potential causal relevance. These findings warrant validation through larger, multi-center trials with extended follow-up periods.
                    </div>
                </div>
                <div class="tl-figure">
                    <img src="/zhang/images/Page1-Figure3.jpg" alt="研究设计及分析流程示意图">
                </div>
            </div>
        </div>

        <!-- Published #1 -->
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2025</div>
                <span class="tl-status published">Published</span>
                <div class="tl-paper-title">Stage-specific computational mechanisms of working memory deficits in first-episode and chronic schizophrenia</div>
                <div class="tl-journal">Schizophrenia Research</div>
                <div class="tl-metrics">
                    <div class="tl-metric">📊 <strong>IF 3.5</strong></div>
                    <div class="tl-metric">⭐ <strong>中科院二区</strong></div>
                    <div class="tl-metric">👤 <strong>独立一作</strong></div>
                </div>
                <div class="tl-links">
                    <a href="https://doi.org/10.1016/j.schres.2025.06.012" class="tl-link-btn">🔗 DOI</a>
                    <a href="https://tyzhang98.github.io/zhang/files/paper1.pdf" class="tl-link-btn">📄 PDF</a>
                    <a href="https://github.com/tyzhang98/Two-back-task-HDDM" class="tl-link-btn">💻 代码</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger">📋 查看摘要</span>
                    <div class="tl-abstract-content">
                        <strong>Background:</strong> Cognitive dysfunction, particularly working memory (WM) impairment, constitutes a core feature of schizophrenia and is largely unresponsive to available antipsychotic treatments. The computational mechanisms underlying WM deficits at different illness stages and their associations with clinical symptom dimensions remain poorly understood.<br><br>
                        <strong>Methods:</strong> We applied hierarchical drift diffusion modeling (HDDM) to dissect latent cognitive processes underlying WM performance in a two-back task among patients with first-episode schizophrenia (FES, N = 103, illness duration ≤2 years), chronic schizophrenia (ChSz, N = 108, illness duration ≥5 years), and healthy controls (HCs, N = 85). Multiple regression and mediation analyses were conducted to examine associations between HDDM parameters, clinical symptoms, and conventional metrics.<br><br>
                        <strong>Results:</strong> Both patient groups exhibited significant WM deficits compared to HCs, with ChSz patients demonstrating more pronounced impairments than FES patients. HDDM analysis revealed that patients showed significantly reduced drift rate and prolonged non-decision time compared to HCs. Notably, while non-decision time remained comparable between FES and ChSz groups, drift rate was significantly lower in ChSz patients, mediated the relationship between illness stage and WM performance, and negatively correlated with negative symptoms and general psychopathology.<br><br>
                        <strong>Conclusions:</strong> This study reveals distinct computational profiles of WM deficits across different stages of schizophrenia. While non-decision time impairments emerge early and persist, reduced drift rate progressively deteriorates with illness duration and is closely linked to specific clinical symptoms. These findings enhance our understanding of WM dysfunction across illness stages and support the development of targeted cognitive interventions tailored to illness stage and symptom severity.
                    </div>
                </div>
                <div class="tl-figure">
                    <img src="/zhang/images/Page1-Figure1.jpg" alt="研究设计及分析流程示意图">
                </div>
            </div>
        </div>

        <!-- 硕士论文 -->
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">硕士学位论文</div>
                <span class="tl-status published">已完成</span>
                <div class="tl-paper-title">另一种可能性：执行功能多任务评估为精神分裂症提供诊断信息</div>
                <div class="tl-metrics">
                    <div class="tl-metric">🎓 <strong>硕士学位论文</strong></div>
                </div>
                <div class="tl-links">
                    <a href="https://tyzhang98.github.io/zhang/files/Master.pdf" class="tl-link-btn">📄 PDF</a>
                </div>
            </div>
        </div>
    </div>
</div>

<br>
<br>

---

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
Conclusions: This study reveals distinct computational profiles of WM deficits across different stages of schizophrenia.

---
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


>**#2.** **Zhang, T.**, Su, M., Huo, X., & Zhao, X. (2025). Rethinking the effects of working memory training on executive functions in schizophrenia: A machine learning approach. *SSRN Scholarly Paper* No. 5277353. Social Science Research Network. [https://doi.org/10.2139/ssrn.5277353](https://doi.org/10.2139/ssrn.5277353)<br>
*International Journal of Clinical and Health Psychology - Accept!*  
[下载论文 (PDF)](https://tyzhang98.github.io/zhang/files/paper3.pdf) | [论文代码](https://github.com/tyzhang98/ML-PsyExecShift)  
*[ 中科院二区，影响因子 4.4 | 共同一作，次序第一 ]*

>  
<details>
<summary>Abstract（点击展开/折叠）</summary>
Background: Executive dysfunction in schizophrenia profoundly impairs functional outcomes and remains insufficiently addressed by standard pharmacological treatments. While computerized cognitive training offers promise, traditional evaluation methods often fail to capture nuanced improvements along the psychosis-health continuum. This study aims to quantify executive function (EF) profile changes following cognitive training and identify robust baseline predictors of treatment response.<br>
Methods: Ninety-four schizophrenia patients were randomized to adaptive N-back training (n = 32), non-adaptive 1-back control (n = 33), or treatment-as-usual (n = 29). EF was assessed across working memory, cognitive flexibility, and inhibitory control domains. A support vector machine classifier, trained on an independent sample (195 patients, 169 controls) and calibrated via Platt scaling, quantified EF profile changes. An exploratory framework based on Granger causality principles identified baseline treatment predictors.<br>
Results: Adaptive training produced significant near-transfer effects on untrained working memory tasks and reduced general psychopathology (pfdr < 0.05), but no far-transfer effects to other EF domains. The probability of neurotypical EF classification increased substantially in the adaptive group (13.21% to 38.79%, p < 0.001), correlating with symptom reduction. Working memory maintenance and response inhibition emerged as the most robust baseline predictors of treatment response.<br>
Conclusions: Working memory training induces meaningful shifts in EF profiles in schizophrenia, promoting movement along the psychosis-health continuum toward neurotypical functioning. The classifier-based approach provides a more refined assessment compared to traditional binary measures, while the exploratory framework identifies specific EF domains predicting treatment response with potential causal relevance. These findings warrant validation through larger, multi-center trials with extended follow-up periods.<br>


</details>

![研究设计及分析流程示意图](/zhang/images/Page1-Figure3.jpg)


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

>**#2.** **Zhang, T.**, et al. Heterogeneous executive functions in schizophrenia delineate patient subtypes with different symptom profiles, inflammatory levels, and treatment responses: A cross-time clustering and validation study. <br>
*BMC Medicine - Major Revision*  
[下载论文 (PDF)](https://tyzhang98.github.io/zhang/files/paper4.pdf) | [论文代码](https://github.com/tyzhang98/Code_Heterogeneous_EFs_in_SCZ)  
*[ 中科院一区Top，影响因子 8.3 | 独立一作 ]*

>  
<details>
<summary>Abstract（点击展开/折叠）</summary>
Introduction: Executive function (EF) is a heterogeneous neuropsychological construct, and impairments in EF dimensions represent a core aspect of psychopathology in schizophrenia that vary across individual patients. Currently, how this inter-individual variability characterizes schizophrenia subgroups, along with their distinctions in clinical characteristics and prognostic outcomes, remains unclear.<br>
Methods: Three EF dimensions (inhibitory control, working memory, cognitive flexibility) were assessed in the main sample (N=329), its follow-up subset, and an independently "recurring local validation" patient sample (N=114). Fuzzy clustering was applied to baseline EF assessments to discover and validate the core subtypes after excluding cluster-ambiguous cases in the main and independent samples, respectively. Subtype-based classification trained on the main sample was then tested in the independent sample. Importantly, the stability of these subtypes and their remission statuses, along with associated longitudinal changes in clinical and biological factors, were evaluated, and baseline subtype memberships were also used to predict outcomes.<br>
Results: Two longitudinal stable, independently validated core EF subtypes were identified, with significantly variable baseline positive, affective, and cognitive symptoms; working memory updating functioning; and peripheral inflammatory and metabolic levels. This two-subtype differentiation allowed an accurate classification of novel patients' subtype memberships and patients' remission statuses not due to overall severity at intake. Remitted patients experienced significantly greater reductions in negative and cognitive symptoms, improved working memory maintenance, lower peripheral inflammatory levels, and more-superior metabolic functions over time.<br>
Conclusions: EF subtyping successfully captured the symptomatic, biochemical, and prognostic variations in individuals with schizophrenia, which could help to stratify patients with this disorder for targeted treatments. <br>



</details>

![研究设计及分析流程示意图](/zhang/images/Page1-Figure4.jpg)

>**#3.** **Zhang, T.**, et al. Two systems, two timelines: Computational evidence for dissociable development in inhibitory control across childhood and adolescence. <br>
*Child Development - Under Review*  
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

>**#2.** Zhang, T., et al. Understanding, Not Mimicking: Evidence for Genuine Computational Mechanisms in LLMs' Human-like Executive Function.<br>
[ *准备中...* ]


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
- **国家自然科学基金地区项目**（32260207）"认知训练对乡村儿童执行功能的提升"（参与，2022-2025）

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
Last updated on July 29, 2025, at 16:07:06 (GMT+8) by Tongyi Zhang, Lanzhou, China.
</p>

---


<div id="locationMap" style="height: 400px; width: 100%; margin: 20px 0; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);"></div>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
  window.addEventListener('load', function() {
    var map = L.map('locationMap').setView([36.0611, 103.8343], 1);
    
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Esri',
      maxZoom: 18
    }).addTo(map);
    
    L.marker([36.0611, 103.8343]).addTo(map)
      .bindPopup('<div style="text-align: center; padding: 5px;"><b>西北师范大学<br>Northwest Normal University</div>')
      .openPopup();
  });
</script>

---