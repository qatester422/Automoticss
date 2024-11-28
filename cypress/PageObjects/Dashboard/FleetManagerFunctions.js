// import { should } from "chai";

export default 
class FleetManager{
    constructor() {
        this.randomDigit = Cypress._.random(0, 1000);  // Generate random number
        this.email = `qatester422${this.randomDigit}@dk1hd1pg.mailosaur.net`;  // Create email with random number
      }
    Visit(){
        cy.visit("https://automotics-kcuppens-projects.vercel.app/")
    }

    AddFleetManager(){
        cy.visit("https://automotics-kcuppens-projects.vercel.app/login")
        cy.get('#\\:r0\\:').type("stevenavila@example.com")
        cy.get("#\\:r1\\:").type("Automotics123")
        cy.get("button[type='submit']").click()
        cy.wait(10000)
        cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
        cy.get('[class="MuiListItemText-root css-9uwfd7"]').eq(1).click()
        cy.url().should('include','/users')

        cy.log('>>> Fleet Manager invite')

        cy.get('.css-1ac401f > .MuiStack-root > :nth-child(1)').click()
        cy.get('[name="first_name"]').type('Fleet')
        cy.get('[name="last_name"]').type('Manager')
        cy.get('[name="email"]').type(this.email)
        cy.get('[class="MuiTypography-root MuiTypography-body1 css-1p96ote"]').eq(4).click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation').click()
        cy.get('.MuiAlert-message').should('be.visible')
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.mailosaurGetMessage("dk1hd1pg", {
            sentTo: this.email,},
            {
                timeout: 40000, 
              }).then((email) => {
                cy.log('Email subject:', email.subject); 
                console.log(email)
                const emailBody = email.html.body;
                const link = emailBody.match(/https?:\/\/[^\s]+/)[0];  // Extract first link

                cy.log('Email contains link: ', link);
                cy.clearAllCookies()
                cy.clearAllLocalStorage()
                cy.clearAllSessionStorage()
                // Visit the link
                cy.visit(link);
              });
        cy.get('[name="newPassword"]').type('Qwer123!@#')
        cy.get('[name="confirmPassword"]').type('Qwer123!@#')
        cy.get('.css-lm7dsw > :nth-child(4)').click()
        cy.get('[name="email"]').type(this.email)
        cy.get('[name="password"]').type('Qwer123!@#')
        cy.get('[type="submit"]').click()
        cy.get('[class="MuiBox-root css-zavo4s"]').should('be.visible')
 
    }

    ForgetPassword(){
        let attempts = 0;
        const maxAttempts = 5;  // Maximum retry attempts
        const interval = 5000;
        cy.visit("https://automotics-kcuppens-projects.vercel.app/login")
        cy.get('[class="MuiTypography-root MuiTypography-body1 css-1odr1nx"]').click()
        cy.wait(2000)
        cy.get('[name="email"]').type(this.email)
        cy.get('.css-lm7dsw > :nth-child(4)').click()
        cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text','Success')
        
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
        cy.mailosaurGetMessage("dk1hd1pg", {
            sentTo: this.email,},
            {
                timeout: 30000, 
                pollingInterval: 5000,
              }).then((email) => {
                cy.log('Email subject:', email.subject); 
                console.log(email)
                const emailBody = email.html.body;
                const link = emailBody.match(/https?:\/\/[^\s]+/)[0];  // Extract first link

                cy.log('Email contains link: ', link);
                cy.clearAllCookies()
                cy.clearAllLocalStorage()
                cy.clearAllSessionStorage()
                // Visit the link
                cy.visit(link);
              });
        cy.get('[name="newPassword"]').type('Qwer123!@#')
        cy.get('[name="confirmPassword"]').type('Qwer123!@#')
        cy.get('.css-lm7dsw > :nth-child(6)').click()
        cy.get('[name="email"]').type(this.email)
        cy.get('[name="password"]').type('Qwer123!@#')
        cy.get('[type="submit"]').click()
        cy.get('[class="MuiBox-root css-zavo4s"]').should('be.visible')
 
    }

