const DATA={
subjects:[
{
id:"cncc",
name:"Computer Networks & Cloud Computing",
short:"CNCC",
icon:"🌐",
prof:"Professor Kiran Chaudhari",
units:6,
topics:[
"Computer Networks",
"Network Models",
"OSI Reference Model",
"TCP/IP Model",
"Network Topologies",
"Protocols",
"Cloud Computing Basics"
]
}
],
otherSubjects:[
"Software Engineering",
"Database Management System",
"Computer Graphics",
"Internet of Things",
"Artificial Intelligence",
"Web Technology",
"Data Communication",
"Operating System"
],
units:[
{
title:"Unit I",
topics:["Introduction to Computer Networks","Network Types","Topologies","Protocols"],
theory:"A computer network is a collection of interconnected devices that communicate and share resources. Networks allow computers, phones, servers and other devices to exchange data using defined communication rules called protocols.",
diagram:"🖥️  ⇄  🌐  ⇄  💻",
youtube:"computer network basics",
questions:[
{m:2,q:"Define Computer Network."},
{m:2,q:"What is a protocol?"},
{m:5,q:"Explain different types of computer networks."},
{m:5,q:"Explain different network topologies."},
{m:10,q:"Explain computer networks and their components in detail."}
]
},
{
title:"Unit II",
topics:["OSI Model","TCP/IP Model","Layers","Network Services"],
theory:"Network reference models divide communication into layers. The OSI model contains seven layers and helps students understand how data moves from one device to another. The TCP/IP model is widely used in real-world Internet communication.",
diagram:"Application\nPresentation\nSession\nTransport\nNetwork\nData Link\nPhysical",
youtube:"OSI model explained",
questions:[
{m:2,q:"What is the OSI model?"},
{m:2,q:"Name the seven OSI layers."},
{m:5,q:"Explain the functions of OSI layers."},
{m:5,q:"Compare OSI and TCP/IP models."},
{m:10,q:"Explain the OSI reference model with a suitable diagram."}
]
},
{
title:"Unit III",
topics:["Transport Layer","TCP","UDP","Ports"],
theory:"The transport layer provides communication between applications running on different hosts. TCP provides reliable, connection-oriented delivery while UDP provides faster connectionless communication.",
diagram:"Application → Transport → Network → Link",
youtube:"TCP UDP explained",
questions:[
{m:2,q:"Define TCP."},
{m:2,q:"Define UDP."},
{m:5,q:"Differentiate TCP and UDP."},
{m:10,q:"Explain TCP connection establishment."}
]
},
{
title:"Unit IV",
topics:["IPv4","IPv6","Addressing","Subnetting"],
theory:"IP addressing identifies devices on a network. IPv4 uses 32-bit addresses while IPv6 uses 128-bit addresses and provides a much larger address space.",
diagram:"Network → Router → Subnet → Host",
youtube:"IPv4 IPv6 explained",
questions:[
{m:2,q:"What is an IP address?"},
{m:5,q:"Compare IPv4 and IPv6."},
{m:10,q:"Explain IPv4 addressing and subnetting."}
]
},
{
title:"Unit V",
topics:["DNS","DHCP","HTTP","Network Services"],
theory:"Network services make communication easier for users and applications. DNS translates domain names into IP addresses, DHCP provides network configuration automatically and HTTP is used for web communication.",
diagram:"User → DNS → IP → Web Server",
youtube:"DNS DHCP HTTP explained",
questions:[
{m:2,q:"What is DNS?"},
{m:2,q:"What is DHCP?"},
{m:5,q:"Explain DNS working."},
{m:10,q:"Explain important Internet application protocols."}
]
},
{
title:"Unit VI",
topics:["Cloud Computing","Cloud Models","Services","Virtualization"],
theory:"Cloud computing provides computing resources such as storage, processing and applications over a network. Common service models include IaaS, PaaS and SaaS.",
diagram:"☁️ Cloud\n↙ ↓ ↘\nStorage • Apps • Compute",
youtube:"cloud computing basics",
questions:[
{m:2,q:"Define cloud computing."},
{m:5,q:"Explain IaaS, PaaS and SaaS."},
{m:10,q:"Explain cloud computing architecture and service models."}
]
}
]};

let rating=0;

function $(id){return document.getElementById(id)}

function init(){
renderUnits();renderSubjects();renderImportant();renderProgress();updateStats();
setTimeout(()=>{let s=$("splash");if(s)s.remove()},2600);
if(localStorage.getItem("theme")==="light")document.body.classList.add("light");
}

document.addEventListener("DOMContentLoaded",init);

function updateStats(){
$("statSubjects").textContent=DATA.subjects.length;
$("statUnits").textContent=DATA.units.length;
$("statQuestions").textContent=DATA.units.reduce((n,u)=>n+u.questions.length,0);
$("statProgress").textContent=overallProgress()+"%";
}

