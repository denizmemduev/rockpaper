let ben = document.getElementById("el1");
let sagel1 = document.getElementById("el4");
let sagel2 = document.getElementById("el5");
let sagel3 = document.getElementById("el6");
let butt = document.getElementsByTagName("button")[0];
let kck1 = document.getElementById("kck1");
let kck2 = document.getElementById("kck2");
let kck3 = document.getElementById("kck3");
let el = document.getElementById("elgo");
var m = kck1(m);
function kc1(m){
    ben.setAttribute("src", `r1.png`);
    m = "tas"
    return m;
    
}
function kc2(m){
    ben.setAttribute("src", `p1.png`);
    m="kagit";
    return m;
}
function kc3(m){
    ben.setAttribute("src", `s1.png`);
    m="makas";
    return m;
}


 function startt(n){
     
  const  b = Math.round((Math.random()*3), 2);
    el.classList.add("gosterme");
    console.log(b);
    if(b==1){
        console.log("asd");
        sagel1.classList.add("goster");
        sagel2.classList.remove("goster");
        sagel3.classList.remove("goster");
        n = "tas";
    }
    if(b==2){
        console.log("asd");
        sagel2.classList.add("goster");
        sagel1.classList.remove("goster");
        sagel3.classList.remove("goster");
        n ="kagit";
    }
    if(b==3){
        console.log("asd");
        sagel3.classList.add("goster");
        sagel2.classList.remove("goster");
        sagel1.classList.remove("goster");
        n ="makas";
    
    }
}
if(m==n){
    console.log("hai");
}

 //================================================================SKOR-=========================================================
 //===================================================================================
 //===================================================================

function sonuc(){
    console.log(m);
}
sonuc();