import BaseAccordion from "./BaseAccordion.vue"

const slotHeader = "Head"
const slotHBody = "Body"
const classContaner = "w-[300px]"
const classRotate = "-rotate-180"
const classVisible = "visible"

describe("<BaseAccordion />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount<any>(BaseAccordion, {
      props: {
        className: classContaner,
      },
      slots: {
        header: slotHeader,
        default: slotHBody,
      },
    })

    cy.get('[data-cy="base-accordian-container-element"]').should(
      "have.class",
      classContaner
    )

    cy.get('[data-cy="base-accordian-header-element"]')
      .should("have.text", slotHeader)
      .click()
    cy.get('[data-cy="base-accordian-arrow-icon"]').should(
      "have.class",
      classRotate
    )
    cy.get('[data-cy="base-accordian-body-element"]')
      .should("have.class", classVisible)
      .should("have.text", slotHBody)
  })
})
