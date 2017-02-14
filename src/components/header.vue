<template>
    <header>
        <ul>
            <li v-for="item in menus" @click="show">
                <a :href=item.href>{{ item.text }}</a>
            </li>
        </ul>
    </header>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" rel="stylesheet/scss" scoped>
    header {
        position: fixed;
        left: 0;
        top: 0;
        height: 50px;
        background: #aaa;
        opacity: .5;
        width: 100%;
        line-height: 50px;
        box-shadow: 1px 1px #2c3e50;
        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            margin: 0 20px;
            text-align: right;
            li {
                text-align: center;
                display: inline-block;
                min-width: 65px;
                a {
                    color: #3b4842
                }

            }
            li.cur, li:hover {
                background: #eeeeee;
            }
        }
    }
</style>
<script>

    import {mapState} from 'vuex';

    export default {
        data () {
            return {
                title: 'Im anry!',
                menus: [
                    {href: "/anry", text: "one"},
                    {href: "/hello", text: "two"},
                    {href: "/anry", text: "three"}
                ]
            }
        },
        methods: {
            show: function (event) {
                //event.currentTarget.className='cur';
            }
        }
    }

</script>