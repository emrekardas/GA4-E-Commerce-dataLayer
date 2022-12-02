
// Item Names

function printItemNames() {
    var hrefs = document.querySelectorAll('.productName.detailUrl')
    var result = []
    hrefs.forEach(function (e) {
        result.push(e.innerText)
    })
    return result
}

productNameList = printItemNames()

// Item Prices

function printItemPrices() {
    var hrefs = document.querySelectorAll(".discountPrice")
    var result = []
    hrefs.forEach(function (e) {
        result.push(e.innerText.slice(1).replaceAll('.', '').replace(',','.'))
    })
    return result
}

productPriceList = printItemPrices()

// Item Brands

function printItemBrands() {
    var hrefs = document.querySelectorAll('.productMarka')
    var result = []
    hrefs.forEach(function (e) {
        result.push(e.innerText)
    })
    return result
}

productBrandList = printItemBrands()

// Items Ids

function printItemIds() {
    var hrefs = document.querySelectorAll('.productName.detailUrl')
    var result = []
    hrefs.forEach(function (e) {
        result.push(e.getAttribute('data-id'))
    })
    return result
}

productIdList = printItemIds()

// Item Categories

function printItemCategories() {
    var hrefs = document.querySelectorAll('.itemCategoryLine')
    var result = []
    hrefs.forEach(function (e) {
        result.push(e.innerText.trim())
    })
    return result
}

productCategoryList = printItemCategories()


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
        'item_category': productCategoryList[i],
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
        'item_category': productCategoryList[i],
    })
}
