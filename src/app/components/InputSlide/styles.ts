import styled from 'styled-components'

export const StyledInputSlide = styled.input`
  height: 20px;
  width: 100%;
  appearance: none;
  background: rgba(0,0,0,0.93);
  outline: none;
  -webkit-transition: .2s;
  transition: all .2s;

  &[type="range"] {
    height: 10px;
    background: rgba(0,0,0,0.93);
    outline: none;
    cursor: pointer;
    border-radius: 10px;
  }

  &[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background: #07B772;
    cursor: pointer;
  }

  &[type="range"]::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background: #07B772;
    cursor: pointer;
    border: none;
  }
`