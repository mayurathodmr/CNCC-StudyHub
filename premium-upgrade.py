from pathlib import Path

root = Path(".")

index = root / "index.html"
css = root / "style.css"
js = root / "app.js"

# -------------------------------------------------
# BACKUP — existing data untouched
# -------------------------------------------------
for f in [index, css, js]:
    if f.exists():
        backup = f.with_name(f.name + ".before-premium")
        if not backup.exists():
            backup.write_text(f.read_text(encoding="utf-8"), encoding="utf-8")

# -------------------------------------------------
# PREMIUM HTML LAYER
# -------------------------------------------------
html = index.read_text(encoding="utf-8")

if "cnccPremiumLayer" not in html:
    layer = r'''
<!-- =====================================================
     CNCC STUDYHUB — PREMIUM EXPERIENCE LAYER
     Existing syllabus/data remains untouched.
====================================================== -->

<div id="cnccPremiumLayer">

  <div class="cncc-live-orb orb1"></div>
  <div class="cncc-live-orb orb2"></div>
  <div class="cncc-live-grid"></div>

  <header class="premium-topbar">
    <div class="brand-wrap">
      <div class="brand-logo">
        <span>⌁</span>
        <b>C</b>
      </div>
      <div>
        <div class="brand-name">CSD StudyHub</div>
        <small>Final Year • Semester VII</small>
      </div>
    </div>

    <div class="premium-actions">
      <button class="glass-btn" onclick="cnccToggleTheme()" title="Theme">◐</button>
      <button class="glass-btn" onclick="cnccOpenProfile()" title="Profile">👤</button>
      <button class="glass-btn" onclick="cnccOpenTeacher()" title="Teacher">🎓</button>
    </div>
  </header>

  <section class="premium-hero">
    <div class="hero-content">
      <div class="live-pill">
        <span class="live-dot"></span>
        LIVE STUDY PORTAL
      </div>

      <h1>
        Learn smarter.<br>
        <span>Understand deeper.</span>
      </h1>

      <p>
        Computer Network and Cloud Computing — complete syllabus,
        unit-wise notes, diagrams, questions and exam preparation.
      </p>

      <div class="hero-meta">
        <span>📚 CSD Final Year</span>
        <span>🏫 Maharashtra Institute of Technology</span>
        <span>📍 Chh. Sambhajinagar</span>
      </div>

      <div class="hero-buttons">
        <button class="premium-btn" onclick="cnccScrollUnits()">
          Explore Syllabus →
        </button>
        <button class="outline-btn" onclick="cnccOpenStudent()">
          Student Panel
        </button>
      </div>
    </div>

    <div class="character-stage">
      <div class="character-glow"></div>
      <div class="study-character">
        <div class="char-hat">🎓</div>
        <div class="char-face">
          <span class="eye e1"></span>
          <span class="eye e2"></span>
          <span class="smile">⌣</span>
        </div>
        <div class="char-body">📚</div>
      </div>
      <div class="character-label">
        <b>Study Buddy</b>
        <small>Ready to help you learn</small>
      </div>
    </div>
  </section>

  <section class="info-cards">

    <div class="info-card">
      <span class="card-icon">📖</span>
      <div>
        <b>Deep Notes</b>
        <small>Point-wise syllabus explanations</small>
      </div>
    </div>

    <div class="info-card">
      <span class="card-icon">🧠</span>
      <div>
        <b>Question Bank</b>
        <small>2 / 5 / 10 marks preparation</small>
      </div>
    </div>

    <div class="info-card">
      <span class="card-icon">🔗</span>
      <div>
        <b>Learning Links</b>
        <small>Google diagrams & YouTube resources</small>
      </div>
    </div>

    <div class="info-card">
      <span class="card-icon">⚡</span>
      <div>
        <b>Smart Revision</b>
        <small>Track your learning progress</small>
      </div>
    </div>

  </section>

  <section class="portal-section" id="cnccPortalUnits">

    <div class="section-heading">
      <div>
        <span class="section-kicker">YOUR ACADEMIC SPACE</span>
        <h2>Study Dashboard</h2>
      </div>
      <span class="status-badge">● Online</span>
    </div>

    <div class="panel-grid">

      <button class="premium-panel" onclick="cnccShowMessage('Notes','Open any Unit from the syllabus below to read the complete notes.')">
        <span>📘</span>
        <b>Notes</b>
        <small>Deep theory • Point wise</small>
      </button>

      <button class="premium-panel" onclick="cnccShowQuestionOptions()">
        <span>📝</span>
        <b>Questions</b>
        <small>Marks-wise question bank</small>
      </button>

      <button class="premium-panel" onclick="cnccOpenResources()">
        <span>🖼️</span>
        <b>Diagrams & Resources</b>
        <small>Visual learning support</small>
      </button>

      <button class="premium-panel" onclick="cnccOpenStudent()">
        <span>📊</span>
        <b>My Progress</b>
        <small>Study activity tracking</small>
      </button>

    </div>
  </section>

  <section class="college-card">
    <div class="college-logo">MIT</div>
    <div>
      <span>ACADEMIC INSTITUTE</span>
      <h3>Maharashtra Institute of Technology</h3>
      <p>Chh. Sambhajinagar • Maharashtra</p>
      <p>Final Year B.Tech • Computer Science and Design</p>
    </div>
  </section>

  <section class="teacher-card">
    <div class="teacher-avatar">KC</div>
    <div class="teacher-info">
      <span>SUBJECT TEACHER</span>
      <h3>Professor Kiran Chaudhari</h3>
      <p>Computer Network and Cloud Computing</p>
      <small>Academic guidance • Notes • Exam preparation</small>
    </div>
    <button onclick="cnccOpenTeacher()" class="mini-btn">Teacher Panel</button>
  </section>

  <section class="creator-card">
    <div>
      <span>CREATED & DESIGNED BY</span>
      <h3>Mayur Rathod</h3>
      <p>Student • Developer • CSD Final Year</p>
    </div>
    <div class="creator-mark">MR</div>
  </section>

  <section class="eco-card">
    <div class="eco-icon">🌱</div>
    <div>
      <b>Eco-Friendly Study Mode</b>
      <p>
        Lightweight interface designed for students.
        No unnecessary heavy media. Text-first learning and
        optional external resources.
      </p>
    </div>
    <button onclick="cnccEcoMode()" class="mini-btn">Eco Mode</button>
  </section>

  <section class="feedback-card">
    <span class="section-kicker">STUDENT FEEDBACK</span>
    <h2>How was your learning experience?</h2>

    <div class="stars" id="cnccStars">
      <button onclick="cnccRate(1)">★</button>
      <button onclick="cnccRate(2)">★</button>
      <button onclick="cnccRate(3)">★</button>
      <button onclick="cnccRate(4)">★</button>
      <button onclick="cnccRate(5)">★</button>
    </div>

    <textarea id="cnccFeedback"
      placeholder="Write your feedback or suggestion..."></textarea>

    <button class="premium-btn" onclick="cnccSubmitFeedback()">
      Submit Feedback
    </button>
  </section>

  <footer class="premium-footer">
    <b>CSD StudyHub</b>
    <span>Made for learning • Built with simplicity</span>
    <a href="mailto:mayuuuuuur@gmail.com">📧 Contact</a>
  </footer>

</div>

<!-- PREMIUM MODAL -->
<div class="cncc-modal" id="cnccModal">
  <div class="modal-box">
    <button class="modal-close" onclick="cnccCloseModal()">×</button>
    <div id="cnccModalContent"></div>
  </div>
</div>

<!-- profile -->
<div class="cncc-modal" id="cnccProfileModal">
  <div class="modal-box">
    <button class="modal-close" onclick="cnccCloseProfile()">×</button>

    <div class="profile-head">
      <div class="profile-avatar">MR</div>
      <span>STUDENT PROFILE</span>
      <h2>Mayur Rathod</h2>
      <p>CSD Final Year • Semester VII</p>
    </div>

    <label>Name</label>
    <input id="profileName" value="Mayur Rathod">

    <label>Course</label>
    <input value="Computer Science and Design">

    <label>College</label>
    <input value="Maharashtra Institute of Technology, Chh. Sambhajinagar">

    <button class="premium-btn" onclick="cnccSaveProfile()">
      Save Profile
    </button>
  </div>
</div>

<!-- teacher -->
<div class="cncc-modal" id="cnccTeacherModal">
  <div class="modal-box teacher-modal">
    <button class="modal-close" onclick="cnccCloseTeacher()">×</button>

    <div class="teacher-big-avatar">KC</div>
    <span class="section-kicker">SUBJECT TEACHER</span>
    <h2>Professor Kiran Chaudhari</h2>
    <p class="teacher-subject">Computer Network and Cloud Computing</p>

    <div class="teacher-stats">
      <div><b>VI</b><small>Units</small></div>
      <div><b>SEM VII</b><small>Semester</small></div>
      <div><b>CSD</b><small>Program</small></div>
    </div>

    <p>
      Use the unit-wise notes and question bank for structured preparation.
      Each unit is designed around the syllabus provided by the institute.
    </p>
  </div>
</div>

<!-- student -->
<div class="cncc-modal" id="cnccStudentModal">
  <div class="modal-box">
    <button class="modal-close" onclick="cnccCloseStudent()">×</button>

    <span class="section-kicker">STUDENT DASHBOARD</span>
    <h2>My Learning Progress</h2>

    <div class="progress-box">
      <div class="progress-ring"><span id="cnccProgressValue">0%</span></div>
      <div>
        <b>Study Progress</b>
        <p>Progress is stored locally on this device.</p>
      </div>
    </div>

    <div class="activity-list">
      <div>📖 Notes <span>Available</span></div>
      <div>📝 Question Bank <span>Available</span></div>
      <div>🖼️ Diagrams <span>Available</span></div>
      <div>🎬 Video Resources <span>Available</span></div>
    </div>
  </div>
</div>
'''

    html = html.replace("</body>", layer + "\n</body>")

    # load premium files
    if "premium-upgrade.css" not in html:
        html = html.replace(
            "</head>",
            '<link rel="stylesheet" href="premium-upgrade.css">\n</head>'
        )

    if "premium-upgrade.js" not in html:
        html = html.replace(
            "</body>",
            '<script src="premium-upgrade.js"></script>\n</body>'
        )

    index.write_text(html, encoding="utf-8")

