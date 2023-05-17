import { Route, Routes } from "react-router-dom";
import { HomeView, ContactView, All, ProductDetailsView } from "../pages"
import { Navbar, Footer } from "../components";
import ProductsByCategory from "../pages/categories/PrByCategory";

const MainRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/products" element={<All />} />
                <Route path="/contact" element={<ContactView />} />
                <Route path="/product/:id" element={<ProductDetailsView />} />
                <Route path="/category/:category" element={<ProductsByCategory />} />
            </Routes>
            <Footer />
        </>
    );
};

export default MainRoutes;
