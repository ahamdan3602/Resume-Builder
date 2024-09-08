const strRegex = /^[a-zA-Z\s]*$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^(\+?1?[-.\s]?)?\(?[2-9]\d{2}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/;

const digitRegex = /^\d*$/;

const mainForm = document.getElementById("cv-form");

let firstNameElem= mainForm.fname;
let middleNameElem = mainForm.mname;
let lastNameElem = mainForm.lname;
let imageElem = mainForm.img;
let addressElem = mainForm.addr;
let emailElem = mainForm.email;let phoneNumElem = mainForm.pnumber;

const requiredData = {
    firstName: firstNameElem.value,
    middleName: middleNameElem.value,
    lastName: lastNameElem.value,
    imageElem: imageElem.value,
    addresss: addressElem.value,
    email: emailElem.value

}


const getAchievements = () => {
    const achievementTitleElems = document.querySelectorAll('.achieve_title');
    const achievementsDescElems = document.querySelectorAll('.achieve_desc');

    const achievements = [];

    for (let i = 0; i <achievementTitleElems.length; i++) {
        achievements.push({
            title: achievementsTitleElems[i].value,
            description: achievementsDescElems[i].value,
        });
    };

    return achievements;
};

const getWorkExperience = () => {
    const workTitleElems = document.querySelectorAll('.work_title'),
    workLocationElems = document.querySelectorAll('.work_location'),
    workStartDateElems = document.querySelectorAll('.work_start'),
    workEndDateElems = document.querySelectorAll('.work_end'),
    workDescriptionElems = document.querySelectorAll('.work_desc');

    const workExperiences = [];
    for (let i = 0; i < workTitles.length; i++) {
        workExperiences.push({
            title: workTitleElems[i].value,
            location: workLocationElems[i].value,
            startDate: workStartDateElems[i].value,
            endDate: workEndDateElems[i].value,
            description: workDescriptionElems[i].value
        })
    }
    return workExperiences;
};

const getSchools = () => {
    const schoolNameElems = document.querySelectorAll('.school'),
    schoolDegreeElems = document.querySelectorAll('.school_degree'),
    schoolStartElems = document.querySelectorAll('.school_start'),
    schoolEndElems = document.querySelectorAll('.school_end'),
    schoolLocationElems = document.querySelectorAll('.school_location');

    const schools = [];

    for (let i = 0; i < schoolNameElems.length ;i++) {
        schools.push({
            name: schoolNameElems[i].value,
            degree:schoolDegreeElems[i].value,
            startDate:schoolStartElems[i].value,
            endDate:schoolEndElems[i].value,
            location:schoolLocationElems[i].value
        });
        return schools;
    }    
};

const getProjects = () => {
    const projectNameElems = querySelectorAll('.proj_name'),
    projectLinkElems = querySelectorAll('.proj_link'),
    projectDescriptionElems = querySelectorAll('.proj_desc');
    

    const projects = [];

    for (let i = 0; i < projectNameElems.length;i++) {
        projects.push({
            name: projectNameElems[i].value,
            link: projectLinkElems[i].value,
            description: projectDescriptionElems[i].value
        });
    };
    return projects;
};

const getSkills = () => {
    const skillNameElems = document.querySelectorAll('.skill_name');

    const skills = [];
    for (let i = 0; i <skillNameElems.length;i++) {
        skills.push({
            skillName: skillNameElems[i].value
        });
    }
    return skills;
}


const optionalData = {
    achievements: getAchievements(),
    workExperiences: getWorkExperience(),
    schools: getSchools(),
    projects: getProjects(),
    skills:getSkills()
};


const getUserInputs = () => {

    return {
        optionalData,
        requiredData
    }
};


const generateResume = () => {
    let userData = getUserInputs();
};
