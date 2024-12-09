import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
export const RootLayout = ({ children }) => {
    return (_jsxs("div", { className: "max-w-screen-xl h-screen mx-auto relative overflow-hidden ", children: [_jsx(Navbar, {}), _jsx("div", { className: "p-4 mt-20 ", children: children }), _jsx(Footer, {})] }));
};
