import addons from './addons.js';
import events from './events.js';

export default function load() {

    const links = document.querySelectorAll('[data-link]');

    links.forEach(link => {
        link.addEventListener('click', linklick);
    });

    window.addEventListener('popstate', () => {
        fetchPage(window.location.href);
    });

    async function fetchPage(url) {
        document.querySelector('.content').innerHTML = '<div class="loading">Carregando</div>';
        const pgResponse = await fetch(url);
        const pgText = await pgResponse.text();
        rpContent(pgText);
    }

    function linklick(e) {
        e.preventDefault();

        if (e.target.href != undefined) {
            fetchPage(e.target.href);
            window.history.pushState(null, null, e.target.href);
        } else {
            fetchPage(e.target.closest('[data-link]').href);
            window.history.pushState(null, null, e.target.closest('[data-link]').href);
        }
    }

    //rpContent - replace content - Susbistituir conteudo
    function rpContent(newText) {
        const newHtml = document.createElement('main');
        newHtml.innerHTML = newText;

        const oldPg = document.querySelector('.content');
        const newPg = newHtml.querySelector('.content');

        oldPg.innerHTML = newPg.innerHTML;
        document.title = newHtml.querySelector('title').innerText;

        addons();
        load();
        events();
    }
}