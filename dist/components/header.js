import { jsx as _jsx } from "react/jsx-runtime";
import { Colors } from '@/lib/constant/color';
export const Header = () => {
    return (_jsx("div", { className: "flex items-center flex-col text-center my-5 ", children: _jsx("div", { className: "flex flex-col gap-2", children: Colors.map((item) => (_jsx("div", { style: {
                    background: item.color,
                }, className: `flex mr-4 flex-col p-4 items-center yellow-400   text-black rounded-lg shadow ${item.color}`, children: _jsx("span", { className: "text-sm font-medium", children: item.label }) }, item.id))) }) }));
};
