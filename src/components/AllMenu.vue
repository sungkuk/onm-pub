<template>
  <div class="allMenu-wrap">
    <ul>
      <li
        v-for="menu in allMenuLists"
        :key="menu.idx">
        <dl>
          <dt>{{ menu.menuTitle }}</dt>
          <dd>
            <template
              v-if="menu.children">
              <div class="depth2">
                <ul>
                  <li
                    v-for="menu in menu.children"
                    :key="menu.idx">
                    <a href="#">{{ menu.menuTitle }}</a>
                    <template
                      v-if="menu.child">  
                      <div class="depth3">
                        <ul>
                          <li
                            v-for="(menu, idx) in menu.child"
                            :key="menu.idx"
                            :class="{'selected': isActive === idx }">
                            <a href="#">{{ menu }}</a>
                          </li>
                        </ul>
                      </div>
                    </template>
                  </li>
                </ul>
              </div>
            </template> 
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import AllMenu from '@/assets/js/allMenu'

export default {
  props: {
  },
  data() {
    return {
      isActive: 4,
      allMenuLists: AllMenu,
    }
  }
}
</script>

<style scoped>

</style>