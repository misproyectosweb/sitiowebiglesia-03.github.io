/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector('.btnContenedor').classList.add('mostrarBoton');
    } 
    else {
        document.querySelector('.btnContenedor').classList.remove('mostrarBoton');
    }
};

document.querySelector('.btnContenedor').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});                    
