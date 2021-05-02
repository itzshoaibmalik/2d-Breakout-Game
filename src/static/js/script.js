/*

Js section, a lot of code xD
Helped by Bartika, thanks!

Don't get shocked lol xD



*/








/*window.onload=()=>{
   document.body.onclick=(e)=>{
        let x= e.clientX
        let y= e.clientY
        let ripple= document.createElement("span")
        ripple.className="ripple"
        ripple.style.left=x-75+"px"
        ripple.style.top=y-75+"px"
        document.body.appendChild(ripple)
        setTimeout(()=>{
            ripple.remove()
        },500)}}
*/    


function all(){
document.getElementById("body").style.position="";


}
function error(img){
    img.src='https://dl.dropbox.com/s/dx5u0opucqe920d/Screenshot_20210123_131632.jpg?dl=0'
}

function msgs(num,name,online,picurl,id){
//document.getElementById("picture").src=picurl;
document.getElementsByClassName("picture")[0].src = picurl ;
document.getElementsByClassName("img2")[0].src=picurl;
//document.getElementById("username").innerHTML=name;
//document.getElementsByClassName("info")[6].innerHTML ="https://www.sololearn.com/Profile/<br>"+id+"/?ref=app" ; 

async function data(){
var a = await fetch("https://api2.sololearn.com/v2/userinfo/v3/profile/"+id)
   if(!a.ok){
           throw new Error ("Error status:"+response.status);
            }
            else{

        
        var b = await a.json()
            var data= b
    //document.getElementById("prof-pic").src=data.User_Profile_Pic_Url
//    document.getElementsByClassName("smallpic")[0].src=data.User_Profile_Pic_Url
    document.getElementById("username").innerHTML=data.userDetails.name
    document.getElementById("bio").innerHTML=data.userDetails.bio
    ;
    document.getElementById("ct").innerHTML=data.userDetails.countryCode;
    document.getElementById("fol").innerHTML=data.userDetails.followers;
    document.getElementById("foll").innerHTML=data.userDetails.following;
    
    



    }}
window.onload=data()


    
    document.getElementsByClassName("nm")[0].innerHTML= name;

    if(online){
    document.getElementById("on").innerHTML="online";   
}
else {
document.getElementById("on").innerHTML="offline";   
    
}
   document.getElementById("body").classList.toggle("disablescroll");
   document.getElementById("chat_card").style.position ="fixed"
 document.getElementById("page").style.opacity="1";
 document.getElementById("page").style.display="block"


        
    document.getElementById("page").style.top="60px;"
    document.getElementById("page").style.transition="0.2s"
    document.getElementById("body").style.position="fixed";
    document.getElementById("body").style.display="none";
    
    
    
var chat = [
   ["!n What is new?" ,"!n Design: A brand new modern and responsive UI;", "!n Chats: You can easily open a chat and writing messages; improved the design;","!n Fixed bugs affecting some chats.", "!n UX: a better quality and a better way to use this code."//,"!n Future updates:", "!n - adding firebase in more fields;"],
 ,"!n UI/UX: a brand new exclusive user experience,","!n Firebase presence and online chat. (database)","!n More modes: night/light mode, for relaxing your eyes and choosing your preferite."  ],
    ["!n Ciao","!n 안녕하세요", "!n Ci password poi pa tò? 😅", "Boh 🤷🏻‍♂️","I ne savess nia ...", "Asp...", "Joongy! 😸", "!n Ok ai tüs comandi 💂‍♀️","T_T", "Insciö vala bun 💂🏻‍♂️", "Just amazing!","!n 😅","!n Ok 🥺","!n Fá n pü' streaming 😅'","Okk..dynamite? 😅🎧","!n 🤦🏻‍♀️","🥺😂"],
    ["!n Hehe ...", "!n Oh, you're already in my chat section!", "Noice 😸", "!n Btw btw...","!n Is Glira your name, right?", "No 😂" ,"!n 😱", "!n 😑", "🥺","Sorry for this nonsense, sorry a lot 🙈","!n 😑", "!n I hate these words, - use ooops (=sorry) and thnx (=thanks) ", "Ooops then 😂","!n Btw I'm joking lol 😂", "😂", "!n Hehe", "!n You know you still look like spiderman? 🕸","Thnx 😂","Wait what! 🥺","Spiderman is a nerd 🥺","Am I a nerd too? 🥺","!n Ofc  ","!n 😂","!n Hehe "],
    ["!n Can’t believe you fell for that","!n 🤭🤭🤭🤭","? I did not understand 🤔😅 <br>FELL? 😅 For what?","I searched on translator and it comes:","Leather == fell","🧐😂","!n Idk 😜😜","Hmmm ok 😝😂","!n It was a nonsense sentence 😜","Love nonsense 😆 ","!n 😜🤣🤣"],
      ["Hey :)","You're the most positive person on SoloLearn 😄","You're my inspiration :)","And thanks a lot for following me 😎","!n Welcome 😃"],
 
    ["!n When is your new chatapp coming? 🍫","hmm..., soon, maybe now too :)","🚀🚀🚀🚀🚀  ","!n Anyway, 🚀 has now became our fav emoji🤣" ,"!n But 🚀 was supposed to be a food 😂😂😂😋😋😋","!n and I'm noticing that you use :) a lot recently 😮","Oh right :)","I don't know why I'm using a lot these emojis 🚀:) 😂😂","This :) becomes my third hand :)","🚀🚀🚀😂😂😂😂🤗🤗🤗","!n 🤣🚀🚀🚀","Btw Thank you so much for your FANTASTIC, HUGE, TORNADO, FABULOUS LIKESTORM 🤩😄","!n Wlcm 🚀🚀🍩🍩🍫🍫🍫🍫🍫🍫🍫🍫🍫🍫🍫🥧🥧🧁🧁🍰🍰🍰🍰🍩🍩🍩"],
     ["!n Hello","!n How are you?","!n 😆","!n Where are you? 🤔🧐"],
    ["Hey","!n Hii","Am waiting for a new library/framework 😂","!n Oh! <br>Be ready for ilsus 5.0 and Alert library 2.0 😃","Woooooooooooooow :)","!n Thanks 😊"],
    ["Thank you soooooooo soooooooo soooooooo soooooooo much for the amazing, biggest, tornado, likestorm 🌪 of 👍🏻 😆💯😊😵🤩😍😆😄","!n My pleasure.....💜😄🤗✌🏻","Woah congratulations for platinum 🎉🎉🎊🎊🦊🦊🥳🥳🥳🥳🥳🥳🥳🥳<br><br>It's a fantastic code 😍<br>Thank you for adding me in the friends list 🤗","Btw all the best :)<br>I'll miss you 🥺","!n Thanks for everything....💜😄","Thanks you for everything 🤗🦊"],
    ["Hey","Thank you soooooooo much for starting following me :)","I'm one of the luckly 20 :)","!n 😑I'm Mehnaz ","I know 😅","!n And thank you a lot for putting me in this code !","Wlcm friend :)","!n Yap I am trying to concentrate but I get easily bored 😪","!n But I hope it does happen to you ! Fighting!!!","😆I love when I'm boring 😂","!n U like getting bored 👀","😆😎"],
    ["Hey ","I saw someone hacked your last code :(","!n Thanks for informing! T_T","Wlcm T_T","!n T_T","T_T","!n T_T","T_T","!n T_T", "😂",":)"],
    
    ["Hey :)","Thanks for being 500th follower 😎","!n Wlcm 😄","!n Keep it up ...","🦊"],
    ["!n Well bro you know i earn ₹700 every year 😁😁 think how ?", " With advertising any Brand or YouTube? 😅","!n Think more bro 😁😁","🤔🤔...", "!n What you think school work is only to take fees 😂😂", "😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳😳"],
        ["!n New code:","!n  https://code.sololearn.com/<br>WLCUIu876yQ5/?ref=app","Woooooooooooooow,","As always :)","!n × infinity × infinity .... × infinity😅","× infinity × infinity .... × infinity^ infinity 😆😂","!n Btw are you bts army?","Yes 😂","But I'm asking why do you know 🤔😳😂","!n My best friends are bts armies too 😂","ohhhhh okkk :) 😂"],
    ["!n Glira;-;","!n Who sold you and why is he selling you for a 44% discount","Oh china bought me","🇨🇳","!n I know my penguan hands hurt me):<br>🦆🦆","🐒🐒","😂","!n 👸🤴<br>🐈🐧"],
    ["!n 🤗🤗🎐🤗🤗","!n Good night<br> 😴🎐😴<br>Thank you<br> 😊🎐😊","Good night 🌃<br>🌌🌌🌌🌌🌌<br>Thank you 😊","!n Good morning <br>🤗🤗🎐🤗🤗","Good morning<br>🏝️🌄🌅🌄🏝️","!n 🤗🤗🎐🤗🤗"],

    ["This chat does not exist in the real world! 😅","!n You're right 😹","Btw my messages are a magic in this code 😂","!n 😹","🚀"," Never send this emoji 😂"],
    ["Hii :)","Thnx a lot for the likestorm :)","oh dm bug, right...","Sorry 🥺"]
    ]
    for(var x=0;x<chat[num].length;x++){
        var s= chat[num][x].split(" ")
        var m= s.slice(1).join(" ")
        if(s[0]=="!n"){
document.getElementById("messages").innerHTML+="<div id='nmsg'>"+m+"</div>"
        }
        else{
            document.getElementById("messages").innerHTML+="<div id='mmsg'>"+chat[num][x]+"</div>"
        }
    }
    
    
    
    
}

