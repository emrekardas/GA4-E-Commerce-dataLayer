var Ids =  "{URUNIDLERI}".split(",")  ;
var Prices = "{URUNFIYATLARIKDVDAHIL}".split(",").map(function(el){return +el;});
var Quantity = "{URUNADETLERI}".split(",").map(function(el){return +el;})  ;


var products = [];

for (var i = 0; i < Ids.length; i++) {
    products.push({
        'item_id': Ids[i],
        'price': Prices[i],
        'quantity': Quantity[i],
      	'item_name' : buSepet.Urunler[i].UrunAdi
      });
}

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': "begin_checkout",
    'ecommerce': {
      'currency': "TRY",
      'value':"{TOPLAMTUTARKDVDAHIL}",// Toplam tutar  .
      'google_business_vertical': "retail" // Google Ads parametresi, değişmez.
	  'items': {
		'item_id':  "{URUNIDLERI}",
        'price': "{URUNFIYATLARIKDVDAHIL}",
        'quantity': "{URUNADETLERI}",
      	'item_name' : buSepet.Urunler[i].UrunAdi
		},
    }
});