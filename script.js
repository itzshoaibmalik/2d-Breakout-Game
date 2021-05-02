
alert("Please wait, Connecting to Data Servers")

function init(){
   
   
   function hide(){
       document.getElementsByClassName("loader")[0].style.display="none";
   }
   
   gsap.to(".loader",{opacity:"0",onComplete:hide})
   
   
    document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();

    function init() {
        
        document.getElementById("btn").innerHTML = 'Please fill the input field';
        let res_elm = document.createElement("div");
        res_elm.innerHTML = "Hello MySelf Aco how may i help you";
        res_elm.setAttribute("class", "left");
        document.getElementsByClassName("msg")[0].appendChild(res_elm);
    }

    
    gsap.timeline()
   
    .to("section", { background: 'url("https://wallpaperaccess.com/download/anime-girl-phone-261233") no-repeat center' })
    .to("section", { backgroundSize: "cover" },"-=0.5")
     
    .to(".start > button", { bottom: "-200px", fontWeight: '200', fontSize: "0.8em", position: "absolute" })
    .to(".start", { height: "90vh" })
    .to(".input", { bottom: "65px" })
    
    .to(".msg", { height: "75%", border: "4px solid white" })
    
    
    
    
    
    
    .to(".start > h2", { background: "linear-gradient( 181deg,  rgba(225,109,245,1) 6.9%, rgba(78,248,231,1) 112.8% )",onComplete:init });
    document.getElementsByClassName("msg")[0].innerHTML = "";

    
    


    
    
    





})




document.getElementById("reply").addEventListener("click", async (e) => {
    e.preventDefault();

    let req = document.getElementsByClassName("msg_send")[0].value;
    if (req == undefined || req == "") {


    } else {



        let res = "";
        await axios.get(`https://api.monkedev.com/fun/chat?msg=${req}`).then(data => {
            res = JSON.stringify(data.data.response)
        })



        let data_req = document.createElement("div");
        let data_res = document.createElement("div");
        data_req.innerHTML = req;
        data_res.innerHTML = res;
        data_req.setAttribute("class", "right");
        data_res.setAttribute("class", "left");
        document.getElementsByClassName("msg")[0].appendChild(data_req);

        document.getElementsByClassName("msg")[0].appendChild(data_res);
        document.getElementsByClassName("msg_send")[0].value = "";

    }


});
}
