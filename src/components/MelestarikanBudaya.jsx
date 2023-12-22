import React from "react";
const MelestarikanBudaya = () => {
  return (
    <div className="container mt-5">
      <div className="row melestarikan border border-danger">
        <div className="col-lg-6 col-12 h-100 border pe-lg-0">
          <img
            src="../../public/melestarikan.jpg"
            className="w-100 h-100 object-fit-cover"
            alt=""
          />
        </div>
        <div className="col-lg-6 col-12 bg-secondary-subtle d-flex align-items-center">
          <div>
            <h2 className="mb-3">
              Ayo bersama kita lestarikan budaya Indonesia
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              architecto consequuntur aperiam. Perspiciatis ullam velit quo fuga
              eius dolores inventore ex earum perferendis! Aut nihil optio
              quaerat minima fugiat voluptates?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MelestarikanBudaya;
