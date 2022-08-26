alls() ;
function software(){
window.location.href = "software.html"

}
function calendly(){
    window.location.href = "calendly.html"
}
function clouds(){
    window.location.href = "cloud.html"
}
function bus() {
    document.getElementById('all').classList.remove('btnSTYLE');
    document.getElementById('BA').classList.add('btnSTYLE');
    document.getElementById('CI').classList.remove('btnSTYLE');
    document.getElementById('SD').classList.remove('btnSTYLE');
    let cont1 = document.querySelector("#hi")
    let cont2 = document.querySelector("#hi2")
    let cont3 = document.querySelector("#hi3")
    cont1.style.display = null ;
    cont2.style.display = "block" ;
    cont3.style.display = null ;
}
function alls() {
    document.getElementById('all').classList.add('btnSTYLE');
    document.getElementById('BA').classList.remove('btnSTYLE');
    document.getElementById('CI').classList.remove('btnSTYLE');
    document.getElementById('SD').classList.remove('btnSTYLE');
let cont1 = document.querySelector("#hi")
let cont2 = document.querySelector("#hi2")
let cont3 = document.querySelector("#hi3")
cont1.style.display = "block" ;
cont2.style.display = "block" ;
cont3.style.display = "block" ;
}

function cloud() {
    document.getElementById('all').classList.remove('btnSTYLE');
    document.getElementById('BA').classList.remove('btnSTYLE');
    document.getElementById('CI').classList.add('btnSTYLE');
    document.getElementById('SD').classList.remove('btnSTYLE');
    let cont1 = document.querySelector("#hi")
let cont2 = document.querySelector("#hi2")
let cont3 = document.querySelector("#hi3")
cont1.style.display = null ;
cont2.style.display = null ;
cont3.style.display = "block" ;
}

function soft() {
    document.getElementById('all').classList.remove('btnSTYLE');
    document.getElementById('BA').classList.remove('btnSTYLE');
    document.getElementById('CI').classList.remove('btnSTYLE');
    document.getElementById('SD').classList.add('btnSTYLE');
    let cont1 = document.querySelector("#hi")
    let cont2 = document.querySelector("#hi2")
    let cont3 = document.querySelector("#hi3")
    cont1.style.display = "block" ;
    cont2.style.display = null ;
    cont3.style.display = null ;


}


