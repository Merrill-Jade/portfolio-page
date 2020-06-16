function frownEmotion(val){
  var leftEye = val.querySelector(".left-eye");
  var rightEye = val.querySelector(".right-eye");

  leftEye.classList.remove("circle");
  leftEye.classList.add("two-lines", "left");

  rightEye.classList.remove("circle");
  rightEye.classList.add("two-lines", "right");
}

function normalEmotion(val){
  var leftEye = val.querySelector(".left-eye");
  var rightEye = val.querySelector(".right-eye");

  leftEye.classList.remove("left", "two-lines");
  rightEye.classList.remove("right", "two-lines");
  leftEye.classList.add("circle");
  rightEye.classList.add("circle");
}
