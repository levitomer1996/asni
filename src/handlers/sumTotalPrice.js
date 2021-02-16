export default (list) => {
  let total = 0;
  for (let index = 0; index < list.length; index++) {
    total = total + list[index].price * list[index].ammount;
  }
  return total;
};
