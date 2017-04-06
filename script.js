var flag = 1;
var arr = ["", "", "", "", "", "", "", "", "", ""];
var counter = 0;
var tie = 0;
var win = 0;
var nx = 0;
var ny = 0;

function k(i, j) {
    var kj = i;
    var res = kj.substring(3);
    if (flag == 1 && arr[res]=="" && win == 0) {
        document.getElementById(i).style.display = 'block';
        arr[res] = 'X';
        flag = 0;
        check();
        counter++;
    } else if (flag == 0 && arr[res]=="" && win == 0) {
        document.getElementById(j).style.display = 'block';
        arr[res] = 'O';
        flag = 1;
        check();
        counter++;
    }
    if (counter == 9 && tie == 0) {
        document.getElementById('winner-board').innerHTML = '<h2>Game Tie</h2>';
    }
}

function check() {
    if (arr[1] != "" && arr[2] != "" && arr[3] != "" && arr[1] == arr[2] && arr[3] == arr[2]) {
        tie = 1;
        document.getElementById('winner-board').innerHTML = '<h2>' + arr[1] + ' is Winner</h2>';
        document.getElementById('hori1').style.display = 'block';
        win = 1;
        if (arr[1] == 'X') {
            nx++;
            document.getElementById('score1').innerHTML=nx;
        } else {
            ny++;
            document.getElementById('score2').innerHTML=ny;
        }

    } else if (arr[4] != "" && arr[5] != "" && arr[6] != "" && arr[4] == arr[5] && arr[6] == arr[4]) {
        tie = 1;
        document.getElementById('winner-board').innerHTML = '<h2>' + arr[4] + ' is Winner</h2>';
        document.getElementById('hori2').style.display = 'block';
        win = 1;
        if (arr[4] == 'X') {
            nx++;
            document.getElementById('score1').innerHTML=nx;
        } else {
            ny++;
            document.getElementById('score2').innerHTML=ny;
        }
    } else if (arr[9] != "" && arr[8] != "" && arr[7] != "" && arr[7] == arr[8] && arr[9] == arr[7]) {
        tie = 1;
        document.getElementById('winner-board').innerHTML = '<h2>' + arr[7] + ' is Winner</h2>';
        document.getElementById('hori3').style.display = 'block';
        win = 1;
        if (arr[9] == 'X') {
            nx++;
            document.getElementById('score1').innerHTML=nx;
        } else {
            ny++;
            document.getElementById('score2').innerHTML=ny;
        }
    } else if (arr[4] != "" && arr[1] != "" && arr[7] != "" && arr[1] == arr[4] && arr[4] == arr[7]) {
        tie = 1;
        document.getElementById('winner-board').innerHTML = '<h2>' + arr[1] + ' is Winner</h2>';
        document.getElementById('vertical1').style.display = 'block';
        win = 1;
        if (arr[4] == 'X') {
            nx++;
            document.getElementById('score1').innerHTML=nx;
        } else {
            ny++;
            document.getElementById('score2').innerHTML=ny;
        }
    } else if (arr[2] != "" && arr[5] != "" && arr[8] != "" && arr[8] == arr[5] && arr[5] == arr[2]) {
        tie = 1;
        document.getElementById('winner-board').innerHTML = '<h2>' + arr[2] + ' is Winner</h2>';
        document.getElementById('vertical2').style.display = 'block';
        win = 1;
        if (arr[2] == 'X') {
            nx++;
            document.getElementById('score1').innerHTML=nx;
        } else {
            ny++;
            document.getElementById('score2').innerHTML=ny;
        }
    } else if (arr[9] != "" && arr[3] != "" && arr[6] != "" && arr[9] == arr[6] && arr[3] == arr[6]) {
        tie = 1;
        document.getElementById('winner-board').innerHTML = '<h2>' + arr[3] + ' is Winner</h2>';
        document.getElementById('vertical3').style.display = 'block';
        win = 1;
        if (arr[9] == 'X') {
            nx++;
            document.getElementById('score1').innerHTML=nx;
        } else {
            ny++;
            document.getElementById('score2').innerHTML=ny;
        }
    } else if (arr[1] != "" && arr[5] != "" && arr[9] != "" && arr[9] == arr[1] && arr[1] == arr[5]) {
        tie = 1;
        document.getElementById('winner-board').innerHTML = '<h2>' + arr[1] + ' is Winner</h2>';
        document.getElementById('diagonal1').style.display='block';
        win = 1;
        if (arr[1] == 'X') {
            nx++;
            document.getElementById('score1').innerHTML=nx;
        } else {
            ny++;
            document.getElementById('score2').innerHTML=ny;
        }
    } else if (arr[3] != "" && arr[5] != "" && arr[7] != "" && arr[3] == arr[5] && arr[7] == arr[5]) {
        tie = 1;
        document.getElementById('winner-board').innerHTML = '<h2>' + arr[3] + ' is Winner</h2>';
        document.getElementById('diagonal2').style.display = 'block';
        win = 1;
        if (arr[3] == 'X') {
            nx++;
            document.getElementById('score1').innerHTML=nx;
        } else {
            ny++;
            document.getElementById('score2').innerHTML=ny;
        }

    } else {

    }
}

function but() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById("box" + i).style.display = 'none';
        document.getElementById("box" + i + "1").style.display = 'none';
    }
    for (var i = 1; i <= 3; i++) {
        document.getElementById("hori" + i).style.display = 'none';
        document.getElementById("vertical" + i).style.display = 'none';
    }
    document.getElementById('winner-board').innerHTML = '<h2>Tic Tac Toe</h2>';

    document.getElementById("diagonal1").style.display = 'none';
    document.getElementById("diagonal2").style.display = 'none';
    flag = 1;
    arr = ["", "", "", "", "", "", "", "", "", ""];
    counter = 0;
    tie = 0;
    win = 0;
}
function end(){
    if(nx>ny){
document.getElementById('winner-board').innerHTML = '<h2>Player 1 is Winner</h2>';
    }
    else if(nx<ny){
        document.getElementById('winner-board').innerHTML = '<h2>Player 2 is Winner</h2>';
    }
    else{
         document.getElementById('winner-board').innerHTML = '<h2>Game Tie</h2>';
    }
    document.getElementById('score1').innerHTML = '0';
    document.getElementById('score2').innerHTML = '0';
    nx=0;
    ny=0;
}