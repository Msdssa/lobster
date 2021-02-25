function setStorage (data) {
  const { totalCount, totalPrice, cartFoods} = data;
  localStorage.setItem('totalCount', totalCount);
  localStorage.setItem('totalPrice', totalPrice);
  localStorage.setItem('cartFoods', JSON.stringify(cartFoods || []));
}
export {
  setStorage
}