function resizeHandler(){
  console.log("resize event occured; now window size: " + screen.width);
}

function init(){
    if(screen.size <= 440){
      updateDate();

      var chatContent = document.createElement("div");
      chatContent.classList.add("chat-content", "chat-content-left", "row");

      chatContent.innerHTML = "Hi! Good to meet you!";

      addChatReply(chatContent);
    }else{
      spreadStar();
      createLantern();
    }
}

function appearContent(val){
  val.style.display = "inline-block";
}

function updateDate(){
    console.log("update function called");
    var today = new Date();
    var dateStr = today.toDateString().split(" ");

    document.getElementById("date").innerHTML = `${dateStr[0]}, ${dateStr[1]} ${dateStr[2]}, ${dateStr[3]}`;
}

function scrollToBottom(){
    window.scrollTo(0, document.querySelector("body").scrollHeight);
}

function addUserChat(val){
  var container = document.querySelector(".chat-container");
  var user = document.createElement("div");
  var wrapRow = document.createElement("div");
  var wrapCol = document.createElement("div");
  var chatContent = document.createElement("div");
  var chatTimestamp = addTimestamp("right");
  wrapRow.classList.add("row", "justify-content-end", "chat-set");
  wrapCol.classList.add("col-9");
  chatContent.classList.add("chat-content", "chat-content-right", "row");
  chatContent.innerHTML = val.innerHTML;

  wrapCol.appendChild(chatContent);
  wrapCol.appendChild(chatTimestamp);
  wrapRow.appendChild(wrapCol);
  user.appendChild(wrapRow);
  container.appendChild(user);
}

function makeLogo(w){
  var logoWrap = document.createElement("div");
  logoWrap.className = "logo";
  if(w){
    logoWrap.style.width = w;
    logoWrap.style.height = w;
  }
  var leftEyebrow = document.createElement("div");
  leftEyebrow.classList.add("left-eyebrow", "line");
  var rightEyebrow = document.createElement("div");
  rightEyebrow.classList.add("right-eyebrow", "line");
  var leftEye = document.createElement("div");
  leftEye. classList.add("left-eye", "circle");
  var rightEye = document.createElement("div");
  rightEye.classList.add("right-eye", "circle");
  var leftCheek = document.createElement("div");
  leftCheek.classList.add("left-cheek", "circle");
  var rightCheek = document.createElement("div");
  rightCheek.classList.add("right-cheek", "circle");
  var beak = document.createElement("div");
  beak.classList.add("beak", "circle");
  var mouth = document.createElement("div");
  mouth.className = "mouth";

  beak.appendChild(mouth);
  logoWrap.appendChild(leftEyebrow);
  logoWrap.appendChild(rightEyebrow);
  logoWrap.appendChild(leftEye);
  logoWrap.appendChild(rightEye);
  logoWrap.appendChild(leftCheek);
  logoWrap.appendChild(rightCheek);
  logoWrap.appendChild(beak);

  return logoWrap;
}

function createSingleRow(){
  var row = document.createElement("div");
  row.className = "row";
  var col = document.createElement("div");
  col.className = "col";

  appearContent(col);

  row.appendChild(col);
  return row;
}

function addDefaultMenu(){
    var chatContent = document.createElement("div");
    chatContent.classList.add("chat-content", "chat-content-left", "row", "menu");

    var chatArray = [];
    let i;
    for(i = 0; i<4; i++){
        let temp = document.createElement("div");
        temp.className = "col-md-3";
        temp.style.padding = "0";

        if(i > 0){
            var btn = document.createElement("button");
            btn.setAttribute("type", "button");
            btn.classList.add("btn", "btn-light");
            temp.appendChild(btn);
        }
        chatArray.push(temp);
    }

    chatArray[0].innerHTML = "What do you want to know?";
    chatArray[1].firstChild.innerHTML =  "Publications";
    chatArray[1].firstChild.addEventListener("click", function(){
        addUserChat(this);
        addChatReply(addPublicationList());
    });
    chatArray[2].firstChild.innerHTML = "Projects";
    chatArray[2].firstChild.addEventListener("click", function(){
        addUserChat(this);
        addChatReply(addProjectList());
    });
    chatArray[3].firstChild.innerHTML = "Contact";
    chatArray[3].firstChild.addEventListener("click", function(){
        addUserChat(this);
        addChatReply(addContact());
    });

    chatArray.forEach((item, i) => {
        chatContent.appendChild(item);
    });

    return chatContent;
}


