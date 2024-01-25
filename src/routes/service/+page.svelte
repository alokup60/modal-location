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
    allCities.push(Cities[key]);
  }
</script>

<section>
  <div
    class="flex mx-auto h-[20rem] w-11/12 overflow-x-hidden relative rounded-md mt-6"
  >
    <div
      style="background: linear-gradient(to right, #f4f8ff 0%, #f4f8ff 50%, #fff0 50%, #fff0 100%); filter:blur(10px)"
      class="absolute w-[6%] h-full left-0 z-50"
    ></div>
    {#each allCities as { id, cityName, svg }, index (id)}
      <div
        class="flex flex-col justify-center w-8/12 items-center cursor-pointer mx-auto hover-container hover-effect companiesList"
      >
        <img src={svg} alt={cityName} class="svg-container" />

        <p class="font-semibold tracking-wider">{cityName}</p>
      </div>
      <br />
    {/each}
    <div
      style="background: linear-gradient(to left, #f4f8ff 0%, #f4f8ff 50%, #fff0 50%, #fff0 100%); filter:blur(10px)"
      class="absolute w-[6%] h-full right-0 z-10"
    ></div>
  </div>
</section>

<style>
  .svg-container {
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }

  .svg-container:hover {
    filter: brightness(100%);
    transition: filter 0.3s ease;
    color: green;
  }
  .svg-container,
  p:hover {
    color: green;
  }

  .companiesList {
    animation: 10s infinite linear moveCompany;
  }

  @keyframes moveCompany {
    from {
      transform: translateX(-100px);
    }
    to {
      transform: translateX(calc(100% + 100px));
    }
  }
</style>
