import * as CreditCard from "credit-card";

export default (card, name) => {
  const {
    validCardNumber,
    validExpiryMonth,
    validExpiryYear,
    validCvv,
    isExpired,
  } = CreditCard.validate(card);

  if (
    name &&
    validCardNumber &&
    validExpiryMonth &&
    validExpiryYear &&
    validCvv &&
    !isExpired
  ) {
    return true;
  }
  return false;
};
