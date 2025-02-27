import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'outline' | 'filled'; 
  onClick?: () => void;
  children: React.ReactNode;
  isDisabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', variant, onClick, children, className }) => {
  return (
    <button type={type} className={`btn ${variant} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button; 