export default {
    props: {
        menuText: '',
        url: '',
        clickFunc: Function,
    },
    computed: {
        class_name() {
            let tempClass = 'MenuItemText';
            /*if (this.isActive == '1') {
                tempClass = tempClass + ':active';
            }*/
            return tempClass;
        }
    },
    components: {},
    name: 'MenuItem',
};
