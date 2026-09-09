const DATA={
subjects:[{
id:"cncc",
name:"Computer Networks & Cloud Computing",
short:"CNCC",
icon:"🌐",
prof:"Professor Kiran Chaudhari",
units:6
}],
units:[
{
title:"Unit I",
subtitle:"Computer Network Fundamentals",
topics:[
{
name:"Introduction to Computer Networks",
theory:`A computer network is a collection of interconnected computing devices that communicate with each other and share data, hardware, software and services.

The main purpose of networking is to allow devices to exchange information efficiently. A network may contain computers, mobile devices, servers, printers, routers, switches and wireless access points.

Communication takes place according to predefined rules called protocols. Examples include TCP/IP, HTTP, DNS and DHCP.`,
points:[
"Communication between devices",
"Resource sharing",
"Data and information sharing",
"Centralized management",
"Internet connectivity",
"Improved reliability and availability"
],
example:"A college computer laboratory connected through a switch is an example of a computer network.",
diagram:"Computer A  →  Switch  →  Computer B",
youtube:"computer network introduction"
},
{
name:"Components of a Computer Network",
theory:`A computer network requires hardware and software components to communicate successfully.

Network devices provide connectivity, transmission and control. End devices generate or receive data, while networking media carry the signals.

Common components include hosts, servers, network interface cards, switches, routers, access points, transmission media and protocols.`,
points:[
"End devices / hosts",
"Servers",
"Network Interface Card (NIC)",
"Switch",
"Router",
"Wireless Access Point",
"Transmission Media",
"Networking Protocols"
],
example:"When a laptop connects to Wi-Fi, its wireless network adapter communicates with an access point.",
diagram:"Laptop → Wi-Fi AP → Router → Internet",
youtube:"computer network components"
},
{
name:"Types of Computer Networks",
theory:`Networks can be classified according to their geographical coverage, ownership and purpose.

PAN covers a very small personal area. LAN normally covers a room, building or campus. MAN can cover a city or metropolitan area. WAN covers large geographical areas and can connect networks across countries and continents.`,
points:[
"PAN – Personal Area Network",
"LAN – Local Area Network",
"MAN – Metropolitan Area Network",
"WAN – Wide Area Network"
],
example:"Bluetooth between a phone and earbuds is PAN, while a college laboratory network is LAN.",
diagram:"PAN → LAN → MAN → WAN",
youtube:"PAN LAN MAN WAN explained"
},
{
name:"Network Topologies",
theory:`Network topology describes the physical or logical arrangement of devices and communication links in a network.

In bus topology, devices share a common backbone. In star topology, devices connect to a central device. Ring topology forms a closed loop. Mesh topology provides multiple connections between devices. Tree topology uses a hierarchical structure.`,
points:[
"Bus topology",
"Star topology",
"Ring topology",
"Mesh topology",
"Tree topology",
"Hybrid topology"
],
example:"Modern Ethernet LANs commonly use a star-like arrangement with a central switch.",
diagram:"Star: PC ↘\nPC → SWITCH ← PC\n      ↗ PC",
youtube:"network topologies diagram"
},
{
name:"Network Protocols",
theory:`A protocol is a set of rules that controls how devices communicate.

Protocols define data format, addressing, transmission behaviour, error handling and communication procedures. Without common protocols, different devices would not be able to communicate reliably.`,
points:[
"TCP – reliable transport",
"UDP – connectionless transport",
"IP – logical addressing",
"HTTP – web communication",
"DNS – name resolution",
"DHCP – automatic network configuration"
],
example:"When a browser opens a website, multiple protocols work together to complete the communication.",
diagram:"Application → Transport → Internet → Network Access",
youtube:"network protocols explained"
},
{
name:"Advantages of Computer Networks",
theory:`Computer networks provide several advantages for organizations, educational institutions and individual users.

Networks make it possible to share resources, communicate quickly, access centralized services and collaborate on common information.`,
points:[
"Resource sharing",
"Fast communication",
"File sharing",
"Hardware sharing",
"Centralized data",
"Remote access",
"Better collaboration",
"Cost reduction"
],
example:"Several students can use the same network printer instead of requiring one printer for every computer.",
diagram:"Users → Network → Shared Resources",
youtube:"advantages of computer networking"
}
],
questions:[
{m:2,q:"Define a computer network."},
{m:2,q:"What is a network protocol?"},
{m:2,q:"Write any two advantages of computer networks."},
{m:5,q:"Explain the components of a computer network."},
{m:5,q:"Explain PAN, LAN, MAN and WAN."},
{m:5,q:"Explain different network topologies."},
{m:10,q:"Explain computer networks, their components, types and advantages in detail."},
{m:10,q:"Explain different network topologies with suitable diagrams."}
]
},
{
title:"Unit II",
subtitle:"Network Models",
topics:[],
questions:[]
},
{
title:"Unit III",
subtitle:"Transport Layer and Protocols",
topics:[],
questions:[]
},
{
title:"Unit IV",
subtitle:"IP Addressing",
topics:[],
questions:[]
},
{
title:"Unit V",
subtitle:"Network Services",
topics:[],
questions:[]
},
{
title:"Unit VI",
subtitle:"Cloud Computing",
topics:[],
questions:[]
}
]};

