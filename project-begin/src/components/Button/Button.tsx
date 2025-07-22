import React from 'react'

interface IButton{
    onClick?: () => void,
    children: any,
    className: string
}
const Button: React.FC<IButton> = ({className, children, onClick}) => {
  return (
    <button onClick={onClick} className={className} >
        {children}
    </button>
  )
}

export default Button