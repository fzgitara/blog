<template>
  <div class="col-9 card">
    <div class="card-body">
      <h5 class="card-title">{{dataContent.title}}</h5>
      <p>{{dataContent.text}}</p>
      </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'list'],
  data () {
    return {
      dataContent: null
    }
  },
  watch: {
    id () {
      let me = this
      me.list.map(data => {
        if (data.id === +me.id) {
          this.dataContent = data
        }
      })
    }
  }
}
</script>
