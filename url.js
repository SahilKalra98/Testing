const urlParse = input => {
  if (!input.length) return {};
  return input.split('&').reduce((obj, element) => {
    const [key, value] = element.split("=");
    if (!obj[key]) obj[key] = [];
    obj[key] = obj[key].concat(value);
    return obj;
  }, {});
};

module.exports = urlParse;
