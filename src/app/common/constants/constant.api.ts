
export const Api = Object.freeze({
    FORMAT_JSON: '$format=application/json;odata.metadata=none',
    FORMAT_COUNT: 'count=true',
    KEY_COUNT: '@odata.count',
    KEY_CONTEXT: '@odata.context',
    KEY_VALUES: 'value',

    ENCODED_FORMAT_COUNT: '%24count%3Dtrue',
    ENCODED_COLON: '%253A',
    ENCODED_SLASH: '%252F',
    ENCODED_DOLLAR: '%24',
    ENDCODED_EQUALS: '%3D',

    BUSINESS_UNIT: '/businessUnit/businessUnits',

    FILE_UPLOAD_STATUSES: '/lookups/fileStatuses',
    TRANSACTION_STATUSES: '/lookups/fileTransactionStatuses',
    TRANSACTION_TYPES: '/lookups/transactionTypes',

    FILE_UPLOAD: '/file/FileUploads',
    FILE_TRANSACTIONS: '/file/Transactions',

    USER_LOGIN: '/users/Auth/Login',
    USER_REGISTRATION: '/users/Accounts/Register',
    USER_ROLE: '/users/role',
    USER_REST_PASSWORD: '/users/Accounts/ResetPassword',
    USER_FORGOT_PASSWORD: '/users/Accounts/ForgotPassword',
    USER_INFO:  '/users/Accounts/UserInfo',

    // FUNTIONS
    FUNCTIONS_TRANSACTION_SUMMARY: '/Functions.GetTotalTransactionAmount',
    FUNCTIONS_FILE_CONTENT: '/Functions.GetFileContentById',

    // ACTIONS
    ACTIONS_UPDATE_FILE_HEADER_STATUS: '/Actions.UpdateFileHeaderStatus'
});

