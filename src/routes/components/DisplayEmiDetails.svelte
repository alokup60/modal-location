<script>
  export let form;
</script>

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
