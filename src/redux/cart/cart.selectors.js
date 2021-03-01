import { createSelector } from 'reselect';

// Input Selector : Gets the state and returns a slice, one layer deep usually
const  selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuanity, cartItem) => 
        accumulatedQuanity + cartItem.quantity, 
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuanity, cartItem) => 
        accumulatedQuanity + cartItem.quantity * cartItem.price, 
      0
    )

)
