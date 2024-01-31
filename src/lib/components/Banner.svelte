<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";
  import { cities } from "$lib/data/cities.js";

  export let allCities = [];
  console.log(allCities);

  for (let key in cities) {
    allCities = new Set([...allCities, cities[key]]);
  }
  onMount(() => {
    // let t1;

    // console.clear();

    gsap.utils.toArray(".stb_line_single").forEach((line, i) => {
      const speed = 2; // (in pixels per second)

      const links = line.querySelectorAll(".items");

      let tl = horizontalLoop(links, {
        speed: speed,
        reversed: true,
        repeat: -1,
      });

      links.forEach((link) => {
        link.addEventListener("mouseenter", () =>
          gsap.to(tl, { timeScale: 0, overwrite: true })
        );
        link.addEventListener("mouseleave", () =>
          gsap.to(tl, { timeScale: -1, overwrite: true })
        );
      });
    });

    function horizontalLoop(items, config) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({
          repeat: config.repeat,
          paused: config.paused,
          defaults: { ease: "none" },
          onReverseComplete: () =>
            tl.totalTime(tl.rawTime() + tl.duration() * 100),
        }),
        length = items.length,
        startX = items[0].offsetLeft,
        times = [],
        widths = [],
        xPercents = [],
        curIndex = 0,
        pixelsPerSecond = (config.speed || 1) * 100,
        snap =
          config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
        totalWidth,
        curX,
        distanceToStart,
        distanceToLoop,
        item,
        i;
      gsap.set(items, {
        xPercent: (i, el) => {
          let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
          xPercents[i] = snap(
            (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 +
              gsap.getProperty(el, "xPercent")
          );
          return xPercents[i];
        },
      });
      gsap.set(items, { x: 0 });
      totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
          gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0);
      for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
          distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        tl.to(
          item,
          {
            xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
            duration: distanceToLoop / pixelsPerSecond,
          },
          0
        )
          .fromTo(
            item,
            {
              xPercent: snap(
                ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
              ),
            },
            {
              xPercent: xPercents[i],
              duration:
                (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
              immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond
          )
          .add("label" + i, distanceToStart / pixelsPerSecond);
        times[i] = distanceToStart / pixelsPerSecond;
      }
      function toIndex(index, vars) {
        vars = vars || {};
        Math.abs(index - curIndex) > length / 2 &&
          (index += index > curIndex ? -length : length);
        let newIndex = gsap.utils.wrap(0, length, index),
          time = times[newIndex];
        if (time > tl.time() !== index > curIndex) {
          vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
          time += tl.duration() * (index > curIndex ? 1 : -1);
        }
        curIndex = newIndex;
        vars.overwrite = true;
        return tl.tweenTo(time, vars);
      }
      tl.next = (vars) => toIndex(curIndex + 1, vars);
      tl.previous = (vars) => toIndex(curIndex - 1, vars);
      tl.current = () => curIndex;
      tl.toIndex = (index, vars) => toIndex(index, vars);
      tl.times = times;
      tl.progress(1, true).progress(0, true);
      if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
      }
      return tl;
    }
  });
</script>

<section class="w-10/12 flex justify-center mx-auto mt-[4rem] rounded-md">
  <div class="services-ticker-block">
    <div
      style="background: linear-gradient(90deg, rgba(7,36,0,0.6168592436974789) 0%, rgba(0,255,158,0.8633578431372549) 100%); filter:blur(10px)"
      class="absolute w-[6%] h-full -left-1 z-50"
    ></div>
    <div class="stb_line_single">
      {#each allCities as { id, cityName, svg }, index (id)}
        <div
          class={`stb-item items svg-container ${
            index === allCities.length - 1 ? "last:border-b-2" : ""
          }`}
        >
          <img src={svg} alt={cityName} width="100px" height="80px" />
          <p>{cityName}</p>
        </div>
      {/each}
    </div>
    <div
      style="background: linear-gradient(90deg, rgba(7,36,0,0.6168592436974789) 0%, rgba(0,255,158,0.8633578431372549) 100%); filter:blur(10px)"
      class="absolute w-[6%] h-full right-0 z-10"
    ></div>
  </div>
</section>

<style>
  .services-ticker-block {
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
  }

  .stb_line_single {
    position: relative;
    white-space: nowrap;
    padding: 0;
    will-change: transform;
    display: flex;
    flex-direction: row;
  }

  .stb-item {
    padding: 0;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 5rem;
    color: #2797fe;
    font-family: "Ivar Display";
    font-weight: 400;
    letter-spacing: 0.3rem;
    cursor: pointer;
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

  @keyframes rightThenLeft {
    0% {
      transform: translateX(-10px);
    }
    100% {
      transform: translateX(calc(100% + 10px));
    }
  }
</style>
