<script setup lang="ts">
import BaseCard from "./BaseCard.vue"
</script>

<template>
  <BaseCard
    variant="white"
    class-name="px-[30px] py-[15px] flex items-center justify-between h-full"
  >
    <img src="@/assets/images/event.png" alt="bubble" class="w-5/12 h-fits" />
    <div class="w-5/12">
      <p class="text-[13px] font-medium">
        Kegiatan Training Fitur HR di Yayasan Syiar Bangsa
      </p>
    </div>
  </BaseCard>
</template>
