export interface AppConfig {
    appName: string;
    cmsService: CmsServiceConfig
}

export interface CmsServiceConfig {
    baseURL: string;
    componentURL: CmsComponentURLConfig;
}

interface CmsComponentURLConfig {
    headerComponent: string;
    expoComponent: string;
    experienceComponent: string;
    recapComponent: string;
}