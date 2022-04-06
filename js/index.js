let nav = document.getElementById("vista");

function menus(){
    let Desplazamiento_Actual = window.pageYOffset;
    if(Desplazamiento_Actual >= 1000 && Desplazamiento_Actual <= 1300){
        nav.style.visibility = "hidden";
    }else{
        nav.style.visibility = "visible";
    }
}

function menu2(){
    let Desplazamiento_Actual = window.pageYOffset;
    if(Desplazamiento_Actual >= 3200){
        nav.style.visibility = "hidden";
        
    }
    
}

window.addEventListener('scroll', function(){
    console.log(window.pageYOffset);
    menus();
    menu2()
});

//3200