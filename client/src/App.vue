<template>
  <div id="app">
    <navbar></navbar>
    <home></home>
    <router-view :list="list"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Home from '@/components/Home'

export default {
  name: 'App',
  components: {
    Navbar,
    Home
  },
  data () {
    return {
      list: [
        {
          id: 1,
          title: 'Cras justo odio',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend risus id ante faucibus, non porta nisi venenatis. Duis consequat, mi nec tincidunt suscipit, nisi felis suscipit dui, non molestie arcu libero at nulla. Ut ac orci vel lectus fermentum feugiat vel sit amet purus. Nullam lectus purus, facilisis quis rutrum sit amet, euismod in est. In nec scelerisque massa. Quisque aliquet est ultricies lobortis condimentum. Ut ultricies nunc ligula, quis accumsan dolor porttitor sed. Suspendisse ornare orci vel felis vehicula, vitae bibendum felis ullamcorper.'
        },
        {
          id: 2,
          title: 'Dapibus ac facilisis in',
          text: 'Donec a dignissim ex, eget tristique quam. Phasellus vitae vestibulum metus. Cras sit amet massa dignissim, posuere nibh ac, ornare mauris. Quisque a volutpat justo. Sed quis elementum nulla. Curabitur a dui eget eros gravida mollis nec non magna. Donec rhoncus porta libero. Nunc accumsan faucibus sapien ut dictum. Vestibulum ac sodales lectus. Cras arcu lorem, laoreet a erat vitae, ornare dapibus odio. Suspendisse potenti. Praesent aliquam, massa quis imperdiet eleifend, sapien ligula ullamcorper leo, ac finibus arcu purus ut sem.'
        }
      ]
    }
  }
}
</script>

<style>

</style>
