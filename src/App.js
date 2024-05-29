import './App.css';
import './components/main.css'
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { CartProvider } from './context/GlobalContext';

function App() {
  return (
    <CartProvider>
      

    <div className="container">
      <h1>PRODUCT LIST</h1>

      {/* Render the ProductList and Cart Component */}
      <ProductList/>

      <Cart />

    </div>


    </CartProvider>
  );
}

export default App;
