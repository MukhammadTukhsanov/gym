import { styled } from '@mui/material';
import MuiButton, { ButtonProps } from '@mui/material/Button';
import React from 'react';
import GoogleIcon from '../assets/icons/Login/SighUp/Group 1432.svg';

type ButtonVariant = 'google' | 'primary' | ButtonProps['variant'];

interface MyButtonProps extends Omit<ButtonProps, 'variant'> {
  text: string;
  variant?: ButtonVariant;
}

const GoogleButton = styled(MuiButton)(({ theme }) => ({
  backgroundColor: '#303030',
  color: '#fff',
  fontWeight: '600',
  fontSize: '15.04px',
  height: '44px',
  border: '1px solid rgba(43, 182, 169, 0.25)',
  textTransform: 'capitalize',
  borderRadius: '8px',
  maxWidth: '500px',
}));

const PrimaryButton = styled(MuiButton)(({ theme }) => ({
  maxWidth: '500px',
  backgroundColor: '#2bb6a8',
  height: '44px',
  color: '#fff',
  textTransform: 'none',
  fontWeight: 600,
  fontSize: '14px',
  borderRadius: '8px',
}));

const Button: React.FC<MyButtonProps> = ({ text, variant = 'contained', ...props }) => {
  switch (variant) {
    case 'google':
      return (
        <GoogleButton
          fullWidth
          startIcon={<img src={GoogleIcon} width={'19px'} height={'19px'} alt='logo' />}
        >
          {text}
        </GoogleButton>
      );
    case 'primary':
      return <PrimaryButton fullWidth>{text}</PrimaryButton>;
    default:
      return <MuiButton>{text}</MuiButton>;
  }
};
export default Button;
