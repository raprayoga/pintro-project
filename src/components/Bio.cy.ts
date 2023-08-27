import Bio from "./Bio.vue"

describe("<Bio />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount<any>(Bio)
  })
})
