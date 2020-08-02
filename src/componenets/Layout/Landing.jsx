import React, { Component } from "react";
import ProductList from "../products/ProductList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase"; // we want to use this as higher order componenet
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { addToCart } from "../../store/actions/productActions";

class Landing extends Component {
  addToCart = (product) => {
    this.props.addToCart(product);
  };
  render() {
    const { products } = this.props;
    return (
      <div className="conatiner center-align">
        <div className="row">
          <div className="col s12">
            <ProductList products={products} addToCart={this.addToCart} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    products: state.firestore.ordered.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      dispatch(addToCart(product));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "products" }])
)(Landing);
