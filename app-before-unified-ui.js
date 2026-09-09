"use strict";

/* =========================================================
   CSD STUDYHUB
   Computer Networks & Cloud Computing
   Exact syllabus topics from provided college syllabus
========================================================= */

const SUBJECT={
name:"Computer Networks and Cloud Computing",
code:"CSD403",
stream:"B.Tech Computer Science and Design",
year:"Final Year • Semester VII",
teacher:"Professor Kiran Chaudhari",
creator:"Mayur Rathod"
};

const U=[
{
id:1,
title:"Introduction to Computer Networks",
hours:6,
points:[
{
t:"Uses of Computer Networks",
d:"A computer network is a collection of interconnected computing devices that communicate and share resources. Networks are used for communication, resource sharing, centralized services, collaboration, remote access and distributed applications.",
details:[
"Communication: e-mail, messaging, voice calls and video conferencing.",
"Resource sharing: printers, storage, databases and software can be shared.",
"Information sharing: users can access files and services from different machines.",
"Remote access: a user can access services from another location through a network.",
"Reliability: important data and services can use multiple machines or paths.",
"Scalability: additional devices can be connected as the organization grows.",
"Distributed processing: a task can be divided among multiple computers."
],
example:"A college network connects laboratories, faculty offices, library systems, servers and Wi-Fi users so they can share internet, files and academic services."
},
{
t:"Types of Computer Networks",
d:"Networks can be classified according to geographical coverage and purpose.",
details:[
"PAN — Personal Area Network: very small range, such as devices connected around one person.",
"LAN — Local Area Network: covers a room, laboratory, building or campus area.",
"MAN — Metropolitan Area Network: connects networks across a city or metropolitan region.",
"WAN — Wide Area Network: covers large geographical areas and can connect countries and continents.",
"Internet — a global interconnection of networks using common communication protocols."
],
diagram:["PAN","LAN","MAN","WAN","GLOBAL NETWORK"]
},
{
t:"Network Technology: Local to Global",
d:"Network technology has evolved from small local networks to large interconnected global systems.",
details:[
"Local Ethernet and Wi-Fi networks provide connectivity inside homes, offices and campuses.",
"Routers connect different networks and select paths for packets.",
"Internet service providers connect customer networks to larger regional and global networks.",
"Backbone networks provide high-capacity connectivity between major locations.",
"Cloud data centers provide globally accessible computing and storage services."
],
diagram:["Device","LAN / Wi-Fi","Router","ISP","Internet","Cloud"]
},
{
t:"Examples of Networks",
d:"Examples include home networks, college LANs, enterprise networks, mobile networks, data-center networks, cloud networks and the Internet.",
details:[
"Home Wi-Fi network",
"College or university campus network",
"Corporate enterprise network",
"Mobile cellular network",
"Data-center network",
"Cloud provider network",
"Internet"
]
},
{
t:"Network Protocols",
d:"A protocol is a defined set of rules used by communicating devices. Protocols specify how data is formatted, addressed, transmitted, received and interpreted.",
details:[
"TCP — reliable transport service.",
"UDP — lightweight connectionless transport service.",
"IP — addressing and packet forwarding.",
"DNS — converts domain names into IP addresses.",
"HTTP/HTTPS — web communication.",
"SMTP/POP/IMAP — e-mail related communication.",
"Ethernet and Wi-Fi — common link-layer technologies."
],
diagram:["Application","Transport","Internet","Link","Physical"]
},
{
t:"Reference Models: OSI and TCP/IP",
d:"Reference models divide networking responsibilities into layers. Layering makes network design, implementation, troubleshooting and standardization easier.",
details:[
"OSI has seven conceptual layers: Physical, Data Link, Network, Transport, Session, Presentation and Application.",
"TCP/IP is the practical protocol architecture used by the Internet.",
"OSI is useful for learning and analysis, while TCP/IP maps closely to real Internet protocols.",
"Each layer provides services to the layer above it and uses services of the layer below it."
],
diagram:["Application","Presentation","Session","Transport","Network","Data Link","Physical"]
},
{
t:"Standardization",
d:"Standardization creates common technical rules so equipment and software from different vendors can interoperate.",
details:[
"Standards define protocols, formats, interfaces and communication behavior.",
"International and industry organizations develop or maintain networking standards.",
"Open standards improve interoperability and reduce vendor dependency.",
"Standards are important for global Internet compatibility."
]
},
{
t:"Policy, Legal and Social Issues",
d:"Computer networks create technical, legal and social responsibilities.",
details:[
"Privacy: personal information must be protected.",
"Security: unauthorized access and attacks must be prevented.",
"Intellectual property: copyrighted material must be used lawfully.",
"Acceptable use: institutions can define rules for network usage.",
"Cybercrime: misuse of networks can have legal consequences.",
"Digital divide: access to technology is not equally available to everyone.",
"Ethics: users should respect privacy, safety and other people's digital rights."
]
}
]
},
{
id:2,
title:"Data Link Layer and Network Layer",
hours:7,
points:[
{
t:"Data Link Layer Design Issues",
d:"The data link layer provides reliable communication between directly connected nodes. It takes packets from the network layer and organizes them into frames.",
details:[
"Framing: divides a stream of bits into identifiable frames.",
"Error control: detects and may correct transmission errors.",
"Flow control: prevents a fast sender from overwhelming a slower receiver.",
"Medium access control: coordinates access to a shared communication medium.",
"Physical addressing: link-layer addresses can identify interfaces on a local network."
],
diagram:["Network Layer Packet","Framing","Frame","Transmission","Frame"]
},
{
t:"Services Provided to Network Layer",
d:"The data link layer offers a service interface to the network layer.",
details:[
"Unacknowledged connectionless service sends frames without confirmation.",
"Acknowledged connectionless service confirms individual frames.",
"Acknowledged connection-oriented service establishes a logical connection and provides ordered delivery.",
"The exact service depends on the technology and requirements."
]
},
{
t:"Framing",
d:"Framing identifies the beginning and end of data-link-layer frames.",
details:[
"Character count can use a field containing the frame length.",
"Byte stuffing adds special escape information when control bytes appear in data.",
"Bit stuffing inserts a zero after a specified sequence of ones.",
"Physical-layer coding violations can sometimes be used for frame boundaries."
],
diagram:["Header","Payload / Data","Trailer"]
},
{
t:"Error Control: Detection and Correction",
d:"Transmission can introduce bit errors. Error-control techniques detect or correct such errors.",
details:[
"Parity adds a parity bit to detect certain bit errors.",
"Checksum computes a value from data and checks it at the receiver.",
"CRC uses polynomial division and is powerful for detecting burst errors.",
"Forward error correction adds redundant information so some errors can be corrected without retransmission.",
"Retransmission-based schemes ask the sender to send damaged or lost data again."
],
diagram:["Data","Redundancy","Transmit","Check","Accept / Retransmit"]
},
{
t:"Network Layer Design Issues",
d:"The network layer is responsible for delivering packets across multiple interconnected networks.",
details:[
"Logical addressing identifies network interfaces across interconnected networks.",
"Routing determines a path from source to destination.",
"Forwarding sends packets toward the selected next hop.",
"Internetworking connects different networks.",
"Traffic management helps handle congestion and resource utilization."
]
},
{
t:"Routing Algorithms in a Single Network",
d:"Routing algorithms determine suitable paths for packets.",
details:[
"Shortest-path routing selects a path based on a cost metric.",
"Distance-vector routing exchanges distance information with neighbors.",
"Link-state routing distributes link-state information and computes paths.",
"Flooding forwards information broadly and can be controlled using sequence numbers and hop limits.",
"Routing metrics can include hop count, delay, bandwidth or administrative cost."
],
diagram:["Source","Router A","Router B","Router C","Destination"]
},
{
t:"Traffic Management at the Network Layer",
d:"Traffic management deals with congestion and efficient use of network capacity.",
details:[
"Congestion occurs when offered traffic exceeds available network capacity.",
"Queue management controls packets waiting for transmission.",
"Traffic shaping regulates the rate at which traffic enters a network.",
"Congestion-control strategies try to avoid packet loss and excessive delay.",
"Quality of Service can prioritize traffic according to application requirements."
]
},
{
t:"Internetworking",
d:"Internetworking connects independent networks using routers and common network-layer mechanisms.",
details:[
"Routers connect different IP networks.",
"Packets can travel through multiple networks before reaching their destination.",
"Encapsulation and addressing allow packets to cross different link technologies.",
"Internet Protocol provides a common network-layer framework."
],
diagram:["LAN A","Router","WAN / Internet","Router","LAN B"]
},
{
t:"IP Addresses",
d:"An IP address is a logical network-layer address used to identify an interface in an IP network.",
details:[
"IPv4 uses 32-bit addresses written as four decimal octets.",
"An IPv4 address contains network and host portions according to its subnet configuration.",
"Subnet masks or prefix lengths define the network portion.",
"IPv6 uses 128-bit addresses and provides a much larger address space.",
"Private IPv4 addresses are commonly used inside local networks with address translation when required."
],
diagram:["IPv4: 32 bits","Network Prefix","Host Portion"]
},
{
t:"Port Addresses",
d:"A port number identifies a transport-layer endpoint associated with an application or service.",
details:[
"IP address identifies the host/interface at the network layer.",
"Port number identifies a transport endpoint on that host.",
"TCP and UDP use port numbers.",
"Common examples include HTTP 80, HTTPS 443, DNS 53 and SSH 22."
],
diagram:["IP Address"," + ","Port Number"," = ","Socket Endpoint"]
}
]
},
{
id:3,
title:"Transport and Application Layer",
hours:6,
points:[
{
t:"Transport Service",
d:"The transport layer provides communication services between application processes running on different hosts.",
details:[
"Process-to-process delivery",
"Segmentation and reassembly",
"Multiplexing using port numbers",
"Reliability when provided by the transport protocol",
"Flow control",
"Congestion control in protocols such as TCP"
]
},
{
t:"Elements of Transport Protocols",
d:"Transport protocols need mechanisms to establish communication, transfer data and manage failures.",
details:[
"Addressing through port numbers",
"Connection establishment and termination",
"Sequence numbers and acknowledgements",
"Flow control",
"Error detection and retransmission",
"Timers",
"Multiplexing and demultiplexing"
]
},
{
t:"UDP",
d:"UDP is a connectionless transport protocol with low protocol overhead. It does not provide TCP-style reliable, ordered delivery.",
details:[
"Connectionless",
"Low overhead",
"Uses port numbers",
"Datagrams can be lost, duplicated or reordered",
"Useful when speed and simplicity are important",
"Commonly used for DNS queries and real-time applications"
],
diagram:["Application Data","UDP Header","UDP Datagram","IP"]
},
{
t:"TCP",
d:"TCP provides a reliable, ordered byte-stream service between applications.",
details:[
"Connection-oriented",
"Reliable delivery using acknowledgements and retransmissions",
"Sequence numbers provide ordering",
"Flow control protects the receiver",
"Congestion control adapts sending behavior",
"Connection establishment commonly uses a three-way handshake"
],
diagram:["SYN","→","SYN + ACK","→","ACK","→","Connection"]
},
{
t:"Domain Name System (DNS)",
d:"DNS maps human-readable domain names to network addresses and other records.",
details:[
"Users prefer names such as example.com rather than numerical IP addresses.",
"Resolvers query DNS infrastructure to obtain records.",
"DNS can return A records for IPv4 and AAAA records for IPv6.",
"MX records identify mail servers.",
"DNS uses caching to reduce repeated queries and improve performance."
],
diagram:["User","DNS Resolver","Root","TLD","Authoritative DNS"]
},
{
t:"Electronic Mail",
d:"Electronic mail uses multiple protocols for sending and retrieving messages.",
details:[
"SMTP is commonly used to send and relay e-mail.",
"IMAP allows clients to access and synchronize mail stored on a server.",
"POP is designed primarily for retrieving mail, traditionally with local download behavior.",
"Mail servers use DNS MX records to locate mail infrastructure."
],
diagram:["Sender","SMTP","Mail Server","SMTP","Receiver Server","IMAP/POP","Receiver"]
},
{
t:"World Wide Web",
d:"The World Wide Web is a distributed information system built using web technologies.",
details:[
"Browsers act as clients.",
"Web servers provide resources.",
"HTTP/HTTPS are commonly used for communication.",
"URLs identify resources.",
"HTML structures web documents.",
"CSS controls presentation and JavaScript adds behavior."
]
},
{
t:"Streaming Audio and Video",
d:"Streaming delivers media progressively so playback can begin without downloading the entire file first.",
details:[
"Media is divided into segments or a continuous stream.",
"Buffering helps handle network variation.",
"Adaptive streaming can select different quality levels according to network conditions.",
"Latency, bandwidth, packet loss and device capability affect playback quality."
]
},
{
t:"Content Delivery",
d:"Content delivery systems distribute content closer to users to reduce latency and improve scalability.",
details:[
"CDNs use geographically distributed edge servers.",
"Frequently requested content can be cached.",
"Requests may be routed to an appropriate nearby or less-loaded location.",
"CDNs are useful for web assets, video, software downloads and APIs."
],
diagram:["User","Nearest Edge","Cache","Origin Server"]
}
]
},
{
id:4,
title:"Cloud Computing and Virtualization",
hours:7,
points:[
{
t:"Introduction to Cloud Computing",
d:"Cloud computing provides computing resources such as servers, storage, networking and software services over a network, commonly with on-demand provisioning.",
details:[
"On-demand access",
"Resource pooling",
"Elastic scaling",
"Measured usage",
"Network accessibility",
"Automation and self-service"
]
},
{
t:"Evolution of Computing Model",
d:"Computing evolved from centralized systems toward personal computing, distributed systems, virtualization, cloud computing and modern service-oriented platforms.",
details:[
"Mainframe computing",
"Personal computers",
"Client-server computing",
"Distributed computing",
"Cluster computing",
"Grid computing",
"Utility computing",
"Cloud computing"
],
diagram:["Mainframe","PC","Client-Server","Distributed","Virtualized","Cloud"]
},
{
t:"Cloud Service Providers",
d:"Cloud service providers offer infrastructure, platforms and software services through cloud environments.",
details:[
"Providers operate data centers and networking infrastructure.",
"Users provision resources through consoles, APIs or automation tools.",
"Services can include compute, storage, databases, networking, security and application platforms."
]
},
{
t:"Pros and Cons of Cloud Computing",
d:"Cloud computing can reduce infrastructure-management effort but introduces dependencies and risks.",
details:[
"Advantages: elasticity, pay-for-use models, rapid provisioning, global reach and managed services.",
"Challenges: vendor lock-in, internet dependency, security configuration, compliance concerns and possible unpredictable costs."
]
},
{
t:"Cluster Computing",
d:"Cluster computing combines multiple interconnected computers to work together as a coordinated system.",
details:[
"Nodes cooperate on a workload.",
"Clusters can improve performance or availability.",
"Tasks can be distributed among nodes.",
"Failure handling depends on cluster architecture."
]
},
{
t:"Grid Computing",
d:"Grid computing coordinates geographically distributed and heterogeneous resources for large workloads.",
details:[
"Resources may belong to different administrative domains.",
"Large computational jobs can be divided among available resources.",
"Grid computing is useful for scientific and high-performance workloads."
]
},
{
t:"Utility Computing",
d:"Utility computing treats computing resources similarly to utilities: users consume resources and are charged according to usage or service level.",
details:[
"Metered usage",
"Elastic resource consumption",
"Reduced need for owning all infrastructure",
"Cloud computing adopts many utility-computing principles."
]
},
{
t:"Virtualization: Introduction",
d:"Virtualization creates an abstraction layer that allows multiple virtual environments to share physical computing resources.",
details:[
"A hypervisor manages virtual machines.",
"Each virtual machine can run an operating system independently.",
"Virtualization improves resource utilization and isolation.",
"Virtual machines can be created, cloned, migrated or removed according to the platform."
],
diagram:["Physical Hardware","Hypervisor","VM 1","VM 2","VM 3"]
},
{
t:"Characteristics of Virtualized Environment",
d:"Virtualized environments provide abstraction, isolation and flexible allocation of physical resources.",
details:[
"Isolation between virtual machines",
"Resource sharing",
"Encapsulation",
"Hardware abstraction",
"Rapid provisioning",
"Migration possibilities"
]
},
{
t:"Virtualization Types",
d:"Virtualization can be implemented at different levels.",
details:[
"Server virtualization: multiple virtual servers share one physical server.",
"Storage virtualization: multiple storage resources appear as a unified storage system.",
"Network virtualization: logical networks are created over physical infrastructure.",
"Desktop virtualization: user desktop environments are centrally hosted or managed.",
"Application virtualization: applications operate in an abstracted execution environment."
]
},
{
t:"Virtualization and Cloud Computing",
d:"Virtualization is an enabling technology for many cloud infrastructures because it helps providers pool physical resources and provision isolated virtual resources.",
details:[
"Cloud orchestration can create virtual machines on demand.",
"Resource pooling improves utilization.",
"Virtual networks and virtual storage support cloud environments.",
"Cloud services can combine virtualization with containers and managed services."
]
},
{
t:"Pros and Cons of Virtualization",
d:"Virtualization improves flexibility and utilization but adds management and performance considerations.",
details:[
"Pros: consolidation, isolation, portability, rapid provisioning and better utilization.",
"Cons: hypervisor overhead, management complexity, licensing considerations and possible shared-resource contention."
]
}
]
},
{
id:5,
title:"Cloud Computing Architecture",
hours:7,
points:[
{
t:"NIST Cloud Computing Architecture",
d:"A cloud architecture can be understood through essential characteristics, service models, deployment models and roles. NIST terminology is widely used for describing cloud computing.",
details:[
"Essential characteristics include on-demand self-service, broad network access, resource pooling, rapid elasticity and measured service.",
"Service models describe the level at which a provider offers capabilities.",
"Deployment models describe how cloud infrastructure is organized and made available.",
"Cloud roles can include providers, consumers and supporting actors."
],
diagram:["User / Consumer","Cloud Services","Cloud Provider","Physical + Virtual Infrastructure"]
},
{
t:"Services Provided at Various Levels",
d:"Cloud services can be offered at infrastructure, platform or software levels.",
details:[
"IaaS provides virtualized infrastructure such as compute, storage and networking.",
"PaaS provides a platform for application development and deployment.",
"SaaS provides complete software applications to end users.",
"More managed layers reduce infrastructure-management responsibility for the customer."
],
diagram:["SaaS","PaaS","IaaS","Virtualization","Hardware"]
},
{
t:"Role of Networks in Cloud Computing",
d:"Networks connect users, cloud services, data centers and storage systems.",
details:[
"Users need network access to cloud services.",
"Data centers use high-speed internal networks.",
"Virtual networks isolate and connect cloud resources.",
"Network latency and bandwidth affect cloud application performance.",
"Secure connectivity can use encryption, private links or VPN technologies."
]
},
{
t:"Role of Web Services",
d:"Web services and APIs provide programmatic interfaces through which applications communicate with cloud resources.",
details:[
"Applications can request cloud resources through APIs.",
"REST-style APIs commonly use HTTP methods.",
"Authentication and authorization control access.",
"APIs enable automation, integration and infrastructure management."
]
},
{
t:"Infrastructure as a Service (IaaS)",
d:"IaaS provides configurable computing infrastructure while the customer manages operating systems, applications and much of the software stack.",
details:[
"Virtual machines",
"Virtual networks",
"Storage",
"Load balancing",
"Security controls",
"Flexible resource provisioning"
],
diagram:["Application","OS","VM","Virtual Network","Cloud Infrastructure"]
},
{
t:"Platform as a Service (PaaS)",
d:"PaaS provides a managed application platform so developers can focus on application code rather than managing most underlying infrastructure.",
details:[
"Application runtime",
"Managed deployment",
"Scaling support",
"Developer tools",
"Managed platform components"
]
},
{
t:"Software as a Service (SaaS)",
d:"SaaS delivers a complete application to end users over a network. The provider manages most of the application and underlying infrastructure.",
details:[
"Users generally access the application through a browser or client.",
"Provider manages infrastructure and application updates.",
"Subscription or usage-based pricing is common.",
"Examples include online collaboration and productivity applications."
]
},
{
t:"Deployment Models",
d:"Cloud deployment models describe how infrastructure is organized and who can access it.",
details:[
"Public cloud: infrastructure is offered for use by multiple customers.",
"Private cloud: cloud infrastructure is dedicated to one organization.",
"Hybrid cloud: combines private and public cloud environments.",
"Community cloud: infrastructure is shared by organizations with common requirements."
],
diagram:["Public","Private","Hybrid","Community"]
}
]
},
{
id:6,
title:"Cloud Applications",
hours:7,
points:[
{
t:"Media Applications",
d:"Cloud platforms can support large-scale media storage, processing, transcoding and delivery.",
details:[
"Media files can be stored in scalable cloud storage.",
"Compute resources can process and transcode video.",
"CDN and edge services can deliver content closer to viewers.",
"Elastic infrastructure can handle changes in demand."
],
diagram:["Upload","Cloud Storage","Processing","CDN","Viewer"]
},
{
t:"Multiplayer Online Gaming",
d:"Cloud computing can provide scalable infrastructure for multiplayer games, including servers, storage, communication and matchmaking.",
details:[
"Game servers maintain shared game state.",
"Low latency is important for player experience.",
"Cloud resources can scale with player demand.",
"Databases and storage can maintain player profiles and game data.",
"Network services support communication between clients and servers."
],
diagram:["Player A","Game Server","Game State","Player B"]
},
{
t:"Amazon Web Services: Compute Services",
d:"AWS provides cloud computing services for running applications and workloads.",
details:[
"Compute services provide virtual or managed execution environments.",
"Resources can be provisioned on demand.",
"Scaling mechanisms can respond to workload changes.",
"Applications can combine compute with storage, databases and networking."
]
},
{
t:"Amazon Web Services: Storage Services",
d:"Cloud storage services provide scalable ways to store files, objects, blocks or other application data.",
details:[
"Object storage is useful for media, backups and web assets.",
"Block storage can be attached to compute instances.",
"Storage services provide durability and scalable capacity.",
"Access control and encryption help protect stored data."
]
},
{
t:"Amazon Web Services: Communication Services",
d:"Cloud communication services help applications communicate through networks, APIs, messaging and notification systems.",
details:[
"Applications can communicate between services.",
"Messaging can decouple application components.",
"Notification systems can distribute events.",
"Network services connect cloud resources securely."
]
},
{
t:"Google App Engine: Architecture and Core Concepts",
d:"Google App Engine is a managed application platform designed to deploy applications without requiring users to manage traditional server infrastructure directly.",
details:[
"Applications are deployed to a managed platform.",
"Platform services handle infrastructure management.",
"Applications can scale according to demand depending on configuration and service capabilities.",
"Application components can use platform-provided services and cloud resources."
],
diagram:["Developer","Deploy","App Engine","Managed Runtime","Users"]
},
{
t:"Google App Engine: Lifecycle",
d:"An application lifecycle commonly includes development, testing, deployment, monitoring, scaling and updates.",
details:[
"Develop the application.",
"Test locally or in a suitable environment.",
"Deploy the application.",
"Monitor application behavior.",
"Update versions when required.",
"Scale resources according to demand."
]
},
{
t:"Google App Engine: Cost Model",
d:"Cloud application cost generally depends on consumed resources and selected services.",
details:[
"Compute usage",
"Storage usage",
"Network/data transfer",
"Managed service usage",
"Traffic and request volume",
"Configuration and quotas can influence cost."
]
},
{
t:"Microsoft Azure: Core Concepts",
d:"Microsoft Azure is a cloud platform offering compute, storage, networking, databases, analytics and application services.",
details:[
"Azure resources are organized into resource groups and subscriptions.",
"Compute services run applications and workloads.",
"Storage services provide persistent data storage.",
"Networking services connect and secure cloud resources.",
"Identity and access services control users and permissions."
]
},
{
t:"SQL Azure",
d:"Azure SQL services provide managed relational database capabilities for cloud applications.",
details:[
"Applications can use relational databases without managing all underlying database infrastructure.",
"SQL-based querying and relational data models are supported.",
"Managed database services provide operational features such as backups and scaling options depending on the service.",
"Applications can connect to databases through secure network and authentication mechanisms."
]
}
]
}
];

