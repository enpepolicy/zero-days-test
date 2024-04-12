<template>
  <div
    class="overflow-hidden whitespace-nowrap border-t border-beige-100 py-14 z-10 bg-blue-deep"
  >
    <div class="flex animate-marquee whitespace-nowrap max-w-full">
      <span
        class="relative flex flex-shrink-0 items-center justify-center px-8 md:px-0 overflow-hidden"
        ><span
          style="
            box-sizing: border-box;
            display: inline-block;
            overflow: hidden;
            width: initial;
            height: initial;
            background: none;
            opacity: 1;
            border: 0;
            margin: 0;
            padding: 0;
            position: relative;
            max-width: 100%;
          "
        >
          <div
            class="overflow-hidden whitespace-nowrap text-4xl text-white/80 word"
          >
            <div class="animate-marquee inline-block">
              Engaging in "options" trading within the decentralized finance
              (DeFi) ecosystem contributes to a more open internet by promoting
              financial inclusivity and transparency. &nbsp; &nbsp; &nbsp;
              &nbsp; &nbsp; Build the future... &nbsp; &nbsp; &nbsp; &nbsp;
              &nbsp; Let's keep talking :)
            </div>
          </div>
        </span>
      </span>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
@keyframes marquee {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}

.animate-marquee {
  animation: marquee 35s linear infinite;
}
</style>
