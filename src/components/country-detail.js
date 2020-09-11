class CountryDetail extends HTMLElement {
  set country(country) {
    this._country = country;
    this.render();
  }

  render() {
    this.innerHTML = `
      <h1 class="text-4xl text-bold text-gray-900 mb-4">${
        this._country.name
      }</h1>
      <div class="country-detail">
        <div>
          <table class="table-fixed w-full">
            <thead>
              <tr>
                <th colspan="2" class="text-lg">Flag</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border px-4 py-6" colspan="2">
                  <img
                    class="object-cover h-auto w-full"
                    src="${this._country.flag}"
                    alt="Afghanistan"
                  />
                </td>
              </tr>
            </tbody>
            <thead>
              <tr>
                <th colspan="2" class="text-lg">Names</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Common</td>
                <td>${this._country.name}</td>
              </tr>
              <tr>
                <td>Native Name</td>
                <td>${this._country.nativeName}</td>
              </tr>
              <tr>
                <td>Alternative Name</td>
                <td>
                ${this._country.altSpellings.join(", ")}
                </td>
              </tr>
              <tr></tr>

              <td>Translations</td>
              <td>
              <a href="#!/de"> ${this._country.translations.de} (de)</a> <br>
              <a href="#!/es"> ${this._country.translations.es} (es)</a> <br>
              <a href="#!/fr"> ${this._country.translations.fr} (fr)</a> <br>
              <a href="#!/ja"> ${this._country.translations.ja} (ja)</a> <br>
              <a href="#!/it"> ${this._country.translations.it} (it)</a> <br>
              <a href="#!/br"> ${this._country.translations.br} (br)</a> <br>
              <a href="#!/pt"> ${this._country.translations.pt} (pt)</a> <br>
              <a href="#!/nl"> ${this._country.translations.nl} (nl)</a> <br>
              <a href="#!/hr"> ${this._country.translations.hr} (hr)</a> <br>
              <a href="#!/fa"> ${this._country.translations.fa} (fa)</a>
              </td>
            </tbody>
          </table>
        </div>
        
        <div>
          <table class="mb-5 table-fixed w-full">
            <thead>
              <tr>
                <th colspan="2" class="text-lg">Languages</th>
              </tr>
            </thead>
            <tbody>
            <tr>
            <td colspan="2">${this._country.languages.map(
              (lang) => lang.name + " (" + lang.nativeName + ")"
            )}
            </td>
            </tr>
            </tbody>
          </table>
          <table class="table-fixed w-full mb-5">
            <thead>
              <tr>
                <th colspan="2" class="text-lg">Codes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ISO 3166-1 alpha-2</td>
                <td>${this._country.alpha2Code}</td>
              </tr>
              <tr>
                <td>ISO 3166-1 alpha-3</td>
                <td>${this._country.alpha3Code}</td>
              </tr>
              <tr>
                <td>ISO 3166-1 numeric</td>
                <td>${this._country.numericCode}</td>
              </tr>
              <tr>
                <td>International calling code</td>
                <td>${this._country.callingCodes.map((num) => {
                  return num + "<br>";
                })}</td>
              </tr>
              <tr>
                <td>Currency</td>
                <td>${this._country.currencies.map((currency) => {
                  return currency.code + " (" + currency.symbol + ")";
                })}</td>
              </tr>
              <tr>
                <td>Top level domain</td>
                <td>${this._country.topLevelDomain}</td>
              </tr>
            </tbody>
          </table>
          <table class="table-fixed w-full">
            <thead>
              <tr>
                <th colspan="2" class="text-lg">Geography</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Region</td>
                <td>${this._country.region ? this._country.region : "-"}</td>
              </tr>
              <tr>
                <td>Subregion</td>
                <td>${
                  this._country.subregion ? this._country.subregion : "-"
                }</td>
              </tr>
              <tr>
                <td>Capital Name</td>
                <td>${this._country.capital}</td>
              </tr>
              <tr>
                <td>Border</td>
                <td>
                ${this._country.borders.map((country) => {
                  return "<a href='#!/" + country + "'>" + country + "</a>";
                })}
                </td>
              </tr>
              <tr>
                <td>Lat/Long</td>
                <td>
                <a href="https://www.openstreetmap.org/#map=5/${
                  this._country.latlng[0]
                }/${this._country.latlng[1]}" title="Click to view ${
      this._country.nativeName
    } on Map">${this._country.latlng.join(", ")}</a></td>
              </tr>
              <tr>
                <td>Area</td>
                <td>${this._country.area} km²</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}

customElements.define("country-detail", CountryDetail);
