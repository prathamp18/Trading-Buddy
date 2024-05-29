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

function blogpfunc(){
    var bodytext= document.getElementById("bodytext");
   var titledis= document.getElementById("title").innerHTML="BLOGPOSTS";
   bodytext.innerHTML=" ";
   var comment=document.getElementById("blogcomment").style.visibility="visible";
   var bodydis= document.getElementById("bodydis");
   bodydis.style.visibility="visible";
// var newbodydis= 
   }

function settingspfunc(){
    
    var bodydis= document.getElementById("bodydis");
   var titledis= document.getElementById("title").innerHTML="SETTINGS";
   var bodytext= document.getElementById("bodytext");
   bodydis.style.visibility="hidden";
   bodytext.style.visibility="hidden";
   var comment=document.getElementById("blogcomment").style.visibility="hidden";
// var newbodydis= 
   }

function contactpfunc(){
    var bodytext= document.getElementById("bodytext");
    document.getElementById("title").innerHTML="CONTACT US";
    bodytext.style.visibility="visible";
    var newbodydis= bodytext.innerHTML= "We encourage our users to contact us if they run into any issues, as well as send us feedback.<br> <br> <br>" +"Contact us via: <br> Email: TradingBuddy@gmail.com<br> Call: 1 800-555-555 <br> <br><br>"+"Find us on Social Media: <br> Instagram: @tradingbuddy <br> Twitter: @tradingbuddy <br> Facebook: @tradingbuddy ";
    bodytext.style.margin="150px";
    var bodydis= document.getElementById("bodydis");
    bodydis.style.visibility="hidden";
    var comment=document.getElementById("blogcomment").style.visibility="hidden";
    //    content= content.style.marginLeft="200px";
}
function commentadd(){
    // var newcomm=document.getElementById("newcomment").value;
    // var allcomm=document.getElementById("allcomments");
    // document.writeln= "your comment"+ newcomm;
    var x = document.getElementById("newComment").value;
    var allcom= document.getElementById("allComments");
    allcom.innerHTML =  "<h5> YOUR COMMENT: </h5>   " + x;
    allcom.style.fontSize="17px";
    allcom.style.borderSize="100px";
    allcom.style.borderColor="white";
    allcom.style.borderStyle="solid";
    allcom.style.backgroundColor="white";
    allcom.style.marginTop="20px";

}