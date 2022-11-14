<template>
  <section class="btn-optionArea">
    <div class="btn-toggle-searchOption pc-searchOption">
      <button
        type="button"
        class="btn btn-default btn-orange"
        value="downLoadOption"
        @click="searchToggle">
        다운로드옵션
        <i class="icon icon-sm icon-download-option" />
      </button>
      <button
        type="button"
        class="btn btn-default btn-indigo"
        value="searchOption"
        @click="searchToggle">
        검색옵션
        <i class="icon icon-sm icon-download-option" />
      </button>
    </div>

    <!-- <div class="btn-toggle-searchOption mo-searchOption">
      <button
        type="button"
        class="btn btn-default btn-orange"
        value="downLoadOption"
        @click="mobileSearchOpen">
        m다운로드옵션
        <i class="icon icon-sm icon-download-option" />
      </button>
      <button
        type="button"
        class="btn btn-default btn-indigo"
        value="searchOption"
        @click="mobileSearchOpen">
        m검색옵션
        <i class="icon icon-sm icon-download-option" />
      </button>
    </div> -->
    
  </section>
</template>

<script>
export default {
  props: {
  },
  data() {

  },
  methods: {
    searchToggle(e) {
      this.$store.commit('SEARCH_TOGGLE', e.target.value)
    },

    mobileSearchOpen(e) {
      this.$store.commit('MOBILE_SEARCH_OPEN', e.target.value)
      this.$store.commit('SEARCH_TOGGLE', e.target.value)
    }
  }

}
</script>

<style>

</style>