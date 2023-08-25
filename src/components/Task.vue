<script setup lang="ts">
import BaseCard from "./BaseCard.vue"
</script>

<template>
  <BaseCard
    variant="white"
    class-name="p-[30px] flex flex-col items-stretch text-left h-full"
  >
    <div class="flex gap-1 justify-start">
      <BaseCard variant="blue" size="sm" class-name="opacity-60">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
        >
          <rect
            x="5.75"
            y="2.75"
            width="16.5"
            height="20.8404"
            rx="1.39543"
            stroke="white"
            stroke-width="1.5"
          />
          <rect
            x="9.12695"
            y="9"
            width="5.23404"
            height="1.2766"
            rx="0.638298"
            fill="white"
          />
          <rect
            x="9"
            y="11.6807"
            width="5.23404"
            height="1.2766"
            rx="0.638298"
            fill="white"
          />
          <rect
            x="9"
            y="14.2339"
            width="7.14894"
            height="1.2766"
            rx="0.638298"
            fill="white"
          />
          <path
            d="M18.122 2.75C17.8131 3.62389 16.9797 4.25 16 4.25H13C12.0203 4.25 11.1869 3.62389 10.878 2.75H18.122Z"
            fill="#82B3F4"
            stroke="white"
            stroke-width="1.5"
          />
        </svg>
      </BaseCard>
      <div class="text-left ml-[30px]">
        <p class="text-lg font-semibold">Tugas</p>
        <p class="text-dark-green font-medium text-[13px]">
          Jangan lewatkan tugas
        </p>
      </div>
    </div>
    <div class="flex-grow mt-[60px]">
      <p class="text-2xl font-semibold">Tugas Bab 1</p>
      <p class="text-[13px] font-semibold text-dark-green mt-3">Bpk Sumardi</p>
    </div>
    <p class="flex-grow text-2xl text-red font-semibold">3 April 2021</p>
    <img
      src="@/assets/images/icons/ball-group.png"
      alt="bubble"
      class="w-[50px] h-5 self-end"
    />
  </BaseCard>
</template>
