import React from "react";

const Liked = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data.map((pro) => {
        return pro.map((elem) => {
          if (elem.isLike === true) {
            return (
              <li>
                <img src={elem.img} alt="" />
                <h3>{elem.name}</h3>
                <h4>{elem.price}</h4>
              </li>
            );
          }
        });
      })}
    </div>
  );
};

export default Liked;
