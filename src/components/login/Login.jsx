import { gsap, Power4 } from 'gsap';
import React, { useEffect, useRef } from 'react';
import Button from '../button/Button';
import InputBox from '../inputbox/InputBox';
import TextButton from '../textButton/TextButton';
import backImg from './backGround.png';
import style from './login.module.css';

const Login = (props) => {
  const imageDiv = useRef(null);
  const textDiv = useRef(null);
  const mainDiv = useRef(null);
  
  var tl = gsap.timeline();

  const clicb = () => {
    tl.reverse();
    tl.then(()=>{props.togol()})
  };

  useEffect(() => {
    setTimeout(() =>{
      mainDiv.current.style.opacity = 1;
    },200)
    
    tl.from(imageDiv.current, { ease: Power4.easeIn, x: -700, duration:1 });
    tl.from(textDiv.current, { ease: Power4.easeIn, x: 700, duration:1}, -.0);
    
  });

  return (
    <div ref={mainDiv} className={style.innerSys}>
      <div
        ref={imageDiv}
        className={style.imageDiv}
        style={{ backgroundImage: `url(${backImg})` }}
      ></div>
      <div ref={textDiv} className={style.textDiv}>
        <div className={style.textDivInner}>
          <h1>Login Account</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
            volutpat. Ut wisi enim ad minim veniam, quis nos
          </p>
          <InputBox place="Email Id" />
          <InputBox place="Password" />
          <TextButton click={clicb}>Need account?</TextButton>
          <Button>Sign In</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
