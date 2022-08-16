<template>
  <q-card class="text-white overflow-hidden">
    <q-card-section class="bg-teal-10">
      <div class="text-center text-h6">
        {{ Cli }} (<span class="text-weight-thin text-orange-3">{{ Total }}</span>)
      </div>
    </q-card-section>
    <q-card-section class="bg-teal-9 row q-col-gutter-sm">
      <div class="col-6">
        <q-input
          readonly
          outlined
          dense
          label="Last Received"
          :model-value="LastReceived"
        />
      </div>

      <div class="col-6">
        <q-input
          readonly
          outlined
          dense
          label="Last Sent"
          :model-value="LastSent"
        />
      </div>

      <div class="col-6">
        <q-input
          readonly
          outlined
          dense
          label="Receiving"
          :model-value="Receiving"
        />
      </div>

      <div class="col-6">
        <q-input
          readonly
          outlined
          dense
          label="Sending"
          :model-value="Sending"
        />
      </div>

      <div class="col-6">
        <q-input
          readonly
          outlined
          dense
          label="Received"
          :model-value="Received"
        />
      </div>

      <div class="col-6">
        <q-input
          readonly
          outlined
          dense
          label="Sent"
          :model-value="Sent"
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
// import { SMSModel } from 'src/models/SmsDataModel'

interface Props {
  Cli?: string;
  LastReceived?: string;
  Receiving?: number;
  Received?: number;
  LastSent?: string;
  Sending?: number;
  Sent?: number;
  Total?: number;
}

defineProps<Props>()
</script>
