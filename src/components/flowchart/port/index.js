import React from "react";
import style from './port.scss';

export const Port = (props) => {
  const iconStyle = {};
  if (props.port) {
    switch (props.port.type) {
      case 'left':
        iconStyle.transform = 'rotate(90deg)';
        break;
      case 'right':
        iconStyle.transform = 'rotate(-90deg)';
        break;
      default:
        iconStyle.transform = 'rotate(0)';
    }
  }
  return (
    <div className={style.port}>
      <svg viewBox="0 0 24 24" className={style.port__icon} style={iconStyle}>
        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
      </svg>
    </div>
  )
};
