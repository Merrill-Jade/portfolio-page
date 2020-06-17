function resizeHandler(){
  console.log("resize event occured; now window size: " + screen.width);
}

function init(){
    updateDate();

    var chatContent = document.createElement("div");
    chatContent.classList.add("chat-content", "chat-content-left", "row");

    chatContent.innerHTML = "Hi! Good to meet you!";

    addChatReply(chatContent);
//    document.querySelector(".chat-container").appendChild(addDefaultMenu());
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

function createModal(){
}
