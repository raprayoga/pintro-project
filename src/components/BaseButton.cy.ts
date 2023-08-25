import BaseButton from "./BaseButton.vue"

describe("<BaseButton />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(BaseButton, {
      props: {
        variant: "primary",
        size: "sm",
      },
      slots: {
        default: `Submit`,
      },
    })

    cy.get('[data-cy="base-button-element"]')
      .should("have.class", "bg-primary rounded-md px-2 py-1")
      .should("have.text", "Submit")
  })
})
