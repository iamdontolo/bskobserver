// Shared header/footer injection so every page uses the same layout
(function(){
  const page=document.body.dataset.page||'';
  const nav=[
    ['index.html','Home'],
    ['categories.html','News'],
    ['live-tv.html','Live TV'],
    ['about.html','About'],
    ['team.html','Team'],
    ['contact.html','Contact'],
    ['advertise.html','Advertise'],
    ['submit-story.html','Submit'],
    ['donate.html','Donate'],
    ['faq.html','FAQ'],
  ];
  const navHTML=nav.map(([h,l])=>`<li><a href="${h}" class="${page===h?'active':''}">${l}</a></li>`).join('');
  const header=`
  <div class="utility">
    <div class="container">
      <span class="date" data-today>Today</span>
      <span>Freetown · Bo · Kenema · Makeni · London · Washington</span>
      <span class="socials">
        <a href="#" aria-label="Facebook">Facebook</a>
        <a href="#" aria-label="Twitter">X</a>
        <a href="#" aria-label="Instagram">Instagram</a>
        <a href="#" aria-label="YouTube">YouTube</a>
      </span>
    </div>
  </div>
  <div class="masthead">
    <div class="container">
      <a class="brand" href="index.html">
        <img src="assets/logo.png" alt="BSK Observer logo">
      </a>
      <span class="brand-tag">The Truth. The Story. The People.</span>
      <div class="masthead-cta">
        <a class="btn ghost" href="donate.html">Support Us</a>
        <a class="btn gold" href="live-tv.html">Watch Live</a>
      </div>
    </div>
  </div>
  <nav class="nav" aria-label="Primary">
    <div class="container">
      <button class="nav-toggle" aria-expanded="false" aria-label="Toggle menu">☰</button>
      <ul class="nav-list">${navHTML}</ul>
    </div>
  </nav>
  <div class="ticker" role="marquee" aria-label="#">
    <div class="ticker-track">
      <span>BSK TV Network Launches 24-Hour News Service</span>
      <span>BSK TV Network Launches 24-Hour News Service</span>
      <span>BSK TV Network Launches 24-Hour News Service</span>
      <span>BSK TV Network Launches 24-Hour News Service</span>
      <span>BSK TV Network Launches 24-Hour News Service</span>
      <span>BSK TV Network Launches 24-Hour News Service</span>
      <span>BSK TV Network Launches 24-Hour News Service</span>
      <span>BSK TV Network Launches 24-Hour News Service</span>
    </div>
  </div>`;
  const footer=`
  <footer>
    <div class="container">
      <div class="foot-grid">
        <div class="foot-brand">
          <h4>BSK Observer</h4>
          <p>Sierra Leone's independent investigative digital newspaper. A multimedia publication of BSK TV Network and the BK/BSK Group of Companies.</p>
          <p>Freetown, Sierra Leone · Maryland, USA</p>
        </div>
        <div>
          <h4>Newsroom</h4>
          <a href="about.html">About Us</a>
          <a href="contact.html">Contact</a>
          <a href="submit-story.html">Submit a Story</a>
          <a href="editorial-policy.html">Editorial Policy</a>
        </div>
        <div>
          <h4>Coverage</h4>
          <a href="categories.html">All Categories</a>
          <a href="live-tv.html">BSK TV Live</a>
          <a href="faq.html">FAQ</a>
          <a href="advertise.html">Advertise</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="donate.html">Donate</a>
          <a href="submit-story.html">Volunteer</a>
          <a href="#">Newsletter</a>
          <a href="#">Careers</a>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 BSK Observer Newspaper · A Publication of BSK TV Network · All rights reserved.</span>
        <span>Member, Sierra Leone Association of Journalists (SLAJ)</span>
      </div>
    </div>
  </footer>
  <button class="to-top" aria-label="Back to top">↑</button>`;
  const h=document.getElementById('site-header');if(h)h.innerHTML=header;
  const f=document.getElementById('site-footer');if(f)f.innerHTML=footer;
})();
