export interface RouteModel {
    path?: string;
    name: string;
    rtlName: string;
    mini?: string;
    rtlMini?: string;
    component?: any;
    layout?: string;
    collapse?: boolean,
    state?: string,
    views?: RouteModel[];
    icon?: string;
  }
  
