import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Button, Checkbox, Container, FormControlLabel, Link, Paper, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
export const LoginPage = () => {
    var _a, _b;
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const onSubmit = (data) => {
        console.log('Form Data:', data);
        if (data.email === 'test@gmail.com') {
            localStorage.setItem('token', '123');
            navigate('/');
        }
    };
    console.log(errors);
    return (_jsx(Container, { component: "main", maxWidth: "xs", children: _jsx(Paper, { elevation: 3, sx: { padding: 4, marginTop: 8, borderRadius: 2 }, children: _jsxs(Box, { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", children: [_jsx(Typography, { variant: "h5", component: "h1", gutterBottom: true, children: "Sign in to your account" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), noValidate: true, children: [_jsx(TextField, Object.assign({}, register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                                    message: 'Invalid email address',
                                },
                            }), { fullWidth: true, defaultValue: "test@gmail.com", id: "email", label: "Your Email", margin: "normal", variant: "outlined", error: !!errors.email, helperText: ((_a = errors.email) === null || _a === void 0 ? void 0 : _a.message) || '' })), _jsx(TextField, Object.assign({}, register('password', {
                                required: 'Password is required',
                                minLength: {
                                    value: 6,
                                    message: 'Password must be at least 6 characters long',
                                },
                            }), { fullWidth: true, id: "password", defaultValue: "test123", label: "Password", type: "password", margin: "normal", variant: "outlined", error: !!errors.password, helperText: ((_b = errors.password) === null || _b === void 0 ? void 0 : _b.message) || '' })), _jsx(FormControlLabel, { control: _jsx(Checkbox, Object.assign({}, register('remember'), { color: "primary" })), label: "Remember me" }), _jsx(Button, { type: "submit", fullWidth: true, variant: "contained", color: "primary", sx: { mt: 3, mb: 2 }, children: "Sign in" }), _jsxs(Box, { display: "flex", justifyContent: "space-between", children: [_jsx(Link, { href: "#", variant: "body2", children: "Forgot password?" }), _jsx(Link, { href: "#", variant: "body2", children: "Don\u2019t have an account? Sign up" })] })] })] }) }) }));
};
