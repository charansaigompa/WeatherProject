const apiKey="be5f41721d6c66fcd34726bb9e8fc504";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchinpt=document.querySelector(".search input");
const searchbtn=document.querySelector("button");
const WheatherIcon=document.querySelector(".wheather-icon");

async function checkWheather(city){
    const response=await fetch(apiurl+city+`&appid=${apiKey}`);
    var data=await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" kmph";
    if(data.weather[0].main=="Clouds"){
        WheatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        WheatherIcon.src="images/clear.png";
    }
     else if(data.weather[0].main=="Rain"){
        WheatherIcon.src="images/rain.png";
    }
     else if(data.weather[0].main=="Drizzle"){
        WheatherIcon.src="images/drizzle.png";
    }
     else if(data.weather[0].main=="Mist"){
        WheatherIcon.src="images/mist.png";
    }
    document.querySelector(".wheather").style.display="block";
}


searchbtn.addEventListener("click",()=>
{
checkWheather(searchinpt.value);

})
