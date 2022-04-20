const displayClock = () =>{
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let s1 = "", s2 = "", s3 = "";
    if(hours < 10) s1 += "0";
    if(minutes < 10) s2 += "0";
    if(seconds < 10) s3 += "0";
    let disp = document.querySelector('.main');
    disp.innerHTML = s1 + hours + ":" + s2 + minutes + ":" + s3 + seconds; 
    setTimeout(displayClock, 1000);  
}

displayClock();