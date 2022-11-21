//<script>
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    event: view_item,
    ecommerce:{
        currency: TRY,
        value: {productPrice},
        item_id: {productId},
        item_name: {productName},
        google_business_vertical: "retail" // Google Ads parametresi, değişmez.
    }
    
});
//</script>