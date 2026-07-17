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
      <span>Freetown · Bo · Kenema · Makeni · Lunsar · Kono </span>
      <span class="socials">
        <a href="https://www.facebook.com/profile.php?id=61579421227702" aria-label="Facebook" title="Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h-2.4V6.5c0-.7.5-.8.8-.8H14V3l-2.2-.1c-2.4 0-3 1.8-3 3V8H7v2.5h1.8V19h3.4v-8.5H14L14 8z"/></svg>
        </a>
        <a href="#" aria-label="X" title="X">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 4h2l-6.7 7.7L20 20h-5.2l-4.1-5.3-4.7 5.3H4l7-8-7-8h5.2l3.8 5L18 4zm-1.1 14.3h1.2L7.1 5.7H5.8l11.1 12.6z"/></svg>
        </a>
        <a href="#" aria-label="Instagram" title="Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 3.8A4.2 4.2 0 1 0 16.2 11 4.2 4.2 0 0 0 12 6.8zm6.3-1.3a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z"/></svg>
        </a>
        <a href="#" aria-label="YouTube" title="YouTube">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.6 12 4.6 12 4.6s-5.9 0-7.6.6a2.8 2.8 0 0 0-2 2A29.3 29.3 0 0 0 2 12a29.3 29.3 0 0 0 .4 4.8a2.8 2.8 0 0 0 2 2c1.7.6 7.6.6 7.6.6s5.9 0 7.6-.6a2.8 2.8 0 0 0 2-2c.3-1.7.4-3.5.4-4.8 0-1.3-.1-3.1-.4-4.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
        </a>
      </span>
    </div>
  </div>
  <div class="masthead">
    <div class="container">
      <a class="brand" href="index.html">
        <img src="assets/logo1.png" alt="BSK Observer logo">
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
          <a href="https://www.youtube.com/@bskonlinetv">BSK TV Live</a>
          <a href="faq.html">FAQ</a>
          <a href="advertise.html">Advertise</a>
        </div>
        <div>
          <h4>Support</h4>
          <a href="donate.html">Donate</a>
          <a href="volunteer.html">Volunteer</a>
          <a href="#">Newsletter</a>
          <a href="#">Careers</a>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 BSK Observer Newspaper · A Publication of BSK TV Network · All rights reserved.</span>
        <span class="socials">
        <a href="https://www.facebook.com/profile.php?id=61579421227702" aria-label="Facebook" title="Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h-2.4V6.5c0-.7.5-.8.8-.8H14V3l-2.2-.1c-2.4 0-3 1.8-3 3V8H7v2.5h1.8V19h3.4v-8.5H14L14 8z"/></svg>
        </a>
        <a href="#" aria-label="X" title="X">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 4h2l-6.7 7.7L20 20h-5.2l-4.1-5.3-4.7 5.3H4l7-8-7-8h5.2l3.8 5L18 4zm-1.1 14.3h1.2L7.1 5.7H5.8l11.1 12.6z"/></svg>
        </a>
        <a href="#" aria-label="Instagram" title="Instagram">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 3.8A4.2 4.2 0 1 0 16.2 11 4.2 4.2 0 0 0 12 6.8zm6.3-1.3a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1z"/></svg>
        </a>
        <a href="#" aria-label="YouTube" title="YouTube">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.6 7.2a2.8 2.8 0 0 0-2-2C17.9 4.6 12 4.6 12 4.6s-5.9 0-7.6.6a2.8 2.8 0 0 0-2 2A29.3 29.3 0 0 0 2 12a29.3 29.3 0 0 0 .4 4.8a2.8 2.8 0 0 0 2 2c1.7.6 7.6.6 7.6.6s5.9 0 7.6-.6a2.8 2.8 0 0 0 2-2c.3-1.7.4-3.5.4-4.8 0-1.3-.1-3.1-.4-4.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z"/></svg>
        </a>
      </span>
      </div>
    </div>
  </footer>
  <button class="to-top" aria-label="Back to top">↑</button>`;
  const h=document.getElementById('site-header');if(h)h.innerHTML=header;
  const f=document.getElementById('site-footer');if(f)f.innerHTML=footer;
})();
