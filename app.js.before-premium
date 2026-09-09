const units = {

1:{
title:"Introduction to Computer Networks",
hours:"06 Hours",
summary:"Fundamentals of computer networks, network types, technologies, protocols, OSI and TCP/IP models, standardization and social/legal issues.",

topics:[

{
title:"1. Uses of Computer Networks",
explain:`A computer network is a collection of interconnected computing devices that communicate with each other to exchange data and share resources. Networks are used almost everywhere: colleges, banks, hospitals, industries, homes, government offices and cloud platforms.

The most important purpose of networking is communication and resource sharing. A network allows users to share files, printers, applications, databases, internet connections and other hardware resources.

Modern networks also support remote access, online learning, video conferencing, e-commerce, cloud computing and distributed applications.`,
points:[
"Resource sharing – hardware, software and files can be shared.",
"Communication – email, messaging, voice and video communication.",
"Information sharing – databases and documents can be accessed by authorized users.",
"Remote access – users can access systems from different locations.",
"Cost reduction – shared resources reduce infrastructure cost.",
"Reliability – backup systems and redundant networks improve availability.",
"Scalability – networks can grow by adding new devices.",
"Internet and cloud access – networks provide connectivity to online services."
],
example:"A college LAN can connect computers in laboratories so students can access a common server, printer and internet connection."
},

{
title:"2. Types of Computer Networks",
explain:`Networks can be classified according to geographical coverage, ownership and purpose.

PAN (Personal Area Network) covers a very small area around a person, such as Bluetooth between a phone and earbuds.

LAN (Local Area Network) covers a room, building, laboratory or campus section. It normally provides high speed and is commonly managed by one organization.

MAN (Metropolitan Area Network) covers a city or large metropolitan area.

WAN (Wide Area Network) covers large geographical areas such as countries or continents. The Internet is the best-known example of a global interconnected network.`,
points:[
"PAN – very small personal range.",
"LAN – building, office, laboratory or campus.",
"MAN – city-level network.",
"WAN – country/continent-level network.",
"Internet – global interconnection of networks."
],
diagram:"network-types"
},

{
title:"3. Network Technologies",
explain:`Network technology describes the methods and communication technologies used to connect devices.

Ethernet is widely used for wired LAN communication. Wi-Fi provides wireless LAN connectivity. Bluetooth is commonly used for short-range personal communication. Cellular networks provide mobile connectivity over large areas.

Modern systems may combine wired Ethernet, Wi-Fi, fiber optics, cellular networks and satellite communication.`,
points:[
"Ethernet – common wired LAN technology.",
"Wi-Fi – wireless local connectivity.",
"Bluetooth – short-range personal connectivity.",
"Fiber optic – high-speed long-distance communication.",
"Cellular – mobile wide-area connectivity.",
"Satellite – communication over very large geographic areas."
]
},

{
title:"4. Network Protocols",
explain:`A protocol is a set of rules that defines how devices communicate.

Protocols specify how data is formatted, addressed, transmitted, received and interpreted. Without common protocols, devices from different manufacturers could not reliably communicate.

Examples include HTTP/HTTPS for web communication, DNS for name resolution, TCP and UDP for transport communication, IP for internetworking and Ethernet for LAN communication.`,
points:[
"Protocol defines communication rules.",
"Specifies message format.",
"Defines addressing.",
"Controls communication procedures.",
"Supports interoperability between different systems."
]
},

{
title:"5. OSI Reference Model",
explain:`The OSI (Open Systems Interconnection) model is a conceptual seven-layer model used to understand network communication.

The seven layers are Application, Presentation, Session, Transport, Network, Data Link and Physical.

Each layer performs a specific group of functions and provides services to the layer above it. Data moves down the layers at the sender and up the layers at the receiver.

The OSI model is especially useful for learning, designing networks and troubleshooting communication problems.`,
points:[
"Layer 7 – Application: network services used by applications.",
"Layer 6 – Presentation: translation, encryption and compression.",
"Layer 5 – Session: establishes and manages sessions.",
"Layer 4 – Transport: end-to-end delivery, reliability and flow control.",
"Layer 3 – Network: logical addressing and routing.",
"Layer 2 – Data Link: framing, MAC addressing and error detection.",
"Layer 1 – Physical: transmission of raw bits."
],
diagram:"osi"
},

{
title:"6. TCP/IP Reference Model",
explain:`The TCP/IP model is the practical networking architecture used by the Internet.

It is commonly represented using four layers: Application, Transport, Internet and Network Access.

The Application layer includes protocols such as HTTP, DNS and SMTP. The Transport layer includes TCP and UDP. The Internet layer mainly uses IP. The Network Access layer handles local network technologies such as Ethernet and Wi-Fi.`,
points:[
"Application layer – application-level network services.",
"Transport layer – process-to-process communication.",
"Internet layer – logical addressing and routing.",
"Network Access layer – local network transmission."
],
diagram:"tcpip"
},

{
title:"7. Standardization, Policy, Legal and Social Issues",
explain:`Networking requires standards so equipment and software from different vendors can communicate. Organizations such as ISO, IEEE, IETF and ITU contribute to networking standards.

Network usage also creates policy, legal and social responsibilities. Privacy, data protection, unauthorized access, cybercrime, intellectual property, digital identity and responsible use are important considerations.

Students should understand that technical networking decisions can have legal and social consequences.`,
points:[
"Standards improve interoperability.",
"IEEE develops many LAN-related standards.",
"IETF develops Internet standards and protocols.",
"Privacy protects personal information.",
"Unauthorized access is a security and legal concern.",
"Copyright protects original digital content.",
"Responsible network usage is essential."
]
}

]},

2:{
title:"Data Link Layer and Network Layer",
hours:"07 Hours",
summary:"Data link layer services, framing, error control, network layer design, routing, traffic management, internetworking, IP addresses and port-related addressing concepts.",

topics:[

{
title:"1. Data Link Layer",
explain:`The Data Link Layer is Layer 2 of the OSI model. It provides node-to-node delivery over a physical link.

Its responsibilities include framing, physical addressing, error detection/correction, flow control and media access control.

The layer takes packets from the network layer and encapsulates them into frames. At the receiver, frames are checked and the original packet is delivered to the network layer.`,
points:[
"Provides node-to-node delivery.",
"Creates frames.",
"Uses physical/MAC addresses.",
"Detects transmission errors.",
"Can provide flow control.",
"Controls access to shared media."
],
diagram:"datalink"
},

{
title:"2. Framing",
explain:`Framing is the process of dividing a continuous stream of bits into manageable units called frames.

A frame normally contains control information such as source and destination addresses, data and an error-detection field.

Common framing approaches include character count, byte stuffing and bit stuffing.`,
points:[
"Creates identifiable data units.",
"Adds header and trailer information.",
"Helps synchronization.",
"Supports error detection.",
"Byte stuffing inserts escape bytes when required.",
"Bit stuffing inserts a 0 after a sequence of five 1s in relevant bit-oriented protocols."
],
diagram:"frame"
},

{
title:"3. Error Detection and Correction",
explain:`Errors can occur because of noise, interference, attenuation or hardware problems.

Error detection determines whether received data has been corrupted. Common techniques include parity, checksum and CRC.

Error correction attempts to recover the original information. Some systems retransmit corrupted frames while others use error-correcting codes.`,
points:[
"Parity – simple error detection.",
"Checksum – arithmetic-based verification.",
"CRC – polynomial-based powerful error detection.",
"Retransmission can recover damaged frames.",
"Hamming code is an example of error correction."
]
},

{
title:"4. Network Layer",
explain:`The Network Layer is Layer 3 of the OSI model. Its major responsibilities are logical addressing, routing and forwarding.

The network layer determines how packets travel from a source network to a destination network. Routers operate primarily at this layer.

IP is the most important protocol family used for Internet network-layer communication.`,
points:[
"Logical addressing.",
"Routing.",
"Packet forwarding.",
"Internetworking.",
"Traffic management.",
"Fragmentation/reassembly concepts.",
"Supports communication between different networks."
],
diagram:"routing"
},

{
title:"5. Routing Algorithms",
explain:`Routing is the process of selecting a path for packets.

Routing algorithms may use information such as hop count, delay, bandwidth, cost and network topology.

Distance Vector routing maintains distance information to destinations. Link State routing builds knowledge about network topology and computes shortest paths.`,
points:[
"Routing selects suitable paths.",
"Static routing uses manually configured routes.",
"Dynamic routing adapts to network changes.",
"Distance Vector exchanges routing information with neighbors.",
"Link State maintains topology information.",
"Shortest path algorithms can calculate efficient routes."
]
},

{
title:"6. Traffic Management",
explain:`Traffic management controls network congestion and improves quality of service.

Congestion occurs when too many packets compete for limited network resources. Network devices may use queue management, traffic shaping, admission control and congestion-control techniques.

Good traffic management helps maintain throughput, delay and reliability.`,
points:[
"Congestion means excessive traffic load.",
"Traffic shaping regulates transmission rate.",
"Queuing manages packets waiting for transmission.",
"Admission control decides whether new traffic should be accepted.",
"QoS can prioritize important traffic."
]
},

{
title:"7. Internetworking",
explain:`Internetworking means connecting multiple independent networks so that devices can communicate across them.

Routers connect different networks and forward packets using logical addresses. The Internet is a huge example of internetworking.

Different physical technologies can participate in one interconnected system because IP provides a common network-layer mechanism.`,
points:[
"Connects different networks.",
"Routers perform forwarding.",
"IP provides logical addressing.",
"Supports heterogeneous networks.",
"Forms the basis of the Internet."
]
},

{
title:"8. IP Addresses",
explain:`An IP address is a logical address assigned to a device or network interface for network communication.

IPv4 uses 32-bit addresses and is normally written in dotted-decimal notation. IPv6 uses 128-bit addresses and provides a much larger address space.

An IP address identifies a network location/interface and is different from a physical MAC address.`,
points:[
"IPv4 = 32 bits.",
"IPv6 = 128 bits.",
"IPv4 example format: 192.168.1.10.",
"IPv6 uses hexadecimal notation.",
"IP addresses support logical routing.",
"Private and public addressing serve different purposes."
],
diagram:"ip"
},

{
title:"9. Port Addresses",
explain:`A port number identifies a particular application or service endpoint on a host.

IP addresses identify the host/interface, while port numbers help identify the destination process or service.

Examples include HTTP 80, HTTPS 443, DNS 53 and SSH 22. Port numbers are associated mainly with transport-layer communication.`,
points:[
"IP identifies the host/interface.",
"Port identifies a service/process endpoint.",
"TCP and UDP use port numbers.",
"Well-known ports are commonly associated with standard services."
]
}

]},

3:{
title:"Transport and Application Layer",
hours:"06 Hours",
summary:"Transport service, transport protocol elements, UDP, TCP, DNS, electronic mail, World Wide Web, streaming audio/video and content delivery.",

topics:[
{
title:"1. Transport Service",
explain:`The Transport Layer provides process-to-process communication between applications running on different hosts.

Its functions may include segmentation, reassembly, reliability, flow control, multiplexing and connection management.

TCP provides reliable connection-oriented communication while UDP provides connectionless datagram communication with lower overhead.`,
points:[
"Process-to-process delivery.",
"Segmentation and reassembly.",
"Multiplexing using port numbers.",
"Flow control.",
"Reliability when supported by the protocol.",
"Connection management."
],
diagram:"transport"
},
{
title:"2. UDP",
explain:`UDP is a connectionless transport protocol. It sends datagrams without establishing a connection and does not guarantee delivery, ordering or retransmission.

Its low overhead makes it useful when speed and low delay are more important than guaranteed delivery, such as DNS queries, real-time media and certain interactive applications.`,
points:[
"Connectionless.",
"Low overhead.",
"No guaranteed delivery.",
"No guaranteed ordering.",
"Uses source and destination ports.",
"Suitable for delay-sensitive applications."
]
},
{
title:"3. TCP",
explain:`TCP is a connection-oriented transport protocol that provides reliable byte-stream communication.

TCP uses sequence numbers, acknowledgements, retransmissions, flow control and congestion control. It begins communication using a connection-establishment procedure and terminates the connection using controlled procedures.`,
points:[
"Connection-oriented.",
"Reliable delivery.",
"Ordered byte stream.",
"Uses acknowledgements.",
"Retransmits lost data.",
"Flow and congestion control."
],
diagram:"tcp"
},
{
title:"4. Domain Name System",
explain:`DNS translates human-readable domain names into IP addresses and also supports other name-related information.

When a user enters a website name, a DNS resolver can obtain the corresponding address from DNS servers. DNS uses a hierarchical namespace including root, top-level domains and authoritative servers.`,
points:[
"Converts names to IP addresses.",
"Uses hierarchical naming.",
"Improves usability of Internet services.",
"DNS commonly uses port 53.",
"Supports different record types."
],
diagram:"dns"
},
{
title:"5. Electronic Mail",
explain:`Electronic mail allows users to exchange messages over computer networks.

SMTP is commonly used for sending mail. POP3 and IMAP are commonly used for retrieving/accessing mail. Email systems use servers to store and transfer messages.`,
points:[
"SMTP – sending/transfer of mail.",
"POP3 – retrieval model.",
"IMAP – server-based mailbox access and synchronization.",
"Mail servers handle message transfer and storage."
]
},
{
title:"6. World Wide Web",
explain:`The World Wide Web is a distributed information system accessed using web browsers.

A browser sends HTTP/HTTPS requests to web servers. The server responds with resources such as HTML, CSS, JavaScript, images or API data.

HTTPS adds encryption and authentication through TLS.`,
points:[
"Browser acts as client.",
"Web server provides resources.",
"HTTP/HTTPS defines web communication.",
"HTML structures content.",
"CSS controls presentation.",
"JavaScript provides behavior."
],
diagram:"web"
},
{
title:"7. Streaming Audio and Video",
explain:`Streaming allows media to be consumed while data is being delivered instead of waiting for the complete file.

Streaming systems divide media into small segments or packets and deliver them according to network conditions. Buffering helps handle temporary variation in network speed.`,
points:[
"Media is delivered continuously.",
"Buffering reduces interruption.",
"Adaptive streaming can change quality.",
"Network delay and bandwidth affect experience."
]
},
{
title:"8. Content Delivery",
explain:`Content Delivery Networks (CDNs) distribute content through geographically distributed servers or edge locations.

A user can often receive content from a nearby edge location, reducing latency and improving performance.`,
points:[
"Uses distributed edge servers.",
"Reduces latency.",
"Improves scalability.",
"Reduces load on origin servers.",
"Useful for websites, video and static assets."
]
}
]},

4:{
title:"Cloud Computing and Virtualization",
hours:"07 Hours",
summary:"Introduction and evolution of cloud computing, service benefits and limitations, cluster/grid/utility computing and virtualization.",

topics:[
{
title:"1. Introduction to Cloud Computing",
explain:`Cloud computing provides computing resources such as servers, storage, databases, networking and software through a network on demand.

Instead of owning and maintaining every physical resource, organizations can consume resources as services and scale them according to workload.`,
points:[
"On-demand resource access.",
"Network-based service delivery.",
"Elastic scaling.",
"Resource pooling.",
"Measured usage.",
"Reduced infrastructure management."
],
diagram:"cloud"
},
{
title:"2. Evolution of Computing Models",
explain:`Computing evolved from centralized mainframes to personal computers, client-server systems, distributed computing, clusters, grids, utility computing and cloud computing.

Cloud computing combines virtualization, large-scale data centers, networking, automation and service-oriented delivery.`,
points:[
"Mainframe computing.",
"Personal computing.",
"Client-server computing.",
"Distributed computing.",
"Cluster computing.",
"Grid computing.",
"Utility computing.",
"Cloud computing."
]
},
{
title:"3. Pros and Cons of Cloud Computing",
explain:`Cloud computing can reduce upfront infrastructure investment and provide flexible capacity. However, organizations must consider security, privacy, dependency on connectivity, vendor lock-in, compliance and service availability.`,
points:[
"Advantages: scalability.",
"Advantages: reduced upfront cost.",
"Advantages: rapid provisioning.",
"Advantages: global access.",
"Challenges: security and privacy.",
"Challenges: network dependency.",
"Challenges: vendor lock-in.",
"Challenges: outages and compliance concerns."
]
},
{
title:"4. Cluster Computing",
explain:`Cluster computing connects multiple computers so they work together as a coordinated system.

Clusters are often used for high availability, high performance and workload distribution.`,
points:[
"Multiple connected computers.",
"Can provide high availability.",
"Can improve performance.",
"Workloads can be distributed."
],
diagram:"cluster"
},
{
title:"5. Grid Computing",
explain:`Grid computing coordinates geographically distributed and heterogeneous resources to solve large computational problems.

Resources may belong to different organizations and may be managed independently.`,
points:[
"Distributed resources.",
"Heterogeneous systems.",
"Resource sharing.",
"Useful for large computational tasks."
]
},
{
title:"6. Utility Computing",
explain:`Utility computing treats computing resources similarly to utilities such as electricity: users consume resources and are charged according to usage or service arrangement.`,
points:[
"Pay/use-oriented concept.",
"Flexible resource consumption.",
"Reduces need for owning all infrastructure."
]
},
{
title:"7. Virtualization",
explain:`Virtualization abstracts physical computing resources and allows multiple virtual environments to operate on one physical machine.

A hypervisor manages virtual machines and allocates resources such as CPU, memory and storage.`,
points:[
"Creates virtual resources.",
"Improves hardware utilization.",
"Provides isolation.",
"Supports server consolidation.",
"Enables flexible resource allocation.",
"Hypervisor manages virtual machines."
],
diagram:"virtualization"
},
{
title:"8. Virtualization Types",
explain:`Common forms include server virtualization, storage virtualization, network virtualization and desktop virtualization.

Virtual machines may run different operating systems on the same physical host when supported by the virtualization platform.`,
points:[
"Server virtualization.",
"Storage virtualization.",
"Network virtualization.",
"Desktop virtualization.",
"Application-level virtualization."
]
}
]},

5:{
title:"Cloud Computing Architecture",
hours:"07 Hours",
summary:"NIST cloud architecture, cloud service layers, role of networks and web services, IaaS, PaaS, SaaS and deployment models.",

topics:[
{
title:"1. NIST Cloud Computing Architecture",
explain:`The NIST cloud model describes essential characteristics, service models and deployment models of cloud computing.

The three major service models are Infrastructure as a Service, Platform as a Service and Software as a Service. Deployment models include public, private, community and hybrid cloud.`,
points:[
"On-demand self-service.",
"Broad network access.",
"Resource pooling.",
"Rapid elasticity.",
"Measured service.",
"IaaS, PaaS and SaaS.",
"Public, private, community and hybrid deployment."
],
diagram:"cloudlayers"
},
{
title:"2. Role of Networks in Cloud Computing",
explain:`Networks are fundamental to cloud computing because users and applications access cloud resources through network connections.

High bandwidth, low latency, reliability, routing, security and load balancing influence cloud application performance.`,
points:[
"Provides connectivity.",
"Carries application traffic.",
"Connects users to data centers.",
"Supports load balancing.",
"Enables distributed services.",
"Security controls protect communication."
]
},
{
title:"3. Role of Web Services",
explain:`Web services allow applications to communicate using standardized network interfaces.

REST APIs and other service interfaces enable cloud applications to consume functionality from remote systems.`,
points:[
"Application-to-application communication.",
"API-based service access.",
"Supports distributed applications.",
"Enables integration between systems."
]
},
{
title:"4. IaaS",
explain:`Infrastructure as a Service provides virtualized infrastructure such as virtual machines, storage and networking.

The cloud provider manages physical infrastructure while the customer manages operating systems, applications and other software according to the service.`,
points:[
"Virtual machines.",
"Storage.",
"Networking.",
"Flexible infrastructure.",
"Customer manages higher-level software."
]
},
{
title:"5. PaaS",
explain:`Platform as a Service provides a managed application-development and deployment platform.

Developers can focus on application code while the platform manages many infrastructure and runtime responsibilities.`,
points:[
"Application development platform.",
"Managed runtime.",
"Developer-focused service.",
"Reduces infrastructure management."
]
},
{
title:"6. SaaS",
explain:`Software as a Service provides complete software applications over a network.

Users normally access SaaS applications through a browser or application interface without managing the underlying infrastructure.`,
points:[
"Complete application.",
"Provider manages infrastructure and application platform.",
"Users consume software as a service.",
"Usually accessible over network."
],
diagram:"service-models"
},
{
title:"7. Deployment Models",
explain:`Public cloud infrastructure is offered for broad use. Private cloud is dedicated to a particular organization. Community cloud serves organizations with shared requirements. Hybrid cloud combines multiple cloud environments.

The choice depends on cost, control, security, compliance and workload requirements.`,
points:[
"Public cloud.",
"Private cloud.",
"Community cloud.",
"Hybrid cloud."
],
diagram:"deployment"
}
]},

6:{
title:"Cloud Applications",
hours:"06 Hours",
summary:"Media applications, multiplayer online gaming, AWS compute/storage/communication services, Google App Engine, Microsoft Azure core concepts and SQL Azure.",

topics:[
{
title:"1. Media Applications in Cloud",
explain:`Cloud infrastructure is widely used for media storage, processing, transcoding, distribution and streaming.

Media applications require scalable storage, high network bandwidth and content delivery infrastructure.`,
points:[
"Media storage.",
"Video processing.",
"Transcoding.",
"Streaming.",
"CDN distribution.",
"Elastic scaling."
]
},
{
title:"2. Multiplayer Online Gaming",
explain:`Cloud platforms support multiplayer games by providing scalable servers, databases, matchmaking, communication services and global distribution.

Game workloads can vary greatly depending on the number of active players, so elastic infrastructure is useful.`,
points:[
"Game server hosting.",
"Matchmaking.",
"Player data storage.",
"Scalability.",
"Low-latency networking.",
"Monitoring and analytics."
]
},
{
title:"3. Amazon Web Services – Compute Services",
explain:`Cloud compute services provide virtual or managed computing capacity for applications.

Compute platforms can run web servers, APIs, background jobs and other workloads. The exact service choice depends on workload requirements.`,
points:[
"Virtual computing.",
"Elastic scaling.",
"Application hosting.",
"Load distribution.",
"Pay/use-oriented resource management."
]
},
{
title:"4. AWS Storage Services",
explain:`Cloud storage provides scalable storage for objects, files, databases and block-level data depending on the service.

Applications select storage according to performance, durability, access pattern and data structure requirements.`,
points:[
"Object storage.",
"Block storage.",
"File storage.",
"Database storage.",
"Backup and archival."
]
},
{
title:"5. Communication Services",
explain:`Cloud communication services help applications exchange messages, notifications, events and requests.

Messaging systems improve reliability and decouple components in distributed applications.`,
points:[
"Queues.",
"Publish/subscribe messaging.",
"Notifications.",
"Event-driven communication.",
"Application integration."
]
},
{
title:"6. Google App Engine",
explain:`Google App Engine is a platform for deploying applications without directly managing traditional server infrastructure.

It provides managed application hosting and scaling features so developers can focus on application development.`,
points:[
"Managed application platform.",
"Application deployment.",
"Automatic scaling capabilities.",
"Developer-focused environment.",
"Integration with cloud services."
]
},
{
title:"7. Microsoft Azure Core Concepts",
explain:`Azure provides cloud services for computing, storage, networking, databases, analytics and application development.

Azure resources are organized and managed through subscriptions, resource groups and regional infrastructure concepts.`,
points:[
"Compute.",
"Storage.",
"Networking.",
"Databases.",
"Identity and access.",
"Monitoring and management."
]
},
{
title:"8. SQL Azure",
explain:`Azure SQL services provide managed relational database capabilities.

Managed database services reduce the need for customers to maintain physical database infrastructure and can provide scalability, backup and security features.`,
points:[
"Managed relational database.",
"SQL-based data access.",
"Backups.",
"Scalability.",
"Security and access management."
]
}
]}

};

