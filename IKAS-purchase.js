var Ids =  "{URUNIDLERI}".split(",")  ;
var Prices = "{TIRNAKLIURUNFIYATLARI}".split(",").map(function(el){return +el;}) ;
var Quantity = "{TIRNAKLIURUNADETLERI}".split(",").map(function(el){return +el;})  ;
var StokCode = " {TIRNAKLISTOKKODLARI} ".split(",") ;

var products = [];

for (var i = 0; i < Ids.length; i++) {
    products.push({
        'item_id': Ids[i],
        'price': Prices[i],
        'quantity': Quantity[i],
      	'stok_code' : StokCode[i],
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
      'currency': "TRY",
      'items': {
		'item_id': "{URUNIDLERI},
        'price': "{URUNFIYATLARI}",
        'quantity': "{URUNADETLERI}",
      	'stok_code' : " {STOKKODLARI} ",
	  }products,
      'google_business_vertical': "retail" // Google Ads parametresi, değişmez.
    }
});