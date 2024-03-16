var user = JSON.parse(localStorage.getItem("user"));
console.log(user);

function signIn() {
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  if (email.value == "" || password.value == "") {
    alert("Không được để trống");
    return;
  }
  var user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  if (email.value == user.email && password.value == user.password) {
    alert("Đăng nhập thành công");
    window.location.href = "quanao.html";
  } else {
    alert("Đăng nhập thất bại");
  }
}
