const caja = document.querySelector('.container');
const cajaR = caja.getBoundingClientRect();

caja.assignedSlot.addEventListener('mousemove' , e => {
    const xP = (e.clientX - cajaR.left) / cajaR.width;
    const yP = (e.clientY -cajaR.top) / cajaR.height -0.6;
    const xOffset = (xP -  0.6);
    const dxNorm = Math.min(Math.max(xOffset, -0.6), 0.6);
    caja.getElementsByClassName.transform = `perspective(1000px)
                                            rotateY(${dxNorm*45}deg)
                                            rotateX(${yP*45}deg)`;

});

caja.addEventListener('mouseleave', () => {
    caja.style.transform = 'none';

});