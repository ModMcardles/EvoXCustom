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
if (getURLvar('query').toLowerCase() == "crayola") {
    var parent = document.getElementById("htmlcontent_139480");
    var img = document.createElement('img'); 
    img.src = 'https://eu.evocdn.io/dealer/1222/content/media/My_Banners/CRAYOLASALEMOBILE.png';
    img.width = 400
    parent.appendChild(img);
    }
