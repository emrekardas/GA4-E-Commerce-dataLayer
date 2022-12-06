### Ürün görüntüleme - view_item Event ✅

-> Ticimax panelinden eklenecek.

Anasayfa > Modüller > Script Yönetimi > Ürün Detay

```view_item``` ürün görünümlerini ölçer. Bu event, ürün sayfaları yüklendiğinde gerçekleşir.

```javascript
var value = productDetailModel.productPriceKDVIncluded.toFixed(2)

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': "view_item",
    'ecommerce': {
        'currency': productDetailModel.productCurrency,
        'value': value, // Ürün fiyatı
        'items': [{
            'item_name': "{URUNADI}",
            'item_id': "{ID}",
            'price': value, // Ürün fiyatı
            'item_category': "{KATEGORIADI}", // Ürün kategorisi
            'quantity': 1,
            'brand': productDetailModel.brandName,
            'id': "{ID}",
            'google_business_vertical': "retail",
        }]
    },

    // FB parametreleri ⤵️
    'fb_contents': [{
        'id': "{ID}",
        'quantity': 1
    }],
});
```