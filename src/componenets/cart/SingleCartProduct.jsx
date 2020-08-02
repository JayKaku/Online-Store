import React, { Component } from "react";
import Apple from "../../apple.jpg";

export class SingleCartProduct extends Component {
  render() {
    const { product, removeFromCart } = this.props;
    return (
      <div>
        <button onClick={() => removeFromCart(product)}>
          <div>
            <div className="card horizontal">
              <div className="card-image">
                <img src={Apple} alt="" />
              </div>
              <div className="card-stacked">
                <div className="card-title">
                  <span className="card-title">
                    {product.name} : Rs {product.price}
                  </span>
                </div>
                <div className="card-content">
                  <p>{product.info}</p>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    );
  }
}

export default SingleCartProduct;
