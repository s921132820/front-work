function check(event) {
  event.preventDefault();
  const uname = document.querySelector("#uname");
  const phone = document.querySelector("#phone");
  const field = document.getElementsByName("field");

  // 이름 안쓰면 경고창
  if (uname.value.length == 0) {
    alert("이름을 입력하세요.");
  }

  // 핸드폰번호 안쓰면 경고창
  if (phone.value.length == 0) {
    alert("핸드폰 번호를 입력하세요.");
    phone.focus();
  }

  // 지원분야 값 받기
  let fieldReceive;
  field.forEach((x) => {
    if(x.checked) {
      fieldReceive = x.value;
    }
  })

// 콘솔창에 출력
console.log("name : " + uname.value);
console.log("phone : " + phone.value);
console.log("field : " + fieldReceive);
}


