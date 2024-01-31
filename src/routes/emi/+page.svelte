<script>
  import EmiCalc from "../components/EmiCalc.svelte";
  import DisplayEmiDetails from "../components/DisplayEmiDetails.svelte";
  import MonthChart from "../components/MonthChart.svelte";
  export let form;
  export let data;
  //   export let actions;
  //   console.log(data?.allMonths);
  //   console.log(data?.allYear);
  //   console.log(form?.allYear);
</script>

<EmiCalc da={data?.allYear} mo={data?.allMonths} actions="?/calculateEmi" />

<DisplayEmiDetails {form} />

<MonthChart {form} />
