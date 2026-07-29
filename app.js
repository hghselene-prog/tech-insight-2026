/* 渲染逻辑：读取 SITE（data.js），按导航切换区块；数据与应用分离 */
(function () {
  var SITE = window.SITE;
  var view = document.getElementById('view');
  var sideNav = document.getElementById('sideNav');
  var bottomNav = document.getElementById('bottomNav');
  var topTitle = document.getElementById('topTitle');
  var topMeta = document.getElementById('topMeta');
  var brandSub = document.getElementById('brandSub');
  var sideFoot = document.getElementById('sideFoot');

  brandSub.textContent = SITE.meta.period;
  sideFoot.innerHTML = '最后更新 ' + (SITE.meta.lastUpdated || '—') + '<br>更新频率：' + (SITE.meta.updateCadence || '按需') + '<br>可追溯 · 响应式 · 数据与应用分离';

  function cite(src) {
    if (!src) return '';
    return '<a class="cite" href="' + src.u + '" target="_blank" rel="noopener">🔗 ' + src.n + '</a>';
  }

  function renderNav() {
    var html = '';
    SITE.nav.forEach(function (n) {
      html += '<a href="#' + n.id + '" data-id="' + n.id + '"><span class="ico">' + n.ico + '</span><span>' + n.label + '</span></a>';
    });
    sideNav.innerHTML = html;
    bottomNav.innerHTML = html;
  }

  function setActive(id) {
    var links = document.querySelectorAll('#sideNav a, #bottomNav a');
    for (var i = 0; i < links.length; i++) {
      links[i].classList.toggle('active', links[i].dataset.id === id);
    }
  }

  function cardHTML(c) {
    var up = (c.v && c.v.indexOf('+') === 0) ? ' up' : '';
    return '<div class="card"><div class="k">' + c.k + '</div><div class="v' + up + '">' + c.v +
      '</div><div class="d">' + c.d + '</div>' + cite(c.src) + '</div>';
  }

  function tableHTML(t) {
    var h = '<div class="tablewrap"><table><thead><tr>';
    t.head.forEach(function (hd) { h += '<th>' + hd + '</th>'; });
    h += '</tr></thead><tbody>';
    t.rows.forEach(function (r) {
      h += '<tr>';
      r.cells.forEach(function (cell) { h += '<td>' + cell + '</td>'; });
      h += '<td class="srccol">' + cite(r.src) + '</td>';
      h += '</tr>';
    });
    h += '</tbody></table></div>';
    return h;
  }

  function bulletsHTML(title, items) {
    if (!items || !items.length) return '';
    var h = '<div class="block-h">' + title + '</div><ul class="bullets">';
    items.forEach(function (b) { h += '<li>' + b.t + ' ' + cite(b.src) + '</li>'; });
    h += '</ul>';
    return h;
  }

  function insightsHTML(list) {
    if (!list || !list.length) return '';
    var h = '';
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
    h += '</ol></div>';
    return h;
  }

  function render(id) {
    var s = SITE[id];
    if (!s) return;
    setActive(id);
    topTitle.textContent = s.title;
    topMeta.textContent = '最后更新 ' + (SITE.meta.lastUpdated || '—') + ' · ' + (SITE.meta.updateCadence || '');

    var h = '';
    h += '<div class="sec-title"><span class="ico">' + s.ico + '</span>' + s.title + '</div>';
    h += '<div class="sec-sub">' + s.sub + '</div>';
    if (s.lede) h += '<div class="lede">' + s.lede + '</div>';
    if (s.cards && s.cards.length) {
      h += '<div class="cards">';
      s.cards.forEach(function (c) { h += cardHTML(c); });
      h += '</div>';
    }
    if (s.table) h += tableHTML(s.table);
    if (s.bulletsTitle) h += bulletsHTML(s.bulletsTitle, s.bullets);
    if (s.bulletsTitle2) h += bulletsHTML(s.bulletsTitle2, s.bullets2);
    if (s.insights) h += insightsHTML(s.insights);
    if (s.pill) h += '<span class="pill">' + s.pill + '</span>';
    if (s.sources) h += sourcesHTML(s.sources);

    view.innerHTML = h;
    closeMenu();
    window.scrollTo(0, 0);
  }

  var sidebar = document.querySelector('.sidebar');
  var scrim = document.getElementById('scrim');
  var menuBtn = document.getElementById('menuBtn');
  function openMenu() { sidebar.classList.add('open'); scrim.classList.add('show'); }
  function closeMenu() { sidebar.classList.remove('open'); scrim.classList.remove('show'); }
  menuBtn.addEventListener('click', openMenu);
  scrim.addEventListener('click', closeMenu);

  function route() {
    var id = location.hash.replace('#', '');
    if (!id || !SITE[id]) id = SITE.nav[0].id;
    render(id);
  }
  window.addEventListener('hashchange', route);

  renderNav();
  route();
})();
