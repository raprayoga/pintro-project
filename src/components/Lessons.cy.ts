import Lessons from './Lessons.vue'

describe('<Lessons />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Lessons)
  })
})