export default {
    props: {
        menuText: '',
        url: '',
    },
    computed: {
        class_name() {
            let tempClass = 'MenuItemText';
            let currURL = this.$route.path;
            if (currURL.endsWith(this.url) > 0) {
                tempClass = tempClass + ' active';
            }
            return tempClass;
        }
    },
    components: {},
    name: 'MenuItem',
};