const questions = [

[1,2,"What is a computer network?","A computer network is a group of interconnected devices that communicate and share resources such as data, applications, printers and Internet connectivity."],
[1,2,"Define LAN and WAN.","LAN covers a small area such as a building or campus, while WAN covers a large geographical area such as a country or continent."],
[1,2,"What is a protocol?","A protocol is a set of communication rules defining message format, addressing, transmission and interpretation."],
[1,2,"List the seven OSI layers.","Application, Presentation, Session, Transport, Network, Data Link and Physical."],
[1,2,"What is the purpose of the OSI model?","It provides a conceptual framework for understanding and troubleshooting network communication by dividing functions into layers."],
[1,5,"Explain the uses of computer networks.","Networks enable resource sharing, communication, remote access, information sharing, cost reduction, reliability, scalability and access to Internet/cloud services."],
[1,5,"Explain OSI reference model.","OSI divides communication into seven layers. Application provides network services, Presentation handles representation/encryption/compression, Session manages sessions, Transport provides end-to-end communication, Network performs routing, Data Link performs framing and Physical transmits bits."],
[1,5,"Compare OSI and TCP/IP models.","OSI is a seven-layer conceptual model, while TCP/IP is the practical Internet architecture commonly represented with four layers. OSI separates Session and Presentation, whereas TCP/IP includes their functions in Application."],
[1,10,"Explain OSI model in detail with functions of all layers.","The OSI model has seven layers: Application, Presentation, Session, Transport, Network, Data Link and Physical. Each layer performs specific functions and communicates with adjacent layers. Application provides network services; Presentation handles translation, compression and encryption; Session manages sessions; Transport provides end-to-end delivery, reliability and flow control; Network performs logical addressing and routing; Data Link performs framing and error detection; Physical transmits raw bits."],
[1,10,"Explain types of computer networks with examples.","PAN covers personal devices, LAN covers rooms/buildings/campuses, MAN covers a metropolitan area, and WAN covers large geographical areas. The Internet is a global interconnection of networks."],

[2,2,"What is framing?","Framing divides a bit stream into identifiable data units called frames."],
[2,2,"What is CRC?","CRC is a polynomial-based error detection technique used to detect corruption in transmitted data."],
[2,2,"What is routing?","Routing is the process of selecting a path for packets from source to destination."],
[2,2,"What is an IP address?","An IP address is a logical address used to identify a network interface and support packet routing."],
[2,2,"What is a port number?","A port number identifies an application or service endpoint associated with transport-layer communication."],
[2,5,"Explain framing techniques.","Framing divides a stream into frames. Common techniques include character count, byte stuffing and bit stuffing. These techniques help identify frame boundaries and maintain synchronization."],
[2,5,"Explain error detection and correction.","Parity, checksum and CRC can detect errors. Correction may use retransmission or error-correcting codes such as Hamming code."],
[2,5,"Explain network layer functions.","The network layer provides logical addressing, routing, forwarding, internetworking and traffic-management-related functions."],
[2,10,"Explain Data Link Layer in detail.","The Data Link Layer provides node-to-node delivery. Its important functions are framing, MAC addressing, error detection, flow control and media access control. It receives packets from the network layer and encapsulates them into frames for transmission."],
[2,10,"Explain routing algorithms and routing concepts.","Routing selects suitable paths through a network. Static routing is manually configured, while dynamic routing adapts to topology changes. Distance Vector methods exchange route information with neighbors, while Link State methods maintain topology information and calculate paths."],
[2,10,"Explain IP addressing and port addressing.","IP addressing identifies a network interface logically and supports routing. IPv4 uses 32 bits while IPv6 uses 128 bits. Port addressing identifies a service/process endpoint at the transport layer. Together, IP address and port information help identify the destination host and application service."],

[3,2,"What is TCP?","TCP is a connection-oriented transport protocol providing reliable ordered byte-stream communication."],
[3,2,"What is UDP?","UDP is a connectionless transport protocol with low overhead and no built-in guarantee of delivery or ordering."],
[3,2,"What is DNS?","DNS is a hierarchical naming system that maps domain names to IP addresses and other information."],
[3,2,"What is WWW?","The World Wide Web is a distributed information system accessed through web browsers using HTTP/HTTPS."],
[3,5,"Compare TCP and UDP.","TCP is connection-oriented and provides reliable ordered delivery, acknowledgements, retransmission, flow control and congestion control. UDP is connectionless, lightweight and does not guarantee delivery or ordering."],
[3,5,"Explain DNS.","DNS provides hierarchical domain-name resolution. A resolver obtains information from DNS infrastructure so users can access services using human-readable domain names."],
[3,5,"Explain electronic mail protocols.","SMTP is used for sending/transferring email, while POP3 and IMAP are used to retrieve/access mailbox messages."],
[3,10,"Explain TCP in detail.","TCP provides reliable connection-oriented byte-stream communication. It uses sequence numbers, acknowledgements, retransmissions, flow control and congestion control. It establishes a connection before normal data transfer and provides ordered delivery."],
[3,10,"Explain transport layer services and protocols.","Transport layer provides process-to-process delivery, segmentation, reassembly, multiplexing, flow control and connection management. TCP provides reliable communication, while UDP provides low-overhead connectionless datagrams."],

[4,2,"What is cloud computing?","Cloud computing provides computing resources such as servers, storage and applications over a network on demand."],
[4,2,"What is virtualization?","Virtualization abstracts physical resources so multiple virtual environments can operate on shared physical infrastructure."],
[4,2,"What is a hypervisor?","A hypervisor is software or firmware that manages virtual machines and allocates physical resources to them."],
[4,5,"Explain advantages and disadvantages of cloud computing.","Advantages include scalability, rapid provisioning, flexible access and reduced infrastructure burden. Challenges include security, privacy, connectivity dependency, vendor lock-in and compliance."],
[4,5,"Explain cluster and grid computing.","Cluster computing coordinates connected computers as a system, often for performance or availability. Grid computing coordinates distributed and heterogeneous resources that may be geographically separated."],
[4,10,"Explain virtualization and its types.","Virtualization abstracts physical resources and creates virtual environments. Types include server, storage, network, desktop and application virtualization. It improves utilization, isolation and flexibility."],
[4,10,"Explain cloud computing and its evolution.","Computing evolved through mainframes, personal computers, client-server systems, distributed systems, clusters, grids and utility computing to cloud computing. Cloud combines virtualization, automation, networking and large-scale data centers to provide on-demand services."],

[5,2,"What is IaaS?","IaaS provides infrastructure resources such as virtual machines, storage and networking."],
[5,2,"What is PaaS?","PaaS provides a managed platform for application development and deployment."],
[5,2,"What is SaaS?","SaaS provides complete software applications to users over a network."],
[5,2,"Name cloud deployment models.","Public, private, community and hybrid cloud."],
[5,5,"Compare IaaS, PaaS and SaaS.","IaaS provides infrastructure, PaaS provides an application platform, and SaaS provides complete software applications. As we move from IaaS to SaaS, the provider manages more of the technology stack."],
[5,5,"Explain cloud deployment models.","Public cloud is broadly available, private cloud is dedicated to an organization, community cloud serves organizations with shared requirements, and hybrid cloud combines multiple environments."],
[5,10,"Explain NIST cloud architecture and service models.","The cloud model includes characteristics such as on-demand self-service, broad network access, resource pooling, rapid elasticity and measured service. Service models are IaaS, PaaS and SaaS. Deployment models include public, private, community and hybrid cloud."],

[6,2,"What is a CDN?","A Content Delivery Network uses distributed edge locations to deliver content closer to users and reduce latency."],
[6,2,"What is cloud gaming infrastructure?","It is cloud-based infrastructure providing game servers, storage, networking, matchmaking and scalable resources for multiplayer applications."],
[6,2,"What is Google App Engine?","It is a managed application platform for deploying applications without directly managing traditional server infrastructure."],
[6,5,"Explain cloud applications for media.","Cloud media systems provide scalable storage, processing, transcoding, streaming and distribution through networks and edge infrastructure."],
[6,5,"Explain cloud applications in multiplayer gaming.","Cloud platforms provide game servers, matchmaking, player-data storage, scalable compute and low-latency networking for multiplayer workloads."],
[6,10,"Explain AWS, Google App Engine and Microsoft Azure applications.","Cloud platforms provide compute, storage, networking, databases and managed application services. Google App Engine provides managed application hosting, while Azure provides broad cloud capabilities including compute, storage, networking and managed databases. AWS similarly provides scalable infrastructure and managed services for application workloads."],
[6,10,"Explain cloud application architecture for a media service.","A media service can use object storage for media files, compute for processing/transcoding, databases for metadata, CDN/edge locations for delivery and monitoring/security services for operational control. Scaling allows the system to handle changing user demand."]
];

