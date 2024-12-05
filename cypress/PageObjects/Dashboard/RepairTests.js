export default 
class RepairTests{
    Visit(){
        cy.visit("https://automotics-kcuppens-projects.vercel.app/")
    }

    Login(){
        cy.visit("https://automotics-kcuppens-projects.vercel.app/login")
        cy.get('#\\:r0\\:').type("stevenavila@example.com")
        cy.get("#\\:r1\\:").type("Automotics123")
        cy.get("button[type='submit']").click()
        cy.wait(10000)
        //cy.url().should('eq','https://automotics-kcuppens-projects.vercel.app/')
    }

    UploadReports() {
        cy.visit("https://automotics-kcuppens-projects.vercel.app/");
        cy.get('.css-1capxqj').click(); // Upload report
        cy.url().should('eq', 'https://automotics-kcuppens-projects.vercel.app/repair/?modalType=upload')
        cy.get('.css-1u1o14a > .MuiButtonBase-root').click()
        cy.get('.MuiSelect-select').click()
        cy.wait(5000)
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root').eq(1).click()
    
        // List of files to upload
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
        cy.get('[class="MuiBox-root css-1qxtz39"]').first().should('contain.text','VIN')
        
    }

    CheckVIN(){
        cy.get('[aria-label="Repair"]').click()
        cy.wait(5000)
        cy.get('[class="MuiBox-root css-1qxtz39"]').first().should('contain.text','VIN')
    }

    ChangeClient(){
        cy.get('[aria-label="Repair"]').click()
        cy.wait(5000)
        cy.get('[class="MuiBox-root css-13yoi82"]').eq(1).click()
        cy.get('[role="combobox"]').last().type('Patrick Cardinaels')
        cy.get('[class="MuiAutocomplete-option"]').click()
        cy.get('[class="MuiTypography-root MuiTypography-body1 css-13sq091"]').first().should('have.text','BMW')
        cy.get('[class="MuiStack-root css-kcfxyd"]').first().should('have.text','745E2020')
        cy.get('[class="MuiBox-root css-1qxtz39"]').first().should('have.text','VIN :WBA7D610X0BM69361')

    }

    ChangeStatus(){
        cy.get('[aria-label="Repair"]').click()
        cy.wait(5000)
        cy.get('[class="MuiBox-root css-13yoi82"]').eq(3).click()
        cy.get('[class="MuiBox-root css-1k6a8z7"]').last().click()
        cy.get('[class="MuiTypography-root MuiTypography-body1 css-13sq091"]').first().should('have.text','Peugeot')
        cy.get('[class="MuiStack-root css-kcfxyd"]').first().should('have.text','Boxer1982')
        cy.get('[class="MuiBox-root css-1qxtz39"]').first().should('have.text','VIN :1993')

    }

    CreateNewCar(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-colorPrimary css-tl61s7"]').click()
        cy.get('[role="combobox"]').eq(1).click()
        cy.get('[data-value="4"]').click()
        cy.get('[role="combobox"]').eq(3).click()
        cy.get('[data-value="2024"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"]').type('VIN :2024')
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
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VF38EBHXMJL003134')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.css-u4p24i > .MuiBadge-root > .MuiButtonBase-root').click()
        cy.get('.css-1p6zc79 > .MuiButtonBase-root').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"]').type('Test Comments')
        cy.get('[class="MuiBox-root css-1kjs7j9"]').type('Test comment description')
        cy.get('.css-frhfc5 > .MuiButtonBase-root').click()
        cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text','Success')

        cy.log('>>>  Edit a comment')
        cy.visit('https://automotics-kcuppens-projects.vercel.app/')
        cy.get('.MuiStack-root.css-wdnt3x > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get(':nth-child(1) > .css-1pbxpfk > .css-1uymeb8 > .css-u4p24i > :nth-child(1)').click()
        cy.get('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.css-1eraird').clear()
        cy.get('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.css-1eraird').type('Test Comments edit')
        cy.get('[class="MuiBox-root css-1kjs7j9"]').clear().type('Test comment description')
        cy.get('.css-frhfc5 > .MuiButtonBase-root').click()
        cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text','Success')
        
        cy.log('>>> Delete a comment')
        cy.get(':nth-child(1) > .css-1pbxpfk > .css-1uymeb8 > .css-u4p24i > :nth-child(2)').click()
        cy.get('.css-1crt8ru').click()
        cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text','Success')

      }

