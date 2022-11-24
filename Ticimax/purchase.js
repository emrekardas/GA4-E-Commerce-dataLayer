// TICIMAX & purchase
// TICIMAX Altyapısında yapılacak tüm işlemlerde <script></script> tagleri yazılmalıdır.

//<script>

var userEmail = "{EMAIL}";
	var kargoBilgileri = {"kargoAliciAdi" : "", "kargoAliciSoyadi": "", "kargoAliciTelefon": "", "kargoEmail": "", "kargoAliciIlce":"", "kargoAliciMahalle": "", "kargoAliciSehir": "", "kargoAliciUlke": "", "kargoPostaKodu":""};
	var enhanced_conversion_data = {"email": "", "phone_number": "", "address": {"first_name": "", "last_name": "", "street": "", "city": "", "region": "", "postal_code": "", "country": ""}};

  document.addEventListener("DOMContentLoaded", function(){
    let aliciFullNameArray = window['_kargoAdres'].AliciAdi.trim().split(" ");
    let aliciAdi = "";
    let aliciSoyadi = aliciFullNameArray.slice(-1)[0];
    if(aliciFullNameArray.length > 2){
    	for (let i = 0; i < (aliciFullNameArray.length - 1); i++) {
    		aliciAdi = aliciAdi + aliciFullNameArray[i] + " ";
		}
    }else{
      aliciAdi = aliciFullNameArray[0];
    }
    
    enhanced_conversion_data.address.first_name = aliciAdi;
    enhanced_conversion_data.address.last_name = aliciSoyadi;
    enhanced_conversion_data.phone_number = window['_kargoAdres'].AliciTelefon;
    enhanced_conversion_data.address.street = window['_kargoAdres'].Mahalle;
    enhanced_conversion_data.address.region = window['_kargoAdres'].Ilce;
    enhanced_conversion_data.address.city= window['_kargoAdres'].Sehir;
    enhanced_conversion_data.address.country = window['_kargoAdres'].UlkeParabirimi;
    enhanced_conversion_data.address.postal_code = window['_kargoAdres'].PostaKodu;
    enhanced_conversion_data.email = userEmail;
    
    
    dataLayer.push({   "event": "enhanced_conversion_data", enhanced_conversion_data});
  });

var Ids =  "{URUNIDLERI}".split(",")  ;
var Prices = "{TIRNAKLIURUNFIYATLARI}".split(",").map(function(el){return +el;}) ;
var Quantity = "{TIRNAKLIURUNADETLERI}".split(",").map(function(el){return +el;})  ;

var products = [];

for (var i = 0; i < Ids.length; i++) {
    products.push({
        item_id: Ids[i],
        price: Prices[i],
        quantity : Quantity[i],
        id : Ids[i],
      });
}
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    event: "purchase",
    enhanced_conversion_data : enhanced_conversion_data,
    ecommerce: {
      transaction_id: "{SIPARISNO}", // Sipariş numarası  .
      siparis_id : "{SIPARISID}",  
      value: "{SIPARISTOPLAMTUTAR}",// Sipariş toplam tutarı  .
      currency: "{PARABIRIMI}",
      coupon : "{HEDIYECEKI}",
      items: products,
      google_business_vertical: "retail" // Google Ads parametresi, değişmez.
    }
});
//</script>
