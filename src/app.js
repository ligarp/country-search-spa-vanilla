import "regenerator-runtime";
import "./styles/style.css";
import Navigo from "navigo";
import "./components/country-list";
import "./components/country-detail";

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
  if (element == "detail-header") {
    const header1 = document.getElementById("header1");
    const header2 = document.getElementById("header2");
    header2.classList.remove("hidden");
    header2.firstElementChild.firstElementChild.innerHTML = title;
    header1.classList.add("hidden");
  } else {
    const header1 = document.getElementById("header1");
    const header2 = document.getElementById("header2");
    header2.classList.add("hidden");
    header1.classList.remove("hidden");
  }
}

const searchInput = document.getElementById("search");
searchInput.addEventListener("keyup", (event) => {
  const newCountryList = data.filter(
    (country) =>
      country.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
      country.alpha2Code
        .toLowerCase()
        .includes(event.target.value.toLowerCase()) ||
      country.alpha3Code
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
  );
  changeList(newCountryList);
});

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
      countryDetailElement.setAttribute("class", "container detail-container");
      countryDetailElement.country = resJson;
      root.innerHTML = "";
      root.appendChild(countryDetailElement);
    });
}

window.addEventListener("DOMContentLoaded", renderCountryList);
