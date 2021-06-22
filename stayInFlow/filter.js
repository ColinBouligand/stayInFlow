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
