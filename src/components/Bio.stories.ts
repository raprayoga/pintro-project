import type { Meta, StoryObj } from "@storybook/vue3"
import Bio from "./Bio.vue"

const meta: Meta<typeof Bio> = {
  component: Bio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Bio>

export const Default: Story = {
  render: (args) => ({
    components: { Bio },
    setup() {
      return { args }
    },
    template: '<div class="w-[352px] h-[352px]"><Bio v-bind="args" /></div>',
  }),
}
