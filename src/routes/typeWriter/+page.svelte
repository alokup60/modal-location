<script>
  let arr = ["Morgage", "Confirmation", "Sanctioned"];
</script>

<section class="bg-[#ffff]">
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
    font-style: italic;
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
