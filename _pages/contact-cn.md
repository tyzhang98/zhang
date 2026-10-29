---
layout: vision
title: 联系方式
heading: 联系方式
permalink: /contact-cn/
lang: cn
nav_key: contact
other_lang_url: /contact/
---

**邮箱：** [tyzhang9804@gmail.com](mailto:tyzhang9804@gmail.com)

**博士培养单位：** 西北师范大学心理学院，兰州，中国。

**当前访学单位：** 北京大学心理与认知科学学院，北京，中国。

<p class="profile-links"><a href="mailto:tyzhang9804@gmail.com">tyzhang9804@gmail.com</a> · <a href="https://scholar.google.com/citations?hl=zh-CN&amp;user=1gEP7sIAAAAJ">Google Scholar</a> · <a href="https://orcid.org/0009-0006-4909-6949">ORCID</a> · <a href="https://github.com/tyzhang98">GitHub</a></p>

<div id="locationMap" style="height: 400px; width: 100%; margin: 20px 0; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.15);"></div>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
  window.addEventListener('load', function() {
    var map = L.map('locationMap').setView([39.9928, 116.3055], 13);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'Esri',
      maxZoom: 18
    }).addTo(map);

    L.marker([39.9928, 116.3055]).addTo(map)
      .bindPopup('<div style="text-align: center; padding: 5px;"><b>北京大学（访学）<br>Peking University</div>')
      .openPopup();
  });
</script>
