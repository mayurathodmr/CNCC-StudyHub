/* =========================================================
   CSD STUDYHUB — PREMIUM UPGRADE
   Existing syllabus/data is NOT modified.
========================================================= */

(() => {
  "use strict";

  const KEY = "csd-studyhub-profile-v2";
  const PROGRESS = "csd-studyhub-progress-v2";
  const THEME = "csd-studyhub-theme-v2";
  const FEEDBACK = "csd-studyhub-feedback-v2";

  const profile = JSON.parse(localStorage.getItem(KEY) || "{}");
  const progress = JSON.parse(localStorage.getItem(PROGRESS) || "{}");

  const defaultProfile = {
    name: profile.name || "Student",
    role: profile.role || "Student",
    semester: profile.semester || "Final Year",
    branch: profile.branch || "CSD",
    college: profile.college || "Maharashtra Institute of Technology",
    location: profile.location || "Chhatrapati Sambhajinagar, Maharashtra",
    teacher: profile.teacher || "Professor Kiran Chaudhari"
  };

  localStorage.setItem(KEY, JSON.stringify(defaultProfile));

  const css = `
  :root{
    --ph-bg:#071018;
    --ph-card:rgba(255,255,255,.075);
    --ph-card2:rgba(255,255,255,.11);
    --ph-text:#f7fbff;
    --ph-muted:#a8b5c5;
    --ph-accent:#62d9ff;
    --ph-accent2:#9b7cff;
    --ph-border:rgba(255,255,255,.12);
    --ph-shadow:0 20px 60px rgba(0,0,0,.35);
  }

  body.ph-light{
    --ph-bg:#f4f7fb;
    --ph-card:rgba(255,255,255,.88);
    --ph-card2:#fff;
    --ph-text:#152033;
    --ph-muted:#607087;
    --ph-border:rgba(20,40,70,.12);
    --ph-shadow:0 20px 50px rgba(35,60,90,.14);
  }

  #ph-shell{
    position:relative;
    z-index:9999;
    font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
    color:var(--ph-text);
    background:
      radial-gradient(circle at 10% 10%,rgba(98,217,255,.13),transparent 28%),
      radial-gradient(circle at 90% 20%,rgba(155,124,255,.13),transparent 28%),
      var(--ph-bg);
    min-height:100vh;
    overflow:hidden;
  }

  #ph-shell *{box-sizing:border-box}

  .ph-top{
    position:sticky;
    top:0;
    z-index:100;
    backdrop-filter:blur(22px);
    background:rgba(7,16,24,.72);
    border-bottom:1px solid var(--ph-border);
  }

  .ph-light .ph-top{
    background:rgba(255,255,255,.78);
  }

  .ph-nav{
    max-width:1450px;
    margin:auto;
    padding:13px 18px;
    display:flex;
    align-items:center;
    gap:14px;
  }

  .ph-logo{
    width:48px;height:48px;
    border-radius:15px;
    display:grid;
    place-items:center;
    font-size:24px;
    font-weight:900;
    background:linear-gradient(135deg,#62d9ff,#9b7cff);
    color:#061019;
    box-shadow:0 0 35px rgba(98,217,255,.3);
    animation:phFloat 3s ease-in-out infinite;
  }

  .ph-brand{flex:1}
  .ph-brand strong{display:block;font-size:16px}
  .ph-brand span{font-size:11px;color:var(--ph-muted)}

  .ph-btn{
    border:1px solid var(--ph-border);
    background:var(--ph-card);
    color:var(--ph-text);
    border-radius:12px;
    padding:10px 13px;
    cursor:pointer;
    transition:.25s;
  }

  .ph-btn:hover{
    transform:translateY(-2px);
    border-color:var(--ph-accent);
    box-shadow:0 10px 30px rgba(98,217,255,.12);
  }

  .ph-container{
    max-width:1450px;
    margin:auto;
    padding:25px 18px 70px;
  }

  .ph-hero{
    min-height:300px;
    border:1px solid var(--ph-border);
    border-radius:30px;
    padding:35px;
    position:relative;
    overflow:hidden;
    background:
      linear-gradient(120deg,rgba(98,217,255,.11),rgba(155,124,255,.10)),
      var(--ph-card);
    box-shadow:var(--ph-shadow);
  }

  .ph-hero:before{
    content:"";
    position:absolute;
    width:350px;height:350px;
    border-radius:50%;
    right:-100px;top:-140px;
    background:rgba(98,217,255,.15);
    filter:blur(10px);
    animation:phPulse 5s infinite;
  }

  .ph-kicker{
    color:var(--ph-accent);
    font-weight:800;
    letter-spacing:1.5px;
    font-size:12px;
    text-transform:uppercase;
  }

  .ph-hero h1{
    font-size:clamp(30px,5vw,62px);
    margin:10px 0;
    line-height:1;
  }

  .ph-hero p{
    color:var(--ph-muted);
    max-width:800px;
    line-height:1.7;
  }

  .ph-chips{
    display:flex;
    flex-wrap:wrap;
    gap:9px;
    margin-top:20px;
  }

  .ph-chip{
    padding:8px 12px;
    border-radius:999px;
    background:var(--ph-card2);
    border:1px solid var(--ph-border);
    font-size:12px;
  }

  .ph-grid{
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:15px;
    margin-top:18px;
  }

  .ph-card{
    border:1px solid var(--ph-border);
    background:var(--ph-card);
    border-radius:22px;
    padding:20px;
    box-shadow:var(--ph-shadow);
    transition:.3s;
  }

  .ph-card:hover{
    transform:translateY(-5px);
    border-color:rgba(98,217,255,.45);
  }

  .ph-card-icon{font-size:27px}
  .ph-card h3{margin:10px 0 5px}
  .ph-card p{color:var(--ph-muted);font-size:13px;line-height:1.6}

  .ph-section{
    margin-top:22px;
  }

  .ph-section-title{
    display:flex;
    justify-content:space-between;
    align-items:end;
    gap:12px;
    margin-bottom:12px;
  }

  .ph-section-title h2{margin:0}
  .ph-section-title span{color:var(--ph-muted);font-size:12px}

  .ph-search{
    display:flex;
    gap:10px;
    margin-top:20px;
  }

  .ph-search input{
    flex:1;
    border:1px solid var(--ph-border);
    background:var(--ph-card2);
    color:var(--ph-text);
    border-radius:15px;
    padding:15px;
    outline:none;
  }

  .ph-search input:focus{
    border-color:var(--ph-accent);
  }

  .ph-subjects{
    display:grid;
    grid-template-columns:repeat(3,1fr);
    gap:14px;
  }

  .ph-subject{
    cursor:pointer;
    position:relative;
    overflow:hidden;
  }

  .ph-subject b{
    display:block;
    font-size:16px;
  }

  .ph-subject small{color:var(--ph-muted)}

  .ph-progress{
    height:7px;
    border-radius:99px;
    background:rgba(127,140,160,.2);
    margin-top:14px;
    overflow:hidden;
  }

  .ph-progress i{
    display:block;
    height:100%;
    width:0;
    background:linear-gradient(90deg,#62d9ff,#9b7cff);
    border-radius:99px;
    transition:1s;
  }

  .ph-profile{
    display:grid;
    grid-template-columns:100px 1fr auto;
    gap:20px;
    align-items:center;
  }

  .ph-avatar{
    width:100px;height:100px;
    border-radius:30px;
    display:grid;
    place-items:center;
    font-size:45px;
    background:linear-gradient(135deg,#62d9ff,#9b7cff);
    animation:phFloat 4s ease-in-out infinite;
  }

  .ph-profile p{
    margin:4px 0;
    color:var(--ph-muted);
  }

  .ph-character{
    position:fixed;
    right:18px;
    bottom:18px;
    z-index:10001;
    width:74px;height:74px;
    border-radius:25px;
    display:grid;
    place-items:center;
    font-size:39px;
    background:linear-gradient(135deg,#62d9ff,#9b7cff);
    box-shadow:0 15px 50px rgba(0,0,0,.35);
    cursor:pointer;
    animation:phFloat 3s ease-in-out infinite;
  }

  .ph-character:after{
    content:"Need help?";
    position:absolute;
    right:82px;
    white-space:nowrap;
    padding:8px 12px;
    border-radius:10px;
    background:var(--ph-card2);
    border:1px solid var(--ph-border);
    color:var(--ph-text);
    font-size:11px;
    opacity:0;
    transition:.25s;
  }

  .ph-character:hover:after{opacity:1}

  .ph-modal{
    position:fixed;
    inset:0;
    z-index:10002;
    display:none;
    place-items:center;
    padding:18px;
    background:rgba(0,0,0,.65);
    backdrop-filter:blur(10px);
  }

  .ph-modal.show{display:grid}

  .ph-modal-box{
    width:min(600px,100%);
    max-height:90vh;
    overflow:auto;
    background:var(--ph-bg);
    border:1px solid var(--ph-border);
    border-radius:26px;
    padding:25px;
    box-shadow:0 30px 100px rgba(0,0,0,.5);
  }

  .ph-modal-box input,
  .ph-modal-box select,
  .ph-modal-box textarea{
    width:100%;
    margin:7px 0 13px;
    padding:13px;
    border-radius:12px;
    border:1px solid var(--ph-border);
    background:var(--ph-card2);
    color:var(--ph-text);
    outline:none;
  }

  .ph-stars{
    font-size:30px;
    letter-spacing:4px;
    cursor:pointer;
  }

  .ph-footer{
    text-align:center;
    margin-top:45px;
    padding:25px;
    color:var(--ph-muted);
    border-top:1px solid var(--ph-border);
  }

  .ph-footer a{
    color:var(--ph-accent);
    text-decoration:none;
    margin:0 7px;
  }

  .ph-hidden-source{
    display:none!important;
  }

  @keyframes phFloat{
    0%,100%{transform:translateY(0)}
    50%{transform:translateY(-7px)}
  }

  @keyframes phPulse{
    0%,100%{transform:scale(1);opacity:.5}
    50%{transform:scale(1.2);opacity:.8}
  }

  @media(max-width:900px){
    .ph-grid{grid-template-columns:repeat(2,1fr)}
    .ph-subjects{grid-template-columns:repeat(2,1fr)}
  }

  @media(max-width:600px){
    .ph-nav{padding:10px}
    .ph-container{padding:15px 10px 80px}
    .ph-hero{padding:24px;border-radius:22px}
    .ph-grid,.ph-subjects{grid-template-columns:1fr}
    .ph-profile{grid-template-columns:70px 1fr}
    .ph-profile .ph-btn{grid-column:1/-1}
    .ph-avatar{width:70px;height:70px;font-size:32px}
    .ph-search{flex-direction:column}
  }
  `;

  const style = document.createElement("style");
  style.id = "premium-studyhub-style";
  style.textContent = css;
  document.head.appendChild(style);

  const shell = document.createElement("div");
  shell.id = "ph-shell";

  shell.innerHTML = `
    <header class="ph-top">
      <nav class="ph-nav">
        <div class="ph-logo">C</div>
        <div class="ph-brand">
          <strong>CSD StudyHub</strong>
          <span>Final Year • Computer Science & Design</span>
        </div>
        <button class="ph-btn" id="phTheme">🌙</button>
        <button class="ph-btn" id="phProfile">👤</button>
      </nav>
    </header>

    <main class="ph-container">

      <section class="ph-hero">
        <div class="ph-kicker">MIT • CSD • FINAL YEAR STUDY PORTAL</div>
        <h1>Learn smarter.<br>Prepare better.</h1>
        <p>
          A student-friendly academic portal containing syllabus-wise notes,
          deep explanations, diagrams, important questions, MCQs, question-bank
          practice and learning resources — organised subject and unit wise.
        </p>

        <div class="ph-chips">
          <span class="ph-chip">🎓 CSD Final Year</span>
          <span class="ph-chip">🏫 MIT Chhatrapati Sambhajinagar</span>
          <span class="ph-chip">👨‍🏫 ${defaultProfile.teacher}</span>
          <span class="ph-chip">⚡ Interactive Learning</span>
        </div>

        <div class="ph-search">
          <input id="phSearch" placeholder="Search topic, unit, notes, question..." />
          <button class="ph-btn" id="phSearchBtn">🔎 Search</button>
        </div>
      </section>

      <section class="ph-grid">
        <div class="ph-card">
          <div class="ph-card-icon">📚</div>
          <h3>Deep Notes</h3>
          <p>Unit-wise theory and syllabus-aligned explanations.</p>
        </div>

        <div class="ph-card">
          <div class="ph-card-icon">📝</div>
          <h3>Question Bank</h3>
          <p>Practice short, medium and long-answer questions.</p>
        </div>

        <div class="ph-card">
          <div class="ph-card-icon">🧠</div>
          <h3>MCQ Practice</h3>
          <p>Quick revision with interactive objective questions.</p>
        </div>

        <div class="ph-card">
          <div class="ph-card-icon">📊</div>
          <h3>Progress</h3>
          <p>Your reading progress is stored locally on your device.</p>
        </div>
      </section>

      <section class="ph-section">
        <div class="ph-section-title">
          <div>
            <h2>📖 Your Subjects</h2>
            <span>Existing syllabus content remains unchanged</span>
          </div>
          <button class="ph-btn" id="phOtherSubject">＋ Other Subject</button>
        </div>

        <div class="ph-subjects" id="phSubjects"></div>
      </section>

      <section class="ph-section">
        <div class="ph-section-title">
          <div>
            <h2>👨‍🏫 Teacher & Student Space</h2>
            <span>Subject-wise academic workspace</span>
          </div>
        </div>

        <div class="ph-card ph-profile">
          <div class="ph-avatar">👨‍🎓</div>
          <div>
            <h3>${defaultProfile.name}</h3>
            <p>${defaultProfile.role} • ${defaultProfile.branch}</p>
            <p>🏫 ${defaultProfile.college}</p>
            <p>📍 ${defaultProfile.location}</p>
            <p>👨‍🏫 Subject Teacher: ${defaultProfile.teacher}</p>
          </div>
          <button class="ph-btn" id="phEditProfile">Edit Profile</button>
        </div>
      </section>

      <section class="ph-section">
        <div class="ph-section-title">
          <div>
            <h2>🔗 Learning Tools</h2>
            <span>Open external resources for the selected topic</span>
          </div>
        </div>

        <div class="ph-grid">
          <div class="ph-card" id="phGoogle">
            <div class="ph-card-icon">🖼️</div>
            <h3>Find Diagram</h3>
            <p>Search topic diagrams through Google Images.</p>
            <button class="ph-btn">Open Diagram Search</button>
          </div>

          <div class="ph-card" id="phYoutube">
            <div class="ph-card-icon">▶️</div>
            <h3>Video Learning</h3>
            <p>Find topic-specific YouTube explanations.</p>
            <button class="ph-btn">Open YouTube Search</button>
          </div>

          <div class="ph-card" id="phNotes">
            <div class="ph-card-icon">📘</div>
            <h3>Notes Mode</h3>
            <p>Jump back to your existing notes and theory interface.</p>
            <button class="ph-btn">Open Existing Notes</button>
          </div>

          <div class="ph-card" id="phQuestion">
            <div class="ph-card-icon">🎯</div>
            <h3>Exam Mode</h3>
            <p>Open your existing questions and practice system.</p>
            <button class="ph-btn">Start Practice</button>
          </div>
        </div>
      </section>

      <section class="ph-section">
        <div class="ph-card">
          <h2>⭐ Website Feedback</h2>
          <p>Help improve this student learning portal.</p>
          <button class="ph-btn" id="phFeedback">Give Rating & Feedback</button>
        </div>
      </section>

      <section class="ph-footer">
        <strong>CSD StudyHub</strong><br>
        Created & designed by <b>Mayur Rathod</b><br><br>
        <a href="mailto:mayuuuuuuur@gmail.com">📧 Email</a>
        <a href="https://github.com/mayurathodmr" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/" target="_blank">LinkedIn</a>
        <br><br>
        <small>
          Educational project • Syllabus-aligned learning interface •
          External links open third-party resources
        </small>
      </section>

    </main>

    <div class="ph-character" id="phCharacter">🤖</div>

    <div class="ph-modal" id="phModal">
      <div class="ph-modal-box" id="phModalContent"></div>
    </div>
  `;

  /*
     Put premium shell before existing app.
     Existing application remains available below.
  */
  document.body.insertBefore(shell, document.body.firstChild);

  function modal(html){
    const m=document.getElementById("phModal");
    document.getElementById("phModalContent").innerHTML=html;
    m.classList.add("show");
  }

  document.getElementById("phModal").addEventListener("click",e=>{
    if(e.target.id==="phModal") e.currentTarget.classList.remove("show");
  });

  const subjects = [
    {
      code:"CSD403",
      title:"Computer Network & Cloud Computing",
      icon:"🌐",
      units:6,
      progress:progress.CSD403 || 0
    },
    {
      code:"FUTURE",
      title:"Other Subject",
      icon:"➕",
      units:"Add",
      progress:0
    }
  ];

  const subjectBox=document.getElementById("phSubjects");

  subjects.forEach(s=>{
    const card=document.createElement("div");
    card.className="ph-card ph-subject";
    card.innerHTML=`
      <div class="ph-card-icon">${s.icon}</div>
      <b>${s.title}</b>
      <small>${s.code} • ${s.units} Units</small>
      <div class="ph-progress"><i style="width:${s.progress}%"></i></div>
      <small>${s.progress}% completed</small>
    `;

    card.onclick=()=>{
      if(s.code==="FUTURE"){
        modal(`
          <h2>＋ Add Other Subject</h2>
          <p>Add another subject without removing existing CNCC data.</p>
          <input id="newSubName" placeholder="Subject name">
          <input id="newSubCode" placeholder="Subject code">
          <button class="ph-btn" id="saveSub">Save Subject</button>
        `);

        document.getElementById("saveSub").onclick=()=>{
          const n=document.getElementById("newSubName").value.trim();
          const c=document.getElementById("newSubCode").value.trim();
          if(!n)return;
          const list=JSON.parse(localStorage.getItem("csd-other-subjects")||"[]");
          list.push({name:n,code:c});
          localStorage.setItem("csd-other-subjects",JSON.stringify(list));
          location.reload();
        };
      }else{
        progress.CSD403=Math.min(100,(progress.CSD403||0)+5);
        localStorage.setItem(PROGRESS,JSON.stringify(progress));

        const search=document.getElementById("phSearch");
        search.value="Computer Network and Cloud Computing";
        search.scrollIntoView({behavior:"smooth",block:"center"});
      }
    };

    subjectBox.appendChild(card);
  });

  const extras=JSON.parse(localStorage.getItem("csd-other-subjects")||"[]");

  extras.forEach(s=>{
    const card=document.createElement("div");
    card.className="ph-card ph-subject";
    card.innerHTML=`
      <div class="ph-card-icon">📘</div>
      <b>${s.name}</b>
      <small>${s.code||"Custom Subject"}</small>
      <p>Future syllabus workspace.</p>
    `;
    subjectBox.appendChild(card);
  });

  document.getElementById("phTheme").onclick=()=>{
    document.body.classList.toggle("ph-light");
    const light=document.body.classList.contains("ph-light");
    localStorage.setItem(THEME,light?"light":"dark");
    document.getElementById("phTheme").textContent=light?"🌙":"☀️";
  };

  if(localStorage.getItem(THEME)==="light"){
    document.body.classList.add("ph-light");
    document.getElementById("phTheme").textContent="🌙";
  }

  function editProfile(){
    modal(`
      <h2>👤 Edit Profile</h2>
      <label>Name</label>
      <input id="pName" value="${defaultProfile.name}">
      <label>Role</label>
      <select id="pRole">
        <option ${defaultProfile.role==="Student"?"selected":""}>Student</option>
        <option ${defaultProfile.role==="Teacher"?"selected":""}>Teacher</option>
      </select>
      <label>Branch</label>
      <input id="pBranch" value="${defaultProfile.branch}">
      <label>College</label>
      <input id="pCollege" value="${defaultProfile.college}">
      <label>Location</label>
      <input id="pLocation" value="${defaultProfile.location}">
      <label>Subject Teacher</label>
      <input id="pTeacher" value="${defaultProfile.teacher}">
      <button class="ph-btn" id="saveProfile">Save Profile</button>
    `);

    document.getElementById("saveProfile").onclick=()=>{
      const updated={
        name:document.getElementById("pName").value||"Student",
        role:document.getElementById("pRole").value,
        branch:document.getElementById("pBranch").value||"CSD",
        college:document.getElementById("pCollege").value||defaultProfile.college,
        location:document.getElementById("pLocation").value||defaultProfile.location,
        teacher:document.getElementById("pTeacher").value||defaultProfile.teacher
      };

      localStorage.setItem(KEY,JSON.stringify(updated));
      location.reload();
    };
  }

  document.getElementById("phProfile").onclick=editProfile;
  document.getElementById("phEditProfile").onclick=editProfile;

  function searchResource(type){
    const q=document.getElementById("phSearch").value.trim() || "Computer Network and Cloud Computing";

    if(type==="google"){
      window.open(
        "https://www.google.com/search?tbm=isch&q="+encodeURIComponent(q+" diagram"),
        "_blank"
      );
    }

    if(type==="youtube"){
      window.open(
        "https://www.youtube.com/results?search_query="+encodeURIComponent(q+" explanation"),
        "_blank"
      );
    }
  }

  document.getElementById("phGoogle").onclick=()=>searchResource("google");
  document.getElementById("phYoutube").onclick=()=>searchResource("youtube");

  document.getElementById("phNotes").onclick=()=>{
    window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"});
    alert("Existing StudyHub notes/data are kept unchanged. Use your original Notes/Unit controls below this premium dashboard.");
  };

  document.getElementById("phQuestion").onclick=()=>{
    window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"});
  };

  document.getElementById("phSearchBtn").onclick=()=>{
    const q=document.getElementById("phSearch").value.trim();
    if(!q)return;

    const lower=q.toLowerCase();

    if(lower.includes("diagram")){
      searchResource("google");
      return;
    }

    if(lower.includes("video") || lower.includes("youtube")){
      searchResource("youtube");
      return;
    }

    const allText=document.body.innerText.toLowerCase();
    if(allText.includes(lower)){
      const nodes=[...document.querySelectorAll("body *")];
      const target=nodes.find(x=>
        x.children.length===0 &&
        x.textContent.toLowerCase().includes(lower)
      );

      if(target){
        target.scrollIntoView({behavior:"smooth",block:"center"});
        target.style.outline="3px solid var(--ph-accent)";
        setTimeout(()=>target.style.outline="",1800);
        return;
      }
    }

    modal(`
      <h2>🔎 Search Resource</h2>
      <p>No local result found for <b>${q}</b>.</p>
      <button class="ph-btn" id="gSearch">🖼️ Google Diagram</button>
      <button class="ph-btn" id="ySearch">▶️ YouTube Explanation</button>
    `);

    document.getElementById("gSearch").onclick=()=>searchResource("google");
    document.getElementById("ySearch").onclick=()=>searchResource("youtube");
  };

  document.getElementById("phFeedback").onclick=()=>{
    const old=JSON.parse(localStorage.getItem(FEEDBACK)||"{}");

    modal(`
      <h2>⭐ Rate CSD StudyHub</h2>
      <p>How useful is this website?</p>
      <div class="ph-stars" id="stars">★★★★★</div>
      <textarea id="feedbackText" rows="5" placeholder="Write your feedback...">${old.text||""}</textarea>
      <button class="ph-btn" id="sendFeedback">Submit Feedback</button>
    `);

    let rating=5;

    document.getElementById("stars").onclick=()=>{
      rating=rating===5?4:rating===4?3:rating===3?2:rating===2?1:5;
      document.getElementById("stars").textContent="★".repeat(rating)+"☆".repeat(5-rating);
    };

    document.getElementById("sendFeedback").onclick=()=>{
      localStorage.setItem(FEEDBACK,JSON.stringify({
        rating,
        text:document.getElementById("feedbackText").value,
        date:new Date().toISOString()
      }));

      document.getElementById("phModalContent").innerHTML=`
        <h2>✅ Thank you!</h2>
        <p>Your feedback is saved on this device.</p>
        <button class="ph-btn" onclick="document.getElementById('phModal').classList.remove('show')">Close</button>
      `;
    };
  };

  document.getElementById("phCharacter").onclick=()=>{
    modal(`
      <h2>🤖 Study Assistant</h2>
      <p>
        Hi! मी तुझा StudyHub assistant आहे.
        Unit select कर, topic search कर आणि गरज असेल तर
        diagram किंवा YouTube explanation उघड.
      </p>
      <button class="ph-btn" onclick="document.getElementById('phModal').classList.remove('show')">
        Let's Study 🚀
      </button>
    `);
  };

})();
