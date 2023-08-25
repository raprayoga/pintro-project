<script setup lang="ts">
import { cn } from "@/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { ButtonHTMLAttributes } from "vue"

const buttonVariants = cva(
  "flex items-center justify-center text-center lg:text-sm text-xs text-white cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        "dark-purple": "bg-dark-purple",
        primary: "bg-primary",
        gray: "bg-gray-3 text-black",
      },
      size: {
        lg: "rounded-lg px-2.5 py-1.5",
        sm: "rounded-md px-2 py-1",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
)

type ButtonProps = VariantProps<typeof buttonVariants>

withDefaults(
  defineProps<{
    variant?: ButtonProps["variant"]
    size?: ButtonProps["size"]
    props?: ButtonHTMLAttributes
    className?: string
  }>(),
  {
    variant: "primary",
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
  <button
    :class="cn(buttonVariants({ variant, size }), className)"
    v-bind="props"
    @click="onClick"
    data-cy="base-button-element"
  >
    <slot></slot>
  </button>
</template>
