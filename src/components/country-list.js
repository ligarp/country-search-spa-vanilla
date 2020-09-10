import "./country-item";
class CountryList extends HTMLElement {
  set countryList(list) {
    this._countryList = list;
    this.render();
  }

  render() {
    this.innerHTML = "";
    this._countryList.forEach((country) => {
      const countryItem = document.createElement("country-item");
      countryItem.country = country;
      this.appendChild(countryItem);
    });
  }
}

customElements.define("country-list", CountryList);
