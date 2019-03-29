import { AuthStoreState } from './auth';
import { DashboardStoreState } from './dashboard';
import { AccountManagementStoreState } from './account-management';
import { ComplianceStoreState } from './compliance';
import { ProductCatalogStoreState } from './product-catalog';

export interface State {
    auth: AuthStoreState.State;
    dashboard: DashboardStoreState.State;
    accountManagement: AccountManagementStoreState.State;
    compliance: ComplianceStoreState.State;
    productCatalog: ProductCatalogStoreState.State;
}
