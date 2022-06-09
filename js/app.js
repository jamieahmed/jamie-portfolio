// imported external data
import { allprojectsData } from "../data/allData.js"
////////////Store cached element references///////////////

//// Navbar section 
const navbar = document.querySelector("#navbar-page")

//// Home section ////////////////////////////////
const home = document.querySelector("#home-page")

//// About me  section ///////////////////////
const about = document.querySelector("#about-page")

//////////// Resume section //////////////////////////resume-title
const resume = document.querySelector("#resume-page")
const resumeTitle = document.querySelector("#resume-title")
const education = document.querySelector("#resume-education-title")
const skills = document.querySelector("#resume-skill-title")
const experience = document.querySelector("#resume-experience-title")

// projects section/////////////////
const projectsContainer = document.getElementById('projects-page')

////////////// Contact  section ////////////////
const contact = document.querySelector("#contact-page")

///////////////// Footer section///////////////////////////
const footer = document.querySelector("#footer-page")

////////////Store cached element references end here///////////////



// project card /////////////////////
let projectCard = allprojectsData.map(project =>
  `
      <div class="card" >
        <img src="${project.image}" class="card-img-top "  alt="...">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-description">${project.description}</p>
          <p class="card-language">${project.languages}</p>
          <p class="card-status">${project.status}</p>
          <div>
            <a href="${project.github}" class="card-github">GitHub</a>
            <a href="${project.deployment}" class="card-deployment">Demo</a>
          </div>
        </div>
      </div>
    `
).join('')
projectsContainer.innerHTML = projectCard


// resume staff from external file

/*-------------------------------- Constants --------------------------------*/

import { myEducation } from "../resumData/resumedata.js"
import { mySkills } from "../resumData/resumedata.js"
import { myExperience } from "../resumData/resumedata.js"

/*------------------------ Cached Element References ------------------------*/
const resumEducation = document.querySelector("#education-id")
const resumSkills = document.querySelector("#skill-id")
const resumExperience = document.querySelector("#experince-id")

/*----------------------------- Event Listeners -----------------------------*/
resumEducation.addEventListener("click", createNewEduCard)
resumSkills.addEventListener("click", createNewSkillCard)
resumExperience.addEventListener('click', createNewExperCard)
/*-------------------------------- Functions --------------------------------*/






















//////////// for Resume section //////////////////////////
// for resume-title
// let mySkillTitle = document.createElement("h2");
// mySkillTitle.innerText = "Resume";
// resumeTitle.appendChild(mySkillTitle)
// for education
let eductionTitle = document.createElement("h2");
eductionTitle.innerText = "Eduction";
education.appendChild(eductionTitle)

//  for skills
let skillTitle = document.createElement("h2");
skillTitle.innerText = "Skills";
skills.appendChild(skillTitle)

// //  for Experience
let experienceTitle = document.createElement("h2");
experienceTitle.innerText = "Experience";
experience.appendChild(experienceTitle)



////////////////// for footer sction  //////////////////////////
let newFooter = document.createElement("p");
newFooter.innerText = "© 2022 JamieAhmed. All rights reserved.";
footer.appendChild(newFooter)


