<script>
  export let seoList;

  let allSeo = JSON.parse(seoList);
  console.log(allSeo);

  let newArr = [];

  // let newArr = JSON.parse(localStorage.getItem("newArr")) || [];

  const handleClick = (event, item) => {
    event.stopPropagation();
    newArr = Array.from(new Set([...newArr, item]));
    // localStorage.setItem("newArr", JSON.stringify(newArr));
  };

  // if (typeof localStorage !== "undefined") {
  //   newArr = JSON.parse(localStorage.getItem("newArr")) || [];
  // } else {
  //   console.warn(
  //     "localStorage is not available. Data will not persist across page refreshes."
  //   );
  // }

  // const handleClick = (event, item) => {
  //   event.stopPropagation();
  //   newArr = Array.from(new Set([...newArr, item]));
  //   if (typeof localStorage !== "undefined") {
  //     localStorage.setItem("newArr", JSON.stringify(newArr));
  //   } else {
  //     console.warn(
  //       "localStorage is not available. Data will not persist across page refreshes."
  //     );
  //   }
  // };

  // onMount(() => {
  //   console.log("Component mounted");
  // });

  // const handleClick = (event, item) => {
  //   event.stopPropagation();
  //   const index = newArr.indexOf(item);

  //   newArr = new Set([...newArr, item]);
  //   console.log("outer");
  // };
</script>

<section class="w-full flex justify-center mx-auto items-center mt-[3rem]">
  <form action="?/addSeo" method="post">
    <div>
      <input
        type="text"
        placeholder="Add New SEO"
        name="seoName"
        class="px-3 py-2 rounded-md outline-none border"
      />
      <button
        type="submit"
        class="bg-green-400 px-4 py-2 rounded-md text-white hover:bg-green-500"
        >Add SEO</button
      >
    </div>
  </form>
</section>

<section class="w-full flex justify-center mx-auto items-center mt-[2rem]">
  <ul class=" w-6/12 gap-4 flex justify-center items-center mx-auto">
    {#each allSeo as seo, index}
      <li
        class="bg-violet-500 text-white rounded-md cursor-pointer px-3 py-2 hover:bg-violet-600 relative"
        on:click={() => handleClick(event, seo)}
      >
        <form action="?/removeSeoList" method="post">
          <button type="submit">
            <input
              type="text"
              class="opacity-0 appearance-none hidden"
              name="removeSeo"
              bind:value={seo}
            />
            <i
              class="fa-solid fa-xmark absolute top-0 right-1 text-xs hover:text-red-500"
            ></i>
          </button>

          {seo}
        </form>
      </li>
    {/each}
  </ul>
</section>

<section class="w-full flex justify-center mx-auto items-center mt-[2rem]">
  <ul class=" w-6/12 gap-4 flex justify-center items-center mx-auto">
    {#each newArr as arr}
      <li
        class="bg-green-500 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-green-600"
      >
        {arr}
      </li>
    {/each}
  </ul>
</section>
