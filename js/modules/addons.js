export default function addons() {
    const fm = document.querySelectorAll('form');
    // fv - form validate
    fm.forEach((e) => {
        e.setAttribute('id', 'fv');
    });

    const l = document.querySelectorAll('a');
    // fv - form validate
    l.forEach((e) => {
        e.setAttribute('data-link', '');
    });
}