
export const pointerLockAPI = (canvas: HTMLCanvasElement | null) => {
    if (canvas) {
        canvas.addEventListener('click', async () => {
            if (!document.pointerLockElement) {
                await canvas.requestPointerLock();
            }
        });
    }
};
