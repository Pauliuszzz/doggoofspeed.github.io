Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}

Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

//Checks if snow should be added
var d = new Date();
var n = d.getMonth();

if (n == 11 || n == 0 || n == 1) {
  var snow = document.createElement("script");
  snow.setAttribute("type", "text/javascript");
  snow.setAttribute("src", "../js/snowstorm-min.js");
  document.getElementsByTagName("body")[0].appendChild(snow);
}