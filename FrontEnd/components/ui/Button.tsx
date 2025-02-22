import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'outline' | 'filled'; 
  onClick?: () => void;
  children: React.ReactNode;
  isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', variant, onClick, children }) => {
  return (
    <button type={type} className={`btn ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button; 