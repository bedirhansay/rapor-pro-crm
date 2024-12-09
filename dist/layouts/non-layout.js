import { jsx as _jsx } from "react/jsx-runtime";
export const NonLayout = ({ children }) => {
    return (_jsx("div", { className: "h-screen overflow-x-hidden", children: _jsx("main", { children: children }) }));
};
