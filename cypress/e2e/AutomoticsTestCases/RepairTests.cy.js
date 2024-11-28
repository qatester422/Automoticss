import RepairTests from "../../PageObjects/Dashboard/RepairTests";

describe('Repair Tests',() => {
    const obj = new RepairTests()

    beforeEach("Login",()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Cannot read properties of undefined')) {
              return false
            }
            return true;
          });
        obj.Login()
    })
    
    it('Upload Files', () => {
        obj.UploadReports()
    })

    it('Report Modal Openable', () => {
        obj.ReportModalOpenable()
    })

    it('Car data filled in', () => {
        obj.CarDataFilledIn()
    })

    it('Check VIN', () => {
        obj.Visit()
        obj.CheckVIN()
    })

    it('Change Client', () => {
        obj.ChangeClient()
    })

    it('Change Status', () => {
        obj.ChangeStatus()
    })

    it('Car Tests', () => {
        obj.CreateNewCar()
        obj.UpdateCar()
        obj.DeleteCar()
    })

    it('Comment Tests', () => {
        obj.CommentFucntions()
    })

    it('Reanalize Report', () => {
        obj.ReanalizeReport()
    })

    it('Download Manual Reports', () => {
        obj.DownloadManualReport()
    })

    it('Download Custom Reports', () => {
        obj.DownloadCustomReport()
    })

    it('Requested Service page Tests', () => {
        obj.OpenRequestedService()
    })
    it('Requested Service page Tests', () => {
        obj.RequestedServicesEndpoints()
    })
    it('Requested Service page Tests', () => {
        obj.CreateServiceRequest() 
    })
    it('Requested Service page Tests', () => {
        obj.ChangeServiceStatus()
    })

    // Modal tests 28/11/2024
    it('Change Status', () => {
        obj.ChangeStatus()
    })

    it('Service Request Comments', () => {
        obj.ServiceRequestComments()
    })

    it('Status History', () => {
        obj.StatusHistory()
    })

    it('File Upload', () => {
        obj.FileUpload()
    })

    it('Start Subservice', () => {
        obj.StartSubservice()
    })

    it('Subservice Status', () => {
        obj.SubserviceStatus()
    })

    it('Subservice File Upload', () => {
        obj.SubserviceFileUpload()
    })

    it('Subservice Status History', () => {
        obj.SubserviceStatusHistory()
    })

    it('Create New Subservice 2', () => {
        obj.CreateNewSubservice2()
    })

    it('Create New Subservice 3', () => {
        obj.CreateNewSubservice3()
    })

    it('Couple Car', () => {
        obj.CoupleCar()
    })

    it('Show More Button', () => {
        obj.ShowMore()
    })

    it('Create new Client', () => {
        obj.CreateNewClients()
    })

    it('Endpoints getting Client', () => {
        obj.EndpointsGettingClient()
    })

    it('Client CRUD', () => {
        obj.CreateClient()
        obj.EditClient()
        obj.DeleteClient()
    })

    it('Show More', () => {
        obj.ShowMore()
    })

    it('Fauldcode Endpoints ', () => {
        obj.FaultCodeEndpoints()
    })

    it('Update Fauldcode', () => {
        obj.UpdateFaultcode()
    })

    it('Fauldcode Solution', () => {
        obj.FaultCodeSolution()
    })

    it('Fauldcode Show more', () => {
        obj.FaultcodeShowMore()
    })

    it('Fauldcode Delete', () => {
        obj.DeleteFaultcode()
    })

    it('Notifications', () => {
        obj.UploadReports()
        obj.ValidateNotifications()
    })

    it('Change user Profile', () => {
        obj.ChangeProfile()
    })

    it('User enpoint working', () => {
        obj.UserEndpoint()
    })

    it('Invite users', () => {
        obj.InviteUsers()
    })

    it('Edit user', () => {
        obj.EditUser()
    })

    it('Delete user', () => {
        obj.DeleteUser()
    })

    it('Resend email', () => { 
        obj.ResendEmail()
    })

    it('Group API working', () => {
        obj.GroupAPI()
    })

    it('Create a temporary group', () => {
        obj.CreateGroup()
    })

    it('Edit a temporary group', () => {
        obj.EditGroup()
    })

    it('Delete a temporary group', () => {
        obj.DeleteGroup()
    })

    it('Logout user', () => {
        obj.Logout()
    })

})
