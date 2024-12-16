import React, { useCallback, useEffect, useRef, useState } from 'react';
import QRCode from 'qrcode';
import PluginButton from './PluginButton';
import { StyledApp } from './styles';
import { InputSlide } from './InputSlide';
import { ColorInput } from './ColorInput';

function App() {
  const isLoadingRef = useRef(false);
  const [qrValue, setQrValue] = useState('');
  const [svgString, setSvgString] = useState('');
  const [fColor, setFColor] = useState('#000000');
  const [bColor, setBColor] = useState('#ffffff');
  const [padding, setPadding] = useState(1);
  const handleClick = useCallback(async () => {
    console.log('#### handleClick', isLoadingRef.current);
    if (!qrValue) {
      setSvgString('')
      return
    }
    if (isLoadingRef.current) return
    isLoadingRef.current = true;
    const svgString = await QRCode.toString(qrValue, { 
      type: 'svg',
      margin: padding,
      width: 256,
      height: 256,
      color: {
        dark: fColor,
        light: bColor
      }
     });
    isLoadingRef.current = false;
    setSvgString(svgString);
  }, [padding, fColor, bColor, qrValue]);

  const onApply = useCallback(() => {
    parent.postMessage({ pluginMessage: { type: 'create-qrcode', payload: svgString } }, '*');
  }, [svgString])

  // 监听 属性值变化
  useEffect(() => {
    handleClick();
  }, [padding, fColor, bColor, qrValue, handleClick]);

  return (
    <StyledApp>
      <textarea
        className="code-input"
        value={qrValue}
        onChange={(e) => setQrValue(e.target.value)}
        placeholder="please enter the QR code content"
        rows={5}
      />
      <div className='qr-code' dangerouslySetInnerHTML={{ __html: svgString.replace(
      /<svg([^>]*) width="256" height="256"/,
      '<svg$1 width="128" height="128"'
    )}} />
      <div className='title'>Color</div>
      <div className='color-box'>
        <ColorInput t='F' color={fColor} onChange={(color) => setFColor(color)}/>
        <ColorInput t='B' color={bColor} onChange={(color) => setBColor(color)}/>
      </div>
      <div className='title'>Padding</div>
      <div className='padding-box'>
        <InputSlide min={0} max={4} step={0.1} value={padding} onChange={(value) => setPadding(value)}/>
        <div className='padding-value'>{padding*4}px</div>
      </div>
      <div className='line' />
      <div className='bottom'>
        <PluginButton label='Apply QR' disable={!svgString} onClick={onApply} type='highlight'/>
      </div>
    </StyledApp>
  );
}

export default React.memo(App)