function truncateHelper (str, num) {
    if (str.length <= num) {
        return str;
    } else {
        return str.slice(0, num);
    }
}

let user_orig;
let user_num;
let trunc;

function truncate () {
    user_orig = document.getElementById('user').value;
    if (user_orig.length === 0) {
        alert("Please insert a valid username");
    }
    user_num = document.getElementById('num').value;
    if (isNaN(user_num)) {
        alert("Please insert a valid username length");
    }

    console.log(user_orig);
    console.log(user_num);

    trunc = truncateHelper(user_orig, user_num);
    document.getElementById('answer').innerHTML += trunc;
}

// var steve = "they call me failcop"

// var catination = truncate(steve, 32);

// console.log(catination);
// let user_orig = document.getElementById('user').value;