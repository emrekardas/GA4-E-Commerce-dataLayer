//<script>
var FBurunler = new Array();
var Prices = new Array();
var Ids = new Array();
var Names = new Array();
var Quantity = new Array();

[loop_product]
FBurunler.push("{productId}");
Prices.push("{productPrice}");
Ids.push("{productId}");
Names.push("{productName}");
Quantity.push("{productAmount}");
[/loop_product]

var products = [];

for (var i = 0; i < FBurunler.length; i++) {
    products.push({
        'item_name': Names[i],
        'item_id': Ids[i],
        'price': Prices[i],
        'quantity': Quantity[i]
      });

}

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': 'view_cart',
    'ecommerce' : {
        'transaction_id': '{orderId}',
        'currency': 'TRY',
        'value': '{total}',
        'google_business_vertical': "retail", // Google Ads parametresi, değişmez.
        'items': products
    }   
});
//</script>