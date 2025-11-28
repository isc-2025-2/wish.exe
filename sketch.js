function setup() {
  createCanvas(1920 * 0.4, 1080 * 0.4); //화면 크기 * 0.4
}

// function draw() {
//   background(220);
// }

function main(){
  //메인 화면을 그리는 함수. 
  //Wish.exe 제목 출력
  //Press enter to start
  
  if (keyIsPressed && keyCode === ENTER) {
    intro();
  }
  
}

function intro(){
  //인트로 화면을 그리는 함수.
  //전환효과 : 페이드 아웃
  
}

function intro_text(){
  //텍스트, ENTER 누를 때마다 text가 바뀌도록하기
  // text_1, text_2, text_3등 변수 설정
}

function intro_stars(){
  
}

function question1(){
  //별의 위치 지정하는 질문  
}

function question2(){
  //별의 색상 지정하는 질문  
}

function question3(){
  //별의 밝기 지정하는 질문  
}

