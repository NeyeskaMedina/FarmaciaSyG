import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./view/Home/Home.jsx";
import NotFound from "./view/NotFound/NotFound.jsx";
import PharmacyTurn from "./view/PharmacyTurn/PharmacyTurn.jsx";

//Context
// import { useAuth } from './context/AuthContext';


function App() {
  // const { user } = useAuth();
  // const location = useLocation();
  // const isWalletRoute = location.pathname === '/wallet';

    return (
      <div className='gridApp'>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/Farmacia-de-turno" element={<PharmacyTurn />} />
            {/* <Route path="/sobre-nosotros" element={<AboutUs />} />
            <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/register" element={<Register />} />
            <Route path="/category/:id/:name" element={<Category />} />
            <Route path="/resultados/:name" element={<SearchResult />} />
            <Route path="/admin" element={<AdminUserProfile />} />
            <Route path="/seller" element={<SellerUserProfile />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/payment-methods" element={<PaymentMethods />} />
            <Route path="/details-product/:id" element={<DetailsProducts />} />
            <Route path="/last-shopping" element={<LastShopping />} />
            <Route path="/purchase-thanks" element={<PurchaseThanks />} />
            <Route path="/yours-publication" element={<SellerPublications />} />
            <Route path="/publication" element={<Publications />} />
            <Route path="/latest-posts" element={<LatestPosts />} />
            <Route path="/list-products" element={<ListProducts />} />
            <Route path="/list-users" element={<ListUsers />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/accept-publication" element={<AcceptPublications />} />
            <Route path="/list-favorites" element={<ListFavorites />} /> */}
            <Route path="*" element={<NotFound />} />


          </Routes>
        </main>
        <footer>
          {/* <Footer /> */}
        </footer>
      </div>
    );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}