    ReanalizeReport(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VF38EBHXMJL003134')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('[class="MuiTypography-root MuiTypography-body1 css-13sq091"]').should('have.text','Peugeot')
    }

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
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VF38EBHXMJL003134')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.css-1vjo46s > :nth-child(1)').click()
        cy.url().should('include','/request-service')
    }

    RequestedServicesEndpoints(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VF38EBHXMJL003134')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.css-1vjo46s > :nth-child(1)').click()
    }

    CreateServiceRequest(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VF38EBHXMJL003134')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.css-1vjo46s > :nth-child(1)').click()
        cy.get('#outlined-multiline-flexible').type('New request by tester')
        cy.get('.css-1k2xoqy > .MuiButtonBase-root').click()
    }

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
    // Requested service Modal tests 28/11/2024
    ChangeStatus(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VF38EBHXMJL003134')
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
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VF38EBHXMJL003134')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(16).click()
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1pjj58c').eq(2).click()
        cy.get('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-formControl.MuiInputBase-multiline.css-1n7c9xk').eq(1).type('test comment')
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-1a4gf8s').click()
        cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text','Success')
    }

    StatusHistory(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VF38EBHXMJL003134')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(16).click()
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1pjj58c').eq(0).click()
        cy.get('.MuiTypography-root.MuiTypography-body1.css-133i9vb').scrollIntoView()
        .should('be.visible')
        .click()
    }

    FileUpload(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VF38EBHXMJL003134')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(16).click()
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1pjj58c').eq(0).click()
        
        const file='Documents/Tooltip.pdf'
        cy.get('.MuiBox-root.css-xboxz5').attachFile(file,{subjectType: 'drag-n-drop'})
        cy.get('.MuiBox-root.css-jc0lu3').should('be.visible')
        cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text','Success')
    }

    StartSubservice(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VF38EBHXMJL003134')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(16).click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-1jceq7l').click()
        cy.get('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.css-qiwgdb').click()
        cy.get('.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.css-1qf12eh').click()
        cy.get('.css-u7b0ot > .MuiButtonBase-root').click({force: true})
        cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text','Success')
    }

    SubserviceStatus(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VF38EBHXMJL003134')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(16).click()
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1pjj58c').eq(1).click()
        .should('not.have.descendants')
    }

    SubserviceFileUpload(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VF38EBHXMJL003134')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(16).click()
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1pjj58c').eq(0).click()

        const file='Documents/Tooltip.pdf'
        cy.get('.MuiBox-root.css-xboxz5').attachFile(file,{subjectType: 'drag-n-drop'})
        cy.get('.MuiBox-root.css-jc0lu3').should('be.visible')
        cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text','Success')
    }

    SubserviceStatusHistory(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VF38EBHXMJL003134')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(16).click()
        cy.get('.MuiTypography-root.MuiTypography-body1.css-1pjj58c').eq(1).click()
        .should('not.have.descendants')
    }

    CreateNewSubservice2(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VF38EBHXMJL003134')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(16).click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-1jceq7l').click()
        cy.get('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.css-qiwgdb').click()
        cy.get('.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.css-1qf12eh').click()
        cy.get('.css-u7b0ot > .MuiButtonBase-root').click({force: true})
        cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text','Success')
    }

    CreateNewSubservice3(){
        cy.get('[aria-label="Repair"]').click()
        cy.get('[aria-label="Repair"]').click()
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedStart css-1ixds2g"]').type('VF38EBHXMJL003134')
        cy.wait(9000)
        cy.reload()
        cy.wait(4000)
        cy.get('#basic-button').click()
        cy.get('.MuiList-root.MuiList-padding.MuiMenu-list.css-r8u8y9 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk:nth-of-type(2)').click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-fvlvy7').first().click()
        cy.get('.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(16).click()
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-1jceq7l').click()
        cy.get('.MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input.css-qiwgdb').click()
        cy.get('.MuiButtonBase-root.MuiMenuItem-root.MuiMenuItem-gutters.css-1qf12eh').click()
        // cy.get('.css-u7b0ot > .MuiButtonBase-root').click({force: true})
        // cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text','Success')
    }


    //28 onward          
    //Need to test 2 same cars using filters
    CoupleCar(){
        cy.get('[aria-label="Repair"]').click()
        cy.wait(10000)
        cy.get('[class="MuiButtonBase-root css-1knlxk0"]').eq(0).click()
        cy.get('[role="combobox"]').last().type('Peugeot').type('{enter}')
        cy.get('[class="MuiButtonBase-root css-1knlxk0"]').eq(2).click()
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

    EndpointsGettingClient(){
        cy.get('[aria-label="Dashboard"]').click()
        cy.wait(10000)
        cy.get(':nth-child(6) > .css-twfik > .MuiButtonBase-root').click()
    }

    CreateClient(){
        cy.get('[aria-label="Client"]').click()
        cy.get('.css-1ioq90b > .MuiButton-root').click()
        cy.get('.MuiGrid-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('New Client')
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
        cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text','Success')
    }

    EditClient(){
        cy.get('[aria-label="Client"]').click()
        cy.get('.MuiStack-root.css-rzhh08 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').first().click({force:true})
        cy.get('.MuiGrid-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Edit')
        cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-disableElevation css-1a4gf8s"]').click()
        
    }

    DeleteClient(){
        cy.get('[aria-label="Client"]').click()
        cy.get('.MuiStack-root.css-rzhh08 > .MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium.css-1yxmbwk').eq(1).click({force:true})
        cy.get('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-1crt8ru"]').click()
    }

    ShowMore(){
        cy.get('[aria-label="Client"]').click()
        cy.get('.MuiButton-root > .MuiTypography-root').click()
    }

    FaultCodeEndpoints(){
        cy.get('[aria-label="Faultcode"]').click()
        cy.url().should('include','/faultcode')
    }

    UpdateFaultcode(){
        const randomDigit = Cypress._.random(0, 9);
        cy.get('[aria-label="Faultcode"]').click()
        cy.reload()
        cy.wait(25000)
        cy.get(':nth-child(1) > .MuiTableCell-alignRight > #demo-positioned-button').click()
        cy.get('li:nth-child(3)').click()
        cy.get('.css-9cxdmg').click()
        cy.wait(5000)
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"]').first().click().type('{backspace}')
        cy.get('[class="MuiInputBase-input MuiOutlinedInput-input css-1x5jdmq"]').first().type(randomDigit)
        cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-disableElevation.css-1a4gf8s').click()
        cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text', 'Success')
    }

    FaultCodeSolution(){
        cy.get('[aria-label="Faultcode"]').click()
        cy.wait(20000)
        cy.get('tbody tr:nth-child(1) td:nth-child(3)').should('include.text','0')
    }

    FaultcodeShowMore(){
        cy.get('[aria-label="Faultcode"]').click()
        cy.wait(20000)
        cy.get('.MuiButton-root > .MuiTypography-root').click()
    }
    
    DeleteFaultcode(){
        cy.get('[aria-label="Faultcode"]').click()
        cy.wait(25000)
        cy.get(':nth-child(3) > .MuiTableCell-alignRight > #demo-positioned-button').click()
        cy.get('.MuiList-root > :nth-child(4)').click()
        cy.get('.css-1crt8ru').click()
    }

    //41 and onwards
    ValidateNotifications(){
        cy.log('>>> Validate Recieved Nootification')

        cy.get('.MuiBadge-badge').last().should('be.visible')
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
        cy.get('.MuiList-padding').invoke('hide')
        cy.get('[class="MuiBackdrop-root MuiBackdrop-invisible MuiModal-backdrop css-esi9ax"]').invoke('removeAttr', 'aria-hidden').click();
        cy.get('.css-1crt8ru').click()
        cy.get('.MuiAlert-message > .MuiTypography-root').should('have.text', 'Success')

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

    CreateGroup(){
        cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
        cy.get('[class="MuiListItemText-root css-9uwfd7"]').eq(2).click()
        cy.url().should('include','/groups')
        cy.get('.MuiButton-root').click()
        cy.wait(2000)
        cy.get('.MuiGrid-container > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Temp1', { delay: 100 })
        cy.wait(2000)
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
        cy.get('.MuiAlert-message').should('be.visible')
    }

    EditGroup(){
        cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
        cy.get('[class="MuiListItemText-root css-9uwfd7"]').eq(2).click()
        cy.url().should('include','/groups')
        cy.get(':nth-child(7) > .MuiBox-root > .css-waxp3m > .MuiStack-root > :nth-child(1)').click()
        cy.wait(2000)
        cy.get('.MuiGrid-container > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Edit1', { delay: 100 })
        cy.wait(2000)
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
        cy.get('.MuiAlert-message').should('be.visible')
    }

    DeleteGroup(){
        cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
        cy.get('[class="MuiListItemText-root css-9uwfd7"]').eq(2).click()
        cy.url().should('include','/groups')
        cy.get(':nth-child(7) > .MuiBox-root > .css-waxp3m > .MuiStack-root > :nth-child(2)').click()
        cy.get('.css-1crt8ru').click()
        cy.get('.MuiAlert-message').should('be.visible')
    }

    Logout(){
        cy.get('[data-testid="KeyboardArrowDownIcon"]').click()
        cy.get('[class="MuiListItemText-root css-1w0mxn0"]').click()
        cy.url().should('include','/login')
    }
}
