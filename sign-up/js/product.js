function check(event) {
  event.preventDefault();

  // 제품관련 변수
  const gift3kg = document.querySelector("#gift_3kg");
  const gift5kg = document.querySelector("#gift_5kg");
  const home3kg = document.querySelector("#home_3kg");
  const home5kg = document.querySelector("#home_5kg");

  const gift3kgQty = document.querySelector("#gift_3kg_qty");
  const gift5kgQty = document.querySelector("#gift_5kg_qty");
  const home3kgQty = document.querySelector("#home_3kg_qty");
  const home5kgQty = document.querySelector("#home_5kg_qty");

  //배송정보 관련 변수
  const uname = document.querySelector("#uname");
  const adrress = document.querySelector("#adrress");
  const email = document.querySelector("#uemail");
  const phone = document.querySelector("#phone");
  const date = document.querySelector("#date");
  const memo = document.querySelector("#memo");

  // 포장 선택
  const packagingYes = document.querySelector("#pack_y");
  const packagingNo = document.querySelector("#pack_n");

  function logSelection() {
    console.log("선물용 3kg 체크: " + gift3kg.checked + ", 수량: " + gift3kgQty.value);
    console.log("선물용 5kg 체크: " + gift5kg.checked + ", 수량: " + gift5kgQty.value);
    console.log("가정용 3kg 체크: " + home3kg.checked + ", 수량: " + home3kgQty.value);
    console.log("가정용 5kg 체크: " + home5kg.checked + ", 수량: " + home5kgQty.value);
    
    // 포장 선택
    if (packagingYes.checked) {
      console.log("포장 선택: 선물 포장");
    } else {
      console.log("포장 선택: 포장 안함");
    }
  }


  // 출력
  logSelection();
  console.log('User name : ' + uname.value);
  console.log('adrress : ' + adrress.value);
  console.log('email : ' + email.value);
  console.log('phone : ' + phone.value);
  console.log('date : ' + date.value);
  console.log('memo : ' + memo.value);
}