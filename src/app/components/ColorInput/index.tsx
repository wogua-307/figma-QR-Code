import React, {memo} from "react";
import { StyledColorInput } from "./styles";

interface Props {
  t: string
  color: string
  onChange: (color: string) => void
}
export const ColorInput = memo(({t, color, onChange}:Props) => {
  return (
    <StyledColorInput>
      <div className="color-container">
        <div className="color-t">{t}</div>
        <div className="color-fill" style={{background: color}}/>
        <div className="color-value">{color.toUpperCase()}</div>
        <input type='color' onChange={(e) => {
          onChange(e.target.value);
          console.log('#### color:', e.target.value);
        }}/>
      </div>
    </StyledColorInput>
  )
})