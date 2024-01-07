// 스타일 결정 함수
function changeStyle() {
    const random_number = Math.floor(Math.random() * 10) + 1
    document.body.style.backgroundImage = `url("image/${random_number}.jpg")`;

    const digital_number = document.getElementById('digital_clock');
    switch (random_number) {
        case 1:
            digital_number.style.color = 'white';
            digital_number.style.textShadow = '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black';
            break;
        case 2:
            digital_number.style.color = 'black';
            digital_number.style.textShadow = '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white';
            break;
        case 3:
            digital_number.style.color = 'black';
            digital_number.style.textShadow = '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white';
            break;
        case 4:
            digital_number.style.color = 'black';
            digital_number.style.textShadow = '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white';
            break;
        case 5:
            digital_number.style.color = 'black';
            digital_number.style.textShadow = '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white';
            break;
        case 6:
            digital_number.style.color = 'white';
            digital_number.style.textShadow = '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black';
            break;
        case 7:
            digital_number.style.color = 'black';
            digital_number.style.textShadow = '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white';
            break;
        case 8:
            digital_number.style.color = 'black';
            digital_number.style.textShadow = '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white';
            break;
        case 9:
            digital_number.style.color = 'white';
            digital_number.style.textShadow = '-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black';
            break;
        case 10:
            digital_number.style.color = 'black';
            digital_number.style.textShadow = '-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white';
            break;
    }
}

// ----------------- analog clock -----------------

// 시계 눈금 그리기 함수
function writeScales() {
    const circle = document.getElementById('base_circle');

    for (let i = 0; i < 30; i++) {
        const line = document.createElement('div');
        line.classList.add('scale');
        line.style.transform = `rotate(${6 * i}deg)`;

        if (i % 5)
            line.classList.add('thin');
        else
            line.classList.add('thick');

        circle.appendChild(line);
    }
}

// 시계 숫자 쓰기 함수
function writeNumbers() {
    const circle = document.getElementById('base_circle');

    for (let i = 1; i <= 12; i++) {
        const number = document.createElement('div');
        number.classList.add('number');
        number.innerText = i;

        switch (i) {
            case 1:
                number.style.top = '15%';
                number.style.left = '70%';
                break;
            case 2:
                number.style.top = '30%';
                number.style.left = '85%';
                break;
            case 3:
                number.style.top = '50%';
                number.style.left = '91%';
                break;
            case 4:
                number.style.top = '70%';
                number.style.left = '85%';
                break;
            case 5:
                number.style.top = '85%';
                number.style.left = '70%';
                break;
            case 6:
                number.style.top = '90%';
                number.style.left = '50%';
                break;
            case 7:
                number.style.top = '85%';
                number.style.left = '30%';
                break;
            case 8:
                number.style.top = '70%';
                number.style.left = '15%';
                break;
            case 9:
                number.style.top = '50%';
                number.style.left = '9%';
                break;
            case 10:
                number.style.top = '30%';
                number.style.left = '15%';
                break;
            case 11:
                number.style.top = '15%';
                number.style.left = '30%';
                break;
            case 12:
                number.style.top = '10%';
                number.style.left = '50%';
                break;
        }

        circle.appendChild(number);
    }
}

// 초침, 분침, 시침 그리기 함수
function writeHands() {
    const circle = document.getElementById('base_circle');
    let second_hand_1 = document.getElementById('second_hand_1');
    let second_hand_2 = document.getElementById('second_hand_2');
    let minute_hand = document.getElementById('minute_hand');
    let hour_hand = document.getElementById('hour_hand');

    const today = new Date();
    const second = today.getSeconds();
    const minute = today.getMinutes();
    const hour = (today.getHours() % 12);

    second_hand_1.style.transform = `rotate(${(6 * second + 180) % 360}deg)`;
    second_hand_2.style.transform = `rotate(${6 * second}deg)`;
    minute_hand.style.transform = `rotate(${(6 * minute + 0.1 * second + 180) % 360}deg)`;
    hour_hand.style.transform = `rotate(${(30 * hour + 0.5 * minute + 180) % 360}deg)`;

    second_hand_1.style.transformOrigin = 'top';
    second_hand_2.style.transformOrigin = 'top';
    minute_hand.style.transformOrigin = 'top';
    hour_hand.style.transformOrigin = 'top';

    circle.appendChild(hour_hand);
    circle.appendChild(minute_hand);
    circle.appendChild(second_hand_1);
    circle.appendChild(second_hand_2);
}

// analog clock 로딩 함수
function analogInit() {
    writeScales();
    writeNumbers();
    writeHands();
    changeStyle();
    return setInterval(writeHands, 1000);
}

// ----------------- digital clock -----------------

// 시간 쓰기 함수
function writeTime() {
    const clock = document.getElementById('digital_clock');
    const today = new Date();
    const second = String(today.getSeconds()).padStart(2, '0');
    const minute = String(today.getMinutes()).padStart(2, '0');
    const hour = String(today.getHours()).padStart(2, '0');

    clock.innerText = `${hour} : ${minute} : ${second}`;
}

// digital clock 로딩 함수
function digitalInit() {
    writeTime();
    changeStyle();
    return setInterval(writeTime, 1000);
}

// 페이지 로딩
let digital_interval = digitalInit();
let analog_interval;
let current_clock = 'digital';

// ----------------- button -----------------

// analog button
document.getElementById('analog_button').addEventListener("click", () => {
    const analog_clock = document.getElementById('analog_clock');
    const digital_clock = document.getElementById('digital_clock');

    analog_clock.style.display = 'block';
    digital_clock.style.display = 'none';

    if (current_clock === 'digital') {
        clearInterval(digital_interval);
        analog_interval = analogInit();
        current_clock = 'analog';
    }
    else {
        changeStyle();
    }
});

// digital button
document.getElementById('digital_button').addEventListener("click", () => {
    const analog_clock = document.getElementById('analog_clock');
    const digital_clock = document.getElementById('digital_clock');

    analog_clock.style.display = 'none';
    digital_clock.style.display = 'block';

    if (current_clock === 'analog') {
        clearInterval(analog_interval);
        digital_interval = digitalInit();
        current_clock = 'digital';
    }
    else {
        changeStyle();
    }
});