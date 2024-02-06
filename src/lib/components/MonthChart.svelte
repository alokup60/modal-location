<script>
  import { monthlyChart } from "$lib/stores/monthlychartstore";
  export let chart;
  export let form;

  console.log(chart, "monthlyChart");

  // let partPay;
  // let opBal;
  // chart.map((item) => {
  //   partPay = item.partPayment;
  //   opBal = item.openingBalance;
  // });
  // let newOpenBal = opBal - partPay;
</script>

<section class="w-full flex justify-center mx-auto items-center mt-[2rem]">
  {#if chart}
    <table class="w-10/12">
      <tr>
        <th>Year</th>
        <th>OpeningBal</th>
        <th>Interest</th>
        <th>Principal</th>
        <th>ClosingBal</th>
        <th>EMI</th>
        <th>Prepayment</th>
      </tr>

      {#each chart as item}
        <tr class="text-center">
          <td>{item.month}</td>
          <!-- <td>{item.openingBalance}</td> -->

          <!-- {#if item.month == 1}
            <td>{item.openingBalance}</td>
          {:else}
            {#each item as it}
              <td>{it.openingBalance - it.partPayment}</td>
            {/each} -->
          <!-- <td>{newOpenBal}</td> -->
          <!-- {/if} -->

          <!-- {#if item.partPayment}
            <td>{newOpenBal}</td>
          {:else}
          {/if} -->
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
