import voca from 'voca';

const debug = process.env.NODE_ENV !== 'production';

export default {

  query_type: state => {
    return state.query_type;
  },

};
