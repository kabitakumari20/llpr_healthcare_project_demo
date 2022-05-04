const mask = (fields, fieldsToBeMasked) => {
  const maskedFeilds = fields.map((field) => {
    fieldsToBeMasked.forEach((fm) => {
      field[fm] = "****";
    });
    return field;
  });
  return maskedFeilds;
};
module.exports = mask;
