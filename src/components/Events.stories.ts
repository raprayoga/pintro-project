import type { Meta, StoryObj } from "@storybook/vue3"
import Events from "./Events.vue"

const meta: Meta<typeof Events> = {
  component: Events,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Events>

export const Default: Story = {
  render: (args) => ({
    components: { Events },
    setup() {
      return { args }
    },
    template: '<div class="w-[728px] h-[328px]"><Events v-bind="args" /></div>',
  }),
}
