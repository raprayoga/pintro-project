<script lang="ts" setup>
import TheSidebar from "@/components/TheSidebar.vue"
import TheHeader from "@/components/TheHeader.vue"
import TheFooter from "@/components/TheFooter.vue"
import TheBotttomNav from "@/components/TheBotttomNav.vue"
</script>

<template>
  <div class="flex">
    <TheSidebar class="fixed hidden md:block left-0 z-40" />
    <div class="md:ml-[96px] w-full">
      <TheHeader class="fixed z-30 hidden md:block" />
      <router-view />
      <TheFooter class="hidden md:block" />
      <TheBotttomNav class="fixed bottom-0 md:hidden" />
    </div>
  </div>
</template>
