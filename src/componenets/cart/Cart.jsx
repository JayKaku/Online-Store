import React, { Component } from "react";
import CartList from "./CartList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase"; // we want to use this as higher order componenet
import { compose } from "redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../store/actions/cartActions";

class Cart extends Component {
  removeFromCart = (product) => {
    this.props.removeFromCart(product);
  };
  render() {
    const { products } = this.props;
    return (
      <div className="conatiner center-align">
        <div className="row">
          <div className="col s12 18">
            <CartList
              products={products}
              removeFromCart={this.removeFromCart}
            />
            <div className="col s12 12 ">
              <Link to="/checkout">
                <button className="btn waves-effect waves-light">
                  Proceed to Checkout
                  <i className="material-icons right">send</i>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    products: state.firestore.ordered.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product) => {
      dispatch(removeFromCart(product));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "cart" }])
)(Cart);

// import React, { Component } from "react";

// export class Cart extends Component {
//   render() {
//     return (
//       <div className="conatiner center-align">
//         <div className="row">
//           <div className="col s12 m7">Cart</div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Cart;