const mcqs=[
["Which OSI layer performs routing?",["Physical","Data Link","Network","Application"],2],
["Which protocol is connection-oriented?",["UDP","TCP","IP","DNS"],1],
["DNS commonly uses which port?",["21","25","53","80"],2],
["IPv4 address size is:",["16 bits","32 bits","64 bits","128 bits"],1],
["Which service model provides complete software?",["IaaS","PaaS","SaaS","DaaS"],2],
["Which device primarily forwards packets between networks?",["Hub","Router","Repeater","Keyboard"],1],
["Which layer creates frames?",["Application","Transport","Data Link","Session"],2],
["Which protocol is lightweight and connectionless?",["TCP","UDP","HTTP","SSH"],1],
["Virtual machines are managed by:",["Compiler","Hypervisor","Browser","DNS"],1],
["Which deployment model combines multiple cloud environments?",["Public","Private","Hybrid","PAN"],2],
["Which technology reduces content delivery latency?",["CDN","BIOS","RAM","ALU"],0],
["Which is an error detection technique?",["CRC","HTML","CSS","DNS"],0]
];

let selectedRating=0;
let quizIndex=0;
let score=0;

function showPage(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  const page=document.getElementById(id);
  if(page) page.classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
  document.querySelector("nav").classList.remove("open");

  if(id==="syllabus") renderUnits();
  if(id==="questions") renderQuestions();
  if(id==="practice") startQuiz();
}

