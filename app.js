
/* Sample data — swap for real API calls in production */
const packages = [
  {id:"tn-7", cat:"temple", title:"Tamil Nadu Divya Desam Circuit", days:7, nights:6, origin:"Chennai", price:32900, rating:4.8, reviews:184,
    summary:"Seven days of Vaishnava temple architecture — Kanchipuram, Sriperumbudur, Kumbakonam and the Chola gopurams.",
    highlights:["VIP darshan at 4 temples","Tamil vegetarian meals","AC coach transport","Senior-friendly pacing"],
    days_list:[
      ["Arrival & Chennai temples","Airport pickup · Kapaleeshwarar · Parthasarathy · overnight Chennai."],
      ["Kanchipuram day","Ekambareswarar, Varadaraja Perumal and Kamakshi Amman."],
      ["Chidambaram","Nataraja temple evening aarti; overnight Chidambaram."],
      ["Kumbakonam circuit","Sarangapani, Airavatesvara at Darasuram."],
      ["Thanjavur","Brihadeeswara Temple; Palace museum; local Thanjavur painting stop."],
      ["Madurai","Meenakshi Amman Temple night aarti."],
      ["Departure","Madurai airport drop after breakfast."]]},
  {id:"kl-7", cat:"temple", title:"Kerala Sabarimala + Guruvayoor", days:7, nights:6, origin:"Kochi", price:36400, rating:4.9, reviews:210,
    summary:"Guided Ayyappa pilgrimage with a Guruvayoor darshan, backwater breather, and a Chettinad-inspired last day.",
    highlights:["Sabarimala guide + logistics","Guruvayoor early darshan","Alleppey houseboat night","Kerala Sadhya meals"],
    days_list:[["Arrival Kochi","Fort Kochi walk; Chinese fishing nets; overnight."],["Guruvayoor","Early morning darshan; Mammiyoor temple; overnight Guruvayoor."],["Pamba transfer","Long drive to Pamba; base camp prep."],["Sabarimala","Trek + darshan + return to Pamba."],["Alleppey","Backwater houseboat overnight."],["Kochi","Cultural evening; Kathakali show."],["Departure","Kochi airport drop."]]},
  {id:"ka-6", cat:"adventure", title:"Coorg Coffee & Cauvery Rafting", days:6, nights:5, origin:"Bengaluru", price:24900, rating:4.7, reviews:96,
    summary:"Six days across the Coorg plateau — coffee estate stay, Cauvery rafting, and a Dubare elephant camp visit.",
    highlights:["Grade II–III rafting","Plantation homestay","Abbey & Iruppu falls","Nagarhole jungle safari"],
    days_list:[["Bengaluru → Coorg","Scenic drive; estate check-in."],["Plantation day","Coffee walk; barista session; bonfire."],["Rafting day","Cauvery Grade II–III; picnic lunch."],["Dubare + Nagarhole","Elephant camp morning; jeep safari evening."],["Falls day","Abbey & Iruppu falls; local Kodava lunch."],["Coorg → Bengaluru","Drop by evening."]]},
  {id:"ap-5", cat:"adventure", title:"Araku Valley + Borra Caves", days:5, nights:4, origin:"Visakhapatnam", price:19900, rating:4.6, reviews:64,
    summary:"Coastal Andhra + Eastern Ghats. Vizag beaches, the Araku toy-train ride, and Borra limestone caves.",
    highlights:["Toy train Vizag → Araku","Borra caves guided walk","Tribal museum & coffee","Rushikonda beach"],
    days_list:[["Arrival Vizag","Ramakrishna beach; overnight."],["Vizag → Araku (toy train)","Scenic hill route; check-in."],["Araku sightseeing","Museum, waterfalls, coffee tasting."],["Borra Caves","Cave walk; drive back Vizag."],["Departure","Kailasagiri; Vizag drop."]]},
  {id:"kl-14", cat:"wellness", title:"Kerala Ayurveda Rejuvenation", days:14, nights:13, origin:"Kochi", price:79900, rating:4.9, reviews:141,
    summary:"Two weeks of Panchakarma at a certified Kerala retreat with daily yoga, doctor consults, and satvik meals.",
    highlights:["Daily Panchakarma therapies","Twice-daily yoga & pranayama","Doctor consultations","Satvik Ayurvedic meals"],
    days_list:[["Arrival & consultation","Kochi pickup; opening consultation."],["Days 2–5 · Purvakarma","Preparatory oil therapies begin."],["Days 6–10 · Panchakarma","Main cleansing therapies; adjusted diet."],["Days 11–12 · Paschatkarma","Rejuvenation therapies; local walks."],["Day 13 · Rest","Ayurvedic cooking class; kalari demo."],["Day 14 · Departure","Closing consult; Kochi drop."]]},
  {id:"kn-5", cat:"wellness", title:"Yoga Retreat · Gokarna Coast", days:5, nights:4, origin:"Mangalore", price:22400, rating:4.7, reviews:58,
    summary:"A quiet coastal reset — sunrise ashtanga, seafood-free satvik meals, and daily silence hours by the sea.",
    highlights:["Sunrise + sunset yoga","Silence practice hours","Coastal walks","Kirtan evening"],
    days_list:[["Arrival","Mangalore pickup; opening circle."],["Day 2","Ashtanga + pranayama; beach walk."],["Day 3","Silence day; journaling; therapy talk."],["Day 4","Yoga nidra; kirtan evening."],["Day 5","Closing circle; drop."]]},
];

