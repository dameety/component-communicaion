let event = new Vue();

Vue.component('one', {

    template: `
    <div>
        <p>Step 1: Enter a pin number: <input v-model="pin" @blur="checkValidity"> </p>
    </div>
    `,

    data () {
        return {
            pin: ""
        }
    },

    methods: {

        checkValidity () {
            event.$emit('incorrect-pin');
        }

    }
})

Vue.component('two', {

    template: `
        <div v-if="showMessage">
            <p>Step 2: Enter your username:  <input v-model="username"> </p>
        </div>
    `,

    data () {
        return {
            showMessage: false,
            username: ""
        }
    },

    mounted () {
        event.$on('incorrect-pin', () => this.alertMessageReceived())
    },

    methods: {
        alertMessageReceived () {
            this.showMessage = true
        }
    }

})

new Vue ({

    el: '#root',

})