const state={
theme:localStorage.getItem("theme")||"dark",
role:localStorage.getItem("role")||"",
progress:JSON.parse(localStorage.getItem("progress")||"{}"),
bookmarks:JSON.parse(localStorage.getItem("bookmarks")||"[]")
};

document.body.classList.toggle("light",state.theme==="light");

function esc(s){
return String(s).replace(/[&<>"']/g,m=>({
"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
}[m]));
}

function save(){
localStorage.setItem("progress",JSON.stringify(state.progress));
localStorage.setItem("bookmarks",JSON.stringify(state.bookmarks));
localStorage.setItem("theme",state.theme);
localStorage.setItem("role",state.role);
}

function allTopics(){
return U.flatMap(u=>u.points.map(p=>({...p,unit:u})));
}

function totalTopics(){return allTopics().length}

function doneCount(){
return Object.values(state.progress).filter(v=>v===100).length
}

function overall(){
return Math.round(doneCount()/totalTopics()*100)||0
}

function toast(msg){
const t=document.getElementById("toast");
t.textContent=msg;
t.style.display="block";
setTimeout(()=>t.style.display="none",1800)
}

function searchURL(topic,type){
const q=encodeURIComponent(topic);
return type==="google"
?`https://www.google.com/search?tbm=isch&q=${q}+computer+networking+diagram`
:`https://www.youtube.com/results?search_query=${q}+computer+networking`;
}

