<template>
  <div class="pageCount-wrap btn-sm-page">
    <button
      type="button"
      v-for="(key, idx) in pageCountNumber"
      :key="idx"
      class="btn btn-default btn-md pl-1 pr-1"
      :class="{'btn-indigo' : isActive === idx}"
      @click="addClass(idx)">
      {{ key }}
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageCountNumber: [10, 30, 50, 100],
      isActive: 0
    }
  },
  methods: {
    addClass(idx) {
      this.isActive = idx
    }
  }
}
</script>

<style>

</style>