import Vue from "vue";
        import App from "/Users/danielcherubini/Coding/Express-Vue/express-vue/test/example/views/components/users.vue";

        export function createApp (data) {
            const app = new Vue({
                data,
                render: h => h(App)
            })
            return { app }
        }