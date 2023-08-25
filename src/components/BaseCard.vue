<script setup lang="ts">
import { cn } from "@/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { HTMLAttributes } from "vue"

const cardVariants = cva(
  "flex items-center justify-center text-center lg:text-sm text-xs text-white tracking-wide",
  {
    variants: {
      variant: {
        primary: "bg-primary",
        black: "bg-black",
        green: "bg-green",
        blue: "bg-blue",
        yellow: "bg-yellow",
        "dark-purple": "bg-dark-purple",
        white: "bg-white text-black",
      },
      size: {
        lg: "rounded-xl p-3.5",
        sm: "rounded-lg p-2.5",
      },
    },
    defaultVariants: {
      variant: "black",
      size: "sm",
    },
  }
)

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
    size: "sm",
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
