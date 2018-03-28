<template>
  <div>
    <nav class="navbar fixed-top navbar-light bg-light">
      <div class="btn-group">
        <button type="button" class="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          User
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <button class="dropdown-item" type="button">Login</button>
          <div class="dropdown-divider"></div>
          <button class="dropdown-item" type="button">Logout</button>
        </div>
      </div>
      <span class="navbar-brand mb-0 h1"><img src="../assets/logo.png" style="max-width:24px"> {{title}}</span>
      <router-link :to="{path: '/add'}" class="btn btn-light" data-toggle="modal" data-target="#addContent">Add Content</router-link>
    </nav>
    <AddContent></AddContent>
  </div>
</template>

<script>
import AddContent from '@/components/AddContent'

export default {
  name: 'Navbar',
  components: { AddContent },
  data () {
    return {
      title: 'Blog'
    }
  }
}
</script>
