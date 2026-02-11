---
permalink: /
title: ""
description: "Tongyi Zhang - PhD candidate in Psychology at Northwest Normal University, specializing in computational mechanisms of higher cognition, development, and pathological impairments"
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
/* Language Switcher */
.lang-switcher {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    background: white;
    border-radius: 25px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    padding: 8px 16px;
    display: flex;
    gap: 12px;
    align-items: center;
}

.lang-switcher a {
    text-decoration: none;
    color: #666;
    font-weight: 500;
    padding: 6px 12px;
    border-radius: 15px;
    transition: all 0.2s;
    font-size: 0.9em;
}

.lang-switcher a.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.lang-switcher a:hover:not(.active) {
    background: #f3f4f6;
    color: #0066cc;
}

/* Wider Main Content */
.page {
    width: 100%;
    max-width: none !important;
}

@media (min-width: 64em) {
    .page__content {
        width: calc(100% - 350px) !important;
        float: left;
        padding-right: 3em;
    }

    .page__related {
        width: calc(100% - 350px) !important;
        float: left;
        padding-right: 3em;
    }
}

/* Right Sidebar - Move Further Right */
.author__avatar {
    display: table-cell;
    vertical-align: top;
    width: 36px;
    height: 36px;
}

@media (min-width: 64em) {
    .sidebar {
        float: right !important;
        width: 300px !important;
        margin-right: 0 !important;
        opacity: 0.75;
        transition: opacity 0.3s;
    }

    .sidebar:hover {
        opacity: 1;
    }

    .sidebar.sticky {
        overflow-y: auto;
        height: auto;
    }
}

/* TOC Sidebar Adjustments for Wider Content */
.toc-sidebar {
    position: fixed;
    right: 330px;
    top: 100px;
    width: 360px;
    max-height: calc(100vh - 120px);
    overflow-y: auto;
    background: transparent;
    border-radius: 8px;
    padding: 20px;
    box-shadow: none;
    border: 1px solid rgba(100, 100, 100, 0.3);
    z-index: 100;
}

.toc-title {
    font-size: 1.05em;
    font-weight: 600;
    color: #4a5568;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 2px solid #718096;
}

.toc-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.toc-item {
    margin: 5px 0;
}

.toc-link {
    display: block;
    padding: 7px 12px;
    color: #718096;
    text-decoration: none;
    border-left: 3px solid transparent;
    transition: all 0.2s ease;
    font-size: 0.88em;
    border-radius: 4px;
    font-weight: 450;
}

.toc-link:hover {
    color: #2b6cb0;
    background: rgba(66, 153, 225, 0.12);
    border-left-color: #4299e1;
    transform: translateX(3px);
}

.toc-link.active {
    color: #2c5282;
    background: rgba(66, 153, 225, 0.18);
    border-left-color: #2b6cb0;
    font-weight: 600;
}

.toc-sublist {
    list-style: none;
    padding: 0;
    margin: 5px 0 5px 8px;
    max-height: 500px;
    overflow: visible;
    transition: max-height 0.3s ease;
}

.toc-subitem {
    margin: 3px 0;
}

.toc-sublink {
    display: block;
    padding: 5px 10px;
    color: #a0aec0;
    text-decoration: none;
    font-size: 0.82em;
    border-left: 2px solid transparent;
    transition: all 0.2s ease;
    border-radius: 3px;
    font-weight: 400;
}

.toc-sublink:hover {
    color: #4299e1;
    background: rgba(66, 153, 225, 0.08);
    border-left-color: #4299e1;
    transform: translateX(2px);
}

.toc-sublink.active {
    color: #3182ce;
    background: rgba(66, 153, 225, 0.12);
    border-left-color: #3182ce;
    font-weight: 500;
}

@media (max-width: 1600px) {
    .toc-sidebar {
        display: none;
    }
}

.toc-sidebar::-webkit-scrollbar {
    width: 5px;
}

.toc-sidebar::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 3px;
}

