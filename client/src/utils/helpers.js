export const inCart = (cart, product) => {
    return cart.find(item => item._id === product._id);
}