import { Box, Link, Typography } from '@mui/material';
import React from 'react';
import bg from '../../../assets/images/Login/SighUp/Hero Header - Green2 2.png';
import logo from '../../../assets/logos/Login/SighUp/Frame 1410093896.svg';
import Button from '../../../components/button.tsx';
import {
  authLinkStyle,
  bgImageStyle,
  buttonContainerStyle,
  containerStyle,
  footerStyle,
  footerTextStyle,
  headingTextStyle,
  helpTextStyle,
  logoStyle,
  termsTextStyle,
} from '../authStyles.ts';

function Login() {
  return (
    <Box sx={containerStyle}>
      <Box component={'img'} src={logo} alt='Logo' sx={logoStyle} />
      <Typography sx={headingTextStyle}>Athletes Rise and Fans Win</Typography>
      <Box component={'img'} src={bg} sx={bgImageStyle}></Box>
      <Box sx={buttonContainerStyle}>
        <Button text={'Google'} variant={'google'} />
        <Button variant={'primary'} text='Signup with email' />

        <Typography sx={termsTextStyle}>
          By signing up, you agree to our <br /> <Link color='#009dff'>Terms of Service</Link> and{' '}
          <Link color='#009dff'>Privacy Policy.</Link>
        </Typography>
        <Typography sx={helpTextStyle}>
          Having trouble? <Link color='#009dff'>Contact us.</Link>
        </Typography>
      </Box>

      <Box sx={footerStyle}>
        <Typography sx={footerTextStyle}>Already have an account?</Typography>
        <Link sx={authLinkStyle}>Login</Link>
      </Box>
    </Box>
  );
}

export default Login;
