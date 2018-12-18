Array.prototype.sReduce = function (fun, intialValue=0) {
  this.forEach((element, index) => {
    intialValue = fun(intialValue, element, index, this)
  })
  return intialValue;
}
