window.onload = () =>{

function buildClock(){

   const date=new Date();
    console.log(date);

    let hours=date.getHours();
    let minute=date.getMinutes();
    let second=date.getSeconds();

    hours=hours<10 ?'0' + hours : hours ;
    minute=minute<10? '0'+ minute : minute;
    second= second<10?'0' + second : second;

    document.querySelector('#hours').innerText=hours;
    document.querySelector('#minutes').innerText=minute;
    document.querySelector('#seconds').innerHTML=second;

    setTimeout(buildClock,1000);

}

buildClock();


}