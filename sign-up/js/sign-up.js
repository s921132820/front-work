function check() {
  // 입력한 내용을 사라지지 않게 유지하는 함수
  event.preventDefault();
  const userId = document.querySelector("#uid");
  const email = document.querySelector("#uemail");
  const pwd1 = document.querySelector("#pwd1");
  const pwd2 = document.querySelector("#pwd2");
  const path = document.querySelector("#path");
  const memo = document.querySelector("#memo");
  const mail_y = document.querySelector("#mail_y");
  const mailing = document.getElementsByName("mailing");
  
  // 아이디가 4~8자 사이인지 확인
  if (userId.value.length < 4 || userId.value.length > 8 ) {
    alert('아이디는 4~8자 사이로 입력하세요.')
    userId.value = '';
    userId.focus();
  }

  // 이메일이 비었는지 확인
  if(email.value.length == 0) {
    alert('이메일이 비었습니다. 입력해주세요.');
    // 비우고
    email.value = '';
    // 포커스 주기
    emil.focus();
  }

  // 비밀번호와 비밀번호확인 두 값이 같은지 확인
  if (pwd1.value !== pwd2.value) {
    alert('비밀번호가 일치하지 않습니다.')
    pwd2.value = '';
    pwd2.focus();
  }


  // 메일 수신 여부를 검사 -> return 값 결정
  let mailReceive;
  mailing.forEach((x) => {
    if(x.checked) {
      mailReceive = x.value;
    }
  })

  // alert(userId.value);
  console.log('User-Id : ' + userId.value);
  console.log('Email : ' + email.value);
  console.log('password1 : ' + pwd1.value);
  console.log('password2 : ' + pwd2.value);
  console.log('path : ' + path.value);
  console.log('memo : ' + memo.value);
  console.log('mail : ' + mailReceive);
}