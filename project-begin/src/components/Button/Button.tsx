import React from 'react'

interface IButton{
    onClick?: () => void,
    children: any,
    className?: string,
    typeBtn?: 'button' | 'submit' | 'reset'
}
const Button: React.FC<IButton> = ({className, children, onClick, typeBtn}) => {
  return (
    <button type={typeBtn} onClick={onClick} className={className} >
        {children}
    </button>
  )
}

export default Button