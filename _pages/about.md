---
permalink: /
title: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
/* 右侧大纲导航样式 - Nature 风格配色 */
.toc-sidebar {
    position: fixed;
    right: 20px;
    top: 100px;
    width: 260px;
    max-height: calc(100vh - 120px);
    overflow-y: auto;
    background: #ffffff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    border: 1px solid #e5e7eb;
    z-index: 100;
}

.toc-title {
    font-size: 1.1em;
    font-weight: 600;
    color: #2c5282;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid #2c5282;
}

.toc-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.toc-item {
    margin: 6px 0;
}

.toc-link {
    display: block;
    padding: 8px 12px;
    color: #4a5568;
    text-decoration: none;
    border-left: 3px solid transparent;
    transition: all 0.25s ease;
    font-size: 0.9em;
    border-radius: 4px;
}

.toc-link:hover {
    color: #2c5282;
    background: #ebf4ff;
    border-left-color: #4299e1;
    transform: translateX(2px);
}

.toc-link.active {
    color: #1a365d;
    background: #bee3f8;
    border-left-color: #2c5282;
    font-weight: 600;
}

/* 深色模式适配 - Nature 深色风格 */
@media (prefers-color-scheme: dark) {
    .toc-sidebar {
        background: #1a202c;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
        border: 1px solid #2d3748;
    }
    
    .toc-title {
        color: #63b3ed;
        border-bottom-color: #4299e1;
    }
    
    .toc-link {
        color: #cbd5e0;
    }
    
    .toc-link:hover {
        color: #90cdf4;
        background: #2d3748;
        border-left-color: #4299e1;
    }
    
    .toc-link.active {
        color: #bee3f8;
        background: #2c5282;
        border-left-color: #63b3ed;
    }
}

/* 响应式：在小屏幕隐藏大纲 */
@media (max-width: 1400px) {
    .toc-sidebar {
        display: none;
    }
}

/* 自定义滚动条 - Nature 风格 */
.toc-sidebar::-webkit-scrollbar {
    width: 6px;
}

.toc-sidebar::-webkit-scrollbar-track {
    background: #f7fafc;
    border-radius: 3px;
}

.toc-sidebar::-webkit-scrollbar-thumb {
    background: #cbd5e0;
    border-radius: 3px;
}

.toc-sidebar::-webkit-scrollbar-thumb:hover {
    background: #a0aec0;
}

@media (prefers-color-scheme: dark) {
    .toc-sidebar::-webkit-scrollbar-track {
        background: #2d3748;
    }
    
    .toc-sidebar::-webkit-scrollbar-thumb {
        background: #4a5568;
    }
    
    .toc-sidebar::-webkit-scrollbar-thumb:hover {
        background: #718096;
    }
}
</style>

<!-- 右侧大纲导航 -->
<aside class="toc-sidebar">
    <div class="toc-title"></div>
    <ul class="toc-list">
        <li class="toc-item"><a href="#about" class="toc-link">- 个人简介</a></li>
        <li class="toc-item"><a href="#pub-papers" class="toc-link">- 科研论文</a></li>
        <li class="toc-item"><a href="#conf-talks" class="toc-link">- 会议报告</a></li>
        <li class="toc-item"><a href="#research-projects" class="toc-link">- 科研项目</a></li>
        <li class="toc-item"><a href="#collab" class="toc-link">- 寻求科研合作</a></li>
        <li class="toc-item"><a href="#resources" class="toc-link">- 研究资源</a></li>
    </ul>
</aside>

