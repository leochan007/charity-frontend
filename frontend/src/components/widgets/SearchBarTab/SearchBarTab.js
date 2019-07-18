import {
    mapGetters,
    mapActions,
} from 'vuex';

import * as Actions from '@/store/constants'

export default {
    props: {
        searchText: '',
    },
    data() {
        return {}
    },
    computed: {
        class_name() {
            let tempClass = 'search_bar_tab';
            if (this.query_type === this.searchText) {
                tempClass = tempClass + ' active';
            }
            return tempClass;
        },
        ...mapGetters(['query_type']),
    },
    components: {},
    methods: {
        onClick() {
            this[Actions.SET_QUERY_TYPE](this.searchText);
        },

        ...mapActions([
            Actions.SET_QUERY_TYPE,
        ]),
    },
    name: 'SearchBarTab',
};
