const getCar = (arr) => {
    var len = arr.length, max = 0;
    while (len--) {
        if (arr[len] > max) {
            max = arr[len];
            pos = len;
        }
    }
    arr[pos] = prises[2];
    return pos + 1;
}

const getGoat = (arr) => {
    var len = arr.length;
    while(len--) {
        if (isNaN(arr[len])) {
        } else {
            arr[len] = prises[1];
        }
    }
}

const youWon = (playPos, but) => {
    if (playPos === but.carPos) {
        alert('Остался на своём и выиграл, молодца');
        for (var i = 1; i < 4; i++) {
            but[i].disabled = true;
        }
        but[but.carPos].innerHTML = 'Тут авто';
        but[but.lastDoor].innerHTML = 'Тут коза';
        but.start.disabled = true;
    } else {
        alert('Ну и зачем я предложил сменить дверь, знаю же, что шанс в 100500 раз увеличивается :(');
        for (var i = 1; i < 4; i++) {
            but[i].disabled = true;
        }
        but[but.carPos].innerHTML = 'Тут авто';
        but[but.playPos].innerHTML = 'Тут коза';
        but.start.disabled = true;
    }
}

const youMight = (playPos, but) => {
        alert('Оуу, кого-то мамочка зря учила стоять на своём, не так ли?');
        for (var i = 1; i < 4; i++) {
            but[i].disabled = true;
        }
        but[but.carPos].innerHTML = 'Тут авто';
        but[playPos].innerHTML = 'Тут коза';
        but.start.disabled = true;
}

const youChangeYouLose = (but) => {
    alert('Эх, меняла-меняла... зря ты так мечешься!');
    for (var i = 1; i < 4; i++) {
        but[i].disabled = true;
    }
    but[but.carPos].innerHTML = 'Тут авто';
    but[but.lastDoor].innerHTML = 'Тут коза';
    but.start.disabled = true;
}

const gameIsOnOne = but => {
    // for (var i = 0; i < 3; i++) {
    //     conf[i] += 3;
    // } // Отключаем пред кнопки
    // console.log(conf[0]);
    // console.log(conf[1]);
    // console.log(conf[2]); 
    if (but.plug === 0) { 
        but.playPos = 1;
        console.log('Игрок выбрал ячейку - ', but.playPos);
        but[but.playPos].innerHTML = 'Ваш выбор';
        
        for (var reveal = Math.round((Math.random() * 2) + 1);
            reveal === but.playPos || reveal === but.carPos;) {
                reveal = Math.round((Math.random() * 2) + 1);
        }
        but[reveal].innerHTML = 'Тут коза';
        but[reveal].disabled = true;
        alert('Я решил посмотреть что за ещё одной дверью, и дать вам шанс сменить свой выбор!');

        if (but.playPos === but.carPos) {
            for (but.lastDoor = Math.round((Math.random() * 2) + 1);
            but.lastDoor === but.playPos || but.lastDoor === reveal;) {
                but.lastDoor = Math.round((Math.random() * 2) + 1);
            }
        }
    but.plug++;  
    } else {
        if (but.carPos === 1) {
            youWon(but.playPos, but);
        } else if (but.playPos != but.carPos && but.playPos === 1) {
            youMight(but.playPos, but);
        } else if (but.lastDoor === 1) {
            youChangeYouLose(but);
        }
    }

    // but[but.carPos].addEventListener('click', () => youWon(playPos, but));
    // but[playPos].addEventListener('click', () => youMight(playPos, but));
    // // but[lastDoor].addEventListener('click', () => youChangeYouLose(playPos, but, lastDoor));
}

const gameIsOnTwo = but => {
    if (but.plug === 0) { 
        but.playPos = 2;
        console.log('Игрок выбрал ячейку - ', but.playPos);
        but[but.playPos].innerHTML = 'Ваш выбор';
        
        for (var reveal = Math.round((Math.random() * 2) + 1);
            reveal === but.playPos || reveal === but.carPos;) {
                reveal = Math.round((Math.random() * 2) + 1);
        }
        but[reveal].innerHTML = 'Тут коза';
        but[reveal].disabled = true;
        alert('Я решил посмотреть что за ещё одной дверью, и дать вам шанс сменить свой выбор!');

        if (but.playPos === but.carPos) {
            for (but.lastDoor = Math.round((Math.random() * 2) + 1);
            but.lastDoor === but.playPos || but.lastDoor === reveal;) {
                but.lastDoor = Math.round((Math.random() * 2) + 1);
            }
        }
    but.plug++;  
    } else {
        if (but.carPos === 2) {
            youWon(but.playPos, but);
        } else if (but.playPos != but.carPos && but.playPos === 2) {
            youMight(but.playPos, but);
        } else if (but.lastDoor === 2) {
            youChangeYouLose(but);
        }
    }
}

