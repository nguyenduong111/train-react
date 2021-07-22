import React, {useEffect} from "react";
import { NavLink, Route } from "react-router-dom";
import Product from "./Product"

let products = [
    {
        id: 1,
        slug: "Iphone-7",
        name: "Iphone 7",
        price: "7.000.000",
    },
    {
        id: 2,
        slug: "Iphone-8",
        name: "Iphone 8",
        price: "10.000.000",
    },
    {
        id: 3,
        slug: "Iphone-X",
        name: "Iphone X",
        price: "15.000.000",
    },
];

function Products(props) {
    let {match, location} = props;
    // console.log(match);
    let url = match.url;


    console.log(location);

    let result = products.map((product, index) => {
        return (
            <div key={index} className="col-xs-4 col-sm-4 col-lg-4 col-md-4">
                <NavLink to={`${url}/${product.name}`}>
                    <div
                        className="card"
                        style={({ width: "10px" }, { margin: "4px 0 0 0" })}
                    >
                        <img src="" className="card-img" alt="" />
                        <div className="card-body">
                            <h5 className="name-product"> {product.name} </h5>
                            <h6 className="price-product">
                                {" "}
                                {`Giá: ${product.price} VND`}{" "}
                            </h6>
                        </div>
                    </div>
                </NavLink>
            </div>
        );
    });

    const keyLocal = location.state.keyLocal;;
    // useEffect( () => {
    //     // keyLocal = location.state.userName;
    //     console.log(location.state.keyLocal);
    //     // keyLocal = ;
        
    // }, []);

    // console.log(location.state.userName);
    // keyLocal = 
    return (
        <div className="Products container">
            <div className="row">
                <h3>Xin chào : {JSON.parse(localStorage.getItem(keyLocal)).userName} </h3>
            </div>

            <div className="row">
                {result}
            </div>

            <div className="row">
                <Route path="/products/:name" component={Product} />    
                {/* :name là cú pháp khai báo 1 params trong match, giá trị phụ thuộc vào đg dẫn to="" của NavLink */}
            </div>
        </div>
    );
}

export default Products;
