export const addToCart = (product) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //making async call to firebase
    //const product = getState().firebase.product;
    const firestore = getFirestore();
    console.log(product);
    firestore.collection("cart").doc(product.id).set({
      id: product.id,
      name: product.name,
      info: product.info,
      price: product.price,
    });
  };
};
