const obscureCreditCard = (cardNumber) => {
  if (cardNumber.length < 12 || cardNumber.length > 16) {
    return "Invalid Credit Card";
  }

  const obscuredDigits = cardNumber.slice(0, -4).replace(/./g, "*");
  const last4Digits = cardNumber.slice(-4);

  return obscuredDigits + last4Digits;
};

export default obscureCreditCard;
