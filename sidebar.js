// sidebar js
const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});
// homepage js
function homepfunc(){
    var bodydis= document.getElementById("bodytext");
    var newbodydis= bodydis.innerHTML= " ";
    bodydis.style.margin="0px";
    var titledis= document.getElementById("title").innerHTML="HOMEPAGE";
    var notable=document.getElementById("stockstable").style.visibility="visible";
 
    
 }
// blogpost js
function blogpfunc(){
    var notable=document.getElementById("stockstable").style.visibility="hidden";
    var bodytext= document.getElementById("bodytext");
   var titledis= document.getElementById("title").innerHTML="BLOGPOSTS";
   var newbodydis= bodytext.innerHTML= "here is my blog ";
   bodytext.style.visibility="visible";
   bodytext.style.margin="150px";
   var comment=document.getElementById("blogpost").style.visibility="visible";

// var newbodydis= 
   }

function settingspfunc(){
    var notable=document.getElementById("stockstable").style.visibility="hidden";
    var bodydis= document.getElementById("bodydis");
   var titledis= document.getElementById("title").innerHTML="SETTINGS";
   var bodytext= document.getElementById("bodytext");
   bodydis.style.visibility="hidden";
   bodytext.style.visibility="hidden";
// var newbodydis= 
   }

function contactpfunc(){
    var notable=document.getElementById("stockstable").style.visibility="hidden";
    var bodydis= document.getElementById("bodytext");
    document.getElementById("title").innerHTML="CONTACT US";
    bodydis.style.visibility="visible";
    var newbodydis= bodydis.innerHTML= "We encourage our users to contact us if they run into any issues, as well as send us feedback.<br> <br> <br>" +"Contact us via: <br> Email: TradingBuddy@gmail.com<br> Call: 1 800-555-555 <br> <br><br>"+"Find us on Social Media: <br> Instagram: @tradingbuddy <br> Twitter: @tradingbuddy <br> Facebook: @tradingbuddy ";
    bodydis.style.margin="150px";
    //    content= content.style.marginLeft="200px";
}

