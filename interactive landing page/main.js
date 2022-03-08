const time = document.querySelector('#time')
const greeting = document.querySelector('#greeting')
const nam = document.querySelector('#nam')
const focus = document.querySelector('#focus')

function Time(){
   let today = new Date();
   let hour = today.getHours();
   let min = today.getMinutes();
   let second = today.getSeconds();
   time.innerHTML = `${hour}:${addZero(min)}:${addZero(second)}`

   setTimeout(Time, 1000)
}

function addZero(n){
   if (n<10){
      n = '0' + n.toString();
      return n;
   }
   else{
      return n;
   }
}

function setBGreeting() {
   let today = new Date();
   hour = today.getHours();

   if (hour <12 && hour > 5){
      document.body.style.background = "url('morning.jpg')"
      document.body.style.backgroundRepeat = "no-repeat"
      document.body.style.backgroundSize = "cover"
      greeting.textContent = 'Good Morning'
   }
   else if (hour < 16 && hour > 5){
      document.body.style.background = "url('afternoon.jpg')"
      document.body.style.backgroundRepeat = "no-repeat"
      document.body.style.backgroundSize = "cover"

      greeting.textContent = 'Good Afternoon'

   }

   else if (hour < 20 && hour > 5){
      document.body.style.background = "url('evening.jpg')"
      document.body.style.backgroundRepeat = "no-repeat"
      document.body.style.backgroundSize = "cover"
      document.body.style.color = '#ffffff'
      greeting.textContent = 'Good Evening'

   }

   else{
      document.body.style.background = "url('night.jpg')"
      greeting.textContent = 'Good Night'
      document.body.style.backgroundRepeat = "no-repeat"
      document.body.style.backgroundSize = "cover"
      document.body.style.color = '#ffffff'
   }
}

function getName(){
   if(localStorage.getItem('name') === null){
      nam.textContent = "[Enter your Name]"
   }
   else{
      nam.textContent = localStorage.getItem('name')
   }
}

function setName(e){
   if (e.type === 'keypress'){
   if (e.key ==='Enter' || e.keycode === 13){
      localStorage.setItem('name', e.target.innerText);
      nam.blur();
   }
}
   else{
      localStorage.setItem('name', e.target.innerText);
   }
}

function setFocus(e){
   if (e.type === 'keypress'){
   if (e.key ==='Enter' || e.keycode === 13){
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
   }
}
   else{
      localStorage.setItem('focus', e.target.innerText);
   }
}

function getFocus(){
   if(localStorage.getItem('focus') === null){
      focus.textContent = "[Enter your Focus]"
   }
   else{
      focus.textContent = localStorage.getItem('focus')
   }
}

nam.addEventListener('keypress', setName)
nam.addEventListener('blur', setName)
focus.addEventListener('keypress', setFocus)
focus.addEventListener('blur', setFocus)
Time();
setBGreeting();
getName();
getFocus();