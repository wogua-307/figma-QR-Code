import styled from "styled-components";

export const StyledColorInput = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;

  .color-container {
    height: 24px;
    padding-right: 30px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    background: #f5f5f5;
    position: relative;
    font-size: 12px;

    .color-t {
      color: #00000080;
      width: 24px;
      text-align: center;
    }

    .color-fill {
      width: 14px;
      height: 14px;
      margin-right: 5px;
      border-radius: 2px;
      border: 1px solid #e6e6e6;
    }

    input {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
  }
`