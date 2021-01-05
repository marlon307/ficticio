export default function addons() {

    const fm = document.querySelectorAll('form');
    // fv - form validate
    fm.forEach(elm => {
        elm.setAttribute('id', 'fv');
    });
}