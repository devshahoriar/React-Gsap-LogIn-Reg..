import React from 'react';
import style from './textbutton.module.css';

const TextButton = (props) => {
  return <button onClick={props.click} className={style.textBtn}>{props.children}</button>;
}

export default TextButton
