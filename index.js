toggle_btn = document.querySelector(".toggle-menu");
flex = document.querySelector(".nav-menu");
dropDown = document.querySelector(".drop-head");
main = document.querySelector("main");
cancelBTN = document.querySelector(".cancel-op");
bodyHidder = document.querySelector("body");

toggle_btn.addEventListener("click",()=>{
    dropDown.classList.add("drop-head2");
    bodyHidder.classList.add("body-hidder")
})
cancelBTN.addEventListener("click",()=>{
    dropDown.classList.remove("drop-head2");
    bodyHidder.classList.remove("body-hidder")
})