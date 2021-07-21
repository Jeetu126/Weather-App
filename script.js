const curDate = document.getElementById("date");
let weathercon = document.getElementById("weathercon");

const tempStatus  = "Clouds";

const getCurrentDay = () =>{
    var weekday = new Array(7);
    weekday[0] = "sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
};

const getCurrentTime = () => {
    var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
    ];
    var now = new Date();
    var month = months[now.getMonth()+1];
    var date = now.getDate();
    
    let hours = now.getHours();
    let mins = now.getMinutes();

    let periods = "AM";
    
    if (hours>11) {
        periods = "PM";
        if(hours>12) hours-=12;
    }
    if(mins < 10) {
        mins = "0" + mins;
    }   

    return `${month} ${date} | ${hours}:${mins}${periods}`;
};

   curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();

getCurrentTime();