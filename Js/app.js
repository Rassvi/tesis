'use strict';
/**
 * Aquí planeo añadir los scripts, como el panel, swippers,
 * alertas mini animaciones y controlar algunos pequeños aspectos
 */

var header = document.getElementById('head');

if (document.body.scrollTop == 0) {
    alert('on top');
    // header.classList.add("header--scroll");
    // header.classList.remove("header--top");

} else {
    alert('scroll hacia abajo');
    // header.classList.add("header--top");
    // header.classList.remove("header--scroll");
}