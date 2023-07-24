function set(){
    setTimeout((()=> {
        document.body.style.background = "url('https://igimages.gumlet.io/tamil/home/jailer170723_3.jpg?w=700&dpr=1.4')"
       document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML= "HUKUM";
    }),100);
    setTimeout((()=> {
        document.body.style.background = "url('https://pbs.twimg.com/media/F1NoZcNX0AAtVtu.jpg:large')"
       document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML= "TIGER KA";
    }),400);
    setTimeout((()=> {
        document.body.style.background = "url('https://pbs.twimg.com/media/F1FnoOlaUAAJ6ZX.jpg')"
       document.body.style.backgroundSize = "cover"
        document.getElementById("h1").innerHTML= "HUKUM";
    }),800);
   
}
  
setInterval(set,1000)