---
title: "Details"
layout: default
---

<!-- It is recommended to put this in the template (e.g., _includes/head.html), but direct reference here is also fine -->
<link rel="stylesheet" href="{{ '/assets/css/wiki.css' | relative_url }}">

<style>
/* If you only want the floating button style, put it here. Most other styles are recommended to be written in wiki.css. */
.floating-button {
  position: fixed;
  top: 10px;
  left: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}
.floating-button:hover {
  background-color: #0056b3;
}
</style>

<div style="margin-bottom: 16px; padding: 10px; background: #444; color: #fff; border-radius: 8px; text-align: left;">
  <h2>Overview</h2><br>
  Here you will find illustrations of actions, detailed explanations of intents and values, and answers to frequently asked questions.
</div>

<div style="margin-bottom: 16px; padding: 10px; background: #444; color: #fff; border-radius: 8px; text-align: left;">
  <strong>Navigation</strong><br>
  The following is the navigation bar. Click on any item below to jump to the corresponding section below.
</div>

<div class="container" style="display: flex; width: 100%;">
  <div class="mysidebar" id="sidebar_action" style="padding:10px;"></div>
  <div class="mysidebar" id="sidebar_intent" style="padding:10px;"></div>
  <div style="display: flex; flex-direction: column;">
    <div class="mysidebar" id="sidebar_value" style="padding:10px;"></div>
    <div class="mysidebar" id="sidebar_qa" style="padding:10px;"></div>
  </div>
</div>

<button id="backToTopBtn" title="Back to Top">⬆️</button>

<div id="div_gif">
  <div class="divider">Action</div>
  <div class="section" style="display: flex">
    <div>
      <div class="gallery" id="gallery_gif"></div>
    </div>
  </div>
</div>

<div id="div_intent">
  <div class="divider">Intent</div>
  <div class="section" style="display: flex">
    <div>
      <div class="gallery" id="gallery_intent"></div>
    </div>
  </div>
</div>

<div id="div_value">
  <div class="divider">Value</div>
  <div class="section" style="display: flex">
    <div>
      <div class="gallery" id="gallery_value"></div>
    </div>
  </div>
</div>

<div id="div_qa">
  <div class="divider">FAQ</div>
  <div class="section" style="display: flex">
    <div>
      <div class="gallery" id="gallery_qa"></div>
    </div>
  </div>
</div>

<script src="{{ '/assets/js/wiki.js' | relative_url }}"></script>
