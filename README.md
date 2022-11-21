# Google Analytics 4 Sample Data
<p>The dataLayer given below are an example of the data that will be reflected to us after the installation of the dataLayer. Variables should be used with the names given in the example.</p>

## Subjects
	1.0 | Advanced E-Commerce Tracking Integration

## 1.0 | Advanced E-Commerce Tracking Integration

## 1.0.1 - view_item_list

<p>It should work when the user is presented with a list of items of a certain category.</p>

```
dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.  
dataLayer.push({  
  event: "view_item_list",  
  ecommerce: {  
	  items: [{  
		  item_id: "SKU_12345",  
		  item_name: "Stan and Friends Tee",  
		  affiliation: "Google Merchandise Store",  
		  coupon: "SUMMER_FUN",  
		  currency: "USD",  
		  discount: 2.22,  
		  index: 0,  
		  item_brand: "Google",  
		  item_category: "Apparel",  
		  item_category2: "Adult",  
		  item_category3: "Shirts",  
		  item_category4: "Crew",  
		  item_category5: "Short sleeve",  
		  item_list_id: "related_products",  
		  item_list_name: "Related Products",  
		  item_variant: "green",  
		  location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",  
		  price: 9.99,  
		  quantity: 1  
	  },  
	  {  
		  item_id: "SKU_12346",  
		  item_name: "Google Grey Women's Tee",  
		  affiliation: "Google Merchandise Store",  
		  coupon: "SUMMER_FUN",  
		  currency: "USD",  
		  discount: 3.33,  
		  index: 1,  
		  item_brand: "Google",  
		  item_category: "Apparel",  
		  item_category2: "Adult",  
		  item_category3: "Shirts",  
		  item_category4: "Crew",  
		  item_category5: "Short sleeve",  
		  item_list_id: "related_products",  
		  item_list_name: "Related Products",  
		  item_variant: "gray",  
		  location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",  
		  price: 20.99,  
		  promotion_id: "P_12345",  
		  promotion_name: "Summer Sale",  
		  quantity: 1  
	  }]  
 }});
```
<br>

## 1.0.2 - select_item

<p>It should work when the user performs a product click within the site.</p>

```
dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.  
dataLayer.push({  
  event: "select_item",  
  ecommerce: {  
  items: [{  
	  item_id: "SKU_12345",  
	  item_name: "Stan and Friends Tee",  
	  affiliation: "Google Merchandise Store",  
	  coupon: "SUMMER_FUN",  
	  currency: "USD",  
	  discount: 2.22,  
	  index: 0,  
	  item_brand: "Google",  
	  item_category: "Apparel",  
	  item_category2: "Adult",  
	  item_category3: "Shirts",  
	  item_category4: "Crew",  
	  item_category5: "Short sleeve",  
	  item_list_id: "related_products",  
	  item_list_name: "Related Products",  
	  item_variant: "green",  
	  location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",  
	  price: 9.99,  
	  quantity: 1  
  }] 
  }});
```

<br>

## 1.0.3 - view_item

<p>It should work when the user views a product.</p>

```
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "view_item",
  ecommerce: {
    items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      affiliation: "Google Merchandise Store",
      coupon: "SUMMER_FUN",
      currency: "USD",
      discount: 2.22,
      index: 0,
      item_brand: "Google",
      item_category: "Apparel",
      item_category2: "Adult",
      item_category3: "Shirts",
      item_category4: "Crew",
      item_category5: "Short sleeve",
      item_list_id: "related_products",
      item_list_name: "Related Products",
      item_variant: "green",
      location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
      price: 9.99,
      quantity: 1
    }
    ]
  }
});
```

<br>

## 1.0.4 - add_to_cart

<p>It should work when the user adds a product to the cart.</p>

```
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "add_to_cart",
  ecommerce: {
    items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      affiliation: "Google Merchandise Store",
      coupon: "SUMMER_FUN",
      currency: "USD",
      discount: 2.22,
      index: 0,
      item_brand: "Google",
      item_category: "Apparel",
      item_category2: "Adult",
      item_category3: "Shirts",
      item_category4: "Crew",
      item_category5: "Short sleeve",
      item_list_id: "related_products",
      item_list_name: "Related Products",
      item_variant: "green",
      location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
      price: 9.99,
      quantity: 1
    }
    ]
  }
});
```

<br>

## 1.0.5 - add_to_wishlist

<p>It should work when the user adds a product to favorites.</p>

