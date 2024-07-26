describe('template spec', () => {

  it('CURA Health care Login Website', () => {
    cy.visit('/profile.php#login');
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();
  })

  it('CURA Health care Book a appointment', () => {
      cy.visit('/profile.php#login');
      cy.get('#txt-username').type('John Doe');
      cy.get('#txt-password').type('ThisIsNotAPassword');
      cy.get('#btn-login').click();
      cy.get('#btn-make-appointment').click();  
      cy.get('#combo_facility').select('Hongkong CURA Healthcare Center');  
      cy.get('#txt_visit_date').click();
      cy.get('tbody > :nth-child(3) > :nth-child(6)').click({force: true});
      cy.get('#txt_comment').click({force: true});
      cy.get('#txt_comment').type('This is a test comment')
      cy.get('#btn-book-appointment').click({force: true});  
      cy.get('h2').contains('Appointment Confirmation');
  })

  it('Login > History', ()=>{
    cy.visit('/profile.php#login');
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();
    cy.get('#menu-toggle').click();
    cy.get(':nth-child(4) > a').click();
    cy.get('h2').contains('History');
  })


  it('Login > Logout', ()=>{
    cy.visit('/profile.php#login');
    cy.get('#txt-username').type('John Doe');
    cy.get('#txt-password').type('ThisIsNotAPassword');
    cy.get('#btn-login').click();
    cy.get('#menu-toggle').click();
    cy.get(':nth-child(6) > a').contains('Logout').click();
  })
})