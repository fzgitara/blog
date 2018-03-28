<template>
  <div class="container">
    <div class="row">
      <ul class="col-3 list-group">
        <li class="list-group-item" v-for="(data, i) in list" :key=i>
          <router-link :to="{path: '/'+data.id}">{{data.title}}</router-link>
        </li>
      </ul>
      <router-view :list="list"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  name: 'List',
  data () { return {} }
}
</script>
<style>
</style>
