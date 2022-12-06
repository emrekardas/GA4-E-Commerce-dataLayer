### Sepete Ekle - add_cart_cart Event

-> GTM içinden eklenecek.

❗️❗️❗️Bu event için iki tag eklenecek. Ürün sayfaları "view_item" için ayrı, kategori "view_item_list" ve arama sayfasında "view_search_list" sonucunda çıkan ürünleri ürün detayına girmeden sepete eklemek için ayrı.

```add_to_cart``` sepete eklenen ürünlerin ölçümünü yapar.

1.1 "Event - View&Search Item List" > view_item_list|view_search_results

1.2 cHTML - Add To Cart List

```javascript

window.cart.remarketing.add = function () {
    var n = window.cart.get.model.cart.products.filter(function (n) {
        return n.variantId == window.cart.add.model.variantId
    })[0];
    for (var i = 0; i < allItems.length; i++) {
        if (allItems[i].item_id == window.cart.add.model.productId) {
            window.dataLayer.push({
                'event': "add_to_cart",
                'ecommerce': {
                    'value': value,
                    'currency': 'TRY',
                    'items': [allItems[i]]
                }
            });
        }
    }
};
```

2.1 "Event - view_item" > view_item

2.2 cHTML - Add To Cart Product

```javascript
window.cart.remarketing.add = function () {

    var n = window.cart.get.model.cart.products.filter(function (n) {
        return n.variantId == window.cart.add.model.variantId
    })[0];

    var value = window.cart.add.model.piece * Number(productDetailModel.productPriceKDVIncluded.toFixed(2))
    var item_id = productDetailModel.productId
    var item_name = productDetailModel.productName
    var item_brand = productDetailModel.brandName
    var price = productDetailModel.productPriceKDVIncluded.toFixed(2)
    var quantity = window.cart.add.model.piece
    var item_category = n.category

    window.dataLayer.push({
        'event': "add_to_cart",
        'ecommerce': {
            'value': value,
            'currency': 'TRY',
            'items': [{
                'item_id': item_id,
                'item_name': item_name,
                'item_brand': item_brand,
                'price': price,
                'quantity': quantity,
                'item_category': item_category,
                'id': item_id,
                'google_business_vertical': 'retail',
            }]
        }
    });
};
```