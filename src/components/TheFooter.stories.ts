import type { Meta, StoryObj } from "@storybook/vue3"
import TheFooter from "./TheFooter.vue"

const meta: Meta<typeof TheFooter> = {
  component: TheFooter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TheFooter>

export const Default: Story = {
  render: (args) => ({
    components: { TheFooter },
    setup() {
      return { args }
    },
    template: '<div class="w-[1000px]"><TheFooter v-bind="args" /></div>',
  }),
}
