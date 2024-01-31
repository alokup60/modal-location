<script>
  export let form;
  let allData = form?.newEmi.monthlyChart;
  // console.log(form.newEmi.monthlyChart);
</script>

<section class="w-full flex justify-center mx-auto items-center mt-[2rem]">
  {#if form?.newEmi}
    <table class="w-10/12">
      <tr>
        <th>opening</th>
        <th>interest</th>
        <th>principal</th>
        <th>closingBal</th>
        <th>emi</th>
      </tr>
      {#each allData as item}
        <tr class="text-center">
          <td>{item.openingBalance}</td>
          <td>{item.interest}</td>
          <td>{item.principal}</td>
          <td>{item.closingBalance}</td>
          <td>{item.emi}</td>
        </tr>
      {/each}
    </table>
  {/if}
</section>
