/// <reference types = "Cypress" />
/// <reference types = "Cypress-xpath" />


describe('create crew user', () => {
    it('can create new crew user', () => {
      let username = 'crew4'
      let firstname = 'crew4'
      let lastname = 'crew4'
      let nickname = 'crew4'
      let idnumber = '123'
      let salary = '40000'

       cy.xpath("//a[contains(@href, 'users')]").click()
       //verify
       cy.get("h3.m-0").should('have.text','Users')

       cy.xpath("//span[text()='Add New']").click()

       //select crew
       cy.xpath("//a[text() = 'Crew']").click()
       cy.xpath("//div[text()='Add New Crew']").should('have.text', 'Add New Crew')

       //1.

       cy.get("input[name='user.username']").type(username)
       cy.get("input[name='user.firstName']").type(firstname)
       cy.get("input[name='user.lastName']").type(lastname)
       cy.get("input[name='user.nickname']").type(nickname)

       cy.xpath("//span[text()= 'Next']").click()

       //2.
       cy.xpath("//label[text()='Immigration Status']").should('have.text','Immigration Status *')
       cy.get("input[name='user.idNumber']").type(idnumber)

       cy.xpath("//span[text()= 'Next']").click()


        //3.
       cy.xpath("//label[text()='Job Title']/following-sibling::div").type("cleaner{enter}")
       
       cy.get("input[name='contract.salaryAmount']").type(salary)
       cy.get("select[name='contract.currency']").select('SGD')

       cy.xpath("//label[text()='Start Date']/following-sibling::div").click()

       cy.xpath("//label[text()='Start Date']/following-sibling::div//div[@aria-current='date']").click()

       cy.xpath("//label[text()='Policy Type']/following-sibling::div").type("Vietnamese Workforce{enter}")

       cy.get("input[name='contract.agreedHoursWeekly']").type(40)

       cy.xpath("//span[text()= 'Next']").click()

       //4.

       cy.xpath("//span[text()= 'Next']").click()

       //5.

       cy.get("input[name='user.accountNumber']").type(1234)
       cy.xpath("//span[text()= 'Next']").click()

       //6.
       cy.xpath("//span[text()= 'Next']").click()

       //7.

       cy.xpath("//label[text()='Assign Supervisors']/following-sibling::div").type("yen1")

       cy.xpath("//h6[text()='yen1']").click()

       cy.xpath("//span[text()= 'Next']").click()

       //8.

     

       cy.get("input[name='invite.newPassword']").type(123)

       cy.xpath("//span[text()= 'Create']").click()


    });
    it('negative case', () => {

       
     });
   
})

describe('create new client', () => {
   it('create new client', () => {
      let username = 'client2'
      let firstname = 'client2'
      let lastname = 'client2'
      let nickname = 'client2'


      cy.xpath("//a[contains(@href, 'users')]").click()
      //verify
      cy.get("h3.m-0").should('have.text','Users')

      cy.xpath("//span[text()='Add New']").click()

      //select crew
      cy.xpath("//a[text() = 'Client']").click()
      cy.xpath("//div[text()='Add New Client']").should('have.text', 'Add New Client')
      //1.

      cy.get("input[name='user.username']").type(username)
       cy.get("input[name='user.firstName']").type(firstname)
       cy.get("input[name='user.lastName']").type(lastname)
       cy.get("input[name='user.nickname']").type(nickname)

      cy.xpath("//span[text()= 'Next']").click()

       //2.

       cy.xpath("//label[text()='Select Account for this client']/following-sibling::div").type("com1{enter}")
      
       cy.xpath("//span[text()= 'Next']").click()



       //3.
       cy.get("input[name='invite.newPassword']").type(123)

       cy.xpath("//span[text()= 'Create']").click()


   });
   
});

describe('create new HQ', () => {
   it('create new HQ', () => {
      let username = 'sup1'
      let firstname = 'sup1'
      let lastname = 'sup1'
      let nickname = 'sup1'
      let idnumber = 123
      let salary = 4000


      cy.xpath("//a[contains(@href, 'users')]").click()
      //verify
      cy.get("h3.m-0").should('have.text','Users')

      cy.xpath("//span[text()='Add New']").click()

      //select crew
      cy.xpath("//a[text() = 'HQ & Supervisors']").click()
      cy.xpath("//div[text()='Add New HQ & Supervisors']").should('have.text', 'Add New HQ & Supervisors')
      //1.

      cy.get("input[name='user.username']").type(username)
       cy.get("input[name='user.firstName']").type(firstname)
       cy.get("input[name='user.lastName']").type(lastname)
       cy.get("input[name='user.nickname']").type(nickname)

      cy.xpath("//span[text()= 'Next']").click()

       //2.

       cy.xpath("//label[text()='Immigration Status']").should('have.text','Immigration Status *') 

       cy.get("input[name='user.idNumber']").type(idnumber)
      
       cy.xpath("//span[text()= 'Next']").click()

         //3.
         cy.xpath("//label[text()='Job Title']/following-sibling::div").type("team leader{enter}")
       
         cy.get("input[name='contract.salaryAmount']").type(salary)
         cy.get("select[name='contract.currency']").select('SGD')
  
         cy.xpath("//label[text()='Start Date']/following-sibling::div").click()
  
         cy.xpath("//label[text()='Start Date']/following-sibling::div//div[@aria-current='date']").click()
  
         cy.xpath("//label[text()='Policy Type']/following-sibling::div").type("Vietnamese Workforce{enter}")
  
         cy.get("input[name='contract.agreedHoursWeekly']").type(40)
  
         cy.xpath("//span[text()= 'Next']").click()
  
         //4.
  
         cy.xpath("//span[text()= 'Next']").click()
  
         //5.
  
         cy.get("input[name='user.accountNumber']").type(1234)
         cy.xpath("//span[text()= 'Next']").click()
  
         //6.
         cy.xpath("//span[text()= 'Next']").click()
  
         //7.
  
         cy.xpath("//label[text()='Select Account for this user']/following-sibling::div").type("com1{enter}")
  
      
  
         cy.xpath("//span[text()= 'Next']").click()
  
         //8.
  
         cy.get("input[name='invite.newPassword']").type(123)
  
         cy.xpath("//span[text()= 'Create']").click()
  

   });
   
});

describe.only('create new  Subcontractors & Partners', () => {
   it('create new client', () => {
      let username = 'partner1'
      let firstname = 'partner1'
      let lastname = 'partner1'
      let nickname = 'partner1'
      let idnumber = 123


      cy.xpath("//a[contains(@href, 'users')]").click()
      //verify
      cy.get("h3.m-0").should('have.text','Users')

      cy.xpath("//span[text()='Add New']").click()

      //select crew
      cy.xpath("//a[text() = 'Subcontractors & Partners']").click()
      cy.xpath("//div[text()='Add New Subcontractors & Partners']").should('have.text', 'Add New Subcontractors & Partners')
      //1.

      cy.get("input[name='user.username']").type(username)
      cy.get("input[name='user.firstName']").type(firstname)
      cy.get("input[name='user.lastName']").type(lastname)
      cy.get("input[name='user.nickname']").type(nickname)

      cy.xpath("//span[text()= 'Next']").click()

       //2.

       
       cy.get("input[name='user.idNumber']").type(idnumber)
       cy.xpath("//span[text()= 'Next']").click()

       //3

       cy.xpath("//span[text()= 'Next']").click()

       //4.
       cy.get("input[name='invite.newPassword']").type(123)

       cy.xpath("//span[text()= 'Create']").click()


   });
   
});
