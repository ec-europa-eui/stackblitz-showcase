import { GlobalConfig } from '@eui/core';
import { environment } from '../environments/environment';  
import { LocaleServiceConfig } from '@eui/core';


export const GLOBAL: GlobalConfig = {
    appTitle: 'CSDR-app',
    i18n: {
        i18nService: {
            defaultLanguage: 'en',
            languages: ['en', 'fr'],
        },
        i18nLoader: {
            i18nFolders: ['i18n-eui', 'i18n', 'i18n-ecl'],
        },
    },
    user: {
        defaultUserPreferences: {
            dashboard: { },
            lang: 'en',
        },
    },
    locale: {
        available: ['el-GR'],
        bindWithTranslate: false,

     },
   
};
