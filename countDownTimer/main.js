(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
   
    let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    
    //Replace the code with your product LaunchDay
    //Make sure that your launchDay is ahead than currentDay
    launchDay = "10/5/2022";
    
    today = mm + "/" + dd + "/" + yyyy;
   
 
    
    const countDown = new Date(launchDay).getTime(),
        x = setInterval(function() {    
  
          const now = new Date().getTime()
            distance = countDown - now;
  
          
  
          //do something later when date is reached
      
            document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
            
          
      
          if(distance<0){
            
            document.getElementById("headline").innerText = "wait is over🔥Come Join us now😊";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());