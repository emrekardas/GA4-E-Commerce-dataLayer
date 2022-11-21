// IdeaSoft Altyapısında add_to_cart custom HTML olarak GTM Tarafına Girilmelidir.
//<script>
IdeaCart.prototype.AddToCartBasic = function (productId, htmlElement, priceWithoutTax, currency, tax, rebate, rebateType, moneyOrderAmount, stockTypeLabel, isAdditionalCartUpdateDisable, rootProduct, categoryId, brandId, extraButtonType, isLightBoxDisable) {
    if (parseFloat(priceWithoutTax) < 0.01) {
        alert("Ürün fiyatı hatalı olduğu için sepete atılamaz. Lütfen sistem yöneticisiyle irtibata geçiniz");
        return false
    }
    if (parseFloat(extraButtonType) < 0.01 && parseFloat(rebateType) < 0.01) {
        alert("Ürün fiyatı hatalı olduğu için sepete atılamaz. Lütfen sistem yöneticisiyle irtibata geçiniz");
        return false
    }
    if (false === this.CheckCustomizationFieldsOfCart()) {
        return false
    }
    try {
        if (priceIndex > 1) {
            rebate = 0;
            rebateType = 1
        }
    } catch (err) {}
    if (extraButtonType == null) {
        extraButtonType = ""
    }
    stockTypeLabel = unescape(stockTypeLabel);
    if (DDS.length > 0 && this.lastId.toArray().length == 0 && this.productCount > 0) {
        this.products.each(function (productId) {
            if (ideacart1.lastId[productId.value.pid] == undefined) {
                ideacart1.lastId[productId.value.pid] = 0
            }
            if (productId.value.ext > parseInt(ideacart1.lastId[productId.value.pid])) {
                ideacart1.lastId[productId.value.pid] = productId.value.ext
            }
        })
    }
    temp2 = "";
    if (DDS.length > 0) {
        var v = new Array;
        for (var m = 0; m < DDS.length; m++) {
            var g = DDS[m].id;
            optionLabel = $(g).value;
            if (optionLabel != "") {
                v.push(optionLabel)
            }
        }
        temp2 = v.join("/")
    }
    if (temp2 != "") {
        htmlElement = htmlElement + " " + temp2
    }
    htmlElement = unescape(htmlElement);
    htmlElement = unescape(escape(htmlElement).replace(/%C2%A0/g, "%20"));
    htmlElement = unescape(escape(htmlElement).replace(/%A0/g, "%20"));
    htmlElement = htmlElement.replace(/[^0-9a-zA-ZğüşıiöçĞÜŞIİÖÇâ\rebate\.\*\+&;#,=\[\]{}\(\)\/\\%\$\^\?@:<>\-_!€~ ]/gi, "");
    if (htmlElement.indexOf("}") > 0) {
        htmlElement = htmlElement.replace(/}/gi, "&#125;")
    }
    if (htmlElement.indexOf("{") > 0) {
        htmlElement = htmlElement.replace(/{/gi, "&#123;")
    }
    pid2 = productId;
    if (this.lastId[productId] && this.products["pr_" + productId + "_" + this.lastId[productId]]) {
        exist = false;
        index = 0;
        for (var m = 1; m <= this.lastId[productId]; m++) {
            if (!this.products["pr_" + productId + "_" + m]) {
                continue
            }
            currentel = this.products["pr_" + productId + "_" + m]["product"].toString();
            currentel = unescape(currentel);
            currentel = unescape(escape(currentel).replace(/%C2%A0/g, "%20"));
            currentel = unescape(escape(currentel).replace(/%A0/g, "%20"));
            currentel = currentel.replace(/[^0-9a-zA-ZğüşıiöçĞÜŞIİÖÇâ\s\rebate\.\*\+&;#,=\[\]{}\(\)\/\\%\$\^\?@:<>\-_!€~]/gi, "");
            if (htmlElement.toLowerCase() == currentel.toLowerCase()) {
                exist = true;
                index = m
            }
        }
        if (exist) {
            ext = index
        } else {
            this.lastId[productId]++;
            ext = this.lastId[productId]
        }
    } else {
        ext = 1;
        this.lastId[productId] = 1
    }
    productId = productId + "_" + ext;
    var cartItemAmount = parseFloat(IdeaCart.prototype.GetCartAmount(pid2, ext, stockTypeLabel));
    if (cartItemAmount == 0) {
        return false
    }
    if ($("cartItem_" + productId) != null) {
        var b = parseFloat(cartItemAmount) - parseFloat(this.products["pr_" + productId]["amount"]);
        this.products["pr_" + productId]["amount"] = cartItemAmount;
        pr = parseFloat(this.products["pr_" + productId]["price"]);
        if (rebate != 0 && rebateType == 1 || rebateType == 0) {
            if (rebateType == 0) {
                pr = rebate
            } else {
                pr = pr * (100 - rebate) / 100
            }
        }
        pr = pr * (100 + tax) / 100;
        pr = pr.toFixed(2);
        total = parseFloat(pr) * parseFloat(this.products["pr_" + productId]["amount"]);
        total = total.toFixed(2);
        totalAmount += parseFloat(ideacurr1.Convert(pr, this.products["pr_" + productId]["curr"], ideacurr1.DefaultCurr)) * b;
        totalAmount = parseFloat(totalAmount.toFixed(2));
        $("cartItem_inner_" + productId).innerHTML = this.cartTemplate.evaluate({
            product: this.products["pr_" + productId]["product"].truncate(22, "..."),
            amount: this.products["pr_" + productId]["amount"],
            pid: productId,
            price: total,
            curr: currency,
            stockTypeLabel: stockTypeLabel
        })

    } else {
        this.productCount++;
        this.products["pr_" + productId] = new Hash;
        this.products["pr_" + productId]["amount"] = cartItemAmount;
        this.products["pr_" + productId]["price"] = priceWithoutTax;
        this.products["pr_" + productId]["product"] = htmlElement;
        this.products["pr_" + productId]["pid"] = pid2;
        this.products["pr_" + productId]["curr"] = currency;
        this.products["pr_" + productId]["tax"] = tax;
        this.products["pr_" + productId]["rebate"] = rebate;
        this.products["pr_" + productId]["rebateType"] = rebateType;
        this.products["pr_" + productId]["bt"] = moneyOrderAmount;
        this.products["pr_" + productId]["ext"] = ext;
        this.products["pr_" + productId]["stockTypeLabel"] = stockTypeLabel;
        this.products["pr_" + productId]["rootProduct"] = rootProduct;
        this.products["pr_" + productId]["categoryId"] = categoryId;
        this.products["pr_" + productId]["brandId"] = brandId;
        pr = priceWithoutTax;
        if (rebate != 0 && rebateType == 1 || rebateType == 0) {
            if (rebateType == 0) {
                pr = rebate
            } else {
                pr = pr * (100 - rebate) / 100
            }
        }
        pr = pr * (100 + tax) / 100;
        pr = pr.toFixed(2);
        total = parseFloat(pr) * parseFloat(this.products["pr_" + productId]["amount"]);
        total = total.toFixed(2);
        totalAmount += parseFloat(ideacurr1.Convert(pr, this.products["pr_" + productId]["curr"], ideacurr1.DefaultCurr)) * parseFloat(this.products["pr_" + productId]["amount"]);
        totalAmount = parseFloat(totalAmount.toFixed(2));
        var S = document.createElement("div");
        Element.extend(S);
        S.addClassName("productOnCart");
        S.innerHTML = this.cartTemplate.evaluate({
            product: this.products["pr_" + productId]["product"].truncate(22, "..."),
            amount: this.products["pr_" + productId]["amount"],
            pid: productId,
            price: total,
            curr: currency,
            stockTypeLabel: stockTypeLabel
        });
        S.id = "cartItem_inner_" + productId;
        var E = document.createElement("div");
        Element.extend(E);
        E.id = "cartItem_" + productId;
        E.appendChild(S);
        if (this.productCount == 1) {
            jQuery(".cartContainer").html("")
        }
        jQuery(".cartContainer").append(E)
    }
    if ($("totalCartAmount")) {
        $("totalCartAmount").innerHTML = "<b>Toplam :</b> <span class='_colorRed _fontWeightBold'>" + totalAmount.toFixed(2) + " " + ideacurr1.DefaultCurr + "</span>"
    }
    IdeaCart.prototype.ChangeAddToCartButton(pid2, "nostock");
    if (pdrags[pid2]) {
        pdrags[pid2].destroy()
    }
    var itemAmount = null;
    if (b) {
        itemAmount = b
    } else {
        itemAmount = parseFloat(this.products["pr_" + productId]["amount"])
    }
    if (!this.CheckRecaptcha(pid2, itemAmount, isAdditionalCartUpdateDisable, extraButtonType)) {
        return false
    }
    if (parseInt(isAdditionalCartUpdateDisable)) {
        try {
            var addToCartResult = AddToCart(pid2, itemAmount);
            window.location = "/index.php?do=catalog/order"
        } catch (error) {
            alert(error);
            return false
        }
    } else {
        try {
            var addToCartResult = AddToCart(pid2, itemAmount)
        } catch (error) {
            alert(error);
            return false
        }
        if (typeof additionalCartUpdate != "undefined") {
            additionalCartUpdate()
        }
    }
    if (addToCartResult && useOrderLightBox == "1" && isLightBoxDisable == null) {
        jQuery("#OrderLightBox_Body").load("/index.php?do=catalog/orderLightBox");
        OpenDialog("OrderLightBox")

        var productVariant = document.querySelector(".variantSelect")


        if (productVariant != undefined || productVariant != null ) {
            productVariant = document.querySelector(".variantSelect").innerText
        } else {
            productVariant = ""
        }

        var productPrice = document.querySelector("[itemprop='price']").content

        dataLayer.push({
            'event': 'add_to_cart',
            currency: 'TRY',
            value: (productPrice * itemAmount).toFixed(2),
            items: [{
                item_id: productId,
                item_name: htmlElement,
                currency: 'TRY',
                price: productPrice,
                quantity: itemAmount,
                item_variant: productVariant
            }],
            'ecommerce': {
                'currencyCode': 'TRY',
                'add': {
                    'products': [{
                        'name': htmlElement,
                        'id': productId,
                        'price': productPrice,
                        'quantity': itemAmount,
                        'variant': productVariant
                    }]
                }
            }
        });
    } else {
        shoppingCartInformationBox(extraButtonType)
    }
};

// productid = productId
// product name = htmlElement
// product value = document.querySelector("[itemprop='price']").content (totalAmount)
//</script>