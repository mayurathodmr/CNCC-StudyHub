const DATA={
subjects:[
{id:"cncc",name:"Computer Networks & Cloud Computing",short:"CNCC",icon:"🌐",prof:"Professor Kiran Chaudhari",units:6}
],
units:["Unit I","Unit II","Unit III","Unit IV","Unit V","Unit VI"],
questions:[
{m:2,q:"Define Computer Network."},
{m:2,q:"What is a protocol?"},
{m:2,q:"Define network topology."},
{m:5,q:"Explain the basic components of a computer network."},
{m:5,q:"Explain different types of network topologies."},
{m:5,q:"Explain the functions of network protocols."},
{m:10,q:"Explain the OSI reference model with a suitable diagram."},
{m:10,q:"Explain TCP/IP architecture and its layers."},
{m:10,q:"Explain different network topologies with diagrams."}
]
};

let rating=0;

function init(){
renderUnits();renderSubjects();renderImportant();renderProgress();stats();
setTimeout(()=>document.getElementById("splash")?.remove(),2300);
}
document.addEventListener("DOMContentLoaded",init);

function stats(){
subjectsN.textContent=DATA.subjects.length;
unitsN.textContent=DATA.units.length;
questionsN.textContent=DATA.questions.length;
progressN.textContent=localStorage.getItem("overallProgress")||"0%";
}

function renderUnits(){
unitRow.innerHTML=DATA.units.map((u,i)=>{
let p=Number(localStorage.getItem("unit"+i)||0);
return `<div class="unit" onclick="openUnit(${i})">
<small>UNIT ${String(i+1).padStart(2,"0")}</small>
<h3>${u}</h3><p>Theory • Diagram • Q&A • MCQ</p>
<div class="bar" style="width:${Math.max(p,3)}%"></div></div>`
}).join("");
}

function renderSubjects(){
subjectGrid.innerHTML=DATA.subjects.map(s=>`
<div class="subject" onclick="openSubject('${s.id}')">
<div class="icon">${s.icon}</div>
<h3>${s.name}</h3>
<p>${s.short} • ${s.units} Units</p>
<div class="prof">👨‍🏫 ${s.prof}</div>
</div>`).join("");
}

function renderImportant(){
important.innerHTML=DATA.questions.filter(x=>x.m===10).map(x=>`
<div class="question"><b>⭐ ${x.m} MARKS</b><p>${x.q}</p></div>`).join("");
}

function renderProgress(){
progressGrid.innerHTML=DATA.units.map((u,i)=>{
let p=Number(localStorage.getItem("unit"+i)||0);
return `<div class="progress-card"><h3>${u}</h3>
<div class="progress-track"><span style="width:${p}%"></span></div>
<small>${p}% completed</small></div>`
}).join("");
}

function openUnit(i){
let p=Number(localStorage.getItem("unit"+i)||0);
localStorage.setItem("unit"+i,Math.min(100,p+5));
localStorage.setItem("overallProgress",
Math.round(DATA.units.reduce((a,_,x)=>a+Number(localStorage.getItem("unit"+x)||0),0)/6)+"%");
renderUnits();renderProgress();stats();
modalBody.innerHTML=`
<small>UNIT ${i+1}</small>
<h2>${DATA.units[i]}</h2>
<p>Complete syllabus-based learning section.</p>
<br>
<div class="question">
<b>📖 THEORY</b><p>Detailed topic explanations will appear here from your uploaded syllabus.</p>
</div><br>
<div class="question">
<b>🖼️ DIAGRAMS</b><p>Relevant diagrams and diagram explanations will appear here.</p>
</div><br>
<button class="btn-main" onclick="questions()">📝 Question Bank</button>
<button class="btn-glass" onclick="mcq()">🧪 MCQ</button>`;
showModal();
}

function openSubject(id){
let s=DATA.subjects.find(x=>x.id===id);
modalBody.innerHTML=`<small>SUBJECT</small><h2>${s.icon} ${s.name}</h2>
<p>👨‍🏫 ${s.prof}</p><br>
${DATA.units.map((u,i)=>`<div class="modal-question">
<b>${u}</b><p>Theory • Important Questions • MCQ</p>
<button class="btn-glass" onclick="openUnit(${i})">Open →</button>
</div>`).join("")}`;
showModal();
}

function questions(mark){
let list=DATA.questions.filter(x=>!mark||x.m===mark);
modalBody.innerHTML=`<small>QUESTION BANK</small>
<h2>${mark?mark+" Marks ":""}Questions</h2>
${list.map((x,i)=>`<div class="modal-question">
<b>Q${i+1} • ${x.m} MARKS</b><p>${x.q}</p>
<button class="btn-glass" onclick="bookmark('${encodeURIComponent(x.q)}')">☆ Bookmark</button>
</div>`).join("")}`;
showModal();
}

