import React from 'react'

const Member = ({team , name}) => {
    console.log(team, name)

    let boxStyle = {
        backgroundColor : 'whitesmoke',
        border : '1px solid black',
        padding : '30px',
        borderRadius : '10px',
        textAlign : 'center',
        marginTop : '10px',
        color : 'black',
        width : '500px'
    }

  return (
    <div>
        <div style={boxStyle}>
        <h3>{team}{" "}{name}</h3>
        </div>
    </div>
  )
}

export default Member