
let sec = 0 , 
    min =0 , 
    hrs = 0, 
    t;

function addTime() {
    sec++;
    if(sec >= 60){
        sec = 0;
        min++;
        if(min >= 60){
            min = 0;
            hrs ++;
        }
    }
    var text = (hrs ? (hrs > 9 ? hrs : "0" + hrs) : "00") + ":" + (min ? (min >9 ? min: "0" +min) : "00") + ":" + (sec ?( sec>9 ? sec: "0" +sec) : "00");
    document.getElementsByClassName("timer").innerHTML = text;

}

window.setInterval(addTime , 1000);