function addProjectList(){
    var chatContent = document.createElement("div");
    chatContent.classList.add("chat-content", "chat-content-left");
    var projListGroup = document.createElement("div");
    projListGroup.className = "list-group";

    var projListItems = [];
    var i;

    for(i = 0; i<9; i++){
      let projItem = document.createElement("a");
      projItem.classList.add("list-group-item", "list-group-item-action");
      projItem.setAttribute("data-toggle", "modal");
      projItem.setAttribute("data-target", "#projInfoModal");
      projItem.addEventListener("click", function(){setModalText(this)});

      let projItemTitle = document.createElement("span");
      projItem.appendChild(projItemTitle);
      projListItems.push(projItem);
    }

    projListItems[0].firstChild.innerHTML = "Vibrotactile flow on the head: Initial study";
    projListItems[1].firstChild.innerHTML = "Color representation by haptics";
    projListItems[2].firstChild.innerHTML = "Using vibration as a navigator in VR";
    projListItems[3].firstChild.innerHTML = "Haptic effect transmission system";
    projListItems[4].firstChild.innerHTML = "Using drone as a haptic device";
    projListItems[5].firstChild.innerHTML = "AR campus guide app";
    projListItems[6].firstChild.innerHTML = "A system for exchange contact via handshaking";
    projListItems[7].firstChild.innerHTML = "Campus Network configration simulation";
    projListItems[8].firstChild.innerHTML = "Music file player";

    projListItems.forEach((item, i) => {
        projListGroup.appendChild(item);
    });

    chatContent.appendChild(projListGroup);

    return chatContent;

}

function addContact(){
    var chatContent = document.createElement("div");
    chatContent.classList.add("chat-content", "chat-content-left");

    var cardWrap = document.createElement("div");
    cardWrap.className = "card";
    var logo = makeLogo("50vw");
    frownEmotion(logo);
    var cardBody = document.createElement("div");
    cardBody.className = "card-body";
    var cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerHTML = `If you have any question, feel free to ask!<br>(but not spam plz...)<br>mj.kim1102@khu.ac.kr`;
    cardBody.appendChild(cardText);
    cardWrap.appendChild(logo);
    cardWrap.appendChild(cardBody);
    chatContent.appendChild(cardWrap);

    return chatContent;
}

function addTimestamp(alignment){
    var time = new Date();
    var chatTimestamp = document.createElement("div");
    chatTimestamp.classList.add("chat-timestamp", alignment);
    var timeStr;
    timeStr = (time.getHours() > 12 ? time.getHours()-12 : time.getHours()) + ":" + (time.getMinutes() < 10 ? "0"+time.getMinutes() : time.getMinutes()) + (time.getHours() > 12 ? " PM" : " AM");
    chatTimestamp.innerHTML = timeStr;

    return chatTimestamp;
  }

function addPublicationList(){
    var chatContent = document.createElement("div");
    chatContent.classList.add("chat-content", "chat-content-left");

    chatContent.innerHTML = `<span>1. Muhammad Abdullah, <strong>Minji Kim</strong>, Waseem Hassan, Yoshihiro Kuroda and Seokhee Jeon, ”HapticDrone: An Encountered-Type Kinesthetic Haptic Interface with Controllable Force Feedback: Initial Example for 1D Haptic Feedback.” Adjunct Publication of the 30th Annual ACM Symposium on User Interface Software and Technology. ACM, 2017.</span><br><br>
                <span>2. <strong>Minji Kim</strong>, Hwangil Kim, Hyenhee Jung, Seokhee Jeon, ”Colour to Haptics: Color Representation by Vibration”, Journal of Advanced Technology Research, Vol. 2, No. 1, June. 2017.</span><br><br>
                <span>3. Muhammad Abdullah, <strong>Minji Kim</strong>, Waseem Hassan, Yoshihiro Kuroda and Seokhee Jeon, ”HapticDrone:An encountered-type kinesthetic haptic interface with controllable force feedback: Example of stiffness and weight rendering”, In Pro-ceedings of Haptics Symposium, 2018.</span><br><br>
                <span>4. <strong>Minji Kim</strong>, Seokhee Jeon, ”Directional Information Perception on Head - Using Vibrotactile Phantom Sensation: Initial Study”, Korean Institute of Information Scientists and Engineers, Korea Computer Congress(KCC), 2018.</span><br><br>
                <span>5. <strong>Minji Kim</strong>, Arsen Abdulali and Seckhee Jeon, ”Vibrotactile Flow Perception on Backside of the Head: InitialStudy”, IEEE Games, Entertainment and Media Conference(GEM), 2018.</span>`;

    return chatContent;
}

