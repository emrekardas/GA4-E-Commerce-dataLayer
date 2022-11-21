//<script>
var item_id = "{URUNIDLERI}".split(",") ;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
      event: "view_item_list",
      ecommerce: {
        google_business_vertical: "retail", // Google Ads parametresi, değişmez.
        item_category : " {KATEGORIADI} ",
        item_id : item_id,
    }
});
//</script>