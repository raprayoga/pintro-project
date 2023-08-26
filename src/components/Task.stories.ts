import type { Meta, StoryObj } from "@storybook/vue3"
import Task from "./Task.vue"

const meta: Meta<typeof Task> = {
  component: Task,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof Task>

export const Default: Story = {
  render: (args) => ({
    components: { Task },
    setup() {
      return { args }
    },
    template: '<div class="w-[352px] h-[352px]"><Task v-bind="args" /></div>',
  }),
}