function addChatReply(content){
  setTimeout(() => { console.log("timeout"); }, 500);
  var chatSet = document.createElement("div");
  chatSet.classList.add("row", "chat-set");

  var logoArea = document.createElement("div");
  logoArea.classList.add("col-2");

  logoArea.appendChild(makeLogo());
  chatSet.appendChild(logoArea);

  var chatArea = document.createElement("div");
  chatArea.classList.add("col-10");
  var userNameRow = createSingleRow();
  var userName = document.createElement("p");
  userName.classList.add("brand-name");
  userName.innerHTML = "Merrill Jade Kim";

  userNameRow.firstChild.appendChild(userName);

  var chatContentRow = createSingleRow();

  chatContentRow.firstChild.appendChild(content);
  chatContentRow.firstChild.appendChild(addTimestamp("left"));

  var chatMenuRow = createSingleRow();

  chatMenuRow.firstChild.appendChild(addDefaultMenu());
  chatMenuRow.firstChild.appendChild(addTimestamp("left"));

  chatArea.appendChild(userNameRow);
  chatArea.appendChild(chatContentRow);
  chatArea.appendChild(chatMenuRow);

  chatSet.appendChild(chatArea);

  var container = document.querySelector(".chat-container");
  container.appendChild(chatSet);

  scrollToBottom();
}

function gotoMenuPage(){
  var menuPage = document.querySelector(".menu-wrapper");
  menuPage.style.visibility = "visible";

  var projPage = document.querySelector(".project-wrapper");
  projPage.style.visibility = "hidden";

  var pubPage = document.querySelector(".publication-wrapper");
  pubPage.style.visibility = "hidden";

  var pageTitle = document.querySelector(".head-title");

  pageTitle.querySelector("i").style.visibility = "hidden";
  pageTitle.querySelector("span").innerHTML = "Merrill Jade Kim";

}

function switchPage(caller){
  var pageTitle = document.querySelector(".head-title");
  var menuName = caller.querySelector("span").innerHTML;
  var menuPage = document.querySelector(".menu-wrapper");
  var visiblePage;
  if(menuName === "Projects"){
      visiblePage = document.querySelector(".project-wrapper");
  }else if(menuName === "Publications"){
      visiblePage = document.querySelector(".publication-wrapper");
  }else{
//        visiblePage = document.querySelector(".contact-wrapper");
  }

  pageTitle.querySelector("i").style.visibility = "visible";
  pageTitle.querySelector("span").innerHTML = menuName;

  visiblePage.style.visibility = "visible";
  menuPage.style.visibility = "hidden";
}

