import React from 'react'

const Button = ({name,isBorder,className}) => {
  return (
    <div className={`${className} text-center px-4 py-2 ${isBorder && "border-2 border-[#EC4133]"}`}>
      {name}
    </div>
  )
}

export default Button
