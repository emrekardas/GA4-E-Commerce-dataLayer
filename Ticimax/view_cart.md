### Sepet - view_cart Event ✅

-> Ticimax panelinden eklenecek.

Anasayfa > Modüller > Script Yönetimi > Sepet

```view_cart``` sepetim sayfasında tetiklenecek.

```javascript
var productIdList = "{URUNIDLERI}".split(",");
var productPriceList = "{URUNFIYATLARIKDVDAHIL}".split(",").map(function (el) {
    return +el;
});;
var productQuantityList = "{URUNADETLERI}".split(",").map(function (el) {
    return +el;
});;
var productCategoryList = "{KATEGORIADI}".split(",");
var productNameList = "{URUNADI}".split(",");

var items = [];

for (var i = 0; i < products.length; i++) {
    items.push({
        'item_name': productNameList[i],
        'item_id': productIdList[i],
        'price': productPriceList[i],
        'quantity': productQuantityList[i],
        'item_category': productCategoryList[i],
        'id': productIdList[i],
        'google_business_vertical': "retail"
    });
}
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': "view_cart",
    'ecommerce': {
        'currency': "TRY",
        'value': "{TOPLAMTUTARKDVDAHIL}",
        'items': items,
    }
});
```