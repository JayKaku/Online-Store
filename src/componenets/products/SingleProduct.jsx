import React, { Component } from "react";
import Apple from "../../apple.jpg";

export class SingleProduct extends Component {
  render() {
    const { product, addToCart } = this.props;
    return (
      <div className="col s12 m3">
        <div className="card ">
          <div className="card-image">
            <img src={Apple} alt="apple" />
            <span className="card-title">
              {product.name} : Rs {product.price}
            </span>
            <a
              onClick={() => addToCart(product)}
              className="btn-floating halfway-fab waves-effect waves-light red"
            >
              <i className="material-icons">add_shopping_cart</i>
            </a>
          </div>
          <div className="card-content">
            <p>{product.info}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProduct;
