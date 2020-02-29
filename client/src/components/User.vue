<template>
  <modal name="user" @before-open="setPerson">
    <b-container class="bv-example-row p5" fluid>
      <b-row>Employee</b-row>
      <b-row>
        <b-col cols="3"><img src="https://randomuser.me/api/portraits/women/12.jpg" /></b-col>
        <b-col cols="7">
          <div class="modal-body">
            <p>Name: {{ person.name }}</p>
            <p>Location: {{ person.location }}</p>
            <p>Email: {{ person.email }}</p>
            <p>Status: {{ person.status }}</p>
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
