const ProductFilters = () => {
  return (
    <section className="flex justify-center items-center py-8">
      <input
        type="radio"
        name="filter-selection"
        className="hidden"
        id="filter0"
      />
      <label
        className="rounded-full border-2 border-gray-300 px-4 py-2 mx-2 cursor-pointer selected:filter0:checked:bg-blue-500"
        htmlFor="filter0"
      >
        Todos
      </label>

      <input
        type="radio"
        name="filter-selection"
        className="hidden"
        id="filter1"
      />
      <label
        className="rounded-full border-2 border-gray-300 px-4 py-2 mx-2 cursor-pointer selected:filter1:checked:bg-blue-500"
        htmlFor="filter1"
      >
        Masculino
      </label>

      <input
        type="radio"
        name="filter-selection"
        className="hidden"
        id="filter2"
      />
      <label
        className="rounded-full border-2 border-gray-300 px-4 py-2 mx-2 cursor-pointer selected:filter2:checked:bg-blue-500"
        htmlFor="filter2"
      >
        Feminino
      </label>
    </section>
  );
};

export default ProductFilters;
