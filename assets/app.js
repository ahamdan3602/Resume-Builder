const strRegex = /^[a-zA-Z\s]*$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(\+?1?[-.\s]?)?\(?[2-9]\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;
const digitRegex = /^\d*$/;

const mainForm = document.getElementById("cv-form");

const firstNameElem = mainForm.fname;
const middleNameElem = mainForm.mname;
const lastNameElem = mainForm.lname;
const imageElem = mainForm.img;
const addressElem = mainForm.addr;
const emailElem = mainForm.email;
const phoneNumElem = mainForm.pnumber;

function getUserInputs() {
    const optionalData = {
        achievements: getAchievements(),
        workExperiences: getWorkExperience(),
        schools: getSchools(),
        projects: getProjects(),
        skills: getSkills()
    };

    const requiredData = {
        firstName: firstNameElem.value,
        middleName: middleNameElem.value,
        lastName: lastNameElem.value,
        image: imageElem.value,
        address: addressElem.value,
        email: emailElem.value,
        phoneNumber: phoneNumElem.value
    };

    return { 
        requiredData,
        optionalData
    };
}

function getAchievements() {
    const achievementTitleElems = document.querySelectorAll('.achieve_title');
    const achievementsDescElems = document.querySelectorAll('.achieve_desc');

    const achievements = [];

    for (let i = 0; i < achievementTitleElems.length; i++) {
        achievements.push({
            title: achievementTitleElems[i].value,
            description: achievementsDescElems[i].value,
        });
    }
    return achievements.length > 0 ? achievements : null;
}

function getWorkExperience() {
    const workTitleElems = document.querySelectorAll('.work_title');
    const workLocationElems = document.querySelectorAll('.work_location');
    const workStartDateElems = document.querySelectorAll('.work_start');
    const workEndDateElems = document.querySelectorAll('.work_end');
    const workDescriptionElems = document.querySelectorAll('.work_desc');

    const workExperiences = [];
    for (let i = 0; i < workTitleElems.length; i++) {
        workExperiences.push({
            title: workTitleElems[i].value,
            location: workLocationElems[i].value,
            startDate: workStartDateElems[i].value,
            endDate: workEndDateElems[i].value,
            description: workDescriptionElems[i].value
        });
    }
    return workExperiences.length > 0 ? workExperiences : null;
}

function getSchools() {
    const schoolNameElems = document.querySelectorAll('.school');
    const schoolDegreeElems = document.querySelectorAll('.school_degree');
    const schoolStartElems = document.querySelectorAll('.school_start');
    const schoolEndElems = document.querySelectorAll('.school_end');
    const schoolLocationElems = document.querySelectorAll('.school_location');

    const schools = [];

    for (let i = 0; i < schoolNameElems.length; i++) {
        schools.push({
            name: schoolNameElems[i].value,
            degree: schoolDegreeElems[i].value,
            startDate: schoolStartElems[i].value,
            endDate: schoolEndElems[i].value,
            location: schoolLocationElems[i].value
        });
    }
    return schools.length > 0 ? schools : null;
}

function getProjects() {
    const projectNameElems = document.querySelectorAll('.proj_name');
    const projectLinkElems = document.querySelectorAll('.proj_link');
    const projectDescriptionElems = document.querySelectorAll('.proj_desc');

    const projects = [];

    for (let i = 0; i < projectNameElems.length; i++) {
        projects.push({
            name: projectNameElems[i].value,
            link: projectLinkElems[i].value,
            description: projectDescriptionElems[i].value
        });
    }
    return projects.length > 0 ? projects : null;
}

function getSkills() {
    const skillNameElems = document.querySelectorAll('.skill_name');

    const skills = [];
    for (let i = 0; i < skillNameElems.length; i++) {
        skills.push({
            skillName: skillNameElems[i].value
        });
    }
    return skills.length > 0 ? skills : null;
}

function updateAboutSec(data) {
    document.getElementById('image_dsp').src = data.image;
    document.getElementById('fullname_dsp').textContent = `${data.firstName} ${data.middleName} ${data.lastName}`;
    document.getElementById('designation_dsp').textContent = `${data.address}`;
    document.getElementById('phoneno_dsp').textContent =`${data.phoneNumber}`;;
    document.getElementById('email_dsp').textContent = `${data.email}`;
}

function updateSkillsSec(skills) {
    const skillsContainer = document.getElementById('skills_dsp');
    skillsContainer.innerHTML = '';
    if (skills) {
        skills.forEach(skill => {
            const skillElement = document.createElement('div');
            skillElement.className = 'preview-item';
            skillElement.textContent = skill.skillName;
            skillsContainer.appendChild(skillElement);
        });
    }
}
function updateAchievementsSec(achievements) {
    const acheivementsContainer = document.getElementById('achievements_dsp');
    acheivementsContainer.innerHTML = '';
    if (achievements) {
        achievements.forEach(achievement => {
            const achievementElement = document.createElement('div');
            achievementElement.className = 'preview-item';
            achievementElement.innerHTML = `<h4 class="preview-item-val fw-6">${achievement.title}</h4>
            <p class="preview-item-val">${achievement.description}</p>`
            acheivementsContainer.appendChild(achievementElement);
        });

    };
};

function updateEducationSec(schools) {
    const eduContainer = document.getElementById('educations_dsp');
    eduContainer.innerHTML = '';
    if (schools) {
        schools.forEach(school =>{
            const educElement = document.createElement('div');
            educElement.className = 'preview-item';
            educElement.innerHTML =`<h4 class="preview-item-val fw-6">${school.name}</h4>
            <p class="preview-item-val">${school.degree}</p>
            <p class="preview-item-val">${school.startDate} - ${school.endDate}</p>
            <p class="preview-item-val">${school.location}</p>`;
            eduContainer.appendChild(educElement);
        });

    }
}
function updateExperienceSec(experiences) {
    const experienceContainer = document.getElementById('experiences_dsp');
    experienceContainer.innerHTML = '';
    if (experiences) {
        experiences.forEach(exp => {
            const expElement = document.createElement('div');
            expElement.className = 'preview-item';
            expElement.innerHTML = `<h4 class="preview-item-val fw-6">${exp.title}</h4>
                <p class="preview-item-val">${exp.location}</p>
                <p class="preview-item-val">${exp.startDate} - ${exp.endDate}</p>
                <p class="preview-item-val">${exp.description}</p>`;
            experienceContainer.appendChild(expElement);
        });
    }
};

function updateProjectsSec(projects) {
    const projectsContainer = document.getElementById('projects_dsp');
    projectsContainer.innerHTML = '';
    if (projects) {
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'preview-item';
            projectElement.innerHTML = `
                <h4 class="preview-item-val fw-6">${project.name}</h4>
                <p class="preview-item-val"><a href="${project.link}" target="_blank">${project.link}</a></p>
                <p class="preview-item-val">${project.description}</p>
            `;
            projectsContainer.appendChild(projectElement);
        });
    }
};

function updateResume() {
    const { requiredData, optionalData } = getUserInputs();


    updateAboutSec(requiredData);
    updateSkillsSec(optionalData.skills);
    updateAchievementsSec(optionalData.achievements);
    updateEducationSec(optionalData.schools);
    updateExperienceSec(optionalData.workExperiences);
    updateProjectsSec(optionalData.projects);
}

console.log(getUserInputs());

document.getElementById('printcv').addEventListener('click', function(e) {
    updateResume();
});

