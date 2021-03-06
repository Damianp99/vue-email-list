/*
Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
Usando Vue.js, generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.
Evitare i doppioni nella lista delle mail
*/

console.log('Vue ok', Vue);
Vue.config.devtools = true
const app = new Vue({
    el: '#root',
    data: {
        emails: [],
        totalEmails: 10
    },
    methods: {
        getRandomEmail() {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(res => {
                this.emails.push(res.data.response)
            });
        },
        getRandomEmails() {
            for (let i = 0; i < this.totalEmails; i++) {
                this.getRandomEmail(this.emails);
            };
        },

    },
    created() {
        this.getRandomEmails();
    }


});