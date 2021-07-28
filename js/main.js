// Basic, Web Dev, Hardware Toggle 
function webDevToggle(){var basicActiveBTN=document.getElementById('basicBTN')
var webDevActiveBTN=document.getElementById('webDevBTN')
var hardwareActiveBTN=document.getElementById('hardwareBTN')
var basics=document.getElementById('basics');var webDev=document.getElementById('webDev');var hardware=document.getElementById('hardware');basics.classList.add('d-none')
hardware.classList.add('d-none')
webDev.classList.remove('d-none')
webDevActiveBTN.classList.add('activeBTN')
basicActiveBTN.classList.remove('activeBTN')
hardwareActiveBTN.classList.remove('activeBTN')}
function hardwareToggle(){var basicActiveBTN=document.getElementById('basicBTN')
var webDevActiveBTN=document.getElementById('webDevBTN')
var hardwareActiveBTN=document.getElementById('hardwareBTN')
var basics=document.getElementById('basics');var webDev=document.getElementById('webDev');var hardware=document.getElementById('hardware');basics.classList.add('d-none')
webDev.classList.add('d-none')
hardware.classList.remove('d-none')
webDevActiveBTN.classList.remove('activeBTN')
basicActiveBTN.classList.remove('activeBTN')
hardwareActiveBTN.classList.add('activeBTN')}
function basicsToggle(){var basicActiveBTN=document.getElementById('basicBTN')
var webDevActiveBTN=document.getElementById('webDevBTN')
var hardwareActiveBTN=document.getElementById('hardwareBTN')
var basics=document.getElementById('basics');var webDev=document.getElementById('webDev');var hardware=document.getElementById('hardware');webDev.classList.add('d-none')
hardware.classList.add('d-none')
basics.classList.remove('d-none')
webDevActiveBTN.classList.remove('activeBTN')
basicActiveBTN.classList.add('activeBTN')
hardwareActiveBTN.classList.remove('activeBTN')}


// Menu bar toggle 
// const menu = document.getElementById ('menu');
// const navUL = document.getElementById ('navUL');
// menu.onclick = function(){
//     menu.classList.toggle('toggle');
//     navUL.classList.toggle('navUL');
// }

// Menu bar toggle 
function menuBarToggle(){
    const menu = document.getElementById ('menu');
    const navUL = document.getElementById ('navUL');

    menu.classList.toggle('toggle');
    navUL.classList.toggle('navUL');
}

// alert 
// alert('This is not the final version. This website is under construction.');