var btn2 = document.querySelector(".fa-share");  

function send(){
window.scrollTo(0, 99999999999);

setTimeout(scrool, 100)
    var value = document.getElementById("input").value;
    document.getElementById("messages").innerHTML+="<div id='mmsg'>"+value+"</div>";
    
 document.getElementById("input").value ="";
 return false;
 document.getElementById("page").scrollTop=document.getElementById("page").scrollHeight
;

function scrool()
{window.scrollTo(0, 99999999999);}
}

function back(){
document.getElementById("chat_card").style.position ="absolute"
   
    
  document.getElementById("page").style.opacity="0";
  document.getElementById("page").style.display="none"
    
 document.getElementById("page").style.transition="0.2s"
    document.getElementById("body").style.position="initial";
    document.getElementById("messages").innerHTML=" ";
    document.getElementById("body").style.display="block"
    
}
function back2(){
    document.getElementById("profile_page").style.display="none";
    document.getElementById("username").innerHTML=" ";
    document.getElementById("page").style.position ="absolute"
 /*   document.getElementById("lvl").innerHTML=" ";
    document.getElementById("xp").innerHTML=" ";
    document.getElementById("badges").innerHTML =" ";
    document.getElementById("codes").innerHTML=" ";
    document.getElementById("courses").innerHTML=" "
*/}

