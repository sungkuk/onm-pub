<template>
  <div class="status-list">
    <ul>
      <li
        v-for="item in statusLists"
        :key="item.idx"
        :class="StatusKey(item.name)">
        <span class="name">{{ item.name }}</span>
        <span class="number">{{ item.number }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState([
      'statusLists'
    ])
  },
  methods: {
    StatusKey (status) {
      switch (status) {
        case '대기': return 'status-green'
        case '준비': return 'status-pink'
        case '예약': return 'status-blue'
        case '충전': return 'status-cyan'
        case '종료': return 'status-yellow'
        case '고장': return 'status-red'
        default : return 'status-default'
      }
    }
  }
}
</script>

<style scoped>

</style>