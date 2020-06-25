if (window.location.href == 'https://www.mcardles.ie/'){
    c_carousels = document.getElementsByClassName("item-merchandising");
    var c_i2;
    for (c_i2 = 0; c_i2 < c_carousels.length; c_i2++) {
        c_carousels_price = c_carousels[c_i2].getElementsByClassName("price-label");
        var c_i;
        for (c_i = 0; c_i < c_carousels_price.length; c_i++) {
            c_single_price = c_carousels_price[c_i].getAttribute("data-value");
            c_carousels_price[c_i].innerHTML =  "€" + (c_carousels_price[c_i].getAttribute("data-value") * 1.23).toFixed(2);
        }
    }

    c_static_merch = document.getElementsByClassName("merchandising-content-static");
    var c_i2;
    for (c_i2 = 0; c_i2 < c_static_merch.length; c_i2++) {
        c_static_prices = c_static_merch[c_i2].getElementsByClassName("merchandising-content-static-price");
        var c_i;
        for (c_i = 0; c_i < c_static_prices.length; c_i++) {
            c_static_price = c_static_prices[c_i].getAttribute("data-value");
            c_static_new = ((c_static_price * 1.23).toFixed(2)).toString().split('.');
            c_static_prices[c_i].innerHTML =  '<span class="currency">€</span>' + '<span class="price">' + c_static_new[0] + '</span>' + '<span class="price-decimals">' + c_static_new[1] + '</span>'
        }
    }
}
