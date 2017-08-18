const event = new Vue();

Vue.component('one', {

    template: `
    <div>
        <p>Step 1: Enter a pin number: <input v-model="pin" @blur="goToStepTwo"> </p>
    </div>
    `,

    data () {
        return {
            pin: ""
        }
    },

    methods: {

        goToStepTwo () {
            event.$emit('step-two');
        }

    }
})

Vue.component('two', {

    template: `
        <div v-if="showMessage">
            <p>Step 2: Enter your username:  <input> </p>
        </div>
    `,

    data () {
        return {
            showMessage: false
        }
    },

    mounted () {
        event.$on('step-two', () => this.alertMessageReceived())
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
