import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const CartContext = createContext();
//  REDDUCER HANDLING CART ACTIONS UPDATE DELETE AND ADD QUNATITY AND ITEMS
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEMS": {
      const { items, quantity } = action.payload;
      const existingItem = state.find((i) => i.id === items.id);
      if (existingItem) {
        return state.map((i) => (i.id === items.id ? { ...i, quantity } : i));
      }
      return [...state, { ...items, quantity }];
    }
    case "REMOVE_ITEM": {
      return state.filter((i) => i.id !== action.payload.itemsId);
    }
    case "UPDATE_ITEMS": {
      const { itemsId, newQuantity } = action.payload;
      return state.map((i) =>
        i.id === itemsId ? { ...i, quantity: Math.max(1, newQuantity) } : i
      );
    }
    default:
      return state;
  }
};

// INITIALIZE CART FROM LOCALSTORAGE

const initializer = () => {
  if (typeof window !== "undefined") {
    const localCart = localStorage.getItem("cart");
    return localCart ? JSON.parse(localCart) : [];
  }
  return [];
};

export const CartProvider = ({ children }) => {
  const [totalItems, setTotalItems] = useState("");
  const [cartItems, dispatch] = useReducer(cartReducer, [], initializer);

  // PERSIST CART STATE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // CALCULATE COST AND ITEMS COUNT
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalItemsCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  //  FORMAT TOTAL ITEMS IN POWER FORM

  const formatTotalItems = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num;
  };

  // DISPATCHER WRAPPED WITH CALLBACK FOR BETTER PERFORMANCE

  const addToCart = useCallback((items, quantity) => {
    dispatch({ type: "ADD_ITEMS", payload: { items, quantity } });
  }, []);
  const removeFromCart = useCallback((itemsId) => {
    dispatch({ type: "REMOVE_ITEM", payload: { itemsId } });
  }, []);
  const updateQuantity = useCallback((itemsId, newQuantity) => {
    dispatch({ type: "UPDATE_ITEMS", payload: { itemsId, newQuantity } });
  }, []);

  return (
    <CartContext.Provider
      value={{
        totalItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartItems,
        cartTotal,
        totalItemsCount: formatTotalItems(totalItemsCount),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
