<script>
  import { seoData } from "$lib/data/seo.js";
  let newArr = [];

  const handleClick = (item) => {
    // newArr.push(seoData[index]);
    newArr = new Set([...newArr, item]);
    // console.log("press");
  };
</script>

<section class="w-full flex justify-center mx-auto items-center mt-[3rem]">
  <div class="container w-4/12 flex justify-center items-center mx-auto">
    <ul class=" w-6/12 gap-4 flex justify-center items-center mx-auto">
      {#each seoData as dt, index}
        <li
          class="bg-violet-500 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-violet-600"
          on:click={() => handleClick(dt.author)}
        >
          {dt.author}
        </li>
        <li
          class="bg-violet-500 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-violet-600"
          on:click={() => handleClick(dt.name)}
        >
          {dt.name}
        </li>
        <li
          class="bg-violet-500 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-violet-600"
          on:click={() => handleClick(dt.title)}
        >
          {dt.title}
        </li>
        <li
          class="bg-violet-500 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-violet-600"
          on:click={() => handleClick(dt.canocal)}
        >
          {dt.canocal}
        </li>
        <li
          class="bg-violet-500 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-violet-600"
          on:click={() => handleClick(dt.description)}
        >
          {dt.description}
        </li>
        <li
          class="bg-violet-500 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-violet-600"
          on:click={() => handleClick(dt.keywords)}
        >
          {dt.keywords}
        </li>
        <li
          class="bg-violet-500 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-violet-600"
          on:click={() => handleClick(dt.subject)}
        >
          {dt.subject}
        </li>
        <li
          class="bg-violet-500 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-violet-600"
          on:click={() => handleClick(dt.robots)}
        >
          {dt.robots}
        </li>
        <li
          class="bg-violet-500 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-violet-600"
          on:click={() => handleClick(dt.copyright)}
        >
          {dt.copyright}
        </li>
      {/each}
    </ul>
  </div>
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
