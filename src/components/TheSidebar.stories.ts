import type { Meta, StoryObj } from "@storybook/vue3"
import TheSidebar from "./TheSidebar.vue"

const meta: Meta<typeof TheSidebar> = {
  component: TheSidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof TheSidebar>

export const Default: Story = {
  render: (args) => ({
    components: { TheSidebar },
    setup() {
      return { args }
    },
    template: '<TheSidebar v-bind="args" />',
  }),
}
