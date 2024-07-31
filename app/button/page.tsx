'use client'
import React from 'react';
import styles from './HoverButton.module.css'; 

interface HoverButtonProps {
  onClick: () => void;
}

const HoverButton: React.FC<HoverButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      CreatePost
    </button>
  );
};

export default HoverButton;
