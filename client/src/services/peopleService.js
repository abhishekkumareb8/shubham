import Api from '@/services/Api';

export default {
  fetchPeople() {
    return Api().get('people');
  }
};
