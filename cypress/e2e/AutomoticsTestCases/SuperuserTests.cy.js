import DashboardPage from "../../PageObjects/Dashboard/SuperuserTests";

describe('Superuser Tests', () => {
    const dashboardObj = new DashboardPage();
    beforeEach("Login",() => {
        dashboardObj.login()
        dashboardObj.VisitDashboard()
    })

    it('Dashboard Endpoints',()=>{
        dashboardObj.DashboardEndpoints()
    })

    it('Dashboard Functionality', () => {
        dashboardObj.CreateClient()
        dashboardObj.AssignClient()
        dashboardObj.FaultcodeSolutions()
        dashboardObj.SeeAllClients()
        dashboardObj.SeeAllFaultcodeSolutions() //?
        // dashboardObj.SeeAllReports()
    });
})
