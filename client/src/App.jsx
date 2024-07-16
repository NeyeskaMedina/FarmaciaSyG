import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./view/Home/Home.jsx";
import NotFound from "./view/NotFound/NotFound.jsx";
import PharmacyTurn from "./view/PharmacyTurn/PharmacyTurn.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SearchResult from "./view/Search/SearchResult.jsx";
import Login from "../src/view/Login/Login.jsx";
import Extranet from "./view/Private/Extranet.jsx";
import Config from "./view/Configurations/Config.jsx";
import { useAuth } from './context/useAuth.jsx';
import { Box } from "@mui/material";
// import Search from "./components/Navbar/Search.jsx";
import { IoMdSearch } from "react-icons/io";


function App() {
  const { user } = useAuth();
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
            <Route path="/buscar-medicamento/:name" element={<SearchResult />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/farmacia-grecia-extranet/" element={user ? <Extranet /> : <Login />} />
            <Route path="/config" element={user ? <Config /> : <Login />} />
            {/* <Route path="/category/:id/:name" element={<Category />} />
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
              <IoMdSearch 
                  size={30}
                  sx={{
                      flexGrow: 1, 
                      display: { xs: "flex", md: "none", xl: 'none' }, 
                      position: 'fixed',
                      marginBottom: '0'
                  }}
              />
        <footer style={{width: '-moz-available'}}>
                <Footer />
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