<script>
// 大纲导航激活状态
window.addEventListener('DOMContentLoaded', function() {
    const tocLinks = document.querySelectorAll('.toc-link');
    
    function updateActiveLink() {
        const sections = [
            { id: 'about', element: document.getElementById('about') },
            { id: 'pub-papers', element: document.getElementById('pub-papers') },
            { id: 'conf-talks', element: document.getElementById('conf-talks') },
            { id: 'research-projects', element: document.getElementById('research-projects') },
            { id: 'collab', element: document.getElementById('collab') },
            { id: 'resources', element: document.getElementById('resources') }
        ];
        
        let current = '';
        sections.forEach(section => {
            if (section.element) {
                const sectionTop = section.element.offsetTop;
                if (window.pageYOffset >= sectionTop - 150) {
                    current = section.id;
                }
            }
        });

        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    // 平滑滚动
    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
</script>

## 个人简介 (About Me)
<a id="about"></a>

&emsp;&emsp;西北师范大学心理学博士研究生（二年级在读），研究方向聚焦于**认知心理学与计算科学的交叉领域**。采用行为实验、fMRI等认知神经科学方法，结合计算建模、机器学习和大语言模型等前沿技术，致力于探究认知功能的计算机制，并研究其在精神障碍（如精神分裂症、重度抑郁症等）中的损伤模式及干预策略。

**当前关注的核心研究问题：**
- 大语言模型的认知加工模式与人类认知加工及大脑活动的表征相似性
- 人类认知加工与发展能否通过统一的计算模型进行模拟与预测
- 精神分裂症等精神障碍认知损伤的计算机制

<div align="center">
  <img src="images/研究框架.gif" alt="研究框架" width="65%" style="cursor: pointer;" onclick="this.style.width=this.style.width=='65%'?'95%':'65%'">
  <p style="font-size: 0.9em; color: #f5f5f5ff;"></p>
</div>

---

<a id="pub-papers"></a>

>**Email:** tyzhang9804@gmail.com

---
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
        color: #111827;  /* 浅色模式：深色字体 */
        margin: 40px 0 20px 0;
        padding-bottom: 10px;
        border-bottom: 2px solid #0066cc;
        transition: color 0.3s, border-bottom-color 0.3s;
    }
    @media (prefers-color-scheme: dark) {
        .section-title {
            color: #f3f4f6;  /* 深色模式：浅色字体 */
            border-bottom-color: #60a5fa;
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
    }

    .timeline-item:hover .timeline-marker {
        transform: scale(1.3);
        background: #cc0000ff;
    }

    .timeline-content {
        background: white;
        padding: 25px;
        border-radius: 4px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12);
        transition: transform 0.3s, box-shadow 0.3s;
        border-left: 3px solid #0066cc;
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
        font-style: normal;  /* 👈 添加这一行，确保标题本身不是斜体 */
    }

    .tl-paper-title .journal-name {
        font-style: italic;  /* 👈 只让期刊名称斜体 */
        font-weight: 700;
    }

    .tl-journal {
        color: #0570b0;
        font-weight: 650;
        margin-bottom: 10px;
        font-style: italic;
        font-size: 0.95em;
    }

    .tl-info-line {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 12px;
        flex-wrap: wrap;
        font-size: 0.85em;
        color: #374151;
    }

    .tl-info-line > span,
    .tl-info-line > a {
        display: inline-flex;
        align-items: center;
    }

    .tl-info-separator {
        color: #9ca3af;
        font-weight: 300;
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
    }

    .tl-figure img {
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.3s;
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
    }

    .tl-abstract-content.show {
        display: block;
    }

    /* 图片模态框样式 */
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
    }

    .img-modal-content {
        margin: auto;
        display: block;
        max-width: 75%;
        max-height: 75%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .img-modal-close {
        position: absolute;
        top: 20px;
        right: 35px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
    }

    .img-modal-close:hover {
        color: #bbb;
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
        }

        .img-modal-content {
            max-width: 95%;
            max-height: 95%;
        }
    }
</style>

<div class="publications-container">

    <!-- 准备中 #2 -->
    <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
            <div class="tl-date">2025年</div>
            <span class="tl-status preparation">准备中...</span>
            <div class="tl-paper-title">Understanding, Not Mimicking: Evidence for Genuine Computational Mechanisms in LLMs' Human-like Executive Function</div>
            <div class="tl-info-line">
                <span></span>
                <span class="tl-info-separator">|</span>
                <a href="https://tyzhang98.github.io/zhang/files/2025-8-22-Manuscript.pdf" class="tl-link-btn">2025-8-22 汇报</a>
                <span class="tl-info-separator">|</span>
                <a href="https://tyzhang98.github.io/zhang/files/初步结果.pdf" class="tl-link-btn">2025-8-5 汇报</a>
            </div>
            <div class="tl-figure" onclick="openImgModal('/zhang/images/大模型问答图1.jpg')">
                <img src="/zhang/images/大模型问答图1.jpg" alt="研究设计及分析流程示意图">
            </div>
        </div>
    </div>

        <!-- 准备中 #3 -->
        <div class="timeline-item">
            <div class="timeline-marker"></div>
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
            <div class="timeline-marker"></div>
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
            <div class="timeline-marker"></div>
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
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2025年</div>
                <span class="tl-status review">Under Review</span>
                <div class="tl-paper-title">Two systems, two timelines: Computational evidence for dissociable development in inhibitory control across childhood and adolescence</div>
                <div class="tl-journal">Submitted to Child Development</div>
                <div class="tl-info-line">
                    <span>(中科院一区Top, IF 3.8)</span>
                    <span class="tl-info-separator">|</span>
                    <span>独立一作</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/paper5.pdf" class="tl-link-btn">PDF</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://github.com/tyzhang98/inhibitory-control-dev-cogmodel-code" class="tl-link-btn">代码</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger" onclick="toggleAbstract(this)">查看摘要</span>
                    <div class="tl-abstract-content">
                        <strong>Abstract:</strong> This study examined inhibitory control development in two samples of Chinese children: a primary sample (n = 1,122; 45.5% female; 91.9% Han, Mage = 12.42 years, range: 6.0–18.7) with 6-month longitudinal follow-up and an independent replication sample (n = 1,026; 45.1% female; 90.8% Han, Mage = 12.44 years, range: 6.1–18.8). Generalized Additive Models applied to Stroop and Go/No-Go tasks revealed four-phase nonlinear developmental trajectories. Response inhibition stabilized by 13.4 years, while interference inhibition developed until 15.8 years. Hierarchical drift diffusion modeling showed that interference inhibition developed through enhanced information accumulation (drift rate), whereas response inhibition developed through enhanced response bias control (starting point). Age-related processing speed improvements suggest shared foundational mechanisms. The findings contribute to a decision-computational framework.
                    </div>
                </div>
                <div class="tl-figure" onclick="openImgModal('/zhang/images/Page1-Figure5.png')">
                    <img src="/zhang/images/Page1-Figure5.png" alt="研究设计及分析流程示意图">
                </div>
            </div>
        </div>

        <!-- Under Review #2 -->
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2025年</div>
                <span class="tl-status review">Major Revision</span>
                <div class="tl-paper-title">Heterogeneous executive functions in schizophrenia delineate patient subtypes with different symptom profiles, inflammatory levels, and treatment responses</div>
                <div class="tl-journal">Submitted to BMC Medicine</div>
                <div class="tl-info-line">
                    <span>(中科院一区Top, IF 8.3)</span>
                    <span class="tl-info-separator">|</span>
                    <span>独立一作</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/paper4.pdf" class="tl-link-btn">PDF</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://github.com/tyzhang98/Code_Heterogeneous_EFs_in_SCZ" class="tl-link-btn">代码</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger" onclick="toggleAbstract(this)">查看摘要</span>
                    <div class="tl-abstract-content">
                        <strong>Introduction:</strong> Executive function (EF) is a heterogeneous neuropsychological construct, and impairments in EF dimensions represent a core aspect of psychopathology in schizophrenia that vary across individual patients. Currently, how this inter-individual variability characterizes schizophrenia subgroups, along with their distinctions in clinical characteristics and prognostic outcomes, remains unclear.<br><br>
                        <strong>Methods:</strong> Three EF dimensions (inhibitory control, working memory, cognitive flexibility) were assessed in the main sample (N=329), its follow-up subset, and an independently "recurring local validation" patient sample (N=114). Fuzzy clustering was applied to baseline EF assessments to discover and validate the core subtypes after excluding cluster-ambiguous cases in the main and independent samples, respectively. Subtype-based classification trained on the main sample was then tested in the independent sample. Importantly, the stability of these subtypes and their remission statuses, along with associated longitudinal changes in clinical and biological factors, were evaluated, and baseline subtype memberships were also used to predict outcomes.<br><br>
                        <strong>Results:</strong> Two longitudinal stable, independently validated core EF subtypes were identified, with significantly variable baseline positive, affective, and cognitive symptoms; working memory updating functioning; and peripheral inflammatory and metabolic levels. This two-subtype differentiation allowed an accurate classification of novel patients' subtype memberships and patients' remission statuses not due to overall severity at intake. Remitted patients experienced significantly greater reductions in negative and cognitive symptoms, improved working memory maintenance, lower peripheral inflammatory levels, and more-superior metabolic functions over time.<br><br>
                        <strong>Conclusions:</strong> EF subtyping successfully captured the symptomatic, biochemical, and prognostic variations in individuals with schizophrenia, which could help to stratify patients with this disorder for targeted treatments.
                    </div>
                </div>
                <div class="tl-figure" onclick="openImgModal('/zhang/images/Page1-Figure4.jpg')">
                    <img src="/zhang/images/Page1-Figure4.jpg" alt="研究设计及分析流程示意图">
                </div>
            </div>
        </div>


        <!-- Under Review #1 -->
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2024年-12月</div>
                <span class="tl-status review">Revise & Rereview</span>
                <div class="tl-paper-title">Leveraging Stacked Classifiers for Multi-task Executive Function in Schizophrenia Yields Diagnostic and Prognostic Insights</div>
                <div class="tl-journal">Submitted to Schizophrenia Bulletin</div>
                <div class="tl-info-line">
                    <span>(中科院一区Top, IF 4.8)</span>
                    <span class="tl-info-separator">|</span>
                    <span>共同一作（次序第一）</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/paper2.pdf" class="tl-link-btn">PDF</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://github.com/tyzhang98/SCZ-EF-stacked-classifiers" class="tl-link-btn">代码</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger" onclick="toggleAbstract(this)">查看摘要</span>
                    <div class="tl-abstract-content">
                        <strong>Background:</strong> Executive functioning (EF) impairments are often seen in mental disorders, particularly schizophrenia, where they relate to adverse outcomes. As a heterogeneous construct, how specifically each dimension of EF to characterize the diagnostic and prognostic aspects of schizophrenia remains opaque.<br><br>
                        <strong>Study Design:</strong> We used classification models with a stacking approach on systematically measured EFs using 6 tasks to discriminate 195 patients with schizophrenia from healthy individuals. Baseline EF measurements were moreover employed to predict symptomatically remitted or non-remitted prognostic subgroups. EF feature importance was determined at the group-level and the ensuing individual importance scores were associated with four symptom dimensions.<br><br>
                        <strong>Study Results:</strong> The models highlighted the importance of inhibitory control (interference and response inhibitions) or working memory in accurately identifying individuals with schizophrenia (area under the curve [AUC] = 0.87) or those in remission (AUC = 0.81). Patients who are correctly classified, in association with the contribution of interference inhibition function to our diagnostic classifier, present more severe baseline negative symptoms compared to those who are more likely to be misclassified. Also, linked to the function of working memory updating, patients who are successfully classified as remitted display milder cognitive symptoms at follow-up. Remitted patients do not differ significantly from non-remitted cases in baseline EF assessments or overall symptom severity.
                    </div>
                </div>
                <div class="tl-figure" onclick="openImgModal('/zhang/images/Page1-Figure2.jpg')">
                    <img src="/zhang/images/Page1-Figure2.jpg" alt="研究设计及分析流程示意图">
                </div>
            </div>
        </div>

    <div class="timeline">
        <!-- Published #2 -->
        <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2025年-11月</div>
                <span class="tl-status published">Published</span>
                <div class="tl-paper-title"><strong><u>Zhang, T.</u></strong>, Su, M., Huo, X., & Zhao, X. (2025). Rethinking the effects of working memory training on executive functions in schizophrenia: A machine learning approach. <strong><em>International Journal of Clinical and Health Psychology</em></strong>, <em>25</em>(4), 100628. <a href="https://doi.org/10.1016/j.ijchp.2025.100628" class="tl-link-btn" style="font-weight: normal; font-size: 0.95em;">https://doi.org/10.1016/j.ijchp.2025.100628</a></div>
                <div class="tl-info-line">
                    <span>(中科院二区, IF 4.4)</span>
                    <span class="tl-info-separator">|</span>
                    <span>共同一作（次序第一）</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/paper3.pdf" class="tl-link-btn">PDF</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://github.com/tyzhang98/ML-PsyExecShift" class="tl-link-btn">代码</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger" onclick="toggleAbstract(this)">查看摘要</span>
                    <div class="tl-abstract-content">
                        <strong>Background:</strong> Executive dysfunction in schizophrenia profoundly impairs functional outcomes and remains insufficiently addressed by standard pharmacological treatments. While computerized cognitive training offers promise, traditional evaluation methods often fail to capture nuanced improvements along the psychosis-health continuum. This study aims to quantify executive function (EF) profile changes following working memory training and identify robust baseline predictors of treatment response.<br><br>
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
                <div class="tl-date">2025年-8月</div>
                <span class="tl-status published">Published</span>
                <div class="tl-paper-title"><strong><u>Zhang, T.</u></strong>, Yang, X., Mu, P., Huo, X., & Zhao, X. (2025). Stage-specific computational mechanisms of working memory deficits in first-episode and chronic schizophrenia. <strong><em>Schizophrenia Research</em></strong>, <em>282</em>, 203-213. <a href="https://doi.org/10.1016/j.schres.2025.06.012" class="tl-link-btn" style="font-weight: normal; font-size: 0.95em;">https://doi.org/10.1016/j.schres.2025.06.012</a></div>
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
<a id="conf-talks"></a> 
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
- **2024年省级博士创新之星科研项目（No. 2025CXZX-366）**（主持，2024.11-至今）

**参与项目**
- **国家自然科学基金地区项目**（32260207）"认知训练对乡村儿童执行功能的提升"（参与，2022-2025）

<a id="collab"></a>
- **国家重点研发计划**（2021ZD0203800）科技创新2030—脑科学与类脑研究"重大项目：注意的神经环路机制研究（课题4：特殊人群注意研究及应用）（参与，2021.12-2026.12）
<br>
<br>
<br>

---

## 4. 寻求科研合作 (Seeking Research Collaboration)

### 合作模式

<table>
  <thead>
    <tr style="background-color: #0a7e8c;">
      <th>合作类型</th>
      <th>我的职责</th>
      <th>合作方职责</th>
      <th>署名方式</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>全程主导</strong></td>
      <td>研究构思、数据分析、论文撰写与投稿</td>
      <td>数据采集</td>
      <td>我为共一，次序第一；合作方为共一，次序第二；我导师为通讯</td>
    </tr>
    <tr>
      <td><strong>技术与研究思路支持</strong></td>
      <td>研究构思、数据分析（含方法与结果部分撰写）</td>
      <td>数据采集、其他部分撰写、投稿与修稿</td>
      <td>我为共一，次序第二；合作方为共一，次序第一；我导师为通讯</td>
    </tr>
  </tbody>
</table>

---

### 联系方式

欢迎学术合作与交流！如有合作意向或学术问题讨论，请联系：**tyzhang9804@gmail.com**

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
<!-- 返回顶部按钮 -->
<button id="backToTop" class="back-to-top" title="返回顶部" aria-label="返回顶部">↑</button>

<style>
  .back-to-top {
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 50px;
    height: 50px;
    background: #0066cc;
    color: white;
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 102, 204, 0.3);
    transition: all 0.3s ease;
    opacity: 0;
    visibility: hidden;
    z-index: 999;
    font-size: 28px;
    font-weight: bold;
    line-height: 1;
    cursor: pointer;
  }
  
  .back-to-top.show {
    opacity: 1;
    visibility: visible;
  }
  
  .back-to-top:hover {
    background: #0052a3;
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 102, 204, 0.4);
  }
  
  .back-to-top::before {
    content: '↑';
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-8px);
    }
    60% {
      transform: translateY(-4px);
    }
  }
  
  @media (max-width: 768px) {
    .back-to-top {
      bottom: 20px;
      right: 20px;
      width: 45px;
      height: 45px;
      font-size: 24px;
    }
  }
  
  @media (prefers-color-scheme: dark) {
    .back-to-top {
      background: #60a5fa;
    }
    .back-to-top:hover {
      background: #3b82f6;
    }
  }
</style>

<script>
  window.addEventListener('scroll', function() {
    var backToTop = document.getElementById('backToTop');
    if (window.pageYOffset > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  
  document.getElementById('backToTop').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
</script>
