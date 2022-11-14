const gifs = [
    "https://media0.giphy.com/media/iFriXt26sHrAsM1ak0/giphy.gif",
    "https://media1.giphy.com/media/3ohhwJlKHGchQUtvBS/giphy.gif",
    "https://media4.giphy.com/media/XEn3KYM5Tz6YG55z8e/giphy.gif",
    "https://media4.giphy.com/media/F2MmrQ5EOjLuAwgoRs/giphy.gif",
    "https://media2.giphy.com/media/YmWJCs5Z1eAPx0hAHk/giphy.gif",
    "https://media4.giphy.com/media/U3mqQlG7nvRqMZhJO3/giphy.gif",
    "https://media0.giphy.com/media/6oeRBKg7mwEZnSnYkn/giphy.gif",
    "https://media0.giphy.com/media/dsQZD0c48nhD5Q1xbT/giphy.gif",
    "https://media3.giphy.com/media/Z6K1v6EyttAusdUiqQ/giphy.gif",
    "https://media1.giphy.com/media/PkCDv7CIK8d2M/giphy.gif",
    "https://media4.giphy.com/media/jyB6KoCrzcxL9rJcDV/giphy.gif",
    "https://media1.giphy.com/media/l1J3Iz9KtGo4LZrkQ/giphy.gif",
    "https://media2.giphy.com/media/3o6gaTQsa94l9msWD6/giphy.gif",
    "https://media3.giphy.com/media/8gQLD1DYYBWyxnYYzT/giphy.gif",
    "https://media3.giphy.com/media/d8uX4sX0IOd9HQkTEg/giphy.gif",
    "https://media3.giphy.com/media/m9jcUlbW1a6KRKbZMh/giphy.gif",
    "https://media3.giphy.com/media/9Zf4ZqyroqJiw/giphy.gif",
    "https://media0.giphy.com/media/aXEFaHgT8HOmsUikD1/giphy.gif",
    "https://media4.giphy.com/media/H62OwuuAXqEdKbwHpJ/giphy.gif",
    "https://media3.giphy.com/media/55rLoTnYxJhh7hX0kV/giphy.gif",
    "https://media0.giphy.com/media/WBEJDXzbcxMHxgOZSY/giphy.gif",
    "https://media2.giphy.com/media/YTQXiIQfWtzH2sB5Jb/giphy.gif"
]

function next() {
    const randonlyPickedGif = parseInt(Math.random() * gifs.length)
    return gifs[randonlyPickedGif];
}

function clock() {
    //Save the times in variables
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var month = today.getMonth();
    var day = today.getDate();
    var year = today.getFullYear();
    var monthNames = ["JAN.", "FEB.", "MAR.", "APR.", "MAY.", "JUN.", "JUL.", "AUG.", "SEP.", "OCT.", "NOV.", "DEC."];
    //Set the AM or PM time
    if (hours >= 12) {
        meridiem = "PM";
    }
    else {
        meridiem = "AM";
    }
    //convert hours to 12 hour format and put 0 in front
    if (hours > 12) {
        hours = hours - 12;
    }
    else if (hours === 0) {
        hours = 12;
    }
    //Put 0 in front of single digit minutes and seconds
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    else {
        minutes = minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    else {
        seconds = seconds;
    }
    document.getElementById("clock").innerHTML = (meridiem  + " " + hours + ":" + minutes);
    document.getElementById("date").innerHTML = (monthNames[month] + " " + day + " " + year);
}
setInterval('clock()', 0);


firstTime = true


function background() {
    if(firstTime) {
        var body=document.body;
        var a=document.querySelector('a');
        body.classList.toggle("background");        
        firstTime = false
        document.getElementById("player").play()
    } 

    const nextGif = next()
    console.log(nextGif)
    document.body.style.backgroundImage = `url('${nextGif}')`;
    var body=document.body;
    body.classList.toggle("background");
}


