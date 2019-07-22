import MenuItem from '@/components/widgets/MenuItem/MenuItem.vue';

export default {
    data() {
        return {
            items: [{
                    lvl: 1,
                    menuText: '首页',
                    url: '/',
                },
                {
                    lvl: 1,
                    menuText: '出行记录',
                    url: '/records',
                },
                {
                    lvl: 1,
                    menuText: '失信名单',
                    url: '/bads',
                },
                {
                    lvl: 1,
                    menuText: '关于我们',
                    url: '/aboutus',
                },
            ],
        }
    },
    computed: {},
    created() {},
    mounted() {},
    methods: {},
    components: {
        MenuItem,
    },
    name: 'Header',
};