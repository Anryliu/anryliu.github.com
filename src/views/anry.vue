<template>
    <div class="hello">
        <c-title :text="title"></c-title>
        <img class="logo" src="../assets/images/logo.png">
        <p class="welcome">欢迎使用 vue</p>
        <h1>anry</h1>

        <a href="/hello"><strong>Hello</strong></a>
        <div v-html="content"></div>
    </div>
</template>

<script>

    import {mapState} from 'vuex';
    import cTitle from 'components/info';

    export default {
        data () {
            return {
                title: 'Im anry!',
                content: ''
            }
        },
        methods: {
            async getContent () {
                const response = await fetch('/api/anry');
                this.content = await response.text();
            }
        },
        mounted () {
            this.$store.commit('MESSAGE', '欢迎使用 vue！');
            this.getContent();
        },

        components: {cTitle}
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
    h1 {
        color: #42b983;
    }

    .logo {
        width: 100px;
        height: 100px;
        a {
            color: #42b983;
            text-decoration: none;
        }
    }
</style>
