<template>
  <div class="keyWord-filter">
    <span class="title">검색필터</span>
    <div class="keywordReset-wrap">
      <div
        class="keyWord">
        <span
          v-for="keyWord in searchFilter"
          :key="keyWord.idx">
          <em>[{{keyWord.filterTitle}}]</em>{{keyWord.filterText}}
        </span>
      </div>
      <button
        type="button"
        class="btn btn-md btn-gray">초기화</button>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    searchFilter: {
      type: Array,
      default: () => []
    }
  }

}
</script>

<style>

</style>