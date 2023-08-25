import type { Meta, StoryObj } from "@storybook/vue3"
import Lessons from "./Lessons.vue"

const meta: Meta<typeof Lessons> = {
  component: Lessons,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Lessons>

export const Default: Story = {
  render: (args) => ({
    components: { Lessons },
    setup() {
      return { args }
    },
    template:
      '<div class="w-[431px] h-[483px]"><Lessons v-bind="args" /></div>',
  }),
}
