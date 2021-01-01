function modal() {
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

        btop.addEventListener('click', tmd); //Evento abrir modal toggle modal 
        btce.addEventListener('click', tmd); //Evento fechar modal 
        mdd.addEventListener('click', extm); //Evento exteno modal 
    }
}

/*function eventsdropmenu() {
    const tevent = document.querySelectorAll('[data-event]');

    // tevent - tag event
    //aev - add event 
   // atev - atribute event

    tevent.forEach(atev => {
        ['touchstart', 'mouseover'].forEach(aev => {
            atev.addEventListener(aev, uev);
        });
    });
    //uev - user event
    function uev(event) {
        event.preventDefault();
        this.classList.add('active');

        usv(this, ['touchstart', 'mouseover'], () => {
            this.classList.remove('active');
        });
    };
    //usv - user stop event
    function usv(element, events, callback) {
        const html = document.documentElement;
        //os - outside 
        const os = 'data-outside';

        if (!element.hasAttribute(os)) {

            events.forEach(aev => {
                html.addEventListener(aev, usvf);
            });

            element.setAttribute(os, '');
        }


        function usvf(event) {
            if (!element.contains(event.target)) {

                element.removeAttribute(os);

                events.forEach(aev => {
                    html.removeEventListener(aev, usvf)
                });

                callback();
            }
        }
    }
}
eventsdropmenu();*/
function events() {
    const expand = document.querySelectorAll('[aria-expanded]');
    //addevent - add event
    //qevent - query event
    expand.forEach(qevent => {
        ['mouseover', 'mouseleave'].forEach(addevent => {
            qevent.addEventListener(addevent, userevnt);
        });
    });


    function userevnt(e) {
        e.preventDefault();

        console.log(e.type);

        if (e.type === 'mouseover') {
            this.setAttribute('aria-expanded', 'true');

        } else {
            this.setAttribute('aria-expanded', 'false');
        }
    }
}




modal();
events();