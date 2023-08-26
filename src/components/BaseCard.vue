<script setup lang="ts">
import { cn } from "@/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { HTMLAttributes } from "vue"

const cardVariants = cva(" lg:text-sm text-xs text-white tracking-wide", {
  variants: {
    variant: {
      primary: "bg-primary",
      black: "bg-black",
      green: "bg-green",
      blue: "bg-blue",
      "soft-blue": "bg-soft-blue",
      yellow: "bg-yellow",
      cream: "bg-cream",
      "dark-purple": "bg-dark-purple",
      white: "bg-white text-black",
      "gray-3": "bg-gray-3",
    },
    size: {
      lg: "rounded-xl p-3.5",
      md: "rounded-lg-1 p-3.5",
      sm: "rounded-lg p-2.5",
    },
  },
  defaultVariants: {
    variant: "black",
    size: "md",
  },
})

type ButtonProps = VariantProps<typeof cardVariants>

withDefaults(
  defineProps<{
    size?: ButtonProps["size"]
    variant?: ButtonProps["variant"]
    props?: HTMLAttributes
    className?: string
  }>(),
  {
    variant: "black",
    size: "md",
    className: "",
  }
)

const emit = defineEmits<{
  (e: "click", id: number): void
}>()

const onClick = () => {
  emit("click", 1)
}
</script>

<template>
  <div
    :class="cn(cardVariants({ variant, size }), className)"
    v-bind="props"
    @click="onClick"
    data-cy="base-card-element"
  >
    <slot></slot>
  </div>
</template>
