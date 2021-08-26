document.getElementById('show1').style.display = 'none';
document.getElementById('show2').style.display = 'none';
document.getElementById('hideit1').style.display = 'none';
document.getElementById('hideit2').style.display = 'none';

function showtxt1_Onclick() {
    document.getElementById('show1').style.display = 'block';
    document.getElementById('showit1').style.display = 'none';
    document.getElementById('hideit1').style.display = 'block';

}

function showtxt2_Onclick() {
    document.getElementById('show2').style.display = 'block';
    document.getElementById('showit2').style.display = 'none';
    document.getElementById('hideit2').style.display = 'block';
}

function hidetxt1_Onclick(){
    document.getElementById('show1').style.display = 'none';
    document.getElementById('hideit1').style.display = 'none';
    document.getElementById('showit1').style.display = 'block';

}  

function hidetxt2_Onclick() {
    document.getElementById('show2').style.display = 'none';
    document.getElementById('hideit2').style.display = 'none';
    document.getElementById('showit2').style.display = 'block';
}