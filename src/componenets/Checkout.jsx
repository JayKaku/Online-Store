import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Checkout extends Component {
  render() {
    const { products } = this.props;
    console.log("hey Jay", products);
    var total = 0;
    return (
      <div className="container center-align">
        <table className="striped">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Price</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => {
                total += product.price;
                return (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <span className="badge"> Grand Total : Rs{total}</span>
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

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "cart" }])
)(Checkout);

/* <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Price</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Eclair</td>
              <td>$0.87</td>
            </tr>
            <tr>
              <td>Jellybean</td>
              <td>$3.76</td>
            </tr>
            <tr>
              <td>Lollipop</td>
              <td>$7.00</td>
            </tr>
          </tbody>
        </table> */

// products = undefined ? (
//  return ( <div className="container"> Cart Empty...</div>);
// ):(

// )

/* 
{products.map((product) => {
          return (
            <div className="container">
              <table>
                <thead>
                  <th>{product.name}</th>
                </thead>
                <tbody>
                  <tr>
                    <td>{product.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}        
*/
/*

    const layout = products.map((product) => {
      return (
        <div className="container">
          <table>
            <thead>
              <th>{product.name}</th>
            </thead>
            <tbody>
              <tr>
                <td>{product.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    });


*/

/* 

 <div className="container" key={product.id}>
                <table>
                  <thead>
                    <th>{product.name}</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{product.price}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

*/
