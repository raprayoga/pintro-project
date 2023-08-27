import BaseBadge from "./BaseBadge.vue"

describe("<BaseBadge />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount<any>(BaseBadge, {
      props: {
        variant: "red",
        size: "sm",
      },
      slots: {
        default: `2`,
      },
    })

    cy.get('[data-cy="base-badge-element"]')
      .should("have.class", "bg-red w-[15px] h-[15px]")
      .should("have.text", "2")
  })
})
