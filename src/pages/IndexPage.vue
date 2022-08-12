<template>
  <q-page
    padding
  >
    <div>
      <q-banner
        rounded
        class="bg-deep-purple justify-center q-mb-lg"
        style="width: 50%; transform: translateX(50%);"
      >
        <div class="text-h6 text-weight-bold text-white text-center">
          Updated as of {{ smsUpdateDetail }}
        </div>
      </q-banner>

      <div class="row q-col-gutter-sm justify-center">
        <div
          v-for="sms in smsDetails"
          :key="sms.Cli"
          class="col-12 col-sm-6 col-md-3"
        >
          <CardComponentVue v-bind="sms" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SMSModel } from 'src/models/SmsDataModel'
import CardComponentVue from 'src/components/CardComponent.vue'
import { getAll as getAllSmpp } from 'src/services/smpp'

const smsUpdateDetail = ref('')
const smsDetails = ref<SMSModel[]>()

const fetchData = async () => {
  const datetime: Date = new Date()
  smsUpdateDetail.value = datetime.toLocaleString()
  const { data: smmData } = await getAllSmpp()

  smsDetails.value = smmData

  setTimeout(() => { fetchData() }, 3000)
}

fetchData()
</script>
