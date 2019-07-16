export default {
    props: {
        searchText: '',
        url: '',
    },
    computed: {
        class_name() {
            let tempClass = 'search_bar_tab';
            console.log("store" + this.$store);
            let query_type = this.$store.getters.query_type;
            //console.log('query_type:' + query_type + ' searchText:' + this.searchText);
            if (query_type === this.searchText) {
                tempClass = tempClass + ' active';
            }
            return tempClass;
        }
    },
    components: {},
    name: 'SearchBarTab',
};
