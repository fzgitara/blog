<template>
  <div class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">{{title}}</h1>
      <p class="lead">{{subtitle}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'My Blog',
      subtitle: 'Welcome to my blog! Take your time and enjoy it!'
    }
  }
}
</script>
<style>
.jumbotron{
  margin-top: 3rem;
  background: url(https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cdc4d332eab7ae54a6449ef4918730f5&auto=format&fit=crop&w=1050&q=80);
  background-size: cover;
  color:white;
  text-shadow: 2px 2px 4px black;
}
</style>