.toc-sidebar::-webkit-scrollbar-thumb {
    background: rgba(160, 174, 192, 0.5);
    border-radius: 3px;
}

.toc-sidebar::-webkit-scrollbar-thumb:hover {
    background: rgba(160, 174, 192, 0.8);
}

@media (prefers-color-scheme: dark) {
    .lang-switcher {
        background: #1f2937;
        border-color: rgba(255, 255, 255, 0.1);
    }

    .lang-switcher a {
        color: #9ca3af;
    }

    .lang-switcher a:hover:not(.active) {
        background: #374151;
        color: #60a5fa;
    }

    .toc-sidebar {
        border-color: rgba(200, 200, 200, 0.2);
    }

    .toc-title {
        color: #cbd5e0;
        border-bottom-color: #4a5568;
    }

    .toc-link {
        color: #a0aec0;
    }

    .toc-link:hover {
        color: #63b3ed;
    }

    .toc-link.active {
        color: #90cdf4;
    }

    .toc-sublink {
        color: #718096;
    }

    .toc-sublink:hover {
        color: #63b3ed;
    }
}
</style>

<!-- Language Switcher -->
<div class="lang-switcher">
    <a href="/zhang/" class="active">EN</a>
    <a href="/zhang/about-cn">中文</a>
</div>

<!-- TOC Sidebar -->
<aside class="toc-sidebar" aria-label="Page Navigation">
    <div class="toc-title">Contents</div>
    <ul class="toc-list">
        <li class="toc-item"><a href="#top" class="toc-link">• Home</a></li>
        <li class="toc-item">
            <a href="#publications" class="toc-link">• Publications</a>
            <ul class="toc-sublist">
                <li class="toc-subitem"><a href="#paper-1" class="toc-sublink">1. WM Stages (Schizophr. Res.)</a></li>
                <li class="toc-subitem"><a href="#paper-2" class="toc-sublink">2. WM Training (Int. J. Clin.)</a></li>
                <li class="toc-subitem"><a href="#paper-3" class="toc-sublink">3. EF Classifiers (Schizophr. Bull.)</a></li>
                <li class="toc-subitem"><a href="#paper-4" class="toc-sublink">4. EF Subtypes (BMC Med.)</a></li>
                <li class="toc-subitem"><a href="#paper-5" class="toc-sublink">5. IC Development (Child Dev.)</a></li>
                <li class="toc-subitem"><a href="#paper-6" class="toc-sublink">6. LLMs & EF (PNAS)</a></li>
            </ul>
        </li>
        <li class="toc-item"><a href="#conferences" class="toc-link">• Conferences</a></li>
        <li class="toc-item"><a href="#projects" class="toc-link">• Projects</a></li>
        <li class="toc-item"><a href="#collaboration" class="toc-link">• Collaboration</a></li>
        <li class="toc-item"><a href="#resources" class="toc-link">• Resources</a></li>
    </ul>
</aside>

