class DetailHeader extends HTMLElement {
  set title(title) {
    this._title = title;
    this.render();
  }

  render() {
    this.innerHTML = `
    <header
        class="bg-green-500 w-full h-32 md:h-56 lg:h-64 mx-auto px-1 md:px-4 lg:px-4 flex flex-col justify-center"
        >
        <h3
            class="font-serif text-center text-4xl subpixel-antialiased text-white mb-4"
        >
            ${this._title}
        </h3>
        <a href="#!/" class="mx-auto">
        <button class="w-full bg-transparent hover:bg-green-700 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full mx-2 ">
            Back
        </button>
        </a>
    </header>
    `;
  }
}

customElements.define("detail-header", DetailHeader);
