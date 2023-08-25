<script setup lang="ts">
import BaseBadge from "./BaseBadge.vue"
</script>

<template>
  <div class="w-full bg-white px-2">
    <div class="flex items-center justify-between h-[80px] max-w-[1184px]">
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
        <div>
          <p class="font-semibold text-sm">Ririh Kantilaras</p>
          <span class="text-gray-4 text-xs">SMPN 1 Setiabudi</span>
        </div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
          class="h-2 w-3"
          alt="arrow"
        />
      </div>
    </div>
  </div>
</template>
