<!-- <script>
  export let freq;
  export let year;
  export let month;
  let allYear = JSON.parse(year);
  let allMonths = JSON.parse(month);
  let allFreq = JSON.parse(freq);
</script>

<section class="w-full flex justify-center mx-auto items-center mt-[2rem]">
  <form
    method="post"
    class="w-full flex justify-center mx-auto"
    action="?/calculateEmi"
  >
    <div class="container w-4/12 flex items-center flex-col gap-4">
      <h2 class="font-semibold text-xl">Part Payment</h2>
      <div class="tenure flex justify-between mx-auto w-full items-center">
        <label for="year" class="font-semibold text-md">Year</label>
        <div>
          <select
            name="partMonth"
            class="outline-none border rounded-md px-2 py-1"
          >
            {#each allMonths as mon, index}
              <option value={mon}>{mon}</option>
            {/each}
          </select>
          <select
            name="partYear"
            class="outline-none border rounded-md px-2 py-1"
          >
            {#each allYear as yr, index}
              <option value={yr}>{yr}</option>
            {/each}
          </select>
        </div>
      </div>
      <div class="tenure flex justify-between mx-auto w-full items-center">
        <label for="year" class="font-semibold text-md">Frequencies</label>
        <div>
          <select name="freq" class="outline-none border rounded-md px-2 py-1">
            {#each allFreq as freq, index}
              <option value={freq}>{freq}</option>
            {/each}
          </select>
        </div>
      </div>
      <div class="tenure flex justify-between mx-auto w-full items-center">
        <label for="year" class="font-semibold text-md">Amount</label>
        <input
          type="text"
          placeholder="Enter Amount"
          name="partPayment"
          class="px-2 py-1 rounded-md border outline-none"
        />
      </div>
      <button
        type="submit"
        class="bg-green-400 px-4 py-2 rounded-md text-white font-semibold hover:bg-green-500"
        >Make Payment</button
      >
    </div>
  </form>
</section> -->
