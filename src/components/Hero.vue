<template>
  <div
    ref="container"
    class="container z-10 flex flex-col items-center justify-between pb-20 pt-28 lg:flex-row lg:items-start max-w-[1380px] gap-8"
  >
    <div class="left-panel py-10 text-gray-soft text-center lg:text-left w-full bg-red-500/30">
      <div class="text-[14px] tracking-[7px] opacity-50 mb-6">
        BLOCKCHAIN ORACLE FOR MARKET DATA
      </div>
      <h1 class="text-[50px] lg:text-[64px] leading-none mb-6 font-light">
        Smarter Data for <br />
        <span class="font-semibold"> Smarter Contracts </span>
      </h1>
      <div class="text-base pb-7 body-paragraph">
        Secure your smart contracts with reliable, low-latency market data from
        institutional sources. Build apps with high-fidelity oracle feeds
        designed for mission-critical systems.
      </div>
      <div class="button-group flex flex-row gap-4 justify-center lg:justify-start">
        <div class="btn--light p-[1px] group transition-all duration-500 cursor-pointer">
            <div
              class="btn bg-gray-soft group-hover:bg-blue-deep group-hover:text-gray-soft text-blue-deep"
            >
                start integrating
            </div>
        </div>

        <div class="btn--dark p-[1px] hover:bg-gray-soft group transition-all duration-500 cursor-pointer">
            <div
              class="btn bg-blue-deep group-hover:bg-gray-soft group-hover:text-blue-deep"
            >
              see the data
            </div>
        </div>
      </div>
    </div>
    <div
      class="bg-blue-500/40 font-red-hat-display text-xl w-full border border-beige-100 bg-darkGray h-56"
    >
      Box
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="postcss">
.btn {
  position: relative;
  display: inline-block;
  padding: 0.75rem 2rem;
  font-size: 13px;
  line-height: 1;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
}

.btn--light {
  background-image: radial-gradient(
    91.27% 628.91% at 95.63% 10.42%,
    rgba(75, 52, 122, 0.15) 0,
    #4b347a 30.71%,
    #4b347a 71.52%,
    rgba(75, 52, 122, 0.19) 100%
  );
}

.btn--dark {
  background-image: radial-gradient(
    100% 628.91% at 95.63% 10.42%,
    rgba(230, 218, 254, 0) 0,
    #e6dafe 30.71%,
    #e6dafe 71.52%,
    rgba(230, 218, 254, 0) 100%
  );
}

.body-paragraph {
    margin-bottom: 1rem;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: .04em;
}
</style>
