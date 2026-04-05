import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getSummary(): Promise<{
        totalEnquiries: number;
        totalCars: number;
        carTypes: {
            name: any;
            count: number;
        }[];
    }>;
}
