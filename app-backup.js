/* =====================================================
   CNCC STUDYHUB
   CSD FINAL YEAR EXAM PORTAL
===================================================== */

const units = [

{
id:1,
icon:"🌐",
title:"Unit I — Computer Networks",
topics:[
{
title:"1. Introduction to Computer Networks",
text:`A computer network is a collection of interconnected devices that communicate
with each other to share data, hardware, software and services.

The main purpose of networking is communication and resource sharing.
Examples include Internet, college LAN, Wi-Fi networks and mobile networks.

Important characteristics:
• Performance
• Reliability
• Security
• Scalability
• Resource sharing
• Communication`
},
{
title:"2. Types of Networks",
text:`LAN — Local Area Network covers a small geographical area such as a laboratory.

MAN — Metropolitan Area Network covers a city or large campus.

WAN — Wide Area Network covers large geographical areas. Internet is the best example.

PAN — Personal Area Network is used around an individual, such as Bluetooth devices.`
},
{
title:"3. Network Topologies",
text:`Topology describes how devices are physically or logically connected.

Star topology uses a central switch/hub.
Bus topology uses a common backbone cable.
Ring topology connects devices in a circular form.
Mesh topology provides multiple paths between devices.
Tree topology combines characteristics of hierarchical networks.`
},
{
title:"4. Network Models",
text:`Network models divide communication into layers.

OSI model contains seven layers:
Application, Presentation, Session, Transport, Network, Data Link and Physical.

TCP/IP model commonly contains Application, Transport, Internet and Network Access layers.

Layering makes networking easier to design, troubleshoot and standardize.`
}
]
},

{
id:2,
icon:"🔌",
title:"Unit II — Data Communication",
topics:[
{
title:"1. Data Communication",
text:`Data communication is the exchange of data between two or more devices through
a communication medium.

The basic components are:
Sender → Message → Transmission Medium → Receiver.

A protocol defines rules for communication between devices.`
},
{
title:"2. Transmission Media",
text:`Guided media uses a physical path.

Twisted Pair: inexpensive and widely used.
Coaxial Cable: better shielding than twisted pair.
Optical Fiber: uses light and provides high bandwidth.

Unguided media transmits through air:
Radio waves, microwaves and infrared.`
},
{
title:"3. Switching",
text:`Switching determines how data travels through a network.

Circuit switching establishes a dedicated path.
Packet switching divides data into packets and is widely used by computer networks.
Message switching stores and forwards complete messages.`
},
{
title:"4. Multiplexing",
text:`Multiplexing allows multiple signals to share a communication channel.

FDM divides frequency ranges.
TDM divides time slots.
WDM is commonly used with optical fiber and different wavelengths of light.`
}
]
},

{
id:3,
icon:"🚦",
title:"Unit III — Network Layer",
topics:[
{
title:"1. Network Layer",
text:`The network layer is responsible for logical addressing, routing and forwarding
packets from source network to destination network.

Routers primarily operate at this layer.

Major concepts include IP addressing, routing, subnetting and packet forwarding.`
},
{
title:"2. IP Addressing",
text:`An IP address uniquely identifies an interface in an IP network.

IPv4 uses 32-bit addresses.
IPv6 uses 128-bit addresses.

IPv4 example: 192.168.1.10

IPv6 was introduced to provide a much larger address space and additional capabilities.`
},
{
title:"3. Routing",
text:`Routing determines the best path for packets.

Static routing is manually configured.
Dynamic routing uses routing protocols.

Routing decisions may consider hop count, bandwidth, delay, cost and other metrics.`
}
]
},

{
id:4,
icon:"🚚",
title:"Unit IV — Transport Layer",
topics:[
{
title:"1. Transport Layer",
text:`The transport layer provides communication between application processes.

Important responsibilities:
• Segmentation
• Reassembly
• Flow control
• Error control
• Multiplexing
• Reliable delivery when required`
},
{
title:"2. TCP",
text:`TCP is connection-oriented and provides reliable byte-stream communication.

Important TCP features:
• Connection establishment
• Sequence numbers
• Acknowledgements
• Retransmission
• Flow control
• Congestion control`
},
{
title:"3. UDP",
text:`UDP is connectionless and has lower overhead than TCP.

It does not provide TCP-style reliability, ordering or retransmission.

UDP is useful where speed and low overhead are important, such as real-time applications.`
}
]
},

{
id:5,
icon:"🔐",
title:"Unit V — Application Layer",
topics:[
{
title:"1. DNS",
text:`DNS stands for Domain Name System.

It translates human-readable domain names into IP addresses.

Example:
www.example.com → IP address

DNS makes Internet resources easier to access without remembering numerical addresses.`
},
{
title:"2. HTTP and HTTPS",
text:`HTTP is used for communication between web browsers and web servers.

HTTPS adds encryption and authentication using TLS.

HTTPS is preferred for login pages, payments and sensitive communication.`
},
{
title:"3. Email Protocols",
text:`SMTP is mainly used to send email.

POP3 is used to download email messages.

IMAP allows email to remain synchronized with the mail server and supports access from multiple devices.`
}
]
},

{
id:6,
icon:"☁️",
title:"Unit VI — Modern Networking",
topics:[
{
title:"1. Wireless Networks",
text:`Wireless networking allows devices to communicate without physical cables.

Wi-Fi is commonly used for local wireless connectivity.
Bluetooth is designed for short-range personal communication.
Mobile networks provide wide-area wireless connectivity.`
},
{
title:"2. IoT",
text:`Internet of Things connects physical devices to networks so they can collect,
exchange and sometimes process data.

Examples:
Smart home devices, industrial sensors, smart agriculture and connected vehicles.`
},
{
title:"3. Network Security",
text:`Network security protects confidentiality, integrity and availability.

Important mechanisms include authentication, authorization, encryption,
firewalls, secure protocols and intrusion detection systems.`
}
]
}

];


