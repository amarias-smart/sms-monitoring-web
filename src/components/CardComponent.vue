<template>
  <q-card class="text-white">
    <q-card-section class="bg-teal-10">
      <div class="text-center text-h6">
        {{ Cli }}
      </div>
    </q-card-section>
    <q-card-section class="bg-teal-9">
      <q-markup-table
        flat
        dense
        separator="none"
        class="bg-transparent text-white"
      >
        <tbody>
          <tr>
            <td>Last Received:</td>
            <td>{{ LastReceived }}</td>
          </tr>
          <tr>
            <td>Receiving:</td>
            <td>{{ Receiving }}</td>
          </tr>
          <tr>
            <td>Received:</td>
            <td>{{ Received }}</td>
          </tr>
          <tr>
            <td>Last Sent:</td>
            <td>{{ LastSent }}</td>
          </tr>
          <tr>
            <td>Sending:</td>
            <td>{{ Sending }}</td>
          </tr>
          <tr>
            <td>Sent:</td>
            <td>{{ Sent }}</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
export interface Props {
  Cli?: string;
  LastReceived?: string;
  Receiving?: number;
  Received?: number;
  LastSent?: string;
  Sending?: number;
  Sent?: number;
}

withDefaults(defineProps<Props>(), {
  Cli: '--',
  LastReceived: '--',
  Receiving: 0,
  Received: 0,
  LastSent: '--',
  Sending: 0,
  Sent: 0
})
</script>
