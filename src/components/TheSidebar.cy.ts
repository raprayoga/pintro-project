import TheSidebar from './TheSidebar.vue'

describe('<TheSidebar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(TheSidebar)
  })
})