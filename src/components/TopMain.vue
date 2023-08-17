<template>
  <div class="top">
    <div style="text-align: center;">
      <div>{{ screenItem.screenItem01 }}</div>
      <!-- プレビューモード -->
      <div v-if="!editMode">
        <div style="text-align: left; display: flex;">
          <div>
            <v-btn prepend-icon="mdi-file-document-edit-outline" type="button" variant="flat" color="#6162b3" style="color: white; display" @click="changeMode()">{{ screenItem.screenItem22 }}</v-btn> &nbsp;
          </div>
          <!-- <v-btn prepend-icon="mdi-file-find-outline" type="button" variant="flat" color="#6162b3" style="color: white; display" v-bind:disabled="skillSheet.careerLists == undefined || skillSheet.careerLists.length == 0" @click="pdfPreview()">{{ screenItem.screenItem23 }}</v-btn> -->
          <div>
            <form :action="pdfPreviewUrl" method="get">
              <v-btn prepend-icon="mdi-file-find-outline" type="submit" variant="flat" color="#6162b3" style="color: white; display" v-bind:disabled="skillSheet.careerLists == undefined || skillSheet.careerLists.length == 0" >{{ screenItem.screenItem23 }}</v-btn>
            </form>
          </div>
        </div><br>
        <v-table>
          <tr>
            <!-- 技術者コード -->
            <th width = "200px">{{ screenItem.screenItem02 }}</th>
            <td width = "200px" class="custom-cell">{{ skillSheet.engineerCd }}</td>
            <!-- 所属 -->
            <th width = "200px">{{ screenItem.screenItem03 }}</th>
            <td width = "200px" class="custom-cell">{{ skillSheet.affiliation }}</td>
          </tr>
          <tr>
            <!-- 年齢 -->
            <th>{{ screenItem.screenItem04 }}</th>
            <td class="text-right custom-cell">{{ skillSheet.age }}{{ screenItem.screenItem05 }}</td>          
            <!-- 性別 -->
            <th>{{ screenItem.screenItem06 }}</th>
            <td class="custom-cell">{{ skillSheet.sex }}</td>
          </tr>
          <tr>
            <!-- 希望職種 -->
            <th>{{ screenItem.screenItem07 }}</th>
            <td class="custom-cell">{{ skillSheet.hopeOccupation }}</td>
            <!-- 最寄り駅 -->
            <th>{{ screenItem.screenItem08 }}</th>
            <td class="custom-cell">{{ skillSheet.nearestStation }}</td>
          </tr>
          <tr>
            <!-- 自己PR -->
            <th height="100px">{{ screenItem.screenItem09 }}</th>
            <td colspan="3" class="custom-cell" style="white-space: pre-line;">{{ skillSheet.selfPR }}</td>
          </tr>
        </v-table>
        <v-table>
          <tr>
            <th colspan="10" class="text-center custom-cell">{{ screenItem.screenItem10 }}</th>
          </tr>
          <tr>
            <th class="" width="20px">{{ screenItem.screenItem11 }}</th>
            <th width="100px" class="text-center">{{ screenItem.screenItem12 }}</th>
            <th width="160px" class="text-center">{{ screenItem.screenItem13 }}</th>
            <th width="160px" class="text-center">{{ screenItem.screenItem14 }}</th>
            <th width="160px" class="text-center">{{ screenItem.screenItem15 }}</th>
            <th width="70px" class="text-center">{{ screenItem.screenItem16 }}</th>
            <th width="120px" class="text-center">{{ screenItem.screenItem17 }}</th>
            <th width="100px" class="text-center">{{ screenItem.screenItem18 }}</th>
            <th colspan="2" width="200px" class="text-center">{{ screenItem.screenItem19 }}</th>
          </tr>
        </v-table>
        <v-table>
          <div v-for="(item, index) in skillSheet.careerLists">
            <tr>
              <!-- 項番 -->
              <td rowspan="2" class="text-center" width="20px" style="vertical-align: middle;">{{ index + 1 }}</td>
              <!-- 作業期間 -->
              <td rowspan="2" class="custom-cell" width="100px" style="vertical-align: middle;">{{ item.workStart }} <br> ~  <br> {{ item.workEnd }} <br></td>
              <!-- 顧客名 -->
              <td width="160px" class="text-center">{{ item.customer }}</td>
              <!-- 業務名/言語 -->
              <td width="160px" class="text-center">{{ item.business }}</td>
              <!-- 機種・OS -->
              <td width="160px" class="text-center">{{ item.oS }}</td>
              <!-- DB -->
              <td width="70px" class="text-center">{{ item.language }}</td>
              <!-- 環境他 -->
              <td width="120px" class="text-center">{{ item.database }}</td>
              <!-- 言語 -->
              <td width="100px" class="text-center">{{ item.environment }}</td>
              <!-- 作業行程 -->
              <td colspan="2" width="200px" class="text-center">{{ item.workProcess }}</td>
            </tr>
            <tr>
              <!-- 作業詳細 -->
              <td colspan="4" class="custom-cell" style="white-space: pre-line;">{{ item.workDetail }}</td>
              <!-- グループ内　ポジション -->
              <th style="white-space: pre-line; vertical-align: middle;">{{ screenItem.screenItem20 }}</th>
              <td class="text-center" style="vertical-align: middle;">{{ item.position }}</td>
              <!-- メンバー数 -->
              <th width="100px" style="vertical-align: middle;">{{ screenItem.screenItem21 }}</th>
              <td class="text-center" style="vertical-align: middle;">{{ item.memberNum }}</td>
            </tr>
          </div>
        </v-table>
        <br>
      </div>

      <!-- エディタモード -->
      <div v-if="editMode">
        <div style="text-align: left;">
          <v-btn prepend-icon="mdi-arrow-left-bold" type="button" variant="flat" color="#6162b3" style="color: white; display" @click="changeMode()">{{ screenItem.screenItem24 }}</v-btn> &nbsp;
        </div>
        <br>
        <!-- <v-table density="compact"> -->
        <div style="width: 1100px;margin-left: auto;margin-right: auto;">
          <v-container style="padding: 0%;">
            <v-row no-gutters>
              <!-- 技術者コード -->
              <v-col class="header-object d-flex align-center justify-center" cols="3">{{ screenItem.screenItem02 }}</v-col>
              <v-col class="form-object" cols="3"><v-sheet>
                <v-text-field variant="outlined" hide-details="auto" v-model="skillSheet.engineerCd"></v-text-field>
                </v-sheet></v-col>
              <!-- 所属 -->
              <v-col class="header-object d-flex align-center justify-center" cols="3">{{ screenItem.screenItem03 }}</v-col>
              <v-col class="form-object" cols="3"><v-sheet>
                <v-text-field variant="outlined" hide-details="auto" v-model="skillSheet.affiliation"></v-text-field>
                </v-sheet></v-col>
            </v-row>
            <v-row no-gutters>
              <!-- 年齢 -->
              <v-col class="header-object d-flex align-center justify-center" cols="3">{{ screenItem.screenItem04 }}</v-col>
              <v-col class="form-object" cols="3"><v-sheet>
                <v-text-field style="width: 75px;" variant="outlined" hide-details="auto" :suffix="screenItem.screenItem05" maxlength="2" v-model="skillSheet.age"></v-text-field>
                </v-sheet></v-col>
              <!-- 性別 -->
              <v-col class="header-object d-flex align-center justify-center" cols="3">{{ screenItem.screenItem06 }}</v-col>
              <v-col class="form-object" cols="3"><v-sheet>
                <v-select :items="['男','女']"  hide-details="auto" v-model="skillSheet.sex"></v-select>
                </v-sheet></v-col>
            </v-row>
            <v-row no-gutters>
              <!-- 希望職種 -->
              <v-col class="header-object d-flex align-center justify-center" cols="3">{{ screenItem.screenItem07 }}</v-col>
              <v-col class="form-object" cols="3"><v-sheet>
                <v-text-field variant="outlined" hide-details="auto" v-model="skillSheet.hopeOccupation"></v-text-field>
                </v-sheet></v-col>
              <!-- 最寄り駅 -->
              <v-col class="header-object d-flex align-center justify-center" cols="3">{{ screenItem.screenItem08 }}</v-col>
              <v-col class="form-object" cols="3"><v-sheet>
                <v-text-field variant="outlined" hide-details="auto" v-model="skillSheet.nearestStation"></v-text-field>
                </v-sheet></v-col>
            </v-row>
            <v-row no-gutters>
              <!-- 自己PR -->
              <v-col class="header-object d-flex align-center justify-center" cols="3">{{ screenItem.screenItem09 }}</v-col>
              <v-col class="form-object" cols="9"><v-sheet>
                <v-textarea auto-grow hide-details="auto" v-model="skillSheet.selfPR"></v-textarea>
                </v-sheet></v-col>
            </v-row>
          <!-- </v-table> -->
          </v-container>
        </div>
        <div style="width: 1100px;margin-left: auto;margin-right: auto;">
          <v-container style="padding: 0%;">
          <!-- <v-table  class="calender-custam"> -->
            <v-row no-gutters>
              <!-- 業務経験欄 -->
              <v-col class="header-object d-flex align-center justify-center" cols="12">{{ screenItem.screenItem10 }}</v-col>
            </v-row>
            <v-row no-gutters>
              <!-- 項番 -->
              <v-col class="header-object custom-col1 d-flex align-center justify-center">{{ screenItem.screenItem11 }}</v-col>
              <!-- 作業期間 -->
              <v-col class="header-object custom-col2 d-flex align-center justify-center">{{ screenItem.screenItem12 }}</v-col>
              <!-- 顧客名 -->
              <v-col class="header-object custom-col3 d-flex align-center justify-center">{{ screenItem.screenItem13 }}</v-col>
              <!-- 業務名/言語 -->
              <v-col class="header-object custom-col3 d-flex align-center justify-center">{{ screenItem.screenItem14 }}</v-col>
              <!-- 機種・OS -->
              <v-col class="header-object custom-col3 d-flex align-center justify-center">{{ screenItem.screenItem15 }}</v-col>
              <!-- DB -->
              <v-col class="header-object custom-col3 d-flex align-center justify-center">{{ screenItem.screenItem16 }}</v-col>
              <!-- 環境他 -->
              <v-col class="header-object custom-col3 d-flex align-center justify-center">{{ screenItem.screenItem17 }}</v-col>
              <!-- 言語 -->
              <v-col class="header-object custom-col3 d-flex align-center justify-center">{{ screenItem.screenItem18 }}</v-col>
              <!-- 作業行程 -->
              <v-col class="header-object custom-col3 d-flex align-center justify-center">{{ screenItem.screenItem19 }}</v-col>
            </v-row>
            <div v-for="(item, index) in editCareerLists">
              <v-row no-gutters>
                <!-- 項番 -->
                <v-col class="custom-col1 border-up border-common"></v-col>
                <!-- 作業期間 -->
                <v-col class="custom-col2 border-up border-common d-flex align-end justify-center"><Datepicker v-model="item.workStart" :format="format" month-picker auto-apply locale="ja"></Datepicker></v-col>
                <!-- 顧客名 -->
                <v-col class="form-object"><v-sheet>
                  <v-text-field variant="outlined" hide-details="auto" v-model="item.customer"></v-text-field>
                  </v-sheet></v-col>
                <!-- 業務名/言語 -->
                <v-col class="form-object"><v-sheet>
                  <v-textarea auto-grow hide-details="auto" v-model="item.business"></v-textarea>
                  </v-sheet></v-col>
                <!-- 機種・OS -->
                <v-col class="form-object"><v-sheet>
                  <v-textarea auto-grow hide-details="auto" v-model="item.oS"></v-textarea>
                  </v-sheet></v-col>
                <!-- DB -->
                <v-col class="form-object"><v-sheet>
                  <v-textarea auto-grow hide-details="auto" v-model="item.language"></v-textarea>
                  </v-sheet></v-col>
                <!-- 環境他 -->
                <v-col class="form-object"><v-sheet>
                  <v-textarea auto-grow hide-details="auto" v-model="item.database"></v-textarea>
                  </v-sheet></v-col>
                <!-- 言語 -->
                <v-col class="form-object"><v-sheet>
                  <v-textarea auto-grow hide-details="auto" v-model="item.environment"></v-textarea>
                  </v-sheet></v-col>
                <!-- 作業行程 -->
                <v-col class="form-object"><v-sheet>
                  <v-textarea auto-grow hide-details="auto" v-model="item.workProcess"></v-textarea>
                  </v-sheet></v-col>
              </v-row>
              <v-row no-gutters>
                <!-- 項番 -->
                <v-col class="custom-col1 border-bottom border-common d-flex align-start justify-center">{{ index + 1 }}</v-col>
                <!-- 作業期間 -->
                <v-col class="custom-col2 border-bottom border-common d-flex align-start justify-center"><div>~<br><Datepicker v-model="item.workEnd" :format="format" month-picker auto-apply locale="ja"></Datepicker></div></v-col>
                <!-- 作業詳細 -->
                <v-col class="form-object custom-col4" ><v-sheet>
                  <v-textarea auto-grow hide-details="auto" v-model="item.workDetail"></v-textarea>
                  </v-sheet></v-col>
                <!-- グループ内　ポジション -->
                <v-col class="header-object d-flex align-center justify-center">{{ screenItem.screenItem20 }}</v-col>
                <v-col class="form-object"><v-sheet>
                  <v-text-field variant="outlined" hide-details="auto" v-model="item.position"></v-text-field>
                  </v-sheet></v-col>
                <!-- メンバー数 -->
                <v-col class="header-object d-flex align-center justify-center">{{ screenItem.screenItem21 }}</v-col>
                <v-col class="form-object"><v-sheet>
                  <v-text-field variant="outlined" hide-details="auto" v-model="item.memberNum"></v-text-field>
                  </v-sheet></v-col>
              </v-row>
            </div>
          </v-container>
        </div>
        <br>
        <div>
          <v-btn type="button" variant="flat" color="#6162b3" style="color: white; display" @click="addSkillList()">+ 追加</v-btn> &nbsp;
          <v-btn type="button" variant="flat" color="#6162b3" style="color: white; display" v-bind:disabled="skillSheet.careerLists == undefined || skillSheet.careerLists.length == 0" @click="deleteSkillList()">- 削除</v-btn>
        </div>
        <div style="width: 900px;margin-left: auto;margin-right: auto;">
          <v-container>
            <v-row no-gutters>
              <v-col>
                <v-dialog
                  v-model="dialog" persistent width="auto">
                  <template v-slot:activator="{ props }">
                    <v-btn prepend-icon="mdi-database-arrow-down-outline" size="x-large" type="button" variant="flat" color="#6162b3" style="color: white; display" @click="registerUpdate()">登録・更新</v-btn>
                  </template>
                  <!-- ---------------------------------------- -->
                  <v-card v-if="updateSucces">
                    <v-card-title class="text-h5">
                      登録・更新完了
                    </v-card-title>
                    <v-card-text>登録・更新が正常に完了しました</v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        color="green-darken-1"
                        variant="text"
                        @click="dialog = false, editMode = !editMode"
                      >
                        確認画面へ
                      </v-btn>
                      <v-btn
                        color="green-darken-1"
                        variant="text"
                        @click="dialog = false"
                      >
                        編集を続ける
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                  <!-- ---------------------------------------- -->
                  <v-card color="primary" v-if="loader">
                    <v-card-text>
                      Please stand by
                      <v-progress-linear
                        indeterminate
                        color="white"
                        class="mb-0"
                      ></v-progress-linear>
                    </v-card-text>
                  </v-card>
                </v-dialog>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { SkillApi, SkillSheetParam, CareerList, Configuration } from '../typescript-fetch';
