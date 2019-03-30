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
        but.plug = 0;
        but.total++;
        but.win++;
        console.log('Всего игр - ', but.total);
        console.log('Побед - ', but.win);
        console.log('Поражений - ', but.loss, '\n\n');
        // Как научусь в дизайн буду выводить это не в консоль, а под кнопки
        but.totalRes.innerHTML = but.total;
        but.winRes.innerHTML = but.win;
        but.lossRes.innerHTML = but.loss;

    } else {
        alert('Ну и зачем я предложил сменить дверь, знаю же, что шанс в 100500 раз увеличивается :(');
        for (var i = 1; i < 4; i++) {
            but[i].disabled = true;
        }
        but[but.carPos].innerHTML = 'Тут авто';
        but[but.playPos].innerHTML = 'Тут коза';
        but.plug = 0;
        but.total++;
        but.win++;
        console.log('Всего игр - ', but.total);
        console.log('Побед - ', but.win);
        console.log('Поражений - ', but.loss, '\n\n');
        // Как научусь в дизайн буду выводить это не в консоль, а под кнопки
        but.totalRes.innerHTML = but.total;
        but.winRes.innerHTML = but.win;
        but.lossRes.innerHTML = but.loss;
    }
}

const youMight = (playPos, but) => {
    alert('Оуу, кого-то мамочка зря учила стоять на своём, не так ли?');
        for (var i = 1; i < 4; i++) {
            but[i].disabled = true;
        }
    but[but.carPos].innerHTML = 'Тут авто';
    but[playPos].innerHTML = 'Тут коза';
    but.plug = 0;
    but.total++;
    but.loss++;
    console.log('Всего игр - ', but.total);
    console.log('Побед - ', but.win);
    console.log('Поражений - ', but.loss, '\n\n');
    // Как научусь в дизайн буду выводить это не в консоль, а под кнопки
    but.totalRes.innerHTML = but.total;
    but.winRes.innerHTML = but.win;
    but.lossRes.innerHTML = but.loss;
}

const youChangeYouLose = (but) => {
    alert('Эх, меняла-меняла... зря ты так мечешься!');
        for (var i = 1; i < 4; i++) {
            but[i].disabled = true;
        }
    but[but.carPos].innerHTML = 'Тут авто';
    but[but.lastDoor].innerHTML = 'Тут коза';
    but.plug = 0;
    but.total++;
    but.loss++;
    console.log('Всего игр - ', but.total);
    console.log('Побед - ', but.win);
    console.log('Поражений - ', but.loss, '\n\n');
    // Как научусь в дизайн буду выводить это не в консоль, а под кнопки
    but.totalRes.innerHTML = but.total;
    but.winRes.innerHTML = but.win;
    but.lossRes.innerHTML = but.loss;
}

const gameIsOnOne = but => { 
    if (but.plug === 0) { 
        but.playPos = 1;
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
}

const gameIsOnTwo = but => {
    if (but.plug === 0) { 
        but.playPos = 2;
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
    const but = {
        1 : document.getElementById('baton1'),
        2 : document.getElementById('baton2'),
        3 : document.getElementById('baton3'),
        start : document.getElementById('start'),
        explain : document.getElementById('explain'),
        carPos : 0,
        playPos : 0,
        plug : 0,
        lastDoor : 0,
        initStatus : 0,
        total : 0,
        win : 0,
        loss : 0,
        totalRes : document.getElementById("total"),
        winRes : document.getElementById("win"),
        lossRes : document.getElementById("loss"),
    }

    var arr = new Array(3);
    but.start.addEventListener('click', () => gameReal(arr, but));
    but.explain.addEventListener('click', () => explanation());

    const explanation = () => {        
        k = prompt('Введите желаемое количество дверей');
        if (k === null || isNaN(k) || k <= 1) {
            k = 3;
            return alert('Тогда в другой раз!');
        }
        k = +k;
        var doors = new Array(k);
        game(doors);
    }
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
    but.plug = 0;
    
    for (var i = 0; i < doors.length; i++) { 
        doors[i] = Math.random();    
    }
    
    but.carPos = getCar(doors);
    getGoat(doors);

    if (but.initStatus === 0) {    
        but[1].addEventListener('click', () => gameIsOnOne(but));
        but[2].addEventListener('click', () => gameIsOnTwo(but));
        but[3].addEventListener('click', () => gameIsOnThree(but));
    }
    but.initStatus++;
}

document.addEventListener('DOMContentLoaded', init);