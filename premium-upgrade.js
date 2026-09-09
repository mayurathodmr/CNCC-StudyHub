
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
