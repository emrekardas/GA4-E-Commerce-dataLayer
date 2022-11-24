<script>
  
  function printItemNames() {
    var hrefs = document.querySelectorAll('.productName.detailUrl')
    var result = []
    hrefs.forEach(function (e) {
        result.push(e.innerText)
    })
    return result
}

productNameList = printItemNames()

function printItemPrices() {
    var hrefs = document.querySelectorAll(".discountPrice")
    var result = []
    hrefs.forEach(function (e) {
        result.push(e.innerText.slice(1).replaceAll('.', '').replace(',','.'))
    })
    return result
}

productPriceList = printItemPrices()


function printItemBrands() {
    var hrefs = document.querySelectorAll('.productMarka')
    var result = []
    hrefs.forEach(function (e) {
        result.push(e.innerText)
    })
    return result
}

productBrandList = printItemBrands()

function printItemIds() {
    var hrefs = document.querySelectorAll('.productName.detailUrl')
    var result = []
    hrefs.forEach(function (e) {
        result.push(e.getAttribute('data-id'))
    })
    return result
}

productIdList = printItemIds()

var categoryList = document.querySelector('.categoryTitleText ').querySelectorAll('[itemprop="name"]')

productCategoryList = categoryList[categoryList.length - 1].innerText



items = [];

if (productNameList.length > 10){
	var len = 10
    } else {
    var len = productNameList.length
}

var value = 0


for (i=0; i < len; i++){
  items.push({
                'item_id': productIdList[i],
                'item_name': productNameList[i],
                'item_brand': productBrandList[i],
                'price': Number(productPriceList[i]),
                'quantity': 1,
                'item_category': productCategoryList,
            })
  var value = value + Number(productPriceList[i])
}


  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
      'event': "view_item_list",
      ecommerce: {
            'value': value,
            'currency': 'TRY',
            'items': items
        }
});

var allItems = []

for (i=0; i < productNameList.length; i++){
  allItems.push({
                'item_id': productIdList[i],
                'item_name': productNameList[i],
                'item_brand': productBrandList[i],
                'price': Number(productPriceList[i]),
                'quantity': 1,
                'item_category': productCategoryList,
            })
}


</script>
