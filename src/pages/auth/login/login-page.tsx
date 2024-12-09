import { Box, Button, Checkbox, Container, FormControlLabel, Link, Paper, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);

    if (data.email === 'test@gmail.com') {
      localStorage.setItem('token', '123');
      navigate('/');
    }
  };

  console.log(errors);
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 8, borderRadius: 2 }}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <Typography variant="h5" component="h1" gutterBottom>
            Sign in to your account
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Email Field */}
            <TextField
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                  message: 'Invalid email address',
                },
              })}
              fullWidth
              defaultValue="test@gmail.com"
              id="email"
              label="Your Email"
              margin="normal"
              variant="outlined"
              error={!!errors.email}
              helperText={(errors.email?.message as string) || ''}
            />


            {/* Password Field */}
            <TextField
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters long',
                },
              })}
              fullWidth
              id="password"
              defaultValue="test123"
              label="Password"
              type="password"
              margin="normal"
              variant="outlined"
              error={!!errors.password}
              helperText={(errors.password?.message as string) || ''}
            />

            {/* Remember Me */}
            <FormControlLabel control={<Checkbox {...register('remember')} color="primary" />} label="Remember me" />

            {/* Submit Button */}
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
              Sign in
            </Button>

            {/* Links */}
            <Box display="flex" justifyContent="space-between">
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
              <Link href="#" variant="body2">
                Don’t have an account? Sign up
              </Link>
            </Box>
          </form>
        </Box>
      </Paper>
    </Container>
  );
};