const articles = [
  {id:"north-south", title:"Why North Indian travellers should discover the South", cat:"Culture", date:"12 Aug 2026", read:"6 min",
    excerpt:"The gopurams of Madurai and the Chola Chidambaram tell an architectural story most Indians never see first-hand — here's a starter route.",
    body:`<p>India's temple map is often drawn with the Ganga at its centre, but the Southern peninsula holds the world's most continuously worshipped stone architecture — dating to a period when much of Northern India was still consolidating dynastic power.</p><h2>Where to start</h2><p>A first-time visitor is best served by the Tamil Nadu Divya Desam corridor: Chennai → Kanchipuram → Chidambaram → Thanjavur → Madurai. Each stop is a distinct architectural moment, and the pacing is gentle enough for elders.</p><h2>What surprises people</h2><p>Not the scale — the intimacy. A Chola temple is not just a monument; it is a lived-in ritual space, still cared for by families whose forebears were named in copper-plate grants a thousand years ago.</p>`},
  {id:"sabarimala-guide", title:"Planning a Sabarimala trek with elders in the group", cat:"Guide", date:"04 Aug 2026", read:"9 min",
    excerpt:"Sabarimala is not a hike — it's a pilgrimage that rewards preparation. A pragmatic planning note from our tour leads.",
    body:`<p>Sabarimala is doable for most fit adults, and quite manageable for elders when you plan the ascent split across two rest points and start before 4 AM.</p><h2>Logistics that matter</h2><p>Aadhaar-based online booking, dress code, footwear, hydration, and where to keep your Irumudi. We handle all of this for you when you book, but here's a self-planner version.</p>`},
  {id:"kerala-monsoon", title:"Kerala Ayurveda in the monsoon: why timing changes results", cat:"Wellness", date:"22 Jul 2026", read:"5 min",
    excerpt:"Karkidakam, the traditional monsoon month, is considered the ideal window for Panchakarma. Here's why classical texts, and modern practitioners, agree.",
    body:`<p>Monsoon opens the pores and slows metabolism — conditions the classical Ayurvedic canon prescribes for the deepest tissue-level cleansing. This is why Kerala's best-regarded centres are quietly booked out in Karkidakam.</p>`}
];

const heroSlides = [
  {scene:"temple", eyebrow:"Temple tourism", title:"Temples of Tamil Nadu",  subtitle:"Cholas, Pandyas, and a thousand years of stone.",       ctaText:"Explore temple tours",    ctaHref:"packages.html?cat=temple"},
  {scene:"coorg",  eyebrow:"Adventure",      title:"Coorg mist &amp; coffee", subtitle:"Plantations, Cauvery rapids, and jungle dawns.",       ctaText:"See adventure trips",     ctaHref:"packages.html?cat=adventure"},
  {scene:"kerala", eyebrow:"Wellness",       title:"Kerala Ayurveda",         subtitle:"Fourteen days of Panchakarma, honest to the classics.", ctaText:"See wellness retreats",   ctaHref:"packages.html?cat=wellness"},
  {scene:"andhra", eyebrow:"Coastal escape", title:"The Vizag coast",         subtitle:"Toy trains to Araku, Borra caves, and the beach line.", ctaText:"See coastal escapes",     ctaHref:"packages.html?cat=adventure"},
];

