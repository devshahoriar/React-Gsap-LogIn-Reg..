import React, { useState } from 'react';
import Login from '../login/Login';
import Regstration from '../regstration/Regstration';
import style from './system.module.css';

const System = () => {
  const [isLogin, setisLogin] = useState(true);
  const togol = ()=> {
    setisLogin(!isLogin);
  }
  return (
    <div className={style.sys}>
      {isLogin ? <Login togol={togol}/> : <Regstration togol={togol}/>}
      
    </div>
  );
}

export default System
