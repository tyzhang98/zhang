---
permalink: /
title: ""
author_profile: true
redirect_from:
  - /about/
  - /about.html
---

<style>
/* Language Switcher - Simple & Clean */
.lang-switcher {
    position: fixed;
    top: 90px;
    right: 100px;
    z-index: 999;
    display: flex;
    gap: 2px;
}

.lang-switcher a {
    padding: 4px 10px;
    text-decoration: none;
    color: #6b7280;
    font-size: 0.8em;
    font-weight: 500;
    transition: color 0.2s;
    border-bottom: 2px solid transparent;
}

.lang-switcher a.active {
    color: #2563eb;
    border-bottom-color: #2563eb;
}

.lang-switcher a:hover:not(.active) {
    color: #3b82f6;
}

@media (prefers-color-scheme: dark) {
    .lang-switcher a {
        color: #9ca3af;
    }

    .lang-switcher a.active {
        color: #60a5fa;
        border-bottom-color: #60a5fa;
    }

    .lang-switcher a:hover:not(.active) {
        color: #93c5fd;
    }
}

@media (max-width: 768px) {
    .lang-switcher {
        top: 80px;
        right: 100px;
    }
}

/* Right Sidebar TOC Navigation - Comfortable Colors */
.toc-sidebar {
    position: fixed;
    right: 20px;
    top: 100px;
    width: 350px;
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

/* Main link styles */
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

/* Sublist styles - Always expanded */
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

/* Sublink styles */
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

/* Responsive: Hide TOC on small screens */
@media (max-width: 1550px) {
    .toc-sidebar {
        display: none;
    }
}

/* Custom scrollbar */
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

/* Dark mode support */
@media (prefers-color-scheme: dark) {
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

<!-- Right Sidebar TOC Navigation -->
<aside class="toc-sidebar">
    <div class="toc-title">Contents</div>
    <ul class="toc-list">
        <li class="toc-item"><a href="#top" class="toc-link">• Home</a></li>

        <li class="toc-item">
            <a href="#pub-papers" class="toc-link" data-parent="pub-papers">• Publications</a>
            <ul class="toc-sublist" id="papers-sublist">
                <li class="toc-subitem"><a href="#paper-prep-1" class="toc-sublink">1. Schizophr. Res. (Published)</a></li>
                <li class="toc-subitem"><a href="#paper-prep-2" class="toc-sublink">2. Int. J. Clin. Health Psychol. (Published)</a></li>
                <li class="toc-subitem"><a href="#paper-prep-3" class="toc-sublink">3. Schizophr. Bull. (Published)</a></li>
                <li class="toc-subitem"><a href="#paper-prep-4" class="toc-sublink">4. BMC Med. (Accepted)</a></li>
                <li class="toc-subitem"><a href="#paper-prep-5" class="toc-sublink">5. Child Dev. (Published)</a></li>
                <li class="toc-subitem"><a href="#paper-review-jep" class="toc-sublink">6. JEP: General (Major Revision)</a></li>
                <li class="toc-subitem"><a href="#paper-review-tp" class="toc-sublink">7. Transl. Psychiatry (R1 Under Review)</a></li>
                <li class="toc-subitem"><a href="#paper-prep-6" class="toc-sublink">8. Cognitive Science (Major Revision)</a></li>

            </ul>
        </li>

        <li class="toc-item"><a href="#collaborative-pubs" class="toc-link">• Collaborative</a></li>
        <li class="toc-item"><a href="#conf-talks" class="toc-link">• Conference</a></li>
        <li class="toc-item"><a href="#research-projects" class="toc-link">• Projects</a></li>
        <li class="toc-item"><a href="#collab" class="toc-link">• Collaboration</a></li>
        <li class="toc-item"><a href="#resources" class="toc-link">• Resources</a></li>
    </ul>
</aside>

<script>
// TOC navigation activation and submenu control
window.addEventListener('DOMContentLoaded', function() {
    const tocLinks = document.querySelectorAll('.toc-link');
    const tocSublinks = document.querySelectorAll('.toc-sublink');

    function updateActiveLink() {
        const sections = [
            { id: 'top', element: document.body, offset: 0 },
            { id: 'pub-papers', element: document.getElementById('pub-papers') },
            { id: 'paper-prep-1', element: document.getElementById('paper-prep-1') },
            { id: 'paper-prep-2', element: document.getElementById('paper-prep-2') },
            { id: 'paper-prep-3', element: document.getElementById('paper-prep-3') },
            { id: 'paper-prep-4', element: document.getElementById('paper-prep-4') },
            { id: 'paper-prep-5', element: document.getElementById('paper-prep-5') },
            { id: 'paper-review-jep', element: document.getElementById('paper-review-jep') },
            { id: 'paper-review-tp', element: document.getElementById('paper-review-tp') },
            { id: 'paper-prep-6', element: document.getElementById('paper-prep-6') },
            { id: 'collaborative-pubs', element: document.getElementById('collaborative-pubs') },
            { id: 'paper-review-jad', element: document.getElementById('paper-review-jad') },
            { id: 'paper-pub-ejp', element: document.getElementById('paper-pub-ejp') },
            { id: 'conf-talks', element: document.getElementById('conf-talks') },
            { id: 'research-projects', element: document.getElementById('research-projects') },
            { id: 'collab', element: document.getElementById('collab') },
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

        // Update main link active state
        tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
            // Activate Publications main link if currently on paper sub-item
            if (current.startsWith('paper-prep-') && link.getAttribute('href') === '#pub-papers') {
                link.classList.add('active');
            }
        });

        // Update sublink active state
        tocSublinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();

    // Smooth scroll - main links
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

    // Smooth scroll - sublinks
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
&emsp;&emsp;I am a second-year PhD candidate in Psychology at Northwest Normal University. I have published first-author papers in *Child Development*, *Schizophrenia Bulletin*, *BMC Medicine*, *International Journal of Clinical and Health Psychology*, and *Schizophrenia Research*, and I currently lead a provincial-level Graduate Innovation Star research project. My research centers on the computational, developmental, and psychopathological mechanisms of higher-order cognition. Drawing on cognitive-behavioral experiments, functional magnetic resonance imaging (fMRI), and related cognitive neuroscience paradigms—combined with computational modeling, machine learning, and large language models—I aim to elucidate the computational and developmental architecture of executive and higher-order cognitive functions, and to identify cognitive intervention targets in schizophrenia, major depressive disorder, and related psychiatric conditions.

**Research Directions:**
1. Computational neural mechanisms of executive functions
2. Brain-inspired cognitive modeling with large language models
3. Computational mechanisms of cognitive impairment in schizophrenia and depression

---

<a id="pub-papers"></a>

>**Email:** tyzhang9804@gmail.com

---
<br>
<br>

## Research Publications

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
    @media (prefers-color-scheme: dark) {
        .section-title {
            color: #f3f4f6;
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
    .timeline-item:nth-child(7) { animation-delay: 0.7s; }
    .timeline-item:nth-child(8) { animation-delay: 0.8s; }

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
        font-style: normal;
    }

    .tl-paper-title .journal-name {
        font-style: italic;
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
        content: '🔍 Click to enlarge';
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

    /* Figure Gallery - vertical scroll */
    .tl-gallery {
        margin-top: 18px;
        border-radius: 4px;
        border: 1px solid #e5e7eb;
        background: #f9fafb;
        max-height: 500px;
        overflow-y: auto;
    }
    .tl-gallery-item {
        padding: 12px 0;
    }
    .tl-gallery-item + .tl-gallery-item {
        border-top: 1px solid #e5e7eb;
    }
    .tl-gallery-label {
        text-align: center;
        font-weight: 700;
        font-size: 0.85em;
        color: #4a5568;
        padding: 8px 0 6px;
    }
    .tl-gallery img {
        width: 100%;
        height: auto;
        display: block;
        cursor: pointer;
    }
    .tl-gallery img:hover { opacity: 0.95; }

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
    <div class="timeline">

        <!-- Major Revision #6 - JEP:General -->
        <div class="timeline-item" id="paper-review-jep">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2026</div>
                <span class="tl-status review">Major Revision</span>
                <div class="tl-paper-title">Hierarchical organization of cognitive processes underlies low cross-task correlations in inhibitory control: Evidence from drift diffusion modeling</div>
                <div class="tl-journal">Submitted to Journal of Experimental Psychology: General</div>
                <div class="tl-info-line">
                    <span>(JCR Q1)</span>
                    <span class="tl-info-separator">|</span>
                    <span>Co-first Author (1st)</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/JEP-General.pdf" class="tl-link-btn">PDF</a>
                </div>
                <div class="tl-gallery">
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 1</div>
                        <img src="/zhang/images/JEP-Figure1.png" alt="Figure 1" onclick="openImgModal('/zhang/images/JEP-Figure1.png')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 2</div>
                        <img src="/zhang/images/JEP-Figure2.png" alt="Figure 2" onclick="openImgModal('/zhang/images/JEP-Figure2.png')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 3</div>
                        <img src="/zhang/images/JEP-Figure3.png" alt="Figure 3" onclick="openImgModal('/zhang/images/JEP-Figure3.png')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 4</div>
                        <img src="/zhang/images/JEP-Figure4.png" alt="Figure 4" onclick="openImgModal('/zhang/images/JEP-Figure4.png')">
                    </div>
                </div>
            </div>
        </div>

        <!-- R1 Under Review #7 - Translational Psychiatry -->
        <div class="timeline-item" id="paper-review-tp">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2026</div>
                <span class="tl-status review">R1 Under Review</span>
                <div class="tl-paper-title">Computational mechanisms of inhibitory control deficits in schizophrenia and major depressive disorder: Evidence from drift diffusion modeling</div>
                <div class="tl-journal">Submitted to Translational Psychiatry</div>
                <div class="tl-info-line">
                    <span>(JCR Q1, Nature Portfolio)</span>
                    <span class="tl-info-separator">|</span>
                    <span>First Author</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/Translational-Psychiatry.pdf" class="tl-link-btn">PDF</a>
                </div>
                <div class="tl-gallery">
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 1</div>
                        <img src="/zhang/images/TP-Figure1.png" alt="Figure 1" onclick="openImgModal('/zhang/images/TP-Figure1.png')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 2</div>
                        <img src="/zhang/images/TP-Figure2.png" alt="Figure 2" onclick="openImgModal('/zhang/images/TP-Figure2.png')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 3</div>
                        <img src="/zhang/images/TP-Figure3.png" alt="Figure 3" onclick="openImgModal('/zhang/images/TP-Figure3.png')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 4</div>
                        <img src="/zhang/images/TP-Figure4.png" alt="Figure 4" onclick="openImgModal('/zhang/images/TP-Figure4.png')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 5</div>
                        <img src="/zhang/images/TP-Figure5.png" alt="Figure 5" onclick="openImgModal('/zhang/images/TP-Figure5.png')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 6</div>
                        <img src="/zhang/images/TP-Figure6.png" alt="Figure 6" onclick="openImgModal('/zhang/images/TP-Figure6.png')">
                    </div>
                </div>
            </div>
        </div>

        <!-- Major Revision - Cognitive Science -->
        <div class="timeline-item" id="paper-prep-6">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2025</div>
                <span class="tl-status review">Major Revision</span>
                <div class="tl-paper-title">Boundaries of Executive Functions in Large Language Models: GPT-4o Selectively Replicates Human Performance</div>
                <div class="tl-journal">Submitted to Cognitive Science</div>
                <div class="tl-info-line">
                    <span>(JCR Q1)</span>
                    <span class="tl-info-separator">|</span>
                    <span>First Author</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/Cognitive-Science.pdf" class="tl-link-btn">PDF for Manuscript</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/Cognitive-Science-Supplementary.docx" class="tl-link-btn">Supplementary Materials</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://osf.io/hfnt6" class="tl-link-btn">Code</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger" onclick="toggleAbstract(this)">View Abstract</span>
                    <div class="tl-abstract-content">
                        <strong>Abstract:</strong> Large language models (LLMs) have demonstrated considerable capabilities in complex reasoning and problem-solving tasks that, in humans, depend on executive functions (EFs). However, the extent to which these models replicate human EF patterns remains unclear. We systematically evaluated GPT-4o's performance across three core EF dimensions—inhibitory control, working memory, and cognitive flexibility—using established behavioral paradigms. Additionally, we examined whether model-internal log probability parameters could serve as quantitative indicators of cognitive processing analogous to human neural activity. Using two independent datasets (N₁=1,970; N₂=39), we simulated trial-by-trial responses through GPT-4o while recording log probability metrics. Bayesian analyses revealed selective replication of human EF patterns. GPT-4o successfully reproduced human-like performance in interference inhibition (stroop), working memory capacity (digit span), and working memory updating (n-back). In contrast, the model showed divergent patterns in response inhibition (Go/No-Go), time-sensitive working memory updating (running memory task with presentation times of 1750 ms and 750 ms), and cognitive flexibility (number-switching task). Log probability parameters demonstrated task-specific associations with behavioral measures and corresponded with activation patterns in EF-related brain regions during working memory and task-switching paradigms. These findings suggest that GPT-4o captures specific aspects of human EF, particularly those involving symbolic representation and static information maintenance, while showing limitations in dynamic control and temporal processing. This selective replication pattern provides insights into both the computational basis of EF and the cognitive boundaries of current LLM architectures. Our results indicate that log probability parameters may offer a window into LLM cognitive processing, providing a methodological framework for evaluating artificial cognitive mechanisms.
                    </div>
                </div>
                <div class="tl-gallery">
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 1</div>
                        <img src="/zhang/images/CogSci-Figure1.jpg" alt="Figure 1" onclick="openImgModal('/zhang/images/CogSci-Figure1.jpg')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 2</div>
                        <img src="/zhang/images/CogSci-Figure2.jpg" alt="Figure 2" onclick="openImgModal('/zhang/images/CogSci-Figure2.jpg')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 3</div>
                        <img src="/zhang/images/CogSci-Figure3.jpg" alt="Figure 3" onclick="openImgModal('/zhang/images/CogSci-Figure3.jpg')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 4</div>
                        <img src="/zhang/images/CogSci-Figure4.jpg" alt="Figure 4" onclick="openImgModal('/zhang/images/CogSci-Figure4.jpg')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 5</div>
                        <img src="/zhang/images/CogSci-Figure5.jpg" alt="Figure 5" onclick="openImgModal('/zhang/images/CogSci-Figure5.jpg')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 6</div>
                        <img src="/zhang/images/CogSci-Figure6.jpg" alt="Figure 6" onclick="openImgModal('/zhang/images/CogSci-Figure6.jpg')">
                    </div>
                </div>
            </div>
        </div>


        <!-- Published - Child Development -->
        <div class="timeline-item" id="paper-prep-5">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">July 2026</div>
                <span class="tl-status published">Published</span>
                <div class="tl-paper-title"><strong><u>Zhang, T.</u></strong>, Gong, Y., & Zhao, X. (2026). Two systems, two timelines: Computational evidence for dissociable development in inhibitory control across childhood and adolescence. <strong><em>Child Development</em></strong>, aacag107. <a href="https://doi.org/10.1093/chidev/aacag107" class="tl-link-btn" style="font-weight: normal; font-size: 0.95em;">https://doi.org/10.1093/chidev/aacag107</a></div>
                <div class="tl-info-line">
                    <span>(JCR Q1, IF 3.8)</span>
                    <span class="tl-info-separator">|</span>
                    <span>First Author</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/Child-Development.pdf" class="tl-link-btn">PDF</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://github.com/tyzhang98/inhibitory-control-dev-cogmodel-code" class="tl-link-btn">Code</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger" onclick="toggleAbstract(this)">View Abstract</span>
                    <div class="tl-abstract-content">
                        <strong>Abstract:</strong> This study examined inhibitory control development in two samples of Chinese children: a primary sample (n = 1,122; 45.5% female; 91.9% Han, Mage = 12.42 years, range: 6.0–18.7) with 6-month longitudinal follow-up and an independent replication sample (n = 1,026; 45.1% female; 90.8% Han, Mage = 12.44 years, range: 6.1–18.8). Generalized Additive Models applied to Stroop and Go/No-Go tasks revealed four-phase nonlinear developmental trajectories. Response inhibition stabilized by 13.4 years, while interference inhibition developed until 15.8 years. Hierarchical drift diffusion modeling showed that interference inhibition developed through enhanced information accumulation (drift rate), whereas response inhibition developed through enhanced response bias control (starting point). Age-related processing speed improvements suggest shared foundational mechanisms. The findings contribute to a decision-computational framework.
                    </div>
                </div>
                <div class="tl-gallery">
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 1</div>
                        <img src="/zhang/images/ChildDev-Figure1.png" alt="Figure 1" onclick="openImgModal('/zhang/images/ChildDev-Figure1.png')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 2</div>
                        <img src="/zhang/images/ChildDev-Figure2.png" alt="Figure 2" onclick="openImgModal('/zhang/images/ChildDev-Figure2.png')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 3</div>
                        <img src="/zhang/images/ChildDev-Figure3.png" alt="Figure 3" onclick="openImgModal('/zhang/images/ChildDev-Figure3.png')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 4</div>
                        <img src="/zhang/images/ChildDev-Figure4.png" alt="Figure 4" onclick="openImgModal('/zhang/images/ChildDev-Figure4.png')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 5</div>
                        <img src="/zhang/images/ChildDev-Figure5.png" alt="Figure 5" onclick="openImgModal('/zhang/images/ChildDev-Figure5.png')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 6</div>
                        <img src="/zhang/images/ChildDev-Figure6.png" alt="Figure 6" onclick="openImgModal('/zhang/images/ChildDev-Figure6.png')">
                    </div>
                </div>
            </div>
        </div>

        <!-- Under Review #2 -->
        <div class="timeline-item" id="paper-prep-4">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2025</div>
                <span class="tl-status published">Accepted</span>
                <div class="tl-paper-title">Heterogeneous executive functions in schizophrenia delineate patient subtypes with different symptom profiles, inflammatory levels, and treatment responses</div>
                <div class="tl-journal">BMC Medicine</div>
                <div class="tl-info-line">
                    <span>(JCR Q1, IF 8.3)</span>
                    <span class="tl-info-separator">|</span>
                    <span>First Author</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/BMC-Medicine.pdf" class="tl-link-btn">PDF</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://github.com/tyzhang98/Code_Heterogeneous_EFs_in_SCZ" class="tl-link-btn">Code</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger" onclick="toggleAbstract(this)">View Abstract</span>
                    <div class="tl-abstract-content">
                        <strong>Introduction:</strong> Executive function (EF) is a heterogeneous neuropsychological construct, and impairments in EF dimensions represent a core aspect of psychopathology in schizophrenia that vary across individual patients. Currently, how this inter-individual variability characterizes schizophrenia subgroups, along with their distinctions in clinical characteristics and prognostic outcomes, remains unclear.<br><br>
                        <strong>Methods:</strong> Three EF dimensions (inhibitory control, working memory, cognitive flexibility) were assessed in the main sample (N=329), its follow-up subset, and an independently "recurring local validation" patient sample (N=114). Fuzzy clustering was applied to baseline EF assessments to discover and validate the core subtypes after excluding cluster-ambiguous cases in the main and independent samples, respectively. Subtype-based classification trained on the main sample was then tested in the independent sample. Importantly, the stability of these subtypes and their remission statuses, along with associated longitudinal changes in clinical and biological factors, were evaluated, and baseline subtype memberships were also used to predict outcomes.<br><br>
                        <strong>Results:</strong> Two longitudinally stable, independently validated core EF subtypes were identified, with significantly variable baseline positive, affective, and cognitive symptoms; working memory updating functioning; and peripheral inflammatory and metabolic levels. This two-subtype differentiation allowed an accurate classification of novel patients' subtype memberships and patients' remission statuses not due to overall severity at intake. Remitted patients experienced significantly greater reductions in negative and cognitive symptoms, improved working memory maintenance, lower peripheral inflammatory levels, and more-superior metabolic functions over time.<br><br>
                        <strong>Conclusions:</strong> EF subtyping successfully captured the symptomatic, biochemical, and prognostic variations in individuals with schizophrenia, which could help to stratify patients with this disorder for targeted treatments.
                    </div>
                </div>
                <div class="tl-gallery">
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 1</div>
                        <img src="/zhang/images/BMCMed-Figure1.jpg" alt="Figure 1" onclick="openImgModal('/zhang/images/BMCMed-Figure1.jpg')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 2</div>
                        <img src="/zhang/images/BMCMed-Figure2.jpg" alt="Figure 2" onclick="openImgModal('/zhang/images/BMCMed-Figure2.jpg')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 3</div>
                        <img src="/zhang/images/BMCMed-Figure3.jpg" alt="Figure 3" onclick="openImgModal('/zhang/images/BMCMed-Figure3.jpg')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 4</div>
                        <img src="/zhang/images/BMCMed-Figure4.png" alt="Figure 4" onclick="openImgModal('/zhang/images/BMCMed-Figure4.png')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 5</div>
                        <img src="/zhang/images/BMCMed-Figure5.png" alt="Figure 5" onclick="openImgModal('/zhang/images/BMCMed-Figure5.png')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 6</div>
                        <img src="/zhang/images/BMCMed-Figure6.jpg" alt="Figure 6" onclick="openImgModal('/zhang/images/BMCMed-Figure6.jpg')">
                    </div>
                </div>
            </div>
        </div>

        <!-- Published #1 -->
        <div class="timeline-item" id="paper-prep-3">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">March 2026</div>
                <span class="tl-status published">Published</span>
                <div class="tl-paper-title"><strong><u>Zhang, T.</u></strong>, Zhao, X., Yeo, B. T. T., Huo, X., Eickhoff, S. B., & Chen, J. (2026). Leveraging Stacked Classifiers for Multi-task Executive Function in Schizophrenia Yields Diagnostic and Prognostic Insights. <strong><em>Schizophrenia Bulletin</em></strong>, <em>52</em>(2), sbaf218. <a href="https://doi.org/10.1093/schbul/sbaf218" class="tl-link-btn" style="font-weight: normal; font-size: 0.95em;">https://doi.org/10.1093/schbul/sbaf218</a></div>
                <div class="tl-info-line">
                    <span>(JCR Q1, IF 4.8)</span>
                    <span class="tl-info-separator">|</span>
                    <span>Co-first Author</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/Schizophrenia-Bulletin.pdf" class="tl-link-btn">PDF</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://github.com/tyzhang98/SCZ-EF-stacked-classifiers" class="tl-link-btn">Code</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger" onclick="toggleAbstract(this)">View Abstract</span>
                    <div class="tl-abstract-content">
                        <strong>Background:</strong> Executive functioning (EF) impairments are often seen in mental disorders, particularly schizophrenia, where they relate to adverse outcomes. As a heterogeneous construct, how specifically each dimension of EF to characterize the diagnostic and prognostic aspects of schizophrenia remains opaque.<br><br>
                        <strong>Study Design:</strong> We used classification models with a stacking approach on systematically measured EFs using 6 tasks to discriminate 195 patients with schizophrenia from healthy individuals. Baseline EF measurements were moreover employed to predict symptomatically remitted or non-remitted prognostic subgroups. EF feature importance was determined at the group-level and the ensuing individual importance scores were associated with four symptom dimensions.<br><br>
                        <strong>Study Results:</strong> The models highlighted the importance of inhibitory control (interference and response inhibitions) or working memory in accurately identifying individuals with schizophrenia (area under the curve [AUC] = 0.87) or those in remission (AUC = 0.81). Patients who are correctly classified, in association with the contribution of interference inhibition function to our diagnostic classifier, present more severe baseline negative symptoms compared to those who are more likely to be misclassified. Also, linked to the function of working memory updating, patients who are successfully classified as remitted display milder cognitive symptoms at follow-up. Remitted patients do not differ significantly from non-remitted cases in baseline EF assessments or overall symptom severity.
                    </div>
                </div>
                <div class="tl-gallery">
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 1</div>
                        <img src="/zhang/images/SchizBull-Figure1.jpg" alt="Figure 1" onclick="openImgModal('/zhang/images/SchizBull-Figure1.jpg')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 2</div>
                        <img src="/zhang/images/SchizBull-Figure2.jpg" alt="Figure 2" onclick="openImgModal('/zhang/images/SchizBull-Figure2.jpg')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 3</div>
                        <img src="/zhang/images/SchizBull-Figure3.jpg" alt="Figure 3" onclick="openImgModal('/zhang/images/SchizBull-Figure3.jpg')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 4</div>
                        <img src="/zhang/images/SchizBull-Figure4.jpg" alt="Figure 4" onclick="openImgModal('/zhang/images/SchizBull-Figure4.jpg')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 5</div>
                        <img src="/zhang/images/SchizBull-Figure5.jpg" alt="Figure 5" onclick="openImgModal('/zhang/images/SchizBull-Figure5.jpg')">
                    </div>
                </div>
            </div>
        </div>

        <!-- Published #2 -->
        <div class="timeline-item" id="paper-prep-2">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">September 2025</div>
                <span class="tl-status published">Published</span>
                <div class="tl-paper-title"><strong><u>Zhang, T.</u></strong>, Su, M., Huo, X., & Zhao, X. (2025). Rethinking the effects of working memory training on executive functions in schizophrenia: A machine learning approach. <strong><em>International Journal of Clinical and Health Psychology</em></strong>, <em>25</em>(4), 100628. <a href="https://doi.org/10.1016/j.ijchp.2025.100628" class="tl-link-btn" style="font-weight: normal; font-size: 0.95em;">https://doi.org/10.1016/j.ijchp.2025.100628</a></div>
                <div class="tl-info-line">
                    <span>(JCR Q2, IF 4.4)</span>
                    <span class="tl-info-separator">|</span>
                    <span>Co-first Author</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/IJCHP.pdf" class="tl-link-btn">PDF</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://github.com/tyzhang98/ML-PsyExecShift" class="tl-link-btn">Code</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger" onclick="toggleAbstract(this)">View Abstract</span>
                    <div class="tl-abstract-content">
                        <strong>Background:</strong> Executive dysfunction in schizophrenia profoundly impairs functional outcomes and remains insufficiently addressed by standard pharmacological treatments. While computerized cognitive training offers promise, traditional evaluation methods often fail to capture nuanced improvements along the psychosis-health continuum. This study aims to quantify executive function (EF) profile changes following working memory training and identify robust baseline predictors of treatment response.<br><br>
                        <strong>Methods:</strong> Ninety-four schizophrenia patients were randomized to adaptive N-back training (n = 32), non-adaptive 1-back control (n = 33), or treatment-as-usual (n = 29). EF was assessed across working memory, cognitive flexibility, and inhibitory control domains. A support vector machine classifier, trained on an independent sample (195 patients, 169 controls) and calibrated via Platt scaling, quantified EF profile changes. An exploratory framework based on Granger causality principles identified baseline treatment predictors.<br><br>
                        <strong>Results:</strong> Adaptive training produced significant near-transfer effects on untrained working memory tasks and reduced general psychopathology (pfdr < 0.05), but no far-transfer effects to other EF domains. The probability of neurotypical EF classification increased substantially in the adaptive group (13.21% to 38.79%, p < 0.001), correlating with symptom reduction. Working memory maintenance and response inhibition emerged as the most robust baseline predictors of treatment response.<br><br>
                        <strong>Conclusions:</strong> Working memory training induces meaningful shifts in EF profiles in schizophrenia, promoting movement along the psychosis-health continuum toward neurotypical functioning. The classifier-based approach provides a more refined assessment compared to traditional binary measures, while the exploratory framework identifies specific EF domains predicting treatment response with potential causal relevance. These findings warrant validation through larger, multi-center trials with extended follow-up periods.
                    </div>
                </div>
                <div class="tl-gallery">
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 1</div>
                        <img src="/zhang/images/IJCHP-Figure1.jpg" alt="Figure 1" onclick="openImgModal('/zhang/images/IJCHP-Figure1.jpg')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 2</div>
                        <img src="/zhang/images/IJCHP-Figure2.png" alt="Figure 2" onclick="openImgModal('/zhang/images/IJCHP-Figure2.png')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 3</div>
                        <img src="/zhang/images/IJCHP-Figure3.png" alt="Figure 3" onclick="openImgModal('/zhang/images/IJCHP-Figure3.png')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 4</div>
                        <img src="/zhang/images/IJCHP-Figure4.jpg" alt="Figure 4" onclick="openImgModal('/zhang/images/IJCHP-Figure4.jpg')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 5</div>
                        <img src="/zhang/images/IJCHP-Figure5.jpg" alt="Figure 5" onclick="openImgModal('/zhang/images/IJCHP-Figure5.jpg')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 6</div>
                        <img src="/zhang/images/IJCHP-Figure6.jpg" alt="Figure 6" onclick="openImgModal('/zhang/images/IJCHP-Figure6.jpg')">
                    </div>
                </div>
            </div>
        </div>

        <!-- Published #3 -->
        <div class="timeline-item" id="paper-prep-1">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">June 2025</div>
                <span class="tl-status published">Published</span>
                <div class="tl-paper-title"><strong><u>Zhang, T.</u></strong>, Yang, X., Mu, P., Huo, X., & Zhao, X. (2025). Stage-specific computational mechanisms of working memory deficits in first-episode and chronic schizophrenia. <strong><em>Schizophrenia Research</em></strong>, <em>282</em>, 203-213. <a href="https://doi.org/10.1016/j.schres.2025.06.012" class="tl-link-btn" style="font-weight: normal; font-size: 0.95em;">https://doi.org/10.1016/j.schres.2025.06.012</a></div>
                <div class="tl-info-line">
                    <span>(JCR Q2, IF 3.5)</span>
                    <span class="tl-info-separator">|</span>
                    <span>First Author</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/Schizophrenia-Research.pdf" class="tl-link-btn">PDF</a>
                    <span class="tl-info-separator">|</span>
                    <a href="https://github.com/tyzhang98/Two-back-task-HDDM" class="tl-link-btn">Code</a>
                </div>
                <div class="tl-abstract">
                    <span class="tl-abstract-trigger" onclick="toggleAbstract(this)">View Abstract</span>
                    <div class="tl-abstract-content">
                        <strong>Background:</strong> Cognitive dysfunction, particularly working memory (WM) impairment, constitutes a core feature of schizophrenia and is largely unresponsive to available antipsychotic treatments. The computational mechanisms underlying WM deficits at different illness stages and their associations with clinical symptom dimensions remain poorly understood.<br><br>
                        <strong>Methods:</strong> We applied hierarchical drift diffusion modeling (HDDM) to dissect latent cognitive processes underlying WM performance in a two-back task among patients with first-episode schizophrenia (FES, N = 103, illness duration ≤2 years), chronic schizophrenia (ChSz, N = 108, illness duration ≥5 years), and healthy controls (HCs, N = 85). Multiple regression and mediation analyses were conducted to examine associations between HDDM parameters, clinical symptoms, and conventional metrics.<br><br>
                        <strong>Results:</strong> Both patient groups exhibited significant WM deficits compared to HCs, with ChSz patients demonstrating more pronounced impairments than FES patients. HDDM analysis revealed that patients showed significantly reduced drift rate and prolonged non-decision time compared to HCs. Notably, while non-decision time remained comparable between FES and ChSz groups, drift rate was significantly lower in ChSz patients, mediated the relationship between illness stage and WM performance, and negatively correlated with negative symptoms and general psychopathology.<br><br>
                        <strong>Conclusions:</strong> This study reveals distinct computational profiles of WM deficits across different stages of schizophrenia. While non-decision time impairments emerge early and persist, reduced drift rate progressively deteriorates with illness duration and is closely linked to specific clinical symptoms. These findings enhance our understanding of WM dysfunction across illness stages and support the development of targeted cognitive interventions tailored to illness stage and symptom severity.
                    </div>
                </div>
                <div class="tl-gallery">
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 1</div>
                        <img src="/zhang/images/SchizRes-Figure1.jpg" alt="Figure 1" onclick="openImgModal('/zhang/images/SchizRes-Figure1.jpg')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 2</div>
                        <img src="/zhang/images/SchizRes-Figure2.jpg" alt="Figure 2" onclick="openImgModal('/zhang/images/SchizRes-Figure2.jpg')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 3</div>
                        <img src="/zhang/images/SchizRes-Figure3.jpg" alt="Figure 3" onclick="openImgModal('/zhang/images/SchizRes-Figure3.jpg')">
                    </div>
                    <div class="tl-gallery-item">
                        <div class="tl-gallery-label">Figure 4</div>
                        <img src="/zhang/images/SchizRes-Figure4.jpg" alt="Figure 4" onclick="openImgModal('/zhang/images/SchizRes-Figure4.jpg')">
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Image Modal -->
<div id="imgModal" class="img-modal" onclick="closeImgModal()">
    <span class="img-modal-close" onclick="closeImgModal()">&times;</span>
    <img class="img-modal-content" id="modalImg">
</div>

<script>
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
}

function closeImgModal() {
    var modal = document.getElementById("imgModal");
    modal.style.display = "none";
}

// Close modal on ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImgModal();
    }
});

</script>

<a id="collaborative-pubs"></a>
<br>
<br>

## Collaborative Publications

<div class="publications-container">
    <div class="timeline">

        <!-- Collaborative - Journal of Affective Disorders (史昊阳) -->
        <div class="timeline-item" id="paper-review-jad">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2026</div>
                <span class="tl-status review">Under Review</span>
                <div class="tl-paper-title">Identifying Generative AI Use Profiles Among College Students Using Latent Profile Analysis: Associations with Depression and Anxiety</div>
                <div class="tl-journal">Submitted to Journal of Affective Disorders</div>
                <div class="tl-info-line">
                    <span>(JCR Q1)</span>
                    <span class="tl-info-separator">|</span>
                    <span>Co-first Author (2nd)</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/Journal-of-Affective-Disorders.pdf" class="tl-link-btn">PDF</a>
                </div>
            </div>
        </div>

        <!-- Collaborative - European Journal of Psychiatry (杨小龙) -->
        <div class="timeline-item" id="paper-pub-ejp">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="tl-date">2026</div>
                <span class="tl-status published">Published</span>
                <div class="tl-journal">Yang, X., Zhang, T., Ren, X., Wang, Y., Lv, H., Su, M., Huo, X., & Zhao, X. (2026). Differential profiles of executive function dimensions in first-episode and chronic schizophrenia: Identifying markers of illness stage. <em>The European Journal of Psychiatry</em>, 40(2), 100351. <a href="https://doi.org/10.1016/j.ejpsy.2026.100351" class="tl-link-btn" style="font-weight: normal; font-size: 0.95em;">https://doi.org/10.1016/j.ejpsy.2026.100351</a></div>
                <div class="tl-info-line">
                    <span>Co-first Author (2nd)</span>
                    <span class="tl-info-separator">|</span>
                    <a href="https://tyzhang98.github.io/zhang/files/European-Journal-of-Psychiatry.pdf" class="tl-link-btn">PDF</a>
                </div>
            </div>
        </div>

    </div>
</div>

<a id="conf-talks"></a>
<br>
<br>

## 2. Conference Presentations
**Joint ESCoP-CoPM Meeting 2026**
- Format: Oral presentation (Accepted)
- Date: September 2026
- Location: Zhejiang University, Hangzhou, China

**2026 Tsinghua University Department of Psychology and Cognitive Sciences PhD Forum**
- Format: Poster presentation [Download Poster (PDF)](https://tyzhang98.github.io/zhang/files/slides5.pdf)
- Date: April 2026
- Location: Tsinghua University, Beijing, China

**Lanzhou Third People's Hospital Academic Lecture**
- Topic: Application of AI and Cognitive Modeling in Executive Function Research in Schizophrenia [Download Slides (PDF)](https://tyzhang98.github.io/zhang/files/slides4.pdf)
- Date: December 5, 2025
- Location: Lanzhou Third People's Hospital
- [News Report](https://mp.weixin.qq.com/s/rTePQw_mfU1r-ok_Hh4imQ)


**2025 Joint Forum on Psychology and Cognitive Science & Peking University Graduate Forum**
- Format: Poster presentation [Download Poster (PDF)](https://tyzhang98.github.io/zhang/files/slides1.pdf)
- Date: April 19, 2025
- Location: Peking University

**Lanzhou Third People's Hospital Academic Lecture**
- Topic: Computational Psychiatry: From Theory to Practice [Download Slides (PDF)](https://tyzhang98.github.io/zhang/files/slides3.pdf)
- Date: November 26, 2024
- Location: Lanzhou Third People's Hospital
- [News Report](https://mp.weixin.qq.com/s/9FDqAlwUzW0x5VWXVVJ02g?scene=1)

**25th National Conference of Psychology**
- Format: Oral presentation at symposium [Download Slides (PDF)](https://tyzhang98.github.io/zhang/files/slides2.pdf)
- Date: October 2023
- Location: Sichuan Normal University, Chengdu, China

<a id="research-projects"></a>
<br>
<br>
<br>

## 3. Research Projects

**Principal Investigator**
- **2024 Provincial Graduate Innovation Star Project (No. 2025CXZX-366)** (Completed December 2025)

**Co-Investigator**
- **National Natural Science Foundation of China (NSFC) Regional Project** (32260207) "Cognitive Training for Rural Children's Executive Functions" (Participant, 2022–2025)
- **National Key R&D Program** (2021ZD0203800) "Brain Science and Brain-Inspired Research" Major Project: Neural Circuit Mechanisms of Attention (Task 4: Attention in Special Populations) (Participant, 2021.12–2026.12)

<a id="collab"></a>
<br>
<br>
<br>

## 4. Seeking Research Collaboration

### Contact

Welcome academic collaboration and exchange! For collaboration intentions or academic discussions, please contact: **tyzhang9804@gmail.com**

> **Note:** As a current PhD candidate, collaborations require advisor approval

<a id="resources"></a>
<br>
<br>
<br>

## 5. Research Resources

### Open Code
- **Stacking Model with SHAP Explanation** ([Download Code](https://tyzhang98.github.io/zhang/files/Stacking-SHAP.zip))
  - **Citation:** Zhang, T., Zhao, X., Yeo, B. T. T., Huo, X., Eickhoff, S. B., & Chen, J. (2024). Leveraging stacked classifiers for multi-task executive function in schizophrenia yields diagnostic and prognostic insights. *medRxiv*. https://doi.org/10.1101/2024.12.05.24318587

<br>
<br>

---

<p align="center">
Last updated on April 11, 2026, at 17:27:00 (GMT+8) by Tongyi Zhang, Lanzhou, China.
</p>

---

<div id="locationMap" style="height: 400px; width: 100%; margin: 20px 0; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);"></div>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
  window.addEventListener('load', function() {
    var map = L.map('locationMap').setView([36.0611, 103.8343], 13);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Esri',
      maxZoom: 18
    }).addTo(map);

    L.marker([36.0611, 103.8343]).addTo(map)
      .bindPopup('<div style="text-align: center; padding: 5px;"><b>Northwest Normal University<br>西北师范大学</div>')
      .openPopup();
  });
</script>

---
