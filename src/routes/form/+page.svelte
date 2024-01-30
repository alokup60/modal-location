<script>
  //   export let data;
  export let form;
  //   console.log(form.user);
</script>

<section
  class="w-full flex flex-col justify-center items-center mx-auto h-screen"
>
  {#if form?.sucess}
    <p>Succesully Logged In {form.user}</p>
  {/if}
  <form method="POST">
    <div class="flex w-full flex-col gap-2 items-center">
      <div class="username w-full flex justify-between mx-auto items-center">
        <label for="username">UserName</label>
        <input
          type="text"
          name="username"
          placeholder="enter your username"
          class="border px-2 py-1 rounded-md outline-none"
        />
      </div>
      <div class="password flex w-full justify-between mx-auto items-center">
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          class="border px-2 py-1 rounded-md outline-none"
        />
      </div>
      <button class="px-4 py-2 bg-green-400 rounded-md text-white"
        >Log In</button
      >
    </div>
  </form>
</section>
