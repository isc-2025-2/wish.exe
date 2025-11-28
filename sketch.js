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

//인트로

function intro_text(){
  //텍스트, ENTER 누를 때마다 text가 바뀌도록하기
  // text_1, text_2, text_3등 변수 설정
}

function intro_stars(){
  
}

//질문 1

function question_1(){
  //별의 위치 지정하는 질문 
  input_1()
}

function input_1(){
  //텍스트 입력받고
  //LLM 실행
}

function loading_1(){
  stars_loc()
  //디즈니 관련 내용 설명
}

function stars_loc(){
  //별 n개 생성
}

//질문 2

function question_2(){
  //stars_loc()의 정보 받아오기
  //별의 색상 지정하는 질문
  input_2()
}

function input_2(){
  //텍스트 입력받고
  //LLM 실행
}

function loading_2(){
  stars_col()
  about_stars()
}

function stars_col(){
  //별 색상 정하기
  //stars_loc의 정보받아오기
  //색 입히기
}

function about_stars(){
  //별자리와 관련한 사실들을 리스트로 만들어 random추출하기
  abouts = []
  fact = abouts[random(0, len(abouts))]
  //fact 전달
}


//질문 3

function question_3(){
  //stars_col()의 정보 받아오기
  //별의 밝기 지정하는 질문
  input_3()
}

function input_3(){
  //텍스트 입력받고
  //LLM 실행
}

function loading_3(){
  stars_lum()
  stars_myth()
}

function stars_lum(){
  //별 밝기 정하기
  //stars_col의 정보받아오기
  //밝기 입히기
}

function stars_myth(){
  //별자리와 관련한 신화들을 리스트로 만들어 random추출하기
  myth_list = []
  myth = abouts[random(0, len(abouts))]
  //fact 전달
}

//질문 4(소원)
function question_4(){
  //stars_lum의 정보받아오기
  input_4()
}

function input_4(){
  //텍스트 입력받고
  //LLM 실행
}

function drag_stars(){
  //소원에 따른 별자리 출력
  //별 드래그앤 드랍
  //페이드아웃
}

function last(){
  //최종화면
  //QR 이미지
  radar_chart()
  reset()
  //일정시간 지나면 메인화면으로 전환
}

function radar_chart(){
  //레이더 차트
}

function reset(){
  //초기화버튼
}