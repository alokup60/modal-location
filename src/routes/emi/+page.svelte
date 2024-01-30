<script>
  import EmiCalc from "../components/EmiCalc.svelte";
  import DisplayEmiDetails from "../components/DisplayEmiDetails.svelte";
  export let form;
</script>

<EmiCalc action="?/calculateEmi" />

<DisplayEmiDetails {form} />
