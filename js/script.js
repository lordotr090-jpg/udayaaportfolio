(function () {
  "use strict";

  // ---- Footer year ----
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Mobile nav toggle ----
  var toggle = document.getElementById("navToggle");
  var navList = document.getElementById("nav-list");
  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      var isOpen = navList.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    navList.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navList.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- Build filter buttons + project cards from projects-data.js ----
  var filterRow = document.getElementById("filterRow");
  var grid = document.getElementById("projectGrid");
  if (!grid || typeof PROJECTS === "undefined") return;

  var categories = (typeof PROJECT_CATEGORIES !== "undefined" && PROJECT_CATEGORIES.length)
    ? PROJECT_CATEGORIES
    : Array.from(new Set(PROJECTS.map(function (p) { return p.category; })));

  categories.forEach(function (cat) {
    var btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", "false");
    btn.dataset.filter = cat;
    btn.textContent = cat;
    filterRow.appendChild(btn);
  });

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderCard(project) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.className = "project-card";
    a.href = project.link || "#";
    a.target = "_blank";
    a.rel = "noopener";
    a.setAttribute(
      "aria-label",
      project.title + " — " + project.category + ", opens project files in Google Drive"
    );

    var thumbHtml;
    if (project.thumbnail) {
      thumbHtml =
        '<img class="project-thumb" src="' + escapeHtml(project.thumbnail) +
        '" alt="Thumbnail for ' + escapeHtml(project.title) + '" loading="lazy">';
    } else {
      thumbHtml =
        '<div class="placeholder-thumb">Add a thumbnail for<br>&ldquo;' +
        escapeHtml(project.title) + '&rdquo;</div>';
    }

    a.innerHTML =
      thumbHtml +
      '<div class="project-body">' +
        '<p class="project-cat">' + escapeHtml(project.category) + '</p>' +
        '<h3 class="project-title">' + escapeHtml(project.title) + '</h3>' +
        '<p class="project-desc">' + escapeHtml(project.description || "") + '</p>' +
        '<span class="project-link-hint">Open in Drive &rarr;</span>' +
      '</div>';

    li.appendChild(a);
    return li;
  }

  function renderGrid(filter) {
    grid.innerHTML = "";
    var list = filter === "All"
      ? PROJECTS
      : PROJECTS.filter(function (p) { return p.category === filter; });

    if (!list.length) {
      var empty = document.createElement("li");
      empty.className = "project-empty";
      empty.textContent = "No projects added for this category yet.";
      grid.appendChild(empty);
      return;
    }
    list.forEach(function (p) { grid.appendChild(renderCard(p)); });
  }

  filterRow.addEventListener("click", function (e) {
    var btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filterRow.querySelectorAll(".filter-btn").forEach(function (b) {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
    renderGrid(btn.dataset.filter);
  });

  renderGrid("All");
})();
