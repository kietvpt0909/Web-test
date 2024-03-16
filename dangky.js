function signIn() {
    const email = document.getElementById('signin-email');
    const name = document.getElementById('name');
    const signin_password = document.getElementById('signin-password');
    const repassword = document.getElementById('repassword');

    if (email.value == '' || name.value == '' || signin_password.value == '' || repassword.value == '') {
        alert('không được để trống');
        return;
    }
    if (signin_password.value != repassword.value) {
        alert('Mật khẩu không trùng khớp');
        return;
    }
    var user = {
        email: email.value,
        name: name.value,
        password: signin_password.value
    }
    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));

    window.location.href = 'dangnhap.html';
}

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var ojb = {
//     name: "Nguyen Van A",
//     age: 20
// }
// console.log(typeof(ojb));
// console.log(ojb);
// localStorage.setItem('abc', JSON.stringify(ojb));
// console.log("-=-=-=-=-=-=-=-=-");

// console.log(typeof(JSON.parse(localStorage.getItem('abc'))));
// console.log(JSON.parse(localStorage.getItem('abc')));