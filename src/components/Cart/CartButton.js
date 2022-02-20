import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./../../store/uiSlice";
const CartButton = (props) => {
  const dispatch = useDispatch();
  function toggleCartHandler() {
    // toggle() --> action creator method
    dispatch(uiActions.toggle());
  }
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
