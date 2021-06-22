//get the url
 var currentURL = window.location.href;
 console.log(currentURL);


//if we are on youtube webapp
if(currentURL.includes("https://www.youtube.com/"))
{

   // when you click on the youtube logo to access or reload the main page (doesn't work every time)
 document.getElementById("logo").addEventListener("click", function(){ console.log("logo");    document.querySelector('ytd-browse').style.visibility = "hidden";  });


//block the side recommandations whenever you are watching a video
 if(currentURL.includes("https://www.youtube.com/watch?v="))
 {
   //impossible to neither use window.load or document.ready nor an event observer/listener so I used a timer to wait for the elements to be displayed before modifying them / hide the commentaries too
   setTimeout(function(){ document.querySelector('ytd-watch-next-secondary-results-renderer').style.visibility = "hidden"; document.querySelector('ytd-item-section-renderer').style.visibility = "hidden"; },1000);
 }

 // block the recommandations of the main page
 if(currentURL === "https://www.youtube.com/")
 {
    document.querySelector('ytd-browse').style.visibility = "hidden";
 }

 
}
//Colorer l'emploi du temps
if(currentURL=== "https://edt.univ-angers.fr/edt/ressource?type=G9FDC055BB1C34F92E0530100007F467B&id=9F8A5BD6B1C188EDE0530100007FD17D")

console.log("edt")
const delai = 1000;
function select() {

   document.querySelectorAll('.fc-title').forEach( e=> {
      [
        /Synthèse d'images/i,
        /interfaces graphiques/i,
        //Traitement de données/i,
        //systèmes intelligents/i,
        /Groupe 1/i,
        /Groupe 2/i,
        //Groupe 3/i,
      ] . forEach( regexcour => {
      if( e.innerHTML.match(regexcour) ) {
            console.log("oui")
         //e.parentElement.parentElement.style.visibility = "hidden"
      } } );
   });
}
window.addEventListener('load', temporisation => setTimeout(select,delai) );