function paper(){
let arr=[...DATA.questions].sort(()=>Math.random()-.5);
modalBody.innerHTML=`<small>EXAM SIMULATOR</small><h2>🎲 Fresh Question Paper</h2>
<p>Generated randomly from the available question bank.</p>
${arr.map((x,i)=>`<div class="modal-question"><b>Q${i+1} • ${x.m} MARKS</b><p>${x.q}</p></div>`).join("")}
<br><button class="btn-main" onclick="paper()">⟳ Generate Again</button>`;
showModal();
}

function mcq(){
modalBody.innerHTML=`<small>MCQ ARENA</small><h2>🧪 Practice Quiz</h2>
<div class="question"><b>QUESTION</b>
<p>Which model is commonly used to describe network communication in seven layers?</p>
<br>
<label><input type="radio" name="q"> TCP/IP</label><br><br>
<label><input type="radio" name="q"> OSI</label><br><br>
<label><input type="radio" name="q"> HTTP</label><br><br>
<label><input type="radio" name="q"> DNS</label>
<br><br><button class="btn-main" onclick="quizAnswer()">Submit Answer</button>
</div>`;
showModal();
}
function quizAnswer(){
modalBody.innerHTML=`<h2>✓ Correct!</h2><p>The OSI reference model has seven layers.</p>
<br><button class="btn-main" onclick="mcq()">Next Question →</button>`;
}

function bookmarks(){
let b=JSON.parse(localStorage.getItem("bookmarks")||"[]");
modalBody.innerHTML=`<small>SAVED</small><h2>☆ Bookmarks</h2>`+
(b.length?b.map(x=>`<div class="modal-question"><p>${x}</p></div>`).join("")
:`<p>No bookmarks yet. Save questions from Question Bank.</p>`);
showModal();
}
function bookmark(q){
let b=JSON.parse(localStorage.getItem("bookmarks")||"[]");
q=decodeURIComponent(q);if(!b.includes(q))b.push(q);
localStorage.setItem("bookmarks",JSON.stringify(b));
alert("✓ Bookmarked");bookmarks();
}

function progress(){
renderProgress();
modalBody.innerHTML=`<small>YOUR JOURNEY</small><h2>📊 My Progress</h2>
${progressGrid.innerHTML}`;
showModal();
}
function profile(){
modalBody.innerHTML=`<small>DEVELOPER</small><h2>👨‍💻 Mayur Rathod</h2>
<p>CSD StudyHub creator</p><br><p>📧 mayuuuuuuur@gmail.com</p>
<p>GitHub: mayurathodmr</p>`;
showModal();
}
function feedback(){
modalBody.innerHTML=`<small>FEEDBACK</small><h2>⭐ Rate StudyHub</h2>
<p>Use the feedback section below to rate your experience.</p>
<br><button class="btn-main" onclick="closeModal();document.querySelector('.feedback').scrollIntoView()">Give Feedback →</button>`;
showModal();
}
function rate(n){
rating=n;
document.querySelectorAll("#stars button").forEach((x,i)=>x.classList.toggle("active",i<n));
}
function saveFeedback(){
if(!rating){alert("Select a rating first ⭐");return}
localStorage.setItem("feedback",JSON.stringify({
rating,text:feedbackText.value,date:new Date().toISOString()
}));
feedbackMsg.textContent="✓ Feedback saved successfully.";
}
function continueStudy(){openUnit(0)}
function subjects(){document.querySelector(".subjects").scrollIntoView({behavior:"smooth"})}
function home(){window.scrollTo({top:0,behavior:"smooth"})}
function linkedin(e){e.preventDefault();alert("Add your LinkedIn URL in app.js.");}
function showModal(){modal.classList.add("show")}
function closeModal(){modal.classList.remove("show")}
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});

theme.onclick=()=>{
document.body.classList.toggle("light");
localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark");
};
eco.onclick=()=>{
document.body.classList.toggle("eco");
localStorage.setItem("eco",document.body.classList.contains("eco")?"1":"0");
};
if(localStorage.getItem("theme")==="light")document.body.classList.add("light");
if(localStorage.getItem("eco")==="1")document.body.classList.add("eco");

search.addEventListener("input",e=>{
let q=e.target.value.toLowerCase();
if(!q){renderSubjects();return}
let r=DATA.questions.filter(x=>x.q.toLowerCase().includes(q));
subjectGrid.innerHTML=r.length?r.map(x=>`
<div class="subject" onclick="questions(${x.m})">
<div class="icon">🔎</div><h3>${x.q}</h3><p>${x.m} Marks</p>
</div>`).join(""):`<div class="question"><h3>No results</h3><p>Try another keyword.</p></div>`;
});
