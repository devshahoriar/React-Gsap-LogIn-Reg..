import React from 'react'
import styele from './input.module.css'

const InputBox = (props) => {
  return (
    <div className={styele.mainInputBox}>
      <input type="text" placeholder={props.place} />
    </div>
  )
}

export default InputBox
