// TICIMAX & view_cart
// TICIMAX Altyapısında yapılacak tüm işlemlerde <script></script> tagleri yazılmalıdır.

//<script>
 
var Ids =  "{URUNIDLERI}". split(",")  ;
var Names = "{URUNADI}" . split(",");
var Prices = "{URUNFIYATLARIKDVDAHIL}". split(",").map(function(el){return +el;});
var Quantity = "{URUNADETLERI}". split(",").map(function(el){return +el;})  ;

var products = [];

for (var i = 0; i < Ids.length; i++) {
    products.push({
        'item_name': Names[i],
        'item_id': Ids[i],
        'price': Prices[i],
        'quantity': Quantity[i]
      });
}

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
      'event': "view_cart",
      'ecommerce': {
        'currency': "TRY",
        'value': "{TOPLAMTUTARKDVDAHIL}" , // Toplam tutar  .
        'items': products,
        'google_business_vertical': "retail" // Google Ads parametresi, değişmez.
      }
      
  });
//</script>