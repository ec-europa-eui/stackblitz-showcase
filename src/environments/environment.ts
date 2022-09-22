import { EuiEnvConfig } from '@eui/core';

export const environment: EuiEnvConfig = {
    production: false,
    enableDevToolRedux: true,
    apiBaseUrl : 'http://localhost:3000/translate/',
    envDynamicConfig: {
        uri: 'assets/env-json-config.json',
        deepMerge: true,
        merge: ['modules'],
    },
};
