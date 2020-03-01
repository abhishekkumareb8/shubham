<template>
  <modal name="user" @before-open="setPerson" :height="400" :width="600" :scrollable="true">
    <b-container class="pt-3 pb-4 userDetail" fluid="sm">
      <div><h3>Employee</h3></div>
      <hr />
      <b-row>
        <b-col cols="4" class="profilePic text-center">
          <img v-bind:src="person.picture" />
          <h4>{{person.name}}</h4>
          {{person.status}}
        </b-col>
        <b-col cols="12" md="auto">
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
            <div class="align-right"><b-button variant="primary">Save</b-button></div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </modal>
</template>

<script>
import { BContainer, BRow, BCol, BFormGroup, BFormInput, BButton } from 'bootstrap-vue';
import moment from 'moment';

export default {
  name: 'user',
  data() {
    return {
      active: false,
      person: {},
      dateofbirth: ''
    };
  },
  components: {
    'b-container': BContainer,
    'b-row': BRow,
    'b-col': BCol,
    'b-form-group': BFormGroup,
    'b-form-input': BFormInput,
    'b-button': BButton
  },
  methods: {
    show() {
      this.active = true;
    },
    setPerson(event) {
      this.person = event.params;
      this.dateofbirth = moment(event.params.dob).format('YYYY-MM-DD');
    }
  }
};
</script>
