### Alışveriş - Purchase Event ✅

```purchase``` satın alma işlemini tamamladığında gönderilir.

-> Ticimax panelinden eklenecek.

Anasayfa > Modüller > Script Yönetimi > Sipariş Tamamlandı

```javascript
function order(){

var productCategoryList = [];
var productBrandList = [];
var productIdList = "{URUNIDLERI}".split(",");
var productQuantityList = "{TIRNAKLIURUNADETLERI}".split(",");
var productTest = "{TIRNAKLIURUNFIYATLARI}"
var transaction_id = "{SIPARISID}";
var tax = _buSiparis.ToplamKDV;
var shipping = _buSiparis.KargoTutari;
var coupon = _buSiparis.HediyeCeki

var items = [];

for (var a = 0; a < productIdList.length; a++) {
    window.onload = items.push({
        'item_name': _buSiparis.Urunler[a].UrunAdi,
        'item_id': productIdList[a],
        'price': _buSiparis.Urunler[a].KDVDahilTutar,
        'quantity': _buSiparis.Urunler[a].Adet,
        'item_category': _buSiparis.Urunler[a].Kategori,
        'item_brand': _buSiparis.Urunler[a].Marka,

        'id': productIdList[a],
        'google_business_vertical': "retail" // Google Ads parametresi, değişmez.
    })
}

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': "purchase",
    'ecommerce': {
        'transaction_id': transaction_id,
        'tax': tax,
        'shipping': shipping,
        'coupon': coupon,
        'value': "{SIPARISTOPLAMTUTAR}",
        'currency': "TRY",
        'items': items,
    }
});

  return ''

}

if (document.readyState == 'loading') {
  // still loading, wait for the event
  document.addEventListener('DOMContentLoaded', order);
} else {
  // DOM is ready!
  order();
}
```