import React from 'react'

const Card1 = ({check1}) => {
  return (
    <div style={{width:"400px",height:"400px",background:check1 ? "red":"green"}}>
      Card1
    </div>
  )
}

export default Card1
