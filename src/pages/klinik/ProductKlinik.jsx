import { Link } from "react-router-dom";
import { product } from "../../data/product.jsx";
export default function ProductKlinik() {
  return (
    <div className="p-6">

      {/* CARD */}
      <div className="bg-white rounded-2xl shadow-md p-6">

        {/* HEADER */}
        <div className="flex items-start justify-between mb-5">

          <div>
            <h1 className="text-3xl font-bold">
              Products
            </h1>

            <p className="text-gray-400">
              Dashboard / Product List
            </p>
          </div>

          {/* BUTTON */}
          <button className="bg-gray-100 w-12 h-12 rounded-xl text-gray-400 text-2xl hover:bg-gray-200">
            ...
          </button>

        </div>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Cari produk..."
          className="w-full border rounded-lg px-4 py-2 mb-5 outline-none focus:ring-2 focus:ring-emerald-400"
        />

        {/* TABLE HEADER */}
        <div className="grid grid-cols-3 bg-emerald-500 text-white px-4 py-3 rounded-t-lg font-semibold">
          <span>#</span>
          <span>Name</span>
          <span>Category</span>
        </div>

        {/* TABLE DATA */}
        {product.map((item, index) => (
          <div
            key={item.id}
            className="grid grid-cols-3 px-4 py-3 border-b hover:bg-gray-50"
          >

            {/* NUMBER */}
            <span>{index + 1}.</span>

            {/* PRODUCT LINK */}
            <span>
              <Link
                to={`/products/${item.id}`}
                className="text-emerald-500 hover:text-emerald-700"
              >
                {item.title}
              </Link>
            </span>

            {/* CATEGORY */}
            <span>{item.category}</span>

          </div>
        ))}

      </div>
    </div>
  );
}