let itemName = ['Crocheted Dog Toy', 'Slow Feeder Bowl', 'Pawz Grey Treat Jar', 'Blue Sweet Dreams Thermal Pajamas', 'Checker Chewy Vuiton Bowl', 'Red Heart Sweater Dress', 'Velvet Hair Bow - Sun Kissed', 'Into the Wild Leash']
let itemPrice = [10, 14, 20, 30, 32, 27, 12, 27]
let wishList = []
let product = []

btnShowProducts.onclick=function(){
  for (i=0; i<=itemName.length-1; i++){
    product.push(`${itemName[i]} - $ ${itemPrice}`)
    }
    lblProducts.value = `${product}`
}


