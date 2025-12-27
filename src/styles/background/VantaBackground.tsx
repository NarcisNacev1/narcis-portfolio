import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import CELLS, { VantaEffectInstance } from 'vanta/dist/vanta.cells.min';

const VantaBackground = () => {
    const vantaRef = useRef<HTMLDivElement | null>(null);
    const [vantaEffect, setVantaEffect] = useState<VantaEffectInstance | null>(null);

    useEffect(() => {
        if (!vantaEffect) {
            const effect = CELLS({
                el: vantaRef.current,
                THREE: THREE,
                mouseControls: true,
                touchControls: true,
                minHeight: 200,
                minWidth: 200,
                scale: 1,
                scaleMobile: 1,
                color1: 0x2e003e,
                color2: 0x5e239d,
                size: 1.2,
                speed: 1.2,
            });

            setVantaEffect(effect);
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
