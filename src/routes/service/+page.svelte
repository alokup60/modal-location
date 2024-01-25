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
  {#each allCities as item}
    <div
      class="flex flex-col justify-center items-center mx-auto companiesList"
    >
      <img src={item.svg} alt={item.cityName} />

      <p>{item.cityName}</p>
    </div>
    <br />
  {/each}
  <div
    style="background: linear-gradient(to left, #f4f8ff 0%, #f4f8ff 50%, #fff0 50%, #fff0 100%)"
    class="absolute w-[4%] h-full right-0 z-50"
  ></div>
</div>

<!-- <div
      style="background: linear-gradient(0deg, #f4f8ff, #fff0)"
      class="absolute w-full h-[50px] right-0 z-50"
    ></div> -->
<!-- </div>
</section> -->

<!-- 
<section>
  <div class="h-[500px] w-[500px] relative overflow-y-hidden mx-auto">
    <div
      style="background: linear-gradient(180deg, #f4f8ff, #fff0)"
      class="absolute w-full h-[150px] top-0 z-50"
    ></div>

    <img alt="" class="absolute h-auto object-cover companiesList" />

    <div
      style="background: linear-gradient(0deg, #f4f8ff, #fff0)"
      class="absolute w-full h-[150px] bottom-0 z-50"
    ></div>
  </div>
</section> -->

<style>
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
