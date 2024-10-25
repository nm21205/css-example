//fullpage플러그인 적용

let myFullpage = new fullpage("#fullpage",{
  autoScolling:true,
  scrollHorizontally: false,
  css3:false, //crome에서 css3변환 및 고정된 요소의 문제를 해결합니다.
  easing:"easeOutBounce",
  menu: "#menu",
  anchors: ["blossom", "colorfull", "board", 'addict'],
});

//section요소 선택

const section = document.querySelectorAll('section');


//마우스 위치에 따라 움직이는 이미지

for(const item of section){
  item.addEventListener("mousemove", function(e){
    //obj = 패럴렉스가 적용될 요소, rightStart = right 시작위치, rightTimes =마우스위치값에 대입하여 값을 축하기 위해 전달 되는 값
    function parallax(obj, rightStart, rightTimes, bottomStart, bottomTimes){
      const objElement = document.querySelector(obj);
      objElement.style.right = rightStart + (e.pageX * rightTimes)+"px";
      objElement.style.bottom = bottomStart + (e.pageY * bottomTimes)+"px";
    }
    parallax('.p11', 20,-1 /30, 20, -1 /30);
    parallax('.p12', 130,-1 /20, -40, 1 /20);
    
    const p13 = document.querySelector(".p13");
    p13.style.right = 60 + e.pageX * 1/20 + "px";
    p13.style.top = 180 + e.pageY * 1/20 + "px";

    //2페이지
    parallax('.p21', -180, -1 / 30, -480, -1 / 30);
    parallax('.p22', 130, 1 / 50, -40, 1 / 50);
    //3페이지
    parallax('.p31', 180, -1 / 30, 30, -1 / 30);
    parallax('.p32', 110, 1 / 20, -270, 1 / 20);
    parallax('.p33', -70, 1 / 20, -130, 1 / 20);
    //4페이지
    parallax('.p41', 20, -1 / 30, -120, -1 / 30);
    parallax('.p42', 0, -1 / 20, -180, -1 / 20);
  })


}