function overallProgress(){
return Math.round(DATA.units.reduce((a,u,i)=>a+Number(localStorage.getItem("unitProgress"+i)||0),0)/DATA.units.length);
}

function renderUnits(){
$("unitCards").innerHTML=DATA.units.map((u,i)=>{
let p=Number(localStorage.getItem("unitProgress"+i)||0);
return `<div class="unit" onclick="openUnit(${i})">
<small>UNIT ${String(i+1).padStart(2,"0")}</small>
<h3>${u.title}</h3>
<p>📚 Notes • 📝 Questions • 🖼️ Diagram • 🎥 Video</p>
<div class="bar" style="width:${Math.max(3,p)}%"></div>
</div>`
}).join("");
}

function renderSubjects(){
$("subjects").innerHTML=DATA.subjects.map(s=>`
<div class="subject" onclick="openSubject('${s.id}')">
<div class="subject-icon">${s.icon}</div>
<h3>${s.name}</h3>
<p>${s.short} • ${s.units} Units</p>
<div class="prof">👨‍🏫 ${s.prof}</div>
</div>`).join("");
}

function renderImportant(){
let q=DATA.units.flatMap((u,ui)=>u.questions.map(x=>({...x,unit:ui+1})))
.filter(x=>x.m===10||x.m===5).slice(0,9);

$("importantQuestions").innerHTML=q.map(x=>`
<div class="question">
<div class="mark">⭐ ${x.m} MARKS • UNIT ${x.unit}</div>
<p>${x.q}</p>
</div>`).join("");
}

function renderProgress(){
$("progress").innerHTML=DATA.units.map((u,i)=>{
let p=Number(localStorage.getItem("unitProgress"+i)||0);
return `<div class="question" style="margin-bottom:10px">
<b>${u.title}</b>
<div style="height:6px;background:var(--panel2);margin-top:12px;border-radius:20px;overflow:hidden">
<span style="display:block;height:100%;width:${p}%;background:var(--white)"></span>
</div>
<p>${p}% completed</p>
</div>`
}).join("");
}

function openUnit(i){
let u=DATA.units[i];
localStorage.setItem("unitProgress"+i,Math.min(100,Number(localStorage.getItem("unitProgress"+i)||0)+10));
renderUnits();renderProgress();updateStats();

$("modalContent").innerHTML=`
<small>${u.title.toUpperCase()}</small>
<h2>${u.title} — Complete Study</h2>

<div class="resource-box">
<b>📚 NOTES & FULL THEORY</b>
<p>${u.theory}</p>
</div>

<div class="resource-box">
<b>📌 IMPORTANT TOPICS</b>
<p>${u.topics.map((x,n)=>`${n+1}. ${x}`).join("<br>")}</p>
</div>

<div class="resource-box">
<b>🖼️ RELATED DIAGRAM</b>
<div class="diagram">${u.diagram.replaceAll("\n","<br>")}</div>
<p style="margin-top:10px">
Diagram is a visual study aid. For a larger topic-specific image,
use the Google Images search button below.
</p>
</div>

<div class="modal-actions">
<button class="primary" onclick="googleDiagram('${encodeURIComponent(u.topics[0])}')">🔎 Google Diagram</button>
<button class="secondary" onclick="youtubeSearch('${encodeURIComponent(u.youtube)}')">▶ YouTube</button>
<button class="secondary" onclick="showUnitQuestions(${i})">📝 Questions</button>
</div>
`;
showModal();
}

function showUnitQuestions(i){
let u=DATA.units[i];
$("modalContent").innerHTML=`
<small>${u.title.toUpperCase()}</small>
<h2>📝 Question Bank</h2>
${u.questions.map((q,n)=>`
<div class="modal-question">
<div class="mark">Q${n+1} • ${q.m} MARKS</div>
<p><b>${q.q}</b></p>
<div class="modal-actions">
<button class="secondary" onclick="saveBookmark('${encodeURIComponent(q.q)}')">☆ Bookmark</button>
<button class="secondary" onclick="googleSearch('${encodeURIComponent(q.q)}')">🔎 Search</button>
</div>
</div>`).join("")}
`;
showModal();
}

function showNotes(){
$("modalContent").innerHTML=`
<small>STUDY MATERIAL</small><h2>📚 Complete Notes</h2>
<p>Select a unit to open its full theory, key points, diagram and learning resources.</p>
${DATA.units.map((u,i)=>`
<div class="modal-question">
<b>${u.title}</b>
<p>${u.topics.join(" • ")}</p>
<button class="secondary" onclick="openUnit(${i})">Open Notes →</button>
</div>`).join("")}`;
showModal();
}