function load(){
document.getElementById("cont").style.height="0";
document.getElementById("cont").style.transition="0.7s";
document.getElementsByClassName("loading")[0].style.background="white";
document.getElementsByClassName("loading")[1].style.background="white";
document.getElementsByClassName("loading")[2].style.background="white";
document.getElementsByClassName("loading")[3].style.background="white";
document.getElementsByClassName("loading")[4].style.background="white";
    
    document.getElementsByClassName("loading")[0].style.margin="7px";
document.getElementsByClassName("loading")[1].style.margin="7px";
document.getElementsByClassName("loading")[2].style.margin="7px";
document.getElementsByClassName("loading")[3].style.margin="7px";
document.getElementsByClassName("loading")[4].style.margin="7px";
    
    
}

setTimeout(load, 2000)
//setTimeout(all, 1990)
function blocked()
{
document.getElementById("body").style.position="fixed";
}
setTimeout(blocked, 10)

function open_profile(){
document.getElementById("profile_page").style.display="inherit";
document.getElementById("page").style.position ="fixed"
    
}


function fire(){
    document.getElementById("fire-page").style.display="block";
    document.getElementById("fire-page").style.top="0px"
    document.getElementById("fire-page").style.transition="0.3s";
    document.getElementById("body").style.display="none"
}
function back3(){
document.getElementById("fire-page").style.display="none";
document.getElementById("body").style.display=""
    
}
function quit(){

document.getElementById("alert").style.top="-55px"
        document.getElementById("alert").style.transition="0.7s";
    
}


