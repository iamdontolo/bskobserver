// BSK Observer — Interactivity
(function(){
  // Mobile nav
  const toggle=document.querySelector('.nav-toggle');
  const list=document.querySelector('.nav-list');
  if(toggle&&list){toggle.addEventListener('click',()=>{
    const open=list.classList.toggle('open');
    toggle.setAttribute('aria-expanded',open);
  });}

  // Today's date in utility bar
  const dEl=document.querySelector('[data-today]');
  if(dEl){
    const d=new Date();
    dEl.textContent=d.toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  }

  // Reveal on scroll
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});
  },{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // Back to top
  const top=document.querySelector('.to-top');
  if(top){
    window.addEventListener('scroll',()=>top.classList.toggle('show',window.scrollY>420),{passive:true});
    top.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
  }

  // Newsletter (client-side stub)
  document.querySelectorAll('form.newsletter-form').forEach(form=>{
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const email=form.querySelector('input[type=email]').value.trim();
      const msg=form.querySelector('.msg');
      if(!email){msg.textContent='Please enter your email.';return;}
      msg.textContent='✓ Thank you — you are subscribed to The Daily Briefing.';
      form.reset();
    });
  });

  // Generic forms (contact, submit story, advertise, volunteer)
  document.querySelectorAll('form.form').forEach(form=>{
    form.addEventListener('submit',e=>{
      e.preventDefault();
      const status=form.querySelector('.form-status')||(()=>{const d=document.createElement('div');d.className='form-status';form.appendChild(d);return d;})();
      status.classList.add('ok');
      status.textContent='✓ Message received. Our team will respond within 24 business hours.';
      form.reset();
    });
  });

  // Daily post rotator — cycles through sample headlines each day
  const feed=document.querySelector('[data-daily-feed]');
  if(feed){
    const stories=window.BSK_STORIES||[];
    const today=new Date();
    const seed=today.getFullYear()*1000+today.getMonth()*40+today.getDate();
    const rotated=stories.slice().sort((a,b)=>((a.id*7919+seed)%1000)-((b.id*7919+seed)%1000));
    const pick=rotated.slice(0,6);
    feed.innerHTML=pick.map((s,i)=>`
      <article class="card reveal" style="transition-delay:${i*60}ms">
        <a class="thumb" href="story.html?id=${s.id}"><img loading="lazy" src="${s.img}" alt="${s.title}"></a>
        <div class="body">
          <span class="tag ${s.tone||''}">${s.cat}</span>
          <h3><a href="story.html?id=${s.id}">${s.title}</a></h3>
          <p style="color:var(--muted);font-size:.92rem">${s.excerpt}</p>
          <div class="meta"><span>By ${s.author}</span></div>
        </div>
      </article>`).join('');
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  }

  // Story detail page
  const storyContainer=document.getElementById('story-content');
  const relatedContainer=document.getElementById('story-related');
  if(storyContainer){
    const params=new URLSearchParams(window.location.search);
    const storyId=parseInt(params.get('id'),10);
    const stories=window.BSK_STORIES||[];
    const story=stories.find(item=>item.id===storyId)||stories[0];
    if(story){
      document.title=`${story.title} | BSK Observer`;
      const related=stories.filter(item=>item.id!==story.id).slice(0,3);
      storyContainer.innerHTML=`
        <article class="story-shell reveal">
          <div class="story-hero">
            <span class="tag ${story.tone||''}">${story.cat}</span>
            <h1>${story.title}</h1>
            <div class="story-meta">
              <span>By ${story.author}</span>
            </div>
          </div>
          <img class="story-image" src="${story.img}" alt="${story.title}">
          <div class="story-body">
            <p class="dropcap">${story.body || story.excerpt} ${story.body ? '' : 'This story is now available in full on BSK Observer, with deeper context and reporting for readers across Sierra Leone and the diaspora.'}</p>
            <p>BSK Observer is publishing this report to give readers an in-depth account of the issue, the people affected, and the stakes behind the headline. The reporting draws on interviews, public documents, and local observations to present a fuller picture of what is changing on the ground.</p>
            <div class="story-quote">"Independent journalism matters most when communities need facts, context, and accountability at the same time."</div>
            <p>Across Sierra Leone, stories like this are shaping conversations in households, markets, schools, and civic spaces. Readers are increasingly turning to trusted outlets for clear analysis that connects local experience with the wider landscape of policy, business, and public service.</p>
            <p>For ongoing coverage, follow BSK Observer for daily updates, live reporting, and multimedia stories that keep you informed beyond the headline.</p>
          </div>
        </article>`;
      relatedContainer.innerHTML=related.length ? `<h2 style="margin-bottom:1em">Continue Reading</h2>${related.map(item=>`
        <article class="card reveal">
          <a class="thumb" href="story.html?id=${item.id}"><img loading="lazy" src="${item.img}" alt="${item.title}"></a>
          <div class="body">
            <span class="tag ${item.tone||''}">${item.cat}</span>
            <h3><a href="story.html?id=${item.id}">${item.title}</a></h3>
            <p style="color:var(--muted);font-size:.92rem">${item.excerpt}</p>
            <div class="meta"><span>By ${item.author}</span></div>
          </div>
        </article>`).join('')}` : '';
      document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
    }
  }
})();
