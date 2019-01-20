export const format = number => {
  var re = "\\d(?=(\\d{3})+$)";
  if (number) return number.toFixed().replace(new RegExp(re, "g"), "$&,");
  else return 0;
};
