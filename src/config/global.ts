import { GlobalConfig } from '@eui/core';

export const GLOBAL: GlobalConfig = {
    appTitle: 'CSDR-app',
    i18n: {
        i18nService: {
            defaultLanguage: 'en',
            languages: ['en', 'fr'],
        },
        i18nLoader: {
            i18nFolders: ['i18n'],
            i18nResources: [{
                prefix: 'other-assets/i18n/',
                suffix: '.json',
           }],
        },
    },
    user: {
        defaultUserPreferences: {
            dashboard: { },
            lang: 'en',
        },
    },
};
