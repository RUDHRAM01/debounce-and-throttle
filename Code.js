let n_count = 0;
let t_count = 0;
let d_count = 0;
let t_timer = true;
let d_interval;

const normal_div = document.querySelector('.n');
const throttle_div = document.querySelector('.n');
const debounce_div = document.querySelector('.n');


const normal = () => {
    n_count++;
    normal_div.innerHTML = n_count;
}

const throttle = () => {
    if (t_timer === true) {
        t_count++;
        throttle_div.innerHTML = t_count;
        t_timer = false;
        setTimeout(() => {
            t_timer = true;
        }, 1000);
    }
}

const debounce = () => {
    clearTimeout(d_interval);

    d_interval = setTimeout(() => {
        d_count++;
        debounce_div.innerHTML = d_count;
    }, 1000);
}