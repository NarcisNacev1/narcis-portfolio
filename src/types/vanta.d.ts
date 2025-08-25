import * as THREE from 'three';

declare module 'vanta/dist/vanta.cells.min' {
    interface VantaEffectOptions {
        el: HTMLElement | null;
        THREE: typeof THREE;
        mouseControls?: boolean;
        touchControls?: boolean;
        minHeight?: number;
        minWidth?: number;
        scale?: number;
        scaleMobile?: number;
        color1?: number;
        color2?: number;
        size?: number;
        speed?: number;
    }

    interface VantaEffectInstance {
        destroy: () => void;
    }

    const CELLS: (options: VantaEffectOptions) => VantaEffectInstance;
    export default CELLS;
}
