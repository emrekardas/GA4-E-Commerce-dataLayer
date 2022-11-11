window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': "view_item",
    'ecommerce': {
      'currency': "TRY",
      'value': "79", // Ürün fiyatı
      'google_business_vertical': "retail", // Google Ads parametresi, değişmez.
      'items': [{
          'item_name': "{URUNADI}",
          'item_id': "{ID}",
          'price': "79",  // Ürün fiyatı
          'item_category': "{KATEGORIADI}", // Ürün kategorisi
          'quantity': 1,
          'id': "{ID}", // item_id değeri eklenecek.
      }]}
});