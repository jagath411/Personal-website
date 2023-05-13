var progressBars = document.querySelector('.skill-progress > div');;
var skillsContainer = document. getElementById( 'skills-container');
window.addEventListener('scroll', checkScroll);
var animationDone =false;
 
function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width=0+'%';
    }
}
initialiseBars();
function filBars(){
    for(let bar of progressBars){
    let targetWidth=barAttribute('data-bar-width');
    let currentWidth=0;
    let interval =setInterval(function (){
        if(currentWidth>targetWidth){
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width=currentWidth+'%';
    },3);
    }
}
function checkScroll(){
         var coordinates =skillsContainer.getBoundingClientRect();

         if(!animationDone && coordinates.top<window.innerHeight){
            animationDone=true;
            console.log('Skills Section Visible');
            fillBars();
         }
}
