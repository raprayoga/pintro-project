<script setup lang="ts">
import BaseCard from "./BaseCard.vue"
</script>

<template>
  <BaseCard
    variant="white"
    class="flex flex-col items-stretch w-full h-full bg-white px-[30px] py-[18px]"
  >
    <BaseCard class="relative p-0" variant="soft-blue" style="padding: 0">
      <img src="@/assets/images/use-banner.png" alt="avatar" class="w-full" />
      <BaseCard
        class="absolute w-[74px] h-[74px] text-center text-yellow font-bold border-4 border-white top-2/3 left-[20px]"
        variant="gray-3"
      >
        <p class="text-[48px] leading-9">R</p>
      </BaseCard>
    </BaseCard>

    <div class="flex-grow mt-[60px]">
      <p class="text-2xl font-semibold">Ririh Kantilaras</p>
      <p class="text-[13px] font-medium text-dark-green mt-2.5">
        SMPN 1 Setiabudi &#9679; 836239237
      </p>
    </div>

    <div>
      <p class="text-sm font-medium">Gerahan Matahari Lorem Ipsum 2B</p>
      <p class="text-[13px] font-medium text-dark-green">Kelas</p>
    </div>
  </BaseCard>
</template>
