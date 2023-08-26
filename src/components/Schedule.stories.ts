import type { Meta, StoryObj } from "@storybook/vue3"
import Schedule from "./Schedule.vue"

const meta: Meta<typeof Schedule> = {
  component: Schedule,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Schedule>

export const Default: Story = {
  render: (args) => ({
    components: { Schedule },
    setup() {
      return { args }
    },
    template:
      '<div class="w-[431px] h-[651px]"><Schedule v-bind="args" /></div>',
  }),
}
