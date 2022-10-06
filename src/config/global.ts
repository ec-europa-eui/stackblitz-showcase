import { GlobalConfig } from '@eui/core';
import {EuiAppConfig} from '@eui/core';



export const GLOBAL: GlobalConfig = {
    appTitle: 'CSDR-app',
    i18n: {
        i18nService: {
            defaultLanguage: 'en',
            languages: ['en', 'fr'],
        },
        i18nLoader: {
            i18nFolders: ['i18n-eui', 'i18n', 'i18n-ecl'],
            i18nResources: [{
                prefix: 'api/translations/',
                compileTranslations: 'CompileTranslations_ID',
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


export function CompileTranslations(translations: any): any {
    const result = {};
    translations.forEach((translation: any) => {
        // extract the key and value from the translation object
        const key = translation['key'];
        const value = translation['value'];
        if (key && value) {
            result[key] = value;
        }
    });
    return result;
}
