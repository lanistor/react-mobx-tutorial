
Array.prototype.findOne = function ( value, copy=false, key='id' ) {
  if(!this || this.length === 0) {
    return null
  }
  for(let item of this) {
    if(item[key] === value) {
      return item
    }
  }
  return null
}

Object.size = function(obj) {
  if(!obj) {
    return 0
  }
  return Object.keys(obj).length
}

Date.prototype.format = function(rule) {
  if(!rule) {
    return null
  }
  let ruleValue = {
    'y{4}': this.getFullYear(),
    'y{2}': this.getFullYear().toString().substring(2, 4),
    'M+': this.getMonth()+1,
    'd+': this.getDate(),
    'h+': this.getHours(),
    'm+': this.getMinutes(),
    's+': this.getSeconds()
  }
  for(let key in ruleValue) {
    rule = rule.replace(new RegExp(key), ruleValue[key])
  }
  return rule
}