function diagramHTML(arr){
if(!arr)return "";
return `<div class="diagram">
<div class="flow">
${arr.map((x,i)=>`
<div class="box">${esc(x)}</div>
${i<arr.length-1?'<div class="arrow">→</div>':''}
`).join("")}
</div>
</div>`
}

function links(topic){
return `<div class="links">
<a class="linkbtn" target="_blank" rel="noopener" href="${searchURL(topic,"google")}">🖼️ Google Diagram</a>
<a class="linkbtn" target="_blank" rel="noopener" href="${searchURL(topic,"yt")}">▶️ YouTube</a>
<a class="linkbtn" target="_blank" rel="noopener" href="https://www.google.com/search?q=${encodeURIComponent(topic+" computer networks cloud computing")}">🔎 Web Research</a>
</div>`
}

function layout(){
document.getElementById("app").innerHTML=`
<header class="topbar">
<div class="brand">
<div class="logo">CN</div>
<div>
<div>CSD StudyHub</div>
<small style="color:var(--muted)">CNCC • ${SUBJECT.code}</small>
</div>
</div>
<div class="nav-actions">
<button class="iconbtn hide-mobile" onclick="openRole()">🎓 Panel</button>
<button class="iconbtn" onclick="openBookmarks()">🔖</button>
<button class="iconbtn" onclick="toggleTheme()">☀︎</button>
</div>
</header>

<section class="hero">
<div class="eyebrow">FINAL YEAR • SEMESTER VII • CSD</div>
<h1>Computer Networks<br><span>& Cloud Computing</span></h1>
<p>
A paperless, student-friendly learning portal built directly from your
college syllabus. Read every syllabus point, revise with marks-wise answers,
practice MCQs and generate examination papers.
</p>
<div class="hero-row">
<button class="btn primary" onclick="openUnit(1)">Start Unit I</button>
<button class="btn" onclick="openRole()">Open Panel</button>
<button class="btn" onclick="openQuestions()">Question Bank</button>
</div>
</section>

<main class="container">

<div class="stats">
<div class="stat"><b>${U.length}</b><small>Units</small></div>
<div class="stat"><b>${totalTopics()}</b><small>Syllabus Topics</small></div>
<div class="stat"><b>${overall()}%</b><small>Your Progress</small></div>
<div class="stat"><b>∞</b><small>Revision</small></div>
</div>

<div class="section-title">
<div><h2>📚 Complete Syllabus</h2><p>Unit-wise • point-wise • deep explanation</p></div>
</div>

<input class="search" id="search" placeholder="Search any topic — OSI, TCP, DNS, IaaS, Azure..." oninput="searchTopics(this.value)">

<div id="results" class="grid" style="margin-top:15px"></div>

<div class="section-title">
<div><h2>Units I — VI</h2><p>Exact structure from your provided syllabus</p></div>
</div>

<div class="grid">
${U.map(u=>`
<div class="card unit-card">
<div>
<div class="unit-num">UNIT ${toRoman(u.id)} • ${u.hours} HRS</div>
<h3>${esc(u.title)}</h3>
<p>${u.points.length} syllabus points with detailed notes, diagrams and learning links.</p>
</div>
<button class="btn primary" onclick="openUnit(${u.id})">Open Unit →</button>
</div>
`).join("")}
</div>

<div class="section-title">
<div><h2>🎯 Exam Preparation</h2><p>Marks-wise preparation</p></div>
</div>

<div class="grid">
<div class="card"><h3>2 Marks</h3><p>Definitions, short concepts and direct answers.</p><button class="btn" onclick="openQuestions(2)">Practice</button></div>
<div class="card"><h3>5 Marks</h3><p>Explain, compare, working and short descriptive answers.</p><button class="btn" onclick="openQuestions(5)">Practice</button></div>
<div class="card"><h3>10 Marks</h3><p>Long answers with diagrams and structured explanation.</p><button class="btn" onclick="openQuestions(10)">Practice</button></div>
<div class="card"><h3>🎲 Random Paper</h3><p>Fresh unit-wise examination-style paper.</p><button class="btn" onclick="randomPaper()">Generate</button></div>
</div>

<div class="teacher-banner" style="margin-top:35px">
<b>👨‍🏫 Subject Teacher</b><br>
<span style="color:var(--muted)">${SUBJECT.teacher} • ${SUBJECT.name}</span>
<br><small style="color:var(--muted)">Website created by ${SUBJECT.creator}</small>
</div>

<div class="footer">
CSD StudyHub • Paperless Learning • ${SUBJECT.creator}<br>
Computer Networks & Cloud Computing • ${SUBJECT.code}
</div>

</main>

<div id="drawer" class="drawer"></div>
<div id="modal" class="modal"></div>
<div id="toast" class="toast"></div>
`;
}