    login(){
        cy.visit("https://automotics-kcuppens-projects.vercel.app/login")
        cy.get('#\\:r0\\:').type("qatester422@gmail.com")
        cy.get("#\\:r1\\:").type("Aaqib@0585")
        cy.get("button[type='submit']").click()
        cy.wait(10000)
        cy.url().should('include','https://automotics-kcuppens-projects.vercel.app/')
        cy.get('.fi.fi-gb.fis.MuiBox-root.css-1hu7cqk').eq(1).click()
    }

    ReparePageAccessable(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[aria-label="Repair"]').should('be.visible')
    }

    ClientPageAccessable(){
        cy.get('[aria-label="Client"]').click()
        cy.get('[aria-label="Client"]').should('be.visible')
    }

    FaultcodePageAccessable(){
        cy.get('[aria-label="Faultcode"]').should('not.exist')
    }

    DashboardEndpoints(){
        cy.get('[aria-label="Dashboard"]').click()
        cy.get('.css-1capxqj').click()
        cy.url().should('include', '/?modalType=upload')
        cy.get('[aria-label="Dashboard"]').click()
        cy.get('.css-79elbk > .MuiBox-root > :nth-child(3)').click() 
        cy.url().should('include', '/repair')
        cy.get('[aria-label="Dashboard"]').click()
        cy.get('.MuiButtonBase-root.css-vnwzjq').click()
        cy.wait(2000)
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1j729wa').should('have.text', 'Access Denied')
    }

    DashboardButtons(){
        cy.get('[aria-label="Dashboard"]').click()
        cy.get('.MuiButtonBase-root.css-1capxqj').click()
        cy.url().should('include', '/?modalType=upload')
        cy.get('[aria-label="Dashboard"]').click()
        cy.get('.MuiButtonBase-root.css-1capxqj').click() 
        cy.url().should('include', '/repair')
        cy.get('[aria-label="Dashboard"]').click()
        cy.get('.MuiButtonBase-root.css-pa453x').eq(1).click()
        cy.url().should('include','/repair')
        
        cy.get('[aria-label="Dashboard"]').click()
        cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-iti1br"]').eq(0).click()
        cy.get('[aria-label="Dashboard"]').click()
        cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-iti1br"]').eq(1).click()
        
        cy.get('[aria-label="Dashboard"]').click()
        cy.url().should('include', 'https://automotics-kcuppens-projects.vercel.app/')
        cy.get('[aria-label="Repair"]').click()
        cy.url().should('include', '/repair')
        cy.get('[aria-label="Client"]').click()
        cy.url().should('include', '/client')
    }

    UploadReports() {
        cy.visit("https://automotics-kcuppens-projects.vercel.app/");
        cy.get('.css-1capxqj').click(); // Upload report
        cy.url().should('eq', 'https://automotics-kcuppens-projects.vercel.app/repair/?modalType=upload')
        cy.get('.css-1u1o14a > .MuiButtonBase-root').click()
        cy.get('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedStart.css-1cq0fp4').eq(0).click();
        cy.get('#\\:r9\\: > .Mui-selected').click()
        const files = [
            'Documents/94969_challanform_638_1722682869.pdf',
            'Documents/Automotics - Dashboard (1) (1).pdf',
            'Documents/Modal.pdf',
            'Documents/Test Plan Document.pdf',
            'Documents/Tooltip.pdf',
        ];
        files.forEach((file) => {
            cy.get('.MuiDialogContent-root > .MuiBox-root').attachFile(file, { subjectType: 'drag-n-drop' })
        })
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
        cy.wait(5000)
        cy.get('.MuiBox-root.css-jc0lu3').should('be.visible')
        cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text','Success')
    }

    ReportModalOpenable(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('.css-1u1o14a').click()
        cy.get('.css-qu0og1').should('be.visible')
    }

    CarDataFilledIn(){
        cy.get('[aria-label="Repair"]').click()
        cy.wait(5000)
        cy.get('[class="MuiTypography-root MuiTypography-body1 css-13sq091"]').first().should('have.text','Peugeot')
        cy.get('[class="MuiStack-root css-kcfxyd"]').first().should('have.text','Boxer2024')
        cy.get('[class="MuiBox-root css-1qxtz39"]').first().should('have.text','VIN :123456789')
    }

