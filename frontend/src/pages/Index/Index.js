import {
    mapGetters,
} from 'vuex';

import SearchBarTab from '@/components/widgets/SearchBarTab/SearchBarTab.vue';

import InfoPanel from '@/components/widgets/InfoPanel/InfoPanel.vue';

import AnnounceWidget from '@/components/widgets/AnnounceWidget/AnnounceWidget.vue';

import {
    charity_info1, charity_summary
} from '@/mock_datas/mock_charityinfos';

import {
    annonce_items
} from '@/mock_datas/mock_announces';

export default {
    data() {
        return {
            charity_info1: charity_info1,
            annonce_items: annonce_items,
            searchText: "全部",
            searchtab_items: [{
                    searchText: '全部',
                },
                {
                    searchText: '手机号',
                },
                {
                    searchText: 'Hash值',
                },
                {
                    searchText: '订单号',
                },
            ],
            infopanel_items: charity_summary,
        }
    },
    computed: {
        ...mapGetters(['query_type']),
    },
    created() {},
    mounted() {},
    methods: {

        onSearch() {
            console.log('query_type:' + this.query_type);
        },

    },
    components: {
        SearchBarTab,
        InfoPanel,
        AnnounceWidget,
    },
    name: 'Index',
};