let rating=0;

function $(id){return document.getElementById(id)}

function init(){
renderUnits();
renderSubjects();
renderImportant();
renderProgress();
updateStats();
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
<p>${u.subtitle}</p>
<div class="bar" style="width:${Math.max(3,p)}%"></div>
</div>`;
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
.filter(x=>x.m===10||x.m===5);

$("importantQuestions").innerHTML=q.slice(0,9).map(x=>`
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
</div>`;
}).join("");
}

function openUnit(i){
let u=DATA.units[i];

if(!u.topics.length){
$("modalContent").innerHTML=`
<small>${u.title.toUpperCase()}</small>
<h2>${u.title}</h2>
<div class="resource-box">
<h3>🚧 Coming Soon</h3>
<p>${u.subtitle} content will be added from the official college syllabus.</p>
</div>`;
showModal();
return;
}

let p=Math.min(100,Number(localStorage.getItem("unitProgress"+i)||0)+5);
localStorage.setItem("unitProgress"+i,p);

$("modalContent").innerHTML=`
<small>${u.title.toUpperCase()}</small>
<h2>📚 ${u.title} — Complete Notes</h2>
<p>${u.subtitle}</p>

<div class="resource-box">
<b>📖 UNIT OVERVIEW</b>
<p>This unit is organised topic-by-topic. Read each topic, understand the diagram, revise the key points and then practise the question bank.</p>
</div>

<div class="topic-index">
<b>📌 Topics in this Unit</b>
<p>${u.topics.map((x,n)=>`${n+1}. ${x.name}`).join("<br>")}</p>
</div>

${u.topics.map((t,n)=>`
<article class="resource-box study-topic">
<div class="mark">TOPIC ${n+1}</div>
<h2>${t.name}</h2>

<h3>📖 Detailed Explanation</h3>
<p>${t.theory}</p>

<h3>⭐ Key Points</h3>
<ul>
${t.points.map(x=>`<li>${x}</li>`).join("")}
</ul>

<h3>🧩 Example</h3>
<p>${t.example}</p>

<h3>🖼️ Diagram</h3>
<div class="diagram">${t.diagram.replaceAll("\\n","<br>")}</div>

<div class="modal-actions">
<button class="secondary" onclick="googleDiagram('${encodeURIComponent(t.name)}')">🔎 Google Diagram</button>
<button class="secondary" onclick="googleSearch('${encodeURIComponent(t.name+" detailed explanation")}')">📖 More Explanation</button>
<button class="secondary" onclick="youtubeSearch('${encodeURIComponent(t.youtube)}')">▶ YouTube</button>
</div>

<h3>🎯 Exam Focus</h3>
<p>Remember the definition, important terms, working concept, advantages and diagram wherever applicable.</p>
</article>
`).join("")}

<div class="resource-box">
<h2>📝 Unit ${i+1} Question Bank</h2>
${u.questions.map((q,n)=>`
<div class="modal-question">
<div class="mark">Q${n+1} • ${q.m} MARKS</div>
<p><b>${q.q}</b></p>
<div class="modal-actions">
<button class="secondary" onclick="saveBookmark('${encodeURIComponent(q.q)}')">☆ Save</button>
<button class="secondary" onclick="googleSearch('${encodeURIComponent(q.q)}')">🔎 Explain</button>
</div>
</div>`).join("")}
</div>

<div class="resource-box">
<h2>🎲 Practice this Unit</h2>
<p>Generate a fresh combination of Unit ${i+1} questions for revision.</p>
<button class="primary" onclick="unitPaper(${i})">Generate Unit Paper</button>
</div>
`;

renderUnits();
renderProgress();
updateStats();
showModal();
}

function unitPaper(i){
let q=[...DATA.units[i].questions].sort(()=>Math.random()-.5);
$("modalContent").innerHTML=`
<small>UNIT ${i+1} EXAM</small>
<h2>🎲 Random Unit Paper</h2>
<p>Fresh question combination generated from this unit.</p>
${q.map((x,n)=>`
<div class="modal-question">
<div class="mark">Q${n+1} • ${x.m} MARKS</div>
<p>${x.q}</p>
</div>`).join("")}
<br>
<button class="primary" onclick="unitPaper(${i})">⟳ Generate Again</button>`;
}

function showNotes(){
$("modalContent").innerHTML=`
<small>NOTES LIBRARY</small>
<h2>📚 Complete Notes</h2>
<p>Select one Unit to open all its topics together.</p>
${DATA.units.map((u,i)=>`
<div class="modal-question">
<b>${u.title}</b>
<p>${u.subtitle}</p>
<button class="secondary" onclick="openUnit(${i})">Open Complete Notes →</button>
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
<button class="secondary" onclick="saveBookmark('${encodeURIComponent(q.q)}')">☆ Save</button>
<button class="secondary" onclick="googleSearch('${encodeURIComponent(q.q)}')">🔎 Explain</button>
</div>`).join("")}`;
showModal();
}

function showMCQ(){
let u=DATA.units.find(x=>x.questions.length);
if(!u)return;
let q=u.questions[Math.floor(Math.random()*u.questions.length)];
$("modalContent").innerHTML=`
<small>MCQ ARENA</small>
<h2>🧪 Quick Practice</h2>
<div class="resource-box">
<p><b>${q.q}</b></p>
<br>
<label><input type="radio" name="mcq"> Networking</label><br><br>
<label><input type="radio" name="mcq"> Programming</label><br><br>
<label><input type="radio" name="mcq"> Database</label><br><br>
<label><input type="radio" name="mcq"> None</label><br><br>
<button class="primary" onclick="mcqResult()">Submit</button>
</div>`;
showModal();
}

function mcqResult(){
$("modalContent").innerHTML=`
<h2>✓ Answer Submitted</h2>
<p>Revise the related topic from Notes and practise again.</p>
<button class="primary" onclick="showMCQ()">Next Question →</button>`;
}

function generatePaper(){
let all=DATA.units.flatMap((u,ui)=>u.questions.map(q=>({...q,unit:ui+1})))
.sort(()=>Math.random()-.5);
let selected=all.slice(0,8);

$("modalContent").innerHTML=`
<small>EXAM SIMULATOR</small>
<h2>🎲 Random Question Paper</h2>
${selected.map((q,i)=>`
<div class="modal-question">
<div class="mark">Q${i+1} • ${q.m} MARKS • UNIT ${q.unit}</div>
<p>${q.q}</p>
</div>`).join("")}
<button class="primary" onclick="generatePaper()">⟳ Generate Again</button>`;
showModal();
}

function openSubject(id){
let s=DATA.subjects.find(x=>x.id===id);
$("modalContent").innerHTML=`
<small>SUBJECT</small>
<h2>${s.icon} ${s.name}</h2>
<p>👨‍🏫 ${s.prof}</p>
${DATA.units.map((u,i)=>`
<div class="modal-question">
<b>${u.title}</b>
<p>${u.subtitle}</p>
<button class="secondary" onclick="openUnit(${i})">Open →</button>
</div>`).join("")}`;
showModal();
}

function openOtherSubjects(){
let subjects=["Software Engineering","Database Management System","Computer Graphics","Internet of Things","Artificial Intelligence","Web Technology","Operating System"];

$("modalContent").innerHTML=`
<small>SUBJECT LIBRARY</small>
<h2>＋ Other Subjects</h2>
<p>Add subjects now and their syllabus can be filled later.</p>
${subjects.map((s,i)=>`
<div class="modal-question">
<b>📘 ${s}</b>
<button class="secondary" onclick="alert('Subject added to your future list ✓')">＋ Add</button>
</div>`).join("")}`;
showModal();
}

function openResources(){
$("modalContent").innerHTML=`
<small>LEARNING RESOURCES</small>
<h2>🖼️ Diagrams & Videos</h2>
${DATA.units[0].topics.map(t=>`
<div class="resource-box">
<b>${t.name}</b>
<div class="modal-actions">
<button class="secondary" onclick="googleDiagram('${encodeURIComponent(t.name)}')">🖼️ Diagram</button>
<button class="secondary" onclick="youtubeSearch('${encodeURIComponent(t.youtube)}')">▶ YouTube</button>
</div>
</div>`).join("")}`;
showModal();
}

function googleSearch(q){
window.open("https://www.google.com/search?q="+q,"_blank");
}

function googleDiagram(q){
window.open("https://www.google.com/search?tbm=isch&q="+q+"+diagram","_blank");
}

function youtubeSearch(q){
window.open("https://www.youtube.com/results?search_query="+q,"_blank");
}

function saveBookmark(q){
let arr=JSON.parse(localStorage.getItem("bookmarks")||"[]");
q=decodeURIComponent(q);
if(!arr.includes(q))arr.push(q);
localStorage.setItem("bookmarks",JSON.stringify(arr));
alert("✓ Saved");
}

function showBookmarks(){
let arr=JSON.parse(localStorage.getItem("bookmarks")||"[]");
$("modalContent").innerHTML=`
<small>SAVED QUESTIONS</small>
<h2>☆ Bookmarks</h2>
${arr.length?arr.map(q=>`<div class="modal-question"><p>${q}</p></div>`).join(""):"<p>No bookmarks yet.</p>"}`;
showModal();
}

function showProgress(){
renderProgress();
$("modalContent").innerHTML=`<small>PROGRESS</small><h2>📊 My Progress</h2>${$("progress").innerHTML}`;
showModal();
}

function openProfile(){
let p=JSON.parse(localStorage.getItem("profile")||'{"name":"Mayur Rathod","course":"CSD","bio":"CSD StudyHub Creator"}');
$("modalContent").innerHTML=`
<small>PROFILE</small>
<h2>👤 Edit Profile</h2>
<div class="profile-form">
<input id="profileName" value="${p.name}">
<input id="profileCourse" value="${p.course}">
<input id="profileBio" value="${p.bio}">
<button class="primary" onclick="saveProfile()">Save Profile</button>
</div>`;
showModal();
}

function editProfile(e){e.preventDefault();openProfile()}

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
if(!rating){alert("Please select rating ⭐");return}
localStorage.setItem("feedback",JSON.stringify({
rating,
text:$("feedbackText").value,
date:new Date().toISOString()
}));
$("feedbackMsg").textContent="✓ Feedback saved on this device.";
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

function continueLearning(){openUnit(0)}

function showModal(){ $("modal").classList.add("show") }
function closeModal(){ $("modal").classList.remove("show") }

$("modal").addEventListener("click",e=>{
if(e.target===$("modal"))closeModal();
});

$("search").addEventListener("input",e=>{
let q=e.target.value.toLowerCase().trim();
if(!q){renderSubjects();return}

let results=DATA.units.flatMap((u,ui)=>[
...u.topics.map(t=>({unit:ui,text:t.name,type:"topic"})),
...u.questions.map(x=>({unit:ui,text:x.q,mark:x.m,type:"question"}))
]).filter(x=>x.text.toLowerCase().includes(q));

$("subjects").innerHTML=results.length?
results.map(x=>`
<div class="subject" onclick="${x.type==="topic"?`openUnit(${x.unit})`:`showQuestions(${x.mark})`}">
<div class="subject-icon">🔎</div>
<h3>${x.text}</h3>
<p>Unit ${x.unit+1} ${x.mark?`• ${x.mark} Marks`:"• Topic"}</p>
</div>`).join("")
:`<div class="question"><h3>No results</h3><p>Try another keyword.</p></div>`;
});
