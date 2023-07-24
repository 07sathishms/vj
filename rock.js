function set(){
    setTimeout((()=> {
        document.body.style.background = "linear-gradient(90deg,rgba(2, 255, 213, 0.3), rgba(255, 23, 23)),url('https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
       document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML= "HUKUM";
    }),100);
    setTimeout((()=> {
        document.body.style.background = "linear-gradient(90deg,rgba(148, 165, 161,0.3),rgba(224, 247, 243)),url('https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
       document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML= "TIGER KA";
    }),400);
    setTimeout((()=> {
        document.body.style.background = "90deg,rgba(2, 455, 213, 0.3), rgba(555, 23, 23)),url('https://images.pexels.com/photos/235986/pexels-photo-235986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
       document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML= "HUKUM";
    }),800);
   
}
  
setInterval(set,1000)
