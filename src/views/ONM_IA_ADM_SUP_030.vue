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
      <head-title title="플랫폼 고객사(CPO) 등록"/>
      <div class="flex-row">
        <!-- 고객사 기본정보 -->
        <div class="col-lg-6 col-md-12">
          <sub-title title="고객사 기본정보" />
          <div class="table">
            <table>
              <caption class="sr-only">고객사 기본정보</caption>
              <colgroup>
                <col width="30%">
                <col width="*">
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row" class="required"><span>고객사 명</span></th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>고객사ID</span></th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>사업자등록번호</span></th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row"><span>업태</span></th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row"><span>종목</span></th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>본사주소</span></th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>고객사상태</span></th>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 고객사 담당자 정보 -->
        <div class="col-lg-6 col-md-12 subject">
          <sub-title title="고객사 담당자 정보" />
          <div class="table">
            <table>
              <caption class="sr-only">고객사 담당자 정보</caption>
              <colgroup>
                <col width="30%">
                <col width="*">
              </colgroup>
              <tbody>
                <tr>
                  <th scope="row" class="required"><span>담장자 명</span></th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>부서</span></th>
                  <td> </td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>직급</span></th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row"><span>전화번호</span></th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>핸드폰번호</span></th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>이메일</span></th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row"><span>담당자<br/> 근무지 주소</span></th>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>  
      <div class="flex-row">
        <!-- SK시그넷 담당자 정보 -->
        <div class="col-lg-6 col-md-12">
          <sub-title title="SK시그넷 담당자 정보"/>
          <div class="table">
            <table>
              <colgroup>
                <col width="30%">
                <col width="*">
              </colgroup>
              <caption class="sr-only">SK시그넷 담당자 정보</caption>
              <tbody>
                <tr></tr>
                <tr>
                  <th scope="row" class="required"><span>부서</span></th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>직급</span></th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>전화번호</span></th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>휴대폰번호</span></th>
                  <td></td>
                </tr>
                <tr>
                  <th scope="row" class="required"><span>이메일</span></th>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- 고객사 대시보드 템플릿 정보 -->
        <div class="col-lg-6 col-md-12 subject">
          <sub-title title="고객사 대시보드 템플릿 정보" />
          <div class="table">
            <table>
              <colgroup>
                <col width="30%">
                <col width="*">
              </colgroup>
              <caption class="sr-only">고객사 대시보드 템플릿 정보</caption>
              <tbody>
                <tr>
                  <th scope="row"><span>대시보드 디자인</span></th>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- 비고 -->
          <sub-title class="mt-20" title="비고" />
          <textarea name="" id=""  style="height: 147px;" class="form-control"></textarea>
        </div>
      </div>

      <div class="btn-area clearFix">
        <div class="pull-left">
          <button type="button" class="btn btn-default btn-yellow btn-fixed">목록</button>
        </div>
        <div class="pull-right">
          <button
            type="button"
            class="btn btn-default btn-gray btn-fixed"
            @click="modalOpen">개인정보 마스킹제거</button>
          <button type="button" class="btn btn-default btn-orange btn-fixed">저장</button>
        </div>
      </div>
    </div>
    
    <!--// CONTENT -->  
    <footer-bottom/>
    <onm-ia-adm-sup031/>
  </main>
</template>

<script>
import HeaderTop from '@/components/HeaderTop'
import SideBar from '@/components/SideBar'
import FooterBottom from '@/components/FooterBottom'
import HeadTitle from '@/components/HeadTitle'
import SubTitle from '@/components/SubTitle'
import OnmIaAdmSup031 from '@/views/OnmIaAdmSup031' //Modal
import { mapState, mapMutations } from 'vuex'


export default {
  components: {
    HeaderTop,
    SideBar,
    FooterBottom,
    HeadTitle,
    SubTitle,
    OnmIaAdmSup031
  },
  data() {
    return {
      customerLists: ['정상', '일시중지', '계약해지'],
      dashBoardLists: ['대시보드_A', '대시보드_B', '대시보드_C'],
      addressCheckbox: true,
    }
  },
  computed: {
    ...mapState([
      'windowSize',
      'deviceSideisActive',
      'sideBarisActive',
      'isActiveModal'
    ]),
  },
  created() {
  }, 
  mounted() {
    window.addEventListener('resize', () => {
      this.resize()
    })
    this.resize()
  },
  watch: {
  },
  methods: {
    ...mapMutations({
      resize: 'RESIZE',
      modalOpen: 'MODAL_OPEN'
    }),
  }
}
</script>

<style scoped>
</style>