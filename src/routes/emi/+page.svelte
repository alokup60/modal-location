<script>
  export let form;
  //   export let data;
</script>

<!-- {form.loanAmt} -->
<section class="w-full flex justify-center mx-auto items-center">
  <form
    method="post"
    action="?/inputData"
    class="w-full flex justify-center mx-auto"
  >
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
      <button
        formaction="?/calculateEmi"
        class="bg-green-400 px-4 py-2 rounded-md text-white font-semibold hover:bg-green-500"
        >Calculate</button
      >
    </div>
  </form>
</section>

<section class="w-full flex justify-center mx-auto items-center mt-[2rem]">
  <div class="w-4/12 flex flex-col gap-2">
    {#if form?.success}
      <div class="flex w-full justify-between">
        <span class="font-semibold text-md">Monthly EMI:</span>
        <p><i class="fa-solid fa-indian-rupee-sign"></i> {form?.newEmi}</p>
      </div>

      <div class="flex w-full justify-between">
        <span class="font-semibold text-md">Principal Amount:</span>

        <p><i class="fa-solid fa-indian-rupee-sign"></i> {form?.loanAmt}</p>
      </div>

      <div class="flex w-full justify-between">
        <span class="font-semibold text-md">Total Interest:</span>
        <p>
          <i class="fa-solid fa-indian-rupee-sign"></i>
          {form?.totalInterest}
        </p>
      </div>
      <div class="flex w-full justify-between">
        <span class="font-semibold text-md">Total Amount:</span>
        <p><i class="fa-solid fa-indian-rupee-sign"></i> {form?.totalAmt}</p>
      </div>
    {/if}
  </div>
</section>

<style>
  input[type="number"] {
    /* appearance: none; */
    display: hidden;
  }
</style>
