class CountryItem extends HTMLElement {
  set country(country) {
    this._country = country;
    this.render();
  }

  render() {
    this.innerHTML = `
      <a href="#!/${this._country.alpha3Code}">
          <div class="country-item">
          <img
            class="object-cover h-48 w-full"
            src="${this._country.flag}"
            alt="${this._country.name}"
          />
          <div class="px-6 py-4">
            <div class="font-bold text-xl">${this._country.name}</div>
            <div class="text-md text-gray-800 mb-2">(${
              this._country.nativeName
            })</div>
            <table class="table-fixed w-full">
              <tbody>
                <tr>
                  <td>Region</td>
                  <td>${this._country.region}</td>
                </tr>
                <tr>
                  <td>Subregion</td>
                  <td>${this._country.subregion}</td>
                </tr>
                <tr>
                  <td>Capital</td>
                  <td>${this._country.capital}</td>
                </tr>
                <tr>
                  <td>Time Zones</td>
                  <td>${this._country.timezones.join(", ")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >${this._country.region ? this._country.region : "-"}</span
            >
            <span
              class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >${this._country.subregion ? this._country.subregion : "-"}</span
            >
          </div>
        </div>
      </a>
      `;
  }
}

customElements.define("country-item", CountryItem);