const inr = n => "₹" + n.toLocaleString("en-IN");
const catLabel = c => c==="temple"?"Temple tour":c==="adventure"?"Adventure":c==="wellness"?"Wellness":"Trip";
const mediaClass = c => "m-"+c;
const qp = () => new URLSearchParams(location.search);

function toast(msg){
  const el = document.getElementById("toast"); if(!el) return;
  el.textContent = msg; el.classList.add("show");
  clearTimeout(toast._t); toast._t = setTimeout(()=>el.classList.remove("show"), 2400);
}
function toggleTheme(){
  const cur = document.documentElement.getAttribute("data-theme");
  document.documentElement.setAttribute("data-theme", cur==="dark"?"light":"dark");
}
function toggleMenu(){ document.getElementById("nav").classList.toggle("open"); }

/* Rich SVG scenes for the hero */
function sceneSVG(kind){
  const scenes = {
    temple: `<svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="tSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0E3D33"/><stop offset="45%" stop-color="#3B6B58"/><stop offset="75%" stop-color="#E29A55"/><stop offset="100%" stop-color="#F2C46B"/></linearGradient><radialGradient id="tSun" cx="70%" cy="55%" r="20%"><stop offset="0%" stop-color="#FFE7B0"/><stop offset="60%" stop-color="#F2C46B" stop-opacity=".9"/><stop offset="100%" stop-color="#F2C46B" stop-opacity="0"/></radialGradient><linearGradient id="tGround" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0A2620"/><stop offset="100%" stop-color="#050F0C"/></linearGradient></defs><rect width="1600" height="900" fill="url(#tSky)"/><circle cx="1120" cy="490" r="180" fill="url(#tSun)"/><circle cx="1120" cy="490" r="70" fill="#FFEBB8" opacity=".9"/><path d="M0,610 L120,570 L260,600 L380,555 L520,595 L680,540 L820,580 L980,545 L1180,590 L1340,555 L1600,600 L1600,900 L0,900 Z" fill="#1F4A3C" opacity=".7"/><g fill="#050F0C" opacity=".85"><path d="M60,900 L60,540 Q80,520 100,540 Q80,560 90,600 Q110,570 130,580 Q100,610 110,650 Q140,620 160,640 Q120,660 110,900 Z"/><path d="M1520,900 L1520,560 Q1500,540 1480,555 Q1500,575 1490,610 Q1470,585 1450,595 Q1478,620 1470,660 Q1445,635 1428,655 Q1465,680 1475,900 Z"/></g><g fill="url(#tGround)"><path d="M240,700 L240,600 L260,600 L260,540 L280,540 L280,470 L300,470 L300,400 L340,400 L340,470 L360,470 L360,540 L380,540 L380,600 L400,600 L400,700 Z"/><path d="M520,720 L520,560 L540,560 L540,490 L560,490 L560,420 L580,420 L580,340 L620,340 L620,420 L640,420 L640,490 L660,490 L660,560 L680,560 L680,720 Z"/><path d="M840,700 L840,580 L860,580 L860,510 L880,510 L880,440 L900,440 L900,370 L940,370 L940,440 L960,440 L960,510 L980,510 L980,580 L1000,580 L1000,700 Z"/><path d="M1220,720 L1220,600 L1240,600 L1240,540 L1260,540 L1260,470 L1280,470 L1280,400 L1320,400 L1320,470 L1340,470 L1340,540 L1360,540 L1360,600 L1380,600 L1380,720 Z"/></g><path d="M0,700 L1600,700 L1600,900 L0,900 Z" fill="url(#tGround)"/></svg>`,
    coorg: `<svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="cSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#CFDFDA"/><stop offset="60%" stop-color="#E8EEE7"/><stop offset="100%" stop-color="#B8CBBB"/></linearGradient><radialGradient id="cSun" cx="50%" cy="35%" r="25%"><stop offset="0%" stop-color="#FFFFFF"/><stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/></radialGradient></defs><rect width="1600" height="900" fill="url(#cSky)"/><ellipse cx="820" cy="300" rx="380" ry="160" fill="url(#cSun)"/><path d="M0,520 L180,470 L360,510 L560,455 L760,505 L960,445 L1180,500 L1400,470 L1600,510 L1600,900 L0,900 Z" fill="#8FA9A0" opacity=".5"/><rect x="0" y="470" width="1600" height="90" fill="#F2F3EE" opacity=".55"/><path d="M0,610 L200,555 L400,600 L620,545 L820,590 L1040,540 L1260,595 L1460,560 L1600,600 L1600,900 L0,900 Z" fill="#3B5F55" opacity=".72"/><rect x="0" y="580" width="1600" height="60" fill="#F2F3EE" opacity=".38"/><path d="M0,700 L160,640 L340,680 L520,620 L720,660 L920,610 L1120,660 L1320,625 L1600,680 L1600,900 L0,900 Z" fill="#1F3B33"/><g fill="#0B241D"><ellipse cx="120" cy="820" rx="140" ry="60"/><ellipse cx="60" cy="770" rx="90" ry="40" transform="rotate(-15 60 770)"/><ellipse cx="1480" cy="820" rx="140" ry="60"/><ellipse cx="1540" cy="770" rx="90" ry="40" transform="rotate(15 1540 770)"/></g></svg>`,
    kerala: `<svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="kSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#F5B370"/><stop offset="40%" stop-color="#E88E63"/><stop offset="70%" stop-color="#8B4A65"/><stop offset="100%" stop-color="#3E2A44"/></linearGradient><linearGradient id="kWater" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#5B3B54"/><stop offset="100%" stop-color="#1E1524"/></linearGradient><radialGradient id="kSun" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#FFE7B0"/><stop offset="100%" stop-color="#FFE7B0" stop-opacity="0"/></radialGradient></defs><rect y="0" width="1600" height="600" fill="url(#kSky)"/><rect y="600" width="1600" height="300" fill="url(#kWater)"/><ellipse cx="900" cy="600" rx="260" ry="180" fill="url(#kSun)"/><circle cx="900" cy="600" r="90" fill="#FFDCA0"/><g fill="#FFDCA0" opacity=".3"><rect y="640" x="700" width="400" height="4"/><rect y="680" x="720" width="360" height="3"/><rect y="720" x="740" width="320" height="3"/><rect y="760" x="760" width="280" height="2"/></g><path d="M0,620 L200,590 L400,610 L620,585 L820,595 L1020,580 L1220,600 L1420,585 L1600,600 L1600,620 L0,620 Z" fill="#2B1D2E" opacity=".8"/><g fill="#0F0810"><path d="M1180,660 Q1230,655 1300,660 L1310,675 Q1240,682 1170,675 Z"/><rect x="1230" y="620" width="4" height="40"/><path d="M1234,620 L1274,655 L1234,655 Z"/></g><g fill="#0F0810"><rect x="120" y="500" width="10" height="400"/><path d="M125,510 Q60,470 30,490 Q80,490 120,520 Q60,530 40,555 Q100,540 130,520 Q120,470 160,450 Q140,485 130,520 Q180,470 220,480 Q170,510 130,525 Q170,530 200,555 Q150,545 128,530 Z"/><rect x="260" y="540" width="8" height="360"/><path d="M264,548 Q210,510 190,530 Q230,530 260,558 Q220,565 200,585 Q245,570 268,560 Q262,525 290,510 Q275,540 268,562 Q300,530 340,540 Q300,565 268,570 Q300,578 320,600 Q285,590 265,575 Z"/></g></svg>`,
    andhra: `<svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="aSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#3B7D9E"/><stop offset="50%" stop-color="#6FB0C7"/><stop offset="100%" stop-color="#B8DBE1"/></linearGradient><linearGradient id="aSea" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#0F5E71"/><stop offset="100%" stop-color="#08303B"/></linearGradient></defs><rect y="0" width="1600" height="500" fill="url(#aSky)"/><rect y="500" width="1600" height="400" fill="url(#aSea)"/><circle cx="1200" cy="330" r="90" fill="#FFF3D0" opacity=".95"/><rect y="490" width="1600" height="30" fill="#FFF3D0" opacity=".28"/><g fill="#0A2029"><path d="M60,520 Q140,505 240,515 L240,540 L60,540 Z"/><rect x="130" y="440" width="20" height="80"/><path d="M125,440 L155,440 L150,430 L130,430 Z"/><circle cx="140" cy="425" r="5" fill="#F2C46B"/></g><g fill="#FFFFFF" opacity=".5"><path d="M0,640 Q200,620 400,640 T800,640 T1200,640 T1600,640 L1600,650 Q1200,655 800,650 T0,650 Z"/><path d="M0,700 Q220,680 460,700 T900,700 T1350,700 T1600,700 L1600,710 Q1200,715 800,710 T0,710 Z" opacity=".5"/></g><g fill="#FFFFFF" opacity=".7"><path d="M0,820 Q200,800 400,820 T800,820 T1200,820 T1600,820 L1600,850 Q1200,865 800,850 T0,860 Z"/></g><path d="M0,860 L1600,850 L1600,900 L0,900 Z" fill="#E8CFA0"/></svg>`,
  };
  return scenes[kind] || scenes.temple;
}

