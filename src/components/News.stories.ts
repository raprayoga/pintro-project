import type { Meta, StoryObj } from "@storybook/vue3"
import News from "./News.vue"

const meta: Meta<typeof News> = {
  component: News,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof News>

export const Default: Story = {
  render: (args) => ({
    components: { News },
    setup() {
      return { args }
    },
    template: '<div class="w-[352px] h-[123px]"><News v-bind="args" /></div>',
  }),
}
