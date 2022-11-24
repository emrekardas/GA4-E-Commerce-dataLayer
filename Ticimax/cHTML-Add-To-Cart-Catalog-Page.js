//Trigger = view_item_list
<script>
  
  
  function productListAddToCartV2(n, t, i, r, u, f, e) {
    if (e === 1) window.location.href = f;
    else if (siteSettings.productListSelectVariantActive && i == 0) listVariantModule.params.unique = n, listVariantModule.params.productId = t, listVariantModule.params.variantId = i, listVariantModule.params.variantId = i, listVariantModule.params.assortmentProductId = r, listVariantModule.params.piece = u, listVariantModule.params.url = f, listVariantModule.params.redirectToDetail = e, listVariantModule.bind();
    else {
        var u = parseFloat($(".txtSepetAdet" + n).val().replace(",", "."));
        window.cart.add.model = window.cart.add.createModel();
        window.cart.add.model.productUnique = n;
        window.cart.add.model.productId = t;
        window.cart.add.model.variantId = i;
        window.cart.add.model.piece = u;
        window.cart.add.model.assortmentProductId = r;
        window.cart.add.model.productUrl = f;
        window.cart.add.execute()
    }
    
   
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
    
    
  
}
  
</script>