function toggleMenu(){
  document.querySelector("nav").classList.toggle("open");
}

function toggleTheme(){
  const current=document.documentElement.getAttribute("data-theme");
  const next=current==="light"?"dark":"light";
  document.documentElement.setAttribute("data-theme",next);
  localStorage.setItem("theme",next);
}

function showUnit(n){
  showPage("unitPage");
  const u=units[n];

  let html=`
  <div class="unit-detail">
    <button class="back-btn" onclick="showPage('syllabus')">← Back to Syllabus</button>

    <div class="unit-hero">
      <span>UNIT ${n} • ${u.hours}</span>
      <h1>${u.title}</h1>
      <p>${u.summary}</p>
    </div>
  `;

  u.topics.forEach((t,i)=>{
    html+=`
    <article class="topic-section">
      <h2>${t.title}</h2>
      <p>${t.explain}</p>
    `;

    if(t.diagram){
      html+=diagramHTML(t.diagram,t.title);
    }

    if(t.points){
      html+=`
      <div class="exam-points">
        <strong>⭐ Exam Key Points</strong>
        <ul>
          ${t.points.map(x=>`<li>${x}</li>`).join("")}
        </ul>
      </div>`;
    }

    html+=`
      <a class="google-diagram"
         href="https://www.google.com/search?tbm=isch&q=${encodeURIComponent(t.title+" computer network diagram")}"
         target="_blank">
         🔎 Search Diagram on Google
      </a>
    </article>`;
  });

  html+=`
    <div class="section-title">
      <span>UNIT ${n}</span>
      <h2>Important Question Bank</h2>
    </div>

    <div id="unitQuestions${n}">
      ${questions.filter(q=>q[0]===n).map(questionHTML).join("")}
    </div>
  </div>`;

  document.getElementById("unitContent").innerHTML=html;
}

