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
    console.log(Cities[key]);
    allCities.push(Cities[key]);
  }
  console.log(allCities);
</script>

<!-- <section>
  <div class="h-[500px] w-10/12 relative overflow-x-hidden mx-auto">
    <div
      style="background: linear-gradient(90deg, #f4f8ff, #fff0)"
      class="absolute w-full h-[50px] left-0 z-50"
    ></div>
    {#each allCities as { id, cityName, svg }, index (id)}
      <div
        class="flex flex-col justify-center items-center mx-auto object-cover companiesList"
      >
        <img src={svg} alt={cityName} class="" />
        <p>{cityName}</p>
      </div>
      <br />
    {/each}
    <div
      style="background: linear-gradient(0deg, #f4f8ff, #fff0)"
      class="absolute w-full h-[50px] right-0 z-50"
    ></div>
  </div>
</section> -->

<!-- <section> -->
<div
  class="flex mx-auto h-[20rem] w-10/12 overflow-x-hidden relative rounded-md mt-6"
>
  <div
    style="background: linear-gradient(to right, #f4f8ff 0%, #f4f8ff 50%, #fff0 50%, #fff0 100%)"
    class="absolute w-[4%] h-full left-0 z-50"
  ></div>
  {#each allCities as { id, cityName, svg }, index (id)}
    <div
      class="flex flex-col justify-center items-center cursor-pointer mx-auto companiesList hover-container hover-effect"
    >
      <img src={svg} alt={cityName} class="svg-container" />

      <p>{cityName}</p>
    </div>
    <br />
  {/each}
  <div
    style="background: linear-gradient(to left, #f4f8ff 0%, #f4f8ff 50%, #fff0 50%, #fff0 100%)"
    class="absolute w-[4%] h-full right-0 z-50"
  ></div>
</div>

<style>
  .hover-container:hover .hover-effect img {
    /* transform-origin: center bottom; */
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

  .companiesList {
    animation: 20s infinite linear moveCompany;
  }

  @keyframes moveCompany {
    0% {
      left: 0;
    }
    100% {
      left: 100%;
    }
  }
</style>
