<template>
  <div class="row">
    <div class="col-md-4 mx-auto">
      <br />
      <h1>Addstudent</h1>
      <br />
      <router-link class="btn btn-info mb-3" to="/">Back</router-link>
      <form>
        <div class="form-group">
          <label>Name</label>
          <input
            type="text"
            class="form-control"
            placeholder="Name"
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
            v-model="students.course"
          />
          <p style="color: red;">{{errors.course}}</p>
        </div>
        <button type="button" class="btn btn-primary" v-on:click="addstudent">Add Student</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
  name: 'AddStudent',
  data(){
    return{
      students:{
        name:'',
        email:'',
        phone:'',
        course:''

      },
      errors:[]
    }
  },
  methods:{
    async addstudent(){
      let result = await axios.post('http://127.0.0.1:8000/api/addstudent',this.students)
      if(result.data.status == 200){
        swal("Added", "Item Added Successfully", "success");
          this.students.name = '',
          this.students.email = '',
          this.students.phone = '',
          this.students.course = ''
          this.errors = []
      }
      else{
        this.errors = result.data.validerror;
      }
    }
  }
};
</script>

<style scoped>
</style>
