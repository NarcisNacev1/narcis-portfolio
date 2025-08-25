declare module 'vanta/dist/vanta.cells.min' {
    import * as THREE from 'three';

    export interface VantaEffectOptions {
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

    export interface VantaEffectInstance {
        destroy: () => void;
    }

    const CELLS: (options: VantaEffectOptions) => VantaEffectInstance;
    export default CELLS;
}
