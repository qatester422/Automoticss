import FleetManager from "../../PageObjects/Dashboard/FleetManagerFunctions";

describe('Fleet Manager authentication tests',() => {
    const obj = new FleetManager()
    
    it('Invite fleet manager and login after email verification', () => {
        obj.AddFleetManager()
    })

    it('Forget password flow test', () => {
        obj.ForgetPassword()
    })
})

describe('Fleet Manager Tests suits',() => {
    const obj = new FleetManager()
    
    beforeEach('Login as Fleet Manager', () => {
        obj.login()
    })

    it('Repair Page Accessable', () => {
        obj.ReparePageAccessable()
    })

    it('Client Page Accessable', () => {
        obj.ClientPageAccessable()
    })

    it('Faultcode Page Accessable?', () => {
        obj.FaultcodePageAccessable()
    })

    it('Dashboard Endpoints', () => {
        obj.DashboardEndpoints()
    })

    it('Dashboard Buttons', () => {
        obj.DashboardButtons()
    })

    it('Upload Reports', () => {
        obj.UploadReports()
    })

    it('Report Modal openable', () => {
        obj.ReportModalOpenable()
    })

    it('Car Data Filled in', () => {
        obj.CarDataFilledIn()
    })

    it('Check VIN', () => {
        obj.CheckVIN()
    })

    it('Change Client', () => {
        obj.ChangeClient()
    })

    it('Change Status', () => {
        obj.ChangeStatus()
    })

    it('Create New Car', () => {
       obj.CreateNewCar()
    })

    it('Update Car', () => {
        obj.UpdateCar()
     })

     it('Delete Car', () => {
        obj.DeleteCar()
     })

     it('Comments Functions', () => {
        obj.CommentFucntions()
     })

     it('Comments Functions', () => {
        obj.ReanalizeReport()
     })

     it('Download Manual Report', () => {
        obj.DownloadManualReport()
     })

     it('Download Custom Report', () => {
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

    //Requested services Modal Testcases  28/11/24 
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

    //28 Onwards
    it('Couple Car', () => {
        obj.CoupleCar()
    })

    it('Show more Button', () => {
        obj.ShowMore()
    })

    it('Endpoints getting Client', () => {
        obj.EndpointsGettingClient()
    })

    it('Create Client', () => {
        obj.CreateNewClients()
    })

    it('Update Client', () => {
        obj.UpdateCar()
    })

    it('Delete Client', () => {
        obj.DeleteClient()
    })

    it('Show More', () => {
        obj.ShowMore()
    })

    //41 Onwards
    it('Validate Notifications', () => {
        obj.ValidateNotifications()
    })

    it('Change Profile', () => {
        obj.ChangeProfile()
    })

    it('User Endpoints', () => {
        obj.UserEndpoint()
    })

    it('Invite User', () => {
        obj.InviteUsers()
    })

    it('Edit User', () => {
        obj.EditUser()
    })

    it('Delete User', () => {
        obj.DeleteUser()
    })

    it('Resend Email', () => {
        obj.ResendEmail()
    })

    it('Group Api', () => {
        obj.GroupAPI()
    })

    it('Create Group', () => {
        obj.CreateGroup()
    })

    it('Edit Group', () => {
        obj.EditGroup()
    })

    it('Delete Group', () => {
        obj.DeleteGroup()
    })

    it('Logout User', () => {
        obj.Logout()
    })

})