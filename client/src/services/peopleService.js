import Api from '@/services/Api';

export default {
  fetchPeople(page) {
    return Api().get('people', { params: { page } });
  }
};
