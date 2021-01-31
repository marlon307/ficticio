export default function validate() {
    //v - validate
    const v = document.getElementById('fv');

    if (v) {
        const vs = v.querySelectorAll('.itb'); // validate msg

        console.log(vs);
        //const teste = vs.getAttribute('id');
        // console.log(teste);
        //he - handle change

        const ohv = { //oht - object handle validate
            element: vs,
            name(value) {
                this.element.innerText = value;
            },
            email(value) {
                this.element.innerText = value;
            },
            psw(value) {
                this.element.innerText = value;
            },
            doc(value) {
                this.element.innerText = value;
            },
            data(value) {
                this.element.innerText = value;
            },
            gen(value) {
                this.element.innerText = value;
            },
            tel(value) {
                this.element.innerText = value;
            },
            ncc(value) { // numero do cartão
                this.element.innerText = value;
            },
            ntc(value) { //Nome titular cartão
                this.element.innerText = value;
            },
            nccm(value) { //mez validade do cartão
                this.element.innerText = value;
            },
            nccy(value) { ///ano validade do cartão
                this.element.innerText = value;
            },
            nccv(value) { //codigo de segurança
                this.element.innerText = value;
            },
            cupon(value) {
                this.element.innerText = value;
            },
            nde(value) { //nome destinatario
                this.element.innerText = value;
            },
            zipcod(value) {
                this.element.innerText = value;
            },
            nsd(value) { //endereço
                this.element.innerText = value;
            },
            nsh(value) { // numero da casa
                this.element.innerText = value;
            },
            nnb(value) { //bairro
                this.element.innerText = value;
            },
            nce(value) { //cidade
                this.element.innerText = value;
            },
            nee(value) { //estado
                this.element.innerText = value;
            },
        };

        function hc(e) {
            const n = e.target.name;
            const v = e.target.value;
            console.log(n, v);
            ohv[n](v);
        }
        v.addEventListener('change', hc);
    }
}