/* Hero carousel */
let heroTimer=null, heroIdx=0;
function initHero(){
  const host = document.getElementById("hero");
  if(!host) return;
  host.innerHTML = `
    <div class="slides">
      ${heroSlides.map((s,i)=>`
        <div class="slide ${i===0?'on':''}">
          ${sceneSVG(s.scene)}
          <div class="veil"></div><div class="veil2"></div>
          <div class="caption"><div class="wrap">
            <div class="eyebrow">${s.eyebrow}</div>
            <h1>${s.title}</h1>
            <p>${s.subtitle}</p>
            <a class="btn" href="${s.ctaHref}">${s.ctaText} →</a>
          </div></div>
        </div>`).join("")}
    </div>
    <button class="arrow prev" onclick="heroGo(-1)" aria-label="Previous">‹</button>
    <button class="arrow next" onclick="heroGo(1)" aria-label="Next">›</button>
    <div class="dots">${heroSlides.map((_,i)=>`<button class="${i===0?'on':''}" onclick="heroTo(${i})" aria-label="Slide ${i+1}"></button>`).join("")}</div>
    <div class="hero-search-float">
      <form class="hero-search" action="packages.html">
        <select name="cat">
          <option value="all">All categories</option>
          <option value="temple">Temple tours</option>
          <option value="adventure">Adventure</option>
          <option value="wellness">Wellness</option>
        </select>
        <input name="q" placeholder="Destination, temple, or keyword"/>
        <input type="date" name="date"/>
        <button class="btn">Search</button>
      </form>
    </div>`;
  host.addEventListener("mouseenter",heroStop);
  host.addEventListener("mouseleave",heroStart);
  heroStart();
}
function heroGo(delta){
  const slides = document.querySelectorAll(".hero-c .slide");
  const dots = document.querySelectorAll(".hero-c .dots button");
  if(!slides.length) return;
  heroIdx = (heroIdx + delta + slides.length) % slides.length;
  slides.forEach(s=>s.classList.remove("on"));
  dots.forEach(d=>d.classList.remove("on"));
  slides[heroIdx].classList.add("on");
  if(dots[heroIdx]) dots[heroIdx].classList.add("on");
}
function heroTo(i){ heroIdx = i - 1; heroGo(1); }
function heroStart(){ clearInterval(heroTimer); heroTimer = setInterval(()=>heroGo(1), 6000); }
function heroStop(){ clearInterval(heroTimer); }

