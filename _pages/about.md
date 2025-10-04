


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
- 人类认知加工能否通过统一的计算模型进行模拟与预测
- 精神分裂症认知加工损伤的计算机制

<a id="pub-papers"></a>
> **Email：** tyzhang9804@gmail.com  
<br>
<br>

## 科研论文（Research Publications）

<style>
    .publications-container {
        max-width: 1200px;
        margin: 40px auto;
        padding: 0 20px;
    }

    .section-title {
        font-size: 1.4em;
        font-weight: 600;
        color: #111827;
        margin: 40px 0 20px 0;
        padding-bottom: 10px;
        border-bottom: 2px solid #0066cc;
        transition: color 0.3s, border-bottom-color 0.3s;
    }

    /* ===== 深色模式全局适配 ===== */
    @media (prefers-color-scheme: dark) {
        .section-title {
            color: #f3f4f6;
            border-bottom-color: #60a5fa;
        }
        
        .timeline::before {
            background: #4b5563;
        }
        
        .timeline-marker {
            background: #1f2937;
            border-color: #60a5fa;
        }
        
        .timeline-item:hover .timeline-marker {
            background: #60a5fa;
        }
        
        .timeline-content {
            background: #1f2937;
            color: #e5e7eb;
            border-left-color: #60a5fa;
            box-shadow: 0 1px 3px rgba(0,0,0,0.3);
        }
        
        .timeline-content:hover {
            box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        }
        
        .tl-paper-title {
            color: #f3f4f6;
        }
        
        .tl-journal {
            color: #93c5fd;
        }
        
        .tl-info-line {
            color: #d1d5db;
        }
        
        .tl-info-separator {
            color: #6b7280;
        }
        
        .tl-link-btn {
            color: #60a5fa;
        }
        
        .tl-link-btn:hover {
            color: #93c5fd;
        }
        
        .tl-figure {
            background: #111827;
            border-color: #374151;
        }
        
        .tl-abstract-trigger {
            background: #374151;
            color: #e5e7eb;
            border-color: #60a5fa;
        }
        
        .tl-abstract-trigger:hover {
            background: #4b5563;
            color: #60a5fa;
        }
        
        .tl-abstract-content {
            background: #111827;
            border-color: #374151;
            color: #d1d5db;
        }
    }

    .timeline {
        position: relative;
        padding: 20px 0 20px 40px;
    }

    .timeline::before {
        content: '';
        position: absolute;
        left: 18px;
        top: 0;
        bottom: 0;
        width: 2px;
        background: #d1d5db;
        transition: background 0.3s;
    }

    .timeline-item {
        margin-bottom: 40px;
        position: relative;
        opacity: 0;
        animation: fadeInLeft 0.6s forwards;
    }

    .timeline-item:nth-child(1) { animation-delay: 0.1s; }
    .timeline-item:nth-child(2) { animation-delay: 0.2s; }
    .timeline-item:nth-child(3) { animation-delay: 0.3s; }
    .timeline-item:nth-child(4) { animation-delay: 0.4s; }
    .timeline-item:nth-child(5) { animation-delay: 0.5s; }
    .timeline-item:nth-child(6) { animation-delay: 0.6s; }

    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translateX(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .timeline-marker {
        position: absolute;
        left: -22px;
        top: 8px;
        width: 12px;
        height: 12px;
        background: white;
        border: 3px solid #0066cc;
        border-radius: 50%;
        z-index: 10;
        transition: all 0.3s;
        will-change: transform;
    }

    .timeline-item:hover .timeline-marker {
        transform: scale(1.3);
        background: #0066cc;
    }

    .timeline-content {
        background: white;
        padding: 25px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12);
        transition: transform 0.3s, box-shadow 0.3s;
        border-left: 3px solid #0066cc;
        will-change: transform;
    }

    .timeline-content:hover {
        transform: translateX(5px);
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    .tl-date {
        display: inline-block;
        background: #3b82f6;
        color: white;
        padding: 4px 12px;
        border-radius: 3px;
        font-size: 0.85em;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .tl-status {
        display: inline-block;
        padding: 4px 10px;
        border-radius: 3px;
        font-size: 0.75em;
        font-weight: 600;
        margin-left: 8px;
        border: 1px solid;
    }

    .tl-status.published {
        background: #d1fae5;
        color: #065f46;
        border-color: #6ee7b7;
    }

    .tl-status.review {
        background: #fef3c7;
        color: #92400e;
        border-color: #fcd34d;
    }

    .tl-status.preparation {
        background: #e5e7eb;
        color: #374151;
        border-color: #d1d5db;
    }

    .tl-paper-title {
        font-size: 0.95em;
        font-weight: 600;
        color: #111827;
        margin-bottom: 12px;
        line-height: 1.6;
        font-style: normal;
        transition: color 0.3s;
    }

    .tl-paper-title .journal-name {
        font-style: italic;
        font-weight: 600;
    }

    .tl-journal {
        color: #0570b0;
        font-weight: 500;
        margin-bottom: 10px;
        font-style: italic;
        font-size: 0.95em;
        transition: color 0.3s;
    }

    .tl-info-line {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 12px;
        flex-wrap: wrap;
        font-size: 0.85em;
        color: #374151;
        transition: color 0.3s;
    }

    .tl-info-line > span,
    .tl-info-line > a {
        display: inline-flex;
        align-items: center;
    }

    .tl-info-separator {
        color: #9ca3af;
        font-weight: 300;
        transition: color 0.3s;
    }

    .tl-link-btn {
        padding: 0;
        background: transparent;
        border: none;
        text-decoration: none;
        color: #0066cc;
        font-size: 1em;
        transition: all 0.2s;
        cursor: pointer;
    }

    .tl-link-btn:hover {
        color: #0052a3;
        text-decoration: underline;
    }

    .tl-figure {
        margin-top: 18px;
        border-radius: 4px;
        overflow: hidden;
        border: 1px solid #e5e7eb;
        cursor: pointer;
        position: relative;
        background: #f9fafb;
        transition: all 0.3s;
    }

    .tl-figure img {
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.3s;
        will-change: transform;
    }

    .tl-figure:hover img {
        transform: scale(1.01);
    }

    .tl-figure::after {
        content: '🔍 点击查看大图';
        position: absolute;
        bottom: 10px;
        right: 10px;
        background: rgba(0,0,0,0.75);
        color: white;
        padding: 5px 12px;
        border-radius: 3px;
        font-size: 0.75em;
        opacity: 0;
        transition: opacity 0.3s;
        pointer-events: none;
    }

    .tl-figure:hover::after {
        opacity: 1;
    }

    .tl-abstract {
        margin-top: 14px;
    }

    .tl-abstract-trigger {
        display: inline-block;
        padding: 6px 14px;
        background: white;
        border-radius: 3px;
        font-size: 0.8em;
        color: #374151;
        cursor: pointer;
        transition: all 0.2s;
        border: 2px solid #000;
        user-select: none;
        font-weight: 500;
    }

    .tl-abstract-trigger:hover {
        background: #f9fafb;
        color: #0066cc;
    }

    .tl-abstract-trigger:focus {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
    }

    .tl-abstract-content {
        display: none;
        margin-top: 12px;
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 4px;
        padding: 18px;
        font-size: 0.85em;
        line-height: 1.7;
        max-height: 400px;
        overflow-y: auto;
        color: #374151;
        transition: all 0.3s;
    }

    .tl-abstract-content.show {
        display: block;
        animation: slideDown 0.3s ease-out;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            max-height: 0;
        }
        to {
            opacity: 1;
            max-height: 400px;
        }
    }

    /* ===== 图片模态框样式 ===== */
    .img-modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.9);
        cursor: zoom-out;
        animation: fadeIn 0.3s;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .img-modal-content {
        margin: auto;
        display: block;
        max-width: 90%;
        max-height: 90%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: zoomIn 0.3s;
    }

    @keyframes zoomIn {
        from { transform: translate(-50%, -50%) scale(0.8); }
        to { transform: translate(-50%, -50%) scale(1); }
    }

    .img-modal-close {
        position: absolute;
        top: 20px;
        right: 35px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
        transition: color 0.3s;
        z-index: 1001;
    }

    .img-modal-close:hover,
    .img-modal-close:focus {
        color: #bbb;
    }

    /* ===== 响应式设计优化 ===== */
    @media (max-width: 1024px) {
        .publications-container {
            padding: 0 15px;
        }
        
        .timeline-content {
            padding: 20px;
        }
    }

    @media (max-width: 768px) {
        .timeline {
            padding-left: 30px;
        }

        .timeline::before {
            left: 12px;
        }

        .timeline-marker {
            left: -16px;
            width: 10px;
            height: 10px;
        }

        .timeline-content {
            padding: 15px;
        }

        .section-title {
            font-size: 1.2em;
        }

        .tl-paper-title {
            font-size: 0.95em;
        }

        .img-modal-content {
            max-width: 95%;
            max-height: 95%;
        }

        .img-modal-close {
            top: 10px;
            right: 15px;
            font-size: 30px;
        }
    }

    @media (max-width: 480px) {
        .tl-info-line {
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
        }

        .tl-info-separator {
            display: none;
        }

        .tl-abstract-trigger {
            width: 100%;
            text-align: center;
        }
    }

    /* 无障碍优化 */
    .tl-abstract-trigger:focus-visible,
    .tl-link-btn:focus-visible {
        outline: 2px solid #0066cc;
        outline-offset: 2px;
    }

    /* 打印样式 */
    @media print {
        .timeline::before,
        .timeline-marker,
        .tl-figure::after,
        .img-modal {
            display: none;
        }

        .timeline-content {
            box-shadow: none;
            border: 1px solid #000;
        }
    }
