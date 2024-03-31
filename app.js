const react_button = document.querySelector(".react");
const landing_button = document.querySelector(".landing");
const animations_button = document.querySelector(".animations");

const react_projects = document.querySelector(".react_projects");
const landing_projects = document.querySelector(".landing_projects");
const animations_projects = document.querySelector(".animations_projects");

react_button.addEventListener('click', ()=>{
    removeActive();
    react_projects.style.display = 'flex';
    landing_projects.style.display = 'none';
    animations_projects.style.display = 'none';
    react_button.classList.add('active');
})
landing_button.addEventListener('click', ()=>{
    removeActive();
    react_projects.style.display = 'none';
    landing_projects.style.display = 'flex';
    animations_projects.style.display = 'none';
    landing_button.classList.add('active');
})
animations_button.addEventListener('click', ()=>{
    removeActive();
    react_projects.style.display = 'none';
    landing_projects.style.display = 'none';
    animations_projects.style.display = 'flex';
    animations_button.classList.add('active');
})


const removeActive = () => {
    document.querySelectorAll(".btn_slider").forEach(element => {
        element.classList.remove('active');
    });
}