/* =====================================================
   QUESTION BANK
===================================================== */

const questions = [

["2","What is a computer network?","A computer network is a collection of interconnected devices that communicate and share data or resources."],

["2","Define LAN.","LAN is a network covering a relatively small geographical area such as a room, building or laboratory."],

["2","What is WAN?","WAN is a Wide Area Network that connects networks over large geographical areas."],

["2","What is network topology?","Network topology describes the physical or logical arrangement of devices and links in a network."],

["5","Explain Star topology.","In Star topology, every node is connected to a central device such as a switch. If one cable fails, other nodes normally continue operating. It is easy to manage and expand, but failure of the central device can affect the entire network."],

["5","Explain OSI model.","The OSI model divides network communication into seven layers: Physical, Data Link, Network, Transport, Session, Presentation and Application. Each layer performs specific responsibilities and communicates with adjacent layers."],

["5","Explain TCP and UDP.","TCP is connection-oriented and reliable. It provides sequencing, acknowledgement, retransmission and flow control. UDP is connectionless and has lower overhead but does not provide TCP-level reliability."],

["5","Explain DNS.","DNS converts domain names into IP addresses. A user can type a domain name instead of remembering the numerical IP address. DNS uses a distributed hierarchical naming system."],

["10","Explain different network topologies in detail.","Major topologies include Bus, Star, Ring, Mesh and Tree. Bus uses a common backbone. Star uses a central device. Ring forms a circular path. Mesh provides multiple links. Tree uses hierarchical connectivity. Each topology differs in cost, reliability, scalability and fault tolerance."],

["10","Explain OSI reference model with functions of all layers.","Physical transmits raw bits. Data Link provides framing and link-level error handling. Network provides logical addressing and routing. Transport provides end-to-end delivery. Session manages sessions. Presentation handles data representation, encryption and compression. Application provides network services to applications."],

["10","Compare TCP and UDP.","TCP provides reliable connection-oriented communication using sequence numbers, acknowledgements, retransmission and flow/congestion control. UDP is connectionless, lightweight and faster in many situations but does not guarantee delivery or ordering. TCP is suitable for reliability-sensitive applications while UDP is useful for low-latency communication."],

["10","Explain IPv4 and IPv6.","IPv4 uses 32-bit addressing and provides about 4.3 billion address combinations. IPv6 uses 128-bit addresses, providing an enormously larger address space. IPv6 also provides features such as simplified header structure and improved support for modern IP networking."]
];


/* =====================================================
   MCQs
===================================================== */

