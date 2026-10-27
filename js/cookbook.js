// Cookbook: search + tag filters narrow the list; "Draw a dish" picks at
// random from whatever currently matches. The URL hash holds the shown dish.
(function () {
  var recipes = window.RECIPES;
  var bySlug = {};
  recipes.forEach(function (r) { bySlug[r.slug] = r; });

  var state = { query: "", tags: new Set(), current: null };

  var $ = function (id) { return document.getElementById(id); };
  var search = $("search");
  var card = $("card");
  var list = $("list");
  var count = $("match-count");
  var groups = $("tag-groups");
  var clear = $("clear");

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  // Lowercase, accent-free text for matching ("do chua" finds "đồ chua").
  function fold(s) {
    return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d");
  }

  recipes.forEach(function (r) {
    r._text = fold([
      r.name, r.aka, r.summary, r.principle, r.tags.join(" "),
      (r.ingredients || []).map(function (g) { return g.items.join(" "); }).join(" "),
      (r.variations || []).map(function (v) { return v.name + " " + v.note; }).join(" "),
    ].join(" "));
  });

  function matches(r, tags) {
    var words = fold(state.query).split(/\s+/).filter(Boolean);
    for (var i = 0; i < words.length; i++) if (r._text.indexOf(words[i]) < 0) return false;
    var ok = true;
    tags.forEach(function (t) { if (r.tags.indexOf(t) < 0) ok = false; });
    return ok;
  }

  function filtered() {
    return recipes.filter(function (r) { return matches(r, state.tags); });
  }

  function renderTags() {
    groups.innerHTML = window.TAG_GROUPS.map(function (g) {
      var buttons = g.tags.map(function (t) {
        // Count what you'd get if this tag were toggled on.
        var withTag = new Set(state.tags); withTag.add(t);
        var n = recipes.filter(function (r) { return matches(r, withTag); }).length;
        var on = state.tags.has(t);
        return '<button type="button" class="tag" data-tag="' + esc(t) + '" aria-pressed="' + on + '"' +
          (!on && n === 0 ? " disabled" : "") + ">" + esc(t) + ' <span class="count">' + n + "</span></button>";
      }).join("");
      return '<fieldset class="tag-group"><legend>' + esc(g.name) + '</legend><div class="tag-list">' + buttons + "</div></fieldset>";
    }).join("");
    clear.hidden = !state.tags.size && !state.query;
  }

  function renderList() {
    var rows = filtered();
    count.textContent = rows.length === recipes.length
      ? recipes.length + " dishes in the book"
      : rows.length + " of " + recipes.length + " dishes match";
    if (!rows.length) {
      list.innerHTML = '<li class="empty-state">Nothing matches. Try fewer tags.</li>';
      return;
    }
    list.innerHTML = rows.map(function (r) {
      var cur = state.current && state.current.slug === r.slug;
      return '<li class="recipe-row"' + (cur ? ' aria-current="true"' : "") + '>' +
        '<button type="button" data-slug="' + r.slug + '">' +
        '<span class="row-name">' + esc(r.name) + "</span>" +
        '<span class="row-kind">' + esc(r.kind) + "</span>" +
        '<span class="row-summary">' + esc(r.summary) + "</span>" +
        "</button></li>";
    }).join("");
  }

  function renderCard(r) {
    if (!r) {
      card.innerHTML = '<p class="empty-state">Nothing to draw. Loosen the filters.</p>';
      return;
    }
    var ing = (r.ingredients || []).map(function (g) {
      return '<p class="ing-group">' + esc(g.group) + "</p><ul>" +
        g.items.map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("") + "</ul>";
    }).join("");
    var method = "<ol>" + r.method.map(function (s) { return "<li>" + esc(s) + "</li>"; }).join("") + "</ol>";
    var vars = r.variations ? '<div class="full"><h3>Variations</h3><dl class="variations">' +
      r.variations.map(function (v) { return "<dt>" + esc(v.name) + "</dt><dd>" + esc(v.note) + "</dd>"; }).join("") +
      "</dl></div>" : "";
    var serve = r.serve ? '<div class="full"><h3>Serve</h3><p>' + esc(r.serve) + "</p></div>" : "";
    var related = r.related ? '<div class="full related"><h3>See also</h3>' +
      r.related.filter(function (s) { return bySlug[s]; }).map(function (s) {
        return '<a href="#' + s + '">' + esc(bySlug[s].name) + "</a>";
      }).join("") + "</div>" : "";

    card.innerHTML =
      '<span class="ornament" aria-hidden="true"></span>' +
      '<p class="card-label smallcaps">' + (r.kind === "foundation" ? "A foundation" : "A dish") + "</p>" +
      "<h2>" + esc(r.name) + "</h2>" +
      (r.aka ? '<p class="aka">' + esc(r.aka) + "</p>" : "") +
      '<p class="summary">' + esc(r.summary) + "</p>" +
      '<div class="chip-row">' + r.tags.map(function (t) { return '<span class="chip">' + esc(t) + "</span>"; }).join("") + "</div>" +
      '<div class="recipe-body">' +
        (r.principle ? '<p class="principle">' + esc(r.principle) + "</p>" : "") +
        "<div><h3>What goes in</h3>" + ing + "</div>" +
        "<div><h3>Method</h3>" + method + "</div>" +
        vars + serve + related +
      "</div>";
  }

  function show(r, opts) {
    state.current = r;
    renderCard(r);
    renderList();
    if (r && location.hash.slice(1) !== r.slug) history.replaceState(null, "", "#" + r.slug);
    if (opts && opts.scroll) card.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function draw() {
    var pool = filtered();
    if (pool.length > 1 && state.current) {
      pool = pool.filter(function (r) { return r.slug !== state.current.slug; });
    }
    show(pool.length ? pool[Math.floor(Math.random() * pool.length)] : null);
  }

  function refresh() {
    renderTags();
    renderList();
  }

  search.addEventListener("input", function () {
    state.query = search.value;
    refresh();
  });

  groups.addEventListener("click", function (e) {
    var b = e.target.closest(".tag");
    if (!b) return;
    var t = b.dataset.tag;
    if (state.tags.has(t)) state.tags.delete(t); else state.tags.add(t);
    refresh();
  });

  clear.addEventListener("click", function () {
    state.tags.clear();
    state.query = search.value = "";
    refresh();
  });

  list.addEventListener("click", function (e) {
    var b = e.target.closest("button[data-slug]");
    if (b) show(bySlug[b.dataset.slug], { scroll: true });
  });

  $("draw").addEventListener("click", function () { draw(); });

  window.addEventListener("hashchange", function () {
    var r = bySlug[location.hash.slice(1)];
    if (r && r !== state.current) show(r, { scroll: true });
  });

  refresh();
  var initial = bySlug[location.hash.slice(1)];
  if (initial) show(initial, { scroll: true }); else draw();
})();
