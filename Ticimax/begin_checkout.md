### Ödeme Başlatma - begin_checkout Event ✅

-> Ticimax panelinden eklenecek.

Anasayfa > Modüller > Script Yönetimi > Sipariş Tamamla

```begin_checkout``` kullanıcı ödeme işlemini başlattığında gönderilir ve ödeme başlatma işlemlerini ölçmek için kullanılır.

Bunun için Ideasoft admin panelinden yapılacak bir işlem yok.
view_cart event tetiklenirken aldığımız veriyi "sessionStroge" üzerinden checkout sayfasına taşıyacağız.

1. "cjs - viewCartItems" isminde custom variable oluşturalarak items ve fb_contents dizisini sessionStroge'a yazdırmamız gerkiyor.
   Bu işlem aslında tüm sayfalarda tetiklenecek ama bizim için view_cart eventı tetiklendiği zaman (sepet sayfasında) çalışması gerektiği için onun haricinde undefined sonucu alsa bile önemli değil.

2. "Page - Checkout Step 2" tetikleyici > "Page Path" variable > equals /order/step2.

3. "cHTML - Begin Checkout" Custom HTML oluşturarak sayfada aşağıdaki script dosyasını çalıştıyoruz.

```javascript

var productIdList =  "{URUNIDLERI}".split(",")  ;
var productPriceList = "{URUNFIYATLARIKDVDAHIL}".split(",").map(function(el){return +el;});
var productQuantityList = "{URUNADETLERI}".split(",").map(function(el){return +el;});

var items = [];

for (var i = 0; i < Ids.length; i++) {
    items.push({
        'item_id': productIdList[i],
        'price': productPriceList[i],
        'quantity': productQuantityList[i],
      	'item_name' : buSepet.Urunler[i].UrunAdi,
        'item_category': buSepet.Urunler[i].Kategori,
        'item_brand': buSepet.Urunler[i].Marka,

        'id': productIdList[i],
        'google_business_vertical': "retail"
      });
}

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': "begin_checkout",
    'ecommerce': {
      'items': items,
      'currency': "TRY",
      'value': " {TOPLAMTUTARKDVDAHIL}",
    }
});
```