function login(){


name = document.getElementById("name9").value;
var ll = document.getElementById("name9").value.length;
if(ll== 0){
    document.getElementById("alert").style.top="35px"
        document.getElementById("alert").style.transition="0.7s";
        setTimeout(quit, 3000);
    
    return false;
}
if(ll <=2) {
      
        document.getElementById("alert").style.top="35px"
        document.getElementById("alert").style.transition="0.7s";
        document.getElementById("alert").innerHTML="Username is too short!"
        setTimeout(quit, 3000);
    
    return false;
}
else if(ll > 15){
document.getElementById("name9").value=" "
document.getElementById("alert").style.top="35px"
        document.getElementById("alert").style.transition="0.7s";
        document.getElementById("alert").innerHTML="Username is too long!"
        return false;
        
        setTimeout(quit, 3000);
    
}


else if(ll > 1 && ll <= 15){
    document.getElementById("login").style.top="100%";
    document.getElementById("cont").style.display="none";
    document.getElementById("login").style.transition="1s";
    setTimeout(remove, 1300);
    all();
    document.getElementById("login").style.background="linear-gradient(90deg ,rgb(101,106,255), rgb(141,76,255));" ;
       return false;
    
    
}    


    document.getElementById("login").style.top="100%";
    document.getElementById("cont").style.display="none";
    document.getElementById("login").style.transition="1s";
    setTimeout(remove, 1300);
    all();
    document.getElementById("login").style.background="linear-gradient(90deg ,rgb(101,106,255), rgb(141,76,255));" ;
       return false;
    
    
}    

function remove(){
    document.getElementById("login").style.display="none"
}

function menu(){
    document.getElementById("menu").style.top="0"
    document.getElementById("chat_card").style.position ="fixed"
    document.getElementById("menu").style.transition="0.5s"
}


async function data2(){
var a2 = await fetch("https://api2.sololearn.com/v2/userinfo/v3/profile/19137863")
   if(!a2.ok){
           throw new Error ("Error status:"+response.status);
            }
            else{

        
        var datta = await a2.json();
            
    document.getElementById("me").innerHTML=datta.userDetails.name
;    



    }}
window.onload=data2()

function back4(){
    document.getElementById("menu").style.top="-100%"
    document.getElementById("chat_card").style.position ="absolute"
}

