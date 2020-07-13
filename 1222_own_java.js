if (window.location.href == 'https://www.mcardles.ie/'){
// SALE POPUP
// Time variables
var c_startDateTime = new Date("07-13-2020 00:00:01");
var c_endDateTime = new Date("07-26-2020 23:59:59");
var c_todayTime = new Date();

// Popup activation
function c_popupActivate() {
    var c_popup_elem = document.getElementsByClassName("c-popup")
    var i = 0
    var length = c_popup_elem.length
    while(i < length){
        c_current_margin = -200;
        setInterval(function () {
            if (c_current_margin != 10){
            c_current_margin++;
            if($(window).width() > 768){
              c_popup_elem[0].style.marginLeft = c_current_margin + 'px';
            } else {
              c_popup_elem[1].style.marginLeft = c_current_margin + 'px';
            }
          }
        },8)
        i++;
    }
}

// Popup closure
function c_popupHide() {
    var c_popup_elem = document.getElementsByClassName("c-popup");
    console.log("Popup Closed");
        var c_current_margin = 10;
        setInterval(
        function(){
            if (c_current_margin != -200) {
                c_current_margin--;
                if($(window).width() > 768){
                  c_popup_elem[0].style.marginLeft = c_current_margin + 'px';
                } else {
                  c_popup_elem[1].style.marginLeft = c_current_margin + 'px';
                }
            }
        },5)
}

// Popup timed activation
if (c_startDateTime < c_todayTime && c_todayTime < c_endDateTime) {
  console.log("Popup Active.");
  setTimeout(c_popupActivate, 4000);
} else {
  console.log("Popup not active.");
};
}
