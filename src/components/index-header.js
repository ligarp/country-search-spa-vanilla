class IndexHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header
        class="bg-green-500 w-full h-40 md:h-56 lg:h-64 mx-auto px-4 flex flex-col justify-center"
        >
        <h3
            class="font-serif text-center text-2xl subpixel-antialiased text-white mb-4"
        >
            Find Coutry Information
        </h3>
        <input
            id="search"
            class="bg-white w-3/4 md:w-2/4 lg:w-1/4 xl:w-1/4 focus:outline-none focus:shadow-outline border border-green-300 rounded-lg py-2 px-4 mx-auto block appearance-none leading-normal"
            type="text"
            placeholder="Search Country"
        />
        </header>
      `;
  }
}

customElements.define("index-header", IndexHeader);