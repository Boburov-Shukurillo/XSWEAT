import React from "react";

const Home = ({ cart, setCart, PrductData, setProductData }) => {
  const hadleBuy = (e) => {
    PrductData.map((r) => {
      return r.map((b) => {
        if (b.id === e) {
          b.isCart=true
        }
      });
    });
  };
  return (
    <div>
      {PrductData.map((e) => {
        return e.map((product, index) => {
          if (product.size == 36) {
            // console.log(product);
            return (
              <li
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <img src={product.img} alt="" />
                <h3>{product.name}</h3>
                <button className="roboto" onClick={() => hadleBuy(product.id)}>
                  BUY
                </button>
              </li>
            );
          }
        });
      })}
    </div>
  );
};

export default Home;
