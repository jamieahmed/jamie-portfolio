


// //////////Store cached element references///////////////
// // for Navbar section 
const navbar = document.querySelector("#navbar-page")
// // for Home section 
const home = document.querySelector("#home-page")
// // for About me  section 
const about = document.querySelector("#about-page")
//////////// for Resume section //////////////////////////
const resume = document.querySelector("#resume-page")
const education = document.querySelector("#resume-left")
const skills = document.querySelector("#resume-center")
const experience = document.querySelector("#resume-right")
// for projects section
const projects = document.querySelector("#projects-page")

// // for Contact  section 
const contact = document.querySelector("#contact-page")
// for Footer section
const footer = document.querySelector("#footer-page")




//////////// for Resume section //////////////////////////
// for education
let eductionTitle = document.createElement("h2");
eductionTitle.innerText = "Eduction";
education.appendChild(eductionTitle)
//  for skills
let skillTitle = document.createElement("h2");
skillTitle.innerText = "Skills";
skills.appendChild(skillTitle)
//  for Experience
let experienceTitle = document.createElement("h2");
experienceTitle.innerText = "Experience";
experience.appendChild(experienceTitle)


////////////////// for footer sction  //////////////////////////
let newFooter = document.createElement("p");
newFooter.innerText = "© 2022 JamieAhmed. All rights reserved.";
footer.appendChild(newFooter)




