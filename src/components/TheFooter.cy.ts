import TheFooter from "./TheFooter.vue"

describe("<TheFooter />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount<any>(TheFooter)
  })
})
