import ComingsoonPage from "./views/comingsoon";
import ErrorPage from "./views/404";
import PrivacyPage from "./views/privacy";

const pageConfig = {
    comingsoon:{
        pageClass:"comingsoon-s1 d-flex align-items-center minh-footer-adj",
        title:"Coming soon!",
        text:"We are not ready yet, but starting soon, please come back later."
    },
    privacy:{
        pageClass:"privacy-s1 d-flex align-items-center minh-footer-adj py-5",
        returnNav:{
            link:"/",
            title:"back to Home"
        }
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
        menuItem: false,
        name: "Comingsoon",
        path: "/",
        element: <ComingsoonPage config={pageConfig.comingsoon}/>
    },
    {
        menuItem: false,
        name: "Privacy",
        path: "/privacy",
        element: <PrivacyPage config={pageConfig.privacy}/>
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