/* Packages listing */
function renderPackages(){
  const host = document.getElementById("pkgList"); if(!host) return;
  const p = qp(); const cat = p.get("cat") || "all"; const q = (p.get("q")||"").toLowerCase();
  const list = packages.filter(x => (cat==="all"||x.cat===cat) && (!q || x.title.toLowerCase().includes(q) || x.summary.toLowerCase().includes(q) || x.origin.toLowerCase().includes(q)));
  document.getElementById("pkgTitle").textContent = cat==="all"?"All journeys":catLabel(cat)+"s";
  document.getElementById("pkgCount").textContent = list.length + " journey" + (list.length===1?"":"s");
  const chips = document.getElementById("pkgFilters");
  chips.innerHTML = ["all","temple","adventure","wellness"].map(c=>`<a class="${cat===c?'on':''}" href="packages.html?cat=${c}">${c==='all'?'All':catLabel(c)+'s'}</a>`).join("");
  host.innerHTML = list.length ? list.map(cardHTML).join("") : `<div class="card" style="padding:28px;text-align:center;grid-column:1/-1"><p>Nothing matches. Try broadening your filter.</p></div>`;
}
function cardHTML(p){
  return `<a class="card" href="package.html?id=${p.id}">
    <div class="media ${mediaClass(p.cat)}"><div class="placeholder">${p.title.split(" ")[0]}</div></div>
    <div class="body"><div class="tag">${catLabel(p.cat)} · ${p.days}D / ${p.nights}N</div>
      <h3>${p.title}</h3>
      <p style="font-size:13.5px">${p.summary.slice(0,110)}…</p>
      <div class="meta"><span>★ ${p.rating} · ${p.reviews} reviews</span><span class="price">${inr(p.price)}</span></div>
    </div></a>`;
}

