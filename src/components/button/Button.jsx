import React from 'react';
import style from './button.module.css';

const Button = (props) => {
  return (
    <div className={style.mainButton}>
      <button>{props.children}</button>
    </div>
  );
}

export default Button
