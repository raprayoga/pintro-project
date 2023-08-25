import TheBotttomNav from './TheBotttomNav.vue'

describe('<TheBotttomNav />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(TheBotttomNav)
  })
})