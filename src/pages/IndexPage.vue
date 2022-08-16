<template>
  <q-page padding>
    <div>
      <div class="row q-col-gutter-sm justify-center">
        <div
          v-for="sms in smsDetails"
          :key="sms.Cli"
          class="col-12 col-sm-6 col-md-3 col-lg-2"
        >
          <CardComponentVue v-bind="sms" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useUpdatedAsOfStore } from 'stores/updatedAsOf'
import { SMSModel } from 'src/models/SmsDataModel'
import CardComponentVue from 'src/components/CardComponent.vue'
import { getAll as getAllSmpp } from 'src/services/smpp'
import { getAll as getAllIresolve } from 'src/services/iresolve'
import { getAll as getAllEsc } from 'src/services/esc'

const smsDetails = ref<SMSModel[]>()
const updatedAsOf = useUpdatedAsOfStore()

const fetchData = async () => {
  const datetime: Date = new Date()
  updatedAsOf.timestamp = datetime.toLocaleString()

  // const { data: smmData } = await getAllSmpp()
  // const { data: iresolveData } = await getAllIresolve()
  // const { data: escData } = await getAllEsc()

  // smsDetails.value = [...smmData, ...iresolveData, ...escData]

  const promisedData = Promise.all([getAllSmpp(), getAllIresolve(), getAllEsc()])
  const allData = (await promisedData).map(m => m.data).flat()

  smsDetails.value = allData

  setTimeout(() => { fetchData() }, 3000)
}

fetchData()
</script>