const mcqs=[

["Which device commonly connects multiple LAN devices?","Switch","Router","Modem","Repeater"],
["How many layers are in OSI model?","7","4","5","6"],
["Which protocol is connection-oriented?","TCP","UDP","IP","DNS"],
["Which protocol translates domain names into IP addresses?","DNS","FTP","SMTP","ARP"],
["IPv4 address size is:","32 bits","64 bits","128 bits","16 bits"],
["IPv6 address size is:","128 bits","32 bits","64 bits","256 bits"],
["Which is a transport layer protocol?","TCP","HTTP","DNS","Ethernet"],
["Which topology uses a central device?","Star","Ring","Bus","Mesh"],
["Which protocol is mainly used to send email?","SMTP","POP3","DNS","HTTP"],
["Which technology commonly uses optical fiber?","WDM","TDM","FDM","None"],
["UDP is:","Connectionless","Connection-oriented","Circuit-switched","Encrypted by default"],
["HTTPS mainly adds:","TLS security","DNS","IP routing","Compression only"]
];


/* =====================================================
   NAVIGATION
===================================================== */

function showPage(id){

document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));

const page=document.getElementById(id);

if(page) page.classList.add("active");

window.scrollTo({top:0,behavior:"smooth"});

if(id==="questions") renderQuestions();
if(id==="mcq") renderMCQ();
if(id==="progress") updateProgress();
}


/* =====================================================
   UNITS
===================================================== */

function renderUnits(){

const grid=document.getElementById("unitGrid");

grid.innerHTML=units.map(u=>`

<div class="unitCard" onclick="openUnit(${u.id})">

<div class="unitIcon">${u.icon}</div>

<h3>${u.title}</h3>

<p class="muted">${u.topics.length} major topics • Notes • Diagrams • Exam points</p>

<br>

<span class="badge">OPEN UNIT →</span>

</div>

`).join("");

}


function openUnit(id){

const u=units.find(x=>x.id===id);

if(!u)return;

let html=`

<button class="secondary" onclick="showPage('units')">← Back to Units</button>

<h2 class="pageTitle">${u.icon} ${u.title}</h2>

<p class="muted">
Detailed exam-oriented explanation with important points and visual diagrams.
</p>
`;

u.topics.forEach((t,i)=>{

const google=encodeURIComponent(
t.title+" computer networks diagram"
);

html+=`

<div class="topicCard topic">

<h3>${i+1}. ${t.title}</h3>

<p>${t.text.replace(/\n/g,"<br>")}</p>

<div class="diagram">

<strong>📐 Concept Diagram</strong>

<div class="diagramBox">

<div class="node">SOURCE</div>
<div class="arrow">→</div>
<div class="node">${t.title.split(" ").slice(0,3).join(" ")}</div>
<div class="arrow">→</div>
<div class="node">DESTINATION</div>

</div>

<a target="_blank"
href="https://www.google.com/search?tbm=isch&q=${google}">
🔎 View Related Diagram Images
</a>

</div>

<h4>⭐ Exam Key Points</h4>

<ul>
<li>Understand the definition and purpose.</li>
<li>Remember important terminology.</li>
<li>Draw the diagram wherever applicable.</li>
<li>Write advantages and limitations when asked.</li>
<li>Add a practical example for long answers.</li>
</ul>

<br>

<button class="primary"
onclick="markTopic('${u.id}-${i}')">
✓ Mark Topic Complete
</button>

</div>
`;

});

document.getElementById("unitContent").innerHTML=html;

showPage("unitDetail");

}


/* =====================================================
   QUESTIONS
===================================================== */

function renderQuestions(filter="all"){

const list=document.getElementById("questionList");

const data=filter==="all"
?questions
:questions.filter(q=>Number(q[0])===Number(filter));

list.innerHTML=data.map((q,i)=>`

<div class="question">

<span class="marks">${q[0]} MARKS</span>

<h3>${i+1}. ${q[1]}</h3>

<button class="qbtn"
onclick="toggleAnswer(this)">
Show Answer
</button>

<div class="answer">

<strong>Answer:</strong><br>

${q[2]}

<br><br>

<b>Writing Tip:</b>
For 5/10 marks, write definition + explanation + key points +
example/diagram wherever applicable.

</div>

</div>

`).join("");

}


function filterQuestions(mark){

renderQuestions(mark);

}


function toggleAnswer(btn){

const answer=btn.nextElementSibling;

answer.classList.toggle("showAnswer");

btn.innerText=
answer.classList.contains("showAnswer")
?"Hide Answer"
:"Show Answer";

}


/* =====================================================
   MCQ
===================================================== */

