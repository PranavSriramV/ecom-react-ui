import { Route, Routes } from "react-router"
import CustomerHome from "./components/customer/CustomerHome"
import FeaturedProductList from "./components/customer/FeaturedProductList"
import ProductList from "./components/customer/ProductList"
import PageNotFound from "./components/PageNotFound"

function App() {

  return (
    <Routes> 
          <Route path="" element={<CustomerHome />}  > 
            <Route path="" element={<FeaturedProductList />}/>
            <Route path="/product/:categoryId" element={<ProductList />}/>
          </Route>
          <Route path="*" element={<PageNotFound />} />

    </Routes>
  )
}

export default App
