const DATA = {
 subjects: [
  {
   id:"cncc",
   name:"Computer Networks & Cloud Computing",
   short:"CNCC",
   icon:"🌐",
   professor:"Professor Kiran Chaudhari",
   units:6,
   progress:[0,0,0,0,0,0]
  }
 ],
 questions: [
  {marks:2,q:"Define Computer Network."},
  {marks:2,q:"What is a protocol?"},
  {marks:5,q:"Explain the basic components of a computer network."},
  {marks:5,q:"Explain different types of network topologies."},
  {marks:10,q:"Explain the OSI reference model with a suitable diagram."},
  {marks:10,q:"Explain TCP/IP architecture and its layers."}
 ]
};

let selectedRating = 0;

document.addEventListener("DOMContentLoaded",()=>{
 setTimeout(()=>{
  const l=document.getElementById("loader");
  l.style.opacity="0";
  setTimeout(()=>l.remove(),700);
 },1200);

 renderSubjects();
 renderContinue();
 renderProgress();
 renderImportant();
 updateStats();
});

function renderSubjects(){
 const grid=document.getElementById("subjectGrid");
 grid.innerHTML=DATA.subjects.map(s=>`
  <article class="subject-card" onclick="openSubject('${s.id}')">
   <div class="subject-icon">${s.icon}</div>
   <h3>${s.name}</h3>
   <p>${s.short} • ${s.units} Units</p>
   <div class="prof">👨‍🏫 ${s.professor}</div>
  </article>
 `).join("");
}

function renderContinue(){
 const row=document.getElementById("continueRow");
 row.innerHTML=DATA.subjects[0].progress.map((p,i)=>`
  <article class="study-card" onclick="openUnit(${i+1})">
   <span class="number">UNIT ${i+1}</span>
   <h3>${DATA.subjects[0].short} — Unit ${i+1}</h3>
   <p>${p}% completed</p>
   <div class="progress-line" style="width:${Math.max(p,3)}%"></div>
  </article>
 `).join("");
}

function renderProgress(){
 const grid=document.getElementById("progressGrid");
 grid.innerHTML=DATA.subjects[0].progress.map((p,i)=>`
  <div class="progress-card">
   <h3>Unit ${i+1}</h3>
   <div class="bar"><span style="width:${p}%"></span></div>
   <small>${p}% complete</small>
  </div>
 `).join("");
}

function renderImportant(){
 document.getElementById("importantRow").innerHTML=DATA.questions
  .filter(x=>x.marks===10)
  .map(x=>`<div class="question"><b>⭐ 10 Marks</b><p>${x.q}</p></div>`)
  .join("");
}

function updateStats(){
 document.getElementById("subjectCount").textContent=DATA.subjects.length;
 document.getElementById("unitCount").textContent=DATA.subjects.reduce((a,s)=>a+s.units,0);
 document.getElementById("questionCount").textContent=DATA.questions.length;
 const p=DATA.subjects[0].progress;
 document.getElementById("progressValue").textContent=
  Math.round(p.reduce((a,b)=>a+b,0)/p.length)+"%";
}

function openSubject(id){
 const s=DATA.subjects.find(x=>x.id===id);
 showModal(`
  <span class="eyebrow">SUBJECT</span>
  <h2>${s.icon} ${s.name}</h2>
  <p>👨‍🏫 ${s.professor}</p>
  <div class="question-row" style="margin-top:20px">
   ${Array.from({length:s.units},(_,i)=>`
    <div class="question" onclick="openUnit(${i+1})">
     <b>Unit ${i+1}</b><p>Open theory, diagrams, questions & MCQs →</p>
    </div>`).join("")}
  </div>
 `);
}

function openUnit(n){
 showModal(`
  <span class="eyebrow">UNIT ${n}</span>
  <h2>CNCC — Unit ${n}</h2>
  <p>
   This unit is ready for syllabus-based detailed theory, diagrams,
   key points, 2/5/10-mark answers, MCQs and question-bank content.
  </p>
  <br>
  <button class="primary" onclick="openQuestions()">📝 Question Bank</button>
  <button class="secondary" onclick="startMCQ()">🧪 MCQ Practice</button>
 `);
}

