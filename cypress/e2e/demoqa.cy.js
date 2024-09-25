describe('DemoQA Automation Practice Form Test', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        // Ignore the error and prevent Cypress from failing the test
        if (err.message.includes('setup is not a function')) {
            return false;
        }
    });

    it('should fill out and submit the form successfully', () => {
        // Step 1: Visit the DemoQA Automation Practice Form page
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.wait(5000) // wait for 2 seconds




        // Step 2: Fill out the form fields
        cy.get('#firstName').type('John')
        cy.get('#lastName').type('Doe')
        cy.get('#userEmail').type('john.doe@example.com')
        cy.get('input[name="gender"][value="Male"]').check({ force: true }) // Gender radio button

        cy.get('#userNumber').type('1234567890')

        // Step 3: Fill the date of birth field
        // Step 2: Click on the date input to open the date picker
        cy.get('#dateOfBirthInput').click()

        // Step 3: Select the month and year from the dropdowns
        cy.get('.react-datepicker__month-select').select('June')
        cy.get('.react-datepicker__year-select').select('1990')

        // Step 4: Click on the day (e.g., 15th of June, 1990)
        cy.get('.react-datepicker__day--015').click()

        // Step 5: Validate that the correct date has been entered
        cy.get('#dateOfBirthInput').should('have.value', '15 Jun 1990')

        // Step 4: Select a subject
        cy.get('.subjects-auto-complete__input input').type('Math{enter}')

        // Step 5: Check hobbies
        cy.get('input[type="checkbox"][id="hobbies-checkbox-1"]').check({ force: true }) // Sports

        // Step 6: Upload a picture (Optional)
        // You need a valid path to an image to use this functionality
        // cy.get('#uploadPicture').attachFile('path/to/your/image.jpg')

        // Step 7: Fill in the current address
        cy.get('#currentAddress').type('123 Main St, Springfield, USA')

        // Step 8: Select a state and city
        cy.get('#state').click().type('NCR{enter}')
        cy.get('#city').click().type('Delhi{enter}')

        // Step 9: Submit the form
        cy.get('#submit').click({ force: true })

        // Step 10: Validate that the form was submitted successfully
        cy.contains('Thanks for submitting the form').should('be.visible')
    })
})