</style>

<div class="publications-container">

    <!-- 准备中 #2 -->
    <div class="timeline-item">
        <div class="timeline-marker" role="presentation"></div>
        <div class="timeline-content">
            <div class="tl-date">2025年</div>
            <span class="tl-status preparation">准备中...</span>
            <div class="tl-paper-title">Understanding, Not Mimicking: Evidence for Genuine Computational Mechanisms in LLMs' Human-like Executive Function</div>
            <div class="tl-info-line">
                <span></span>
                <span class="tl-info-separator" aria-hidden="true">|</span>
                <a href="https://tyzhang98.github.io/zhang/files/2025-8-22-Manuscript.pdf" class="tl-link-btn" aria-label="下载2025年8月22日汇报PDF">2025-8-22 汇报</a>
                <span class="tl-info-separator" aria-hidden="true">|</span>
                <a href="https://tyzhang98.github.io/zhang/files/初步结果.pdf" class="tl-link-btn" aria-label="下载2025年8月5日汇报PDF">2025-8-5 汇报</a>
            </div>
        </div>
    </div>

    <!-- 准备中 #3 -->
    <div class="timeline-item">
        <div class="timeline-marker" role="presentation"></div>
        <div class="timeline-content">
            <div class="tl-date">2025年</div>
            <span class="tl-status preparation">准备中...</span>
            <div class="tl-paper-title">Computational mechanisms of inhibitory control deficits in schizophrenia and major depressive disorder: Evidence from drift diffusion modeling</div>
            <div class="tl-info-line">
                <span></span>
            </div>
        </div>
    </div>

    <!-- 准备中 #4 -->
    <div class="timeline-item">
        <div class="timeline-marker" role="presentation"></div>
        <div class="timeline-content">
            <div class="tl-date">2025年</div>
            <span class="tl-status preparation">准备中...</span>
            <div class="tl-paper-title">Why do inhibitory control tasks show low correlations? A preregistered cross-site cognitive modeling study</div>
            <div class="tl-info-line">
                <span></span>
            </div>
        </div>
    </div>

    <!-- 准备中 #1 -->
    <div class="timeline-item">
        <div class="timeline-marker" role="presentation"></div>
        <div class="timeline-content">
            <div class="tl-date">2025年</div>
            <span class="tl-status preparation">准备中...</span>
            <div class="tl-paper-title">Working memory updating deficits exert time perception dysfunction in schizophrenia: A cognitive computation study</div>
            <div class="tl-info-line">
                <span></span>
            </div>
        </div>
    </div>

    <!-- Under Review #3 -->
    <div class="timeline-item">
        <div class="timeline-marker" role="presentation"></div>
        <div class="timeline-content">
            <div class="tl-date">2025年</div>
            <span class="tl-status review">Under Review</span>
            <div class="tl-paper-title">Two systems, two timelines: Computational evidence for dissociable development in inhibitory control across childhood and adolescence</div>
            <div class="tl-journal">Child Development</div>
            <div class="tl-info-line">
                <span>(中科院一区Top, IF 3.8)</span>
                <span class="tl-info-separator" aria-hidden="true">|</span>
                <span>独立一作</span>
                <span class="tl-info-separator" aria-hidden="true">|</span>
                <a href="https://tyzhang98.github.io/zhang/files/paper5.pdf" class="tl-link-btn" aria-label="下载论文PDF">PDF</a>
                <span class="tl-info-separator" aria-hidden="true">|</span>
                <a href="https://github.com/tyzhang98/inhibitory-control-dev-cogmodel-code" class="tl-link-btn" aria-label="查看GitHub代码仓库">代码</a>
            </div>
            <div class="tl-abstract">
                <button class="tl-abstract-trigger" onclick="toggleAbstract(this)" aria-expanded="false">查看摘要</button>
                <div class="tl-abstract-content" role="region" aria-label="论文摘要">
                    <strong>Abstract:</strong> This study examined inhibitory control development in two samples of Chinese children: a primary sample (n = 1,122; 45.5% female; 91.9% Han, Mage = 12.42 years, range: 6.0–18.7) with 6-month longitudinal follow-up and an independent replication sample (n = 1,026; 45.1% female; 90.8% Han, Mage = 12.44 years, range: 6.1–18.8). Generalized Additive Models applied to Stroop and Go/No-Go tasks revealed four-phase nonlinear developmental trajectories. Response inhibition stabilized by 13.4 years, while interference inhibition developed until 15.8 years. Hierarchical drift diffusion modeling showed that interference inhibition developed through enhanced information accumulation (drift rate), whereas response inhibition developed through enhanced response bias control (starting point). Age-related processing speed improvements suggest shared foundational mechanisms. The findings contribute to a decision-computational framework.
                </div>
            </div>
            <div class="tl-figure" onclick="openImgModal('/zhang/images/Page1-Figure5.png')" role="button" tabindex="0" onkeypress="handleKeyPress(event, '/zhang/images/Page1-Figure5.png')" aria-label="点击查看研究设计及分析流程示意图大图">
                <img src="/zhang/images/Page1-Figure5.png" alt="研究设计及分析流程示意图，展示了从数据收集到分析的完整流程" loading="lazy">
            </div>
        </div>
    </div>

    <!-- Under Review #2 -->
    <div class="timeline-item">
        <div class="timeline-marker" role="presentation"></div>
        <div class="timeline-content">
            <div class="tl-date">2025年</div>
            <span class="tl-status review">Major Revision</span>
            <div class="tl-paper-title">Heterogeneous executive functions in schizophrenia delineate patient subtypes with different symptom profiles, inflammatory levels, and treatment responses</div>
            <div class="tl-journal">BMC Medicine</div>
            <div class="tl-info-line">
                <span>(中科院一区Top, IF 8.3)</span>
                <span class="tl-info-separator" aria-hidden="true">|</span>
                <span>独立一作</span>
                <span class="tl-info-separator" aria-hidden="true">|</span>
                <a href="https://tyzhang98.github.io/zhang/files/paper4.pdf" class="tl-link-btn" aria-label="下载论文PDF">PDF</a>
                <span class="tl-info-separator" aria-hidden="true">|</span>
                <a href="https://github.com/tyzhang98/Code_Heterogeneous_EFs_in_SCZ" class="tl-link-btn" aria-label="查看GitHub代码仓库">代码</a>
            </div>
            <div class="tl-abstract">
                <button class="tl-abstract-trigger" onclick="toggleAbstract(this)" aria-expanded="false">查看摘要</button>
                <div class="tl-abstract-content" role="region" aria-label="论文摘要">
                    <strong>Introduction:</strong> Executive function (EF) is a heterogeneous neuropsychological construct, and impairments in EF dimensions represent a core aspect of psychopathology in schizophrenia that vary across individual patients. Currently, how this inter-individual variability characterizes schizophrenia subgroups, along with their distinctions in clinical characteristics and prognostic outcomes, remains unclear.<br><br>
                    <strong>Methods:</strong> Three EF dimensions (inhibitory control, working memory, cognitive flexibility) were assessed in the main sample (N=329), its follow-up subset, and an independently "recurring local validation" patient sample (N=114). Fuzzy clustering was applied to baseline EF assessments to discover and validate the core subtypes after excluding cluster-ambiguous cases in the main and independent samples, respectively. Subtype-based classification trained on the main sample was then tested in the independent sample. Importantly, the stability of these subtypes and their remission statuses, along with associated longitudinal changes in clinical and biological factors, were evaluated, and baseline subtype memberships were also used to predict outcomes.<br><br>
                    <strong>Results:</strong> Two longitudinal stable, independently validated core EF subtypes were identified, with significantly variable baseline positive, affective, and cognitive symptoms; working memory updating functioning; and peripheral inflammatory and metabolic levels. This two-subtype differentiation allowed an accurate classification of novel patients' subtype memberships and patients' remission statuses not due to overall severity at intake. Remitted patients experienced significantly greater reductions in negative and cognitive symptoms, improved working memory maintenance, lower peripheral inflammatory levels, and more-superior metabolic functions over time.<br><br>
                    <strong>Conclusions:</strong> EF subtyping successfully captured the symptomatic, biochemical, and prognostic variations in individuals with schizophrenia, which could help to stratify patients with this disorder for targeted treatments.
                </div>
            </div>
            <div class="tl-figure" onclick="openImgModal('/zhang/images/Page1-Figure4.jpg')" role="button" tabindex="0" onkeypress="handleKeyPress(event, '/zhang/images/Page1-Figure4.jpg')" aria-label="点击查看研究设计及分析流程示意图大图">
                <img src="/zhang/images/Page1-Figure4.jpg" alt="研究设计及分析流程示意图，展示了执行功能亚型分析的完整框架" loading="lazy">
            </div>
        </div>
    </div>

    <!-- Under Review #1 -->
    <div class="timeline-item">
        <div class="timeline-marker" role="presentation"></div>
        <div class="timeline-content">
            <div class="tl-date">2024年-12月</div>
            <span class="tl-status review">Revise & Rereview</span>
            <div class="tl-paper-title">Leveraging Stacked Classifiers for Multi-task Executive Function in Schizophrenia Yields Diagnostic and Prognostic Insights</div>
            <div class="tl-journal">Schizophrenia Bulletin</div>
            <div class="tl-info-line">
                <span>(中科院一区Top, IF 4.8)</span>
                <span class="tl-info-separator" aria-hidden="true">|</span>
                <span>共同一作（次序第一）</span>
                <span class="tl-info-separator" aria-hidden="true">|</span>
                <a href="https://tyzhang98.github.io/zhang/files/paper2.pdf" class="tl-link-btn" aria-label="下载论文PDF">PDF</a>
                <span class="tl-info-separator" aria-hidden="true">|</span>
                <a href="https://github.com/tyzhang98/SCZ-EF-stacked-classifiers" class="tl-link-btn" aria-label="查看GitHub代码仓库">代码</a>
            </div>
            <div class="tl-abstract">
                <button class="tl-abstract-trigger" onclick="toggleAbstract(this)" aria-expanded="false">查看摘要</button>
                <div class="tl-abstract-content" role="region" aria-label="论文摘要">
                    <strong>Background:</strong> Executive functioning (EF) impairments are often seen in mental disorders, particularly schizophrenia, where they relate to adverse outcomes. As a heterogeneous construct, how specifically each dimension of EF to characterize the diagnostic and prognostic aspects of schizophrenia remains opaque.<br><br>
                    <strong>Study Design:</strong> We used classification models with a stacking approach on systematically measured EFs using 6 tasks to discriminate 195 patients with schizophrenia from healthy individuals. Baseline EF measurements were moreover employed to predict symptomatically remitted or non-remitted prognostic subgroups. EF feature importance was determined at the group-level and the ensuing individual importance scores were associated with four symptom dimensions.<br><br>
                    <strong>Study Results:</strong> The models highlighted the importance of inhibitory control (interference and response inhibitions) or working memory in accurately identifying individuals with schizophrenia (area under the curve [AUC] = 0.87) or those in remission (AUC = 0.81). Patients who are correctly classified, in association with the contribution of interference inhibition function to our diagnostic classifier, present more severe baseline negative symptoms compared to those who are more likely to be misclassified. Also, linked to the function of working memory updating, patients who are successfully classified as remitted display milder cognitive symptoms at follow-up. Remitted patients do not differ significantly from non-remitted cases in baseline EF assessments or overall symptom severity.
                </div>
            </div>
            <div class="tl-figure" onclick="openImgModal('/zhang/images/Page1-Figure2.jpg')" role="button" tabindex="0" onkeypress="handleKeyPress(event, '/zhang/images/Page1-Figure2.jpg')" aria-label="点击查看研究设计及分析流程示意图大图">
                <img src="/zhang/images/Page1-Figure2.jpg" alt="研究设计及分析流程示意图，展示了堆叠分类器的建模流程" loading="lazy">
            </div>
        </div>
    </div>

    <div class="timeline">
        <!-- Published #2 -->
        <div class="timeline-item">
            <div class="timeline-marker" role="presentation"></div>
            <div class="timeline-content">
                <div class="tl-date">2025年-10月</div>
                <span class="tl-status published">Accepted</span>
                <div class="tl-paper-title"><strong><span class="author-name">Zhang, T.</span></strong>, Su, M., Huo, X., & Zhao, X. Rethinking the Effects of Working Memory Training on Executive Functions in Schizophrenia: A Machine Learning Approach. Available at SSRN 5277353. (International Journal of Clinical and Health Psychology)</div>
                <div class="tl-info-line">
                    <span>(中科院二区, IF 4.4)</span>
                    <span class="tl-info-separator">|</span>
                    <span>独立一作</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/paper3.pdf" class="tl-link-btn">PDF</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://github.com/tyzhang98/ML-PsyExecShift" class="tl-link-btn">代码</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger" onclick="toggleAbstract(this)">查看摘要</span>
                    <div class="tl-abstract-content">
                        <strong>Background:</strong> Executive dysfunction in schizophrenia profoundly impairs functional outcomes and remains insufficiently addressed by standard pharmacological treatments. While computerized cognitive training offers promise, traditional evaluation methods often fail to capture nuanced improvements along the psychosis-health continuum. This study aims to quantify executive function (EF) profile changes following cognitive training and identify robust baseline predictors of treatment response.<br><br>
                        <strong>Methods:</strong> Ninety-four schizophrenia patients were randomized to adaptive N-back training (n = 32), non-adaptive 1-back control (n = 33), or treatment-as-usual (n = 29). EF was assessed across working memory, cognitive flexibility, and inhibitory control domains. A support vector machine classifier, trained on an independent sample (195 patients, 169 controls) and calibrated via Platt scaling, quantified EF profile changes. An exploratory framework based on Granger causality principles identified baseline treatment predictors.<br><br>
                        <strong>Results:</strong> Adaptive training produced significant near-transfer effects on untrained working memory tasks and reduced general psychopathology (pfdr < 0.05), but no far-transfer effects to other EF domains. The probability of neurotypical EF classification increased substantially in the adaptive group (13.21% to 38.79%, p < 0.001), correlating with symptom reduction. Working memory maintenance and response inhibition emerged as the most robust baseline predictors of treatment response.<br><br>
                        <strong>Conclusions:</strong> Working memory training induces meaningful shifts in EF profiles in schizophrenia, promoting movement along the psychosis-health continuum toward neurotypical functioning. The classifier-based approach provides a more refined assessment compared to traditional binary measures, while the exploratory framework identifies specific EF domains predicting treatment response with potential causal relevance. These findings warrant validation through larger, multi-center trials with extended follow-up periods.
                    </div>
                </div>
                <div class="tl-figure" onclick="openImgModal('/zhang/images/Page1-Figure3.jpg')">
                    <img src="/zhang/images/Page1-Figure3.jpg" alt="研究设计及分析流程示意图">
                </div>
            </div>
        </div>

        <!-- Published #1 -->
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2025年-6月</div>
                <span class="tl-status published">Published</span>
                <div class="tl-paper-title"><strong><u>Zhang, T.</u></strong>, Yang, X., Mu, P., Huo, X., & Zhao, X. (2025). Stage-specific computational mechanisms of working memory deficits in first-episode and chronic schizophrenia. <strong><em>Schizophrenia Research</em></strong>, <em>282</em>, 203-213.</div>
                <div class="tl-info-line">
                    <span>(中科院二区, IF 3.5)</span>
                    <span class="tl-info-separator">|</span>
                    <span>独立一作</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/paper1.pdf" class="tl-link-btn">PDF</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://github.com/tyzhang98/Two-back-task-HDDM" class="tl-link-btn">代码</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger" onclick="toggleAbstract(this)">查看摘要</span>
                    <div class="tl-abstract-content">
                        <strong>Background:</strong> Cognitive dysfunction, particularly working memory (WM) impairment, constitutes a core feature of schizophrenia and is largely unresponsive to available antipsychotic treatments. The computational mechanisms underlying WM deficits at different illness stages and their associations with clinical symptom dimensions remain poorly understood.<br><br>
                        <strong>Methods:</strong> We applied hierarchical drift diffusion modeling (HDDM) to dissect latent cognitive processes underlying WM performance in a two-back task among patients with first-episode schizophrenia (FES, N = 103, illness duration ≤2 years), chronic schizophrenia (ChSz, N = 108, illness duration ≥5 years), and healthy controls (HCs, N = 85). Multiple regression and mediation analyses were conducted to examine associations between HDDM parameters, clinical symptoms, and conventional metrics.<br><br>
                        <strong>Results:</strong> Both patient groups exhibited significant WM deficits compared to HCs, with ChSz patients demonstrating more pronounced impairments than FES patients. HDDM analysis revealed that patients showed significantly reduced drift rate and prolonged non-decision time compared to HCs. Notably, while non-decision time remained comparable between FES and ChSz groups, drift rate was significantly lower in ChSz patients, mediated the relationship between illness stage and WM performance, and negatively correlated with negative symptoms and general psychopathology.<br><br>
                        <strong>Conclusions:</strong> This study reveals distinct computational profiles of WM deficits across different stages of schizophrenia. While non-decision time impairments emerge early and persist, reduced drift rate progressively deteriorates with illness duration and is closely linked to specific clinical symptoms. These findings enhance our understanding of WM dysfunction across illness stages and support the development of targeted cognitive interventions tailored to illness stage and symptom severity.
                    </div>
                </div>
                <div class="tl-figure" onclick="openImgModal('/zhang/images/Page1-Figure1.jpg')">
                    <img src="/zhang/images/Page1-Figure1.jpg" alt="研究设计及分析流程示意图">
                </div>
            </div>
        </div>
    </div>

</div>
<!-- 图片模态框 -->
<div id="imgModal" class="img-modal" onclick="closeImgModal()">
    <span class="img-modal-close" onclick="closeImgModal()">&times;</span>
    <img class="img-modal-content" id="modalImg">
</div>

<script>
function toggleAbstract(trigger) {
    var content = trigger.nextElementSibling;
    content.classList.toggle('show');
    
    if (content.classList.contains('show')) {
        trigger.textContent = '隐藏摘要';
    } else {
        trigger.textContent = '查看摘要';
    }
}

function openImgModal(imgSrc) {
    var modal = document.getElementById("imgModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

function closeImgModal() {
    var modal = document.getElementById("imgModal");
    modal.style.display = "none";
}

// 按ESC键关闭模态框
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImgModal();
    }
});
</script>
</div>

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