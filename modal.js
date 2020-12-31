const mdd = document.querySelector('[data-event="modal"]');
const btop = document.querySelector('[data-event="open"]');
const btce = document.querySelector('[data-event="close"]');

if (mdd && btop && btce) {
    function tmd(event) {
        event.preventDefault();
        mdd.classList.toggle('active');
    }

    function extm(event) {
        if (event.target === this) {
            tmd(event);
        }
    }
    btop.addEventListener('click', tmd); /*Evento abrir modal toggle modal */
    btce.addEventListener('click', tmd); /*Evento fechar modal */
    mdd.addEventListener('click', extm); /*Evento exteno modal */
}