function check(checkbox)
    {
   
        if (checkbox.checked)
{
       
       document.getElementById("style").innerHTML+=`<style>
body {
    background-color:black;
}

hr {
  
  height: 1px;
  overflow: visible; 
  background:gray;
  border:none;
  box-sizing:content-box ;
  width:270px;
 
}



#head {
    position:fixed;
    width:100vw;
    left:0;
    top:0;
    padding:3px;
    height:130px;
   background-color:#3D5AFE;
   
   
   background: linear-gradient(56deg , #3070ca, #f43bff);
   background:linear-gradient(90deg ,rgb(101,106,255), rgb(141,76,255));
   opacity:0.5;
   z-index:9;
   box-shadow:0 0 20px 0 rgb(95, 100, 255);
   /* background:linear-gradient(45deg, #f5f7fa, #c3cfe2);*/
  
    opacity:0.97;
    border-radius:0px;
    color:white;
}


#card {
    background-color:rgb( 13, 6, 40 );
    width:100vw;
    position:fixed;
    height:85vh;
    display:flex;
    flex-direction:column;
    left:0;
    top:65px;
    padding-top:10px;
}

#chat_card {
    background-color:rgb( 13, 6, 40 );
    background-color:rgb( 7, 14, 39 );
    position:absolute;
    left:0;
    width:100vw;
    /*height:100vh;*/
    margin-top:90px;
    border-radius:30px 30px 0 0;
    display:flex;
    flex-direction:column;
    z-index:9;
   /* background:linear-gradient(45deg, #f5f7fa, #c3cfe2);*/
}


.name {
    position:absolute;
    margin-top:4px;
    margin-left:80px;
    color:white;
}

.msg {
    position:absolute;
    margin-top:30px;
    margin-left:80px;
    font-size:0.9em;
    color: #495359;
    color:lightGray;
}

.date {
    position:absolute;
    right:15px;
    margin-top:0px;
    color:grey;
    font-size:0.8em;
}

.img {
    position:absolute;
    background-color:#ecf0f1;
    height:60px;
    width:60px;
    border-radius:50%;
    margin-top:3px;
    margin-left:5px;
}

.place {
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:29px;
}

#place2{
    background-color:white;
    height:5px;
    width:50px;
    border-radius:10px;
    opacity:0.7;
    position:absolute;
    top:10px;
  
}

/*#03A9F4*/
.link {
    color:#3D5AFE;
    font-weight:bold;
    font-family:quicksand;
    text-align:center;
    margin:5px;
    padding:10px;

}
.a {
    display:flex;
flex-direction:row;
margin-bottom:10px;
justify-content:center;
align-items:center;
}
.link:hover{
    border-bottom:2px dotted #3D5AFE;
}

#nmsg,#mmsg{
    height:fit-content;
    width:fit-content;
    max-width:60vw;
    font-size:0.9em;
    color: #495359;
    padding:11px;
    margin:7.5px;
    border-radius:15px;
    font-family:quicksand;
    font-weight:bold;
}
#nmsg{
    border-bottom-left-radius:5px;
    background:#252525;
    box-shadow:0 0 5px 0 #353535;
    opacity:0.9;
    color:white;
    font-family:quicksand;
    color:white;
}
#mmsg{
    margin-left:auto;
    border-bottom-right-radius:5px;
    background:#536DFE;
    background:linear-gradient(56deg ,rgb(101,106,255), rgb(141,76,255));;
    background:rgb(101,106,255);
    opacity:0.99;
    color:white;
    font-family:quicksand;
    box-shadow:0 0 3px 0 rgb(90,100,255);
    
}

#page {
    background:black;
    position:absolute;
    left:0;
    top:0px;
    padding-top:65px;
    display:none;
    width:100vw;
    opacity:99;
    z-index:999;
    overflow-y:scroll ;
    margin-bottom:50px;
    padding-bottom:50px;
    transition:1s;
    


}

#head-chat{
    height:60px;
    width:100vw;
    position:fixed;
    left:0;
    top:0;
    background-color:#202020;
    box-shadow:0 0 20px 0 #303030;
    display:none;
    z-index:999;
    overflow:hidden;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    /*box-shadow:0 0 20px 0 rgba(0,0,0,0.3);*/
}

.input{
    position:fixed;
    left:0;
    bottom:0;
    height:30px;
    width:100vw;
    padding:10px;
    border:none;
    font-family:quicksand;
    font-weight:bold;
    background:#202020;
    box-shadow:0 0 20px 0 #303030;
    color:white;
    
}

.nm {
    text-align:center;
    font-family:quicksand;
    font-weight:bold;
    letter-spacing:1px;
    color:white;
    position:absolute;
    margin-top:-5px;
    
}
.on {
    text-align:center;
    font-family:quicksand;
    color: lightGray;
    font-size:0.8em;
    top:20px;
    display:block;
    position:absolute;
    font-weight:bold;

    
}
/*.on::before {
    width:10px;
    height:10px;
    background-color:red;
    position:fixed;
    top:20px;
    margin-left:-4px;

    
}
*/
Input:focus{
Outline: none;
}
/*i {
    position:fixed;
    right:40px;
    bottom:35px;
    border:none;

    
    
}*/
i {
    transition:0.5s;
}
i:active {
    transform:scale(0.5);
    transition:0.5s;
    opacity:0.9;
}
.picture:active {
    transform:scale(0.5);
    transition:0.5s;
}

.picture {
    width:47px;
    height:47px;
    border-radius:50%;
    position:fixed;
    right:10px;
    opacity:0.85;
    transition:0.5s;
    box-shadow:0 0 5px 0 #505050;
}

/*.picture2 {
    border:2px solid #3D5AFE;
    width:49px;
    height:49px;
    border-radius:50%;
    position:fixed;
    right:6.5px;
    top:5px;
    
    opacity:0.85;
}*/



.ph {
    /*display:flex;
    justify-content:center;*/
    padding:10px;
}
.send-icon {
    color:#3070ca;
}
.img2, .img3 {
    opacity:0.9;
    width:110px;
    height:110px;
    left:50%;
    transform:translateX(-50%);
    position:absolute;
    border-radius:50%;
    filter:blur(50%);
    top:25px;
    
}
#messages {
    
}
.name2 {
color: #495359;
font-family:quicksand;
font-size:1.2em;
    
}
#pptext {
    
}

#info{
/*    padding-left:20px;*/
    text-align:center;
    margin-top:150px;
    
    
}
.info{
    font-size:17.5px;
    padding-right:15px;
    padding-left:15px;
    margin-left:15px;
    margin-right:15px;
    font-weight:bold;
    color:white;
}
.label{
    font-size:15px;
    color:lightGray;
    margin-top:2.5px;
    font-weight:bold;
}
#profile_page, .profile_page {
background:rgb( 7, 14, 39 );
}
.label1{
    font-size:15px;
    color:#202020;
    background: linear-gradient(45deg, #cfd9df, #e2ebf0);
    padding:10px;
    margin-top:2.5px;
    border-radius:5px;
}
#ptext{
    color:#07f;
    text-decoration:none;
    cursor:pointer;
    -webkit-tap-highlight-color:transparent ;
}

#prof-link {
    font-size:14px;
    height:fit-content;
    width:fit-content;
    text-align:center;
}

#fire-page {
    width:100vw;
    display:none;
    position:absolute;
    left:0;
    background-color:black;
    position:;
    top:100vh;
    z-index:9999999099;
    padding-bottom:70px;
}

.ffmsg {
    border-bottom-left-radius:5px;
    background:#252525;
    box-shadow:0 0 5px 0 #353535;
    opacity:1;
    color:black;
    font-family:quicksand;
    color:#383840;
    height:fit-content;
    width:fit-content;
    max-width:60vw;
    font-size:0.9em;
    color: white;
    padding:9.8px;
    margin:7.5px;
    border-radius:15px;
    font-family:quicksand;
    font-weight:bold;

}

.ffmsg2 {
    margin-left:auto;
    border-bottom-right-radius:5px;
    background:#536DFE;
    background:linear-gradient(56deg ,rgb(101,106,255), rgb(141,76,255));;
    background:rgb(101,106,255);
    opacity:0.99;
    color:white;
    font-family:quicksand;
    box-shadow:0 0 3px 0 rgb(90,100,255);
}

#messaged {
    margin-top:70px;
}

.sender{
    font-size:0.8em;
    margin-bottom:5px;
    margin-top:-5px;
      -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;
  
  background: linear-gradient(56deg ,rgb(101,106,255), rgb(141,76,255));
 

  -webkit-background-clip: text;
  font-weight:bold;
}

#login {
    position:fixed;
    display:flex;
    width:100vw;
    height:100vh;
background-color:white;
    left:0;
    top:0;
    z-index:999;

    
    flex-direction:column;
    justify-content:center;
    border-top-radius:500px;
    
    
}
/*#login::before {
    width:300px;
    height:300px;
    content:'';
    border-radius:300px;
    background:linear-gradient(90deg ,rgb(101,106,255), rgb(141,76,255));;
    position:absolute;
    left:-150px;
    top:-150px;
    opacity:0.9;
    animation:gr 3s ease infinite ;
    z-index:-3;
    

}

@keyframes gr{
    0%{
        opacity:0.9;
    }

50%{
transform:scale(1.2);
opacity:0.8;
    
}}
#login::after {
    width:250px;
    height:250px;
    content:'';
    border-radius:900px;
    background:linear-gradient(40deg ,rgb(101,106,255), rgb(141,76,255));;
    position:absolute;
    z-index:-3;
    right:-150px;
    bottom:-150px;
    opacity:0.9;
    animation:gr 3s ease infinite ;
    box-shadow:0 0 30px 0 #fff;
    

}*/
@keyframes gr{
    0%{
        opacity:0.9;
    }

50%{
transform:scale(1.2);
opacity:0.8;
    
}}

.in {
    background-color:white;
    height:30px;
    width:60vw;
    padding:10px;
    border-radius:15px;
    border:0.5px solid #eee;
    font-family:quicksand;
    font-weight:bold;
    box-shadow:0 0 20px 0 #eee;
    opacity:0.9;
    transition:0.5s;
    
}
.submit{
    border:none;
    background-color:rgb( 7, 14, 39 );
    background-color:#202020;
    background:linear-gradient(90deg ,rgb(101,106,255), rgb(141,76,255));;
    color:white;
    font-family:quicksand;
    font-weight:bold;
    box-shadow:0 0 20px 0 #ddd;
    opacity:0.9;
    height:50px;
    width:60vw;
    border-radius:10px;
    padding:10px;
    transition:0.5s;
    margin-top:15px;
    box-shadow:0 0 20px 0 #eee;

}

.submit:active, .in:active{
    transform:scale(0.8);
    transition:0.5s;
}
.submit:hover{
    
}

.in :hover{
    
    border-bottom:3px solid black;
    transition:0.5s;
}
.h1{
    color:white;
    float:left;
    left:0;
    font-family: 'Stalinist One', cursive;
    font-family: 'Balsamiq Sans', cursive;
    letter-spacing:3px;
    font-weight:bolder;
    font-size:3em;
    text-shadow:0 0 20px 0px red;
    margin-left:10px;
    /*background:linear-gradient(90deg ,rgb(101,106,255), rgb(141,76,255));;  
     -webkit-background-clip: text;

  -webkit-text-fill-color: transparent;  */
}

.pp {
    font-family: 'Balsamiq Sans', cursive;
    font-family:quicksand;
    font-weight:bold;
    color:#eee;
    padding-left:10px;
    padding-right:10px;
    margin-left:5px;
    margin-top:-30px;
    z-index:4;
    
   }
#alert {
    background-color:#202020;
    color:white;
    width:80vw;
    height:30px;
    position:fixed;
    top:-55px;
    padding:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    z-index:999;
    opacity:0.9;
    left:50%;
    transform:translateX(-50%);
}

#alert2 {
    background-color:#202020;
    color:white;
    width:80vw;
    height:30px;
    position:fixed;
    top:-55px;
    padding:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:10px;
    z-index:999;
    opacity:0.9;
    left:50%;
    transform:translateX(-50%);
}

    
    
.username {
    margin-bottom:1px;
    font-size:0.9em;
    font-family:quicksand;
    color:#202020;
    font-weight:bold;
    margin-left:2px;
}
.submit:hover, .chat:hover{
    cursor:pointer;
}
.submit:active {
 cursor:wait;
}

small {
    position:fixed;
    bottom:10px;
    font-size:0.1em;
    text-align:center;
    left:45.5%;
    transform:translateX(-50%);
    font-family:quicksand;
    color:gray;
    font-weight:bold;
}

#svg9 {
    z-index:-1;
    background:linear-gradient(90deg ,rgb(101,106,255), rgb(141,76,255));;
    position:absolute;
    top:0;

left:0;
width:100vw;
height:160px;
opacity:0.65;
border-radius:0 0 80% 80%;
box-shadow:0 0 20px 0 rgb(141,76,255));
}

#pptext {
    z-index:7;
}


#n {
    color:rgb(101,106,255);
    margin-top:;
}

#profile_page {
    width:100vw;
    height:100vh;
    background-color:white;
    position:fixed;
    left:0;
    
overflow-y:scroll;    top:0;
    display:none;
    z-index:9999;
}

#menu {
    position:fixed;
    z-index:99999999;
    height:100vh;
    top:0;
    transition:0.5s;
    left:0;
    top:-120%;
    background-color:rgb( 7, 14, 39 );
    width:100vw;
    overflow-y:scroll;
}

#menu-text {
    margin-top:170px;
    align-items:center;
    display:flex;
    flex-direction:column;
}

.center {
    display:flex;
    align-items:center;
    flex-direction:column;
}

.btn-my {
    background-color:#202020;
    border:none;

    padding:10px;
    border-radius:5px;
    font-weight:bold;
    width:80vw;
    margin:5px;
    text-align:center;
    transition:0.5s;
    color:white;

font-family:quicksand;}
.btn-my:active{
    transform:scale(0.9);
    transition:0.5s;
}
.exit {
    background-color:#F44336;
    color:white;
    
}</style>`
document.getElementById("profile_page").style.background="rgb( 7, 14, 39 )"
           
        } else {
        
            
       document.getElementById("style").innerHTML=" "
       document.getElementById("profile_page").style.background="white"
        }
       
    }
    
    function accept()
{
    document.getElementById("ppage").style.opacity="0"
    document.getElementById("ppage").style.transition="0.5s"
    setTimeout(delay, 1000)
    
}
function cont()
{
    document.getElementById("help-page").style.opacity="0"
    document.getElementById("help-page").style.transition="0.5s"
    setTimeout(delay2, 1000)
    
}
function privacy1()
{
    document.getElementById("ppage").style.display="flex"
    setTimeout(privacy, 100)
}
function privacy()