function renderUnits(){

  const box=document.getElementById("unitCards");

  box.innerHTML=Object.entries(units).map(([n,u])=>`
    <article class="unit-card" onclick="showUnit(${n})">

      <div class="unit-top">
        <div class="unit-number">${String(n).padStart(2,"0")}</div>

        <div>
          <h2>${u.title}</h2>
          <p>${u.hours}</p>
        </div>
      </div>

      <div class="topic-tags">
        ${u.topics.map(t=>`<span class="tag">${t.title.replace(/^\d+\.\s*/,"")}</span>`).join("")}
      </div>

    </article>
  `).join("");
}

function questionHTML(q){

  return `
  <article class="question-card">

    <span class="marks">${q[1]} MARKS</span>

    <h3>${q[2]}</h3>

    <div class="paper-meta">
      <div><b>${q[1]}</b><span>Marks</span></div>
      <div><b>CO${q[0]}</b><span>CO</span></div>
      <div><b>${q[1]>=10?3:2}</b><span>BL</span></div>
      <div><b>1,2</b><span>PO</span></div>
      <div><b>2.1.1</b><span>PI</span></div>
    </div>

    <div class="answer">
      <strong>Answer:</strong><br>
      ${q[3]}
    </div>

  </article>`;
}

function renderQuestions(){

  const unit=document.getElementById("questionUnit").value;
  const marks=document.getElementById("questionMarks").value;

  let data=questions.filter(q=>
    (unit==="all"||String(q[0])===unit) &&
    (marks==="all"||String(q[1])===marks)
  );

  document.getElementById("questionContainer").innerHTML=
    data.map(questionHTML).join("") ||
    `<div class="topic-section"><h2>No questions found</h2><p>Try another filter.</p></div>`;
}

