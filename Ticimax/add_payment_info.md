### Ödeme Yöntemi - add_payment_info Event ✅

-> GTM içinden eklenecek.

```add_payment_info``` kullanıcı ödeme yöntemi seçtikleri sayfada tetiklenir.

Bunun için de Ideasoft admin panelinden yapılacak bir işlem yok.
view_cart event tetiklenirken aldığımız veriyi "sessionStroge" üzerinden payment info sayfasına taşıyacağız.

1. "cjs - viewCartItems" isminde custom variable oluşturalarak items ve fb_contents dizisini sessionStroge'a yazdırmamız gerkiyor.
   Bu işlem aslında tüm sayfalarda tetiklenecek ama bizim için view_cart eventı tetiklendiği zaman (sepet sayfasında) çalışması gerektiği için onun haricinde undefined sonucu alsa bile önemli değil.

2. "Page - Payment Info Step 3" tetikleyici > "Page Path" variable > equals /order/step3.

3. "cHTML - Add Payment Info" Custom HTML oluşturarak sayfada aşağıdaki script dosyasını çalıştıyoruz.

```javascript
var sessionItems = JSON.parse(sessionStorage.getItem('items'))
var sessionFbContents = JSON.parse(sessionStorage.getItem('fb_contents'))

var value = IdeaCart.totalPrice

dataLayer.push({
    'event': 'add_payment_info',

    'ecommerce': {
        'currency': 'TRY',
        'value': value,
        'items': sessionItems
    },
    'fb_contents': sessionFbContents
})
```