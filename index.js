const scene1 = document.querySelector('.w1')
const home = document.querySelector('.homepage')
const bt1 = document.querySelector('.w')
bt1.addEventListener('click', function(){
document.querySelector('.homepage').style.display = 'none';
document.querySelector('.w1').style.display = 'flex';
});

const bt2 = document.querySelector('.next1')
bt2.addEventListener('click', function(){
document.querySelector('.w1').style.display = 'none';
document.querySelector('.w2').style.display = 'flex';
});

const bt3 = document.querySelector('.next2')
bt3.addEventListener('click', function(){
document.querySelector('.w2').style.display = 'none';
document.querySelector('.w3').style.display = 'flex';
});

const bt4 = document.querySelector('.next3')
bt4.addEventListener('click', function(){
document.querySelector('.w3').style.display = 'none';
document.querySelector('.w4').style.display = 'flex';
});

const bt5 = document.querySelector('.next4')
bt5.addEventListener('click', function(){
document.querySelector('.w4').style.display = 'none';
document.querySelector('.w5').style.display = 'flex';
});


const bt6 = document.querySelector('.back2')
bt6.addEventListener('click', function(){
document.querySelector('.w5').style.display = 'none';
document.querySelector('.homepage').style.display = 'flex';
});




const bt7 = document.querySelector('.m')
bt7.addEventListener('click', function(){
document.querySelector('.homepage').style.display = 'none';
document.querySelector('.m1').style.display = 'flex';
});

const bt8 = document.querySelector('.next1m')
bt8.addEventListener('click', function(){
document.querySelector('.m1').style.display = 'none';
document.querySelector('.m2').style.display = 'flex';
});

const bt9 = document.querySelector('.next2m')
bt9.addEventListener('click', function(){
document.querySelector('.m2').style.display = 'none';
document.querySelector('.m3').style.display = 'flex';
});

const bt10 = document.querySelector('.next3m')
bt10.addEventListener('click', function(){
document.querySelector('.m3').style.display = 'none';
document.querySelector('.m4').style.display = 'flex';
});

const bt11 = document.querySelector('.next4m')
bt11.addEventListener('click', function(){
document.querySelector('.m4').style.display = 'none';
document.querySelector('.m5').style.display = 'flex';
});


const bt12 = document.querySelector('.back3')
bt12.addEventListener('click', function(){
document.querySelector('.m5').style.display = 'none';
document.querySelector('.homepage').style.display = 'flex';
});


const cursor = document.querySelector('.cursor')
    window.addEventListener('mousemove', (e)=> 
        {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });