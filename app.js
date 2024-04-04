const react_button = document.querySelector(".react");
const landing_button = document.querySelector(".landing");
const animations_button = document.querySelector(".animations");

const react_projects = document.querySelector(".react_projects");
const landing_projects = document.querySelector(".landing_projects");
const animations_projects = document.querySelector(".animations_projects");

const btn_menu = document.querySelector('.bx-menu_main');
const bx_menu_drop = document.querySelector('.bx-menu_drop');
const top_menu = document.querySelector(".menu_drop_down");

btn_menu.addEventListener("click", ()=> {
    top_menu.classList.toggle('drop');
  }
);

bx_menu_drop.addEventListener("click", ()=> {
    top_menu.classList.toggle('drop');
  }
);

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