toggle_btn = document.querySelector(".toggle-menu");
flex = document.querySelector(".nav-menu");
dropDown = document.querySelector(".drop-head");
main = document.querySelector("main");
cancelBTN = document.querySelector(".cancel-op");

toggle_btn.addEventListener("click",()=>{
    main.classList.add("main2");
    dropDown.classList.add("drop-head2");
})
cancelBTN.addEventListener("click",()=>{
    main.classList.remove("main2");
    dropDown.classList.remove("drop-head2");
})