    CheckVIN(){
        cy.get('[aria-label="Repair"]').click()
        cy.wait(5000)
        cy.get('[class="MuiBox-root css-1qxtz39"]').first().should('include.text','VIN :')
    }

    ChangeClient(){
        cy.get('[aria-label="Repair"]').click()
        cy.wait(5000)
        cy.get('[class="MuiBox-root css-13yoi82"]').eq(0).click()
        cy.get('[class="MuiBox-root css-1k6a8z7"]').last().click()
        cy.get('[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"]').last().click()
        cy.get('[class="MuiTypography-root MuiTypography-body1 css-13sq091"]').first().should('have.text','Peugeot')
        cy.get('[class="MuiStack-root css-kcfxyd"]').first().should('have.text','Boxer2024')
        cy.get('[class="MuiBox-root css-1qxtz39"]').first().should('include.text','VIN :')
    }

    ChangeStatus(){
        cy.get('[aria-label="Repair"]').click()
        cy.wait(5000)
        cy.get('.MuiButtonBase-root.css-1knlxk0').eq(1).click()
        cy.get('.MuiInputBase-input.MuiInputBase-inputAdornedStart.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').click()
        cy.get('.MuiInputBase-input.MuiInputBase-inputAdornedStart.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-mnn31').type('open')   
        cy.get('.MuiAutocomplete-option').contains('open').click()
        cy.wait(10000)
        cy.get('[class="MuiStack-root css-kcfxyd"]').first().should('have.text','Boxer2024')
        cy.get('[class="MuiBox-root css-1qxtz39"]').first().should('include.text','VIN :')

    }

    CreateNewCar(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary css-tl61s7"]').click()
        cy.get('[role="combobox"]').eq(1).click()
        cy.get('[data-value="4"]').click()
        cy.get('[role="combobox"]').eq(3).click()
        cy.get('[data-value="2024"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"]').type('VIN :987654321')
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
        cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text','Success')
    }

