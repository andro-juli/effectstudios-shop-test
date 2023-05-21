

export const useGetPrice = () => {
 function getInfo(product) {
  const variants = product.variants[0];
  if(variants.compare_at_price !== "0.00") {
   return  Math.round(((variants.compare_at_price - variants.price) / variants.compare_at_price) * 100)
  } else {
   return 'No compare price';
  }
 }

 return { getInfo }
}