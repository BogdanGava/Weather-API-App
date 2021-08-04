let input = document.querySelector('.textInput');
let main = document.querySelector('#name');
let temp = document.querySelector('.temperature');
let desc = document.querySelector('.description');
let button= document.querySelector('.submit');
let locationIcon = document.querySelector('.weather-icon');

button.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=2ee8efd8b079767a62d68b802236486a')
  .then(response => response.json())
  .then(data => {
    let tempValue = data.main.temp;
    let nameValue = data.name;
    let descValue = data.weather[0].description;
    let icon = data.weather[0].icon

    main.innerHTML = nameValue;
    desc.innerHTML = "Description:  "+descValue;
    temp.innerHTML = "Temperature:  "+tempValue;
    locationIcon.innerHTML = `<img src="icons/${icon}.png">`
    input.value ="";
  
  })
  
  .catch(error => alert("Wrong city name!"));
  })

  input.addEventListener('keypress', function(event){
    if(event.keyCode === 13)
    {fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=2ee8efd8b079767a62d68b802236486a')
    .then(response => response.json())
    .then(data => {
      let tempValue = data.main.temp;
      let nameValue = data.name;
      let descValue = data.weather[0].description;
      let icon = data.weather[0].icon

      main.innerHTML = nameValue;
      desc.innerHTML = "Description:  "+descValue;
      temp.innerHTML = "Temperature:  "+tempValue;
      locationIcon.innerHTML = `<img src="icons/${icon}.png">`
      input.value ="";
     
    })
    
    .catch(error => alert("Wrong city name!"));
    }
    })

