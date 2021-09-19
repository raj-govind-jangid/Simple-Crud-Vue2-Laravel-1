<template>
<nav class="navbar navbar-expand-sm bg-light navbar-light">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <router-link to="/" class="nav-link">Home</router-link>
    </li>
    <li class="nav-item active">
      <router-link to="/addstudent" class="nav-link">Add Student</router-link>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'Student',
}
</script>

<style scoped>

</style>