/* Package detail */
function renderPackageDetail(){
  const host = document.getElementById("pkgDetail"); if(!host) return;
  const id = qp().get("id");
  const p = packages.find(x=>x.id===id) || packages[0];
  document.title = p.title + " — Sanchari";
  host.innerHTML = `
    <div class="detail-head">
      <div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:11.5px;color:var(--sand);letter-spacing:.14em;text-transform:uppercase">${catLabel(p.cat)} · ${p.days}D / ${p.nights}N · From ${p.origin}</div>
        <h1 style="margin-top:8px">${p.title}</h1>
        <p style="font-size:16px;color:var(--ink-soft);margin-top:8px">${p.summary}</p>
        <div class="stats">
          <span>★ <b>${p.rating}</b> (${p.reviews})</span>
          <span>Duration <b>${p.days} days</b></span>
          <span>From <b>${p.origin}</b></span>
          <span>Small groups <b>≤ 16</b></span>
        </div>
        <div style="margin-top:14px;display:flex;gap:20px;flex-wrap:wrap">
          ${p.highlights.map(h=>`<div style="display:flex;gap:8px;align-items:flex-start;color:var(--ink-soft);font-size:14px"><span style="color:var(--accent)">●</span>${h}</div>`).join("")}
        </div>
      </div>
      <div>
        <div class="media ${mediaClass(p.cat)}" style="border-radius:14px;aspect-ratio:16/10"><div class="placeholder" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#fff;font-family:Fraunces,serif;font-size:26px">${p.title.split(" ")[0]}</div></div>
      </div>
    </div>
    <div class="itinerary">
      <h2 style="font-size:22px;margin-bottom:14px">Day-by-day itinerary</h2>
      ${p.days_list.map((d,i)=>`<details class="day" ${i===0?"open":""}><summary><div><div class="day-tag">Day ${i+1}</div><h4>${d[0]}</h4></div></summary><div class="body">${d[1]}</div></details>`).join("")}
    </div>
    <div class="grid-2" style="margin-top:32px">
      <div class="booking-box">
        <div style="font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;font-family:'JetBrains Mono',monospace">Starting from</div>
        <div class="price">${inr(p.price)} <span style="font-size:13px;color:var(--muted);font-weight:400">/ person</span></div>
        <label>Departure date</label><input type="date" id="depDate" />
        <label>Travellers</label><select id="pax"><option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option></select>
        <a class="btn" style="margin-top:16px;width:100%" href="booking.html?id=${p.id}">Book now</a>
        <a class="btn ghost" style="margin-top:8px;width:100%" href="contact.html">Request custom itinerary</a>
      </div>
      <div>
        <h3 style="font-size:16px;margin-bottom:10px">Included</h3>
        <ul style="padding-left:18px;color:var(--ink-soft);font-size:14px">
          <li>All ground transport in AC vehicles</li><li>Handpicked accommodation (twin sharing)</li>
          <li>Daily breakfast + selected meals</li><li>Local guide + Sanchari trip lead</li>
          <li>Entry fees & VIP darshan where applicable</li>
        </ul>
        <h3 style="font-size:16px;margin:16px 0 10px">Excluded</h3>
        <ul style="padding-left:18px;color:var(--ink-soft);font-size:14px">
          <li>Airfare to/from ${p.origin}</li><li>Personal expenses & tips</li><li>Travel insurance</li>
        </ul>
      </div>
    </div>`;
}

