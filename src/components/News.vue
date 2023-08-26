<script setup lang="ts">
import BaseCard from "./BaseCard.vue"
</script>

<template>
  <BaseCard
    variant="white"
    class-name="px-[30px] py-[15px] flex flex-col sm:flex-row items-center justify-between h-full"
  >
    <BaseCard
      class-name="w-auto sm:w-5/12 py-0 h-[206px] sm:h-auto"
      variant="gray-3"
    >
      <img
        src="@/assets/images/event.png"
        alt="bubble"
        class="h-full sm:h-fits mx-auto"
      />
    </BaseCard>
    <div class="w-full sm:w-5/12 mt-[18px] sm:mt-0">
      <p class="leading-normal text-[16px] sm:text-[13px] font-medium">
        Kegiatan Training Fitur HR di Yayasan Syiar Bangsa
      </p>
    </div>
  </BaseCard>
</template>
