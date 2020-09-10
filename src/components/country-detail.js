class CountryDetail extends HTMLElement {
  set country(country) {
    this._country = country;
    this.render();
  }

  render() {
    console.log(this._country);
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
                <td class="border px-4 py-2">Common</td>
                <td class="border px-4 py-2">${this._country.name}</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Native Name</td>
                <td class="border px-4 py-2">${this._country.nativeName}</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Alternative Name</td>
                <td class="border px-4 py-2">
                ${this._country.altSpellings.join(", ")}
                </td>
              </tr>
              <tr></tr>

              <td class="border px-4 py-2">Translations</td>
              <td class="border px-4 py-2">
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
            ${this._country.languages.map((lang) => {
              return (
                " <tr> <td>" +
                lang.name +
                "</td> <td>" +
                lang.nativeName +
                "</td> </tr> "
              );
            })}
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
                <td class="border px-4 py-2">ISO 3166-1 alpha-2</td>
                <td class="border px-4 py-2">AF</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">ISO 3166-1 alpha-3</td>
                <td class="border px-4 py-2">AFG</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">ISO 3166-1 numeric</td>
                <td class="border px-4 py-2">004</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">International calling code</td>
                <td class="border px-4 py-2">93</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">ISO 4217 currency code</td>
                <td class="border px-4 py-2">AFN</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Top level domain</td>
                <td class="border px-4 py-2">.af</td>
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
                <td class="border px-4 py-2">Region</td>
                <td class="border px-4 py-2">${
                  this._country.region ? this._country.region : "-"
                }</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Subregion</td>
                <td class="border px-4 py-2">${
                  this._country.subregion ? this._country.subregion : "-"
                }</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Capital Name</td>
                <td class="border px-4 py-2">${this._country.capital}</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Border</td>
                <td class="border px-4 py-2">
                ${this._country.borders.map((country) => {
                  return "<a href='#!/" + country + "'>" + country + "</a>";
                })}
                </td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Lat/Long</td>
                <td class="border px-4 py-2">33, 65</td>
              </tr>
              <tr>
                <td class="border px-4 py-2">Area</td>
                <td class="border px-4 py-2">652230km²</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}

customElements.define("country-detail", CountryDetail);
