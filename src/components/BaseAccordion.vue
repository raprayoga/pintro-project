<script setup lang="ts">
import { ref } from "vue"
import { HTMLAttributes } from "vue"

withDefaults(
  defineProps<{
    props?: HTMLAttributes
    className?: string
  }>(),
  {
    className: "",
  }
)

const isCollapse = ref(false)

const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<template>
  <!-- component -->
  <div
    class="group flex flex-col gap-2 rounded-lg bg-primary p-5 text-sm"
    :class="isCollapse ? 'text-white ' + className : 'text-gray-4 ' + className"
    v-bind="props"
    data-cy="base-accordian-container-element"
  >
    <div
      class="flex cursor-pointer items-center justify-between"
      @click="toggleCollapse"
      data-cy="base-accordian-header-element"
    >
      <slot name="header"></slot>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/96/Chevron-icon-drop-down-menu-WHITE.png"
        class="h-2 w-3 transition-all duration-500"
        :class="{ '-rotate-180': isCollapse }"
        alt="arrow"
        data-cy="base-accordian-arrow-icon"
      />
    </div>
    <div
      class="h-auto max-h-0 items-center opacity-0 transition-all duration-300"
      :class="isCollapse ? 'visible max-h-screen opacity-100' : 'invisible'"
      data-cy="base-accordian-body-element"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
