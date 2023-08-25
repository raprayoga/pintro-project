import type { Meta, StoryObj } from "@storybook/vue3"
import BaseAccordion from "./BaseAccordion.vue"

const meta: Meta<typeof BaseAccordion> = {
  component: BaseAccordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof BaseAccordion>

export const Default: Story = {
  render: (args) => ({
    components: { BaseAccordion },
    setup() {
      return { args }
    },
    template: `<BaseAccordion v-bind="args">
    <template #header><h1>Here might be a page title</h1></template>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus at sapiente eius officia incidunt cumque autem magni quibusdam aliquid quidem quod libero ipsam porro, tempora corporis dignissimos? Odio, reprehenderit animi.
    </BaseAccordion>`,
  }),
}