    UpdateCar(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[id="basic-button"]').first().click()
        cy.get('.MuiList-root > :nth-child(4)').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"]').clear()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"]').clear().type('VIN :2023')
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
        cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text','Success')
    }

    DeleteCar(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[id="basic-button"]').first().click()
        cy.get('.MuiList-root > :nth-child(5)').click()
        cy.get('.css-1crt8ru').click()
        cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text','Success')
    }

    CommentFucntions(){
        cy.log('>>> Create a comment')

        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VIN :987654321')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root > .MuiBadge-root').click()
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1j729wa').should('have.text', 'Access Denied')

      }

      ReanalizeReport(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('12345678')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('[class="MuiTypography-root MuiTypography-body1 css-13sq091"]').should('have.text','Peugeot')
    }
    // Cant download report there is no option avaailable for downloading reports
    DownloadManualReport(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VF38EBHXMJL003134')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.css-1ialerq > .MuiStack-root > .MuiBox-root > .MuiTypography-root').click()//downloadBtn
        cy.get('[tabindex="0"][role="menuitem"] > .MuiListItemText-root > .MuiTypography-root').click()
    }
    // Cant download report there is no option avaailable for downloading reports
    DownloadCustomReport(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VF38EBHXMJL003134')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.css-1ialerq > .MuiStack-root > .MuiBox-root > .MuiTypography-root').click({force: true})//downloadBtn
        cy.get('[tabindex="-1"] > .MuiListItemText-root > .MuiTypography-root').click({force: true})
    }
    
    OpenRequestedService(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('987654321')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-fvlvy7"]').eq(0).click()
        cy.url().should('include','/request-service')
    }

    RequestedServicesEndpoints(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('987654321')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-fvlvy7"]').eq(0).click()
        cy.get('[type="checkbox"]').eq(0).click()
        cy.get('[type="checkbox"]').eq(1).click()
        cy.get('[type="checkbox"]').eq(2).click()
        cy.get('#outlined-multiline-flexible').type('Test Comment')
        cy.get('.css-1k2xoqy > .MuiButtonBase-root').click()
        cy.get('.MuiAlert-message > .MuiTypography-root').should('be.visible')
    }

    CreateServiceRequest(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('987654321')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-fvlvy7"]').eq(0).click()
        cy.get('[type="checkbox"]').eq(0).click()
        cy.get('[type="checkbox"]').eq(1).click()
        cy.get('[type="checkbox"]').eq(2).click()
        cy.get('#outlined-multiline-flexible').type('Test Comment')
        cy.get('.css-1k2xoqy > .MuiButtonBase-root').click()
        cy.get('.MuiAlert-message > .MuiTypography-root').should('be.visible')
    }
    /// Cant do this as we dont have access to change status from both super user and fleet manager
    ChangeServiceStatus(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VF38EBHXMJL003134')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.css-1vjo46s > :nth-child(1)').click()
        cy.get('#outlined-multiline-flexible').type('New request by tester123')
        cy.get('.css-1k2xoqy > .MuiButtonBase-root').click()
    }

    //Requested services Modal Testcases  28/11/24 
    ChangeStatus(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('987654321')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiChip-root.MuiChip-filled.MuiChip-sizeMedium.MuiChip-colorDefault.MuiChip-filledDefault.css-10k4k7i')
        .first()
        .should('be.visible')
        .click()
        .should('not.have.attr', 'disabled');
    }

    ServiceRequestComments(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('987654321')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(10).click();
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1pjj58c').eq(2).click()
        cy.get('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-multiline.css-1n7c9xk').eq(1).type('New test comment 123')
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-1a4gf8s').click()
        cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text','Success')
    }

    StatusHistory(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('987654321')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(10).click();
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1pjj58c').eq(0).click()
        cy.get('.MuiTypography-root.MuiTypography-body1.css-133i9vb').should('be.visible')
        cy.get('.MuiTypography-root.MuiTypography-body1.css-zv20wy').first().should('have.text', '2024-11-27')

    }

    FileUpload(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('987654321')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(10).click();
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1pjj58c').eq(0).click()
        cy.get('.MuiTypography-root.MuiTypography-body1.css-xvkkh5')
        .should('have.text', 'Currently you do not have any files to display in this request.');

    }

    StartSubservice(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('987654321')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(10).click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-1jceq7l').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-1a4gf8s')
        .eq(1)
        .click()
        cy.get('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.MuiAlertTitle-root.css-vi2dfs')
        .should('have.text', 'Error')
    }

    SubserviceStatus(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('987654321')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(10).click()
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1pjj58c').eq(1).click()
        .should('not.have.descendants')
    }

    SubserviceFileUpload(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('987654321')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(10).click()
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1pjj58c').eq(1).click() 
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1pjj58c').eq(1).click()
        .should('not.have.descendants')
    }

    SubserviceStatusHistory(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('987654321')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(10).click()
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1pjj58c').eq(1).click()
        .should('not.have.descendants')
    }

    CreateNewSubservice2(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('987654321')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(10).click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-1jceq7l').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-1a4gf8s')
        .eq(1)
        .click()
        cy.get('.MuiTypography-root.MuiTypography-body1.MuiTypography-gutterBottom.MuiAlertTitle-root.css-vi2dfs')
        .should('have.text', 'Error')
    }

    CreateNewSubservice3(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('987654321')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(10).click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-1jceq7l').click()
        //will set here once the issue is resolved
    }






    //28 Onwards
    CoupleCar(){
        cy.get('[aria-label="Repair"]').click()
        cy.wait(10000)
        cy.get('[class="MuiButtonBase-root css-1knlxk0"]').eq(0).click()
        cy.get('[role="combobox"]').last().type('Peugeot').type('{enter}')
        cy.get('[class="MuiButtonBase-root css-1knlxk0"]').eq(1).click()
        cy.get('[role="combobox"]').last().type('Boxer').type('{enter}')
        cy.get('[class="MuiTypography-root MuiTypography-body1 css-13sq091"]').eq(0).should('have.text','Peugeot')
        cy.get('[class="MuiTypography-root MuiTypography-body1 css-13sq091"]').eq(1).should('have.text','Peugeot')
        cy.get('[class="MuiStack-root css-kcfxyd"]').eq(0).should('have.text','Boxer2024')
        cy.get('[class="MuiStack-root css-kcfxyd"]').eq(1).should('have.text','Boxer2024')
    }

    ShowMore(){
        cy.get('[aria-label="Repair"]').click()
        cy.wait(5000)
        cy.get('.MuiButton-text > .MuiTypography-root').click()
    }

    EndpointsGettingClient(){
        cy.get('[aria-label="Dashboard"]').click()
        cy.wait(10000)
        cy.get(':nth-child(6) > .css-twfik > .MuiButtonBase-root').click()
    }

    CreateNewClients(){
        const values = ["Tester1", "Tester2", "Tester3","Tester4", "Tester5"]
        for (let value of values) {
            cy.get('[aria-label="Client"]').click()
            cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-colorPrimary.MuiButton-root.MuiButton-outlined.MuiButton-outlinedPrimary.MuiButton-sizeMedium.MuiButton-outlinedSizeMedium.MuiButton-colorPrimary.css-tl61s7").click()
            cy.get(".MuiInputBase-input.MuiOutlinedInput-input.css-1x5jdmq", { timeout: 5000 })
              .should('be.visible')
              .clear()
              .type(value)
            cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-1a4gf8s")
              .should('be.enabled')
              .click()
            cy.wait(1000)
        }
    }

    EditClient(){
        cy.get('[aria-label="Client"]').click()
        cy.get('[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"]').first().click()
        cy.get("input[value='New Client']").click()
    }

    DeleteClient(){
        cy.get('[aria-label="Client"]').click()
        cy.get('[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1yxmbwk"]').eq(12).click()
        cy.get('.css-1crt8ru').click()
    }

    ShowMore(){
        cy.get('[aria-label="Client"]').click()
        cy.get('.MuiButton-root > .MuiTypography-root').click()
    }

    //Faultcodes are not for fleet manager, test case no (36,37,38,39,40)

    //41 onwards
    ValidateNotifications(){
        cy.log('>>> Validate Recieved Nootification')

        cy.get('.MuiBadge-badge').last().should('be.visible')
        cy.get('MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-w2epbx').click()
        cy.get(':nth-child(3) > .MuiBadge-root > .MuiButtonBase-root > [data-testid="NotificationsIcon"] > path').click()
        cy.get('[class="MuiBox-root css-1l5spsu"]').first().should('be.visible')

        cy.log('>>> Validate Read One Notification at a time')

        cy.get(':nth-child(3) > .css-1xh5vlb > .css-miyl0m > .css-1l5spsu > .MuiStack-root > .MuiBox-root').should('be.visible')
        cy.get('[class="MuiBox-root css-1l5spsu"]').first().click()
        cy.get(':nth-child(3) > .css-1xh5vlb > .css-miyl0m > .css-1l5spsu > .MuiStack-root > .MuiBox-root').should('not.exist')

        cy.log('>>> Validate Read All Notifications')

        cy.get(':nth-child(4) > .css-1xh5vlb > .css-miyl0m > .css-1l5spsu > .MuiStack-root > .MuiBox-root').should('be.visible')
        cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-1lx5etl"]').click()
        cy.get(':nth-child(4) > .css-1xh5vlb > .css-miyl0m > .css-1l5spsu > .MuiStack-root > .MuiBox-root').should('not.exist')
        cy.reload()
    }

    ChangeProfile(){
        cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
        cy.get('[class="MuiListItemText-root css-9uwfd7"]').eq(0).click()
        cy.get('[name="first_name"]').clear().type('Emily')
        cy.get('[name="last_name"]').clear().type('Williams')
        cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-pt1ixt"]').click()
        cy.get('[class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom MuiAlertTitle-root css-1p71nkr"]').should('be.visible')
    }

    UserEndpoint(){
        cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
        cy.get('[class="MuiListItemText-root css-9uwfd7"]').eq(1).click()
        cy.url().should('include','/users')
    }

    InviteUsers(){
        const randomDigit = Cypress._.random(0, 1000);
        cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
        cy.get('[class="MuiListItemText-root css-9uwfd7"]').eq(1).click()
        cy.url().should('include','/users')

        cy.log('>>> Fleet Manager invite')

        cy.get('.css-1ac401f > .MuiStack-root > :nth-child(1)').click()
        cy.get('[name="first_name"]').type('Fleet')
        cy.get('[name="last_name"]').type('Manager')
        cy.get('[name="email"]').type(`fleetmanagers${randomDigit}@test.com`)
        cy.get('[class="MuiTypography-root MuiTypography-body1 css-1p96ote"]').eq(4).click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation').click()
        cy.get('.MuiAlert-message').should('be.visible')

        cy.log('>>> Fleet owner invite')

        cy.get('.css-1ac401f > .MuiStack-root > :nth-child(1)').click()
        cy.get('[name="first_name"]').type('Fleet')
        cy.get('[name="last_name"]').type('Owner')
        cy.get('[name="email"]').type(`fleetowner${randomDigit}@test.com`)
        cy.get('[class="MuiTypography-root MuiTypography-body1 css-1p96ote"]').eq(5).click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation').click()
        cy.get('.MuiAlert-message').should('be.visible')

        cy.log('>>> Temporary user invite')

        cy.get('.css-1ac401f > .MuiStack-root > :nth-child(1)').click()
        cy.get('[name="first_name"]').type('Temp')
        cy.get('[name="last_name"]').type('User')
        cy.get('[name="email"]').type(`tempuser${randomDigit}@test.com`)
        cy.get('[class="MuiTypography-root MuiTypography-body1 css-1p96ote"]').eq(1).click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation').click()
        cy.get('.MuiAlert-message').should('be.visible')
    }

    EditUser(){
        cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
        cy.get('[class="MuiListItemText-root css-9uwfd7"]').eq(1).click()
        cy.url().should('include','/users')
        cy.get('[id="demo-positioned-button"]').eq(0).click()
        cy.get('[tabindex="0"][role="menuitem"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.get('.MuiList-padding').invoke('hide')
        cy.get('[class="MuiBackdrop-root MuiBackdrop-invisible MuiModal-backdrop css-esi9ax"]').invoke('removeAttr', 'aria-hidden').click();        cy.get('[name="first_name"]').trigger('click')
        cy.get('[name="first_name"]').clear().type('Fname')
        cy.get('[name="last_name"]').type('Lname')
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
    }

    DeleteUser(){
        cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
        cy.get('[class="MuiListItemText-root css-9uwfd7"]').eq(1).click()
        cy.url().should('include','/users')
        cy.get('[id="demo-positioned-button"]').eq(0).click()
        cy.get('[tabindex="-1"] > .MuiListItemText-root > .MuiTypography-root').click()
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1j729wa').should('have.text', 'Access Denied')
    }

    ResendEmail(){ 
        cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
        cy.get('[class="MuiListItemText-root css-9uwfd7"]').eq(1).click()
        cy.url().should('include','/users')
        cy.get(':nth-child(1) > .MuiTableCell-alignRight > .MuiStack-root > :nth-child(1)').click()
        cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text','Success')
    }

    GroupAPI(){
        cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
        cy.get('[class="MuiListItemText-root css-9uwfd7"]').eq(2).click()
        cy.url().should('include','/groups')
    }

    //Fleet manager dont have access to create group
    CreateGroup(){
        cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
        cy.get('[class="MuiListItemText-root css-9uwfd7"]').eq(2).click()
        cy.url().should('include','/groups')
    }
    //fleet manager dont have access to edit..... and i have put assertion 'Access Denied' and working perfet
    EditGroup(){
        cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
        cy.get('[class="MuiListItemText-root css-9uwfd7"]').eq(2).click()
        cy.url().should('include','/groups')
        cy.get(':nth-child(7) > .MuiBox-root > .css-waxp3m > .MuiStack-root > :nth-child(1)').click()
        cy.wait(2000)
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1j729wa').should('have.text', 'Access Denied')
    }

    //same assertion here
    DeleteGroup(){
        cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
        cy.get('[class="MuiListItemText-root css-9uwfd7"]').eq(2).click()
        cy.url().should('include','/groups')
        cy.get(':nth-child(7) > .MuiBox-root > .css-waxp3m > .MuiStack-root > :nth-child(2)').click()
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1j729wa').should('have.text', 'Access Denied')
    }

    Logout(){
        cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
        cy.get('[class="MuiListItemText-root css-1w0mxn0"]').click()
        cy.url().should('include','/login')
    }


}
