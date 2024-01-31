<script>
  //coming from main page [da,mo is a props]
  export let year;
  export let month;

  export let actions;
</script>

<section class="w-full flex justify-center mx-auto items-center">
  <form method="post" class="w-full flex justify-center mx-auto">
    <div class="container w-4/12 flex items-center flex-col gap-4">
      <h2 class="font-semibold text-xl">EMI Calculator</h2>
      <div class="loanAmount flex justify-between mx-auto w-full items-center">
        <label for="loanAmount" class="font-semibold text-md">Loan Amount</label
        >
        <input
          type="number"
          placeholder="Enter Loan Amount"
          name="loanAmount"
          class="px-2 py-1 rounded-md outline-none w-8/12 border"
        />
      </div>
      <div
        class="rateOfInterest flex justify-between mx-auto w-full items-center"
      >
        <label for="rateOfInterest" class="font-semibold text-md"
          >Interest Rate(%)</label
        >
        <input
          type="number"
          placeholder="Enter Interest Rate"
          name="rateOfInterest"
          class="px-2 py-1 rounded-md outline-none w-8/12 border"
        />
      </div>
      <div class="tenure flex justify-between mx-auto w-full items-center">
        <label for="tenure" class="font-semibold text-md"
          >Tenure (in months)</label
        >
        <input
          type="number"
          placeholder="Enter Tenure"
          name="tenure"
          class="px-2 py-1 rounded-md outline-none w-8/12 border"
        />
      </div>
      <div class="tenure flex justify-between mx-auto w-full items-center">
        <label for="year" class="font-semibold text-md">Year</label>
        <select name="month" class="outline-none border rounded-md px-2 py-1">
          {#each month as mon, index}
            <option value={mon}>{mon}</option>
          {/each}
        </select>
        <select name="year" class="outline-none border rounded-md px-2 py-1">
          {#each year as yr, index}
            <option value={yr}>{yr}</option>
          {/each}
        </select>
      </div>
      <button
        class="bg-green-400 px-4 py-2 rounded-md text-white font-semibold hover:bg-green-500"
        >Calculate</button
      >
    </div>
  </form>
</section>