function setModalText(caller){
  var modalTextarea = document.querySelector(".modal-body");
  var modalTitle = document.getElementById("projInfoModalLabel");
  var newModalTitle = caller.querySelector("span").innerHTML;

  modalTitle.innerHTML = newModalTitle;
  console.log(modalTitle.innerHTML);


  var str =
  { arCampusNav: `<p>* 이 프로그램은 자유 주제의 프로젝트를 진행하는 과목인 '졸업 논문'수업에서 MJ가 작성한 내용입니다.</p>
              <p>한창 포켓몬 GO의 성공으로 인하여 AR, VR에 대한 관심이 증가하던 시기였습니다. 뭔가를 만들게 된다면 꼭 사용해 보고 싶은 기술이 있었는데, 그게 바로 포켓몬 고에서도 사용된 AR이었죠. 당시 쉽게 접근 가능하면서도 안드로이드에서 적용 가능한 AR API는 크게 두 가지 정도 있었던 것으로 기억하는데, 그 중 제가 사용한 것은 MIXARE 라는 Open API였습니다. </p>
              <p>MIXARE는 목표 위치와 사용자의 휴대폰이 나타내는 경도와 위도를 이용해 거리와 각도 등을 계산하여, 스마트폰의 카메라 화면이 목표 위치를 비추었을 때 특정 그림이나 문구가 나타나도록 하는 기능을 갖고 있었습니다. 이걸 어디에 적용할 지 고민하다가, '길 안내'에 초점을 맞추기로 했습니다. 제 기준으로 가장 작으면서도 헤메이기 쉬운 곳, 바로 교내 캠퍼스였죠.</p>
              <p>스마트폰에 위도와 경도를 구해주는 어플리케이션을 하나 설치하고, 종이에 숫자들을 적으면서 학교 곳곳을 누비던 기억이 생생하네요. 발로 뛰면서 몸으로 헤메고, 도저히 이해가 안 가는 코드에 머리로 헤메면서 어째저째 완성도는 낮았지만 뭔가 하긴 했습니다.</p>
              <p>이 프로젝트를 통해 깨달은 점 중 하나는 AR 기술 자체에 대한 것보다는 '데이터의 중요성'이지 않았나 싶습니다. 입력 데이터 선정, RAW 데이터의 수집과 가공, 사용에 걸맞는 처리 방식 등의 내용 말이죠.</p>
              <p>두 발로 걸을 수 있는 범위라는 건 위도, 경도 기준으로 큰 변경 요소가 없다 보니 즉각적으로 데이터가 변화하지 않더라구요. 우리는 건물 앞이 다르고 옆이 다르고 뒤가 다른데, 한 건물에 대한 위치값을 콕 찍어서 '하나의 값'으로만 줘야 하니까 화면에 표시되는 모습이 제가 생각하는 것과는 많이 달랐죠.</p>
              <p>또 GPS를 기준으로 삼다 보니까, 건물 안에서는 사용할 수 없다는 점도 좀 아쉬웠습니다. 건물 몇 개나 된다고, 사용자에게 줄 수 있는 정보가 너무 한정적이었거든요. </p>
              <p>마지막으로 'elevation'의 중요성을 깨달았지요. 위도와 경도는 어떻게든 어플리케이션을 통해 구해졌지만, '고도'만은 어떻게 안 되더라구요. 화면에 나타낸 건물 안내 표시가 땅 밑으로 꺼지거나 공중으로 솟아오르는 등, 널뛰는 고도값을 수정할 때 결과를 확인하기 위해 밖으로 뛰쳐 나가야만 하는 게 너무 슬펐던 기억이 있네요.</p>
              <p>두 번째로 이 프로젝트에서 깨달은 건 '오픈 소스를 분석하는 능력'이었습니다. 제가 다른 사람의 코드를 보는 능력이 부족해서 분석이 오래 걸렸던 것도 이 프로젝트의 완성도를 떨어트리는 요인 중 하나였던 것 같아요.</p>
              <p>사실 구동 원리 자체는 복잡하지 않아서 금방 이해했는데, 이 소스를 제가 원하는 대로 가공하는 게 굉장히 어렵게 느껴졌습니다. 저랑은 생각하는 방식 자체가 너무 달라서 어디서부터 손을 봐야 할지 감이 오지 않더라고요.</p>
              <p>이렇게 저렇게 아쉬운 마무리를 짓게 된 프로젝트였습니다. 지금 이 주제가 다시 던져진다면, 그 때엔 제대로 지도 API를 사용하면서 직접 AR 부분을 구현하는 게 더 깔끔하지 않을까 생각해 봅니다.</p>`,
    simulatedCampusNet: `<p>* 이 프로그램은 라우팅 기법에 대해 주로 다루는 수업인 '네트워크 분석 및 설계'수업에서 MJ가 작성한 내용입니다.</p>
              <p>제가 처음 컴퓨터공학 전공을 선택하게 된 계기는 IP 주소 계산이 너무 쉬웠기 때문입니다. (?!) 제대로 공부하기 전, 인터넷에서 카더라 하는 몇 개의 잡지식을 봤는데 저는 너무 쉽게 이해가 되어서 재미있더라고요. 그 때 당시 제 꿈은 무려 화이트 해커였습니다. 아마 지금도 많은 고등학생들이 꿈꾸고 있지 않을까 생각합니다.</p>
              <p>이 수업에서는 라우터 간의 대화법인 라우팅 프로토콜에 대해 주로 배웠고, 저는 꽤 재미있게 했던 것으로 기억합니다(어쩐지 배운 내용 자체는 많이 생각나지 않습니다). 배운 라우팅 기법으로 교내 네트워크 구성을 하청 회사가 된 것처럼 제안서와 시뮬레이션을 제출하는 프로젝트였는데, 저는 인터넷으로 실제 업체들의 제안서와 구성 형태도 구경하면서 꽤 진지하게 했던 기억이 납니다.</p>
              <p>시뮬레이션 구성에는 Packet Tracer라는 프로그램을 사용했습니다. 결과는 점수가 말해줬습니다. (^^)</p>`,
    colorRepHaptic: `<p>* 이 논문 및 아이디어는 MJ와 동료들이 설계한 내용입니다.</p>
              <p>햅틱스 연구실에 있을 당시 재미있게 생각한 주제 중 하나입니다. 교수님께서 이 주제를 학생에게 주시는 것을 두 번 목격했는데, 우연찮게 제가 이 학생들과 다 인연이 있어(ㅎㅎ) 결국 제가 두 번 다 도움을 주다가, 이 내용을 아는 게 저뿐이라 이래저래 논문까지 나오게 된 주제입니다.</p>
              <p>첫 학생은 저와 함께 흑백 이미지에서 각 픽셀의 값에 따라 서로 다른 무게감을 느끼도록 하는 프로그램을 작성했습니다. 햅틱 장비 중 하나인 Falcon을 인터랙션에 사용하는 PC 프로그램이었지요. Falcon을 사용하기  위해  CHAI3D 오픈소스를 사용했습니다. 문서화도 아주 잘 되어있고 소스도 아주 깔끔한 친절 그 자체인 오픈소스입니다. (이걸 쓴 후에야 MIXARE가 뭔가 이상했었다는...생각을...크흠) Falcon의 포인터를 이미지 면 위에서 움직이면, 이미지의 진하고 연한 색감에 따라서 때론 울퉁불퉁함을, 때론 부드러움을 느낄 수 있도록 프로그램이 구성되었습니다.</p>
              <p>두 번째 학생들은 흑백에서 더 나아가 색상을 표현하는 것에 대해 함께 고민했습니다. 이를 위해 HSI 컬러모델로 색을 분리하고, 기존 흑백 이미지에서의 기능은 유지하면서 또 다른 방식을 더해 색을 표현하고자 시도했지요. </p>
              <p>처음엔 색상을 그냥 단순히 빛의 파동값을 이용해 표현하는 방법을 고려했지만, 그렇게 하면 명도와 다를 바 없게 되어서 난해하다는 쪽으로 의견이 모아져 포기했습니다. 후에 조금 더 복잡하게 생각해서 얻어낸 아이디어가, 색상에 사람들이 가진 감정을 촉감으로 표현하는 것은 어떨까 하는 것이었습니다. 다행히 색상-감정 간의 관계에 대해 고민한 연구 사례를 몇 개 찾아낼 수 있었고, 감정-주파수 간의 관계에 대한 연구 또한 찾을 수 있었습니다. 남은 건 셋을 연결해 주는 것 뿐이었죠.</p>
              <p>사실 말도 안 되게 보이긴 합니다. 촉감~주파수~감정~색상 이렇게 멀리멀리 와 버렸으니 A는 B이고 B는 C이니 C는 D이며 그러니까 D는 A이다...이런 말도 안되는 수준의 가정의 나열이었으니까요. 게다가 각 관계에 대해 진행된 연구의 결과물들도 딱 이렇다 할 만한 연결고리를 찾은 게 아니었습니다. 실제로 저희도 에라 모르겠다, 이건 말도 안돼 (하지만 우린 시간도 없고 더는 떠오르는 것도 없으니 안 될꺼야) 하면서 진행했죠.</p>
              <p>그런데 의외로...실험 결과가 저희의 예상만큼 최악은 아니었습니다. (!) 사실 왜 결과가 좋은지 이걸 좀 더 명확히 검증하면 진짜 논문이 될 테지만, 저흰 이쯤에서 마무리 지었습니다. 다시 생각해도 주제도, 결과도 재미있었던 것 같네요.</p>`,
    droneHaptic: `<p>* 이 내용의 저작권은 MJ와 동료들에게 있으며, MJ는 이 논문의 VR부분을 작성했습니다.</p>
              <p>이 아이디어는 간략하게 '드론을 햅틱 장비로 사용하자' 입니다. 드론에게 고정 위치의 포지셔닝을 요청하고, 드론 위를 누르면 드론이 원래 자리로 돌아가려고 저항합니다. 이 저항의 크기는 물건의 단단한 정도에 따라 달라지도록 구성해야겠죠. 반대로 드론 위에 달린 손잡이를 당기면, 다시 드론은 원래 자리로 돌아가려고 저항합니다. 이 저항의 크기는 물건의 무게에 따라 달라지도록 구성되어 있죠.</p>
              <p>저는 코어 아이디어에 참여했다기 보다, 이 비디오 내에서의 'VR 연동'을 위한 코딩 파트에 참여했습니다. 드론의 위치를 실시간으로 OptiTrack을 통해 전달받고, 그 위치값에 따라 VR 물체가 이동하도록 프로그램을 구성하였습니다. 반대로 VR물체의 움직임에 따라 드론이 움직여야 하는 정도에 대한 정보를 전달하기도 했죠.</p>
              <p>다시 생각해도 Calibration 과정이 이가 갈리네요. 코딩보다 더 오래 걸렸던 것 같습니다. 오히려 Calibration을 자동으로 할 수 있는 알고리즘을 찾는 방법을 알아내는 사람이 떼돈을 벌지 않을까 생각합니다.</p>`,
    handshaking: `<p>* 이 아이디어는 '인간-컴퓨터 상호작용'수업에서 MJ와 동료들이 생각해 낸 내용입니다.</p>
              <p>수업 내용이 '기존 컴퓨터와의 소통 방식인 키보드/마우스를 부셔버리자!' 였기 때문에, 새로운 인터랙션 방식을 고민하던 중 생각해 낸 방법입니다. 현실적으로는 많은 문제점이 있지만, 일단은 leap motion 장비를 통해 악수를 인식하여 번호를 교환하도록 하면 어떨까 정도의 구상으로 이루어졌습니다.</p>
              <p>악수를 판단하는 방식도 아주 단순하게 구현했습니다. leap motion으로부터 두 손바닥의 위치를 구해서, 둘이 일정 이상 가까워 졌을 때, 그리고 두 손바닥이 마주 보고 있을 때 악수로 인식하도록 구현했는데, 도대체 손가락을 얼마나 무시하려고 그랬었나 하는 생각이 드네요.</p>
              <p>완벽한 구현 자체보다는 시스템의 분석 방법 및 평가에 대해 더 깊이 있게 다룬 수업이었습니다. 시스템에 대한 시각을 다르게 가질 수 있어 굉장히 재미있었던 수업으로 기억합니다.</p>`,
    musicPlayer: `<p>* 이 프로그램은 '자료구조' 수업에서 MJ가 작성한 내용입니다.
              <p>옛날에 못난 버릇이 하나 있었는데, 제 스스로 생각하기에 제가 할 수 있는 것보다 완성도가 낮으면 부끄러워서  발표를 안 가곤 했습니다. 왜 이렇게 밖에 못 했냐는 말을 들으면 참을 수 없을 것 같아서 미리 포기해 버린거죠. 주어진 짧은 기간과 본인의 능력 안에서, 누구나 다 듣는 말이고 들을 수 있는 말이었는데도 말입니다. 지금은...내 능력이 여기까지밖에 안 된다는 걸 스스로 납득할 만큼 기간 안에 스스로를 갈아 붙입니다. (ㅎㅎ) 나쁘게 말하면 질척대는 것인데, 옛날이랑 비교하면 꽤 끈기 있는 방향으로 극복하지 않았나 생각합니다. 건강이 피폐해 지는 건 trade-off 겠지요.</p>
              <p>절 이렇게 극복하게 만들어 준 수업 중에 하나가 자료구조입니다. 단순한 기존 뮤직플레이어를 '기능적 측면' 대신 '자료구조적 측면' 으로 생각해서 그 동안 배운 자료구조를 전부 때려넣어 프로그램을 만드는 게 수업 목표였는데, 괜히 이걸 비주얼한 프로그램으로 만들고 싶은 욕심에 일을 키웠습니다.</p>
              <p>지금이야 어렵지 않게 만든다지만 그 때엔 비주얼 프로그래밍에 대해 아무것도 모를 때라 꽤나 많은 시간을 써서 만들었던 기억이 있네요.</p>`,
    rendHapEffect: `<p>* 이 아이디어는 'Advanced HCI'수업에서 MJ와 동료가 생각한 내용입니다.
              <p>촉각전달 시스템은 휴대폰으로 사용자 A가 어떤 물체의 표면 사진을 찍어 보내면, 사용자 B가 PC와 Falcon을 통해 사진에 있는 물체의 촉감을 느낄 수 있도록 구성한 시스템입니다. 실시간으로 물체의 표면 사진이 햅틱 이팩트로 재구성된 것은 아니고, 조금 더 분업화된 내용으로 구성되었습니다. </p>
              <p>먼저 사용자 A가 어플리케이션을 통해 보낸 사진이 딥러닝 서버에서 분석되어 어떤 물체인지를 가려냅니다. 이렇게 알아낸 물체 정보를 햅틱 서버에 보내면, 햅틱 서버가 미리 가지고 있던 물체와 햅틱 이펙트간의 매핑 정보를 PC에게 전달하고, PC에서 해당 햅틱 이팩트가 Falcon을 통해 렌더링되는 방식을 사용하였습니다.</p>
              <p>딥러닝 서버와 자바 서버, C 서버가 통신을 위해 사용되었고, 사진 전송 전문 어플리케이션과 PC에서의 C++ 프로그램까지 구성되었네요. 저는 햅틱용 C 서버와 자바 서버, PC에서의 C++ 프로그램을 담당하였습니다.</p>
              <p>이 프로젝트를 함께 했던 팀원 분이 할 수 있는 일과 제가 할 수 있는 일을 결합하여 생각해 낸 아이디어이다 보니, 각자 맡은 역할이 확실하고 내가 모르는 파트까지 완성되어 큰 게 만들어지는 걸 보는 맛에 더더 재밌게 했던 기억이 나네요. 고마운 분이라 요즘도 가끔 연락하곤 합니다.</p>`,
    vibFlowHead: `<p>* 이 연구는 MJ가 석사 졸업 논문 및 IEEE Games, Entertainments & Media Conference에서 발표한 내용입니다.</p>
              <p>할 말이 참 많은 이야기라 어디서부터 시작해야 할 지 모르겠네요. 전혀 완성되지 않은 미흡한 연구이기도 합니다. 이야기 할 게 많아지니 오히려 무슨 말부터 적어야 할 지 모르겠네요.</p>
              <p>일단 이 연구는 기존 '진동 흐름'이 무엇인지에서 명료화하는 것에서부터 출발합니다. 그리고 이 '진동 흐름'이 HMD 위에서 발생했을 때 과연 사람들이 불쾌해하는지, 진동이 흐름으로 느껴지는지, 어느 부위에서 더 효과적인 진동 흐름을 느끼는지 등에 대해 실험한 아주 기초적인 연구입니다. HMD 위에 패턴을 가진 진동 한번 올리기가 이렇게 힘들 줄 처음엔 몰랐죠.</p>
              <p>이 연구를 위해서 실험 및 결과를 저장하기 위한 Qt C++ 프로그램이 작성되었고, 프로그램 내부에 렌더링 알고리즘이 들어 있습니다. 연구 결과에 대한 수치적 부분은 Matlab을 통하여 분석되었습니다.</p>
              <p>코딩적 측면에서는, 사용한 장비인 DAQ가 제공하는 드라이버가 C로 작성된 정적 라이브러리만을 제공하였기에, 사용성을 위해서 Wrapper 클래스로 감싼 C++ DLL로 변형하는 과정이 제일 고생스러웠던 걸로 기억합니다. 인터넷에 있는 방법을 이것저것 따라해도 잘 되지 않아서 며칠을 이거에만 매달렸던 기억이 있네요. 낯선 Matlab은 오히려 저에게만 낯선 툴이었던지라, 다른 사람들이 해 본 좋은 자료가 아주 많았습니다.</p>
              <p>연구적 측면에서는, 가정도 결과도 중간 검증 과정도 아쉬움만 남았다고 밖에는 말할 수가 없을 것 같습니다. 제가 무얼 모르는지, 어떤 문제가 풀린 문제인지 확신이 없으니 계속 두루뭉술한 가정밖에 만들지 못하고, 그렇게 만들어진 가정에 대한 검증도 미비할 수 밖에 없었다고 생각합니다. 제일 아쉬웠던 건 대학원 생활 속에서 이런 과정의 연구를 딱 한 번 밖에 겪어 보지 못했다는 점입니다. 다시 한다고 더 잘 할 것 같진 않지만, 그 때 더 여러 번 도전하고 실패해서 좀 더 나은 방법을 알았다면 어땠을까 하는 생각을 가끔 합니다.</p>
              <p>저를 시원섭섭하게 했던 연구이기도 합니다. 계속 궁금해하고 진지하게 보면 좋은 주제인 것 같으면서도(저도 나중엔 진짜 궁금해서 실험했습니다), 한편으로는 제가 선택한 주제가 아니어서 아쉬움도 남았던 연구입니다.</p>`,
    vrMazeNavigator: `<p>* 이 프로그램은 실시간 모바일 클라우드 연구센터가 참여한 '2017 ITRC 포럼'에서 MJ가 발표한 내용입니다.</p>
              <p>미로 안에서의 진동 네비게이션 프로그램은 보이지 않는 벽으로 구성된 미로를 HMD에 달린 진동소자의 안내만으로 탈출하는 일종의 게임입니다. 별 대단한 것은 아니지만, 실험 측면에서 볼 때에는 여전히 가치가 있습니다. 저는 아직도 언젠가 HMD만 써도 매트릭스 같은 가상세계에 뿅 떨어지는 날이 오지 않을까 상상하곤 하는데, 이 가상세계에 대한 집중을 가장 방해하는 요소가 촉각이기 때문입니다.</p>
              <p>프로그램의 구성 자체는 크게 복잡하지 않습니다만, 유니티 VR 어플리케이션 및 유니티 어플리케이션과 아두이노와의 블루투스 통신 등에 대한 내용을 처음 만들어 본 프로그램인지라 꽤나 고생했던 기억이 있습니다.</p>
              <p>게다가 이 때 처음으로 마감에 쫓기며 완성도 있는 프로그램을 구현해야 한다는 책임감과 압박감에 시달렸습니다. 학과 수업이랑은 차원이 다르게 많은 사람들이 방문하는 행사였기에 일정 수준 이상의 완성도를 보여야만 했고, 직접 데모를 시연해야 했기에 부담감이 컸죠.</p>
              <p>아마도 이 때를 기점으로 목표를 완수하는 데 대한 뿌듯함과 희열을 느끼지 않았나 생각되네요. 거의 정신력으로 만든 프로그램입니다.</p>`,
    selfIntroWeb: `<p>대학원 졸업 후, 뭘 해야 할지 몰라 꽤 오랫동안 방황했습니다. 솔직히 프로그래밍도 그렇고 아무것도 그냥 하고 싶지 않았어요. 제 자신을 너무 소모적으로 사용해서 쓸 수 있는 기력이 남아있지 않은 것만 같았거든요. 가슴 뛰는 일도 없고, 행복하지도 않고...그냥 사람이 다 이렇게 사는건가? 먹고싶은 것도, 하고 싶은 것도 없이 이렇게 사나 싶었어요.</p>
              <p>그러다 우연찮게 조그마한 웹페이지 개발 외주를 하게 되었습니다. 사실 저는 어렸을때 조금 해 본 경험이 있어서 웹을 약간 무시하는 경향이 있었어요. 옛날에 많은 비전공자들이 웹으로 뛰어들었고, 저렴한(?) 인건비로 일하시는 분들도 워낙 많았어서요. 자기 몸값 못 받는다고 생각했는지도, 혹은 쉽고 단순하다고 여겼는지도 모르죠. 적어도 저는 HTML정도는 알았었기에, 웹이 꽤 단순하다고 생각했었습니다...네 큰 코 다쳤습니다. 해보지 않은 건 쉽다고 말하면 안 되는 것 같아요. 항상.</p>
              <p>예쁘게, 그리고 기능적으로 완전하게 꾸미는 것이 마냥 쉽지만은 않더라구요. 제가 C/C++이나 JAVA에 너무 익숙해서...javascript도 잘 모르겠고...css는 과연 이게 언어인가 싶고...기한 안에 도저히 끝낼 수가 없어서 그 유명한 Wordpress를 사용했습니다. 약간...끝나고 허무했던 것 같아요. 만드려고 했던 공부가 아까워서 허접한 포폴페이지를 열어놓고, 잠깐 웹을 잊었었어요.</p>
              <p>방황하다가 구직을 마음먹었을 때, 저도 모르게 프론트/백엔드를 유심히 보고 있더라고요. 요즘 웹으로 가능한 서비스가 워낙 다양하고 웹시장이 커져서, 오히려 어플 개발 시장보다 웹 개발 시장이 더 커진 것 같았습니다. 웹에 사용되는 언어의 발전도 웹 시장이 커지는 것에 크게 기여했고요. 저는 자바스크립트로 서버까지 만들 수 있는줄은 몰랐어요...</p>
              <p>무엇보다 C/C++이 거의 주였던 저에게는, 정말 결과물이 바로바로 눈에 보이는 게 너무 매력적이었습니다. 그렇게 포트폴리오를 만들기로 결정하고 개인적으로 시작한 프로젝트가 '자기소개서 쓰는 데 실질적인 도움을 주는 무료 웹 서비스를 만들어 보자!'였습니다.</p>
              <p>아직 준비중인지라 프로젝트 자체에 대한 설명보다는 왜 시작했는지에 대한 이야기가 길어졌네요. 아무튼 배워야 할 것들도 정말 많고, 요즘 다시 프로그래밍이 재밌습니다! 삶의 의욕이 활활 솟네요.</p>`
  };

  if(newModalTitle.search("flow") !== -1){
      modalTextarea.innerHTML = str.vibFlowHead;
  }else if(newModalTitle.search("Color") !== -1){
      modalTextarea.innerHTML = str.colorRepHaptic;
  }else if(newModalTitle.search("Exchange") !== -1){
      modalTextarea.innerHTML = str.handshaking;
  }else if(newModalTitle.search("transmission") !== -1){
      modalTextarea.innerHTML = str.rendHapEffect;
  }else if(newModalTitle.search("drone") !== -1){
      modalTextarea.innerHTML = str.droneHaptic;
  }else if(newModalTitle.search("AR") !== -1){
      modalTextarea.innerHTML = str.arCampusNav;
  }else if(newModalTitle.search("configure") !== -1){
      modalTextarea.innerHTML = str.simulatedCampusNet;
  }else if(newModalTitle.search("Music") !== -1){
      modalTextarea.innerHTML = str.musicPlayer;
  }else if(newModalTitle.search("Self") !== -1){
      modalTextarea.innerHTML = str.selfIntroWeb;
  }else{
      modalTextarea.innerHTML = str.vrMazeNavigator;
  }
}

