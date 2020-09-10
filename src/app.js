import "regenerator-runtime";
import "./styles/style.css";
import Navigo from "navigo";
import "./components/country-list";
import "./components/country-detail";
import "./components/index-header";
import "./components/detail-header";

var root = null;
var useHash = true;
var hash = "#!";
var router = new Navigo(root, useHash, hash);

router
  .on(function () {
    renderCountryList();
  })
  .on("/:code", function (params) {
    showDetails(params.code);
  })
  .notFound(function () {
    renderCountryList();
  });

let data = [];

function renderCountryList() {
  changeHeader("index-header");
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => {
      return res.json();
    })
    .then((resJson) => {
      data = resJson;
      changeList(data);
    });
}

function changeList(list) {
  const root = document.getElementById("root");
  const countryListElement = document.createElement("country-list");
  countryListElement.setAttribute("class", "container country-container");
  countryListElement.countryList = list;
  root.innerHTML = "";
  root.appendChild(countryListElement);
}

function changeHeader(element, title = "") {
  const header = document.getElementById("header");
  const headerElement = document.createElement(`${element}`);
  if (element == "detail-header") {
    headerElement.title = title;
  }
  header.innerHTML = "";
  header.appendChild(headerElement);
}

function showDetails(code) {
  changeHeader("detail-header");
  const root = document.getElementById("root");
  root.innerHTML = "";
  fetch(`https://restcountries.eu/rest/v2/alpha/${code}`)
    .then((res) => res.json())
    .then((resJson) => {
      changeHeader("detail-header", resJson.name);
      const root = document.getElementById("root");
      const countryDetailElement = document.createElement("country-detail");
      console.log(countryDetailElement);
      countryDetailElement.setAttribute("class", "container detail-container");
      countryDetailElement.country = resJson;
      root.innerHTML = "";
      root.appendChild(countryDetailElement);
    });
}

window.addEventListener("DOMContentLoaded", renderCountryList);