function toRoman(n){
return ["","I","II","III","IV","V","VI"][n]
}

function openUnit(id){
const u=U.find(x=>x.id===id);
if(!u)return;

document.getElementById("drawer").innerHTML=`
<div class="drawer-head">
<div><b>UNIT ${toRoman(u.id)}</b> • ${esc(u.title)}</div>
<button class="iconbtn" onclick="closeDrawer()">✕</button>
</div>
<div class="notes-wrap">

<div class="teacher-banner">
<b>📘 ${esc(u.title)}</b><br>
<small>${u.hours} teaching hours • ${u.points.length} syllabus points</small>
</div>

${u.points.map((p,i)=>topicHTML(u,p,i)).join("")}

<div class="section-title"><div><h2>📝 Unit ${toRoman(u.id)} Question Bank</h2><p>Important examination practice</p></div></div>

${questionsForUnit(u).map(q=>questionHTML(q)).join("")}

<div class="card">
<h3>🎲 Generate another Unit ${toRoman(u.id)} paper</h3>
<p>Questions are selected from this unit's topic bank.</p>
<button class="btn primary" onclick="randomUnitPaper(${u.id})">Generate Paper</button>
</div>

</div>`;
document.getElementById("drawer").classList.add("open");
}

function topicHTML(u,p,i){
const key=`u${u.id}p${i}`;
const checked=state.progress[key]===100;
const bookmarked=state.bookmarks.includes(key);

return `
<article class="topic" id="${key}">
<div class="unit-num">UNIT ${toRoman(u.id)} • TOPIC ${i+1}</div>
<h2>${esc(p.t)}</h2>
<p>${esc(p.d)}</p>

<h3>📌 Point-wise Explanation</h3>
<ul>${p.details.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>

${p.example?`<div class="key"><b>💡 Example:</b><br>${esc(p.example)}</div>`:""}

${p.diagram?`
<h3>🖼️ Concept Diagram</h3>
${diagramHTML(p.diagram)}
`:""}

${p.t==="Reference Models: OSI and TCP/IP"?`
<div class="key"><b>Exam Tip:</b> For a 5/10 mark answer, draw the layers vertically and explain the function of each layer in one or two points.</div>
`:""}

${links(p.t)}

<div class="links">
<button class="btn" onclick="markTopic('${key}')">${checked?"✓ Completed":"Mark Complete"}</button>
<button class="btn" onclick="bookmark('${key}')">${bookmarked?"★ Saved":"☆ Save"}</button>
</div>
</article>`
}

