import styled from 'styled-components'

export const StyledApp = styled.div`
  padding: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .line {
    width: 100%;
    padding: 0 10px;
    background-color: rgba(0,0,0,0);
    margin: 15px 0;
    border-bottom: 1px dashed #efefef;
  }

  .title {
    font-size: 12px;
    font-weight: 500;
    height: 24px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 10px;
    margin-top: 10px;
    margin-bottom: 5px;
    &:not(:first) {
      border-bottom: 1px solid #e6e6e6;
    }
  }
  .code-input {
    width: 100%;
    border: 1px solid #e0e0e0;
    border-radius: 2px;
    padding: 5px;
    font-size: 14px;
    font-weight: 400;
    outline: none;
    &:focus {
      border-color: #00000080;
    }
  }

  .qr-code {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    background: #f5f5f5;
    margin-top: 10px;
  }

  .color-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
  }

  .padding-box {
    width: 100%;
    display: flex;
    align-items: center;

    .padding-value {
      width: 50px;
      padding-right: 10px;
      font-size: 13px;
      text-align: right;
    }
  }

  .bottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .highlight {
      height: 30px;
      padding: 0 10px;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 400;
      margin-left: 15px;
    }
  }
`
