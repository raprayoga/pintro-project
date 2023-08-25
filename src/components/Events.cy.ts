import Events from './Events.vue'

describe('<Events />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(Events)
  })
})