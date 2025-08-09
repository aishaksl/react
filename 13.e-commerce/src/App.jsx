import "./App.css";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import PageContainer from "./container/PageContainer";
import Loading from "./components/Loading";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { amount, setDrawer, removeFromCard } from "./redux/slices/cardSlice";
import { useEffect } from "react";

function App() {
  const { card, drawer, totalAmount } = useSelector((store) => store.card);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(amount());
  }, []);

  return (
    <div className="h-screen">
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer
          anchor="right"
          open={drawer}
          onClose={() => dispatch(setDrawer())}
        >
          <div className="space-y-10">
            {card &&
              card.map((product) => {
                return (
                  <div className="flex flex-row space-x-4">
                    <img src={product.image} className="w-[100px] h-[100px]" />
                    <div>
                      <p className="w-[300px]">
                        {product.title}({product.count})
                      </p>
                      <p>${product.price}</p>
                      <button
                        className="border-none bg-red-400 px-2 py-1 rounded-md text-xs cursor-pointer"
                        onClick={() => dispatch(removeFromCard(product.id))}
                      >
                        delete
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div>Total Amount: {totalAmount}</div>
        </Drawer>
      </PageContainer>
    </div>
  );
}

export default App;