{
document.getElementById("ppage").style.opacity="1"
    document.getElementById("ppage").style.transition="0.5s"
    
    
}
function help()
{
    document.getElementById("help-page").style.display="flex"
    setTimeout(help1, 100)
}
function help1()

{
document.getElementById("help-page").style.opacity="1"
    document.getElementById("help-page").style.transition="0.5s"
    
    
}
function delay(){
    document.getElementById("ppage").style="display:none;"
}

function delay2(){
    document.getElementById("help-page").style="display:none;"
}

function open_profile_my(){
document.getElementsByClassName("img2")[0].src="https://api.sololearn.com/Uploads/Avatars/19137863.jpg" ;

document.getElementById("profile_page").style.display="inherit";
document.getElementById("page").style.position ="fixed";

async function datamy(){
var amy= await fetch("https://api2.sololearn.com/v2/userinfo/v3/profile/19137863")
   if(!amy.ok){
           throw new Error ("Error status:"+response.status);
            }
            else{

        
        var bmy = await amy.json()
            var datamy= bmy    //document.getElementById("prof-pic").src=data.User_Profile_Pic_Url
//    document.getElementsByClassName("smallpic")[0].src=data.User_Profile_Pic_Url
    document.getElementById("username").innerHTML=datamy.userDetails.name


   document.getElementById("bio").innerHTML=datamy.userDetails.bio
    ;
    document.getElementById("ct").innerHTML=datamy.userDetails.countryCode;
    document.getElementById("fol").innerHTML=datamy.userDetails.followers;
    document.getElementById("foll").innerHTML=datamy.userDetails.following;
    
    



    }}
window.onload=datamy()

    
}
