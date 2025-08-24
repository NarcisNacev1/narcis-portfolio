import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import CELLS from 'vanta/dist/vanta.cells.min';

const VantaBackground = () => {
    const vantaRef = useRef<HTMLDivElement | null>(null);
    const [vantaEffect, setVantaEffect] = useState<any>(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                CELLS({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color1: 0x1a001f,
                    color2: 0x5e239d,
                    size: 1.2,
                    speed: 1.2,
                }),
            );
        }
        return () => {
            if (vantaEffect) {
                vantaEffect.destroy();
                setVantaEffect(null);
            }
        };
    }, [vantaEffect]);

    return (
        <div
            ref={vantaRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                zIndex: -1,
            }}
        />
    );
};

export default VantaBackground;