function openQuestions(marks){
 let list=DATA.questions.filter(x=>!marks||x.marks===marks);
 showModal(`
  <span class="eyebrow">QUESTION BANK</span>
  <h2>${marks?marks+" Marks ":""}Important Questions</h2>
  ${list.map(x=>`
   <div class="modal-q">
    <b>${x.marks} Marks</b>
    <p>${x.q}</p>
   </div>`).join("")}
 `);
}

function openRandomPaper(){
 const arr=[...DATA.questions].sort(()=>Math.random()-.5);
 showModal(`
  <span class="eyebrow">RANDOM PAPER</span>
  <h2>🎲 Fresh Practice Paper</h2>
  ${arr.map((x,i)=>`
   <div class="modal-q">
    <b>Q${i+1}. [${x.marks} Marks]</b>
    <p>${x.q}</p>
   </div>`).join("")}
  <br>
  <button class="primary" onclick="openRandomPaper()">🔄 Generate Again</button>
 `);
}

function startMCQ(){
 showModal(`
  <span class="eyebrow">MCQ ARENA</span>
  <h2>🧪 MCQ Practice</h2>
  <p>MCQ engine is ready. Syllabus-specific MCQs can be loaded here.</p>
  <br>
  <button class="primary" onclick="closeModal()">Start →</button>
 `);
}

function continueLearning(){openUnit(1)}
function showAllUnits(){openSubject("cncc")}

function showModal(html){
 document.getElementById("modalContent").innerHTML=html;
 document.getElementById("modal").classList.add("show");
}
function closeModal(){document.getElementById("modal").classList.remove("show")}

document.getElementById("modal").addEventListener("click",e=>{
 if(e.target.id==="modal")closeModal();
});

document.getElementById("themeBtn").onclick=()=>{
 document.body.classList.toggle("light");
 localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark");
};
if(localStorage.getItem("theme")==="light")document.body.classList.add("light");

document.getElementById("ecoBtn").onclick=()=>{
 document.body.classList.toggle("eco");
 localStorage.setItem("eco",document.body.classList.contains("eco")?"1":"0");
};
if(localStorage.getItem("eco")==="1")document.body.classList.add("eco");

document.getElementById("searchInput").addEventListener("input",e=>{
 const q=e.target.value.toLowerCase().trim();
 if(!q){renderSubjects();return}
 const results=DATA.questions.filter(x=>x.q.toLowerCase().includes(q));
 document.getElementById("subjectGrid").innerHTML=
  results.length
  ? results.map(x=>`
    <article class="subject-card" onclick="openQuestions(${x.marks})">
     <div class="subject-icon">🔎</div>
     <h3>${x.q}</h3>
     <p>${x.marks} Marks</p>
    </article>`).join("")
  : `<div class="question"><h3>No results</h3><p>Try another topic or question.</p></div>`;
});

function rate(n){
 selectedRating=n;
 document.querySelectorAll(".stars button").forEach((b,i)=>
  b.classList.toggle("active",i<n)
 );
 localStorage.setItem("rating",n);
}

function submitFeedback(){
 const text=document.getElementById("feedbackText").value.trim();
 if(!selectedRating){alert("Please select a rating ⭐");return}
 localStorage.setItem("feedback",JSON.stringify({
  rating:selectedRating,
  text,
  date:new Date().toISOString()
 }));
 document.getElementById("feedbackMsg").textContent="✓ Feedback saved on this device.";
}

function openLinkedIn(e){
 e.preventDefault();
 alert("Add your LinkedIn profile URL in app.js.");
}

document.getElementById("profileBtn").onclick=()=>{
 showModal(`
  <span class="eyebrow">DEVELOPER PROFILE</span>
  <h2>👨‍💻 Mayur Rathod</h2>
  <p>Creator of CSD StudyHub</p>
  <br>
  <p>📧 mayuuuuuuur@gmail.com</p>
  <p>🌐 github.com/mayurathodmr</p>
 `);
};