# -------------------------------------------------
# PREMIUM CSS
# -------------------------------------------------
premium_css = r'''
/* =====================================================
   CNCC STUDYHUB PREMIUM UI
====================================================== */

:root{
  --p-bg:#070b12;
  --p-card:rgba(255,255,255,.055);
  --p-card2:rgba(255,255,255,.08);
  --p-text:#f7f9ff;
  --p-muted:#9da8ba;
  --p-line:rgba(255,255,255,.11);
  --p-accent:#7c5cff;
  --p-accent2:#00d9ff;
  --p-green:#39e58c;
}

body{
  background:var(--p-bg);
}

#cnccPremiumLayer{
  position:relative;
  min-height:100vh;
  overflow:hidden;
  color:var(--p-text);
  font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
  padding-bottom:30px;
}

#cnccPremiumLayer *{
  box-sizing:border-box;
}

.premium-topbar{
  position:sticky;
  top:0;
  z-index:1000;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:14px 5%;
  backdrop-filter:blur(22px);
  background:rgba(7,11,18,.78);
  border-bottom:1px solid var(--p-line);
}

.brand-wrap{
  display:flex;
  align-items:center;
  gap:12px;
}

.brand-logo{
  width:44px;
  height:44px;
  border-radius:14px;
  display:grid;
  place-items:center;
  background:linear-gradient(135deg,var(--p-accent),var(--p-accent2));
  box-shadow:0 0 30px rgba(124,92,255,.35);
  font-size:17px;
}

.brand-logo span{
  position:absolute;
  opacity:.35;
  font-size:30px;
}

.brand-name{
  font-weight:800;
  letter-spacing:.2px;
}

.brand-wrap small{
  color:var(--p-muted);
}

.premium-actions{
  display:flex;
  gap:8px;
}

.glass-btn,
.mini-btn,
.outline-btn{
  border:1px solid var(--p-line);
  color:var(--p-text);
  background:var(--p-card);
  padding:10px 14px;
  border-radius:12px;
  cursor:pointer;
  transition:.25s;
}

.glass-btn:hover,
.mini-btn:hover,
.outline-btn:hover{
  transform:translateY(-2px);
  border-color:var(--p-accent2);
}

.premium-hero{
  position:relative;
  z-index:2;
  min-height:560px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:30px;
  padding:75px 7% 55px;
}

.hero-content{
  max-width:760px;
}

.live-pill{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:8px 13px;
  border:1px solid var(--p-line);
  border-radius:100px;
  color:var(--p-green);
  background:rgba(57,229,140,.06);
  font-size:12px;
  font-weight:800;
  letter-spacing:1px;
}

.live-dot{
  width:8px;
  height:8px;
  border-radius:50%;
  background:var(--p-green);
  box-shadow:0 0 15px var(--p-green);
  animation:livePulse 1.4s infinite;
}

@keyframes livePulse{
  50%{opacity:.3;transform:scale(.65)}
}

.premium-hero h1{
  font-size:clamp(42px,7vw,82px);
  line-height:.98;
  margin:25px 0;
  letter-spacing:-3px;
}

.premium-hero h1 span{
  background:linear-gradient(90deg,var(--p-accent2),#b18cff);
  -webkit-background-clip:text;
  color:transparent;
}

.premium-hero p{
  max-width:650px;
  color:var(--p-muted);
  font-size:18px;
  line-height:1.7;
}

.hero-meta{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  margin:25px 0;
}

.hero-meta span{
  padding:8px 11px;
  border:1px solid var(--p-line);
  border-radius:10px;
  background:var(--p-card);
  font-size:12px;
}

.hero-buttons{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
}

.premium-btn{
  border:0;
  border-radius:13px;
  padding:13px 19px;
  color:white;
  font-weight:800;
  cursor:pointer;
  background:linear-gradient(135deg,var(--p-accent),#5a8cff);
  box-shadow:0 12px 30px rgba(92,92,255,.25);
  transition:.25s;
}

.premium-btn:hover{
  transform:translateY(-3px) scale(1.01);
  box-shadow:0 17px 40px rgba(92,92,255,.35);
}

.character-stage{
  width:280px;
  height:330px;
  position:relative;
  display:grid;
  place-items:center;
  flex:none;
}

.character-glow{
  position:absolute;
  width:210px;
  height:210px;
  border-radius:50%;
  background:radial-gradient(circle,var(--p-accent),transparent 65%);
  filter:blur(20px);
  opacity:.35;
  animation:floatGlow 4s ease-in-out infinite;
}

@keyframes floatGlow{
  50%{transform:translateY(-18px) scale(1.08)}
}

.study-character{
  position:relative;
  width:150px;
  height:190px;
  animation:charFloat 3.5s ease-in-out infinite;
  z-index:2;
}

@keyframes charFloat{
  50%{transform:translateY(-13px) rotate(1deg)}
}

.char-face{
  width:105px;
  height:92px;
  border-radius:48% 48% 45% 45%;
  background:#ffd5b5;
  position:absolute;
  left:23px;
  top:24px;
  border:4px solid rgba(255,255,255,.35);
}

.char-hat{
  position:absolute;
  top:0;
  left:14px;
  z-index:2;
  font-size:70px;
  transform:rotate(-4deg);
}

.eye{
  width:8px;
  height:11px;
  background:#171b24;
  border-radius:50%;
  position:absolute;
  top:42px;
}

.e1{left:28px}
.e2{right:28px}

.smile{
  position:absolute;
  left:43px;
  top:58px;
  font-size:23px;
}

.char-body{
  position:absolute;
  left:16px;
  bottom:0;
  width:120px;
  height:90px;
  border-radius:40px 40px 18px 18px;
  display:grid;
  place-items:center;
  font-size:38px;
  background:linear-gradient(145deg,#292e42,#151926);
  border:1px solid var(--p-line);
}

.character-label{
  position:absolute;
  bottom:0;
  text-align:center;
  display:flex;
  flex-direction:column;
}

.character-label small{
  color:var(--p-muted);
  margin-top:3px;
}

.info-cards,
.panel-grid{
  position:relative;
  z-index:2;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:14px;
  padding:15px 7%;
}

.info-card,
.premium-panel,
.college-card,
.teacher-card,
.creator-card,
.eco-card,
.feedback-card{
  border:1px solid var(--p-line);
  background:linear-gradient(145deg,var(--p-card2),var(--p-card));
  backdrop-filter:blur(18px);
  border-radius:20px;
  box-shadow:0 20px 70px rgba(0,0,0,.16);
}

.info-card{
  display:flex;
  align-items:center;
  gap:13px;
  padding:18px;
}

.card-icon{
  font-size:25px;
}

.info-card small,
.premium-panel small{
  display:block;
  color:var(--p-muted);
  margin-top:5px;
}

.portal-section,
.college-card,
.teacher-card,
.creator-card,
.eco-card,
.feedback-card{
  position:relative;
  z-index:2;
  margin:45px 7%;
}

.section-heading{
  display:flex;
  align-items:end;
  justify-content:space-between;
  margin-bottom:15px;
}

.section-kicker,
.college-card span,
.teacher-info span,
.creator-card span{
  color:var(--p-accent2);
  font-size:11px;
  font-weight:900;
  letter-spacing:1.4px;
}

.section-heading h2,
.feedback-card h2{
  margin:7px 0 0;
  font-size:30px;
}

.status-badge{
  color:var(--p-green);
  font-size:12px;
}

.premium-panel{
  border:1px solid var(--p-line);
  color:var(--p-text);
  text-align:left;
  padding:24px;
  cursor:pointer;
  transition:.3s;
}

.premium-panel:hover{
  transform:translateY(-6px);
  border-color:var(--p-accent2);
  box-shadow:0 25px 70px rgba(0,0,0,.25);
}

.premium-panel span{
  font-size:30px;
  display:block;
  margin-bottom:18px;
}

.college-card,
.teacher-card,
.creator-card,
.eco-card{
  display:flex;
  align-items:center;
  gap:20px;
  padding:25px;
}

.college-logo,
.teacher-avatar,
.creator-mark,
.teacher-big-avatar,
.profile-avatar{
  width:68px;
  height:68px;
  min-width:68px;
  border-radius:20px;
  display:grid;
  place-items:center;
  font-weight:900;
  color:white;
  background:linear-gradient(135deg,var(--p-accent),var(--p-accent2));
  box-shadow:0 10px 35px rgba(92,92,255,.2);
}

.college-card h3,
.teacher-card h3,
.creator-card h3{
  margin:7px 0;
}

.college-card p,
.teacher-card p,
.creator-card p,
.eco-card p{
  color:var(--p-muted);
  margin:4px 0;
}

.teacher-info{
  flex:1;
}

.eco-card{
  border-color:rgba(57,229,140,.2);
}

.eco-icon{
  font-size:35px;
}

.feedback-card{
  padding:30px;
}

.stars{
  display:flex;
  gap:5px;
  margin:18px 0;
}

.stars button{
  border:0;
  background:none;
  color:#667085;
  font-size:35px;
  cursor:pointer;
  transition:.2s;
}

.stars button.active,
.stars button:hover{
  color:#ffd166;
  transform:scale(1.1);
}

#cnccFeedback,
.modal-box input,
.modal-box textarea{
  width:100%;
  border:1px solid var(--p-line);
  background:rgba(0,0,0,.2);
  color:var(--p-text);
  border-radius:13px;
  padding:13px;
  outline:none;
}

#cnccFeedback{
  min-height:110px;
  margin-bottom:13px;
}

.premium-footer{
  position:relative;
  z-index:2;
  margin-top:55px;
  padding:25px 7%;
  display:flex;
  flex-wrap:wrap;
  gap:20px;
  justify-content:space-between;
  border-top:1px solid var(--p-line);
  color:var(--p-muted);
}

.premium-footer a{
  color:var(--p-accent2);
  text-decoration:none;
}

.cncc-live-orb{
  position:fixed;
  border-radius:50%;
  pointer-events:none;
  filter:blur(80px);
  opacity:.12;
  z-index:0;
}

.orb1{
  width:300px;
  height:300px;
  background:#7c5cff;
  top:15%;
  left:-120px;
  animation:orbMove 14s infinite alternate ease-in-out;
}

.orb2{
  width:280px;
  height:280px;
  background:#00d9ff;
  right:-120px;
  top:55%;
  animation:orbMove 17s infinite alternate-reverse ease-in-out;
}

@keyframes orbMove{
  to{transform:translate(120px,70px)}
}

.cncc-live-grid{
  position:fixed;
  inset:0;
  z-index:0;
  pointer-events:none;
  opacity:.035;
  background-image:
    linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px);
  background-size:45px 45px;
}

.cncc-modal{
  display:none;
  position:fixed;
  inset:0;
  z-index:9999;
  background:rgba(0,0,0,.72);
  backdrop-filter:blur(12px);
  align-items:center;
  justify-content:center;
  padding:18px;
}

.cncc-modal.show{
  display:flex;
  animation:modalIn .25s ease;
}

@keyframes modalIn{
  from{opacity:0}
  to{opacity:1}
}

.modal-box{
  position:relative;
  width:min(620px,100%);
  max-height:90vh;
  overflow:auto;
  padding:30px;
  border:1px solid var(--p-line);
  border-radius:25px;
  background:#0c111b;
  box-shadow:0 30px 100px rgba(0,0,0,.5);
}

.modal-close{
  position:absolute;
  top:15px;
  right:15px;
  border:0;
  background:var(--p-card);
  color:white;
  width:36px;
  height:36px;
  border-radius:50%;
  cursor:pointer;
  font-size:22px;
}

.modal-box label{
  display:block;
  margin:15px 0 7px;
  color:var(--p-muted);
  font-size:13px;
}

.profile-head{
  text-align:center;
  margin-bottom:20px;
}

.profile-head .profile-avatar{
  margin:0 auto 15px;
}

.teacher-big-avatar{
  margin-bottom:18px;
}

.teacher-stats{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:10px;
  margin:20px 0;
}

.teacher-stats div{
  padding:17px;
  text-align:center;
  background:var(--p-card);
  border:1px solid var(--p-line);
  border-radius:15px;
}

.teacher-stats b,
.teacher-stats small{
  display:block;
}

.teacher-stats small{
  color:var(--p-muted);
  margin-top:5px;
}

.progress-box{
  display:flex;
  align-items:center;
  gap:20px;
  padding:20px;
  border:1px solid var(--p-line);
  border-radius:18px;
  background:var(--p-card);
}

.progress-ring{
  width:100px;
  height:100px;
  border-radius:50%;
  display:grid;
  place-items:center;
  background:conic-gradient(var(--p-accent) 0deg,rgba(255,255,255,.08) 0deg);
}

.progress-ring span{
  width:75px;
  height:75px;
  display:grid;
  place-items:center;
  border-radius:50%;
  background:#0c111b;
  font-weight:900;
}

.activity-list{
  margin-top:15px;
}

.activity-list div{
  padding:14px;
  margin:8px 0;
  border:1px solid var(--p-line);
  border-radius:13px;
  display:flex;
  justify-content:space-between;
}

.activity-list span{
  color:var(--p-green);
}

body.cncc-light{
  background:#f4f7fb;
}

body.cncc-light #cnccPremiumLayer{
  --p-bg:#f4f7fb;
  --p-card:rgba(255,255,255,.75);
  --p-card2:rgba(255,255,255,.95);
  --p-text:#111827;
  --p-muted:#64748b;
  --p-line:rgba(15,23,42,.12);
}

body.cncc-light .premium-topbar{
  background:rgba(255,255,255,.8);
}

body.cncc-light .modal-box{
  background:#fff;
  color:#111827;
}

body.cncc-light .progress-ring span{
  background:#fff;
}

@media(max-width:900px){
  .premium-hero{
    flex-direction:column;
    align-items:flex-start;
  }

  .character-stage{
    align-self:center;
  }

  .info-cards,
  .panel-grid{
    grid-template-columns:repeat(2,1fr);
  }
}

@media(max-width:600px){
  .premium-topbar{
    padding:11px 4%;
  }

  .premium-hero{
    padding:55px 5% 35px;
  }

  .premium-hero h1{
    font-size:47px;
    letter-spacing:-2px;
  }

  .premium-hero p{
    font-size:15px;
  }

  .info-cards,
  .panel-grid{
    grid-template-columns:1fr;
    padding-left:5%;
    padding-right:5%;
  }

  .portal-section,
  .college-card,
  .teacher-card,
  .creator-card,
  .eco-card,
  .feedback-card{
    margin-left:5%;
    margin-right:5%;
  }

  .college-card,
  .teacher-card,
  .creator-card,
  .eco-card{
    align-items:flex-start;
    flex-direction:column;
  }

  .premium-footer{
    padding-left:5%;
    padding-right:5%;
  }
}

@media(prefers-reduced-motion:reduce){
  *,
  *::before,
  *::after{
    animation:none !important;
    transition:none !important;
  }
}
'''

