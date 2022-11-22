<template>
  <main
    :class="[{'sidebarClose': sideBarisActive}, {'deviceSideMenu-open': deviceSideisActive}]" >
    <!-- HEADER -->
    <header>
      <header-top />
    </header>
    <!-- SIDE MENU -->  
    <side-bar />
     <!-- CONTENT -->   
    <div class="content-wrap">
      <head-title title="플랫폼 고객사(CPO) 관리"/>
      <div class="statusArea-wrap">
        <search-btnOption :searchDownloadOption="false"/>  
      </div>
      <!-- 검색영역 -->
      <div
        v-if="searchIsActive"
        class="searchArea mt-3 mb-5">
        <div class="row-form mb-3">
          <div class="col-lg-1 col-md-2">
            <label for="">고객사상태</label>
          </div>  
          <div class="col-lg-2 col-md-4">
            <v-combobox
              v-model="model"
              :items="items"
              class="multiCombox text-crop"
              label="멀티선택"
              hide-selected
              multiple
              small-chips
              solo >
              <template v-slot:selection="{ item, parent}">
                <v-chip
                  label>
                  <span>
                    {{ item }}
                  </span>
                  <v-icon
                    small
                    @click="parent.selectItem(item)" >
                    $delete
                  </v-icon>
                </v-chip>
              </template>
            </v-combobox>
          </div>
          <div class="col-lg-1 col-md-2">
            <label for="">고객사명</label>
          </div>
          <div class="col-lg-2 col-md-4">
            <input type="text" class="form-control" placeholder="고객사명">
          </div>
          <div class="col-lg-1 col-md-2">
            <label for="">고객사ID</label>
          </div>
          <div class="col-lg-2 col-md-4">
            <input type="text" class="form-control" placeholder="고객사ID">
          </div>
          <div class="col-lg-1 col-md-2">
            <label for="">고객사 담당자명</label>
          </div>
          <div class="col-lg-2 col-md-4">
            <input type="text" class="form-control" placeholder="고객사 담당자명">
          </div>
          
        </div>
        <btn-reset-search />
      </div>
      <!--// 검색영역 -->
      <!-- 필터 -->
      <div class="pagekeyWord-wrap">
        <page-count />
        <search-filter
          :searchFilter="searchFilters" />
      </div>
      <!-- GRID -->
      <sample-ag-grid />
      <!--// GRID -->
      <div class="btn-area clearFix">
        <div class="pull-right">
          <button type="button" class="btn btn-default btn-orange btn-fixed">등록</button>
        </div>
      </div>  
    </div>
    <!--// CONTENT -->  
    <!-- FOOTER -->
    <footer-bottom/>
  </main>
  
</template>

<script>
import HeaderTop from '@/components/HeaderTop'
import SideBar from '@/components/SideBar'
import FooterBottom from '@/components/FooterBottom'
import HeadTitle from '@/components/HeadTitle'
import SearchBtnOption from '@/components/SearchBtnOption'
import BtnResetSearch from '@/components/BtnResetSearch'
import PageCount from '@/components/PageCount'
import SearchFilter from '@/components/SearchFilter'
import SampleAgGrid from '@/components/SampleAgGrid'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    HeaderTop,
    SideBar,
    FooterBottom,
    HeadTitle,
    SearchBtnOption,
    BtnResetSearch,
    PageCount,
    SearchFilter,
    SampleAgGrid
  },
  data() {
    return {
      items: ['아이템-1', '아이템-2', '아이템-3'],
      searchFilters: [
        { filterTitle: '권경', filterText: '서울특별시'},
        { filterTitle: '충전소ID', filterText: 'SIG000003'},
        { filterTitle: '충전기구분', filterText: '완속'},
        { filterTitle: '운영시작일', filterText: '2022-10-22'}
      ],
    }
  },
  computed: {
    ...mapState([
      'windowSize',
      'deviceSideisActive',
      'sideBarisActive',
      'searchIsActive',
    ]),
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.resize()
    })
    this.resize()
  },
  methods: {
    ...mapMutations({
      resize : 'RESIZE'
    }),
  }
}
</script>

<style>

</style>