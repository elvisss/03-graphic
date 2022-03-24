<template>
  <div>
    <LineChart :chartData="testData" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from 'chart.js';
import axios from 'axios';

Chart.register(...registerables);

@Options({
  components: {
    LineChart,
  },
  sockets: {
    connect: () => {
      console.log('connected');
    },
    disconnect: () => {
      console.log('disconnected');
    },
    changeGraphic(data: any) {
      this.testData = data
    }
  }
})
export default class Graphic extends Vue {
  $socket: any;
  testData = {
    labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
    datasets: [
      {
        label: 'Ventas',
        data: [30, 40, 60, 70, 5],
      },
    ],
  };

  created() {
    this.getData()
  }

  async getData() {
    const { data } = await axios.get('http://localhost:3000/graphic');
    console.log({ data });
    this.testData = data;
  }
}
</script>

<style scoped lang="scss"></style>
