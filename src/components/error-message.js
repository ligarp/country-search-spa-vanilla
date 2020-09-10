class ErrorMessage extends HTMLElement {
  set error(error) {
    this._error = error;
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="container text-center m-auto h-auto text-gray-700 font-semi-bold">
        <h1 class="text-2xl">${this._error}</h1>
        </div>
      `;
  }
}

customElements.define("error-message", ErrorMessage);
