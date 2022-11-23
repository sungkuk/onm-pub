<template>
  <section class="onmContent">
    <head-title title="충전기 연결포트 통계"/>
    <div class="gridMultiSearch mb-4">
      <div class="searchGroup">
        <label for="">연결포트 선택</label>
        <v-select
          :items="items"
          class="selectBox"
          style="width: 200px;"
          label="선택"
          dense
          solo />
      </div>
    </div>
    <sub-title title="2022-11-01 12:12 현재" />
    <div class="flex-row">
      <!-- 충전기 연결포트 통계 -->
      <div class="col-lg-6 col-md-12">
        <div class="table">
          <table>
            <caption class="sr-only">배치 기본정보</caption>
            <colgroup>
              <col width="30%">
              <col width="*">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">지역</th>
                <th scope="col">통계</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><span>전체</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>서울특별시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>부산광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>대구광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>인천광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>광주광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>대전광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>울산광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>세종특별자치시</span></th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <!-- 충전기 연결포트 통계 -->
      <div class="col-lg-6 col-md-12 subject">
        <div class="table">
          <table>
            <caption class="sr-only">배치 기본정보</caption>
            <colgroup>
              <col width="30%">
              <col width="*">
            </colgroup>
            <thead>
              <tr>
                <th scope="col">지역</th>
                <th scope="col">통계</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"><span>전체</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>서울특별시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>부산광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>대구광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>인천광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>광주광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>대전광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>울산광역시</span></th>
                <td></td>
              </tr>
              <tr>
                <th scope="row"><span>세종특별자치시</span></th>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="btn-area text-right">
      <button type="button" class="btn btn-default btn-darkGreen">현재 연결 충전기 목록 엑셀  다운로드</button>
    </div>
    <!-- 이용가이드 -->
    <sub-title title="이용가이드" />
    <use-guide
      :useGuideLists="useGuideLists" />
  </section>
</template>

<script>
import HeadTitle from '@/components/HeadTitle'
import SubTitle from '@/components/SubTitle'
import UseGuide from '@/components/UseGuide'
import DatePicker from '@/components/DatePicker'

export default {
  components: {
    HeadTitle,
    SubTitle,
    UseGuide,
    DatePicker
  },
  data() {
    return {
      useGuideLists: [
        '- 이 페이지는 충전기 8887포트를 통해 연결된 충전기수에 대한 통계로 플랫폼통합관리자만 사용이 가능합니다.',
      ],
      items: ['아이템-1', '아이템-2', '아이템-3'],
    }
  },
  computed: {
  },
  created() {
  }, 
  watch: {
  },
  methods: {
  }
}
</script>

<style scoped>
</style>