<script>
  export let seoList;
  // console.log(typeof seoList);

  let allSeo = JSON.parse(seoList);
  console.log(allSeo);

  // allSeo.map((item) => {
  //   console.log(item);
  // });

  let newArr = [];

  const handleClick = (item) => {
    newArr = new Set([...newArr, item]);
  };
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
        class="bg-green-400 px-4 py-2 rounded-md text-white hover:bg-green-500"
        >Add SEO</button
      >
    </div>
  </form>
</section>

<section class="w-full flex justify-center mx-auto items-center mt-[2rem]">
  <ul class=" w-6/12 gap-4 flex justify-center items-center mx-auto">
    {#each allSeo as seo}
      <li
        class="bg-violet-500 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-violet-600"
        on:click={() => handleClick(seo)}
      >
        {seo}
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
