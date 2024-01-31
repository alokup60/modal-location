<script>
  import { monthlyChart } from "$lib/stores/monthlychartstore";
  export let chart;

  // export let form;
  // let allData;
  // if (form) {
  //   allData = form?.newEmi.monthlyChart;
  // }
</script>

<section class="w-full flex justify-center mx-auto items-center mt-[2rem]">
  {#if chart}
    <table class="w-10/12">
      <tr>
        <th>OpeningBal</th>
        <th>Interest</th>
        <th>Principal</th>
        <th>ClosingBal</th>
        <th>EMI</th>
        <th>Prepayment</th>
      </tr>

      {#each chart as item}
        <tr class="text-center">
          <td>{item.openingBalance}</td>
          <td>{item.interest}</td>
          <td>{item.principal}</td>
          <td>{item.closingBalance}</td>
          <td>{item.emi}</td>
          {#if item.partPayment}
            <td>{item.partPayment}</td>
          {:else}
            {(item.partPayment = 0)}
          {/if}
        </tr>
      {/each}
    </table>
  {/if}
</section>
