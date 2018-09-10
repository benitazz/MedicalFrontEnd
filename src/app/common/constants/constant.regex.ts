export const ConstantRegex = Object.freeze({
    EMAIL_PATTERN: '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$',
    ALPHA_NUMERIC_PATTERN: '^[a-zA-Z0-9]*$', // No special characters ,
    LETTERS_ONLY_PATTERN: '^[a-zA-Z]*$',
    LETTERS_WITH_SPACE_PATTERN: '^[a-zA-Z\\s\u0000]+',
    ALPHANUMERIC_DASH_UNDERSCORE_PATTERN: '^[A-Za-z0-9_-\\s\u0000]+$',
    ALPHANUMERIC_DASH_UNDERSCORE_HASH_PATTERN: '^[#A-Za-z0-9_-\\s\u0000]+$',
    DECIMAL_PATTERN: '/^\d+(?:\.\d{1,2})?$/',
    NOSPACESONLY: '[\\s\\S]*\\S[\\s\\S]*',
    HEX_TO_RGB: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i,
    HEX_SHORTHAND_EXTENTION: /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    PHONE_NUMBER: /^(\+27|27)?(\d{0,10})?$/i
  });
