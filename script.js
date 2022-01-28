let todayWeek = new Date().toLocaleString('ru', {weekday: 'long'});
let todayMonth = new Date().toLocaleString('ru', {month: 'long'});

let todayYear = new Date().getFullYear();
let todayDay = new Date().getDate()
let hour = new Date().getHours();
let minutes = new Date().getMinutes();
let second = new Date().getSeconds();
let month = new Date().toLocaleDateString();
let time =  new Date().toLocaleTimeString(); 

setInterval("window.location.reload()",1000)

function decHours(){
    if (hour == 1 || hour == 21) {
        hour = hour + " час"
    }
    
    else if (hour == 2 || hour == 3 || hour == 4 || hour == 22 || hour == 23) {
        hour = hour + " часа"
    }
    else {
        hour = hour + " часов"
    };

}
decHours()
function AddZero(){
    if (String(hour).length == 1){
        hour = hour + '0'

    }
    if (String(minutes).length ==1){
        minutes = minutes + '0'
    }
    if (String(second).length ==1){
        second = second + '0'
    }

    
}
AddZero()


document.write(`Сегодня ${todayWeek}, ${todayDay} ${todayMonth} ${todayYear} года, ${hour}  ${minutes} минут ${second} секунд ` + '<br>')

document.write(`${month}-${time}`)







