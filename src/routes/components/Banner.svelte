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
  export let allCities = [];

  //store in an array and insert into an new array
  $: {
    for (let key in Cities) {
      allCities = new Set([...allCities, Cities[key]]);
    }
  }
</script>

<section>
  <div
    class="flex mx-auto h-[10rem] w-11/12 overflow-x-hidden relative rounded-md mt-6"
  >
    <div
      style="background: linear-gradient(to right, #f4f8ff 0%, #f4f8ff 50%, #fff0 50%, #fff0 100%); filter:blur(10px)"
      class="absolute w-[6%] h-full left-0 z-50"
    ></div>
    <marquee
      direction="right"
      class="flex marquee-container"
      onMouseOver="this.stop()"
      onMouseOut="this.start()"
    >
      <div class="flex justify-center items-center mx-auto">
        {#each allCities as { id, cityName, svg }, index (id)}
          <div
            class="flex flex-col justify-center w-8/12 items-center cursor-pointer hover-container hover-effect"
          >
            <img src={svg} alt={cityName} class="svg-container" />
            <p class="font-semibold tracking-wider">{cityName}</p>
          </div>
        {/each}
      </div>
    </marquee>
    <!-- <div class="animation-container flex"></div> -->

    <div
      style="background: linear-gradient(to left, #f4f8ff 0%, #f4f8ff 50%, #fff0 50%, #fff0 100%); filter:blur(10px)"
      class="absolute w-[6%] h-full right-0 z-10"
    ></div>
  </div>
</section>

<style>
  .marquee-container:hover .animation-container {
    animation-play-state: paused;
  }

  /* Add a class to resume the animation when not hovering */
  .marquee-container:not(:hover) .animation-container {
    animation-play-state: running;
  }
  .svg-container {
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }

  .svg-container:hover {
    filter: brightness(100%);
    transition: filter 0.3s ease;
  }
  .svg-container,
  p:hover {
    color: green;
  }

  .animation-container {
    overflow: hidden;
    white-space: nowrap;
    animation: 10s linear infinite moveCompany;
  }

  .companiesList {
    /* animation: 10s infinite linear moveCompany; */
    /* display: inline-block; */
    /* display: flex; */
    /* animation-direction: alternate; */
    -webkit-animation: rightThenLeft 4s linear infinite;
  }

  @keyframes rightThenLeft {
    0% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(calc(100% + 10px));
    }
  }
</style>
