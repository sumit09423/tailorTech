import { useState, useEffect, useRef, useCallback } from "react";

/* ─── DATA ─── */
const COURSES=[
  {id:"fullstack-web",cat:"web",badge:"Bestseller",emoji:"🌐",banner:"linear-gradient(135deg,#2d6a4f,#40916c)",title:"Full Stack Web Development",desc:"Master HTML, CSS, JavaScript, React, Node.js, MongoDB. Build & deploy complete web apps from scratch.",duration:"4 Months",lessons:"60+",rating:"4.9",price:"8,999",original:"14,999",tags:["Live","Self-Paced"]},
  {id:"react",cat:"web",badge:"Popular",emoji:"⚛️",banner:"linear-gradient(135deg,#1a6e3a,#52a36b)",title:"React.js Masterclass",desc:"Deep dive into React — hooks, state management, Redux, Next.js, and building production SPAs.",duration:"2 Months",lessons:"35+",rating:"4.8",price:"5,999",original:"9,999",tags:["Live"]},
  {id:"html-css-js",cat:"web",badge:"Beginner",emoji:"🖥️",banner:"linear-gradient(135deg,#3a7d5e,#6ab88a)",title:"HTML, CSS & JavaScript",desc:"The building blocks of the web. Create stunning responsive websites from scratch.",duration:"2 Months",lessons:"30+",rating:"4.9",price:"3,999",original:"6,999",tags:["Live","Self-Paced"]},
  {id:"python",cat:"python",badge:"Trending",emoji:"🐍",banner:"linear-gradient(135deg,#3a5ba0,#6b8dd6)",title:"Python Programming",desc:"From basics to advanced — OOP, file handling, APIs, automation, web scraping, and real projects.",duration:"3 Months",lessons:"45+",rating:"4.8",price:"6,999",original:"11,999",tags:["Live","Self-Paced"]},
  {id:"data-science",cat:"python",badge:"Advanced",emoji:"📈",banner:"linear-gradient(135deg,#2e4a8a,#5a7ec4)",title:"Python for Data Science",desc:"NumPy, Pandas, Matplotlib, Seaborn, SQL — analyze real datasets and build dashboards.",duration:"3 Months",lessons:"40+",rating:"4.7",price:"7,999",original:"12,999",tags:["Live"]},
  {id:"java",cat:"java",badge:"Core",emoji:"☕",banner:"linear-gradient(135deg,#b44a2d,#e07a5f)",title:"Java Programming",desc:"Complete Java — Core Java, OOP, Collections, Multithreading, JDBC, Spring Boot.",duration:"4 Months",lessons:"55+",rating:"4.8",price:"7,499",original:"12,999",tags:["Live","Self-Paced"]},
  {id:"cpp",cat:"java",badge:"Foundation",emoji:"⚙️",banner:"linear-gradient(135deg,#555b6e,#89919e)",title:"C & C++ Programming",desc:"Rock-solid foundation — pointers, memory, data structures, STL, competitive coding.",duration:"3 Months",lessons:"40+",rating:"4.7",price:"5,999",original:"9,999",tags:["Live","Self-Paced"]},
  {id:"dsa",cat:"java",badge:"Pro",emoji:"🚀",banner:"linear-gradient(135deg,#a0422a,#d46a4e)",title:"DSA with Java",desc:"Data Structures & Algorithms — arrays, trees, graphs, DP. Crack coding interviews.",duration:"3 Months",lessons:"50+",rating:"4.9",price:"6,999",original:"10,999",tags:["Live"]},
  {id:"flutter",cat:"mobile",badge:"New",emoji:"📱",banner:"linear-gradient(135deg,#6c48a0,#a77bca)",title:"Flutter & Dart Development",desc:"Beautiful cross-platform mobile apps. Deploy real apps to Play Store & App Store.",duration:"4 Months",lessons:"50+",rating:"4.7",price:"9,499",original:"15,999",tags:["Live","Self-Paced"]},
  {id:"android",cat:"mobile",badge:"Android",emoji:"🤖",banner:"linear-gradient(135deg,#5a3d8a,#8b6bb8)",title:"Android App Development",desc:"Native Android with Kotlin — UI, architecture, Firebase, REST APIs, publishing.",duration:"3 Months",lessons:"40+",rating:"4.6",price:"7,999",original:"13,999",tags:["Live"]},
  {id:"ai-ml",cat:"data",badge:"Hot",emoji:"🧠",banner:"linear-gradient(135deg,#7a4488,#c47ad7)",title:"AI & Machine Learning",desc:"Neural networks, NLP, computer vision with TensorFlow & scikit-learn.",duration:"5 Months",lessons:"65+",rating:"4.8",price:"11,999",original:"19,999",tags:["Live"]},
  {id:"data-analytics",cat:"data",badge:"Career",emoji:"📊",banner:"linear-gradient(135deg,#1a759f,#52b8d6)",title:"Data Analytics Bootcamp",desc:"Excel, SQL, Python, Power BI, Tableau — become data-driven. Capstone included.",duration:"4 Months",lessons:"50+",rating:"4.7",price:"8,499",original:"14,999",tags:["Live","Self-Paced"]},
];
const CURRICULUM=[
  {num:"01",title:"HTML & CSS Foundations",meta:"8 lessons · 2 weeks",lessons:["Introduction to Web Development|45 min","HTML5 Semantics|60 min","CSS3 & Flexbox|75 min","CSS Grid & Responsive|60 min","Forms & Media|50 min","🛠 Project: Portfolio|120 min"]},
  {num:"02",title:"JavaScript Essentials",meta:"10 lessons · 3 weeks",lessons:["Variables & Operators|50 min","Functions & Scope|60 min","Arrays & Objects|55 min","DOM & Events|70 min","Async JS & Fetch|65 min","🛠 Project: Todo App|90 min"]},
  {num:"03",title:"React.js & State",meta:"12 lessons · 4 weeks",lessons:["React Setup & JSX|50 min","Components & Props|55 min","Hooks & Lifecycle|65 min","React Router|50 min","Redux Basics|70 min","🛠 Project: E-Commerce|150 min"]},
  {num:"04",title:"Node.js, Express & MongoDB",meta:"12 lessons · 4 weeks",lessons:["Node.js Fundamentals|55 min","REST APIs|70 min","MongoDB & Mongoose|65 min","Auth & JWT|60 min","Cloud Deploy|55 min","🛠 Capstone: MERN App|300 min"]},
  {num:"05",title:"Career Prep",meta:"6 lessons · 1 week",lessons:["Git & GitHub|45 min","Deployment|50 min","Resume Building|40 min","Mock Interviews|60 min"]},
];
const BATCHES=[
  {label:"Morning",name:"April 2026",color:"#7BAE8E",start:"Apr 7, 2026",time:"Mon/Wed/Fri 9-11 AM",mode:"Zoom Live",seats:18,status:"open"},
  {label:"Evening",name:"April 2026",color:"#E8845C",start:"Apr 14, 2026",time:"Mon/Wed/Fri 7-9 PM",mode:"Zoom Live",seats:5,status:"few"},
  {label:"Weekend",name:"May 2026",color:"#6BB3D4",start:"May 3, 2026",time:"Sat/Sun 10 AM-1 PM",mode:"Zoom Live",seats:22,status:"open"},
  {label:"Self-Paced",name:"Start Anytime",color:"#9B87B2",start:"Instant Access",time:"Your own speed",mode:"HD Recordings",seats:null,status:"open"},
];
const REVIEWS=[
  {text:"Within 4 months, I built 3 full-stack projects and landed a junior developer job!",name:"Amit Patel",role:"Web Developer at TCS",avatar:"👨‍🎓"},
  {text:"The Python + AI/ML course helped me transition from non-tech. Highly recommended!",name:"Sneha Rathore",role:"Data Analyst at Infosys",avatar:"👩"},
  {text:"Self-paced Flutter on weekends — now I freelance building mobile apps!",name:"Rajesh Kumar",role:"Freelance Developer",avatar:"👨"},
];
const FAQS=[
  ["Need prior experience?","No! Designed for complete beginners. Just need a laptop."],
  ["Miss a live class?","All classes recorded. Lifetime access + Discord support."],
  ["Get a certificate?","Yes! Certificate on completing modules and capstone."],
  ["Placement help?","Resume reviews, mock interviews, hiring partner connections."],
  ["Pay in installments?","EMI from ₹1,500/month. Custom plans available."],
  ["For working professionals?","Evening, weekend, and self-paced options available."],
];
const TEAM=[
  {emoji:"👨‍💻",title:"Founder & CEO",role:"Full Stack Expert",bio:"10+ years in development. Making tech education accessible."},
  {emoji:"👩‍💻",title:"Lead Instructor",role:"Python & AI/ML",bio:"Data scientist turned educator. Python & ML specialist."},
  {emoji:"👨‍🎨",title:"Senior Instructor",role:"Web & Mobile",bio:"React & Flutter specialist. 20+ production apps shipped."},
  {emoji:"👩‍🎓",title:"Career Counselor",role:"Placement Head",bio:"Helps students build resumes and land tech jobs."},
];
const FILTERS=[{key:"all",label:"All"},{key:"web",label:"Web Dev"},{key:"python",label:"Python"},{key:"java",label:"Java/C++"},{key:"mobile",label:"Mobile"},{key:"data",label:"Data/AI"}];

/* ─── HOOKS ─── */
function useW(){const[w,s]=useState(1200);useEffect(()=>{const f=()=>s(window.innerWidth);f();window.addEventListener("resize",f);return()=>window.removeEventListener("resize",f)},[]);return w}
function Reveal({children,delay=0,style={}}){const r=useRef(null);const[v,s]=useState(false);useEffect(()=>{const el=r.current;if(!el)return;const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)s(true)},{threshold:.08,rootMargin:"0px 0px -20px 0px"});o.observe(el);return()=>o.disconnect()},[]);return<div ref={r} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(22px)",transition:`all .55s cubic-bezier(.16,1,.3,1) ${delay}s`,...style}}>{children}</div>}

