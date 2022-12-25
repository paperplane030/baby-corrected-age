<template>
  <q-card dark bordered class="bg-grey-3 my-card" style="max-width: 520px">
    <q-card-section>
      <div class="text-h6 text-primary">寶寶矯正年齡計算機</div>
    </q-card-section>
    <q-card-section>
      <q-form @submit.prevent.stop="submit" class="q-gutter-md">
        <div class="row items-center text-dark">
          <div class="col-auto">
            <div class="label q-mr-md">出生日期</div>
          </div>
          <div class="col">
            <q-input
              outlined
              dense
              v-model="form.date"
              lazy-rules
              :rules="[(val) => !!val || '必填']"
              hide-bottom-space
            >
              <template v-slot:append>
                <q-icon name="calendar_month" class="cursor-pointer">
                  <q-popup-proxy
                    transition-show="scale"
                    transition-hide="scale"
                    ref="qDate"
                  >
                    <q-date
                      class="text-dark"
                      today-btn
                      v-model="form.date"
                      mask="YYYY/MM/DD"
                    >
                      <div class="row items-center justify-end">
                        <q-btn
                          v-close-popup
                          label="Close"
                          color="primary"
                          flat
                        ></q-btn>
                      </div>
                    </q-date>
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
        <div class="row items-center text-dark">
          <div class="col-auto">
            <div class="label q-mr-md text-dark">出生週數</div>
          </div>
          <div class="row items-center">
            <div class="col col-md-auto">
              <q-input
                outlined
                dense
                type="number"
                v-model.number="form.week"
                lazy-rules
                :rules="[(val) => !!val || '必填']"
                hide-bottom-space
              >
              </q-input>
            </div>
            <div class="col-auto q-mx-md">周</div>
            <div class="col">
              <q-select
                outlined
                dense
                v-model="form.days"
                :options="options"
                lazy-rules
                hide-bottom-space
              >
              </q-select>
            </div>
            <div class="col-auto q-ml-md">天</div>
          </div>
        </div>
        <div class="row justify-center">
          <q-btn
            type="submit"
            no-caps
            unelevated
            label="送出計算"
            color="primary"
          >
          </q-btn>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
  <q-dialog v-model="result.show">
    <q-card>
      <q-card-section class="text-center">
        <div class="text-h6">計算結果</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-body1">寶寶今天出生第 {{ result.fromBirth }} 天</div>
        <div class="text-body1 row">
          <div class="col-auto q-mr-md">矯正年齡</div>
          <span v-if="result.week < 40">
            {{ result.week }} 週 {{ result.days }} 天
          </span>
          <span v-else>
            足月 {{ result.week - 40 }} 週 {{ result.days }} 天 <br />
            足月 {{ (result.week - 40) * 7 + result.days }} 天
          </span>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn flat label="確認" color="primary" v-close-popup></q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref, reactive } from 'vue';
import moment from 'moment';

const form = reactive({
  date: '',
  week: 0,
  days: 0,
});
const options = [0, 1, 2, 3, 4, 5, 6];
const result = reactive({
  show: false,
  fromBirth: null,
  week: null,
  days: null,
});

const submit = () => {
  const today = moment();
  // 結果 1
  result.fromBirth = today.diff(moment(form.date), 'days');
  // 結果 2
  const base = form.week * 7 + form.days;
  const fixAge = base + result.fromBirth;
  result.week = Math.floor(fixAge / 7);
  result.days = fixAge - result.week * 7;
  // show 彈窗
  result.show = true;
};
</script>

<style lang="scss" scoped>
.read-the-docs {
  color: #888;
}
</style>