function generateRandomQuestions(){

  const unit=document.getElementById("questionUnit").value;
  const marks=document.getElementById("questionMarks").value;

  let data=questions.filter(q=>
    (unit==="all"||String(q[0])===unit) &&
    (marks==="all"||String(q[1])===marks)
  );

  data=data.sort(()=>Math.random()-.5).slice(0,Math.min(12,data.length));

  document.getElementById("questionContainer").innerHTML=`
    <div class="topic-section">
      <span class="mini-label">RANDOMIZED SET</span>
      <h2>Fresh Question Paper</h2>
      <p>Questions are shuffled every time you generate a new set.</p>
    </div>
    ${data.map(questionHTML).join("")}
  `;
}

function diagramHTML(type,title){

  const diagrams={

    "network-types":`
    <div class="diagram">
      <div class="diagram-title">Computer Network Types</div>
      <div class="flow">
        <div class="flow-box">PAN<br><small>Personal</small></div>
        <div class="arrow">→</div>
        <div class="flow-box">LAN<br><small>Building</small></div>
        <div class="arrow">→</div>
        <div class="flow-box">MAN<br><small>City</small></div>
        <div class="arrow">→</div>
        <div class="flow-box">WAN<br><small>Global</small></div>
      </div>
    </div>`,

    "osi":`
    <div class="diagram">
      <div class="diagram-title">OSI Seven Layer Model</div>
      <div class="flow">
        ${["Application","Presentation","Session","Transport","Network","Data Link","Physical"].map(x=>`<div class="flow-box">${x}</div>`).join('<div class="arrow">↓</div>')}
      </div>
    </div>`,

    "tcpip":`
    <div class="diagram">
      <div class="diagram-title">TCP/IP Model</div>
      <div class="flow">
        ${["Application","Transport","Internet","Network Access"].map(x=>`<div class="flow-box">${x}</div>`).join('<div class="arrow">↓</div>')}
      </div>
    </div>`,

    "datalink":`
    <div class="diagram">
      <div class="diagram-title">Data Link Communication</div>
      <div class="flow">
        <div class="flow-box">Network Layer<br>Packet</div>
        <div class="arrow">↓</div>
        <div class="flow-box">Data Link<br>Frame</div>
        <div class="arrow">↓</div>
        <div class="flow-box">Physical<br>Bits</div>
      </div>
    </div>`,

    "frame":`
    <div class="diagram">
      <div class="diagram-title">General Frame Structure</div>
      <div class="flow">
        <div class="flow-box">Header</div>
        <div class="flow-box">Source / Destination</div>
        <div class="flow-box">Data</div>
        <div class="flow-box">FCS / Trailer</div>
      </div>
    </div>`,

    "routing":`
    <div class="diagram">
      <div class="diagram-title">Basic Routing</div>
      <div class="flow">
        <div class="flow-box">Source</div>
        <div class="arrow">→</div>
        <div class="flow-box">Router A</div>
        <div class="arrow">→</div>
        <div class="flow-box">Router B</div>
        <div class="arrow">→</div>
        <div class="flow-box">Destination</div>
      </div>
    </div>`,

    "ip":`
    <div class="diagram">
      <div class="diagram-title">IP + Port Concept</div>
      <div class="flow">
        <div class="flow-box">IP Address<br>192.168.1.10</div>
        <div class="arrow">:</div>
        <div class="flow-box">Port<br>443</div>
        <div class="arrow">→</div>
        <div class="flow-box">HTTPS Service</div>
      </div>
    </div>`,

    "transport":`
    <div class="diagram">
      <div class="diagram-title">Process-to-Process Communication</div>
      <div class="flow">
        <div class="flow-box">Application A</div>
        <div class="arrow">→</div>
        <div class="flow-box">Transport Layer<br>TCP / UDP</div>
        <div class="arrow">→</div>
        <div class="flow-box">Application B</div>
      </div>
    </div>`,

    "tcp":`
    <div class="diagram">
      <div class="diagram-title">TCP Communication</div>
      <div class="flow">
        <div class="flow-box">Client</div>
        <div class="arrow">↔</div>
        <div class="flow-box">Connection</div>
        <div class="arrow">↔</div>
        <div class="flow-box">Server</div>
      </div>
    </div>`,

    "dns":`
    <div class="diagram">
      <div class="diagram-title">DNS Resolution</div>
      <div class="flow">
        <div class="flow-box">Browser</div>
        <div class="arrow">→</div>
        <div class="flow-box">DNS Resolver</div>
        <div class="arrow">→</div>
        <div class="flow-box">DNS Server</div>
        <div class="arrow">→</div>
        <div class="flow-box">IP Address</div>
      </div>
    </div>`,

    "web":`
    <div class="diagram">
      <div class="diagram-title">Basic Web Architecture</div>
      <div class="flow">
        <div class="flow-box">Browser<br>Client</div>
        <div class="arrow">HTTP/HTTPS →</div>
        <div class="flow-box">Web Server</div>
        <div class="arrow">→</div>
        <div class="flow-box">Database / API</div>
      </div>
    </div>`,

    "cloud":`
    <div class="diagram">
      <div class="diagram-title">Cloud Computing Concept</div>
      <div class="flow">
        <div class="flow-box">User</div>
        <div class="arrow">→</div>
        <div class="flow-box">Internet</div>
        <div class="arrow">→</div>
        <div class="flow-box">Cloud</div>
        <div class="arrow">→</div>
        <div class="flow-box">Compute / Storage / Apps</div>
      </div>
    </div>`,

    "cluster":`
    <div class="diagram">
      <div class="diagram-title">Cluster Computing</div>
      <div class="flow">
        <div class="flow-box">Node 1</div>
        <div class="flow-box">Node 2</div>
        <div class="flow-box">Node 3</div>
        <div class="flow-box">Node 4</div>
      </div>
      <p style="text-align:center;margin-top:15px">All nodes cooperate as a coordinated system.</p>
    </div>`,

    "virtualization":`
    <div class="diagram">
      <div class="diagram-title">Virtualization Architecture</div>
      <div class="flow">
        <div class="flow-box">VM 1</div>
        <div class="flow-box">VM 2</div>
        <div class="flow-box">VM 3</div>
      </div>
      <div style="text-align:center;padding:12px">↓ Hypervisor ↓</div>
      <div class="flow">
        <div class="flow-box">Physical Hardware</div>
      </div>
    </div>`,

    "cloudlayers":`
    <div class="diagram">
      <div class="diagram-title">Cloud Service Layers</div>
      <div class="flow">
        <div class="flow-box">SaaS<br>Application</div>
        <div class="arrow">↑</div>
        <div class="flow-box">PaaS<br>Platform</div>
        <div class="arrow">↑</div>
        <div class="flow-box">IaaS<br>Infrastructure</div>
      </div>
    </div>`,

    "service-models":`
    <div class="diagram">
      <div class="diagram-title">IaaS → PaaS → SaaS</div>
      <div class="flow">
        <div class="flow-box">IaaS<br>Infrastructure</div>
        <div class="arrow">→</div>
        <div class="flow-box">PaaS<br>Development Platform</div>
        <div class="arrow">→</div>
        <div class="flow-box">SaaS<br>Complete Software</div>
      </div>
    </div>`,

    "deployment":`
    <div class="diagram">
      <div class="diagram-title">Cloud Deployment Models</div>
      <div class="flow">
        <div class="flow-box">Public</div>
        <div class="flow-box">Private</div>
        <div class="flow-box">Community</div>
        <div class="flow-box">Hybrid</div>
      </div>
    </div>`
  };

  return diagrams[type] || "";
}

