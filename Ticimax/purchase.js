// TICIMAX & purchase
// TICIMAX Altyapısında yapılacak tüm işlemlerde <script></script> tagleri yazılmalıdır.

//<script>
var Ids =  "{URUNIDLERI}".split(",")  ;
var Prices = "{TIRNAKLIURUNFIYATLARI}".split(",").map(function(el){return +el;}) ;
var Quantity = "{TIRNAKLIURUNADETLERI}".split(",").map(function(el){return +el;})  ;

var products = [];

for (var i = 0; i < Ids.length; i++) {
    products.push({
        'item_id': Ids[i],
        'price': Prices[i],
        'quantity': Quantity[i],
      });
}
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': "purchase",
    'ecommerce': {
      'transaction_id': "{SIPARISNO}", // Sipariş numarası  .
      'email':  "{EMAIL}",
      'siparis_id' : "{SIPARISID}",  
      'value': "{SIPARISTOPLAMTUTAR}",// Sipariş toplam tutarı  .
      'currency': "{PARABIRIMI}",
      'coupon' : "{HEDIYECEKI}",
      'items': products,
      'google_business_vertical': "retail" // Google Ads parametresi, değişmez.
    }
});
//</script>