<script>
window.addEventListener('DOMContentLoaded', function() {
    const tocLinks = document.querySelectorAll('.toc-link');
    const tocSublinks = document.querySelectorAll('.toc-sublink');

    function updateActiveLink() {
        const sections = [
            { id: 'top', element: document.body, offset: 0 },
            { id: 'publications', element: document.getElementById('publications') },
            { id: 'paper-1', element: document.getElementById('paper-1') },
            { id: 'paper-2', element: document.getElementById('paper-2') },
            { id: 'paper-3', element: document.getElementById('paper-3') },
            { id: 'paper-4', element: document.getElementById('paper-4') },
            { id: 'paper-5', element: document.getElementById('paper-5') },
            { id: 'paper-6', element: document.getElementById('paper-6') },
            { id: 'conferences', element: document.getElementById('conferences') },
            { id: 'projects', element: document.getElementById('projects') },
            { id: 'collaboration', element: document.getElementById('collaboration') },
            { id: 'resources', element: document.getElementById('resources') }
        ];

        let current = 'top';
        const scrollPos = window.pageYOffset;

        sections.forEach(section => {
            if (section.element) {
                const sectionTop = section.id === 'top' ? 0 : section.element.offsetTop;
                if (scrollPos >= sectionTop - 150) {
                    current = section.id;
                }
            }
        });

        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
            if (current.startsWith('paper-') && link.getAttribute('href') === '#publications') {
                link.classList.add('active');
            }
        });

        tocSublinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    tocLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            if (targetId === 'top') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });

    tocSublinks.forEach(link => {
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

## About Me
<a id="about"></a>

I am a second-year PhD candidate in Psychology at Northwest Normal University. As a first author, I have published papers in journals including *Child Development*, *Schizophrenia Bulletin*, *BMC Medicine*, *International Journal of Clinical and Health Psychology*, and *Schizophrenia Research*. I also lead a provincial graduate research innovation project. My research focuses on the computational, developmental, and pathological mechanisms of higher-order cognition, integrating cognitive behavioral experiments, functional magnetic resonance imaging (fMRI), computational modeling, machine learning, and large language models to understand cognitive development and investigate interventions for cognitive impairments in schizophrenia, major depression, and other psychiatric disorders.

**Current Research Focus**

**Fundamental Questions**
- Representational similarity between large language models' cognitive processing patterns and human cognition/brain activity
- Unified computational models for simulating and predicting human cognitive processing and development

**Clinical & Applied Questions**
- Computational mechanisms of cognitive impairments in schizophrenia and identification of intervention targets
- Cognitive characteristics and early intervention in child and adolescent psychiatric disorders

<div align="center">
  <img src="images/研究框架.gif" alt="Research framework illustration showing cognitive psychology methods and approaches" width="65%" style="cursor: pointer;" onclick="this.style.width=this.style.width=='65%'?'95%':'65%'" loading="lazy">
</div>

---

<a id="publications"></a>

>**Email:** tyzhang9804@gmail.com

---
<br>

## Research Publications

<style>
    .publications-container {
        max-width: 1400px;
        margin: 40px auto;
        padding: 0 20px;
    }

    .papers-in-prep-section {
        margin-bottom: 30px;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        overflow: hidden;
        background: #f9fafb;
    }

    .papers-in-prep-toggle {
        width: 100%;
        padding: 15px 20px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1em;
        font-weight: 600;
        color: white;
    }

    .papers-in-prep-toggle:hover {
        background: linear-gradient(135deg, #5a67d8 0%, #6b3fa0 100%);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    }

    .papers-in-prep-toggle::after {
        content: '▼';
        font-size: 0.9em;
        transition: transform 0.3s ease;
    }

    .papers-in-prep-toggle.collapsed::after {
        transform: rotate(-90deg);
    }

    .papers-in-prep-content {
        max-height: 2000px;
        overflow: hidden;
        transition: max-height 0.5s ease, opacity 0.3s ease;
        opacity: 1;
        padding: 20px;
        background: white;
    }

    .papers-in-prep-content.collapsed {
        max-height: 0;
        opacity: 0;
        padding: 0 20px;
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
        background: linear-gradient(180deg, #d1d5db 0%, #e5e7eb 100%);
    }

    .timeline-item {
        margin-bottom: 40px;
        position: relative;
        opacity: 0;
        animation: fadeInLeft 0.6s forwards;
    }

    .timeline-item:nth-child(1) { animation-delay: 0.1s; }
    .timeline-item:nth-child(2) { animation-delay: 0.15s; }
    .timeline-item:nth-child(3) { animation-delay: 0.2s; }
    .timeline-item:nth-child(4) { animation-delay: 0.25s; }
    .timeline-item:nth-child(5) { animation-delay: 0.3s; }
    .timeline-item:nth-child(6) { animation-delay: 0.35s; }
    .timeline-item:nth-child(7) { animation-delay: 0.4s; }
    .timeline-item:nth-child(8) { animation-delay: 0.45s; }
    .timeline-item:nth-child(9) { animation-delay: 0.5s; }

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
        background: #0066cc;
        box-shadow: 0 0 0 4px rgba(0, 102, 204, 0.2);
    }

    .timeline-content {
        background: white;
        padding: 25px;
        border-radius: 6px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.08);
        transition: transform 0.3s, box-shadow 0.3s;
        border-left: 3px solid #0066cc;
    }

    .timeline-content:hover {
        transform: translateX(5px);
        box-shadow: 0 6px 16px rgba(0,0,0,0.12);
    }

    .tl-date {
        display: inline-block;
        background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
        color: white;
        padding: 5px 14px;
        border-radius: 4px;
        font-size: 0.85em;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .tl-status {
        display: inline-block;
        padding: 5px 12px;
        border-radius: 4px;
        font-size: 0.75em;
        font-weight: 600;
        margin-left: 8px;
        border: 1px solid;
    }

    .tl-status.published {
        background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
        color: #065f46;
        border-color: #6ee7b7;
    }

    .tl-status.review {
        background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
        color: #92400e;
        border-color: #fcd34d;
    }

    .tl-status.preparation {
        background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
        color: #374151;
        border-color: #9ca3af;
    }

    .tl-paper-title {
        font-size: 0.95em;
        font-weight: 600;
        color: #111827;
        margin-bottom: 12px;
        line-height: 1.6;
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
        transition: all 0.2s;
        cursor: pointer;
    }

    .tl-link-btn:hover {
        color: #0052a3;
        text-decoration: underline;
    }

    .tl-figure {
        margin-top: 18px;
        border-radius: 6px;
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
        transform: scale(1.02);
    }

    .tl-figure::after {
        content: '🔍 Click to enlarge';
        position: absolute;
        bottom: 10px;
        right: 10px;
        background: rgba(0,0,0,0.75);
        color: white;
        padding: 6px 14px;
        border-radius: 4px;
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
        padding: 7px 16px;
        background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%);
        border-radius: 4px;
        font-size: 0.8em;
        color: #374151;
        cursor: pointer;
        transition: all 0.2s;
        border: 2px solid #d1d5db;
        user-select: none;
        font-weight: 500;
    }

    .tl-abstract-trigger:hover {
        background: linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%);
        color: #0066cc;
        border-color: #0066cc;
        transform: translateY(-1px);
        box-shadow: 0 2px 6px rgba(0, 102, 204, 0.15);
    }

    .tl-abstract-content {
        display: none;
        margin-top: 12px;
        background: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
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
        max-width: 85%;
        max-height: 85%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 8px;
    }

    .img-modal-close {
        position: absolute;
        top: 20px;
        right: 35px;
        color: #f1f1f1;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
        transition: color 0.2s;
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

        .timeline-content {
            padding: 18px;
        }
    }
</style>

<div class="publications-container">

    <!-- Papers in Preparation Section - Collapsible -->
    <div class="papers-in-prep-section">
        <button class="papers-in-prep-toggle collapsed" onclick="togglePapersInPrep(this)" aria-expanded="false">
            <span>Papers in Preparation (6)</span>
        </button>
        <div class="papers-in-prep-content collapsed" id="papers-in-prep-content">
            <div class="timeline">
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="tl-date">2025</div>
                        <span class="tl-status preparation">In Prep</span>
                        <div class="tl-paper-title">Computational mechanisms of inhibitory control deficits in schizophrenia and major depressive disorder: Evidence from drift diffusion modeling</div>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="tl-date">2025</div>
                        <span class="tl-status preparation">In Prep</span>
                        <div class="tl-paper-title">Why do inhibitory control tasks show low correlations? A preregistered cross-site cognitive modeling study</div>
                        <div class="tl-info-line">
                            <a href="https://tyzhang98.github.io/zhang/files/Preregistered.docx" class="tl-link-btn">📄 Preregistration (2025-10-05)</a>
                        </div>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="tl-date">2025</div>
                        <span class="tl-status preparation">In Prep</span>
                        <div class="tl-paper-title">Working memory updating deficits exert time perception dysfunction in schizophrenia: A cognitive computation study</div>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="tl-date">2026</div>
                        <span class="tl-status preparation">In Prep</span>
                        <div class="tl-paper-title">Computational phenotyping of brain-behavior dynamics in interference inhibition across major depressive disorder, bipolar disorder, and schizophrenia</div>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="tl-date">2026</div>
                        <span class="tl-status preparation">In Prep</span>
                        <div class="tl-paper-title">Shared and specific computational neural mechanisms underlying interference and response inhibition (干扰抑制和反应抑制的共享与特异性计算神经机制)</div>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content">
                        <div class="tl-date">2026</div>
                        <span class="tl-status preparation">In Prep</span>
                        <div class="tl-paper-title">Effects of generative AI on adolescent executive functions (生成式人工智能对青少年执行功能的影响)</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Published & Under Review Timeline -->
    <div class="timeline">
        <div class="timeline-item" id="paper-6">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2025</div>
                <span class="tl-status review">Submitted</span>
                <div class="tl-paper-title">Boundaries of Executive Functions in Large Language Models: GPT-4o Selectively Replicates Human Performance</div>
                <div class="tl-journal">Submitted to PNAS</div>
                <div class="tl-info-line">
                    <span>(JCR Q1, IF 9.1)</span>
                    <span class="tl-info-separator">|</span>
                    <span>First author</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/paper6.pdf" class="tl-link-btn">📄 PDF</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/paper6.docx" class="tl-link-btn">📋 Supplement</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://osf.io/hfnt6" class="tl-link-btn">💻 Code</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger" onclick="toggleAbstract(this)" role="button" tabindex="0">View Abstract</span>
                    <div class="tl-abstract-content">
                        <strong>Abstract:</strong> Large language models (LLMs) have demonstrated considerable capabilities in complex reasoning and problem-solving tasks that, in humans, depend on executive functions (EFs). However, the extent to which these models replicate human EF patterns remains unclear. We systematically evaluated GPT-4o's performance across three core EF dimensions—inhibitory control, working memory, and cognitive flexibility—using established behavioral paradigms. Additionally, we examined whether model-internal log probability parameters could serve as quantitative indicators of cognitive processing analogous to human neural activity. Using two independent datasets (N₁=1,970; N₂=39), we simulated trial-by-trial responses through GPT-4o while recording log probability metrics. Bayesian analyses revealed selective replication of human EF patterns. GPT-4o successfully reproduced human-like performance in interference inhibition (stroop), working memory capacity (digit span), and working memory updating (n-back). In contrast, the model showed divergent patterns in response inhibition (Go/No-Go), time-sensitive working memory updating (running memory task with presentation times of 1750 ms and 750 ms), and cognitive flexibility (number-switching task). Log probability parameters demonstrated task-specific associations with behavioral measures and corresponded with activation patterns in EF-related brain regions during working memory and task-switching paradigms. These findings suggest that GPT-4o captures specific aspects of human EF, particularly those involving symbolic representation and static information maintenance, while showing limitations in dynamic control and temporal processing.
                    </div>
                </div>
                <div class="tl-figure" onclick="openImgModal('/zhang/images/Page1-Figure6.png')" ondblclick="openImgModal('/zhang/images/Page1-Figure6.png')" role="button" tabindex="0">
                    <img src="/zhang/images/Page1-Figure6.png" alt="GPT-4o executive functions study design and analysis flowchart" loading="lazy">
                </div>
            </div>
        </div>

        <div class="timeline-item" id="paper-5">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2025</div>
                <span class="tl-status review">Major Revision</span>
                <div class="tl-paper-title">Two systems, two timelines: Computational evidence for dissociable development in inhibitory control across childhood and adolescence</div>
                <div class="tl-journal">Submitted to Child Development</div>
                <div class="tl-info-line">
                    <span>(JCR Q1, IF 3.8)</span>
                    <span class="tl-info-separator">|</span>
                    <span>First author</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/paper5.pdf" class="tl-link-btn">📄 PDF</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://github.com/tyzhang98/inhibitory-control-dev-cogmodel-code" class="tl-link-btn">💻 Code</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger" onclick="toggleAbstract(this)" role="button" tabindex="0">View Abstract</span>
                    <div class="tl-abstract-content">
                        <strong>Abstract:</strong> This study examined inhibitory control development in two samples of Chinese children: a primary sample (n = 1,122; 45.5% female; 91.9% Han, Mage = 12.42 years, range: 6.0–18.7) with 6-month longitudinal follow-up and an independent replication sample (n = 1,026; 45.1% female; 90.8% Han, Mage = 12.44 years, range: 6.1–18.8). Generalized Additive Models applied to Stroop and Go/No-Go tasks revealed four-phase nonlinear developmental trajectories. Response inhibition stabilized by 13.4 years, while interference inhibition developed until 15.8 years. Hierarchical drift diffusion modeling showed that interference inhibition developed through enhanced information accumulation (drift rate), whereas response inhibition developed through enhanced response bias control (starting point). Age-related processing speed improvements suggest shared foundational mechanisms.
                    </div>
                </div>
                <div class="tl-figure" onclick="openImgModal('/zhang/images/Page1-Figure5.png')" ondblclick="openImgModal('/zhang/images/Page1-Figure5.png')" role="button" tabindex="0">
                    <img src="/zhang/images/Page1-Figure5.png" alt="Inhibitory control development study design" loading="lazy">
                </div>
            </div>
        </div>

        <div class="timeline-item" id="paper-4">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2025</div>
                <span class="tl-status review">Major Revision</span>
                <div class="tl-paper-title">Heterogeneous executive functions in schizophrenia delineate patient subtypes with different symptom profiles, inflammatory levels, and treatment responses</div>
                <div class="tl-journal">Submitted to BMC Medicine</div>
                <div class="tl-info-line">
                    <span>(JCR Q1, IF 8.3)</span>
                    <span class="tl-info-separator">|</span>
                    <span>First author</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/paper4.pdf" class="tl-link-btn">📄 PDF</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://github.com/tyzhang98/Code_Heterogeneous_EFs_in_SCZ" class="tl-link-btn">💻 Code</a>
                </div>
                <div class="tl-figure" onclick="openImgModal('/zhang/images/Page1-Figure4.jpg')" ondblclick="openImgModal('/zhang/images/Page1-Figure4.jpg')" role="button" tabindex="0">
                    <img src="/zhang/images/Page1-Figure4.jpg" alt="EF subtypes in schizophrenia study design" loading="lazy">
                </div>
            </div>
        </div>

        <div class="timeline-item" id="paper-3">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">Nov 2025</div>
                <span class="tl-status published">Published</span>
                <div class="tl-paper-title">Leveraging Stacked Classifiers for Multi-task Executive Function in Schizophrenia Yields Diagnostic and Prognostic Insights</div>
                <div class="tl-journal">Schizophrenia Bulletin</div>
                <div class="tl-info-line">
                    <span>(JCR Q1, IF 4.8)</span>
                    <span class="tl-info-separator">|</span>
                    <span>Co-first author</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/paper2.pdf" class="tl-link-btn">📄 PDF</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://github.com/tyzhang98/SCZ-EF-stacked-classifiers" class="tl-link-btn">💻 Code</a>
                </div>
                <div class="tl-figure" onclick="openImgModal('/zhang/images/Page1-Figure2.jpg')" ondblclick="openImgModal('/zhang/images/Page1-Figure2.jpg')" role="button" tabindex="0">
                    <img src="/zhang/images/Page1-Figure2.jpg" alt="Stacked classifiers for EF in schizophrenia" loading="lazy">
                </div>
            </div>
        </div>

        <div class="timeline-item" id="paper-2">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">Sep 2025</div>
                <span class="tl-status published">Published</span>
                <div class="tl-paper-title"><strong><u>Zhang, T.</u></strong>, Su, M., Huo, X., & Zhao, X. (2025). Rethinking the effects of working memory training on executive functions in schizophrenia: A machine learning approach. <em>International Journal of Clinical and Health Psychology</em>, <em>25</em>(4), 100628. <a href="https://doi.org/10.1016/j.ijchp.2025.100628" class="tl-link-btn">https://doi.org/10.1016/j.ijchp.2025.100628</a></div>
                <div class="tl-info-line">
                    <span>(JCR Q2, IF 4.4)</span>
                    <span class="tl-info-separator">|</span>
                    <span>Co-first author</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/paper3.pdf" class="tl-link-btn">📄 PDF</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://github.com/tyzhang98/ML-PsyExecShift" class="tl-link-btn">💻 Code</a>
                </div>
                <div class="tl-figure" onclick="openImgModal('/zhang/images/Page1-Figure3.jpg')" ondblclick="openImgModal('/zhang/images/Page1-Figure3.jpg')" role="button" tabindex="0">
                    <img src="/zhang/images/Page1-Figure3.jpg" alt="WM training effects study design" loading="lazy">
                </div>
            </div>
        </div>

        <div class="timeline-item" id="paper-1">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">Jun 2025</div>
                <span class="tl-status published">Published</span>
                <div class="tl-paper-title"><strong><u>Zhang, T.</u></strong>, Yang, X., Mu, P., Huo, X., & Zhao, X. (2025). Stage-specific computational mechanisms of working memory deficits in first-episode and chronic schizophrenia. <em>Schizophrenia Research</em>, <em>282</em>, 203-213. <a href="https://doi.org/10.1016/j.schres.2025.06.012" class="tl-link-btn">https://doi.org/10.1016/j.schres.2025.06.012</a></div>
                <div class="tl-info-line">
                    <span>(JCR Q2, IF 3.5)</span>
                    <span class="tl-info-separator">|</span>
                    <span>First author</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/paper1.pdf" class="tl-link-btn">📄 PDF</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://github.com/tyzhang98/Two-back-task-HDDM" class="tl-link-btn">💻 Code</a>
                </div>
                <div class="tl-figure" onclick="openImgModal('/zhang/images/Page1-Figure1.jpg')" ondblclick="openImgModal('/zhang/images/Page1-Figure1.jpg')" role="button" tabindex="0">
                    <img src="/zhang/images/Page1-Figure1.jpg" alt="WM deficits stages study design" loading="lazy">
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Image Modal -->
<div id="imgModal" class="img-modal" onclick="closeImgModal()" ondblclick="closeImgModal()" role="dialog" aria-modal="true">
    <span class="img-modal-close" onclick="closeImgModal()">&times;</span>
    <img class="img-modal-content" id="modalImg" alt="Enlarged research figure">
</div>

<script>
function togglePapersInPrep(button) {
    const content = document.getElementById('papers-in-prep-content');
    const isCollapsed = content.classList.contains('collapsed');

    if (isCollapsed) {
        content.classList.remove('collapsed');
        button.classList.remove('collapsed');
        button.setAttribute('aria-expanded', 'true');
    } else {
        content.classList.add('collapsed');
        button.classList.add('collapsed');
        button.setAttribute('aria-expanded', 'false');
    }
}

function toggleAbstract(trigger) {
    var content = trigger.nextElementSibling;
    content.classList.toggle('show');

    if (content.classList.contains('show')) {
        trigger.textContent = 'Hide Abstract';
    } else {
        trigger.textContent = 'View Abstract';
    }
}

function openImgModal(imgSrc) {
    var modal = document.getElementById("imgModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imgSrc;
    document.body.style.overflow = 'hidden';
}

function closeImgModal() {
    var modal = document.getElementById("imgModal");
    modal.style.display = "none";
    document.body.style.overflow = '';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImgModal();
    }
});

document.querySelectorAll('.tl-figure').forEach(figure => {
    figure.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const imgSrc = this.querySelector('img').src;
            openImgModal(imgSrc);
        }
    });
});
</script>

