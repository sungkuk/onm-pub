<template>
  <div class="content-header">
    <h2 class="headerTitle">{{ title }}</h2>
    <location />
  </div>  
</template>

<script>
import Location from '@/components/Location'
import { mapState } from 'vuex'

export default {
  components: {
    Location
  },
  computed: {
    ...mapState([
      'title',
    ])
  }
}
</script>

<style>
  
</style>
