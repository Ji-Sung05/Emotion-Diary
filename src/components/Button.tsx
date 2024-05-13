import React from 'react'
import './Button.css';

type ButtonProps = {
  text: string;
  type?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, type, onClick}) => {
  return (
    <button onClick={onClick} className={`Button Button_${type}`}>{text}</button>
  )
}

export default Button