function showQuestions(mark){
let all=DATA.units.flatMap((u,ui)=>u.questions.map(q=>({...q,unit:ui+1})));
if(mark)all=all.filter(q=>q.m===mark);
$("modalContent").innerHTML=`
<small>QUESTION BANK</small>
<h2>📝 ${mark?mark+" Marks ":""}Questions</h2>
<div class="modal-actions">
<button class="secondary" onclick="showQuestions(2)">2 Marks</button>
<button class="secondary" onclick="showQuestions(5)">5 Marks</button>
<button class="secondary" onclick="showQuestions(10)">10 Marks</button>
<button class="secondary" onclick="showQuestions()">All</button>
</div>
${all.map((q,i)=>`
<div class="modal-question">
<div class="mark">Q${i+1} • ${q.m} MARKS • UNIT ${q.unit}</div>
<p><b>${q.q}</b></p>
<div class="modal-actions">
<button class="secondary" onclick="saveBookmark('${encodeURIComponent(q.q)}')">☆ Save</button>
<button class="secondary" onclick="googleSearch('${encodeURIComponent(q.q)}')">🔎 Explain</button>
</div>
</div>`).join("")}`;
showModal();
}

function showMCQ(){
let pool=DATA.units.flatMap(u=>u.questions);
let q=pool[Math.floor(Math.random()*pool.length)];
$("modalContent").innerHTML=`
<small>MCQ ARENA</small><h2>🧪 Quick Practice</h2>
<div class="resource-box">
<p><b>Which topic is related to this question?</b></p>
<p>${q.q}</p>
<br>
<label><input type="radio" name="mcq"> Networking</label><br><br>
<label><input type="radio" name="mcq"> Programming</label><br><br>
<label><input type="radio" name="mcq"> Design</label><br><br>
<label><input type="radio" name="mcq"> None</label>
<br><br>
<button class="primary" onclick="mcqResult()">Submit Answer</button>
</div>`;
showModal();
}

function mcqResult(){
$("modalContent").innerHTML=`
<h2>✓ Practice Submitted</h2>
<p>Use the notes and explanations to verify your answer and continue practising.</p>
<br><button class="primary" onclick="showMCQ()">Next Question →</button>`;
}

function generatePaper(){
let all=DATA.units.flatMap((u,ui)=>u.questions.map(q=>({...q,unit:ui+1})))
.sort(()=>Math.random()-.5);
let selected=all.slice(0,8);
$("modalContent").innerHTML=`
<small>EXAM SIMULATOR</small>
<h2>🎲 Random Question Paper</h2>
<p>Every generation creates a different combination from the question bank.</p>
${selected.map((q,i)=>`
<div class="modal-question">
<div class="mark">Q${i+1} • ${q.m} MARKS • UNIT ${q.unit}</div>
<p>${q.q}</p>
</div>`).join("")}
<br><button class="primary" onclick="generatePaper()">⟳ Generate Again</button>`;
showModal();
}

function openSubject(id){
let s=DATA.subjects.find(x=>x.id===id);
$("modalContent").innerHTML=`
<small>SUBJECT</small><h2>${s.icon} ${s.name}</h2>
<p>👨‍🏫 ${s.prof}</p>
${DATA.units.map((u,i)=>`
<div class="modal-question">
<b>${u.title}</b><p>${u.topics.join(" • ")}</p>
<button class="secondary" onclick="openUnit(${i})">Open →</button>
</div>`).join("")}`;
showModal();
}

function openOtherSubjects(){
$("modalContent").innerHTML=`
<small>FUTURE SUBJECTS</small><h2>＋ Other Subjects</h2>
<p>Select a subject to add it to your study library.</p>
${DATA.otherSubjects.map((s,i)=>`
<div class="modal-question">
<b>${s}</b>
<p>Ready for syllabus, notes, questions, MCQs and resources.</p>
<button class="secondary" onclick="addSubject(${i})">＋ Add Subject</button>
</div>`).join("")}`;
showModal();
}

function addSubject(i){
let name=DATA.otherSubjects[i];
if(!DATA.subjects.some(s=>s.name===name)){
DATA.subjects.push({
id:"subject"+Date.now(),name,short:name.substring(0,5).toUpperCase(),
icon:"📘",prof:"Subject Professor",units:6
});
localStorage.setItem("subjects",JSON.stringify(DATA.subjects));
renderSubjects();updateStats();
}
openOtherSubjects();
}

