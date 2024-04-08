window.onload = () => {
    document.querySelector('#calculate').onclick = calculate;
    document.querySelector('#reset').onclick = reset;
}

function calculate () {
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;

    const stop = document.querySelector('#stop');
    
    const endTime = new Date(date + " " + time);

    const interval = setInterval(() => calculateTime(endTime), 1000);

    stop.addEventListener('click', () => {
        clearInterval(interval);
    })
}

function calculateTime(endTime) {
    const currentTime = new Date();

    const day = document.querySelector('#day');
    const hour = document.querySelector('#hour');
    const min = document.querySelector('#min');
    const sec = document.querySelector('#sec');

    if (endTime > currentTime) {
        const timeLeft = (endTime - currentTime) / 1000;

        console.log(timeLeft);
        day.innerText = Math.floor(timeLeft / (24 * 60 * 60));
        hour.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
        min.innerText = Math.floor((timeLeft / 60) % 60);
        sec.innerText = Math.floor(timeLeft % 60);
    } else {
        day.innerText = 0
        hour.innerText = 0
        minute.innerText = 0
        second.innerText = 0
    }
}

function reset() {
    document.querySelector('#day').innerText = 0;
    document.querySelector('#hour').innerText = 0;
    document.querySelector('#min').innerText = 0;
    document.querySelector('#sec').innerText = 0;
}