import { EditCareer } from '../assets/ts/editCareerList';
import skillSheetInit from "../assets/json/skillSheet/skillSheetInit.json";
import skillSheetItem from "../assets/json/skillSheet/skillSheetItem.json";
import config from "../assets/json/config.json";
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { routeLocationKey } from 'vue-router';
import router from '../router';

export default defineComponent({
  name: 'Top', // eslint-disable-line
  components: {
    Datepicker
  },
  data: () => {
    return {
      skillSheet: {} as SkillSheetParam,
      screenItem: skillSheetItem,
      editMode: false,
      dateStartValue: new Date,
      dateEndValue: new Date,
      editCareerLists: [{} as EditCareer],
      dialog: false,
      loader: false,
      updateSucces: false,
      pdfPreviewUrl: config.url + "/skill/pdfDownload/"
    }
  },
  mounted: async function() {
    this.skillSheet = skillSheetInit
    const con = new Configuration({
        basePath: config.url,
        credentials: 'include'
    })
    await(new SkillApi(con).skillGet()).then(response => {
      this.skillSheet = response
    })
    .catch(error => {
      if(error.response.status == '401'){
        router.replace("/")
      }
    })
    
  },
  methods: {
    /**
     * 経歴一覧の行を追加
     */
    addSkillList(){
      let add: EditCareer = {
        workStart: {month: 1, year: 2023},
        workEnd: {month: 1, year: 2023},
        customer: "",
        business: "",
        oS: "",
        language: "",
        database: "",
        environment: "",
        workProcess: "",
        workDetail: "",
        position: "",
        memberNum: "",
      }
      this.editCareerLists.push(add)
    },
    /**
     * 経歴一覧の行を削除
     */
    deleteSkillList(){
      if(this.editCareerLists == undefined) {
        this.editCareerLists = [];
      }
      this.editCareerLists.splice(this.editCareerLists.length - 1, 1)
    },
    /**
     * プレビュー・編集モード変換
     */
    changeMode() {
      const skill = this.skillSheet.careerLists
      this.editCareerLists = []
      if (skill != undefined && skill.length > 0 && this.editMode == false){
        for(let i = 0; i < skill.length; i++){
          const test: EditCareer = {
            workStart: this.changeStringDate(skill[i].workStart),
            workEnd: this.changeStringDate(skill[i].workEnd),
            customer: skill[i].customer,
            business: skill[i].business,
            oS: skill[i].oS,
            language: skill[i].language,
            database: skill[i].database,
            environment: skill[i].environment,
            workProcess: skill[i].workProcess,
            workDetail: skill[i].workDetail,
            position: skill[i].position,
            memberNum: skill[i].memberNum || ""
          }
          this.editCareerLists.push(test)
        }
      }
      this.editMode = !this.editMode
    },
    /**
     * 日付変換 yyyy年MM月
     */
    format(date: Date) {
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `${year}年${month}月`;
    },
    /**
     * 登録・更新
     */
     async registerUpdate() {
      this.loader = true
      this.dialog = true
      this.skillSheet.careerLists = []
      for(let i = 0; i < this.editCareerLists.length; i++){
        const career: CareerList = {
          workStart: this.changeDateString(this.editCareerLists[i].workStart),
          workEnd: this.changeDateString(this.editCareerLists[i].workEnd),
          customer: this.editCareerLists[i].customer,
          business: this.editCareerLists[i].business,
          oS: this.editCareerLists[i].oS,
          language: this.editCareerLists[i].language,
          database: this.editCareerLists[i].database,
          environment: this.editCareerLists[i].environment,
          workProcess: this.editCareerLists[i].workProcess,
          workDetail: this.editCareerLists[i].workDetail,
          position: this.editCareerLists[i].position,
          memberNum: this.editCareerLists[i].memberNum
        }
        this.skillSheet.careerLists.push(career)
      }
      const con = new Configuration({
        basePath: config.url,
        credentials: 'include',        
      })
      const patam = {
        skillSheetParam: this.skillSheet
      }
      await(new SkillApi(con).skillPost(patam)).then(response => {
        if(response.successFlg == "0"){
          this.loader = false
          this.updateSucces = true
        }
      }).catch(error => {
        this.loader = false
        this.dialog = false
        if(error.response.status == '401'){
          router.replace("/")
        }
      })
    },
    changeStringDate(date?: string){
      if(date != undefined && date != ""){
        let a = date.split("年")
        var b: string[] = []
        b = a[1].split("月")
        return {month: Number(b[0]) - 1, year: Number(a[0])}
      } else {
        return {month:0, year:2023}
      }
    },
    changeDateString(date?: { month: number, year: number }){
      if(date != undefined){
        const month = date.month + 1
        return `${date["year"]}年${month}月`
      }
      return ""
    },
    // async pdfPreview(){
    //   const con = new Configuration({
    //     basePath: config.url,
    //     credentials: 'include',        
    //   })

    //   await(new SkillApi(con).skillPdfDownloadGet()).then(response => {
    //     console.log(response)
    //   }).catch(error => {
    //     if(error.response.status == '401'){
    //       router.replace("/")
    //     }
    //   })
    // },
  }
});
</script>

<style scoped>
table {
  border-collapse: collapse;
}

th {
  border: solid 1px rgb(154, 154, 154);
  background-color: #e7ffff;
  color: rgba(0, 0, 0, 0.6);
  
}

td {
  border: solid 1px rgb(155, 155, 155) !important;
  text-align: left;
}
.calender-custam {
  z-index: -1;
}
.header-object {
  background-color: #e7ffff;
  border: 1px solid #929292;
}
.border-up {
  border-top: 1px solid #929292;
}
.border-common {
  border-left: 1px solid #929292;
  border-right: 1px solid #929292;
}
.border-bottom {
  border-bottom: 1px solid #929292;
}
.form-object {
  border: 1px solid #929292;
}
.custom-col1 {
  flex: 0 0 3%;
  max-width: 3%;
}
.custom-col2 {
  flex: 0 0 15.1%;
  max-width: 15.1%;
}
.custom-col3 {
  flex: 0 0 11.7%;
  max-width: 11.7%;
}

.custom-col4 {
  flex: 0 0 46.8%;
  max-width: 46.8%;
}
/*
/* th, td {
  border: solid 1px black;
  text-align: left;
} */
.custom-cell {
  padding: 3px 3px;
}
</style>
