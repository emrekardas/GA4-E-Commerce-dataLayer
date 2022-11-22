// TICIMAX & view_item
// TICIMAX Altyapısında yapılacak tüm işlemlerde <script></script> tagleri yazılmalıdır.

//<script>
function totalPrice() { // totalPrice fonksiyonun sebebi Ticimax ürün detay sayfasında value değerini "," ile belirtmiş bunu "." 'ya çevirmek için.
  var price = "{FIYATKDVDAHIL}"  
  var commaReplacePrice = price.replaceAll(',', '.')
  var token = '.'
  /* Requires STRING not contain TOKEN */
  var parts = commaReplacePrice.split(token);
  if (price.length <= 4) {
    return price
  } else {
    return parts.slice(0, -1).join('') + '.' + parts.slice(-1)
  }
}
var brand = document.querySelector(`.right_line.Marka`).innerText
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    event: "view_item",
    ecommerce: {
      currency: "TRY",
      value: totalPrice(), // Ürün fiyatı
      items: [{
          item_name: "{URUNADI}",
          item_id: "{ID}",
          price: totalPrice(),  // Ürün fiyatı
          item_category: "{KATEGORIADI}", // Ürün kategorisi
          quantity: 1,
          brand : brand,
      }]}
});
//</script>


