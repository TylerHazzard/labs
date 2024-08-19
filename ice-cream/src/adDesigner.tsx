import { useState } from 'react'
import "./App.css"

const AdDesigner = () => {
  const [flavor, setFlavor] = useState<string>('Vanilla');
  const [isLightTheme, setIsLightTheme] = useState<boolean>(true);
  const [fontSize, setFontSize] = useState<number>(16);

  const flavors: string[] = ['Vanilla', 'Chocolate', 'Strawberry'];

  return (
    <div className={`ad-designer ${isLightTheme ? 'light-theme' : 'dark-theme'}`}>
      <div className="ad" style={{ fontSize: `${fontSize}px` }}>
        <p>Buy our delicious {flavor} ice cream!</p>
      </div>
      <div className="controls">
        <div className="flavor-buttons">
          {flavors.map((flavorOption) => (
            <button
              key={flavorOption}
              onClick={() => setFlavor(flavorOption)}
              disabled={flavor === flavorOption}
              style={{ backgroundColor: flavor === flavorOption ? '#1e60a9' : '#0e3c7e' }}
            >
              {flavorOption}
            </button>
          ))}
        </div>
        <div className="theme-buttons">
          <button
            onClick={() => setIsLightTheme(true)}
            disabled={isLightTheme}
            style={{ backgroundColor: isLightTheme ? '#1e60a9' : '#0e3c7e' }}
          >
            Light Theme
          </button>
          <button
            onClick={() => setIsLightTheme(false)}
            disabled={!isLightTheme}
            style={{ backgroundColor: !isLightTheme ? '#1e60a9' : '#0e3c7e' }}
          >
            Dark Theme
          </button>
        </div>
        <div className="font-size-buttons">
          <button onClick={() => setFontSize(fontSize - 2)} disabled={fontSize <= 10}>
            Down
          </button>
          <button onClick={() => setFontSize(fontSize + 2)}>Up</button>
        </div>
      </div>
    </div>
  );
}

export default AdDesigner;
