function menu2(){
    let menu2 = document.getElementsByClassName("footerA");
    if (menu2[0].style.display === "none" || menu2[0].style.display === "") {
        for(let i = 0; i < menu2.length; i++){
            menu2[i].style.display = "inline-block";
        }
    } else {
        for(let i = 0; i < menu2.length; i++){
            menu2[i].style.display = "none";
            
        }
    }
}