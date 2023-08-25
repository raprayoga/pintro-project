import type { Meta, StoryObj } from "@storybook/vue3"
import BaseBadge from "./BaseBadge.vue"

const meta: Meta<typeof BaseBadge> = {
  component: BaseBadge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "select", options: ["sm", "lg"] },
    variant: {
      control: "select",
      options: ["red", "black", "green"],
    },
    onClick: { action: "clicked" },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof BaseBadge>

export const Default: Story = {
  render: (args) => ({
    components: { BaseBadge },
    setup() {
      return { args }
    },
    template: '<BaseBadge v-bind="args">2</BaseBadge>',
  }),
  args: {
    variant: "red",
    size: "sm",
    class: "",
  },
}