/* ─── CSS ─── */
const CSS=`@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;500;600;700;800;900&family=DM+Serif+Display:ital@0;1&display=swap');
@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}
*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{overflow-x:hidden;font-family:'Mulish',sans-serif}
input,select,textarea{font-family:'Mulish',sans-serif}
.mob-ov{position:fixed;inset:0;background:rgba(0,0,0,.4);z-index:998;opacity:0;pointer-events:none;transition:opacity .3s}.mob-ov.on{opacity:1;pointer-events:auto}
.mob-dr{position:fixed;top:0;right:-290px;width:270px;height:100vh;background:#fff;z-index:999;padding:4.5rem 1.8rem 2rem;transition:right .35s cubic-bezier(.16,1,.3,1);box-shadow:-8px 0 30px rgba(0,0,0,.08);display:flex;flex-direction:column;gap:.3rem;overflow-y:auto}
.mob-dr.on{right:0}.mob-dr a{display:block;padding:.75rem 0;font-size:1rem;font-weight:600;color:#1E2A3A;border-bottom:1px solid rgba(0,0,0,.05);cursor:pointer}
.mob-cta-b{margin-top:.8rem;background:#7BAE8E;color:#fff!important;text-align:center;padding:.9rem;border-radius:50px;border:none;font-size:.95rem;font-weight:700;cursor:pointer;font-family:'Mulish',sans-serif}
.mob-x{position:absolute;top:1rem;right:1rem;background:none;border:none;font-size:1.4rem;color:#1E2A3A;cursor:pointer;padding:.5rem}
.tt-input{width:100%;padding:.85rem 1rem;border-radius:12px;border:2px solid rgba(0,0,0,.08);font-size:.9rem;outline:none;transition:border-color .3s;background:#fff;font-family:'Mulish',sans-serif}
.tt-input:focus{border-color:#7BAE8E}
.tt-label{display:block;font-size:.82rem;font-weight:700;color:#1E2A3A;margin-bottom:.35rem}
.toast{position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#1E2A3A;color:#fff;padding:.9rem 1.8rem;border-radius:14px;font-size:.88rem;font-weight:600;z-index:9999;box-shadow:0 10px 30px rgba(0,0,0,.15);animation:fadeUp .4s ease-out}`;

