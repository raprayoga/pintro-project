import type { Meta, StoryObj } from "@storybook/vue3"
import WellcomeCard from "./WellcomeCard.vue"

const meta: Meta<typeof WellcomeCard> = {
  component: WellcomeCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof WellcomeCard>

export const Default: Story = {
  render: (args) => ({
    components: { WellcomeCard },
    setup() {
      return { args }
    },
    template:
      '<div class="w-[728px] h-[243px] bg-soft-blue"><WellcomeCard v-bind="args" /></div>',
  }),
}
