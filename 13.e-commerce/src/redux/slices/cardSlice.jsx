import { createSlice } from "@reduxjs/toolkit";

const getCardFromStorage = () => {
  if (localStorage.getItem("card")) {
    return JSON.parse(localStorage.getItem("card"));
  }
  return [];
};

const initialState = {
  card: getCardFromStorage(),
  drawer: false,
  totalAmount: 0,
};

const addCardToStorage = (card) => {
  localStorage.setItem("card", JSON.stringify(card));
};

export const cardSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addtoCard: (state, action) => {
      const findProduct =
        state.card &&
        state.card.find((product) => product.id === action.payload.id);
      if (findProduct) {
        const extractedCard = state.card.filter(
          (product) => product.id != action.payload.id
        );

        findProduct.count += action.payload.count;
        state.card = [...extractedCard, findProduct];
        addCardToStorage(state.card);
      } else {
        state.card = [...state.card, action.payload];
        addCardToStorage(state.card);
      }
    },
    setDrawer: (state) => {
      state.drawer = !state.drawer;
    },

    amount: (state) => {
      state.totalAmount = 0;
      state.card &&
        state.card.map((product) => {
          state.totalAmount += product.price * product.count;
        });
    },
    removeFromCard: (state, action) => {
      state.card = state.card.filter(
        (product) => product.id !== action.payload
      );
      addCardToStorage(state.card);
    },
  },
});

export const { addtoCard, setDrawer, amount, removeFromCard } =
  cardSlice.actions;
export default cardSlice.reducer;
