import "./App.css";
import Header from "./components/Header/Header";
import OrderDetails from "./components/Order/OrderDetails/OrderDetails";
import OrderList from "./components/Order/OrderList/OrderList";

function App() {
  return (
    <div>
      <Header />
      <OrderDetails />
      <OrderList />
    </div>
  );
}

export default App;
