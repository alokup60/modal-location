<script>
  import { cities } from "$lib/data/cities.js";

  let delhi = cities.delhi;
  let bang = cities.banglore;
  let mumbai = cities.mumbai;
  let noida = cities.noida;
  let gNoida = cities.gNoida;
  let faridabad = cities.faridabad;
  let gurgaon = cities.gurgaon;
  //   console.log(delhi);

  let Cities = [delhi, bang, mumbai, noida, gNoida, faridabad, gurgaon];
  let allCities = [];

  //store in an array and insert into an new array
  for (let key in Cities) {
    // console.log(Cities[key]);
    allCities.push(Cities[key]);
  }
  // console.log(allCities);
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</svelte:head>

<section class="w-10/12 mx-auto">
  <div
    class="w-10/12 bg-white rounded-md items-center mx-auto mt-[8rem] relative"
  >
    <h2 class="text-center font-bold pt-4 tracking-wider">Select your City</h2>
    <div class="absolute top-0 right-3 text-gray-300 text-2xl cursor-pointer">
      <i class="fa-solid fa-circle-xmark"></i>
    </div>

    <div class="flex items-center gap-6 py-4 mx-auto flex-wrap w-10/12">
      {#each allCities as { id, cityName, svg }, index (id)}
        <div
          class="border rounded-xl py-6 w-3/12 flex flex-col gap-4 items-center mx-auto relative cursor-pointer hover:shadow-md hover-container hover-effect hover:shadow-green-100 hover:text-green-400"
        >
          <div
            class="bg-white absolute -top-2 w-[80%] flex justify-center hover-effect svg-container z-20"
          >
            <img src={svg} alt={cityName} width="110px" height="72px" />
          </div>
          <p
            class="font-semibold tracking-wider absolute bottom-0 flex justify-center items-center mx-auto flex-wrap"
          >
            {cityName}
          </p>
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .hover-container {
    height: 6rem;
  }

  .hover-container:hover .hover-effect img {
    transform-origin: center bottom;
    transform: scale(1.2);
    transition: transform 0.5s ease-in-out;
  }

  .svg-container {
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }

  .svg-container:hover {
    filter: brightness(100%);
    transition: filter 0.3s ease;
  }
</style>
