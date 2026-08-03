/* 多页渲染：所有页面共用 SITE(data.js) 与样式。
   页面通过 <script>window.PAGE_ID='xxx'</script> 声明展示哪个模块。
   渲染为单一遍历：每个页面 = 结论速览(可选) + blocks[] + 洞察(可选) + 来源。
   block.type ∈ table | cards | bullets | company | compare | tabs | taxonomy | pages */
(function () {
  var SITE = window.SITE;
  var PAGE_ID = window.PAGE_ID || (SITE.nav && SITE.nav[0].id) || 'earnings';

  var PAGES = [
    { id: 'earnings', file: 'index.html',   label: '财报',        ico: '📊' },
    { id: 'pc',       file: 'pc.html',       label: 'PC/平板新品', ico: '💻' },
    { id: 'models',   file: 'models.html',   label: 'AI 模型',      ico: '🧠' },
    { id: 'agent',    file: 'agent.html',    label: '端侧 Agent',   ico: '🤖' },
    { id: 'industry', file: 'industry.html', label: '端侧 AI 产业', ico: '🌐' },
    { id: 'method',   file: 'method.html',   label: '方法论',      ico: '📚' }
  ];
  function fileOf(id) {
    for (var i = 0; i < PAGES.length; i++) if (PAGES[i].id === id) return PAGES[i].file;
    return 'index.html';
  }

  var view = document.getElementById('view');
  var sideNav = document.getElementById('sideNav');
  var bottomNav = document.getElementById('bottomNav');
  var topTitle = document.getElementById('topTitle');
  var topMeta = document.getElementById('topMeta');
  var brandSub = document.getElementById('brandSub');
  var sideFoot = document.getElementById('sideFoot');
  var toTop = document.getElementById('toTop');
  var menuBtn = document.getElementById('menuBtn');
  var scrim = document.getElementById('scrim');
  var sidebar = document.querySelector('.sidebar');

  brandSub.textContent = SITE.meta.period;
  sideFoot.innerHTML = '最后更新 <b>' + (SITE.meta.lastUpdated || '—') + '</b><br>' +
    '更新频率：' + (SITE.meta.updateCadence || '按需') + '<br>' +
    '涨/好 = <span style="color:#e03131;font-weight:700">红</span> · 跌/弱 = <span style="color:#2f9e44;font-weight:700">绿</span>（A股惯例）<br>' +
    '数据与应用分离 · 可溯源';

  function cite(src) {
    if (!src) return '';
    return '<a class="cite" href="' + src.u + '" target="_blank" rel="noopener">🔗 ' + src.n + '</a>';
  }

  function renderNav() {
    var html = '';
    PAGES.forEach(function (p) {
      var active = (p.id === PAGE_ID) ? ' class="active"' : '';
      html += '<a href="' + p.file + '"' + active + '><span class="ico">' + p.ico + '</span><span>' + p.label + '</span></a>';
    });
    sideNav.innerHTML = html;
    bottomNav.innerHTML = html;
  }

  /* ---------- 基础块渲染 ---------- */

  function blockHeading(title) {
    return '<div class="block-h">' + title + '</div>';
  }

  function cardHTML(c) {
    var cls = '';
    if (c.v) {
      if (c.v.indexOf('+') === 0) cls = ' pos';
      else if (c.v.indexOf('-') === 0) cls = ' neg';
    }
    var edge = c.edge ? '<span class="edge-tag">' + c.edge + '</span>' : '';
    return '<div class="card"><div class="k">' + c.k + edge + '</div><div class="v' + cls + '">' + c.v +
      '</div><div class="d">' + c.d + '</div>' + cite(c.src) + '</div>';
  }

  function cardsHTML(title, cards) {
    var h = blockHeading(title) + '<div class="cards">';
    cards.forEach(function (c) { h += cardHTML(c); });
    return h + '</div>';
  }

  function tableHTML(table) {
    var h = '<div class="tablewrap"><table><thead><tr>';
    table.head.forEach(function (hd) { h += '<th>' + hd + '</th>'; });
    h += '</tr></thead><tbody>';
    table.rows.forEach(function (r) {
      h += '<tr>';
      r.cells.forEach(function (cell) { h += '<td>' + cell + '</td>'; });
      h += '<td class="srccol">' + cite(r.src) + '</td>';
      h += '</tr>';
    });
    h += '</tbody></table></div>';
    return h;
  }

  function tableBlock(title, table) {
    return blockHeading(title) + tableHTML(table);
  }

  function bulletsHTML(title, items) {
    var h = blockHeading(title) + '<ul class="bullets">';
    items.forEach(function (b) { h += '<li>' + (b.t || '') + ' ' + cite(b.src) + '</li>'; });
    return h + '</ul>';
  }

  function companyHTML(title, companies) {
    var h = blockHeading(title);
    companies.forEach(function (c) {
      var m = '';
      (c.metrics || []).forEach(function (cd) { m += cardHTML(cd); });
      var ins = '';
      (c.insights || []).forEach(function (it) {
        ins += '<div class="insight' + (it.type ? (' ' + it.type) : '') + '">' + it.html + ' ' + cite(it.src) + '</div>';
      });
      var srcLine = c.src ? '<div class="co-src">📄 官方原始：' + cite(c.src) + '</div>' : '';
      h += '<div class="co-block"><div class="co-head"><span class="co-name">' + c.name + '</span>' +
        '<span class="co-tag">' + (c.tag || '') + '</span></div>' + srcLine +
        '<div class="co-summary">' + c.summary + '</div>' +
        '<div class="co-metrics">' + m + '</div>' + ins + '</div>';
    });
    return h;
  }

  function compareHTML(chart) {
    var vals = chart.items.map(function (i) { return i.value; });
    var max = Math.max.apply(null, vals), min = Math.min.apply(null, vals);
    var lmax = Math.log10(max), lmin = Math.log10(min);
    var h = '<div class="compare"><h4>' + chart.title + '</h4><div class="bars">';
    chart.items.forEach(function (i) {
      var w = (lmax === lmin) ? 100 : (Math.log10(i.value) - lmin) / (lmax - lmin) * 100;
      w = Math.max(w, 8);
      h += '<div class="bar-row"><span class="bar-name">' + i.name + '</span>' +
        '<div class="bar-track"><div class="bar-fill" style="width:' + w.toFixed(1) + '%"></div></div>' +
        '<span class="bar-val">' + i.label + '</span></div>';
    });
    h += '</div>';
    if (chart.note) h += '<div class="compare-note">注：' + chart.note + '</div>';
    return h + '</div>';
  }

  function taxonomyHTML(title, items) {
    var h = blockHeading(title) + '<div class="taxo-grid">';
    items.forEach(function (t) {
      var ex = '<div class="taxo-ex">';
      (t.examples || []).forEach(function (e) {
        ex += '<a class="cite" href="' + e.u + '" target="_blank" rel="noopener">🔗 ' + e.n + '</a>';
      });
      ex += '</div>';
      h += '<div class="taxo-card"><div class="taxo-cat">' + t.cat + '</div>' +
        '<div class="taxo-desc">' + t.desc + '</div>' + ex + '</div>';
    });
    return h + '</div>';
  }

  function pagesHTML(title, pages) {
    var h = blockHeading(title);
    pages.forEach(function (p) {
      var focus = '<ul class="focus">';
      (p.focus || []).forEach(function (f) { focus += '<li>' + f + '</li>'; });
      focus += '</ul>';
      var cats = '';
      (p.cats || []).forEach(function (c) { cats += '<span class="cat-tag">' + c + '</span>'; });
      var ex = '';
      (p.examples || []).forEach(function (e) {
        ex += '<a class="cite" href="' + e.u + '" target="_blank" rel="noopener">🔗 ' + e.n + '</a>';
      });
      h += '<div class="page-logic"><div class="pl-head">' + p.label + '</div>' +
        '<div class="pl-row"><span class="pl-k">分析逻辑</span><span class="pl-v">' + p.logic + '</span></div>' +
        '<div class="pl-row"><span class="pl-k">看数维度</span><span class="pl-v">' + focus + '</span></div>' +
        '<div class="pl-row"><span class="pl-k">主要信源</span><span class="pl-v">' + cats + '</span></div>' +
        '<div class="pl-row"><span class="pl-k">信源示例</span><span class="pl-v">' + ex + '</span></div></div>';
    });
    return h;
  }

  /* ---------- 单一 block 分发 ---------- */

  function renderBlock(b) {
    switch (b.type) {
      case 'table':   return tableBlock(b.heading, b.table);
      case 'cards':   return cardsHTML(b.heading, b.cards);
      case 'bullets': return bulletsHTML(b.heading, b.items);
      case 'company': return companyHTML(b.heading, b.companies);
      case 'taxonomy':return taxonomyHTML(b.heading, b.items);
      case 'pages':   return pagesHTML(b.heading, b.pages);
      case 'compare': return compareHTML(b.chart);
      case 'hwlist':  return hwlistHTML(b);
      case 'tabs':    return renderTabs(b);
      default:        return '';
    }
  }

  function renderTabs(b) {
    var h = '<div class="tabs" id="tabs">';
    b.tabs.forEach(function (t, i) {
      h += '<button class="tab' + (i === 0 ? ' active' : '') + '" data-tab="' + t.id + '">' + t.label + '</button>';
    });
    h += '</div>';
    b.panels.forEach(function (p) {
      h += '<div class="panel" id="panel-' + p.id + '"' + (b.tabs[0].id !== p.id ? ' style="display:none"' : '') + '>';
      (p.blocks || []).forEach(function (blk) { h += renderBlock(blk); });
      h += '</div>';
    });
    return h;
  }

  /* ---------- 硬件三大模块 + 时间/级别筛选 ---------- */

  function hwlistHTML(block) {
    var ranges = [['all', '全部'], ['7', '近7天'], ['30', '近30天'], ['90', '近一季度'], ['old', '更早']];
    var levels = [['all', '全部'], ['long', '⭐ 长期关注'], ['new', '🆕 新品速览']];
    var h = '<div class="hw-filter" id="hwFilter">';
    h += '<div class="hw-fg"><span class="hw-fl">时间</span>';
    ranges.forEach(function (r) {
      h += '<button class="hw-btn' + (r[0] === 'all' ? ' active' : '') + '" data-range="' + r[0] + '">' + r[1] + '</button>';
    });
    h += '</div>';
    h += '<div class="hw-fg"><span class="hw-fl">关注级别</span>';
    levels.forEach(function (l) {
      h += '<button class="hw-btn' + (l[0] === 'all' ? ' active' : '') + '" data-level="' + l[0] + '">' + l[1] + '</button>';
    });
    h += '</div>';
    if (block.filterHint) h += '<div class="hw-fhint">' + block.filterHint + '</div>';
    h += '</div>';

    (block.modules || []).forEach(function (m) {
      h += '<section class="hw-mod" data-mod="' + m.id + '">';
      h += '<h3 class="hw-mod-h">' + (m.icon || '') + ' ' + m.name + '</h3>';
      if (m.note) h += '<div class="hw-mod-note">' + m.note + '</div>';
      if (m.subs) {
        m.subs.forEach(function (s) {
          h += '<div class="hw-sub" data-sub="' + s.cat + '"><div class="hw-sub-h">' + s.cat + '</div>';
          h += renderHWItems(s.items);
          h += '</div>';
        });
      } else {
        h += renderHWItems(m.items);
      }
      h += '</section>';
    });
    return h;
  }

  function renderHWItems(items) {
    var h = '<div class="hw-items">';
    (items || []).forEach(function (it) {
      var lvl = it.level === 'long' ? 'long' : 'new';
      var lvlTxt = lvl === 'long' ? '⭐ 长期关注' : '🆕 新品速览';
      var d = it.date || '';
      h += '<article class="hw-item' + (it.placeholder ? ' ph' : '') + '" data-date="' + d + '" data-level="' + lvl + '">';
      h += '<div class="hw-ihead"><span class="hw-iname">' + it.name + '</span>';
      h += '<span class="hw-badges"><span class="hw-date">' + (d || '日期待补') + '</span>' +
        '<span class="hw-lvl ' + lvl + '">' + lvlTxt + '</span></span></div>';
      if (it.brand) h += '<div class="hw-brand">' + it.brand + '</div>';
      h += '<div class="hw-sum">' + it.summary + (it.placeholder ? ' <span class="hw-phtag">🚧 数据待补充</span>' : '') + '</div>';
      if (it.metrics && it.metrics.length) {
        h += '<div class="hw-metrics">';
        it.metrics.forEach(function (mt) {
          h += '<div class="hw-metric"><span class="hw-mk">' + mt.k + '</span><span class="hw-mv">' + mt.v + '</span>' +
            (mt.d ? '<span class="hw-md">' + mt.d + '</span>' : '') + (mt.src ? cite(mt.src) : '') + '</div>';
        });
        h += '</div>';
      }
      if (it.src) h += '<div class="co-src">📄 官方原始：' + cite(it.src) + '</div>';
      (it.insights || []).forEach(function (ins) {
        h += '<div class="insight' + (ins.type ? (' ' + ins.type) : '') + '">' + ins.html + ' ' + cite(ins.src) + '</div>';
      });
      h += '</article>';
    });
    h += '</div>';
    return h;
  }

  function setupHWFilter() {
    var bar = document.getElementById('hwFilter');
    if (!bar) return;
    var items = document.querySelectorAll('.hw-item');
    function apply() {
      var rb = bar.querySelector('.hw-btn[data-range].active');
      var lb = bar.querySelector('.hw-btn[data-level].active');
      var range = rb ? rb.getAttribute('data-range') : 'all';
      var level = lb ? lb.getAttribute('data-level') : 'all';
      var now = new Date();
      items.forEach(function (el) {
        var d = el.getAttribute('data-date');
        var lvl = el.getAttribute('data-level');
        var dd = (d && d.length >= 7) ? (d.length === 7 ? d + '-15' : d) : null;
        var dateOK = true;
        if (range !== 'all' && dd) {
          var diff = (now - new Date(dd)) / 86400000;
          if (range === '7') dateOK = diff <= 7;
          else if (range === '30') dateOK = diff <= 30;
          else if (range === '90') dateOK = diff <= 90;
          else if (range === 'old') dateOK = diff > 90;
        } else if (range !== 'all' && !dd) {
          dateOK = (range === 'old');
        }
        var show;
        if (level === 'long') show = (lvl === 'long');
        else if (level === 'new') show = (lvl === 'new') && (range === 'all' || dateOK);
        else show = dateOK || (lvl === 'long');
        el.style.display = show ? '' : 'none';
      });
      document.querySelectorAll('.hw-mod').forEach(function (mod) {
        var visible = 0;
        mod.querySelectorAll('.hw-item').forEach(function (el) { if (el.style.display !== 'none') visible++; });
        mod.style.display = visible ? '' : 'none';
      });
      document.querySelectorAll('.hw-sub').forEach(function (sub) {
        var visible = 0;
        sub.querySelectorAll('.hw-item').forEach(function (el) { if (el.style.display !== 'none') visible++; });
        sub.style.display = visible ? '' : 'none';
      });
    }
    bar.querySelectorAll('.hw-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var sibs = btn.parentElement.querySelectorAll('.hw-btn');
        sibs.forEach(function (s) { s.classList.remove('active'); });
        btn.classList.add('active');
        apply();
      });
    });
    apply();
  }

  /* ---------- 页面渲染 ---------- */

  function conclusionsHTML(list) {
    if (!list || !list.length) return '';
    var h = '<div class="conclusions"><h3>💡 结论速览</h3><ul>';
    list.forEach(function (it) { h += '<li>' + it.html + ' ' + cite(it.src) + '</li>'; });
    return h + '</ul></div>';
  }

  function referenceHTML(r) {
    if (!r) return '';
    return '<div class="refcard"><div class="rico">🔗</div><div class="rbody">' +
      '<div class="rtitle">' + r.title + '</div>' +
      '<div class="rdesc">' + r.desc + '</div>' +
      '<a class="rlink" href="' + r.url + '" target="_blank" rel="noopener">前往实时看板 →</a>' +
      '</div></div>';
  }

  function insightsHTML(title, list) {
    if (!list || !list.length) return '';
    var h = title ? blockHeading(title) : '';
    list.forEach(function (it) {
      h += '<div class="insight' + (it.type ? (' ' + it.type) : '') + '">' + it.html + ' ' + cite(it.src) + '</div>';
    });
    return h;
  }

  function sourcesHTML(list) {
    if (!list || !list.length) return '';
    var h = '<div class="sources"><h4>数据来源（可点击回链）</h4><ol>';
    list.forEach(function (s) {
      h += '<li><a href="' + s.u + '" target="_blank" rel="noopener">' + s.n + '</a> &nbsp;·&nbsp; ' + s.u + '</li>';
    });
    return h + '</ol></div>';
  }

  function render(id) {
    var s = SITE[id];
    if (!s) return;
    topTitle.textContent = s.title;
    topMeta.textContent = '最后更新 ' + (SITE.meta.lastUpdated || '—') + ' · ' + (SITE.meta.updateCadence || '');

    var h = '';
    h += '<div class="sec-head"><div class="sec-ico">' + s.ico + '</div><div class="sec-title">' + s.title + '</div></div>';
    h += '<div class="sec-sub">' + s.sub + '</div>';
    h += conclusionsHTML(s.conclusions);     // 结论速览置顶
    h += referenceHTML(s.reference);          // 可选引用卡（models）
    (s.blocks || []).forEach(function (b) { h += renderBlock(b); });
    h += insightsHTML(s.insightsTitle, s.insights);
    h += sourcesHTML(s.sources);
    view.innerHTML = h;
    closeMenu();
    window.scrollTo(0, 0);
  }

  function openMenu() { sidebar.classList.add('open'); scrim.classList.add('show'); }
  function closeMenu() { sidebar.classList.remove('open'); scrim.classList.remove('show'); }
  menuBtn.addEventListener('click', openMenu);
  scrim.addEventListener('click', closeMenu);

  window.addEventListener('scroll', function () {
    if (window.scrollY > 320) toTop.classList.add('show');
    else toTop.classList.remove('show');
  });
  toTop.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

  renderNav();
  render(PAGE_ID);
  setupHWFilter();

  var tabsEl = document.getElementById('tabs');
  if (tabsEl) {
    tabsEl.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('.tab') : null;
      if (!btn) return;
      var id = btn.getAttribute('data-tab');
      var btns = tabsEl.querySelectorAll('.tab');
      for (var i = 0; i < btns.length; i++) btns[i].classList.toggle('active', btns[i] === btn);
      ['supply', 'demand'].forEach(function (p) {
        var panel = document.getElementById('panel-' + p);
        if (panel) panel.style.display = (p === id) ? '' : 'none';
      });
      window.scrollTo(0, 0);
    });
  }
})();
