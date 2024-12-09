import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { VehicleBodyInfo } from '../vehicle-body/vehicle-body';
import { VehicleChassisInfo } from '../vehicle-chassis';
import { VehicleInfo } from '../vehicle-info/vehicle-info';
export const DashboardPage = () => {
    return (_jsx("div", { children: _jsxs(Tabs, { defaultValue: "account", children: [_jsxs(TabsList, { children: [_jsx(TabsTrigger, { value: "account", children: "Ara\u00E7 Ruhsat Bilgileri" }), _jsx(TabsTrigger, { value: "body", children: "Ara\u00E7 G\u00F6vdesi Bilgileri" }), _jsx(TabsTrigger, { value: "chassis", children: "Ara\u00E7 \u015Easi Bilgileri" })] }), _jsx(TabsContent, { className: "w-full ", value: "account", children: _jsx(VehicleInfo, {}) }), _jsx(TabsContent, { className: "", value: "body", children: _jsx(VehicleBodyInfo, {}) }), _jsx(TabsContent, { value: "chassis", children: _jsx(VehicleChassisInfo, {}) })] }) }));
};