<a id="conferences"></a>
<br>

## Conference Presentations

**Lanzhou Third People's Hospital Academic Lecture**
- Topic: Application of AI and Cognitive Modeling in Executive Function Research in Schizophrenia [Download (PDF)](https://tyzhang98.github.io/zhang/files/slides4.pdf)
- Date: December 5, 2025
- Location: Lanzhou Third People's Hospital
- [Report Link](https://mp.weixin.qq.com/s/rTePQw_mfU1r-ok_Hh4imQ)

**2025 Joint Forum on Psychology and Cognitive Science & Peking University Graduate Forum**
- Format: Poster presentation [Download (PDF)](https://tyzhang98.github.io/zhang/files/slides1.pdf)
- Date: April 19, 2025
- Location: Peking University

**Lanzhou Third People's Hospital Academic Lecture**
- Topic: Computational Psychiatry: From Theory to Practice [Download (PDF)](https://tyzhang98.github.io/zhang/files/slides3.pdf)
- Date: November 26, 2024
- Location: Lanzhou Third People's Hospital
- [Report Link](https://mp.weixin.qq.com/s/9FDqAlwUzW0x5VWXVVJ02g?scene=1)

**25th National Conference of Psychology**
- Format: Oral presentation [Download (PDF)](https://tyzhang98.github.io/zhang/files/slides2.pdf)
- Date: October 14, 2024
- Location: Sichuan Normal University

<a id="projects"></a>
<br>

## Research Projects

**Principal Investigator**
- **2024 Provincial Graduate Innovation Star Project** (No. 2025CXZX-366) - Completed (December 2025)

**Co-Investigator**
- **National Natural Science Foundation Regional Project** (32260207) "Cognitive Training for Rural Children's Executive Functions" (2022-2025)
- **National Key R&D Program** (2021ZD0203800) Brain Science and Brain-like Research Major Project: Neural Circuit Mechanisms of Attention (Task 4: Attention in Special Populations) (2021.12-2026.12)

<a id="collaboration"></a>
<br>

---

## Research Collaboration

I welcome collaboration in the following areas:
- Cognitive psychology and computational modeling
- Cognitive impairment mechanisms in psychiatric disorders
- Machine learning applications in psychology
- Large language models and cognitive science

### Contact

For academic collaboration or discussion, please contact: **tyzhang9804@gmail.com**

> **Note:** As a current PhD candidate, collaborations require advisor approval

<a id="resources"></a>
<br>

## Research Resources

### Open Code
- **Stacking Model with SHAP Explanation** ([Download](https://tyzhang98.github.io/zhang/files/Stacking-SHAP.zip))
  - **Citation:** Zhang, T., Zhao, X., Yeo, B. T. T., Huo, X., Eickhoff, S. B., & Chen, J. (2024). Leveraging stacked classifiers for multi-task executive function in schizophrenia yields diagnostic and prognostic insights. *medRxiv*. https://doi.org/10.1101/2024.12.05.24318587

<br>

---

<p align="center">
  <small>Last updated: February 11, 2026, 16:00:00 (GMT+8) | Tongyi Zhang, Lanzhou, China</small>
</p>

---

<div id="locationMap" style="height: 400px; width: 100%; margin: 20px 0; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);"></div>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
window.addEventListener('load', function() {
    var map = L.map('locationMap').setView([36.0611, 103.8343], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);

    L.marker([36.0611, 103.8343]).addTo(map)
        .bindPopup('<div style="text-align: center; padding: 5px;"><b>Northwest Normal University<br>西北师范大学</b></div>')
        .openPopup();
});
</script>

---