```
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "add_to_wishlist",
  ecommerce: {
    currency: "USD",
    value: 7.77,
    items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      affiliation: "Google Merchandise Store",
      coupon: "SUMMER_FUN",
      currency: "USD",
      discount: 2.22,
      index: 0,
      item_brand: "Google",
      item_category: "Apparel",
      item_category2: "Adult",
      item_category3: "Shirts",
      item_category4: "Crew",
      item_category5: "Short sleeve",
      item_list_id: "related_products",
      item_list_name: "Related Products",
      item_variant: "green",
      location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
      price: 9.99,
      quantity: 1
    }
    ]
  }
});
```

<br>

## 1.0.6 - view_cart

<p>It should work when the user views the cart.</p>

```
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "view_cart",
  ecommerce: {
    currency: "USD",
    value: 7.77,
    items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      affiliation: "Google Merchandise Store",
      coupon: "SUMMER_FUN",
      currency: "USD",
      discount: 2.22,
      index: 0,
      item_brand: "Google",
      item_category: "Apparel",
      item_category2: "Adult",
      item_category3: "Shirts",
      item_category4: "Crew",
      item_category5: "Short sleeve",
      item_list_id: "related_products",
      item_list_name: "Related Products",
      item_variant: "green",
      location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
      price: 9.99,
      quantity: 1
    }
    ]
  }
});
```

<br>

## 1.0.7 - remove_from_cart

<p>It should work when the user removes the product from the cart.</p>

```
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "remove_from_cart",
  ecommerce: {
    items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      affiliation: "Google Merchandise Store",
      coupon: "SUMMER_FUN",
      currency: "USD",
      discount: 2.22,
      index: 0,
      item_brand: "Google",
      item_category: "Apparel",
      item_category2: "Adult",
      item_category3: "Shirts",
      item_category4: "Crew",
      item_category5: "Short sleeve",
      item_list_id: "related_products",
      item_list_name: "Related Products",
      item_variant: "green",
      location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
      price: 9.99,
      quantity: 1
    }
    ]
  }
});
```

<br>

## 1.0.8 - begin_checkout

<p>It should work when the user starts paying steps.</p>

```
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "begin_checkout",
  ecommerce: {
    items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      affiliation: "Google Merchandise Store",
      coupon: "SUMMER_FUN",
      currency: "USD",
      discount: 2.22,
      index: 0,
      item_brand: "Google",
      item_category: "Apparel",
      item_category2: "Adult",
      item_category3: "Shirts",
      item_category4: "Crew",
      item_category5: "Short sleeve",
      item_list_id: "related_products",
      item_list_name: "Related Products",
      item_variant: "green",
      location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
      price: 9.99,
      quantity: 1
    }
    ]
  }
});
```

<br>

## 1.0.9 - add_shipping_info

<p>It should work when the user completes the delivery information.</p>

```
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "add_shipping_info",
  ecommerce: {
    currency: "USD",
    value: 7.77,
    coupon: "SUMMER_FUN",
    shipping_tier: "Ground",
    items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      affiliation: "Google Merchandise Store",
      coupon: "SUMMER_FUN",
      currency: "USD",
      discount: 2.22,
      index: 0,
      item_brand: "Google",
      item_category: "Apparel",
      item_category2: "Adult",
      item_category3: "Shirts",
      item_category4: "Crew",
      item_category5: "Short sleeve",
      item_list_id: "related_products",
      item_list_name: "Related Products",
      item_variant: "green",
      location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
      price: 9.99,
      quantity: 1
    }
    ]
  }
});
```

<br>

## 1.0.10 - add_payment_info

<p>The user should be working when he completes the pay information.</p>

```
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "add_payment_info",
  ecommerce: {
    currency: "USD",
    value: 7.77,
    coupon: "SUMMER_FUN",
    payment_type: "Credit Card",
    items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      affiliation: "Google Merchandise Store",
      coupon: "SUMMER_FUN",
      currency: "USD",
      discount: 2.22,
      index: 0,
      item_brand: "Google",
      item_category: "Apparel",
      item_category2: "Adult",
      item_category3: "Shirts",
      item_category4: "Crew",
      item_category5: "Short sleeve",
      item_list_id: "related_products",
      item_list_name: "Related Products",
      item_variant: "green",
      location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
      price: 9.99,
      quantity: 1
    }
    ]
  }
});
```

<br>

## 1.0.11 - purchase

<p>It should work when the user completes the purchase.</p>

