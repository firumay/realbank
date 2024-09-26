const buttons = document.querySelectorAll('.item');
let pass = 0;
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');

const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');
const t5 = document.getElementById('t5');
const t6 = document.getElementById('t6');
const t7 = document.getElementById('t7');
const t8 = document.getElementById('t8');
const t9 = document.getElementById('t9');
const t0 = document.getElementById('t0');

const pin = document.querySelector('.pin');
const del = document.getElementById('delete');

let password = '';
let access = false;

t1.addEventListener('click', (e) => {
    password += '1'
});
t2.addEventListener('click', (e) => {
    password += '2'
});
t3.addEventListener('click', (e) => {
    password += '3'
});
t4.addEventListener('click', (e) => {
    password += '4'
});
t5.addEventListener('click', (e) => {
    password += '5'
});
t6.addEventListener('click', (e) => {
    password += '6'
});
t7.addEventListener('click', (e) => {
    password += '7'
});
t8.addEventListener('click', (e) => {
    password += '8'
});
t9.addEventListener('click', (e) => {
    password += '9'
});
t0.addEventListener('click', (e) => {
    password += '0'
});
buttons.forEach((item) => {
    item.addEventListener('click', () => {
        pass += 1;
        if (pass === 1) {
            s1.style.backgroundColor = 'white';
        }
        else if (pass === 2) {
            s2.style.backgroundColor = 'white';
        }
        else if (pass === 3) {
            s3.style.backgroundColor = 'white';
        }
        else if (pass === 4) {
            s4.style.backgroundColor = 'white';
        }
        else if (pass === 5) {
            s5.style.backgroundColor = 'white';
        }
        if (password.length === 5) {
            if (password === '00001') {
                access = true;
                pin.classList.add('active');
                s1.style.backgroundColor = 'green';
                s2.style.backgroundColor = 'green';
                s3.style.backgroundColor = 'green';
                s4.style.backgroundColor = 'green';
                s5.style.backgroundColor = 'green';
            } else {
                
                s1.style.backgroundColor = 'red';
                s2.style.backgroundColor = 'red';
                s3.style.backgroundColor = 'red';
                s4.style.backgroundColor = 'red';
                s5.style.backgroundColor = 'red';
                pin.classList.add('wrong');
                setTimeout(() => {
                    password = '';
                    pass = 0;
                    s1.style.backgroundColor = '#5C5762';
                    s2.style.backgroundColor = '#5C5762';
                    s3.style.backgroundColor = '#5C5762';
                    s4.style.backgroundColor = '#5C5762';
                    s5.style.backgroundColor = '#5C5762';
                    pin.classList.remove('wrong');
                }, 1000)
            }
            if (access === true) {
                setTimeout(() => {
                    document.querySelector('.login').style.display = 'none';
                    document.querySelector('.wrapper-home').style.display = 'block';
                }, 3000)
            }
        }
    });
});
del.addEventListener('click', () => {
    if (password.length !== 5){
        if (password.length > 0) {
            password = password.slice(0, -1);
        }
        if (pass > 0) {
            pass -= 1;  // Уменьшаем pass только если он больше 0
        }
    }


    // Сбрасываем цвет в зависимости от значения pass
    if (pass < 1) {
        s1.style.backgroundColor = '#5C5762';
    }
    if (pass < 2) {
        s2.style.backgroundColor = '#5C5762';
    }
    if (pass < 3) {
        s3.style.backgroundColor = '#5C5762';
    }
    if (pass < 4) {
        s4.style.backgroundColor = '#5C5762';
    }
    if (pass < 5) {
        s5.style.backgroundColor = '#5C5762';
    }
});