function markTopic(key){
state.progress[key]=state.progress[key]===100?0:100;
save();
toast(state.progress[key]?"Topic completed ✓":"Topic reopened");
const open=document.querySelector(".drawer.open");
if(open){
const id=parseInt(key.match(/u(\d+)/)[1]);
openUnit(id)
}
}

function bookmark(key){
if(state.bookmarks.includes(key)){
state.bookmarks=state.bookmarks.filter(x=>x!==key)
}else state.bookmarks.push(key);
save();
toast("Bookmark updated");
}

function questionsForUnit(u){
const out=[];
u.points.forEach((p,i)=>{
out.push({marks:2,q:`Define / explain ${p.t}.`,a:`${p.d} Key points: ${p.details.slice(0,3).join(" ")}`,unit:u.id});
out.push({marks:5,q:`Explain ${p.t} with suitable points and example.`,a:`Start with the definition. Explain the major concepts: ${p.details.join(" ")} ${p.example||""}`,unit:u.id});
if(i%2===0){
out.push({marks:10,q:`Discuss ${p.t} in detail with a neat diagram wherever applicable.`,a:`A complete answer should include introduction, definition, working or classification, important points, advantages/limitations where applicable, real-world example and a labelled diagram. ${p.d} ${p.details.join(" ")}`,unit:u.id})
}
});
return out;
}