/* ─── SHARED ─── */
function Nav({page,nav,w,user,onLogout}){
  const[sh,setSh]=useState(false);const[mo,setMo]=useState(false);
  useEffect(()=>{const f=()=>setSh(window.scrollY>30);window.addEventListener("scroll",f);return()=>window.removeEventListener("scroll",f)},[]);
  useEffect(()=>setMo(false),[page]);
  const m=w<768;const go=(t,id)=>{setMo(false);nav(t,id)};const sc=id=>{setMo(false);nav("home");setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:"smooth"}),120)};
  return<>
    <nav style={{position:"fixed",top:0,width:"100%",zIndex:1000,padding:m?".7rem 5%":".85rem 4%",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(255,253,251,.92)",backdropFilter:"blur(16px)",borderBottom:"1px solid rgba(0,0,0,.04)",boxShadow:sh?"0 3px 18px rgba(0,0,0,.05)":"none",transition:"all .3s"}}>
      <a onClick={()=>go("home")} style={{fontFamily:"'DM Serif Display',serif",fontSize:m?"1.15rem":"1.35rem",color:"#1E2A3A",display:"flex",alignItems:"center",gap:".4rem",cursor:"pointer"}}>
        <span style={{width:m?28:34,height:m?28:34,background:"linear-gradient(135deg,#7BAE8E,#5A8A6C)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:m?".6rem":".75rem",fontWeight:800}}>TT</span>TailorTech</a>
      {!m?<div style={{display:"flex",gap:"1.5rem",alignItems:"center"}}>
        {[["home","Home"],["courses","Courses"]].map(([k,l])=><a key={k} onClick={()=>go(k)} style={{color:page===k?"#5A8A6C":"#6B7C8F",fontSize:".84rem",fontWeight:page===k?700:500,cursor:"pointer",borderBottom:page===k?"2px solid #7BAE8E":"2px solid transparent",paddingBottom:3}}>{l}</a>)}
        {[["about","About"],["team","Team"],["reviews","Reviews"]].map(([k,l])=><a key={k} onClick={()=>sc(k)} style={{color:"#6B7C8F",fontSize:".84rem",fontWeight:500,cursor:"pointer"}}>{l}</a>)}
        {user?<div style={{display:"flex",alignItems:"center",gap:".8rem"}}>
          <a onClick={()=>go("profile")} style={{display:"flex",alignItems:"center",gap:".45rem",cursor:"pointer",padding:".35rem .9rem .35rem .35rem",borderRadius:50,background:page==="profile"?"#E8F3EC":"rgba(0,0,0,.03)",transition:"all .3s"}}>
            <div style={{width:32,height:32,borderRadius:"50%",background:"linear-gradient(135deg,#7BAE8E,#5A8A6C)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:".75rem",fontWeight:800}}>{user.name.charAt(0).toUpperCase()}</div>
            <span style={{fontSize:".84rem",fontWeight:600,color:"#1E2A3A"}}>{user.name.split(" ")[0]}</span>
          </a>
        </div>:<a onClick={()=>go("login")} style={{background:"#7BAE8E",color:"#fff",padding:".48rem 1.3rem",borderRadius:50,fontWeight:700,fontSize:".84rem",cursor:"pointer"}}>Login</a>}
      </div>:<div style={{display:"flex",alignItems:"center",gap:".5rem"}}>
        {user&&<a onClick={()=>go("profile")} style={{cursor:"pointer"}}><div style={{width:30,height:30,borderRadius:"50%",background:"linear-gradient(135deg,#7BAE8E,#5A8A6C)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:".7rem",fontWeight:800}}>{user.name.charAt(0).toUpperCase()}</div></a>}
        <button onClick={()=>setMo(true)} style={{background:"none",border:"none",padding:4,cursor:"pointer",display:"flex",flexDirection:"column",gap:4}}>
          <span style={{display:"block",width:20,height:2.5,background:"#1E2A3A",borderRadius:3}}/><span style={{display:"block",width:20,height:2.5,background:"#1E2A3A",borderRadius:3}}/><span style={{display:"block",width:14,height:2.5,background:"#1E2A3A",borderRadius:3}}/>
        </button>
      </div>}
    </nav>
    <div className={`mob-ov${mo?" on":""}`} onClick={()=>setMo(false)}/>
    <div className={`mob-dr${mo?" on":""}`}><button className="mob-x" onClick={()=>setMo(false)}>✕</button>
      {user&&<div style={{display:"flex",alignItems:"center",gap:".6rem",paddingBottom:".8rem",borderBottom:"1px solid rgba(0,0,0,.05)",marginBottom:".3rem"}}><div style={{width:40,height:40,borderRadius:"50%",background:"linear-gradient(135deg,#7BAE8E,#5A8A6C)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:".9rem",fontWeight:800}}>{user.name.charAt(0).toUpperCase()}</div><div><strong style={{fontSize:".9rem",color:"#1E2A3A"}}>{user.name}</strong><div style={{fontSize:".72rem",color:"#6B7C8F"}}>{user.email}</div></div></div>}
      <a onClick={()=>go("home")}>Home</a><a onClick={()=>go("courses")}>Courses</a><a onClick={()=>sc("about")}>About</a><a onClick={()=>sc("team")}>Team</a>
      {user?<><a onClick={()=>go("profile")}>My Profile</a><a onClick={()=>{setMo(false);onLogout()}} style={{color:"#E8845C"}}>Logout</a></>:<button className="mob-cta-b" onClick={()=>go("login")}>Login / Sign Up</button>}
    </div>
  </>
}

function Foot({nav,w}){const m=w<640;const t=w<1024;
  const L=({children,onClick})=><a onClick={onClick} style={{display:"block",color:"rgba(255,255,255,.4)",fontSize:".84rem",marginBottom:".45rem",cursor:"pointer"}}>{children}</a>;
  return<footer style={{background:"#1E2A3A",color:"#fff",padding:m?"2rem 5% 1.2rem":"3rem 6% 1.2rem"}}>
    <div style={{maxWidth:1250,margin:"0 auto",display:"grid",gridTemplateColumns:m?"1fr":t?"1fr 1fr":"2fr 1fr 1fr 1fr",gap:m?"1.5rem":"2.2rem",marginBottom:"1.5rem"}}>
      <div><div onClick={()=>nav("home")} style={{fontFamily:"'DM Serif Display',serif",fontSize:"1.25rem",color:"#fff",display:"flex",alignItems:"center",gap:".4rem",cursor:"pointer",marginBottom:".6rem"}}><span style={{width:30,height:30,background:"#7BAE8E",borderRadius:7,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:".65rem",fontWeight:800}}>TT</span>TailorTech</div><p style={{fontSize:".82rem",color:"rgba(255,255,255,.35)",lineHeight:1.7,maxWidth:260}}>Empowering the next generation of developers through practical training.</p></div>
      <div><h4 style={{fontSize:".72rem",textTransform:"uppercase",letterSpacing:1.5,color:"#7BAE8E",marginBottom:".6rem"}}>Courses</h4><L onClick={()=>nav("courses")}>Web Development</L><L onClick={()=>nav("courses")}>Python & AI/ML</L><L onClick={()=>nav("courses")}>Java</L><L onClick={()=>nav("courses")}>Mobile Apps</L></div>
      <div><h4 style={{fontSize:".72rem",textTransform:"uppercase",letterSpacing:1.5,color:"#7BAE8E",marginBottom:".6rem"}}>Company</h4><L>About</L><L>Team</L><L>Blog</L><L>Careers</L></div>
      <div><h4 style={{fontSize:".72rem",textTransform:"uppercase",letterSpacing:1.5,color:"#7BAE8E",marginBottom:".6rem"}}>Support</h4><L>Help Center</L><L>Contact</L><L>Privacy</L><L>Terms</L></div>
    </div>
    <div style={{maxWidth:1250,margin:"0 auto",paddingTop:".9rem",borderTop:"1px solid rgba(255,255,255,.06)",display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:".5rem",fontSize:".75rem",color:"rgba(255,255,255,.22)"}}><span>© 2026 TailorTech</span><span>Made with ❤️ in Jodhpur</span></div>
  </footer>
}

function CTA({nav,w}){const m=w<640;return<section style={{background:"linear-gradient(135deg,#7BAE8E,#5A8A6C)",padding:m?"2.5rem 5%":"4rem 6%",textAlign:"center",position:"relative",overflow:"hidden"}}>
  <div style={{position:"absolute",top:-70,right:-70,width:300,height:300,borderRadius:"50%",background:"rgba(255,255,255,.05)"}}/>
  <Reveal><div style={{position:"relative",zIndex:2,maxWidth:580,margin:"0 auto"}}>
    <h2 style={{fontFamily:"'DM Serif Display',serif",fontSize:m?"1.3rem":"clamp(1.6rem,2.8vw,2.3rem)",color:"#fff",marginBottom:".5rem"}}>Ready to Start Your Tech Journey?</h2>
    <p style={{fontSize:m?".85rem":".95rem",color:"rgba(255,255,255,.72)",marginBottom:"1.3rem",lineHeight:1.7}}>Join thousands building successful tech careers.</p>
    <div style={{display:"flex",justifyContent:"center",gap:".6rem",flexWrap:"wrap"}}>
      <button onClick={()=>nav("courses")} style={{background:"#fff",color:"#5A8A6C",padding:m?".7rem 1.4rem":".75rem 1.6rem",borderRadius:50,fontSize:".88rem",fontWeight:700,border:"none",cursor:"pointer"}}>Browse Courses</button>
      <button style={{background:"transparent",color:"#fff",padding:m?".7rem 1.4rem":".75rem 1.6rem",borderRadius:50,fontSize:".88rem",fontWeight:600,border:"2px solid rgba(255,255,255,.3)",cursor:"pointer"}}>Contact Us</button>
    </div>
  </div></Reveal>
</section>}

function SH({label,title,sub,light,w}){const m=w<640;return<Reveal><div style={{textAlign:"center",marginBottom:m?"1.8rem":"2.8rem"}}>
  <div style={{display:"inline-flex",alignItems:"center",gap:".4rem",fontSize:".7rem",fontWeight:800,textTransform:"uppercase",letterSpacing:2.5,color:light?"#7BAE8E":"#5A8A6C",marginBottom:".4rem"}}><span style={{width:16,height:2,background:"#7BAE8E",display:"inline-block"}}/>{label}</div>
  <h2 style={{fontFamily:"'DM Serif Display',serif",fontSize:m?"1.3rem":"clamp(1.6rem,2.8vw,2.3rem)",color:light?"#fff":"#1E2A3A",lineHeight:1.2,marginBottom:".4rem"}}>{title}</h2>
  {sub&&<p style={{fontSize:m?".82rem":".92rem",color:light?"rgba(255,255,255,.45)":"#6B7C8F",maxWidth:480,margin:"0 auto",lineHeight:1.7}}>{sub}</p>}
</div></Reveal>}

function CC({c,nav,delay=0}){const[h,sH]=useState(false);return<Reveal delay={delay} style={{height:"100%"}}>
  <div onClick={()=>nav("detail",c.id)} onMouseEnter={()=>sH(true)} onMouseLeave={()=>sH(false)} style={{background:"#fff",borderRadius:15,overflow:"hidden",border:"1px solid rgba(0,0,0,.05)",transition:"all .3s",cursor:"pointer",display:"flex",flexDirection:"column",height:"100%",transform:h?"translateY(-5px)":"none",boxShadow:h?"0 14px 36px rgba(0,0,0,.07)":"none"}}>
    <div style={{height:140,padding:"1rem",display:"flex",flexDirection:"column",justifyContent:"space-between",background:c.banner,position:"relative"}}>
      <span style={{alignSelf:"flex-start",background:"rgba(255,255,255,.2)",backdropFilter:"blur(8px)",color:"#fff",fontSize:".63rem",fontWeight:700,padding:".22rem .55rem",borderRadius:50,textTransform:"uppercase",letterSpacing:.7,zIndex:2}}>{c.badge}</span>
      <span style={{fontSize:"2.2rem",alignSelf:"flex-end",zIndex:2,filter:"drop-shadow(0 2px 4px rgba(0,0,0,.15))"}}>{c.emoji}</span>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,transparent 45%,rgba(0,0,0,.12) 100%)"}}/>
    </div>
    <div style={{padding:"1.1rem",flex:1,display:"flex",flexDirection:"column"}}>
      <h3 style={{fontFamily:"'DM Serif Display',serif",fontSize:".98rem",color:"#1E2A3A",marginBottom:".2rem"}}>{c.title}</h3>
      <p style={{fontSize:".78rem",color:"#6B7C8F",lineHeight:1.55,marginBottom:".35rem",flex:1}}>{c.desc}</p>
      <div style={{display:"flex",gap:".25rem",flexWrap:"wrap",marginBottom:".5rem"}}>{c.tags.map(t=><span key={t} style={{fontSize:".6rem",padding:".18rem .45rem",borderRadius:50,fontWeight:700,background:t==="Live"?"#E8F3EC":"#D4EEF8",color:t==="Live"?"#3d7a54":"#3a8aaa"}}>{t}</span>)}</div>
      <div style={{display:"flex",gap:".55rem",marginBottom:".7rem",fontSize:".7rem",color:"#6B7C8F"}}><span>🕐 {c.duration}</span><span>📚 {c.lessons}</span><span>⭐ {c.rating}</span></div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:".55rem",borderTop:"1px solid rgba(0,0,0,.04)"}}>
        <div><span style={{fontFamily:"'DM Serif Display',serif",fontSize:"1.05rem",color:"#1E2A3A"}}>₹{c.price}</span><span style={{fontSize:".72rem",color:"#6B7C8F",textDecoration:"line-through",marginLeft:".2rem"}}>₹{c.original}</span></div>
        <span style={{background:"#E8F3EC",color:"#5A8A6C",padding:".32rem .8rem",borderRadius:50,fontSize:".7rem",fontWeight:700}}>View Details</span>
      </div>
    </div>
  </div>
</Reveal>}

function Toast({msg}){if(!msg)return null;return<div className="toast">{msg}</div>}

/* ═══════ LOGIN / REGISTER ═══════ */
function LoginPage({nav,w,onLogin}){
  const m=w<640;const[mode,setMode]=useState("login");
  const[form,setForm]=useState({name:"",email:"",phone:"",password:""});
  const[error,setError]=useState("");
  const upd=k=>e=>setForm({...form,[k]:e.target.value});
  const submit=()=>{
    setError("");
    if(mode==="register"&&!form.name.trim())return setError("Please enter your name");
    if(!form.email.includes("@"))return setError("Please enter a valid email");
    if(form.password.length<6)return setError("Password must be at least 6 characters");
    onLogin({name:form.name||form.email.split("@")[0],email:form.email,phone:form.phone||"+91 98765 43210",bio:"",city:"Jodhpur",enrolled:mode==="register"?[]:["fullstack-web","python"],joinDate:"March 2026"});
    nav("home");
  };
  const inp={marginBottom:"1rem"};
  return<section style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:m?"5.5rem 5% 3rem":"6rem 6% 3rem",background:"#FFF8F0",position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",top:-120,right:-120,width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(123,174,142,.08),transparent 70%)"}}/>
    <div style={{position:"relative",zIndex:2,width:"100%",maxWidth:440}}>
      <Reveal>
        <div style={{textAlign:"center",marginBottom:"2rem"}}>
          <div onClick={()=>nav("home")} style={{fontFamily:"'DM Serif Display',serif",fontSize:"1.5rem",color:"#1E2A3A",display:"inline-flex",alignItems:"center",gap:".4rem",cursor:"pointer",marginBottom:".8rem"}}><span style={{width:36,height:36,background:"linear-gradient(135deg,#7BAE8E,#5A8A6C)",borderRadius:9,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:".8rem",fontWeight:800}}>TT</span>TailorTech</div>
          <h1 style={{fontFamily:"'DM Serif Display',serif",fontSize:m?"1.5rem":"1.8rem",color:"#1E2A3A",marginBottom:".3rem"}}>{mode==="login"?"Welcome Back!":"Create Your Account"}</h1>
          <p style={{fontSize:".9rem",color:"#6B7C8F"}}>{mode==="login"?"Sign in to access your courses":"Join TailorTech and start learning today"}</p>
        </div>
        <div style={{background:"#fff",borderRadius:20,padding:m?"1.5rem":"2rem",boxShadow:"0 10px 40px rgba(0,0,0,.06)",border:"1px solid rgba(0,0,0,.05)"}}>
          {/* TABS */}
          <div style={{display:"flex",marginBottom:"1.5rem",background:"rgba(0,0,0,.04)",borderRadius:12,padding:3}}>
            {[["login","Sign In"],["register","Sign Up"]].map(([k,l])=><button key={k} onClick={()=>{setMode(k);setError("")}} style={{flex:1,padding:".65rem",borderRadius:10,fontSize:".85rem",fontWeight:700,border:"none",cursor:"pointer",background:mode===k?"#fff":"transparent",color:mode===k?"#1E2A3A":"#6B7C8F",boxShadow:mode===k?"0 2px 8px rgba(0,0,0,.06)":"none",transition:"all .3s",fontFamily:"'Mulish',sans-serif"}}>{l}</button>)}
          </div>
          {error&&<div style={{background:"#FFF0EA",color:"#E8845C",padding:".7rem 1rem",borderRadius:10,fontSize:".82rem",fontWeight:600,marginBottom:"1rem"}}>{error}</div>}
          {mode==="register"&&<div style={inp}><label className="tt-label">Full Name</label><input className="tt-input" placeholder="Rahul Sharma" value={form.name} onChange={upd("name")}/></div>}
          <div style={inp}><label className="tt-label">Email Address</label><input className="tt-input" type="email" placeholder="you@example.com" value={form.email} onChange={upd("email")}/></div>
          {mode==="register"&&<div style={inp}><label className="tt-label">Phone Number</label><input className="tt-input" placeholder="+91 98765 43210" value={form.phone} onChange={upd("phone")}/></div>}
          <div style={inp}><label className="tt-label">Password</label><input className="tt-input" type="password" placeholder="Min 6 characters" value={form.password} onChange={upd("password")}/></div>
          {mode==="login"&&<div style={{textAlign:"right",marginBottom:"1rem"}}><a style={{fontSize:".8rem",color:"#7BAE8E",fontWeight:600,cursor:"pointer"}}>Forgot password?</a></div>}
          <button onClick={submit} style={{width:"100%",padding:".9rem",borderRadius:50,fontSize:".95rem",fontWeight:700,border:"none",background:"#7BAE8E",color:"#fff",cursor:"pointer",fontFamily:"'Mulish',sans-serif",marginBottom:".8rem"}}>{mode==="login"?"Sign In":"Create Account"}</button>
          <div style={{textAlign:"center",fontSize:".85rem",color:"#6B7C8F"}}>{mode==="login"?"Don't have an account?":"Already have an account?"} <a onClick={()=>{setMode(mode==="login"?"register":"login");setError("")}} style={{color:"#7BAE8E",fontWeight:700,cursor:"pointer"}}>{mode==="login"?"Sign Up":"Sign In"}</a></div>
        </div>
        <div style={{textAlign:"center",marginTop:"1.2rem"}}>
          <p style={{fontSize:".78rem",color:"#6B7C8F"}}>By continuing, you agree to our <a style={{color:"#7BAE8E",fontWeight:600,cursor:"pointer"}}>Terms</a> & <a style={{color:"#7BAE8E",fontWeight:600,cursor:"pointer"}}>Privacy Policy</a></p>
        </div>
      </Reveal>
    </div>
  </section>
}

/* ═══════ PROFILE PAGE ═══════ */
function ProfilePage({nav,w,user,setUser,onLogout,enrolled,onUnenroll}){
  const m=w<640;const t=w<1024;
  const[tab,setTab]=useState("profile");
  const[editing,setEditing]=useState(false);
  const[form,setForm]=useState({name:user.name,email:user.email,phone:user.phone,bio:user.bio||"",city:user.city||""});
  const[toast,setToast]=useState("");
  const upd=k=>e=>setForm({...form,[k]:e.target.value});
  const save=()=>{setUser({...user,...form});setEditing(false);setToast("Profile updated!");setTimeout(()=>setToast(""),2500)};
  const enrolledCourses=COURSES.filter(c=>(user.enrolled||[]).includes(c.id));

  const tabBtn=(k,l,ic)=><button key={k} onClick={()=>setTab(k)} style={{display:"flex",alignItems:"center",gap:".5rem",padding:".7rem 1.1rem",borderRadius:12,fontSize:".85rem",fontWeight:tab===k?700:500,background:tab===k?"#E8F3EC":"transparent",color:tab===k?"#5A8A6C":"#6B7C8F",border:"none",cursor:"pointer",width:"100%",textAlign:"left",transition:"all .2s",fontFamily:"'Mulish',sans-serif"}}><span style={{fontSize:"1rem"}}>{ic}</span>{l}</button>;

  return<>
    <Toast msg={toast}/>
    <section style={{padding:m?"5.5rem 5% 1.5rem":"6.5rem 6% 1.5rem",background:"#FFF8F0"}}>
      <div style={{maxWidth:1100,margin:"0 auto"}}>
        <div style={{marginBottom:"1rem",fontSize:".78rem"}}><a onClick={()=>nav("home")} style={{color:"#6B7C8F",cursor:"pointer"}}>Home</a><span style={{color:"#6B7C8F",margin:"0 .3rem"}}>›</span><span style={{color:"#1E2A3A",fontWeight:700}}>My Profile</span></div>
        {/* HEADER */}
        <div style={{display:"flex",alignItems:m?"center":"center",gap:m?"1rem":"1.5rem",flexDirection:m?"column":"row",textAlign:m?"center":"left",padding:"1.5rem 0"}}>
          <div style={{width:m?80:100,height:m?80:100,borderRadius:"50%",background:"linear-gradient(135deg,#7BAE8E,#5A8A6C)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:m?"2rem":"2.5rem",fontWeight:800,flexShrink:0,boxShadow:"0 8px 24px rgba(123,174,142,.25)"}}>{user.name.charAt(0).toUpperCase()}</div>
          <div style={{flex:1}}>
            <h1 style={{fontFamily:"'DM Serif Display',serif",fontSize:m?"1.4rem":"1.8rem",color:"#1E2A3A",marginBottom:".15rem"}}>{user.name}</h1>
            <p style={{fontSize:".88rem",color:"#6B7C8F",marginBottom:".3rem"}}>{user.email}</p>
            <div style={{display:"flex",gap:".8rem",justifyContent:m?"center":"flex-start",fontSize:".78rem",color:"#6B7C8F"}}>
              <span>📍 {user.city||"Jodhpur"}</span><span>📅 Joined {user.joinDate||"Mar 2026"}</span><span>📚 {enrolledCourses.length} courses</span>
            </div>
          </div>
          <button onClick={()=>onLogout()} style={{padding:".55rem 1.3rem",borderRadius:50,fontSize:".82rem",fontWeight:700,border:"2px solid rgba(232,92,92,.2)",background:"transparent",color:"#E85C5C",cursor:"pointer",fontFamily:"'Mulish',sans-serif",whiteSpace:"nowrap"}}>Logout</button>
        </div>
      </div>
    </section>

    <section style={{padding:m?"1.5rem 5% 3rem":"2rem 6% 4rem"}}>
      <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:t?"1fr":"220px 1fr",gap:"2rem"}}>
        {/* SIDEBAR */}
        <div>
          <div style={{background:"#fff",borderRadius:16,padding:".8rem",border:"1px solid rgba(0,0,0,.04)",display:"flex",flexDirection:t?"row":"column",gap:".3rem",position:t?"static":"sticky",top:70,overflowX:t?"auto":"visible"}}>
            {tabBtn("profile","My Profile","👤")}
            {tabBtn("courses","My Courses","📚")}
            {tabBtn("settings","Settings","⚙️")}
          </div>
        </div>

        {/* CONTENT */}
        <div>
          {/* PROFILE TAB */}
          {tab==="profile"&&<div style={{background:"#fff",borderRadius:18,padding:m?"1.3rem":"2rem",border:"1px solid rgba(0,0,0,.04)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.5rem"}}>
              <h2 style={{fontFamily:"'DM Serif Display',serif",fontSize:"1.3rem",color:"#1E2A3A"}}>Personal Information</h2>
              {!editing?<button onClick={()=>setEditing(true)} style={{padding:".45rem 1.1rem",borderRadius:50,fontSize:".8rem",fontWeight:700,border:"2px solid rgba(0,0,0,.08)",background:"#fff",color:"#1E2A3A",cursor:"pointer",fontFamily:"'Mulish',sans-serif"}}>✏️ Edit</button>
              :<button onClick={save} style={{padding:".45rem 1.1rem",borderRadius:50,fontSize:".8rem",fontWeight:700,border:"none",background:"#7BAE8E",color:"#fff",cursor:"pointer",fontFamily:"'Mulish',sans-serif"}}>Save Changes</button>}
            </div>
            <div style={{display:"grid",gridTemplateColumns:m?"1fr":"1fr 1fr",gap:"1.2rem"}}>
              <div><label className="tt-label">Full Name</label>{editing?<input className="tt-input" value={form.name} onChange={upd("name")}/>:<p style={{fontSize:".92rem",color:"#2C3E50",padding:".6rem 0"}}>{user.name}</p>}</div>
              <div><label className="tt-label">Email</label>{editing?<input className="tt-input" value={form.email} onChange={upd("email")}/>:<p style={{fontSize:".92rem",color:"#2C3E50",padding:".6rem 0"}}>{user.email}</p>}</div>
              <div><label className="tt-label">Phone</label>{editing?<input className="tt-input" value={form.phone} onChange={upd("phone")}/>:<p style={{fontSize:".92rem",color:"#2C3E50",padding:".6rem 0"}}>{user.phone||"Not set"}</p>}</div>
              <div><label className="tt-label">City</label>{editing?<input className="tt-input" value={form.city} onChange={upd("city")}/>:<p style={{fontSize:".92rem",color:"#2C3E50",padding:".6rem 0"}}>{user.city||"Not set"}</p>}</div>
              <div style={{gridColumn:m?"1":"1/3"}}><label className="tt-label">Bio</label>{editing?<textarea className="tt-input" rows={3} placeholder="Tell us about yourself..." value={form.bio} onChange={upd("bio")} style={{resize:"vertical"}}/>:<p style={{fontSize:".92rem",color:user.bio?"#2C3E50":"#aaa",padding:".6rem 0"}}>{user.bio||"No bio yet. Click Edit to add one!"}</p>}</div>
            </div>
          </div>}

          {/* MY COURSES TAB */}
          {tab==="courses"&&<div>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1.2rem"}}>
              <h2 style={{fontFamily:"'DM Serif Display',serif",fontSize:"1.3rem",color:"#1E2A3A"}}>Enrolled Courses</h2>
              <span style={{fontSize:".85rem",color:"#6B7C8F"}}>{enrolledCourses.length} course{enrolledCourses.length!==1?"s":""}</span>
            </div>
            {enrolledCourses.length===0?
              <div style={{background:"#fff",borderRadius:18,padding:"3rem 2rem",border:"1px solid rgba(0,0,0,.04)",textAlign:"center"}}>
                <div style={{fontSize:"3rem",marginBottom:".8rem"}}>📭</div>
                <h3 style={{fontFamily:"'DM Serif Display',serif",fontSize:"1.2rem",color:"#1E2A3A",marginBottom:".3rem"}}>No Courses Yet</h3>
                <p style={{fontSize:".88rem",color:"#6B7C8F",marginBottom:"1.2rem"}}>You haven't enrolled in any courses yet. Start exploring!</p>
                <button onClick={()=>nav("courses")} style={{background:"#7BAE8E",color:"#fff",padding:".75rem 1.6rem",borderRadius:50,fontSize:".88rem",fontWeight:700,border:"none",cursor:"pointer",fontFamily:"'Mulish',sans-serif"}}>Browse Courses</button>
              </div>
            :enrolledCourses.map((c,i)=>
              <div key={c.id} style={{background:"#fff",borderRadius:16,border:"1px solid rgba(0,0,0,.04)",marginBottom:"1rem",overflow:"hidden",display:"flex",flexDirection:m?"column":"row"}}>
                <div onClick={()=>nav("detail",c.id)} style={{width:m?"100%":180,minHeight:m?100:0,background:c.banner,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"2.2rem",cursor:"pointer",flexShrink:0}}>{c.emoji}</div>
                <div style={{padding:"1.2rem",flex:1,display:"flex",flexDirection:"column"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:".5rem",flexWrap:"wrap"}}>
                    <div>
                      <h3 onClick={()=>nav("detail",c.id)} style={{fontFamily:"'DM Serif Display',serif",fontSize:"1.05rem",color:"#1E2A3A",marginBottom:".15rem",cursor:"pointer"}}>{c.title}</h3>
                      <div style={{display:"flex",gap:".6rem",fontSize:".72rem",color:"#6B7C8F",marginBottom:".6rem"}}><span>🕐 {c.duration}</span><span>📚 {c.lessons} Lessons</span></div>
                    </div>
                    <div style={{display:"flex",gap:".4rem"}}>
                      <span style={{background:"#E8F3EC",color:"#5A8A6C",padding:".25rem .65rem",borderRadius:50,fontSize:".68rem",fontWeight:700}}>Enrolled</span>
                    </div>
                  </div>
                  {/* PROGRESS BAR */}
                  <div style={{marginBottom:".5rem"}}>
                    <div style={{display:"flex",justifyContent:"space-between",fontSize:".72rem",color:"#6B7C8F",marginBottom:".3rem"}}><span>Progress</span><span>{[35,62,18,45,80][i%5]}%</span></div>
                    <div style={{height:6,background:"rgba(0,0,0,.06)",borderRadius:3,overflow:"hidden"}}><div style={{height:"100%",width:`${[35,62,18,45,80][i%5]}%`,background:"linear-gradient(90deg,#7BAE8E,#5A8A6C)",borderRadius:3,transition:"width .5s"}}/></div>
                  </div>
                  <div style={{display:"flex",gap:".5rem",flexWrap:"wrap"}}>
                    <button onClick={()=>nav("detail",c.id)} style={{padding:".4rem 1rem",borderRadius:50,fontSize:".78rem",fontWeight:700,border:"none",background:"#7BAE8E",color:"#fff",cursor:"pointer",fontFamily:"'Mulish',sans-serif"}}>Continue Learning</button>
                    <button onClick={()=>{onUnenroll(c.id);setToast("Unenrolled from "+c.title);setTimeout(()=>setToast(""),2500)}} style={{padding:".4rem 1rem",borderRadius:50,fontSize:".78rem",fontWeight:600,border:"2px solid rgba(0,0,0,.08)",background:"#fff",color:"#6B7C8F",cursor:"pointer",fontFamily:"'Mulish',sans-serif"}}>Unenroll</button>
                  </div>
                </div>
              </div>
            )}
          </div>}

          {/* SETTINGS TAB */}
          {tab==="settings"&&<div style={{display:"flex",flexDirection:"column",gap:"1rem"}}>
            <div style={{background:"#fff",borderRadius:18,padding:m?"1.3rem":"1.8rem",border:"1px solid rgba(0,0,0,.04)"}}>
              <h2 style={{fontFamily:"'DM Serif Display',serif",fontSize:"1.2rem",color:"#1E2A3A",marginBottom:"1rem"}}>Notifications</h2>
              {[["Email notifications","Get course updates via email",true],["SMS alerts","Receive batch reminders via SMS",false],["Promotional emails","Offers and new course launches",true]].map(([t2,d,def],i)=>
                <ToggleRow key={i} label={t2} desc={d} defaultOn={def}/>
              )}
            </div>
            <div style={{background:"#fff",borderRadius:18,padding:m?"1.3rem":"1.8rem",border:"1px solid rgba(0,0,0,.04)"}}>
              <h2 style={{fontFamily:"'DM Serif Display',serif",fontSize:"1.2rem",color:"#1E2A3A",marginBottom:"1rem"}}>Account</h2>
              <div style={{display:"flex",gap:".6rem",flexWrap:"wrap"}}>
                <button style={{padding:".6rem 1.3rem",borderRadius:50,fontSize:".85rem",fontWeight:700,border:"2px solid rgba(0,0,0,.08)",background:"#fff",color:"#1E2A3A",cursor:"pointer",fontFamily:"'Mulish',sans-serif"}}>Change Password</button>
                <button onClick={onLogout} style={{padding:".6rem 1.3rem",borderRadius:50,fontSize:".85rem",fontWeight:700,border:"2px solid rgba(232,92,92,.15)",background:"transparent",color:"#E85C5C",cursor:"pointer",fontFamily:"'Mulish',sans-serif"}}>Delete Account</button>
              </div>
            </div>
          </div>}
        </div>
      </div>
    </section>
  </>
}

function ToggleRow({label,desc,defaultOn}){
  const[on,setOn]=useState(defaultOn);
  return<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:".8rem 0",borderBottom:"1px solid rgba(0,0,0,.04)"}}>
    <div><strong style={{display:"block",fontSize:".9rem",color:"#1E2A3A"}}>{label}</strong><span style={{fontSize:".78rem",color:"#6B7C8F"}}>{desc}</span></div>
    <div onClick={()=>setOn(!on)} style={{width:48,height:26,borderRadius:13,background:on?"#7BAE8E":"rgba(0,0,0,.12)",cursor:"pointer",position:"relative",transition:"background .3s",flexShrink:0}}>
      <div style={{width:22,height:22,borderRadius:"50%",background:"#fff",position:"absolute",top:2,left:on?24:2,transition:"left .3s",boxShadow:"0 2px 6px rgba(0,0,0,.12)"}}/>
    </div>
  </div>
}

/* ═══════ HOME (compact) ═══════ */
function Home({nav,w,user}){const m=w<640;const t=w<1024;return<>
  <section style={{minHeight:"100vh",display:"flex",alignItems:"center",padding:m?"5.5rem 5% 2rem":t?"6rem 5% 2.5rem":"6rem 6% 3rem",background:"#FFF8F0",position:"relative",overflow:"hidden"}}>
    <div style={{position:"absolute",top:-140,right:-140,width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(123,174,142,.08),transparent 70%)"}}/>
    <div style={{maxWidth:1260,margin:"0 auto",width:"100%",display:"grid",gridTemplateColumns:t?"1fr":"1fr 1fr",gap:t?"2rem":"3rem",alignItems:"center",position:"relative",zIndex:2}}>
      <div style={{textAlign:t?"center":"left"}}>
        <div style={{display:"inline-flex",alignItems:"center",gap:".4rem",background:"#E8F3EC",color:"#5A8A6C",padding:".32rem .8rem",borderRadius:50,fontSize:m?".66rem":".72rem",fontWeight:700,marginBottom:"1rem",animation:"fadeUp .7s ease-out"}}><span style={{width:6,height:6,background:"#7BAE8E",borderRadius:"50%",animation:"pulse 2s infinite"}}/>Now Enrolling — New Batch</div>
        <h1 style={{fontFamily:"'DM Serif Display',serif",fontSize:m?"1.7rem":t?"2.2rem":"clamp(2.2rem,4vw,3.3rem)",lineHeight:1.14,color:"#1E2A3A",marginBottom:"1rem",animation:"fadeUp .7s ease-out .1s both"}}>Master Software<br/>Development,<br/><em style={{fontStyle:"italic",color:"#7BAE8E"}}>Your Way</em></h1>
        <p style={{fontSize:m?".85rem":".95rem",lineHeight:1.75,color:"#6B7C8F",maxWidth:t?"100%":"430px",margin:t?"0 auto 1.3rem":"0 0 1.3rem",animation:"fadeUp .7s ease-out .2s both"}}>From Python to React, Java to Flutter — learn industry-ready skills through live and self-paced courses.</p>
        <div style={{display:"flex",gap:".6rem",flexWrap:"wrap",justifyContent:t?"center":"flex-start",animation:"fadeUp .7s ease-out .3s both"}}>
          <button onClick={()=>nav("courses")} style={{background:"#7BAE8E",color:"#fff",padding:m?".7rem 1.3rem":".75rem 1.5rem",borderRadius:50,fontSize:m?".82rem":".86rem",fontWeight:700,border:"none",cursor:"pointer"}}>Browse Courses →</button>
          {!user&&<button onClick={()=>nav("login")} style={{background:"transparent",color:"#1E2A3A",padding:m?".7rem 1.3rem":".75rem 1.5rem",borderRadius:50,fontSize:m?".82rem":".86rem",fontWeight:600,border:"2px solid rgba(30,42,58,.1)",cursor:"pointer"}}>Sign Up Free</button>}
        </div>
      </div>
      <div style={{position:"relative",maxWidth:t?380:"none",margin:t?"0 auto":"0",animation:"fadeUp .8s ease-out .2s both"}}>
        <div style={{background:"#1a1e2e",borderRadius:12,overflow:"hidden",boxShadow:"0 22px 50px rgba(30,42,58,.13)"}}>
          <div style={{display:"flex",alignItems:"center",gap:".35rem",padding:".55rem .85rem",background:"#151826"}}>{["#ff5f57","#febc2e","#28c840"].map(c=><span key={c} style={{width:8,height:8,borderRadius:"50%",background:c}}/>)}<span style={{marginLeft:"auto",color:"rgba(255,255,255,.22)",fontSize:".62rem"}}>your_future.py</span></div>
          <div style={{padding:m?".8rem":"1rem",fontFamily:"'Courier New',monospace",fontSize:m?".62rem":".68rem",lineHeight:1.95}}>
            {["# Welcome to TailorTech","from tailortech import Career","","student = Career()","student.learn([",`  "Python", "React",`,`  "Java", "Flutter"`,"])","","student.build_projects()","student.get_hired() # ✨"].map((l,i)=>
              <div key={i} style={{opacity:0,animation:`fadeUp .25s ease-out ${.15+i*.08}s forwards`}}><span style={{color:"rgba(255,255,255,.1)",userSelect:"none",display:"inline-block",width:20,fontSize:".58rem"}}>{i+1}</span><span style={{color:l.startsWith("#")?"rgba(255,255,255,.18)":l.includes("from")||l.includes("import")?"#c792ea":l.includes('"')?"#c3e88d":"#89ddff"}}>{l}</span></div>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
  <div style={{background:"#1E2A3A",padding:m?"1.5rem 5%":"2rem 6%",display:"grid",gridTemplateColumns:m?"repeat(2,1fr)":"repeat(4,1fr)",gap:m?"1rem":"1.5rem",textAlign:"center"}}>{[["2000+","Students"],["15+","Courses"],["95%","Satisfaction"],["500+","Placed"]].map(([n,l])=><div key={l}><span style={{fontFamily:"'DM Serif Display',serif",fontSize:m?"1.4rem":"1.9rem",color:"#7BAE8E",display:"block"}}>{n}</span><span style={{fontSize:m?".68rem":".75rem",color:"rgba(255,255,255,.4)"}}>{l}</span></div>)}</div>

  <section id="about" style={{padding:m?"2.5rem 5%":"4rem 6%",background:"#FFFDFB"}}><div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:t?"1fr":"1fr 1fr",gap:t?"2rem":"3.5rem",alignItems:"center"}}>
    <Reveal><div style={{position:"relative"}}><div style={{width:"100%",borderRadius:18,background:"linear-gradient(135deg,#E8F3EC,#D4EEF8)",padding:m?"1.5rem":"2rem",minHeight:m?220:320,display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{textAlign:"center"}}><div style={{fontSize:m?"2.8rem":"3.5rem",marginBottom:".4rem"}}>💻🚀</div><div style={{fontFamily:"'DM Serif Display',serif",fontSize:m?"1rem":"1.25rem",color:"#1E2A3A"}}>Code Your Future</div></div></div>
      {!m&&<div style={{position:"absolute",bottom:-14,right:-14,width:105,height:105,borderRadius:12,background:"#E8845C",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",textAlign:"center"}}><div><div style={{fontFamily:"'DM Serif Display',serif",fontSize:"1.6rem"}}>4+</div><div style={{fontSize:".65rem",fontWeight:700}}>Years</div></div></div>}</div></Reveal>
    <Reveal delay={.08}><div>
      <div style={{display:"inline-flex",alignItems:"center",gap:".4rem",fontSize:".7rem",fontWeight:800,textTransform:"uppercase",letterSpacing:2,color:"#5A8A6C",marginBottom:".4rem"}}><span style={{width:16,height:2,background:"#7BAE8E",display:"inline-block"}}/>About Us</div>
      <h2 style={{fontFamily:"'DM Serif Display',serif",fontSize:m?"1.2rem":"clamp(1.5rem,2.5vw,2.1rem)",color:"#1E2A3A",lineHeight:1.2,marginBottom:".4rem"}}>Software Training, Tailored to You</h2>
      <p style={{fontSize:m?".82rem":".9rem",color:"#6B7C8F",lineHeight:1.7,marginBottom:"1.2rem"}}>Industry-aligned courses for students, freshers, and professionals.</p>
      {[["🎓","Live + Self-Paced","#E8F3EC"],["🛠️","Hands-On Projects","#FFF0EA"],["👥","For Everyone","#D4EEF8"],["🚀","Career Support","#E8E0F0"]].map(([ic,t2,bg])=>
        <div key={t2} style={{display:"flex",gap:".6rem",padding:".65rem",background:"#FFF8F0",borderRadius:11,marginBottom:".4rem"}}>
          <div style={{width:34,height:34,minWidth:34,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:".95rem",background:bg}}>{ic}</div>
          <span style={{fontSize:m?".8rem":".84rem",color:"#1E2A3A",fontWeight:600,display:"flex",alignItems:"center"}}>{t2}</span>
        </div>
      )}
    </div></Reveal>
  </div></section>

  <section style={{padding:m?"2.5rem 5%":"4rem 6%",background:"#FFF8F0"}}>
    <SH w={w} label="Popular Courses" title="Start Learning What Matters"/>
    <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:m?"1fr":t?"repeat(2,1fr)":"repeat(3,1fr)",gap:"1.3rem"}}>{COURSES.slice(0,3).map((c,i)=><CC key={c.id} c={c} nav={nav} delay={i*.05}/>)}</div>
    <Reveal><div style={{textAlign:"center",marginTop:"1.8rem"}}><button onClick={()=>nav("courses")} style={{background:"#7BAE8E",color:"#fff",padding:".75rem 1.5rem",borderRadius:50,fontSize:".86rem",fontWeight:700,border:"none",cursor:"pointer"}}>View All Courses →</button></div></Reveal>
  </section>

  <section style={{padding:m?"2.5rem 5%":"4rem 6%",background:"#FFFDFB"}}>
    <SH w={w} label="Why TailorTech" title="Built Different. Built Better."/>
    <div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:m?"1fr":t?"repeat(2,1fr)":"repeat(4,1fr)",gap:"1.1rem"}}>
      {[["👨‍🏫","Expert Instructors","#E8F3EC"],["🛠️","Project-Based","#FFF0EA"],["🔁","Flexible Learning","#D4EEF8"],["🏆","Certified","#FFF3DB"]].map(([ic,t2,bg],i)=>
        <Reveal key={i} delay={i*.05}><div style={{background:"#fff",borderRadius:14,padding:m?"1.2rem":"1.4rem",border:"1px solid rgba(0,0,0,.03)",textAlign:"center",height:"100%"}}>
          <div style={{width:48,height:48,borderRadius:12,background:bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.3rem",margin:"0 auto .8rem"}}>{ic}</div>
          <h3 style={{fontFamily:"'DM Serif Display',serif",fontSize:".95rem",color:"#1E2A3A"}}>{t2}</h3>
        </div></Reveal>
      )}
    </div>
  </section>

  <section id="team" style={{padding:m?"2.5rem 5%":"4rem 6%",background:"#1E2A3A"}}>
    <SH w={w} light label="Our Team" title="Meet Your Mentors"/>
    <div style={{maxWidth:1000,margin:"0 auto",display:"grid",gridTemplateColumns:m?"1fr":t?"repeat(2,1fr)":"repeat(4,1fr)",gap:"1.1rem"}}>
      {TEAM.map((tm,i)=><Reveal key={i} delay={i*.05}><div style={{textAlign:"center",padding:"1.2rem .9rem",background:"rgba(255,255,255,.04)",borderRadius:16,border:"1px solid rgba(255,255,255,.04)"}}>
        <div style={{width:65,height:65,borderRadius:"50%",margin:"0 auto .7rem",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.6rem",background:`rgba(123,174,142,${.08+i*.05})`}}>{tm.emoji}</div>
        <h3 style={{fontFamily:"'DM Serif Display',serif",fontSize:".92rem",color:"#fff"}}>{tm.title}</h3>
        <div style={{fontSize:".65rem",color:"#7BAE8E",fontWeight:700,textTransform:"uppercase",letterSpacing:1,margin:".1rem 0 .35rem"}}>{tm.role}</div>
        <p style={{fontSize:".75rem",color:"rgba(255,255,255,.35)",lineHeight:1.5}}>{tm.bio}</p>
      </div></Reveal>)}
    </div>
  </section>

  <section id="reviews" style={{padding:m?"2.5rem 5%":"4rem 6%",background:"#FFF8F0"}}>
    <SH w={w} label="Reviews" title="What Students Say"/>
    <div style={{maxWidth:1100,margin:"0 auto",display:"grid",gridTemplateColumns:m?"1fr":t?"1fr":"repeat(3,1fr)",gap:"1.1rem"}}>
      {REVIEWS.map((r,i)=><Reveal key={i} delay={i*.05}><div style={{background:"#fff",borderRadius:14,padding:m?"1.2rem":"1.5rem",border:"1px solid rgba(0,0,0,.03)",height:"100%"}}>
        <div style={{color:"#D4A853",fontSize:".75rem",marginBottom:".4rem",letterSpacing:2}}>★★★★★</div>
        <p style={{fontSize:".85rem",color:"#2C3E50",lineHeight:1.7,marginBottom:".8rem",fontStyle:"italic"}}>"{r.text}"</p>
        <div style={{display:"flex",alignItems:"center",gap:".45rem"}}><div style={{width:34,height:34,borderRadius:"50%",background:["#E8F3EC","#FFF0EA","#D4EEF8"][i],display:"flex",alignItems:"center",justifyContent:"center",fontSize:".85rem"}}>{r.avatar}</div><div><strong style={{display:"block",color:"#1E2A3A",fontSize:".8rem"}}>{r.name}</strong><span style={{fontSize:".7rem",color:"#6B7C8F"}}>{r.role}</span></div></div>
      </div></Reveal>)}
    </div>
  </section>
  <CTA nav={nav} w={w}/>
</>}

/* ═══════ COURSES ═══════ */
function Courses({nav,w}){const m=w<640;const t=w<1024;const[f,sF]=useState("all");const fl=f==="all"?COURSES:COURSES.filter(c=>c.cat===f);
  return<><section style={{padding:m?"5rem 5% 1.5rem":"6.5rem 6% 2rem",background:"#FFF8F0",textAlign:"center"}}><div style={{maxWidth:620,margin:"0 auto"}}><div style={{marginBottom:".8rem",fontSize:".75rem"}}><a onClick={()=>nav("home")} style={{color:"#6B7C8F",cursor:"pointer"}}>Home</a><span style={{color:"#6B7C8F",margin:"0 .3rem"}}>›</span><span style={{color:"#1E2A3A",fontWeight:700}}>All Courses</span></div><h1 style={{fontFamily:"'DM Serif Display',serif",fontSize:m?"1.5rem":"clamp(1.7rem,2.8vw,2.5rem)",color:"#1E2A3A",marginBottom:".4rem"}}>All <em style={{fontStyle:"italic",color:"#7BAE8E"}}>Courses</em></h1><p style={{fontSize:m?".82rem":".95rem",color:"#6B7C8F"}}>Explore our complete software development catalog.</p></div></section>
    <div style={{padding:m?".8rem 5%":"1rem 6%",background:"#FFFDFB",borderBottom:"1px solid rgba(0,0,0,.04)",position:"sticky",top:m?44:52,zIndex:100,backdropFilter:"blur(10px)"}}><div style={{maxWidth:1200,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",gap:".5rem",flexWrap:"wrap"}}><div style={{display:"flex",gap:m?".2rem":".35rem",flexWrap:"wrap"}}>{FILTERS.map(fi=><button key={fi.key} onClick={()=>sF(fi.key)} style={{padding:m?".3rem .55rem":".4rem .9rem",borderRadius:50,fontSize:m?".65rem":".74rem",fontWeight:700,border:f===fi.key?"2px solid #7BAE8E":"2px solid rgba(0,0,0,.05)",background:f===fi.key?"#7BAE8E":"#fff",color:f===fi.key?"#fff":"#6B7C8F",cursor:"pointer",fontFamily:"'Mulish',sans-serif"}}>{fi.label}</button>)}</div><span style={{fontSize:".8rem",color:"#6B7C8F"}}><strong style={{color:"#1E2A3A"}}>{fl.length}</strong> courses</span></div></div>
    <section style={{padding:m?"1.5rem 5% 2.5rem":"2rem 6% 3.5rem"}}><div style={{maxWidth:1200,margin:"0 auto",display:"grid",gridTemplateColumns:m?"1fr":t?"repeat(2,1fr)":"repeat(3,1fr)",gap:"1.3rem"}}>{fl.map((c,i)=><CC key={c.id} c={c} nav={nav} delay={i*.03}/>)}</div></section>
    <CTA nav={nav} w={w}/>
  </>
}

/* ═══════ DETAIL ═══════ */
function Detail({nav,cid,w,user,onEnroll}){const c=COURSES.find(x=>x.id===cid)||COURSES[0];const m=w<640;const t=w<1024;
  const[tab,sTab]=useState("curriculum");const[oM,sOM]=useState([0]);const[oF,sOF]=useState([]);const[toast,setToast]=useState("");
  const tM=i=>sOM(p=>p.includes(i)?p.filter(x=>x!==i):[...p,i]);const tF=i=>sOF(p=>p.includes(i)?p.filter(x=>x!==i):[...p,i]);
  const disc=Math.round((1-parseInt(c.price.replace(",",""))/parseInt(c.original.replace(",","")))*100);
  const isEnrolled=user&&(user.enrolled||[]).includes(c.id);
  useEffect(()=>{sTab("curriculum");sOM([0]);sOF([])},[cid]);
  const handleEnroll=()=>{if(!user){nav("login");return}if(isEnrolled){nav("profile");return}onEnroll(c.id);setToast("Enrolled in "+c.title+"!");setTimeout(()=>setToast(""),2500)};

  return<><Toast msg={toast}/>
    <section style={{padding:m?"5rem 5% 1.5rem":"6rem 6% 2rem",background:"#FFF8F0",position:"relative",overflow:"hidden"}}><div style={{maxWidth:1200,margin:"0 auto"}}>
      <div style={{marginBottom:"1rem",fontSize:".75rem",display:"flex",gap:".3rem",flexWrap:"wrap"}}><a onClick={()=>nav("home")} style={{color:"#6B7C8F",cursor:"pointer"}}>Home</a><span style={{color:"#6B7C8F"}}>›</span><a onClick={()=>nav("courses")} style={{color:"#6B7C8F",cursor:"pointer"}}>Courses</a><span style={{color:"#6B7C8F"}}>›</span><span style={{color:"#1E2A3A",fontWeight:700}}>{c.title}</span></div>
      <div style={{display:"grid",gridTemplateColumns:t?"1fr":"1fr 320px",gap:t?"1.5rem":"2rem",alignItems:"start"}}>
        <div>
          <div style={{display:"flex",gap:".3rem",flexWrap:"wrap",marginBottom:".6rem"}}><span style={{padding:".2rem .55rem",borderRadius:50,fontSize:".63rem",fontWeight:700,textTransform:"uppercase",letterSpacing:.7,background:"rgba(212,168,83,.15)",color:"#b8860b"}}>⭐ {c.badge}</span>{c.tags.map(tg=><span key={tg} style={{padding:".2rem .55rem",borderRadius:50,fontSize:".63rem",fontWeight:700,textTransform:"uppercase",letterSpacing:.7,background:tg==="Live"?"#E8F3EC":"#D4EEF8",color:tg==="Live"?"#5A8A6C":"#6BB3D4"}}>{tg==="Live"?"🔴 Live":"📹 Self-Paced"}</span>)}</div>
          <h1 style={{fontFamily:"'DM Serif Display',serif",fontSize:m?"1.3rem":t?"1.6rem":"clamp(1.5rem,2.5vw,2.2rem)",color:"#1E2A3A",lineHeight:1.2,marginBottom:".6rem"}}>{c.title}</h1>
          <p style={{fontSize:m?".82rem":".9rem",color:"#6B7C8F",lineHeight:1.7,marginBottom:".9rem"}}>{c.desc}</p>
          <div style={{display:"flex",gap:m?".6rem":"1rem",flexWrap:"wrap",marginBottom:".8rem"}}>{[["🕐",c.duration],["📚",c.lessons],["👥","850+"],["🎓","Cert"]].map(([ic,l])=><span key={l} style={{display:"flex",alignItems:"center",gap:".2rem",fontSize:m?".74rem":".82rem",color:"#2C3E50"}}>{ic} {l}</span>)}</div>
          <div style={{display:"flex",alignItems:"center",gap:".3rem"}}><span style={{color:"#D4A853",fontSize:".82rem",letterSpacing:1}}>★★★★★</span><span style={{fontSize:".78rem",color:"#6B7C8F"}}>{c.rating}/5</span></div>
        </div>
        {/* ENROLL CARD */}
        <div style={{background:"#fff",borderRadius:15,overflow:"hidden",boxShadow:"0 7px 25px rgba(0,0,0,.05)",border:"1px solid rgba(0,0,0,.04)",position:t?"static":"sticky",top:70,order:t?-1:0}}>
          <div style={{height:m?100:125,background:c.banner,display:"flex",alignItems:"center",justifyContent:"center"}}><span style={{fontSize:m?"2.5rem":"3rem",filter:"drop-shadow(0 2px 6px rgba(0,0,0,.15))"}}>{c.emoji}</span></div>
          <div style={{padding:m?"1.1rem":"1.3rem"}}>
            <div style={{display:"flex",alignItems:"baseline",gap:".35rem",flexWrap:"wrap",marginBottom:".1rem"}}><span style={{fontFamily:"'DM Serif Display',serif",fontSize:m?"1.5rem":"1.7rem",color:"#1E2A3A"}}>₹{c.price}</span><span style={{fontSize:".82rem",color:"#6B7C8F",textDecoration:"line-through"}}>₹{c.original}</span><span style={{fontSize:".65rem",fontWeight:700,color:"#fff",background:"#E8845C",padding:".12rem .4rem",borderRadius:50}}>{disc}% OFF</span></div>
            <div style={{fontSize:".72rem",color:"#6B7C8F",marginBottom:"1rem"}}>EMI from ₹1,500/mo</div>
            <button onClick={handleEnroll} style={{width:"100%",padding:".8rem",borderRadius:50,fontSize:".9rem",fontWeight:700,border:"none",background:isEnrolled?"#1E2A3A":"#7BAE8E",color:"#fff",cursor:"pointer",fontFamily:"'Mulish',sans-serif",marginBottom:".4rem"}}>{isEnrolled?"Go to Dashboard →":"Enroll Now →"}</button>
            <button style={{width:"100%",padding:".8rem",borderRadius:50,fontSize:".9rem",fontWeight:700,border:"2px solid rgba(0,0,0,.06)",background:"transparent",color:"#1E2A3A",cursor:"pointer",fontFamily:"'Mulish',sans-serif"}}>Download Syllabus</button>
            <div style={{marginTop:"1rem",paddingTop:"1rem",borderTop:"1px solid rgba(0,0,0,.04)"}}>{["Lifetime access","8+ projects","Certificate","Discord support","Interview prep","Placement help"].map(f=><div key={f} style={{display:"flex",alignItems:"center",gap:".4rem",fontSize:".78rem",color:"#2C3E50",marginBottom:".4rem"}}><span style={{color:"#7BAE8E",fontWeight:700}}>✓</span>{f}</div>)}</div>
          </div>
        </div>
      </div>
    </div></section>

    <div style={{padding:m?"1.5rem 5%":"2rem 6%",maxWidth:1200,margin:"0 auto"}}><div style={{display:"grid",gridTemplateColumns:t?"1fr":"1fr 320px",gap:"2rem"}}><div>
      <div style={{display:"flex",gap:".12rem",borderBottom:"2px solid rgba(0,0,0,.04)",marginBottom:"1.3rem",overflowX:"auto"}}>{[["curriculum","Curriculum"],["schedule","Schedule"],["instructor","Instructor"],["faq","FAQ"]].map(([k,l])=><button key={k} onClick={()=>sTab(k)} style={{padding:m?".5rem .75rem":".6rem 1rem",fontSize:m?".76rem":".82rem",fontWeight:700,color:tab===k?"#5A8A6C":"#6B7C8F",background:"none",border:"none",borderBottom:tab===k?"2.5px solid #7BAE8E":"2.5px solid transparent",marginBottom:-2,whiteSpace:"nowrap",cursor:"pointer",fontFamily:"'Mulish',sans-serif"}}>{l}</button>)}</div>

      {tab==="curriculum"&&CURRICULUM.map((mod,mi)=><div key={mi} style={{marginBottom:".6rem"}}><div onClick={()=>tM(mi)} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:m?".6rem .75rem":".75rem 1rem",background:oM.includes(mi)?"#E8F3EC":"#fff",borderRadius:oM.includes(mi)?"10px 10px 0 0":"10px",border:`1px solid ${oM.includes(mi)?"#7BAE8E":"rgba(0,0,0,.04)"}`,cursor:"pointer"}}><div style={{display:"flex",alignItems:"center",gap:".5rem"}}><span style={{width:28,height:28,borderRadius:7,background:oM.includes(mi)?"#7BAE8E":"#E8F3EC",color:oM.includes(mi)?"#fff":"#5A8A6C",display:"flex",alignItems:"center",justifyContent:"center",fontSize:".65rem",fontWeight:800}}>{mod.num}</span><div><div style={{fontSize:m?".78rem":".84rem",fontWeight:700,color:"#1E2A3A"}}>{mod.title}</div><div style={{fontSize:".65rem",color:"#6B7C8F"}}>{mod.meta}</div></div></div><span style={{fontSize:".7rem",color:"#6B7C8F",transform:oM.includes(mi)?"rotate(180deg)":"none",transition:"transform .2s"}}>▼</span></div>
        {oM.includes(mi)&&<div style={{background:"#fff",border:"1px solid #7BAE8E",borderTop:"none",borderRadius:"0 0 10px 10px",padding:m?".6rem .75rem":".75rem 1rem"}}>{mod.lessons.map((ls,li)=>{const[nm,dur]=ls.split("|");return<div key={li} style={{display:"flex",alignItems:"center",gap:".4rem",padding:".35rem 0",borderBottom:li<mod.lessons.length-1?"1px solid rgba(0,0,0,.03)":"none",fontSize:m?".74rem":".8rem",color:"#2C3E50"}}><span style={{color:"#7BAE8E",fontSize:".72rem"}}>{nm.includes("🛠")?"🛠":"▶"}</span><span style={{flex:1}}>{nm.replace("🛠 ","")}</span><span style={{fontSize:".65rem",color:"#6B7C8F"}}>{dur}</span></div>})}</div>}</div>)}

      {tab==="schedule"&&<><h3 style={{fontFamily:"'DM Serif Display',serif",fontSize:m?"1rem":"1.2rem",color:"#1E2A3A",marginBottom:".8rem"}}>Upcoming Batches</h3><div style={{display:"grid",gridTemplateColumns:m?"1fr":"repeat(2,1fr)",gap:".8rem"}}>{BATCHES.map((b,i)=><div key={i} style={{background:"#fff",borderRadius:12,padding:m?".9rem":"1rem",border:"1px solid rgba(0,0,0,.03)",position:"relative",overflow:"hidden"}}><div style={{position:"absolute",top:0,left:0,width:3,height:"100%",background:b.color}}/><div style={{fontSize:".62rem",fontWeight:800,textTransform:"uppercase",letterSpacing:1,color:b.color,marginBottom:".3rem"}}>{b.label}</div><div style={{fontFamily:"'DM Serif Display',serif",fontSize:".95rem",color:"#1E2A3A",marginBottom:".4rem"}}>{b.name}</div>{[b.start,b.time,b.mode].map(tx=><div key={tx} style={{fontSize:".74rem",color:"#6B7C8F",marginBottom:".2rem"}}>{tx}</div>)}<span style={{display:"inline-block",fontSize:".65rem",fontWeight:700,padding:".18rem .5rem",borderRadius:50,marginTop:".3rem",background:b.status==="few"?"#FFF0EA":"#E8F3EC",color:b.status==="few"?"#E8845C":"#5A8A6C"}}>{b.seats?`${b.seats} left`:"Open"}</span></div>)}</div></>}

      {tab==="instructor"&&<div style={{background:"#fff",borderRadius:14,padding:m?"1.2rem":"1.4rem",border:"1px solid rgba(0,0,0,.03)",display:"flex",flexDirection:m?"column":"row",gap:"1rem",alignItems:m?"center":"center",textAlign:m?"center":"left"}}><div style={{width:65,height:65,borderRadius:"50%",background:"#E8F3EC",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"1.8rem",flexShrink:0}}>👨‍💻</div><div><h3 style={{fontFamily:"'DM Serif Display',serif",fontSize:"1rem",color:"#1E2A3A"}}>Lead Instructor</h3><div style={{fontSize:".7rem",color:"#5A8A6C",fontWeight:700,textTransform:"uppercase",letterSpacing:1,marginBottom:".3rem"}}>Full Stack Developer</div><p style={{fontSize:".8rem",color:"#6B7C8F",lineHeight:1.6}}>10+ years building production apps. Passionate educator.</p></div></div>}

      {tab==="faq"&&FAQS.map(([q,a],i)=><div key={i} style={{marginBottom:".45rem"}}><div onClick={()=>tF(i)} style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:m?".6rem .75rem":".75rem 1rem",background:oF.includes(i)?"#E8F3EC":"#fff",borderRadius:oF.includes(i)?"10px 10px 0 0":"10px",border:`1px solid ${oF.includes(i)?"#7BAE8E":"rgba(0,0,0,.04)"}`,cursor:"pointer",fontSize:m?".78rem":".84rem",fontWeight:700,color:"#1E2A3A",gap:".5rem"}}><span style={{flex:1}}>{q}</span><span style={{fontSize:".65rem",color:"#6B7C8F",transform:oF.includes(i)?"rotate(180deg)":"none",transition:"transform .2s",flexShrink:0}}>▼</span></div>
        {oF.includes(i)&&<div style={{background:"#fff",border:"1px solid #7BAE8E",borderTop:"none",borderRadius:"0 0 10px 10px",padding:m?".6rem .75rem":".75rem 1rem",fontSize:m?".76rem":".8rem",color:"#6B7C8F",lineHeight:1.7}}>{a}</div>}</div>)}
    </div><div/></div></div>
    <CTA nav={nav} w={w}/>
  </>
}

/* ═══════ APP ═══════ */
export default function App(){
  const[pg,sPg]=useState("home");const[cid,sCid]=useState("fullstack-web");const w=useW();
  const[user,setUser]=useState(null);
  const nav=useCallback((t,id)=>{if(t==="detail"){sCid(id||"fullstack-web");sPg("detail")}else sPg(t);window.scrollTo({top:0,behavior:"smooth"})},[]);
  const handleLogin=u=>setUser(u);
  const handleLogout=()=>{setUser(null);sPg("home")};
  const handleEnroll=id=>{if(!user)return;setUser({...user,enrolled:[...(user.enrolled||[]),id]})};
  const handleUnenroll=id=>{if(!user)return;setUser({...user,enrolled:(user.enrolled||[]).filter(x=>x!==id)})};

  return<div style={{fontFamily:"'Mulish',sans-serif",color:"#2C3E50",background:"#FFFDFB",minHeight:"100vh"}}>
    <style>{CSS}</style>
    <Nav page={pg} nav={nav} w={w} user={user} onLogout={handleLogout}/>
    {pg==="home"&&<Home nav={nav} w={w} user={user}/>}
    {pg==="courses"&&<Courses nav={nav} w={w}/>}
    {pg==="detail"&&<Detail nav={nav} cid={cid} w={w} user={user} onEnroll={handleEnroll}/>}
    {pg==="login"&&<LoginPage nav={nav} w={w} onLogin={handleLogin}/>}
    {pg==="profile"&&user&&<ProfilePage nav={nav} w={w} user={user} setUser={setUser} onLogout={handleLogout} enrolled={user.enrolled||[]} onUnenroll={handleUnenroll}/>}
    <Foot nav={nav} w={w}/>
  </div>
}
