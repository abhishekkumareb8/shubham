<template>
  <modal name="user" @before-open="setPerson">
    <div class="modal-header">
      <h5 class="modal-title">Employee</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Name: {{ person.name }}</p>
      <p>Location: {{ person.location }}</p>
      <p>Email: {{ person.email }}</p>
      <p>Status: {{ person.status }}</p>
    </div>
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