function renderMCQ(){

const box=document.getElementById("mcqBox");

box.innerHTML=mcqs.map((m,i)=>`

<div class="mcqCard">

<h3>${i+1}. ${m[0]}</h3>

${m.slice(1).map((op,j)=>`

<label class="option"
onclick="checkMCQ(this,${j},${i})">

<input type="radio" name="mcq${i}">
${String.fromCharCode(65+j)}. ${op}

</label>

`).join("")}

<p id="mcqResult${i}"></p>

</div>

`).join("");

}


function checkMCQ(el,index,q){

const options=el.parentElement.querySelectorAll(".option");

options.forEach(x=>{
x.classList.remove("correct","wrong");
});

if(index===0){

el.classList.add("correct");

document.getElementById("mcqResult"+q).innerHTML=
"✅ Correct!";

}else{

el.classList.add("wrong");

options[0].classList.add("correct");

document.getElementById("mcqResult"+q).innerHTML=
"❌ Incorrect — correct answer is Option A.";

}

}


/* =====================================================
   TEST
===================================================== */

function startTest(){

const selected=[...questions].sort(()=>Math.random()-.5).slice(0,5);

document.getElementById("testArea").innerHTML=`

<div class="question">

<h3>Mock Test</h3>

<p class="muted">
Write answers on paper as if you are in the examination.
</p>

${selected.map((q,i)=>`

<div class="topic">

<b>Q${i+1}. [${q[0]} Marks]</b>

<p>${q[1]}</p>

</div>

`).join("")}

<button class="primary"
onclick="showTestAnswers()">
Reveal Model Answers
</button>

</div>

<div id="testAnswers"></div>

`;

window.scrollTo({top:500,behavior:"smooth"});

window.testQuestions=selected;

}


function showTestAnswers(){

document.getElementById("testAnswers").innerHTML=`

<div class="answerCard">

<h3>📘 Model Answers</h3>

${window.testQuestions.map((q,i)=>`

<div class="topic">

<b>Q${i+1}. ${q[1]}</b>

<p>${q[2]}</p>

</div>

`).join("")}

</div>

`;

}


/* =====================================================
   PROGRESS
===================================================== */

function getProgress(){

return JSON.parse(localStorage.getItem("cnccProgress")||"[]");

}


function markTopic(id){

let progress=getProgress();

if(!progress.includes(id)){

progress.push(id);

localStorage.setItem(
"cnccProgress",
JSON.stringify(progress)
);

}

updateProgress();

alert("Topic marked as completed ✓");

}


function updateProgress(){

const completed=getProgress();

const total=units.reduce(
(sum,u)=>sum+u.topics.length,0
);

const percent=Math.round(
(completed.length/total)*100
);

document.getElementById("progressFill").style.width=
percent+"%";

document.getElementById("progressText").innerText=
`${percent}% completed • ${completed.length}/${total} topics`;

document.getElementById("completedTopics").innerHTML=
completed.length
?`<div class="topicCard">
<h3>✓ Completed Topics</h3>
<p class="muted">${completed.join(" • ")}</p>
</div>`
:"<p class='muted'>No topics completed yet. Start learning!</p>";

}


/* =====================================================
   SEARCH
===================================================== */

document.getElementById("globalSearch")
.addEventListener("input",function(){

const value=this.value.toLowerCase().trim();

if(!value)return;

const found=questions.filter(q=>
q.join(" ").toLowerCase().includes(value)
);

if(found.length){

showPage("questions");

document.getElementById("questionList").innerHTML=
found.map((q,i)=>`

<div class="question">

<span class="marks">${q[0]} MARKS</span>

<h3>${q[1]}</h3>

<div class="answer showAnswer">
<strong>Answer:</strong><br>
${q[2]}
</div>

</div>

`).join("");

}

});


/* =====================================================
   THEME
===================================================== */

document.getElementById("themeBtn")
.onclick=()=>{

document.body.classList.toggle("light");

const light=document.body.classList.contains("light");

localStorage.setItem("cnccTheme",light?"light":"dark");

document.getElementById("themeBtn").innerText=
light?"🌙":"☀️";

};


if(localStorage.getItem("cnccTheme")==="light"){

document.body.classList.add("light");

document.getElementById("themeBtn").innerText="🌙";

}


/* MOBILE MENU */

document.getElementById("menuBtn").onclick=()=>{

document.querySelector("nav").scrollIntoView({
behavior:"smooth"
});

};


/* INITIALIZE */

renderUnits();
renderQuestions();
renderMCQ();
updateProgress();

