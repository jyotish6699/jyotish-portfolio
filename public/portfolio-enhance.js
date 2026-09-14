(() => {
  'use strict';
  const d = document, h = d.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  const load = src => new Promise((resolve, reject) => { const s=d.createElement('script'); s.src=src; s.onload=resolve; s.onerror=reject; d.head.appendChild(s); });

  // Exact-style atmosphere layers
  if (!d.querySelector('.spot')) { const e=d.createElement('div'); e.className='spot'; e.id='spot'; d.body.prepend(e); }
  if (!d.querySelector('.grain')) { const e=d.createElement('div'); e.className='grain'; d.body.prepend(e); }
  ['orb-1','orb-2','orb-3'].forEach(c=>{if(!d.querySelector('.'+c)){const e=d.createElement('div');e.className='orb '+c;e.setAttribute('aria-hidden','true');d.body.prepend(e)}});
  if (!d.querySelector('#progress')) { const e=d.createElement('div'); e.id='progress'; d.body.appendChild(e); }
  if (!d.querySelector('#grid')) { const e=d.createElement('div'); e.id='grid'; e.innerHTML='<div class="g-cols">'+Array(12).fill('<div></div>').join('')+'</div>'; d.body.appendChild(e); }
  if (!d.querySelector('#egg')) { const e=d.createElement('div'); e.id='egg'; e.setAttribute('role','status'); d.body.appendChild(e); }

  // Add missing original interaction CSS without changing the content design.
  const style=d.createElement('style');
  style.textContent=`
  html{font-size:16px;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}
  img{max-width:100%;display:block}::selection{background:var(--bone);color:var(--ink)}
  .spot,.grain,.orb{position:fixed;inset:0;pointer-events:none;z-index:0}.spot{background:radial-gradient(360px 360px at var(--mx,50%) var(--my,30%),rgba(236,232,225,.06),transparent 70%);opacity:0;transition:opacity .6s cubic-bezier(.16,1,.3,1);mix-blend-mode:screen}.grain{z-index:2;opacity:.035;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");background-size:200px 200px;animation:grain 6s steps(6) infinite}.orb{border-radius:50%;will-change:transform}.orb-1{width:52vmax;height:52vmax;left:-14vmax;top:-12vmax;background:radial-gradient(circle at 35% 35%,rgba(236,232,225,.14),transparent 60%);animation:orb1 34s ease-in-out infinite alternate}.orb-2{width:44vmax;height:44vmax;right:-12vmax;top:28%;background:radial-gradient(circle at 60% 40%,rgba(236,232,225,.11),transparent 60%);animation:orb2 42s ease-in-out infinite alternate}.orb-3{width:40vmax;height:40vmax;left:20%;bottom:-16vmax;background:radial-gradient(circle,rgba(236,232,225,.1),transparent 60%);animation:orb3 28s ease-in-out infinite alternate}@keyframes grain{20%{transform:translate(-4%,2%)}40%{transform:translate(3%,-3%)}60%{transform:translate(-2%,4%)}80%{transform:translate(4%,-2%)}}@keyframes orb1{to{transform:translate3d(10vw,8vh,0) scale(1.18)}}@keyframes orb2{to{transform:translate3d(-9vw,-10vh,0) scale(.88)}}@keyframes orb3{to{transform:translate3d(8vw,-7vh,0) scale(1.14)}}
  #progress{position:fixed;top:0;left:0;height:2px;background:var(--bone);width:0;z-index:1100;transform-origin:left}
  #loader{position:fixed;inset:0;z-index:9500;background:var(--ink);display:flex;align-items:center;justify-content:center;overflow:hidden}#loader .l-glow{position:absolute;width:60vmax;height:60vmax;border-radius:50%;background:radial-gradient(circle,rgba(236,232,225,.07),transparent 60%);opacity:0;filter:blur(20px)}#loader .l-inner{text-align:center;position:relative}#loader .l-mark{font:800 clamp(3rem,9vw,6rem)/1 var(--display);letter-spacing:-.04em}#loader .l-num{font:.8rem var(--mono);letter-spacing:.2em;color:var(--ash);margin-top:1rem}#loader .l-bar{width:min(220px,50vw);height:1px;background:var(--line2);margin:1.1rem auto 0;overflow:hidden}#loader .l-bar i{display:block;height:100%;width:0;background:var(--bone)}#loader .l-skip{position:absolute;bottom:2rem;left:0;right:0;text-align:center;font:.62rem var(--mono);letter-spacing:.12em;color:var(--faint);text-transform:uppercase}
  #cur{position:fixed;inset:0;pointer-events:none;z-index:9000;display:none}html.fine #cur{display:block}#cur-ring{position:fixed;width:38px;height:38px;border:1px solid var(--line2);border-radius:50%;transform:translate(-50%,-50%);transition:width .35s var(--ease),height .35s var(--ease),border-color .3s,background .3s}#cur-dot{position:fixed;width:5px;height:5px;background:var(--bone);border-radius:50%;transform:translate(-50%,-50%)}#cur-label{position:fixed;transform:translate(14px,14px);font:.6rem var(--mono);letter-spacing:.12em;text-transform:uppercase;color:var(--ink);background:var(--bone);padding:.25rem .55rem;border-radius:40px;opacity:0;white-space:nowrap}html.cur-hot #cur-ring{width:64px;height:64px;border-color:transparent;background:rgba(236,232,225,.1)}html.cur-media #cur-ring{width:84px;height:84px;border-color:var(--bone)}html.fine a,html.fine button,html.fine .visual,html.fine .mini{cursor:none}
  #nav-overlay{position:fixed;inset:0;z-index:1001;display:flex;pointer-events:none;opacity:0;background:var(--ink);flex-direction:column;align-items:flex-start;justify-content:center;gap:.4rem;padding:0 var(--pad);transition:opacity .5s var(--ease)}#nav-overlay.open{pointer-events:auto;opacity:1}.ov-link{overflow:hidden}.ov-link a{display:block;font:700 clamp(2.4rem,11vw,4.5rem)/1.12 var(--display);letter-spacing:-.03em;text-transform:uppercase;transform:translateY(110%);transition:transform .6s var(--ease),color .25s}.nav-overlay-open .ov-link a,#nav-overlay.open .ov-link a{transform:none}
  #nav.menu-open .bg{opacity:0;transform:scaleX(.6)}
  #grid{position:fixed;inset:0;z-index:8000;pointer-events:none;opacity:0;transition:opacity .3s;display:flex;justify-content:center}#grid.on{opacity:1}#grid .g-cols{width:100%;max-width:var(--maxw);padding:0 var(--pad);display:grid;grid-template-columns:repeat(12,1fr);gap:24px;height:100%}#grid .g-cols div{background:rgba(236,232,225,.04);border-inline:1px solid rgba(236,232,225,.07)}#egg{position:fixed;left:50%;bottom:2rem;transform:translateX(-50%) translateY(150%);z-index:8500;background:var(--bone);color:var(--ink);font:.72rem var(--mono);letter-spacing:.06em;text-transform:uppercase;padding:.7rem 1.3rem;border-radius:40px;transition:transform .5s var(--ease)}#egg.show{transform:translateX(-50%) translateY(0)}
  .anim{will-change:transform,opacity}.section,.work,.contact{position:relative}.section .rule,.work .rule,.contact .rule{transform-origin:left}.mini{transform-style:preserve-3d;transition:background .4s var(--ease),border-color .4s}
  @media(max-width:620px){#nav-overlay{display:flex}.links{display:none!important}.burger{display:block!important}.hire{display:none!important}}
  @media(prefers-reduced-motion:reduce){.spot,.grain,.orb{display:none}*{animation-duration:.001ms!important;transition-duration:.001ms!important}}
  `;
  d.head.appendChild(style);

  const injectUI=()=>{
    if(!d.querySelector('#cur')){const e=d.createElement('div');e.id='cur';e.innerHTML='<div id="cur-ring"></div><div id="cur-dot"></div><div id="cur-label"></div>';d.body.appendChild(e)}
    if(!d.querySelector('#loader')){const e=d.createElement('div');e.id='loader';e.innerHTML='<div class="l-glow"></div><div class="l-inner"><div class="l-mark">JK</div><div class="l-bar"><i></i></div><div class="l-num">000</div></div><div class="l-skip">Click to skip</div>';d.body.appendChild(e)}
    const nav=d.querySelector('#nav');
    if(nav && !d.querySelector('#nav-overlay')){const e=d.createElement('div');e.id='nav-overlay';e.innerHTML=['About','Services','Work','Contact'].map(x=>`<div class="ov-link"><a href="#${x.toLowerCase()}" data-close>${x}</a></div>`).join('');d.body.appendChild(e)}
    const b=d.querySelector('.burger'); if(b && b.id!=='nav-burger') b.id='nav-burger';
  };
  injectUI();

  const setup=async()=>{
    let gs=false;
    if(!reduce){
      try{await load('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js'); await load('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js'); await load('https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js'); gs=true}catch(e){console.warn('Animation libraries unavailable; CSS fallback active.',e)}
    }
    let lenis=null;
    if(!reduce){try{await load('https://cdn.jsdelivr.net/npm/lenis@1.3.25/dist/lenis.min.js');if(window.Lenis){lenis=new Lenis({lerp:.1,wheelMultiplier:1,smoothWheel:true});if(gs){lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0)}else{const raf=t=>{lenis.raf(t);requestAnimationFrame(raf)};requestAnimationFrame(raf)}}}catch(e){}}
    if(gs) gsap.registerPlugin(ScrollTrigger);
    const go=sel=>{const el=d.querySelector(sel);if(!el)return;if(lenis)lenis.scrollTo(el,{offset:-10,duration:1.2});else el.scrollIntoView({behavior:reduce?'auto':'smooth'})};
    d.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const x=a.getAttribute('href');if(x&&d.querySelector(x)){e.preventDefault();go(x)}}));

    // loader + hero reveal
    const loader=d.querySelector('#loader');
    const reveal=()=>{
      if(!gs){d.querySelectorAll('.hero-name,.meta,.hero-top').forEach(e=>e.style.opacity='1');return}
      if(typeof SplitText!=='undefined'){const sp=new SplitText('.hero-name .line',{type:'chars',charsClass:'char'});gsap.set(sp.chars,{yPercent:120,opacity:0,filter:'blur(12px)'});gsap.to(sp.chars,{yPercent:0,opacity:1,filter:'blur(0)',duration:1,stagger:.035,ease:'power3.out'})}else gsap.from('.hero-name .line',{yPercent:120,opacity:0,duration:1,stagger:.1,ease:'power3.out'});
      gsap.fromTo('.sub,.meta .btn',{y:18,opacity:0},{y:0,opacity:1,duration:.8,stagger:.08,ease:'power3.out',delay:.45});
      gsap.fromTo('.hero-top .mono,.eyebrow',{y:-8,opacity:0},{y:0,opacity:1,duration:.7,stagger:.05,ease:'power3.out',delay:.35});
    };
    if(loader && !reduce && gs){const p={v:0};const tl=gsap.timeline();tl.fromTo('.l-mark',{opacity:0,y:14,filter:'blur(8px)'},{opacity:1,y:0,filter:'blur(0)',duration:.7,ease:'power3.out'}).to('.l-glow',{opacity:1,duration:1.2},'-.3').to(p,{v:100,duration:1.5,ease:'power1.inOut',onUpdate:()=>{const n=Math.round(p.v);loader.querySelector('.l-num').textContent=String(n).padStart(3,'0');loader.querySelector('.l-bar i').style.width=n+'%'}},'-.9').add(()=>{gsap.to(loader,{yPercent:-100,duration:.9,ease:'power4.inOut',onStart:reveal,onComplete:()=>loader.remove()})});loader.addEventListener('click',()=>{tl.kill();gsap.to(loader,{yPercent:-100,duration:.55,onStart:reveal,onComplete:()=>loader.remove()})})}else{if(loader)loader.remove();reveal()}

    // nav, active section, progress
    const nav=d.querySelector('#nav'); const onScroll=()=>{if(nav)nav.classList.toggle('float',scrollY>40);const max=d.documentElement.scrollHeight-innerHeight;const pr=d.querySelector('#progress');if(pr)pr.style.width=(max>0?scrollY/max*100:0)+'%';const ids=['about','services','work','contact'];let cur='';ids.forEach(id=>{const el=d.getElementById(id);if(el&&scrollY>=el.offsetTop-220)cur=id});d.querySelectorAll('.links a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur))};addEventListener('scroll',onScroll,{passive:true});onScroll();

    // mobile menu
    const burger=d.querySelector('#nav-burger'),ov=d.querySelector('#nav-overlay');let open=false;const close=()=>{open=false;ov?.classList.remove('open');nav?.classList.remove('menu-open');burger?.setAttribute('aria-expanded','false');if(burger)burger.classList.remove('open');if(lenis)lenis.start()};if(burger&&ov){burger.addEventListener('click',()=>{open=!open;ov.classList.toggle('open',open);nav.classList.toggle('menu-open',open);burger.setAttribute('aria-expanded',open);if(lenis)(open?lenis.stop():lenis.start())});ov.querySelectorAll('[data-close]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();close();go(a.getAttribute('href'))}))}

    // theme with system preference + persistence
    const theme=d.querySelector('#theme');try{if(localStorage.getItem('jk-theme')==='light'||(!localStorage.getItem('jk-theme')&&matchMedia('(prefers-color-scheme:light)').matches))h.classList.add('light')}catch(e){};theme?.addEventListener('click',()=>{h.classList.add('theming');h.classList.toggle('light');try{localStorage.setItem('jk-theme',h.classList.contains('light')?'light':'dark')}catch(e){};setTimeout(()=>h.classList.remove('theming'),560);if(gs)ScrollTrigger.refresh()});

    // cursor + magnetic interactions
    if(fine&&!reduce){h.classList.add('fine');const cur=d.querySelector('#cur'),cd=d.querySelector('#cur-dot'),cr=d.querySelector('#cur-ring'),cl=d.querySelector('#cur-label'),spot=d.querySelector('#spot');let cx=innerWidth/2,cy=innerHeight/2,rx=cx,ry=cy;addEventListener('mousemove',e=>{cx=e.clientX;cy=e.clientY;cd.style.transform=`translate(${cx}px,${cy}px) translate(-50%,-50%)`;cl.style.transform=`translate(${cx}px,${cy}px) translate(14px,14px)`;spot.style.setProperty('--mx',cx+'px');spot.style.setProperty('--my',cy+'px');spot.style.opacity=.65});(()=>{rx+=(cx-rx)*.18;ry+=(cy-ry)*.18;cr.style.transform=`translate(${rx}px,${ry}px) translate(-50%,-50%)`;requestAnimationFrame(arguments.callee)})();d.querySelectorAll('a,button,.visual,.mini').forEach(el=>{el.addEventListener('mouseenter',()=>{h.classList.add(el.classList.contains('visual')?'cur-media':'cur-hot');const label=el.getAttribute('data-cursor');if(label){cl.textContent=label;cl.style.opacity=1}});el.addEventListener('mouseleave',()=>{h.classList.remove('cur-hot','cur-media');cl.style.opacity=0})});d.querySelectorAll('.btn,.hire,.links a,.social').forEach(el=>{el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)*.4,y=(e.clientY-r.top-r.height/2)*.4;el.style.transform=`translate(${x}px,${y}px)`});el.addEventListener('mouseleave',()=>el.style.transform='')})}

    if(gs&&!reduce){
      gsap.to('.hero-name',{scrollTrigger:{trigger:'#hero',start:'top top',end:'bottom top',scrub:.6},yPercent:14,scale:.94,opacity:.35,filter:'blur(3px)',ease:'none'});
      d.querySelectorAll('.head .rule').forEach(e=>gsap.from(e,{scaleX:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:e,start:'top 88%'}}));
      d.querySelectorAll('.title').forEach(e=>gsap.from(e,{yPercent:110,opacity:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:e,start:'top 88%'}}));
      d.querySelectorAll('.hello').forEach(e=>{if(typeof SplitText!=='undefined'){const s=new SplitText(e,{type:'words',wordsClass:'word'});gsap.from(s.words,{yPercent:120,opacity:0,duration:.8,stagger:.04,ease:'power3.out',scrollTrigger:{trigger:e,start:'top 82%'}})}});
      d.querySelectorAll('.body,.t,.service,.mini').forEach(e=>gsap.fromTo(e,{y:24,opacity:0},{y:0,opacity:1,duration:.7,ease:'power3.out',scrollTrigger:{trigger:e,start:'top 88%'}}));
      d.querySelectorAll('.panel').forEach(panel=>{const phone=panel.querySelector('.phone'),mark=panel.querySelector('.mark');if(phone)gsap.fromTo(phone,{rotateY:-10,rotateX:5,y:30},{rotateY:8,rotateX:-3,y:-30,ease:'none',scrollTrigger:{trigger:panel,start:'top bottom',end:'bottom top',scrub:.7}});if(mark)gsap.fromTo(mark,{yPercent:18},{yPercent:-18,ease:'none',scrollTrigger:{trigger:panel,start:'top bottom',end:'bottom top',scrub:.7}})});
      const ch=d.querySelector('.contact-head');if(ch&&typeof SplitText!=='undefined'){const s=new SplitText(ch,{type:'words',wordsClass:'word'});gsap.from(s.words,{yPercent:115,opacity:0,duration:.9,stagger:.06,ease:'power4.out',scrollTrigger:{trigger:ch,start:'top 80%'}})}
      ScrollTrigger.refresh();
    }

    // portrait mouse parallax
    if(fine){const p=d.querySelector('.portrait');p?.addEventListener('mousemove',e=>{const r=p.getBoundingClientRect();p.querySelector('img').style.transform=`scale(1.1) translate(${(e.clientX-r.left-r.width/2)/35}px,${(e.clientY-r.top-r.height/2)/35}px)`});p?.addEventListener('mouseleave',()=>p.querySelector('img').style.transform='scale(1.1)')}

    // role rotation for the hero
    const role=d.querySelector('.role');if(role){const roles=['developer tools','backend systems','AI products','open-source software'];let i=0;setInterval(()=>{i=(i+1)%roles.length;role.style.opacity=0;setTimeout(()=>{role.textContent=roles[i];role.style.opacity=1},350)},3200)}

    // form UX: mailto with entered message, plus confirmation.
    const form=d.querySelector('#form'),ok=d.querySelector('#ok');form?.addEventListener('submit',e=>{e.preventDefault();const vals=[...form.querySelectorAll('input,textarea')].map(x=>x.value.trim());if(vals.some(v=>!v))return;const [name,email,msg]=vals;window.location.href=`mailto:jyotishkumar725015@gmail.com?subject=${encodeURIComponent('Portfolio inquiry from '+name)}&body=${encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+msg)}`;if(ok){ok.classList.add('show');ok.innerHTML='<b>Opening your email client ✦</b><br><span class="mono">Your message has been prepared.</span>'}});

    // Easter eggs: G grid, logo x5 accent, Konami, available dot.
    let logoClicks=0,konami=[];const logo=d.querySelector('.logo'),dot=d.querySelector('.dot'),egg=d.querySelector('#egg');const say=t=>{egg.textContent=t;egg.classList.add('show');setTimeout(()=>egg.classList.remove('show'),2200)};logo?.addEventListener('click',e=>{logoClicks++;if(logoClicks>=5){logoClicks=0;h.classList.toggle('egg-accent');say('Hidden mode unlocked ✦')}});dot?.addEventListener('click',()=>say('Hello, builder ✦'));addEventListener('keydown',e=>{if(e.key.toLowerCase()==='g')d.querySelector('#grid').classList.toggle('on');konami.push(e.key);konami=konami.slice(-10);if(konami.join(',').toLowerCase()==='arrowup,arrowup,arrowdown,arrowdown,arrowleft,arrowright,arrowleft,arrowright,b,a')say('You found the surprise ✦')});
  };
  setup();
})();
