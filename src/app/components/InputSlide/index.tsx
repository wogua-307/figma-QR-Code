import React, {memo, useCallback} from "react";
import { StyledInputSlide } from "./styles";

interface Props {
  value: number
  min: number
  max: number
  step: number
  onChange: (value: number) => void
}
export const InputSlide = memo(({value, min, max, step,onChange}: Props) => {
  const onChangeValue = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onChange(Number(newValue))
  }, [])
  return (
    <StyledInputSlide 
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChangeValue}
    />
  )
})