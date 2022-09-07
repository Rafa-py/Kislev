class MenuToggle{
    constructor(){
        this.setActive();
    }
    setActive(){
        let toggle = document.querySelector(".toggle");
        let nav = document.querySelector(".nav");
        let menu_mobile = document.querySelector(".menu_mobile");
        let menu_list = document.querySelector(".menu_list");
        toggle.addEventListener("click", ()=>{
            menu_mobile.classList.toggle("active");
            menu_list.classList.toggle("active");
            nav.classList.toggle("active");
        })
    }
}