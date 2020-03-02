<template>
  <b-modal id="user" title="Employee" ok-only ok-title="Save" size="lg">
    <b-container class="pt-3 pb-4 user-detail" fluid="sm">
      <b-row>
        <b-col cols="12" md="4" class="profile-pic text-center">
          <img v-bind:src="person.picture" />
          <h4>{{person.name}}</h4>
          {{person.status}}
        </b-col>
        <b-col cols="12" md="8">
          <div>
            <b-form-group
              id="fieldset-address"
              label-cols-sm="4"
              label-cols-lg="3"
              label="Address"
              label-for="location"
            >
              <b-form-input id="address" v-model="person.location" trim></b-form-input>
            </b-form-group>
            <b-form-group
              id="fieldset-email"
              label-cols-sm="4"
              label-cols-lg="3"
              label="Email"
              label-for="email"
            >
              <b-form-input id="email" v-model="person.email" trim></b-form-input>
            </b-form-group>
            <b-form-group
              id="fieldset-dob"
              label-cols-sm="4"
              label-cols-lg="3"
              label="Date of Birth"
              label-for="dob"
            >
              <b-form-input id="dob" v-model="this.dateofbirth" trim></b-form-input>
            </b-form-group>
            <b-form-group
              id="fieldset-contact"
              label-cols-sm="4"
              label-cols-lg="3"
              label="Contact"
              label-for="contact"
            >
              <b-form-input id="contact" v-model="person.contact" trim></b-form-input>
            </b-form-group>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-modal>
</template>

<script>
import { BContainer, BRow, BCol, BFormGroup, BFormInput, BButton, BModal } from 'bootstrap-vue';
import moment from 'moment';

export default {
  name: 'user',
  data() {
    return {
      active: false,
      dateofbirth: ''
    };
  },
  props: {
    person: Object
  },
  mounted() {
    this.setDate(this.person);
  },
  components: {
    'b-container': BContainer,
    'b-row': BRow,
    'b-col': BCol,
    'b-form-group': BFormGroup,
    'b-form-input': BFormInput,
    'b-button': BButton,
    'b-modal': BModal
  },
  methods: {
    show() {
      this.active = true;
    },
    setDate(person) {
      this.dateofbirth = moment(person.dob).format('DD/MM/YYYY');
    }
  }
};
</script>
