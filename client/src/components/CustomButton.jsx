import React from 'react';
import styles from '../styles';

const CustomButton = ({title, handleClick, restStyles }) => {
  return (
    <div>
      <button 
      type='button'
      className={`${styles.btn} ${restStyles}`}
      onClick = {handleClick}
      >
      {title}
      </button> 
    </div>
  )
}

export default CustomButton;