function startQuiz(){
  quizIndex=0;
  score=0;
  document.getElementById("quizScore").textContent="Score: 0";
  showQuizQuestion();
}

function showQuizQuestion(){

  if(quizIndex>=mcqs.length){
    document.getElementById("quizQuestion").innerHTML=`
      <h2>🎉 Quiz Complete!</h2>
      <p>Your final score is <strong>${score}/${mcqs.length}</strong>.</p>`;
    document.getElementById("quizOptions").innerHTML="";
    document.getElementById("nextQuiz").textContent="Restart Quiz";
    document.getElementById("nextQuiz").onclick=startQuiz;
    return;
  }

  const q=mcqs[quizIndex];

  document.getElementById("quizProgress").textContent=
    `Question ${quizIndex+1} / ${mcqs.length}`;

  document.getElementById("quizQuestion").innerHTML=
    `<h2>${q[0]}</h2>`;

  document.getElementById("quizOptions").innerHTML=
    q[1].map((option,i)=>
      `<button class="quiz-option" onclick="answerQuiz(${i},this)">${String.fromCharCode(65+i)}. ${option}</button>`
    ).join("");

  document.getElementById("nextQuiz").disabled=true;
}

function answerQuiz(choice,button){

  const q=mcqs[quizIndex];
  const buttons=document.querySelectorAll(".quiz-option");

  buttons.forEach(b=>b.disabled=true);

  if(choice===q[2]){
    button.classList.add("correct");
    score++;
  }else{
    button.classList.add("wrong");
    buttons[q[2]].classList.add("correct");
  }

  document.getElementById("quizScore").textContent=`Score: ${score}`;
  document.getElementById("nextQuiz").disabled=false;
}

function nextQuestion(){
  quizIndex++;
  showQuizQuestion();
}

function setRating(n){

  selectedRating=n;

  document.querySelectorAll("#rating button").forEach((b,i)=>{
    b.classList.toggle("active",i<n);
  });
}

function submitFeedback(){

  const text=document.getElementById("feedbackText").value.trim();

  if(!selectedRating){
    alert("Please select a rating.");
    return;
  }

  const subject=encodeURIComponent("CNCC StudyHub Feedback - "+selectedRating+"/5");
  const body=encodeURIComponent(
    `Rating: ${selectedRating}/5\n\nFeedback:\n${text||"No written feedback."}`
  );

  document.getElementById("feedbackStatus").innerHTML=
    `Thank you! Your email client will open to send the feedback.`;

  window.location.href=
    `mailto:mayuuuuuur@gmail.com?subject=${subject}&body=${body}`;
}

window.addEventListener("DOMContentLoaded",()=>{

  const saved=localStorage.getItem("theme");

  if(saved){
    document.documentElement.setAttribute("data-theme",saved);
  }

  setTimeout(()=>{
    document.getElementById("loader").style.display="none";
  },700);

  renderUnits();
  renderQuestions();
  startQuiz();

});
