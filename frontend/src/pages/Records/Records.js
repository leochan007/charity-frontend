
import {
    trip_records
} from '@/mock_datas/mock_triprecords';


export default {
    data() {
        return {
            trip_records: trip_records,
            loading: false,
        }
    },
    computed: {fields() {
        return [
          {
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
          },
        ];
      },
    },
    created() {
    },
    mounted() {
    },
    methods: {
    },
    components: {
    },
    name: 'Records',
};
