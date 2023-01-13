import ForgotPassword from "../pages/authentication/ForgotPassword";
import Login from "../pages/authentication/login/Login";
import Logout from "../pages/authentication/Logout";
import PrivacyAndPolicy from "../pages/authentication/PrivacyAndPolicy";
import Registration from "../pages/authentication/registration/Registration";
import TermsAndCondition from "../pages/authentication/TermsAndCondition";
import VerifyOTP from "../pages/authentication/VerifyOTP";
import Dashboard from "../pages/dashboard/Dashboard";
import OrderDetails from "../pages/ecommerce/order-details/OrderDetails";
import Orders from "../pages/ecommerce/orders/Orders";
import ProductDetails from "../pages/ecommerce/product-detials/ProductDetails";
import Products from "../pages/ecommerce/products/Products";

export const publicRoutes = [
	{id: 1, path: "/login", Page: Login},
	{id: 2, path: "/logout", Page: Logout},
	{id: 3, path: "/registration", Page: Registration},
	{id: 4, path: "/forgot-password", Page: ForgotPassword},
	{id: 5, path: "/privacy-and-policy", Page: PrivacyAndPolicy},
	{id: 6, path: "/terms-and-conditions", Page: TermsAndCondition},
	{id: 7, path: "/", Page: Dashboard},
	{id: 8, path: "/products", Page: Products},
	{id: 9, path: "/product-details", Page: ProductDetails},
	{id: 10, path: "/orders", Page: Orders},
	{id: 11, path: "/order-details", Page: OrderDetails},
	{id: 12, path: "/verify-otp/:num", Page: VerifyOTP},
];
