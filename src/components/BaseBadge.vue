<script setup lang="ts">
import { cn } from "@/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { HTMLAttributes } from "vue"

const badgeVariant = cva(
  "flex items-center justify-center text-center text-2.5 text-white rounded-full",
  {
    variants: {
      variant: {
        red: "bg-red",
        black: "bg-black",
        green: "bg-green",
      },
      size: {
        lg: "w-[19px] h-[19px]",
        sm: "w-[15px] h-[15px]",
      },
    },
    defaultVariants: {
      variant: "black",
      size: "sm",
    },
  }
)

type BadgeProps = VariantProps<typeof badgeVariant>

withDefaults(
  defineProps<{
    size?: BadgeProps["size"]
    variant?: BadgeProps["variant"]
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
    :class="cn(badgeVariant({ variant, size }), className)"
    v-bind="props"
    @click="onClick"
    data-cy="base-badge-element"
  >
    <slot></slot>
  </div>
</template>
