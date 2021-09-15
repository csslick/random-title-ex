// main.js
console.log('hello');

// 시간표시 함수
function showDate() {
  let d = new Date();
  // 년도
  let year = d.getFullYear();
  // 월(+1)
  let month = d.getMonth() + 1;
  // 일
  let date = d.getDate();

  document.getElementById('year').innerHTML = year;
  document.getElementById('month').innerHTML = month;
  document.getElementById('date').innerHTML = date;
}

showDate();

// 배경 바꾸기 함수
function changeBG() {
  let arr = [
    'images/title-bg1.jpg',
    'images/title-bg2.jpg',
    'images/title-bg3.jpg',
  ]
  
  // 랜덤값 생성
  let i = Math.floor(Math.random() * 3);
  // 배경 변경
  document.body.style.backgroundImage = "url(" + arr[i] + ")";
}

// 일정 시간마다 자동으로 배경 바꾸기
// changeBG();
setInterval(changeBG, 4000); // 콜백함수를 추가