function createLantern(){
  var lanternContainer = document.querySelector(".lantern-container");
  var i;
  for(i = 0; i<(Math.floor(screen.width/160)*4); i++){
    let lantern = document.createElement("div");
    let size = Math.floor(Math.random()*10)+1;
    lantern.classList.add(`lanternX${size}`, "lantern");
    lantern.style.left = `${Math.floor(Math.random()*screen.width)}px`;
    let lanternImg = document.createElement("img");
    lanternImg.setAttribute("src", "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3522775/LanternsLarge.png");
    lanternImg.style.animation = `lanternY ${Math.floor(Math.random()*3)+3}s linear ${Math.floor(Math.random()*13)+12}s infinite`;
    lanternImg.style.width = `${Math.floor(Math.random()*37)+36}px`;
    lanternImg.style.zIndex = `${Math.floor(Math.random()*10)+10}px`;

    lantern.appendChild(lanternImg);
    lanternContainer.appendChild(lantern);
  }
}
function spreadStar(){
  var starContainer = document.querySelector(".stars-container");
  var i;
  for(i = 0; i<(Math.floor(screen.width/160)*25); i++){
    let star = document.createElement("span");
    star.classList.add("star");
    switch(i%3){
      case 0:
        star.classList.add("star-small");
        star.style.top = `${Math.floor(Math.random()*(screen.height/4))+(screen.height*0.21)}px`;
        break;
      case 1:
        star.classList.add("star-middle");
        star.style.top = `${Math.floor(Math.random()*(screen.height/2))+(screen.height*0.14)}px`;
        break;
      case 2:
        star.classList.add("star-large");
        star.style.top = `${Math.floor(Math.random()*(screen.height/2))+(screen.height*0.06)}px`;
    }

    star.style.left = `${Math.floor(Math.random()*screen.width)}px`;
    console.log(`${star.style.top}, ${star.style.left}`);

    starContainer.appendChild(star);
  }
}
