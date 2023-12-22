import React from "react";
// import category1 from "../../public/category/category1.jpg";
// import category2 from "../../public/category/category2.png";
// import category3 from "../../public/category/category3.jpeg";
// import category4 from "../../public/category/category4.png";
import { Link } from "react-router-dom";
import dataKategori from "../data/dataKategori";
const CategoryHome = () => {
  return (
    <div className="container mt-5" id="kategori-budaya">
      <h2>Kategori Budaya</h2>
      <div className="row w-100 mt-4">
        {dataKategori.map((kategori) => (
          <Link
            to={`/kategori/${kategori.path}`}
            className="card-category col-lg-3 col-6 px-4 text-decoration-none text-black2"
            key={kategori.id}
          >
            <div style={{ height: "130px" }}>
              <img
                src={kategori.image}
                alt=""
                className="w-100 h-100 rounded-3"
              />
            </div>
            <h5 className="mt-1">{kategori.nama}</h5>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryHome;