```
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "purchase",
  ecommerce: {
      transaction_id: "T_12345",
      affiliation: "Google Merchandise Store",
      value: 25.42,
      tax: 4.90,
      shipping: 5.99,
      currency: "USD",
      coupon: "SUMMER_SALE",
      items: [
       {
        item_id: "SKU_12345",
        item_name: "Stan and Friends Tee",
        affiliation: "Google Merchandise Store",
        coupon: "SUMMER_FUN",
        currency: "USD",
        discount: 2.22,
        index: 0,
        item_brand: "Google",
        item_category: "Apparel",
        item_category2: "Adult",
        item_category3: "Shirts",
        item_category4: "Crew",
        item_category5: "Short sleeve",
        item_list_id: "related_products",
        item_list_name: "Related Products",
        item_variant: "green",
        location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
        price: 9.99,
        quantity: 1
      },
      {
        item_id: "SKU_12346",
        item_name: "Google Grey Women's Tee",
        affiliation: "Google Merchandise Store",
        coupon: "SUMMER_FUN",
        currency: "USD",
        discount: 3.33,
        index: 1,
        item_brand: "Google",
        item_category: "Apparel",
        item_category2: "Adult",
        item_category3: "Shirts",
        item_category4: "Crew",
        item_category5: "Short sleeve",
        item_list_id: "related_products",
        item_list_name: "Related Products",
        item_variant: "gray",
        location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
        price: 20.99,
        promotion_id: "P_12345",
        promotion_name: "Summer Sale",
        quantity: 1
      }]
  }
});
```

<br>

## 1.0.12 refund - (Partial Payback)

<p>It should work when the user performs a refund operation for one or more products in his order.</p>

```
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "refund",
  ecommerce: {
    currency: "USD",
    transaction_id: "T_12345",
    value: 12.21,
    affiliation: "Google Merchandise Store",
    coupon: "SUMMER_FUN",
    shipping: 3.33,
    tax: 1.11,
    items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      affiliation: "Google Merchandise Store",
      coupon: "SUMMER_FUN",
      currency: "USD",
      discount: 2.22,
      index: 0,
      item_brand: "Google",
      item_category: "Apparel",
      item_category2: "Adult",
      item_category3: "Shirts",
      item_category4: "Crew",
      item_category5: "Short sleeve",
      item_list_id: "related_products",
      item_list_name: "Related Products",
      item_variant: "green",
      location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
      price: 9.99,
      quantity: 1
    }
    ]
  }
});
```

<br>

## 1.0.13 refund - (Payback)

<p>It should work when the user performs a refund operation for his order.</p>

```
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "refund",
  ecommerce: {
    currency: "USD",
    transaction_id: "T12345" // Transaction ID. Required for purchases and refunds.
    value: 12.21,
    affiliation: "Google Merchandise Store",
    coupon: "SUMMER_FUN",
    shipping: 3.33,
    tax: 1.11
  }
});
```

<br>

## 1.0.14 - view_promotion

<p>It should work when the user views a promotion on the website.</p>

```
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "view_promotion",
  ecommerce: {
    items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      affiliation: "Google Merchandise Store",
      coupon: "SUMMER_FUN",
      currency: "USD",
      discount: 2.22,
      index: 0,
      item_brand: "Google",
      item_category: "Apparel",
      item_category2: "Adult",
      item_category3: "Shirts",
      item_category4: "Crew",
      item_category5: "Short sleeve",
      item_list_id: "related_products",
      item_list_name: "Related Products",
      item_variant: "green",
      location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
      price: 9.99,
      quantity: 1
    }
    ]
  }
});
```

<br>

## 1.0.15 - select_promotion

<p>It should work when the user performs a click on a promotion on the website.</p>

```
dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
dataLayer.push({
  event: "select_promotion",
  ecommerce: {
    items: [
    {
      item_id: "SKU_12345",
      item_name: "Stan and Friends Tee",
      affiliation: "Google Merchandise Store",
      coupon: "SUMMER_FUN",
      currency: "USD",
      discount: 2.22,
      index: 0,
      item_brand: "Google",
      item_category: "Apparel",
      item_category2: "Adult",
      item_category3: "Shirts",
      item_category4: "Crew",
      item_category5: "Short sleeve",
      item_list_id: "related_products",
      item_list_name: "Related Products",
      item_variant: "green",
      location_id: "ChIJIQBpAG2ahYAR_6128GcTUEo",
      price: 9.99,
      quantity: 1
    }
    ]
  }
});
```

<br>
