var alreadySeemGifs = []

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
    "https://media2.giphy.com/media/YTQXiIQfWtzH2sB5Jb/giphy.gif",
    
    "https://media1.giphy.com/media/cAR2mcS64ISweFlemV/giphy.gif",
    "https://media0.giphy.com/media/SesBbLmKW4jEtdnkrX/giphy.gif",
    "https://media3.giphy.com/media/9jUu45ULnPmYM6Oihw/giphy.gif",
    "https://media0.giphy.com/media/Z27Akgz2y0ExIoWdpN/giphy.gif",
    "https://media3.giphy.com/media/gLVHIQIes2HyR4l6hg/giphy.gif",
    "https://media3.giphy.com/media/rssEM6HCG0AXlQiFMG/giphy.gif",
    "https://media2.giphy.com/media/HqDYsLHTzMvDz4LlEL/giphy.gif",
    "https://media2.giphy.com/media/1zgvDe0iSTIXwkRZF5/giphy.gif",
    "https://media3.giphy.com/media/Q9kYfPRXOiiMzHsz1o/giphy.gif",
    "https://media2.giphy.com/media/cW2kzQ0JsmynJ72TOH/giphy.gif",
    "https://media0.giphy.com/media/1Kd2COBgEkEi2jaaRr/giphy.gif",
    "https://media0.giphy.com/media/jkIRizKb798SFlegLP/giphy.gif",
    "https://media4.giphy.com/media/cKQGfkWrHQOccJeoQj/giphy.gif",
    "https://media0.giphy.com/media/H4iICxEz4tzwWsGtb9/giphy.gif",
    "https://media1.giphy.com/media/hJZYfsmCM5hv4JjsMq/giphy.gif",
    "https://media1.giphy.com/media/jn2q4Omha3fXfHtETo/giphy.gif",
    "https://media0.giphy.com/media/PhTzdSFJjcBleSdjl5/giphy.gif",
    "https://media0.giphy.com/media/egAFSJzyEbozKEhVgD/giphy.gif",
    "https://media4.giphy.com/media/S5PhhQn5WzAWYT6pVT/giphy.gif",
    "https://media1.giphy.com/media/Bsx3iXhMjKezfpVJzM/giphy.gif",
    "https://media2.giphy.com/media/05dkAfWHdAGPSv6VDB/giphy.gif",
    "https://media1.giphy.com/media/uXYy46IRliHQdfX0Jw/giphy.gif",
    "https://media3.giphy.com/media/3EZCq6mPiVkqwU91qC/giphy.gif",
    "https://media3.giphy.com/media/87U7TU4q8iYMmudlmo/giphy.gif",
    "https://media0.giphy.com/media/pZgG5GkT5SlahB0cYl/giphy.gif",
    "https://media2.giphy.com/media/asF0u3VdVvu1lCLKNz/giphy.gif",
    "https://media1.giphy.com/media/sWZUU7OAScUGz0tYmm/giphy.gif",
    "https://media0.giphy.com/media/qhWK745LVwd1RJiA6f/giphy.gif",
    "https://media0.giphy.com/media/FHRFqSxaVEBfKph1Ex/giphy.gif",
    "https://media3.giphy.com/media/sqeA3nusqT7oasyvEb/giphy.gif",
    "https://media0.giphy.com/media/MzdQCtFqczdi4n3cei/giphy.gif",
    "https://media2.giphy.com/media/GT4oN9CZqQJQrIkMem/giphy.gif",
    "https://media3.giphy.com/media/Wuq4EoViI3PazMOdvI/giphy.gif",
    "https://media2.giphy.com/media/heJRa7xN5SaIwHzww2/giphy.gif",
    "https://media3.giphy.com/media/xd5kq59h2JlRzB8Uer/giphy.gif",
    "https://media0.giphy.com/media/qCBMydmaTLS8RMzb9F/giphy.gif"

]

function next() {
    const randonlyPickedGif = parseInt(Math.random() * gifs.length)

    if(alreadySeemGifs.length == gifs.length) {
        alreadySeemGifs = []
    }

    console.log(alreadySeemGifs)
    if(alreadySeemGifs.indexOf(randonlyPickedGif) > -1) {
        return next()
    } else {
        alreadySeemGifs.push(randonlyPickedGif)
    }
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


function requestNewGif() {
    if(firstTime) {
        var body=document.body;
        body.classList.toggle("background");
        document.getElementById("main-title").textContent = "THIS.IS.A.MESSAGE"

        firstTime = false
        document.getElementById("player").play()
    } 

    const nextGif = next()
    console.log(nextGif)
    document.body.style.backgroundImage = `url('${nextGif}')`;
    var body=document.body;
    body.classList.toggle("background");
}


