function updateTime(){
    let fullDate = new Date();

    let hours = fullDate.getHours();
    let minutes = fullDate.getMinutes();
    let seconds = fullDate.getSeconds();

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let time = `${hours}:${minutes}:${seconds}`;

    document.querySelector('#time').innerHTML = time;
    setTimeout(updateTime, 1000);
}
function updateDate(){
    let fullDate = new Date();

    let monthList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
'September','October', 'November', 'December'];
    let year = fullDate.getFullYear();
    let month = monthList[fullDate.getMonth()];
    let date = fullDate.getDate();

    let today = `${month} ${date}, ${year}`;
    document.querySelector('#date').innerHTML = today;

}
updateTime(); updateDate();