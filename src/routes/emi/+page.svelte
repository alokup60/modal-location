<script>
  import EmiCalc from "../components/EmiCalc.svelte";
  import DisplayEmiDetails from "../components/DisplayEmiDetails.svelte";
  import MonthChart from "../components/MonthChart.svelte";
  export let form;
  export let data;
</script>

<EmiCalc
  year={data?.allYear}
  month={data?.allMonths}
  actions="?/calculateEmi"
/>

<DisplayEmiDetails {form} />

<MonthChart {form} />
