import {
    trip_records
} from '@/mock_datas/mock_triprecords';


export default {
    data() {
        return {
            loading: false,
            totalCount: trip_records.length,
            page: 1,
            pageSizes: [5, 10, 20, 50, 100],
            pageSize: 10,
        }
    },
    computed: {
        trip_datas() {
            return trip_records.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
        },
        fields() {
            return [{
                    value: 'starttime',
                    align: 'left',
                    sortable: false,
                    text: '开始时间',
                },
                {
                    value: 'endtime',
                    align: 'left',
                    sortable: false,
                    text: '结束时间',
                },
                {
                    value: 'source',
                    align: 'left',
                    sortable: false,
                    text: '出发地',
                },
                {
                    value: 'target',
                    align: 'left',
                    sortable: false,
                    text: '目的地',
                },
                {
                    value: 'fee',
                    align: 'left',
                    sortable: false,
                    text: '总费用',
                },
                {
                    value: 'donation',
                    align: 'left',
                    sortable: false,
                    text: '捐款金额',
                },
                {
                    value: 'hash',
                    align: 'left',
                    sortable: false,
                    text: '交易Hash',
                    width: '100px',
                },
            ];
        },
    },
    created() {
        console.log('trip_records.length:' + trip_records.length);
    },
    mounted() {},
    methods: {
        handleSizeChange(val) {
            console.log('handleSizeChange ' + val);
            this.pageSize = val;
            this.page = 1;
            console.log('pageSize:' + this.pageSize + ' page:' + this.page);
            console.log('trip_records.length:' + trip_records.length);
        },
        handleCurrentChange(val) {
            console.log('handleCurrentChange ' + val);
            this.page = val;
            console.log('pageSize:' + this.pageSize + ' page:' + this.page);
            console.log('trip_records.length:' + trip_records.length);
        },
    },
    components: {},
    name: 'Records',
};