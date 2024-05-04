import React from 'react'
import './Header.css';

type HeaderProps = {
  title: string;
  leftChild: React.ReactNode;
  rightChild: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({title, leftChild, rightChild}) => {
  return (
    <header className='Header'>
      <div className='Header_left'>{leftChild}</div>
      <div className='Header_center'>{title}</div>
      <div className='Header_right'>{rightChild}</div>
    </header>
  )
}

export default Header