"use strict";

var _express = _interopRequireDefault(require("express"));
var _tobe = _interopRequireDefault(require("../src/controllers/tobe.controller"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//só nao deu erro com a letra minuscula no import

var app = (0, _express["default"])();
var port = 3000;
app.get("/", function (request, response) {
  response.send("Hermanoteu");
});
new _tobe["default"](app);
app.listen(port, function () {
  console.log("Corre Negada");
});