//app.jsx
import "./App.css";
import FormData from "./Components/FormData";
import ProductTable from "./Components/ProductTable";
import { MyProvider } from "./Context/checkLocalstorage";
function App() {
  return (
    <>
      <MyProvider>
        <FormData />
        <ProductTable />
      </MyProvider>
    </>
  );
}

export default App;
