
let imgs = document.getElementById("imgs");
let img = document.querySelectorAll("#imgs img");
let id = 0;
let index;
let btn_controllers = document.querySelectorAll(".controller_icons div");


//Button Controller
let click_listener = () =>{
    btn_controllers.forEach(btns =>{
        btns.addEventListener("click", ()=>{
            reset_button()
            setScroll(btns.id);
            target = document.querySelector(`#${btns.id}`)
            target.classList.add("active")
        })
    });
}
let reset_button = () =>{
    btn_controllers.forEach(btns =>{
        btns.classList.remove("active");
    });
    index = 0
}

const setScroll = (id) =>{
    index = Number(id.replace("n", ""));
    let indexOf;
    if(index === 1){
        indexOf = 1
    }
    if(index === 2){
        indexOf = 4
    }
    if(index === 3){
        indexOf = 7
    }
    img[indexOf].scrollIntoView({
        inline: "center", 
        behavior: "smooth"
    })
}

click_listener()
