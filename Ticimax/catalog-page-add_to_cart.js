

window.cart.remarketing.add = function () {
    var n = window.cart.get.model.cart.products.filter(function (n)
    {
        return n.variantId == window.cart.add.model.variantId
    })[0];
    for (var i = 0; i < allItems.length; i++) {
        if (allItems[i].item_id == window.cart.add.model.productId) {
            window.dataLayer.push({
                event: "add_to_cart",
                ecommerce: {
                    'value': allItems[i].price * allItems[i].quantity,
                    'currency': 'TRY',
                    'items': [allItems[i]]
                }
            });
        }
    }
};


