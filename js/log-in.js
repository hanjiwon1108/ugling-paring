// Axios 불러오기
function loadScript(url, callback) {
  const script = document.createElement("script");
  script.src = url;
  script.onload = callback;
  document.head.appendChild(script);
}
loadScript("https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js", function () {
  // Axios가 로드 확인 유무
  console.log("Axios loaded!");
});

function logInScript(email, password) {
  axios
    .post("http://192.168.0.33/api/auth/login", {
      email: email,
      password: password,
    })
    .then((response) => {
      if (response.data.success) {
        console.log("Login successful:", response.data); // 성공 시 데이터 처리
        localStorage.setItem("token", response.data.token);
      } else {
        console.log("Login failed:", response.data.message);
        document.getElementById("content").textContent =
          "Login failed: " + response.data.message;
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error); // 실패 시 오류 처리
    });
}

var button = document.getElementById("find-pw-go");

// 클릭 이벤트 핸들러 추가
button.onclick = function () {
  // 페이지 이동
  window.location.href = "find-pw.html";
};
