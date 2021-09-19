<template>
  <div class="row">
    <div class="col-md-4 mx-auto">
      <br />
      <h1>Edit Student</h1>
      <br />
      <router-link class="btn btn-info mb-3" to="/">Back</router-link>
      <form>
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            name="name"
            v-model="students.name"
          />
          <p style="color: red;">{{errors.name}}</p>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Email"
            name="email"
            v-model="students.email"
          />
          <p style="color: red;">{{errors.email}}</p>
        </div>
        <div class="form-group">
          <label>Phone</label>
          <input
            type="number"
            class="form-control"
            placeholder="Phone Number"
            name="phone"
            v-model="students.phone"
          />
          <p style="color: red;">{{errors.phone}}</p>
        </div>
        <div class="form-group">
          <label>Course</label>
          <input
            type="text"
            class="form-control"
            placeholder="Course"
            name="course"
            v-model="students.course"
          />
          <p style="color: red;">{{errors.course}}</p>
        </div>
        <button
          type="button"
          class="btn btn-primary"
          v-on:click="updatestudent"
        >
          Update Student
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import swal from 'sweetalert';

export default {
  name: "EditStudent",
  data() {
    return {
      students: {
        name: "",
        email: "",
        phone: "",
        course: "",
      },
      errors: [],
    };
  },
  methods: {
    async updatestudent() {
      let result = await axios.put("http://127.0.0.1:8000/api/updatestudent/"+this.$route.params.id,this.students);
      if (result.data.status == 200) {
        swal("Updated", "Item Updated Successfully", "success");
        this.students = result.data.student;
        this.errors = [];
      } else {
        this.errors = result.data.validerror
      }
    },
  },
  async mounted() {
    let result = await axios.get("http://127.0.0.1:8000/api/editstudent/"+this.$route.params.id);
    if (result.data.status == 200) {
      this.students = result.data.student;
    }
  },
};
</script>

<style scoped>
</style>
