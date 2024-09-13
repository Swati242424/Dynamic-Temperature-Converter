const celsiusEl = document.getElementById("celsius");
const fahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp(event) {
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celsius":
      kelvinEl.value = (currentValue + 273.32).toFixed(2);
      fahrenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
      break;
    case "kelvin":
      celsiusEl.value = (currentValue - 273.32).toFixed(2);
      fahrenheitEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
  if(celsiusEl.value<20 && kelvinEl.value<293.32 && fahrenheitEl.value<68.00)
    document.body.style.backgroundImage= "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrRYXWN1zl5U24r-MKf-aZ5Fu0yOy_UbV1xg&s')"
  else if( celsiusEl.value>=20 && celsiusEl.value <=40 && kelvinEl.value>=293.32 && kelvinEl.value<=313.32 && fahrenheitEl.value>=68.00 && fahrenheitEl.value<=104.00)
    document.body.style.backgroundImage="url('https://media.istockphoto.com/id/540761642/photo/thermometer-sun-40-degres-hot-summer-day-high-summer-temperatures.jpg?s=612x612&w=0&k=20&c=GsrBmxTsIPo5iECKnDcrCDHLPfsQjp24v28-gdPsjgs=')"
  else 
  document.body.style.backgroundImage="url('https://www.shutterstock.com/shutterstock/videos/1088435313/thumb/11.jpg?ip=x480')"
}



