export default function load() {

    const url = document.querySelectorAll('a');

    url.forEach(l => {
        l.addEventListener('click', cl);
    });

    function cl(e) {
        e.preventDefault();
        pg(e.target.href);
        window.history.pushState(null, null, e.target.href);
    }

    async function pg(url) {
        document.querySelector('.content').innerHTML = 'Carregando';
        const pr = await fetch(url);
        const pc = await pr.text();
        lpc(pc);
    }

    function lpc(ntxt) {
        const nhtml = document.createElement('main');
        nhtml.innerHTML = ntxt;
        const opg = document.querySelector('.content');
        const npg = nhtml.querySelector('.content');
        opg.innerHTML = npg.innerHTML;
        document.title = nhtml.querySelector('title').innerHTML;
    }

    window.addEventListener('popstate', () => {
        lpc(window.location.href);
    });
}