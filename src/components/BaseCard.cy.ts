import BaseCard from "./BaseCard.vue"

describe("<BaseCard />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount<any>(BaseCard, {
      props: {
        variant: "blue",
        size: "sm",
      },
      slots: {
        default: `text containt card`,
      },
    })

    cy.get('[data-cy="base-card-element"]')
      .should("have.class", "bg-blue rounded-lg p-2.5")
      .should("have.text", "text containt card")
  })
})