/* Booking */
function renderBooking(){
  const host = document.getElementById("bookHost"); if(!host) return;
  const id = qp().get("id");
  const p = packages.find(x=>x.id===id) || packages[0];
  document.title = "Book: " + p.title + " — Sanchari";
  host.innerHTML = `
    <div style="font-family:'JetBrains Mono',monospace;font-size:11.5px;color:var(--accent);letter-spacing:.14em;text-transform:uppercase">Step 1 of 2 · Traveller details</div>
    <h2>Book: ${p.title}</h2>
    <p>${p.days} days from ${p.origin}. All fields marked * are required.</p>
    <form class="stack" onsubmit="return submitBooking(event, '${p.id}')" style="margin-top:20px">
      <div class="row"><div><label>Full name *</label><input required name="name"/></div><div><label>Email *</label><input type="email" required name="email"/></div></div>
      <div class="row"><div><label>Mobile *</label><input required name="mobile" placeholder="+91"/></div><div><label>ID type</label><select name="idtype"><option>Aadhaar</option><option>Passport</option><option>Driver's Licence</option></select></div></div>
      <div class="row"><div><label>Departure date *</label><input type="date" required name="date"/></div><div><label>Travellers *</label><select required name="pax"><option>1</option><option>2</option><option>3</option><option>4</option></select></div></div>
      <div><label>Special requirements</label><textarea name="notes" placeholder="Dietary preferences, mobility needs, elder companions…"></textarea></div>
      <div class="card" style="padding:18px 20px;margin-top:8px">
        <div style="display:flex;justify-content:space-between;font-size:14px"><span>Package base</span><span style="font-family:'JetBrains Mono',monospace">${inr(p.price)}</span></div>
        <div style="display:flex;justify-content:space-between;font-size:14px;color:var(--muted);margin-top:4px"><span>GST 5%</span><span style="font-family:'JetBrains Mono',monospace">${inr(Math.round(p.price*0.05))}</span></div>
        <hr style="border:0;border-top:1px solid var(--rule);margin:10px 0"/>
        <div style="display:flex;justify-content:space-between;font-weight:600"><span>Total (per person)</span><span style="font-family:'JetBrains Mono',monospace;color:var(--accent)">${inr(Math.round(p.price*1.05))}</span></div>
      </div>
      <button class="btn" type="submit">Proceed to payment · ${inr(Math.round(p.price*1.05))}</button>
      <p style="font-size:12px;color:var(--muted);margin-top:0">Payment routes to Razorpay's hosted checkout in the live build.</p>
    </form>`;
}
function submitBooking(e, id){
  e.preventDefault();
  const f = e.target;
  const p = packages.find(x=>x.id===id);
  const ref = "SNC" + Math.random().toString(36).slice(2,7).toUpperCase();
  sessionStorage.setItem("lastBooking", JSON.stringify({
    ref, pkgId:id, pkgTitle:p.title, date:f.date.value, pax:parseInt(f.pax.value,10),
    name:f.name.value, email:f.email.value, mobile:f.mobile.value,
    total: Math.round(p.price*1.05) * parseInt(f.pax.value,10)
  }));
  location.href = "confirmation.html?ref=" + ref;
  return false;
}

