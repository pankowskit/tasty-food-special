import {shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Routes, {
    AboutPage,
    CartPage,
    ErrorPage,
    HomePage,
    LocationPage,
    PrivacyPage,
    ProductsPage} from './App';
import {Route} from "react-router-dom";
import ComingsoonPage from "./views/comingsoon";

configure({adapter: new Adapter()});

describe('Router tests', () => {
    let pathMap;
    beforeAll(() => {
        const component = shallow(<Routes/>);
        pathMap = component.find(Route).reduce((pathMap, route) => {
            const routeProps = route.props();
            pathMap[routeProps.path] = routeProps.component;
            return pathMap;
        }, {});
    });
    it('Should show 404 error page for /xxx route', () => {
        expect(pathMap['/xxx']).toBe(ErrorPage);
    });
    it('Should show about page for /about route', () => {
        expect(pathMap['/about']).toBe(AboutPage);
    });
    it('Should show cart page for /cart route', () => {
        expect(pathMap['/cart']).toBe(CartPage);
    });
    it('Should show home page for / route', () => {
        expect(pathMap['/']).toBe(HomePage);
    });
    it('Should show location page for /location route', () => {
        expect(pathMap['/location']).toBe(LocationPage);
    });
    it('Should show privacy page for /privacy route', () => {
        expect(pathMap['/privacy']).toBe(PrivacyPage);
    });
    it('Should show products page for /products route', () => {
        expect(pathMap['/products']).toBe(ProductsPage);
    });
});