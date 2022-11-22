 //cHTML olarak GTM tarafına eklenmelidir. Trigger view_item olmalıdır.
 
 //<script>
  
  // Category için dizi
  
  var dizi = []
  
  for (var i = 1; i < document.querySelectorAll('[itemprop="itemListElement"]').length-1; i++) {
    dizi.push(document.querySelectorAll('[itemprop="itemListElement"]')[i].querySelector('[itemprop="name"]').innerText)
}
  
 
  
  
window.cart.remarketing.add = function () {
    var n = window.cart.get.model.cart.products.filter(function (n) {
        return n.variantId == window.cart.add.model.variantId
    })[0];
    window.dataLayer.push({
        event: "add_to_cart",
        ecommerce: {
            'value': window.cart.add.model.piece * Number(productDetailModel.productPriceKDVIncluded.toFixed(2)),
            'currency': 'TRY',
            'items': [{
                'item_id': productDetailModel.productId,
                'item_name': productDetailModel.productName,
                'item_brand': productDetailModel.brandName,
                'price': productDetailModel.productPriceStr,
                'quantity': window.cart.add.model.piece,
                'item_category': n.category,
            }]
        }
    });
};
//</script>