/* Confirmation */
function renderConfirmation(){
  const host = document.getElementById("confHost"); if(!host) return;
  const b = JSON.parse(sessionStorage.getItem("lastBooking") || "null");
  if(!b){ host.innerHTML = `<h2>No recent booking</h2><a class="btn" href="packages.html">Browse packages</a>`; return; }
  host.innerHTML = `
    <div style="width:64px;height:64px;border-radius:50%;background:var(--accent-soft);color:var(--accent);display:flex;align-items:center;justify-content:center;margin:0 auto 16px;font-size:32px">✓</div>
    <div style="font-family:'JetBrains Mono',monospace;font-size:11.5px;color:var(--accent);letter-spacing:.14em;text-transform:uppercase">Booking confirmed</div>
    <h2 style="margin-top:6px">Namaste ${b.name.split(" ")[0]}, your trip is on.</h2>
    <p>We've emailed your voucher to <b>${b.email}</b> and sent an SMS confirmation to <b>${b.mobile}</b>.</p>
    <div class="card" style="text-align:left;padding:22px 24px;margin-top:24px">
      <div style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:.1em;color:var(--muted);text-transform:uppercase">Booking reference</div>
      <div style="font-family:'JetBrains Mono',monospace;font-size:22px;color:var(--accent);font-weight:600;margin-top:2px">${b.ref}</div>
      <hr style="border:0;border-top:1px solid var(--rule);margin:16px 0"/>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;font-size:14px">
        <div><div style="color:var(--muted);font-size:12px">Package</div><b>${b.pkgTitle}</b></div>
        <div><div style="color:var(--muted);font-size:12px">Departure</div><b>${b.date}</b></div>
        <div><div style="color:var(--muted);font-size:12px">Travellers</div><b>${b.pax}</b></div>
        <div><div style="color:var(--muted);font-size:12px">Total paid</div><b style="color:var(--accent)">${inr(b.total)}</b></div>
      </div>
    </div>
    <div style="display:flex;gap:10px;justify-content:center;margin-top:24px;flex-wrap:wrap">
      <a class="btn" href="packages.html">Browse more</a>
      <a class="btn ghost" href="index.html">Back home</a>
    </div>`;
}

/* Blog */
function renderBlogList(){
  const host = document.getElementById("blogList"); if(!host) return;
  host.innerHTML = articles.map(a=>`
    <a class="card" href="article.html?id=${a.id}">
      <div class="media m-blog"><div class="placeholder">${a.cat}</div></div>
      <div class="body"><div class="tag">${a.cat} · ${a.date} · ${a.read} read</div>
        <h3>${a.title}</h3><p style="font-size:13.5px">${a.excerpt}</p></div>
    </a>`).join("");
}
function renderArticle(){
  const host = document.getElementById("articleHost"); if(!host) return;
  const a = articles.find(x=>x.id===qp().get("id")) || articles[0];
  document.title = a.title + " — Sanchari";
  host.innerHTML = `
    <div class="cover m-blog"><div class="placeholder" style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#fff;font-family:Fraunces,serif;font-size:26px">${a.cat}</div></div>
    <div style="font-family:'JetBrains Mono',monospace;font-size:11.5px;color:var(--sand);letter-spacing:.14em;text-transform:uppercase">${a.cat} · ${a.date} · ${a.read} read</div>
    <h1 style="font-size:34px;margin:8px 0 14px">${a.title}</h1>
    <p style="font-family:Fraunces,serif;font-size:19px;color:var(--ink-soft)">${a.excerpt}</p>
    ${a.body}
    <div style="margin-top:32px"><a class="btn ghost" href="blog.html">← Back to journal</a></div>`;
}

/* Home extras */
function renderHomeExtras(){
  const feat = document.getElementById("featured"); if(feat) feat.innerHTML = packages.slice(0,3).map(cardHTML).join("");
}

/* Init */
document.addEventListener("DOMContentLoaded", () => {
  initHero();
  renderHomeExtras();
  renderPackages();
  renderPackageDetail();
  renderBooking();
  renderConfirmation();
  renderBlogList();
  renderArticle();
});
