<script setup lang="ts">
import BaseBadge from "./BaseBadge.vue"
</script>

<template>
  <header class="w-full bg-white px-2">
    <div
      class="flex items-center justify-between h-[80px] max-w-[1184px] mx-auto"
    >
      <img src="@/assets/images/icons/rectang-icon.png" alt="rectang icon" />
      <div class="flex items-center">
        <div class="relative">
          <img
            src="@/assets/images/icons/bell-icon.png"
            alt="bell icon"
            class="w-[30px] h-[30px]"
          />
          <BaseBadge variant="red" class-name="absolute top-0 right-[-5px]"
            >2</BaseBadge
          >
        </div>
        <img
          src="@/assets/images/icons/user-icon.png"
          alt="user icon"
          class="w-[30px] h-[30px] ml-9 mr-4"
        />
        <div class="mr-[15px]">
          <p class="font-semibold text-sm">Ririh Kantilaras</p>
          <span class="text-gray-4 text-xs">SMPN 1 Setiabudi</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19.8145 11.9999L12.0003 19.814L4.18622 11.9999"
            stroke="black"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </header>
</template>
