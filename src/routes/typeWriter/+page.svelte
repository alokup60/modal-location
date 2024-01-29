<script>
  let arr = ["Morgage", "Confirmation", "Sanctioned"];
</script>

<section class="bg-[#ffff]">
  <!-- {#each arr as arr, index (index)}
    <h1>{arr}</h1>
  {/each} -->

  <!-- <div class="wrapper relative flex">
    <div class="static-text text-[#2B6442] text-[48px] font-bold tracking-wide">
      One Day
    </div>
    <ul class="dynamic-text">
      <li><span>Morgage</span></li>
      <li><span>Confirmation</span></li>
      <li><span>Sanction</span></li>
    </ul>
  </div> -->

  <div class="text-box">
    <div class="static-text">One Day</div>
    <div class="dynamic-text">
      <div>
        <span>Morgage</span>
        <span>Confirmation</span>
        <span>Sanction</span>
      </div>
    </div>
  </div>
</section>

<!-- <style>
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
  .wrapper {
    display: flex;
  }
  .wrapper .static-text {
    position: relative;
  }
  .wrapper .dynamic-text {
    margin-left: 15px;
    margin-top: 10px;
    height: 40px;
    line-height: 40px;
    overflow: hidden;
  }
  .dynamic-text li {
    color: #f97f7f;
    font-weight: 500;
    font-size: 40px;
    letter-spacing: 1.3px;
    position: relative;
    top: 0;
    animation: slide 12s steps(3) infinite;
  }
  @keyframes slide {
    100% {
      top: -360px;
    }
  }
  .dynamic-text li span {
    position: relative;
  }

  .dynamic-text li span::after {
    content: "";
    position: absolute;
    left: 0;
    height: 100%;
    background: white;
    width: 100%;
    animation: typing 1.5s steps(12) infinite;
  }
  @keyframes typing {
    100% {
      left: 100%;
      margin: 0 -35px 0 35px;
    }
  }
</style> -->

<style>
  .text-box {
    font-size: 70px;
    font-weight: 900;
    text-align: center;
    width: 100%;
  }
  .static-text {
    display: inline-block;
    color: #2b6442;
    vertical-align: top;
  }
  .dynamic-text {
    display: inline-block;
    height: 105px;
    overflow: hidden;
  }
  .dynamic-text div {
    animation: 9s wordChange;
    animation-iteration-count: infinite;
    animation-timing-function: steps(1);
    animation-fill-mode: backwards;
  }
  .dynamic-text span {
    position: relative;
    color: #f97f7f;
    display: block;
    text-align: left;
  }
  .dynamic-text span::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;

    right: -2px;
    background-color: #ffff;
    animation: 3s textType;
    animation-iteration-count: infinite;
    animation-timing-function: steps(12);
    animation-fill-mode: backwards;
  }

  @keyframes textType {
    0% {
      left: 0;
    }
    50% {
      left: 100%;
    }
    100% {
      left: 0;
    }
  }

  @keyframes wordChange {
    0% {
      margin-top: 0;
    }
    33.333% {
      margin-top: -105px;
    }
    66.666% {
      margin-top: -210px;
    }
    100% {
      margin-top: 0;
    }
  }
</style>
