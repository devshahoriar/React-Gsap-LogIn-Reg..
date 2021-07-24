import gsap, { Power4 } from 'gsap/gsap-core';
import React, { useEffect, useRef } from 'react';
import Button from '../button/Button';
import InputBox from '../inputbox/InputBox';
import TextButton from '../textButton/TextButton';
import backImg from './backGround.png';
import style from './regstration.module.css';


const Regstration = (props) => {
  const mainReg = useRef(null);
   var tl = gsap.timeline();
   const clicb = () => {
     tl.reverse();
     tl.then(() => {
       props.togol();
     });
   };

  useEffect(() => {
    console.log(mainReg.current);
    setTimeout(() => {
      mainReg.current.style.opacity = 1;
    }, 100);
    tl.from(mainReg.current, {
      css: { scale: 0 },
      duration: 1.5,
      ease: Power4.easeIn,
    });

  })

  return (
    <>
      <div ref={mainReg} className={style.mainReg}>
        <div className={style.innerReg}>
          <div className={style.textDiv}>
            <div className={style.textDivInner}>
              <h1>registration</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nos
              </p>
              <InputBox place="Name" />
              <InputBox place="Email Id" />
              <InputBox place="Password" />
              <TextButton click={clicb}>Already a member?</TextButton>
              <Button>Sign Up</Button>
            </div>
          </div>
          <div
            className={style.imageDiv}
            style={{ backgroundImage: `url(${backImg})` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Regstration;
