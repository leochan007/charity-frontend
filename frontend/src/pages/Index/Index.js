import SearchBarTab from '@/components/SearchBarTab/SearchBarTab.vue';

export default {
    data() {
        return {
            searchText: "全部",
            items: [{
                    lvl: 1,
                    searchText: '全部',
                },
                {
                    lvl: 1,
                    searchText: '手机号',
                },
                {
                    lvl: 1,
                    searchText: 'Hash值',
                },
                {
                    lvl: 1,
                    searchText: '订单号',
                },
            ],
        }
    },
    computed: {
    },
    created() {
    },
    mounted() {
    },
    methods: {
    },
    components: {
        SearchBarTab,
    },
    name: 'Index',
};