function questionHTML(q){
return `<div class="question">
<b>${q.marks} Marks — ${esc(q.q)}</b>
<div class="answer">${esc(q.a)}</div>
</div>`
}

function openQuestions(filter){
const qs=allTopics().flatMap(x=>questionsForUnit(x.unit)).filter((q,i,a)=>a.indexOf(q)===i);
const final=filter?qs.filter(q=>q.marks===filter):qs.slice(0,30);

document.getElementById("drawer").innerHTML=`
<div class="drawer-head">
<div><b>📝 Question Bank</b></div>
<button class="iconbtn" onclick="closeDrawer()">✕</button>
</div>
<div class="notes-wrap">
<div class="section-title">
<div><h2>${filter||"All"} Marks Questions</h2><p>Unit-wise CNCC preparation</p></div>
</div>
<div class="links">
<button class="btn" onclick="openQuestions(2)">2 Marks</button>
<button class="btn" onclick="openQuestions(5)">5 Marks</button>
<button class="btn" onclick="openQuestions(10)">10 Marks</button>
<button class="btn primary" onclick="randomPaper()">Random Paper</button>
</div>
${final.map(questionHTML).join("")}
</div>`;
document.getElementById("drawer").classList.add("open")
}

function randomPaper(){
const all=U.flatMap(u=>questionsForUnit(u));
const shuffled=[...all].sort(()=>Math.random()-.5);
const qs=[
...shuffled.filter(x=>x.marks===2).slice(0,4),
...shuffled.filter(x=>x.marks===5).slice(0,4),
...shuffled.filter(x=>x.marks===10).slice(0,2)
];

document.getElementById("drawer").innerHTML=`
<div class="drawer-head">
<div><b>🎲 CNCC Random Question Paper</b></div>
<button class="iconbtn" onclick="closeDrawer()">✕</button>
</div>
<div class="notes-wrap">
<div class="card">
<h2>Computer Networks & Cloud Computing</h2>
<p>Final Year B.Tech CSD • ${new Date().toLocaleDateString()}</p>
</div>
${qs.map((q,i)=>`
<div class="question">
<b>Q${i+1}. ${q.marks} Marks</b>
${esc(q.q)}
</div>`).join("")}
<button class="btn primary" onclick="randomPaper()">🔄 Generate New Paper</button>
</div>`;
document.getElementById("drawer").classList.add("open")
}

