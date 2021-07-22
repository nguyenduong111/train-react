import React from "react";

function Product(props) {
    let {match} = props;
    console.log(match);
    let name = match.params.name;

    return(
        <div className="Product">
            <h1> chi tiet san pham: {name} </h1>
        </div>
    );
}

export default Product;