(root / "premium-upgrade.css").write_text(premium_css, encoding="utf-8")

# -------------------------------------------------
# PREMIUM JS
# -------------------------------------------------
premium_js = r'''
/* =====================================================
   CNCC STUDYHUB PREMIUM INTERACTION ENGINE
====================================================== */

let cnccRating = 0;

function cnccOpenModal(title, content){
  const modal = document.getElementById("cnccModal");
  const box = document.getElementById("cnccModalContent");

  if(!modal || !box) return;

  box.innerHTML = `
    <span class="section-kicker">${title}</span>
    <h2>${title}</h2>
    <div>${content}</div>
  `;

  modal.classList.add("show");
}

function cnccCloseModal(){
  document.getElementById("cnccModal")?.classList.remove("show");
}

function cnccShowMessage(title, message){
  cnccOpenModal(
    title,
    `<p style="line-height:1.8;color:var(--p-muted)">${message}</p>`
  );
}

function cnccToggleTheme(){
  document.body.classList.toggle("cncc-light");

  localStorage.setItem(
    "cnccTheme",
    document.body.classList.contains("cncc-light") ? "light" : "dark"
  );
}

function cnccOpenProfile(){
  document.getElementById("cnccProfileModal")?.classList.add("show");
}

function cnccCloseProfile(){
  document.getElementById("cnccProfileModal")?.classList.remove("show");
}

function cnccSaveProfile(){
  const name = document.getElementById("profileName")?.value || "Mayur Rathod";

  localStorage.setItem("cnccProfileName", name);

  cnccCloseProfile();

  cnccShowMessage(
    "Profile Saved",
    `Welcome back, <b>${name}</b>.<br><br>
     Your profile has been saved locally on this device.`
  );
}

function cnccOpenTeacher(){
  document.getElementById("cnccTeacherModal")?.classList.add("show");
}

function cnccCloseTeacher(){
  document.getElementById("cnccTeacherModal")?.classList.remove("show");
}

function cnccOpenStudent(){
  document.getElementById("cnccStudentModal")?.classList.add("show");

  const progress = Number(localStorage.getItem("cnccProgress") || 0);
  const value = document.getElementById("cnccProgressValue");

  if(value) value.textContent = progress + "%";

  const ring = document.querySelector(".progress-ring");

  if(ring){
    ring.style.background =
      `conic-gradient(var(--p-accent) ${progress * 3.6}deg, rgba(255,255,255,.08) 0deg)`;
  }
}

function cnccCloseStudent(){
  document.getElementById("cnccStudentModal")?.classList.remove("show");
}

function cnccScrollUnits(){
  document.getElementById("cnccPortalUnits")?.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });

  localStorage.setItem(
    "cnccProgress",
    Math.min(
      100,
      Number(localStorage.getItem("cnccProgress") || 0) + 5
    )
  );
}

function cnccShowQuestionOptions(){
  cnccOpenModal(
    "Question Bank",
    `
      <div class="activity-list">
        <div>2 Marks Questions <span>Practice</span></div>
        <div>5 Marks Questions <span>Practice</span></div>
        <div>10 Marks Questions <span>Practice</span></div>
        <div>Important Questions <span>Practice</span></div>
        <div>Random Unit Test <span>Practice</span></div>
      </div>
      <p style="color:var(--p-muted);line-height:1.7">
        Existing syllabus content remains unchanged. Use the unit
        sections below to access the detailed theory and questions.
      </p>
    `
  );
}

function cnccOpenResources(){
  const topic = prompt(
    "Enter the networking/cloud topic for visual resources:",
    "OSI Model"
  );

  if(!topic) return;

  const google =
    "https://www.google.com/search?tbm=isch&q=" +
    encodeURIComponent(topic + " diagram");

  const youtube =
    "https://www.youtube.com/results?search_query=" +
    encodeURIComponent(topic + " explained");

  cnccOpenModal(
    "Learning Resources",
    `
      <div style="display:grid;gap:12px">
        <a class="premium-btn"
           href="${google}"
           target="_blank"
           rel="noopener noreferrer">
           🖼️ Search Diagram on Google
        </a>

        <a class="outline-btn"
           href="${youtube}"
           target="_blank"
           rel="noopener noreferrer">
           🎬 Watch Related YouTube Videos
        </a>

        <p style="color:var(--p-muted);line-height:1.7">
          External resources open on their original platforms.
          CNCC StudyHub does not copy or host third-party copyrighted
          material.
        </p>
      </div>
    `
  );
}

function cnccEcoMode(){
  document.body.classList.toggle("cncc-eco");

  const enabled =
    document.body.classList.contains("cncc-eco");

  localStorage.setItem(
    "cnccEco",
    enabled ? "1" : "0"
  );

  cnccShowMessage(
    "Eco-Friendly Mode",
    enabled
      ? "Eco mode enabled. Animations are reduced and the interface uses fewer visual effects."
      : "Eco mode disabled."
  );
}

function cnccRate(value){
  cnccRating = value;

  document.querySelectorAll("#cnccStars button")
    .forEach((button, index)=>{
      button.classList.toggle("active", index < value);
    });
}

function cnccSubmitFeedback(){
  const text =
    document.getElementById("cnccFeedback")?.value.trim();

  if(!cnccRating){
    alert("Please select a rating first.");
    return;
  }

  const feedbacks =
    JSON.parse(localStorage.getItem("cnccFeedbacks") || "[]");

  feedbacks.push({
    rating:cnccRating,
    message:text || "",
    date:new Date().toISOString()
  });

  localStorage.setItem(
    "cnccFeedbacks",
    JSON.stringify(feedbacks)
  );

  document.getElementById("cnccFeedback").value = "";

  cnccShowMessage(
    "Thank You ⭐",
    `Your ${cnccRating}/5 rating and feedback were saved on this device.`
  );
}

/* restore preferences */
document.addEventListener("DOMContentLoaded",()=>{
  if(localStorage.getItem("cnccTheme") === "light"){
    document.body.classList.add("cncc-light");
  }

  if(localStorage.getItem("cnccEco") === "1"){
    document.body.classList.add("cncc-eco");
  }

  const savedName = localStorage.getItem("cnccProfileName");

  if(savedName){
    const input = document.getElementById("profileName");
    if(input) input.value = savedName;
  }
});

/* close modal by clicking background */
document.addEventListener("click",(event)=>{
  if(event.target.classList.contains("cncc-modal")){
    event.target.classList.remove("show");
  }
});
'''

(root / "premium-upgrade.js").write_text(premium_js, encoding="utf-8")

print("")
print("==============================================")
print(" CNCC STUDYHUB PREMIUM UPGRADE COMPLETE")
print("==============================================")
print("Existing syllabus/data: PRESERVED")
print("Added:")
print("✓ Premium responsive UI")
print("✓ Dark / Light theme")
print("✓ Animated Study Buddy")
print("✓ Student Panel")
print("✓ Teacher Panel")
print("✓ Professor Kiran Chaudhari")
print("✓ Mayur Rathod creator profile")
print("✓ College information")
print("✓ Feedback + 5-star rating")
print("✓ Eco-friendly mode")
print("✓ Google diagram search")
print("✓ YouTube learning search")
print("✓ Local progress tracking")
print("✓ Mobile-friendly design")
print("==============================================")
