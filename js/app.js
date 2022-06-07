// imported external data
import { allprojectsData } from "../data/allData.js"

////////////Store cached element references///////////////

//// Navbar section 
const navbar = document.querySelector("#navbar-page")

//// Home section ////////////////////////////////
const home = document.querySelector("#home-page")

//// About me  section ///////////////////////
const about = document.querySelector("#about-page")

//////////// Resume section //////////////////////////
const resume = document.querySelector("#resume-page")
const education = document.querySelector("#resume-left")
const skills = document.querySelector("#resume-center")
const experience = document.querySelector("#resume-right")

// for projects section/////////////////
const projectsContainer = document.getElementById('projects-page')

////////////// Contact  section ////////////////
const contact = document.querySelector("#contact-page")

///////////////// for Footer section///////////////////////////
const footer = document.querySelector("#footer-page")

////////////Store cached element references end here///////////////



// project card /////////////////////
let projectCard = allprojectsData.map(project =>
    `
      <div class="card" >
        <img src="${project.image}" class="card-img-top "  alt="...">
        <div class="card-body">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <p class="card-text">${project.languages}</p>
          <p class="card-text">${project.status}</p>
          <div>
            <a href="${project.github}" class="btn btn-primary">GitHub</a>
            <a href="${project.deployment}" class="btn btn-secondary">Deployment</a>
          </div>
        </div>
      </div>
    `
).join('')
projectsContainer.innerHTML = projectCard

























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



