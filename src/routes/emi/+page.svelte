<script>
  import EmiCalc from "$lib/components/EmiCalc.svelte";
  import DisplayEmiDetails from "$lib/components/DisplayEmiDetails.svelte";
  import MonthChart from "$lib/components/MonthChart.svelte";
  import PartialPayment from "$lib/components/PartialPayment.svelte";
  export let form;

  let chart;

  // let allData = form?.newEmi.monthlyChart;
  // console.log(form);
  if (form?.calculateEmi == true) {
    // $monthlyChart = form.newEmi.monthlyChart;
    // console.log($monthlyChart);
    chart = form?.newEmi.monthlyChart;
    // console.log(chart, "chart");
  }

  export const snapshot = {
    capture: () => chart,
    restore: (value) => (chart = value),
  };
  export let data;
</script>

<EmiCalc
  year={data?.allYear}
  month={data?.allMonths}
  freq={data?.frequencies}
/>
<!-- <PartialPayment
  year={data?.allYear}
  month={data?.allMonths}
  freq={data?.frequencies}
/> -->

<DisplayEmiDetails {form} {chart} />

<MonthChart {form} {chart} />
