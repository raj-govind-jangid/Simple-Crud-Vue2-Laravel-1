<template>
<div class="container text-center">
  <br>
  <h1>Student</h1>
  <br>
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Course</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="student in students" :key="student.id">
        <td>{{student.name}}</td>
        <td>{{student.email}}</td>
        <td>{{student.phone}}</td>
        <td>{{student.course}}</td>
        <td>
        <router-link class="btn btn-info mb-3" :to="'/editstudent/'+student.id">Edit</router-link>
        <button class="btn btn-danger mb-3" v-on:click="deletestudent(student.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import axios from 'axios';
import swal from 'sweetalert';

export default {
  name: 'Student',
  data(){
    return{
      students:[]
    }
  },
  methods:{
    async deletestudent(id){
      let result = await axios.delete('http://127.0.0.1:8000/api/deletestudent/'+id)
        if(result.data.status == 200){
          swal("Deleted", "Item Deleted Successfully", "success");
          this.loaddata()
        }
    },
    async loaddata(){
      let result = await axios.get('http://127.0.0.1:8000/api/student')
      if(result.data.status == 200){
        this.students = result.data.student
    }
    }
  },
  mounted(){
    this.loaddata()
  }
}
</script>

<style scoped>

</style>
