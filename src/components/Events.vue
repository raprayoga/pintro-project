<script setup lang="ts">
import BaseCard from "./BaseCard.vue"
</script>

<template>
  <BaseCard
    variant="white"
    class-name="p-[30px] flex flex-col items-stretch text-left h-full"
  >
    <div class="flex gap-1 justify-start">
      <BaseCard variant="yellow" size="sm" class-name="opacity-60"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
        >
          <rect
            x="3.69446"
            y="6.97223"
            width="19.6111"
            height="16.2778"
            rx="1.25"
            stroke="white"
            stroke-width="1.5"
          />
          <rect
            x="7.94429"
            y="4.55556"
            width="1.11111"
            height="5.55556"
            rx="0.555556"
            stroke="white"
            stroke-width="1.11111"
          />
          <rect
            x="17.9443"
            y="4.55556"
            width="1.11111"
            height="5.55556"
            rx="0.555556"
            stroke="white"
            stroke-width="1.11111"
          />
          <rect
            x="3.69446"
            y="6.97223"
            width="19.6111"
            height="5.16667"
            rx="1.25"
            stroke="white"
            stroke-width="1.5"
          />
        </svg>
      </BaseCard>
      <div class="text-left ml-[30px]">
        <p class="text-lg font-semibold">Agenda Lorem Ipsum</p>
        <p class="text-dark-green font-medium text-[13px]">
          Dibimbing oleh Bpk Sumardi
        </p>
      </div>
    </div>
    <div class="flex-grow mt-[60px]">
      <ol class="text-gray-2">
        <li>1. Please, download a video below and watch it.</li>
        <li>2. JUMP ROPE (15 SECOND) activities</li>
        <li>3. Take a picture or video when doing it...</li>
      </ol>
    </div>
    <p class="text-2xl text-gray-1 font-semibold">3 Apr 2021, 23:00</p>
  </BaseCard>
</template>
