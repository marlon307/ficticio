export default function addons() {
    const fm = document.querySelectorAll('form');
    // fv - form validate
    fm.forEach((e) => {
        e.setAttribute('id', 'fv');
    });
}