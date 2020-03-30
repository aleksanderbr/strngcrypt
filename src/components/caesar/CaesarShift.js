import React from 'react'

const CaesarShift = ({plusMinus, cShift}) => {
  return (
    <div className="controller">
      <div className="settings_name">SHIFT</div>
      <div className="settings_operators">
          <div 
            value = '-'
            id="minus_caesar"
            className="settings_operator" 
            onClick={(evt) => {
              plusMinus(evt)
            }}
          >
          -
          </div>
          <div 
            className="settings_operator" 
            id="caesar_shift_value"
          >
          {cShift}
          </div>
          <div 
            value="+"
            id="plus_caesar"
            className="settings_operator" 
            onClick={(evt) => {
              plusMinus(evt)
            }}
          >
          +
          </div>
      </div>
    </div>
  )
}

export default CaesarShift