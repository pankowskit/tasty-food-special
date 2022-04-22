import AboutPage from "./views/about";
import CartPage from "./views/cart";
import ComingsoonPage from "./views/comingsoon";
import ErrorPage from "./views/404";
import HomePage from "./views/home";
import LocationPage from "./views/location";
import PrivacyPage from "./views/privacy";
import ProductsPage from "./views/products";

const pageConfig = {
    about:{
        pageClass:"minh-footer-adj",
    },
    cart:{
        pageClass:"minh-footer-adj",
    },
    comingsoon:{
        pageClass:"comingsoon-s1 d-flex align-items-center minh-footer-adj",
        title:"Coming soon!",
        text:"We are not ready yet, but starting soon, please come back later."
    },
    home:{
        pageClass:"minh-footer-adj",
    },
    location:{
        pageClass:"minh-footer-adj",
    },
    privacy:{
        pageClass:"privacy-s1 d-flex align-items-center minh-footer-adj py-5",
        returnNav:{
            link:"/",
            title:"back to Home"
        }
    },
    products:{
        pageClass:"minh-footer-adj",
    },
    error:{
        pageClass:"error-s1 d-flex align-items-center minh-footer-adj py-5",
        title:"Error",
        text:"Page not found.",
        returnNav:{
            link:"/",
            title:"back to Home"
        }
    }
};

const paths=[
    {
        menuItem: true,
        name: "About",
        path: "/about",
        element: <AboutPage config={pageConfig.about}/>
    },
    {
        menuItem: true,
        name: "Cart",
        path: "/cart",
        element: <CartPage config={pageConfig.cart}/>
    },
    {
        menuItem: false,
        name: "Comingsoon",
        path: "/comingsoon",
        element: <ComingsoonPage config={pageConfig.comingsoon}/>
    },
    {
        menuItem: true,
        name: "Home",
        path: "/",
        element: <HomePage config={pageConfig.home}/>
    },
    {
        menuItem: true,
        name: "Location",
        path: "/location",
        element: <LocationPage config={pageConfig.location}/>
    },
    {
        menuItem: false,
        name: "Privacy",
        path: "/privacy",
        element: <PrivacyPage config={pageConfig.privacy}/>
    },
    {
        menuItem: true,
        name: "Products",
        path: "/products",
        element: <ProductsPage config={pageConfig.products}/>
    },
    {
        menuItem: false,
        name: "Error",
        path: "*",
        element: <ErrorPage config={pageConfig.error}/>
    }
];

export {
    paths
};