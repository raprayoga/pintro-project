import type { Meta, StoryObj } from "@storybook/vue3"
import TheBotttomNav from "./TheBotttomNav.vue"

const meta: Meta<typeof TheBotttomNav> = {
  component: TheBotttomNav,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TheBotttomNav>

export const Default: Story = {
  render: (args) => ({
    components: { TheBotttomNav },
    setup() {
      return { args }
    },
    template: '<div class="w-[412px]"><TheBotttomNav v-bind="args" /></div>',
  }),
}
