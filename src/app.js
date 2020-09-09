import "regenerator-runtime";
import "./styles/style.css";
import Navigo from "navigo";

var root = null;
var useHash = true;
var hash = "#!";
var router = new Navigo(root, useHash, hash);

router
  .on("/:code", function (params) {
    console.log(params.code);
  })
  .notFound(function () {
    console.log("notfound");
  });
