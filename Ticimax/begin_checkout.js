// TICIMAX & begin_checkout
// TICIMAX Altyapısında yapılacak tüm işlemlerde <script></script> tagleri yazılmalıdır.

//<script>
var Ids =  "{URUNIDLERI}".split(",")  ;
var Prices = "{URUNFIYATLARIKDVDAHIL}".split(",").map(function(el){return +el;});
var Quantity = "{URUNADETLERI}".split(",").map(function(el){return +el;})  ;


var products = [];

for (var i = 0; i < Ids.length; i++) {
    products.push({
        'item_id': Ids[i],
      	'item_name' : buSepet.Urunler[i].UrunAdi,
        'price': Prices[i],
        'quantity': Quantity[i],
      });
}

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    event: "begin_checkout",
    ecommerce: {
      items : products,
      currency: "TRY",
      value:"{TOPLAMTUTARKDVDAHIL}",// Toplam tutar  .
      google_business_vertical: "retail" // Google Ads parametresi, değişmez.
    }
});
//</script>
