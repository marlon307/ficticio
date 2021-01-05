export default function validate() {
    //v - validate
    const v = document.getElementById('fv');

    //he - handle change
    v.addEventListener('change', hc);



    const ht = { //ht - handle texts

        name(value) {
            this.element.innerText = value;
        },
        email(value) { //m - mail
            this.element.innerText = value;
        },
        psw(value) { //p - password
            this.element.innerText = value;
        },
    }


    function hc(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value);
        ht[name](value);
    }


}