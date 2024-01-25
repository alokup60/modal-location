<script>
  import { cities } from "$lib/data/cities.js";

  let delhi = cities.delhi;
  let bang = cities.banglore;

  let mumbai = cities.mumbai;

  let noida = cities.noida;
  let gNoida = cities.gNoida;
  let faridabad = cities.faridabad;
  let gurgaon = cities.gurgaon;
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
      <div
        class="border rounded-xl py-2 w-3/12 flex flex-col items-center mx-auto relative cursor-pointer hover:shadow-md hover-container hover-effect hover:shadow-green-100 hover:text-green-400"
      >
        <div
          class="bg-white absolute -top-2 w-[80%] left-11 flex justify-center hover-effect svg-container z-20"
        >
          <img
            src={bang.svg}
            alt={bang.cityName}
            class="absolute left-6 z-10"
            width="110px"
            height="72px"
          />
        </div>
        <p class="font-semibold tracking-wider absolute bottom-2">
          {bang.cityName}
        </p>
      </div>

      <div
        class="border rounded-xl py-2 w-3/12 flex flex-col items-center mx-auto relative cursor-pointer hover:shadow-md hover-container hover-effect hover:shadow-green-100 hover:text-green-400"
      >
        <div
          class="bg-white absolute -top-2 w-[80%] left-11 flex justify-center hover-effect svg-container z-20"
        >
          <img
            src={mumbai.svg}
            alt={mumbai.cityName}
            class="absolute left-0 z-10"
            width="100px"
            height="72px"
          />
        </div>
        <p class="font-semibold tracking-wider absolute bottom-2">
          {mumbai.cityName}
        </p>
      </div>

      <div
        class="border rounded-xl py-2 w-3/12 flex flex-col items-center mx-auto relative cursor-pointer hover:shadow-md hover-container hover-effect hover:shadow-green-100 hover:text-green-400"
      >
        <div
          class="bg-white absolute -top-2 w-[80%] left-11 flex justify-center hover-effect svg-container z-20"
        >
          <img
            src={gurgaon.svg}
            alt={gurgaon.cityName}
            class="absolute left-4 right-0 z-10"
            width="110px"
            height="72px"
          />
        </div>
        <p class="font-semibold tracking-wider absolute bottom-2">
          {gurgaon.cityName}
        </p>
      </div>

      <div
        class="border rounded-xl py-2 w-3/12 flex flex-col items-center mx-auto relative cursor-pointer hover:shadow-md hover-container hover-effect hover:shadow-green-100 hover:text-green-400"
      >
        <div
          class="bg-white absolute -top-2 w-[80%] left-11 flex justify-center hover-effect svg-container z-20"
        >
          <img
            src={delhi.svg}
            alt={delhi.cityName}
            class="absolute left-6 right-0 z-10"
            width="110px"
            height="72px"
          />
        </div>
        <p class="font-semibold tracking-wider absolute bottom-2">
          {delhi.cityName}
        </p>
      </div>

      <div
        class="border rounded-xl py-2 w-3/12 flex flex-col items-center mx-auto relative cursor-pointer hover:shadow-md hover-container hover-effect hover:shadow-green-100 hover:text-green-400"
      >
        <div
          class="bg-white absolute -top-2 w-[80%] left-11 flex justify-center hover-effect svg-container z-20"
        >
          <img
            src={noida.svg}
            alt={noida.cityName}
            class="absolute left-0 z-10"
            width="110px"
            height="72px"
          />
        </div>
        <p class="font-semibold tracking-wider absolute bottom-2">
          {noida.cityName}
        </p>
      </div>

      <div
        class="border rounded-xl py-2 w-3/12 flex flex-col items-center mx-auto relative cursor-pointer hover:shadow-md hover-container hover-effect hover:shadow-green-100 hover:text-green-400"
      >
        <div
          class="bg-white absolute -top-2 w-[80%] left-11 flex justify-center hover-effect svg-container z-20"
        >
          <img
            src={gNoida.svg}
            alt={gNoida.cityName}
            class="absolute left-2 z-10"
            width="80px"
            height="46px"
          />
        </div>
        <p class="font-semibold tracking-wider absolute bottom-2">
          {gNoida.cityName}
        </p>
      </div>

      <div
        class="border rounded-xl py-2 w-3/12 flex flex-col items-center mx-auto relative cursor-pointer hover:shadow-md hover-container hover-effect hover:shadow-green-100 hover:text-green-400"
      >
        <div
          class="bg-white absolute -top-2 w-[80%] left-11 flex justify-center hover-effect svg-container z-20"
        >
          <img
            src={faridabad.svg}
            alt={faridabad.cityName}
            class="absolute left-0 z-10"
            width="110px"
            height="72px"
          />
        </div>
        <p class="font-semibold tracking-wider absolute bottom-2">
          {faridabad.cityName}
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .hover-container {
    height: 6rem;
  }

  /* .hover-effect:hover .bengaluru_svg__dynamic-shade-fill {
    fill: orange;
    color: orange;
  } */

  .hover-container:hover .hover-effect img {
    /* transform-origin: center bottom; */
    transform: scale(1.2);
    transition: transform 0.5s ease-in-out;
  }

  /* .hover-container:hover .hover-effect svg {
    transform-origin: center bottom;
    transform: scale(1.2);
    transition: transform 0.5s ease-in-out;
  } */

  .svg-container {
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }

  .svg-container:hover {
    filter: brightness(100%);
    transition: filter 0.3s ease;
  }
</style>
