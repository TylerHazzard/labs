import './AdDesigner.css'
import { FC } from 'react'
import { useState } from 'react'

interface Props {
    flavors: string[]
    lightTheme: boolean
    darkTheme: (bool: boolean) => void
}

const AdDesigner: FC<Props> = ({ flavors, lightTheme, darkTheme }) => {
    const buttonCallback = lightTheme
    ? () => darkTheme(false)
    : () => darkTheme(true)
    const [selectedFlavor, setSelectedFlavor] = useState<string>(flavors[0])
    const [fontSize, setFontSize] = useState<number>(16);

    return (
    <>
        <div className='ad-examples'>
            <div className='ad example-1'>VOTE {flavors[0]} 2024</div>
            <div className='ad example-2'>VOTE {flavors[2]} 2024</div>
            <div className='ad example-3'>VOTE {flavors[1]} 2024</div>
        </div>
        <div className='ad-desginer'>
            <div>AD DESIGNER</div>
            <div className='ad'>
                <div className={lightTheme ? "ad light" : "ad dark"} style={{ fontSize: `${fontSize}px`}}>VOTE {selectedFlavor} 2024</div>
            </div>
            <div className='option-container'>
                <div>What FLAVOR do you support</div>
                {flavors.map((flavor) => (
                    <button key={flavor} onClick={() => setSelectedFlavor(flavor)}>{flavor}</button>
                ))}
            </div>
            <div className='color-changer-options'>
                <div>Color theme</div>
                <button onClick={buttonCallback}>
                        {lightTheme ? "Dark" : "Light"}
                </button>
            </div>
            <div className='font-size-optins'>
                <div>Font Size</div>
                <button onClick={() => setFontSize(fontSize + 2)}>UP</button>
                <div>{fontSize}</div>
                <button onClick={() => setFontSize(fontSize - 2)}>DOWN</button>
            </div>
        </div>
    </>
    )
}

export default AdDesigner