function randomUnitPaper(id){
const u=U.find(x=>x.id===id);
const qs=questionsForUnit(u).sort(()=>Math.random()-.5).slice(0,10);
document.getElementById("drawer").innerHTML=`
<div class="drawer-head">
<div><b>UNIT ${toRoman(id)} Random Paper</b></div>
<button class="iconbtn" onclick="closeDrawer()">✕</button>
</div>
<div class="notes-wrap">
${qs.map((q,i)=>`<div class="question"><b>Q${i+1}. ${q.marks} Marks</b>${esc(q.q)}</div>`).join("")}
<button class="btn primary" onclick="randomUnitPaper(${id})">🔄 Generate Again</button>
</div>`;
document.getElementById("drawer").classList.add("open")
}

function searchTopics(value){
const v=value.trim().toLowerCase();
const r=document.getElementById("results");
if(!v){r.innerHTML="";return}
const found=allTopics().filter(x=>
x.t.toLowerCase().includes(v)||
x.d.toLowerCase().includes(v)||
x.unit.title.toLowerCase().includes(v)
).slice(0,12);

r.innerHTML=found.map(x=>`
<div class="card">
<div class="unit-num">UNIT ${toRoman(x.unit.id)}</div>
<h3>${esc(x.t)}</h3>
<p>${esc(x.d.slice(0,150))}...</p>
<button class="btn" onclick="openUnit(${x.unit.id})">Open Topic →</button>
</div>`).join("")||`<div class="card">No topic found.</div>`
}