const gameIsOnThree = but => {
    if (but.plug === 0) { 
        but.playPos = 3;
        console.log('Игрок выбрал ячейку - ', but.playPos);
        but[but.playPos].innerHTML = 'Ваш выбор';
        
        for (var reveal = Math.round((Math.random() * 2) + 1);
            reveal === but.playPos || reveal === but.carPos;) {
                reveal = Math.round((Math.random() * 2) + 1);
        }
        but[reveal].innerHTML = 'Тут коза';
        but[reveal].disabled = true;
        alert('Я решил посмотреть что за ещё одной дверью, и дать вам шанс сменить свой выбор!');

        if (but.playPos === but.carPos) {
            for (but.lastDoor = Math.round((Math.random() * 2) + 1);
            but.lastDoor === but.playPos || but.lastDoor === reveal;) {
                but.lastDoor = Math.round((Math.random() * 2) + 1);
            }
        }
    but.plug++;  
    } else {
        if (but.carPos === 3) {
            youWon(but.playPos, but);
        } else if (but.playPos != but.carPos && but.playPos === 3) {
            youMight(but.playPos, but);
        } else if (but.lastDoor === 3) {
            youChangeYouLose(but);
        }
    }
}

var prises = {
    1 : 'Коза',
    2 : 'Авто', 
}

const init = () => {
    // var conf = [1, 2, 3];
    const but = {
        1 : document.getElementById('baton1'),
        2 : document.getElementById('baton2'),
        3 : document.getElementById('baton3'),
        // 4 : document.getElementById('baton4'),
        // 5 : document.getElementById('baton5'),
        // 6 : document.getElementById('baton6'),
        start : document.getElementById('start'),
        carPos : 0,
        playPos : 0,
        plug : 0,
        last : 0
    }

    var arr = new Array(3);
    but.start.addEventListener('click', () => gameReal(arr, but));
    
    k = prompt('Введите желаемое количество дверей');
    if (k === null || isNaN(k) || k <= 1) {
        k = 3;
        return alert('Тогда в другой раз!');
    }
    k = +k;
    var doors = new Array(k);
    game(doors);
}

const pick = (arr) => {
    return Math.round(Math.random() * (arr.length - 1)) + 1;
}

const standMyGround = (playPos, carPos) => {
    if (playPos === carPos) {
        console.log('Ретроград выиграл!');
        return 1;
    }
    console.log('Олду не повезло!');
    return 0;
}

const changeYourPrinciples = (arr, playPos, carPos) => {
    if (playPos === carPos) {
        playPos != 1 ? playPos = arr[playPos - 1] : playPos = arr[playPos + 1];
        console.log('Угадал и поменял - лох!');
        return 0;
    } else {
        console.log('Менятор выиграл!');
        return 1;
    }
}

const game = (doors) => { 
    for (var counter = 0, urgentWins = 0, changefulWins = 0; counter < 1000; counter++) { 
        console.log('\nИгра номер ', counter + 1);
        
        for (var i = 0; i < doors.length; i++) { 
            doors[i] = Math.random();    
        }
        var carPos = getCar(doors);
        getGoat(doors);
        console.log('Машина в ячейке - ', carPos);

        var playPos = pick(doors);
        console.log('Выбор игрока - ', playPos);

        urgentWins += standMyGround(playPos, carPos);
        changefulWins += changeYourPrinciples(doors, playPos, carPos);
    }
    console.log('Один раз выбрал, дальше не менял выиграл ', urgentWins, 'раз!\n',
                'Менял каждый раз, когда просили выиграл ', changefulWins, 'раз!');
}

const gameReal = (doors, but) => {
    but[1].innerHTML = 'Первая дверь';
    but[2].innerHTML = 'Вторая дверь';
    but[3].innerHTML = 'Третья дверь';  
    but[1].disabled = false;
    but[2].disabled = false;
    but[3].disabled = false;
    // but[4].disabled = true;
    // but[5].disabled = true;
    // but[6].disabled = true;

    
    for (var i = 0; i < doors.length; i++) { 
        doors[i] = Math.random();    
    }
    
    but.carPos = getCar(doors);
    getGoat(doors);

    but[1].addEventListener('click', () => gameIsOnOne(but));
    but[2].addEventListener('click', () => gameIsOnTwo(but));
    but[3].addEventListener('click', () => gameIsOnThree(but));
}

document.addEventListener('DOMContentLoaded', init);