import Schedule from "./Schedule.vue"

describe("<Schedule />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount<any>(Schedule)
  })
})