function openRole(){
document.getElementById("modal").innerHTML=`
<div class="modal-box">
<div style="display:flex;justify-content:space-between">
<div><div class="unit-num">CSD STUDYHUB</div><h2>Choose your panel</h2></div>
<button class="iconbtn" onclick="closeModal()">✕</button>
</div>

<div class="role-grid">
<div class="role" onclick="selectRole('student')">
<div class="role-icon">🎓</div>
<h3>Student Panel</h3>
<p style="color:var(--muted)">Notes, questions, MCQs, random papers, bookmarks and progress.</p>
<button class="btn primary">Enter Student</button>
</div>

<div class="role" onclick="selectRole('teacher')">
<div class="role-icon">👨‍🏫</div>
<h3>Teacher Panel</h3>
<p style="color:var(--muted)">Subject-wise teaching view for Professor Kiran Chaudhari.</p>
<button class="btn primary">Enter Teacher</button>
</div>
</div>
</div>`;
document.getElementById("modal").classList.add("show")
}

function selectRole(role){
state.role=role;
save();
closeModal();
openRoleDashboard()
}

function openRoleDashboard(){
const teacher=state.role==="teacher";
document.getElementById("modal").innerHTML=`
<div class="modal-box">
<div style="display:flex;justify-content:space-between">
<div>
<div class="unit-num">${teacher?"TEACHER PANEL":"STUDENT PANEL"}</div>
<h2>${teacher?"👨‍🏫 Professor Kiran Chaudhari":"🎓 Student Dashboard"}</h2>
</div>
<button class="iconbtn" onclick="closeModal()">✕</button>
</div>

<div class="teacher-banner">
<b>${SUBJECT.name}</b><br>
<span style="color:var(--muted)">${SUBJECT.code} • ${SUBJECT.year}</span>
</div>

<div class="stats">
<div class="stat"><b>${U.length}</b><small>Units</small></div>
<div class="stat"><b>${totalTopics()}</b><small>Topics</small></div>
<div class="stat"><b>${overall()}%</b><small>Progress</small></div>
<div class="stat"><b>${state.bookmarks.length}</b><small>Bookmarks</small></div>
</div>

<div class="grid" style="margin-top:15px">
<div class="card"><h3>📚 Notes</h3><p>Complete Unit I–VI notes.</p><button class="btn" onclick="closeModal();openUnit(1)">Open</button></div>
<div class="card"><h3>📝 Questions</h3><p>2 / 5 / 10 marks.</p><button class="btn" onclick="closeModal();openQuestions()">Open</button></div>
<div class="card"><h3>🎲 Paper</h3><p>Random exam paper.</p><button class="btn" onclick="closeModal();randomPaper()">Generate</button></div>
<div class="card"><h3>📊 Progress</h3><p>${overall()}% completed.</p><div class="progress"><span style="width:${overall()}%"></span></div></div>
<div class="card"><h3>👨‍🏫 Faculty</h3><p>${SUBJECT.teacher}</p></div>
<div class="card"><h3>🌱 Eco Study</h3><p>Digital notes reduce unnecessary paper printing.</p></div>
</div>

${teacher?`
<div class="teacher-banner" style="margin-top:20px">
<b>Teacher Subject Mapping</b>
<p style="color:var(--muted)">${SUBJECT.code} → ${SUBJECT.name}</p>
<p style="color:var(--muted)">Future subjects can be added with their respective faculty members without changing the student interface.</p>
</div>`:""}

</div>`;
document.getElementById("modal").classList.add("show")
}

function openBookmarks(){
const items=state.bookmarks.map(k=>{
const m=k.match(/u(\d+)p(\d+)/);
if(!m)return null;
const u=U.find(x=>x.id==m[1]);
return u?u.points[m[2]]?{u,p:u.points[m[2]],i:m[2]}:null:null
}).filter(Boolean);

document.getElementById("modal").innerHTML=`
<div class="modal-box">
<div style="display:flex;justify-content:space-between">
<h2>🔖 Saved Topics</h2>
<button class="iconbtn" onclick="closeModal()">✕</button>
</div>
${items.length?items.map(x=>`
<div class="question">
<b>Unit ${toRoman(x.u.id)} • ${esc(x.p.t)}</b>
<p style="color:var(--muted)">${esc(x.p.d)}</p>
<button class="btn" onclick="closeModal();openUnit(${x.u.id})">Open</button>
</div>`).join(""):`<p style="color:var(--muted)">No saved topics yet.</p>`}
</div>`;
document.getElementById("modal").classList.add("show")
}

function toggleTheme(){
state.theme=state.theme==="dark"?"light":"dark";
document.body.classList.toggle("light",state.theme==="light");
save()
}

function closeDrawer(){
document.getElementById("drawer").classList.remove("open")
}
function closeModal(){
document.getElementById("modal").classList.remove("show")
}

document.addEventListener("keydown",e=>{
if(e.key==="Escape"){closeDrawer();closeModal()}
});

layout();