function openResources(){
let u=DATA.units[0];
$("modalContent").innerHTML=`
<small>LEARNING RESOURCES</small>
<h2>🔎 Diagrams & Videos</h2>
<p>Choose a topic to search.</p>
${DATA.units.map((x,i)=>`
<div class="resource-box">
<b>${x.title}</b>
<div class="modal-actions">
<button class="secondary" onclick="googleDiagram('${encodeURIComponent(x.topics[0])}')">🖼️ Diagram</button>
<button class="secondary" onclick="youtubeSearch('${encodeURIComponent(x.youtube)}')">▶ YouTube</button>
</div>
</div>`).join("")}`;
showModal();
}

function googleSearch(q){
window.open("https://www.google.com/search?q="+q,"_blank");
}
function googleDiagram(q){
window.open("https://www.google.com/search?tbm=isch&q="+q+" diagram","_blank");
}
function youtubeSearch(q){
window.open("https://www.youtube.com/results?search_query="+q,"_blank");
}

function saveBookmark(q){
let arr=JSON.parse(localStorage.getItem("bookmarks")||"[]");
q=decodeURIComponent(q);
if(!arr.includes(q))arr.push(q);
localStorage.setItem("bookmarks",JSON.stringify(arr));
alert("✓ Saved to bookmarks");
}

function showBookmarks(){
let arr=JSON.parse(localStorage.getItem("bookmarks")||"[]");
$("modalContent").innerHTML=`
<small>SAVED</small><h2>☆ My Bookmarks</h2>
${arr.length?arr.map(q=>`<div class="modal-question"><p>${q}</p></div>`).join("")
:"<p>No saved questions yet.</p>"}`;
showModal();
}

function showProgress(){
renderProgress();
$("modalContent").innerHTML=`
<small>YOUR JOURNEY</small><h2>📊 My Progress</h2>
<p>Progress is stored locally on this device.</p>
${$("progress").innerHTML}`;
showModal();
}

function openProfile(){
let p=JSON.parse(localStorage.getItem("profile")||'{"name":"Mayur Rathod","course":"CSD","bio":"CSD StudyHub Creator"}');
$("modalContent").innerHTML=`
<small>PROFILE</small><h2>👤 My Profile</h2>
<div class="profile-form">
<input id="profileName" value="${p.name}">
<input id="profileCourse" value="${p.course}">
<input id="profileBio" value="${p.bio}">
<button class="primary" onclick="saveProfile()">Save Profile</button>
</div>`;
showModal();
}

function editProfile(e){
e.preventDefault();openProfile();
}

function saveProfile(){
let p={
name:$("profileName").value||"Student",
course:$("profileCourse").value||"CSD",
bio:$("profileBio").value||"Student"
};
localStorage.setItem("profile",JSON.stringify(p));
alert("✓ Profile updated");
closeModal();
}

function showFeedback(){
document.querySelector(".feedback").scrollIntoView({behavior:"smooth"});
}

function rate(n){
rating=n;
document.querySelectorAll("#stars button").forEach((b,i)=>b.classList.toggle("active",i<n));
}

function saveFeedback(){
if(!rating){alert("Please select a rating ⭐");return}
localStorage.setItem("feedback",JSON.stringify({
rating,text:$("feedbackText").value,date:new Date().toISOString()
}));
$("feedbackMsg").textContent="✓ Thank you! Feedback saved.";
}

function toggleTheme(){
document.body.classList.toggle("light");
localStorage.setItem("theme",document.body.classList.contains("light")?"light":"dark");
}
function toggleEco(){
document.body.classList.toggle("eco");
localStorage.setItem("eco",document.body.classList.contains("eco")?"1":"0");
}
function showSubjects(){
document.querySelector(".subject-grid").scrollIntoView({behavior:"smooth"});
}
function goHome(){
window.scrollTo({top:0,behavior:"smooth"});
}
function continueLearning(){
openUnit(0);
}
function showModal(){
$("modal").classList.add("show");
}
function closeModal(){
$("modal").classList.remove("show");
}
$("modal").addEventListener("click",e=>{
if(e.target===$("modal"))closeModal();
});

$("search").addEventListener("input",e=>{
let q=e.target.value.toLowerCase().trim();
if(!q){renderSubjects();return}
let results=DATA.units.flatMap((u,ui)=>[
...u.topics.map(t=>({type:"topic",unit:ui,text:t})),
...u.questions.map(x=>({type:"question",unit:ui,text:x.q,mark:x.m}))
]).filter(x=>x.text.toLowerCase().includes(q));

$("subjects").innerHTML=results.length?results.map(x=>`
<div class="subject" onclick="${x.type==="topic"?`openUnit(${x.unit})`:`showQuestions(${x.mark})`}">
<div class="subject-icon">🔎</div>
<h3>${x.text}</h3>
<p>Unit ${x.unit+1} ${x.mark?`• ${x.mark} Marks`:"• Topic"}</p>
</div>`).join(""):`<div class="question"><h3>No results found</h3><p>Try another keyword.</p></div>`;
});
