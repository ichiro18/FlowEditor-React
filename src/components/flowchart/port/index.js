import React from "react";
import style from './port.scss';

export const Port = (props) => {
  const portStyle = {
    backgroundColor: ''
  };
  if (props.port.type === 'left') {
    portStyle.backgroundColor = '#dd1717';
  }
  if (props.port.type === 'right') {
    portStyle.backgroundColor = '#68ba78';
  }
  return (
    <div className={style.port} style={portStyle}>
      {props.port.type === 'right' && (
        <svg viewBox="0 0 16 16" className={style.port__icon}>
          <path
            d="M13.8353 3.71186C13.783 3.65956 13.721 3.61806 13.6527 3.58976C13.5844 3.56145 13.5113 3.54688 13.4373 3.54688C13.3634 3.54688 13.2903 3.56145 13.222 3.58976C13.1537 3.61806 13.0917 3.65956 13.0394 3.71186L5.65849 11.0942L2.96837 8.40319C2.74524 8.1801 2.37585 8.17572 2.15709 8.40319C2.05499 8.5094 1.99859 8.65144 2.00003 8.7988C2.00146 8.94616 2.0606 9.08707 2.16474 9.19128L5.26066 12.2881C5.3129 12.3404 5.37493 12.3819 5.44321 12.4102C5.51148 12.4386 5.58466 12.4531 5.65857 12.4531C5.73247 12.4531 5.80566 12.4386 5.87393 12.4102C5.94221 12.3819 6.00424 12.3404 6.05648 12.2881L13.8353 4.50777C13.9407 4.40222 14 4.25907 14 4.10981C14 3.96055 13.9407 3.81741 13.8353 3.71186Z"
          />
        </svg>
      )}
      {props.port.type === 'left'  && (
        <svg viewBox="0 0 16 16" className={style.port__icon}>
          <path
            d="M12.2415 11.4463L8.79529 8L12.2415 4.55375C12.347 4.44829 12.4062 4.30525 12.4062 4.1561C12.4062 4.00696 12.347 3.86392 12.2415 3.75846C12.1361 3.653 11.993 3.59375 11.8439 3.59375C11.6947 3.59375 11.5517 3.653 11.4463 3.75846L8 7.20471L4.55375 3.75846C4.44829 3.653 4.30525 3.59375 4.1561 3.59375C4.00696 3.59375 3.86392 3.653 3.75846 3.75846C3.653 3.86392 3.59375 4.00696 3.59375 4.1561C3.59375 4.30525 3.653 4.44829 3.75846 4.55375L7.20471 8L3.75846 11.4463C3.653 11.5517 3.59375 11.6947 3.59375 11.8439C3.59375 11.993 3.653 12.1361 3.75846 12.2415C3.86392 12.347 4.00696 12.4062 4.1561 12.4062C4.30525 12.4063 4.44829 12.347 4.55375 12.2415L8 8.79529L11.4463 12.2415C11.5517 12.347 11.6947 12.4063 11.8439 12.4062C11.993 12.4062 12.1361 12.347 12.2415 12.2415C12.347 12.1361 12.4062 11.993 12.4062 11.8439C12.4063 11.6947 12.347 11.5517 12.2415 11.4463Z"
          />
        </svg>
      )}
      {props.port.type !== 'left' && props.port.type !== 'right'  && (
      <svg viewBox="0 0 24 24" className={style.port__icon}>
        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
      </svg>
      )}
    </div>
  )
};
