import WellcomeCard from './WellcomeCard.vue'

describe('<WellcomeCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(WellcomeCard)
  })
})