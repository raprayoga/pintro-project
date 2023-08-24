<script setup lang="ts">
import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "px-5 flex items-center justify-center text-center lg:text-sm text-xs font-bold tracking-wide rounded-full cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        black: "bg-black text-white",
        white: "bg-white text-black",
      },
    },
    defaultVariants: {
      variant: "black",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants>;

withDefaults(defineProps<{ variant: ButtonProps["variant"] }>(), {
  variant: "black",
});
</script>

<template>
  <button :class="cn(buttonVariants({ variant }))">
    Button Implement Tailwind
  </button>
</template>

<style scoped></style>
