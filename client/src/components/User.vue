<template>
  <modal name="user" @before-open="setPerson">
    <b-container class="pt-3 pb-4" fluid="sm">
      <div><h3>Employee</h3></div>
      <b-row>
        <b-col cols="4" class="profilePic"><img v-bind:src="person.picture" /> </b-col>
        <b-col cols="12" md="auto">
          <div>
            <h4>{{ person.name }}</h4>
            <p><b>Address: </b>{{ person.location }}</p>
            <p><b>Email: </b>{{ person.email }}</p>
            <p><b>Status: </b>{{ person.status }}</p>
            <p><b>Date of Birth: </b>{{ person.dob | moment("DD/MM/YYYY") }}</p>
            <p><b>Contact Number: </b>{{ person.contact }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </modal>
</template>

<script>
export default {
  name: 'user',
  data() {
    return {
      active: false,
      person: {}
    };
  },
  methods: {
    show() {
      this.active = true;
    },
    setPerson(event) {
      this.person = event.params;
    }
  }
};
</script>
