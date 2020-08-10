// HOME DASH
if (window.location.href == 'https://www.mcardles.ie/'){
    var Custom_Cust_Name = EvoXLayer().user.name;
    var Custom_Cust_ID = EvoXLayer().user.user_id;
    var Custom_Acc_Details_link = "/customer/user/" + Custom_Cust_ID + "/edit";
    var Custom_Shopping_Lists = "/customer/quicklists";
    var Custom_Order_History = "/customer/orders";
    var Custom_Register = "/register";
    var Custom_Dash_Link = "/myaccount";
    if (Custom_Cust_ID == null){
        document.getElementById("Custom_Dash_Title").innerHTML = "Create Account";
        document.getElementById("FasterCheckout").innerHTML = '<span><i class="fa fa-shopping-cart" aria-hidden="true"></i>Faster checkout</span>';
        document.getElementById("ManageShoppingLists").innerHTML = '<span><i class="fa fa-list" aria-hidden="true"></i>Manage shopping lists</span>';
        document.getElementById("ViewOrderHistory").innerHTML = '<span><i class="fa fa-truck" aria-hidden="true"></i>View order history</span>';
        document.getElementById("AccountLoginCreate").innerHTML = '<a class="btn" href="' + Custom_Register + '">Create Account</a>';
        document.getElementById("AlreadyHavingAccount").innerHTML = '<a data-toggle="modal" href="#loginModal">Already have an account?</a>';
      }
      else {
        document.getElementById("Custom_Dash_Title").innerHTML = "Hello " + Custom_Cust_Name;
        document.getElementById("Custom_Acc_Logo_Icon").style.display = "none";
        document.getElementById("AlreadyHavingAccount").style.display = "none";
        document.getElementById("FasterCheckout").innerHTML = '<a href="'+ Custom_Acc_Details_link +'"><i class="fa fa-user" aria-hidden="true"></i>Edit account details</a>';
        document.getElementById("ManageShoppingLists").innerHTML = '<a href="' + Custom_Shopping_Lists + '"><i class="fa fa-list" aria-hidden="true"></i>Manage shopping lists</a>';
        document.getElementById("ViewOrderHistory").innerHTML = '<a href="' + Custom_Order_History + '"><i class="fa fa-truck" aria-hidden="true"></i>View order history</a>';
        document.getElementById("AccountLoginCreate").innerHTML = '<a class="btn" href="' + Custom_Dash_Link + '">My Account</a>';
      }
}

// Crayola search results page poster
//var pattern = /[?&]query=/;
//var URL = location.search;
//if(pattern.test(URL))
//{
//   if (getURLvar('query').toLowerCase() == "crayola") {
//    var parent = document.getElementById("htmlcontent_139480");
//    var img = document.createElement('img'); 
//    img.src = 'https://eu.evocdn.io/dealer/1222/content/media/My_Banners/CRAYOLASALEMOBILE.png';
//    img.width = 400
//    parent.appendChild(img);
//    }
//}


if (window.location.href == 'https://www.mcardles.ie/'){
// SALE POPUP
// Time variables
var c_startDateTime = new Date("07-13-2020 00:00:01");
var c_endDateTime = new Date("08-07-2020 23:59:59");
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

