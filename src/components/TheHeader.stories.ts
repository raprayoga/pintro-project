import type { Meta, StoryObj } from "@storybook/vue3"
import TheHeader from "./TheHeader.vue"

const meta: Meta<typeof TheHeader> = {
  component: TheHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TheHeader>

export const Default: Story = {
  render: (args) => ({
    components: { TheHeader },
    setup() {
      return { args }
    },
    template: '<div class="w-[1200px]"><TheHeader v-bind="args" /></div>',
  }),
}
