 //cHTML olarak GTM tarafına eklenmelidir. Trigger view_item olmalıdır.
 
 // Category için dizi
  
  var dizi = []
  
  for (var i = 1; i < document.querySelectorAll('[itemprop="itemListElement"]').length-1; i++) {
    dizi.push(document.querySelectorAll('[itemprop="itemListElement"]')[i].querySelector('[itemprop="name"]').innerText)
}
  
  function sepeteEkle(n, t, i, r, u, f, e, o, s, h, c, l, a, v, y) {
    dataLayer.push({
        'event': 'add_to_cart',
        'value': window.cart.add.model.piece * Number(productDetailModel.productPriceStr),
        'currency': 'TRY',
        'items': [{
            'item_id': productDetailModel.productId,
            'item_name': productDetailModel.productName,
            'item_brand': productDetailModel.brandName,
            'price': productDetailModel.productPriceStr,
            'quantity': window.cart.add.model.piece,
            'item_category': n.category,
            'id': productDetailModel.productId,
            'google_business_vertical': "retail"
        }]
    })
}
  
  window.cart.remarketing.add = function () {
    var n = window.cart.get.model.cart.products.filter(function (n) {
        return n.variantId == window.cart.add.model.variantId
    })[0];
    typeof ga == "function" && (ga("ec:addProduct", {
        id: n.productId,
        name: n.productName,
        price: n.productCartPriceVatIncluded,
        quantity: n.piece
    }), window.dataLayer.push({
        event: "test",
        ecommerce: {
            add: {
                actionField: {
                    list: "Shopping cart"
                },
                products: [{
                    id: n.productId.toString(),
                    name: n.productName,
                    category: n.categori,
                    brand: n.brand,
                    quantity: window.cart.add.model.piece,
                    currency: n.currency,
                    price: n.productCartPriceVatIncluded
                }]
            }
        }
    }));
};
