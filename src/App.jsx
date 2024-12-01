import "./App.css";
import OrderForm from "./components/order-form";
import HomePage from "./components/home-page";
import SuccessOrder from "./components/success-order";
import { PageProvider, usePageContext } from "./context";

function App() {
  return (
    <PageProvider>
      <Main />
    </PageProvider>
  );
}

const Main = () => {
  const {currentPage} = usePageContext();

  return (
    <>
      {currentPage === "home" && <HomePage/>}
      {currentPage === "order" && <OrderForm/>}
      {currentPage === "success" && <SuccessOrder/>}
    </>
  );
};

export default App;
