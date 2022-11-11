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


// Eklenmesi gereken
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
      'event': "view_cart",
      'ecommerce': {
        'currency': "TRY",
        'value': "{TOPLAMTUTARKDVDAHIL}" , // Toplam tutar  .
        'items': {
			'item_name': "{URUNIDLERI}",
			'item_id': "{URUNADI}",
			'price': "{URUNFIYATLARIKDVDAHIL}",
			'quantity': "{URUNADETLERI}"
		},
        'google_business_vertical': "retail" // Google Ads parametresi, değişmez.
      }
      
  });