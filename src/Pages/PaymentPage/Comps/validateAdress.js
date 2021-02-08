export default (
  firstName,
  lastName,
  houseNumber,
  street,
  appartment,
  floor
) => {
  console.log(firstName, lastName, houseNumber, street, appartment, floor);
  if (firstName && lastName && houseNumber && street && appartment && floor) {
    console.log(true);
    return true;
  }
  console.log(false);
  return false;
};
