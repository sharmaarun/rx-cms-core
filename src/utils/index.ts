
/**
   * Make string plural
   * TODO: Move into seperate module
   * @param str
   * @returns
   */
export const pluralize = (str: string) => {
    const lChar = str.charAt(str.length - 1);
    if (lChar.match(/[s]/gi)) {
        return str + "es";
    }
    if (lChar.match(/[yi]/gi)) {
        return str.substr(0, str.length - 1) + "ies";
    }

    return str + "s";
};

/**
 * Convert to camel case
 * TODO: Move into seperate module
 * @param str
 * @returns
 */
export const toCamelCase = (str: string) => {
    return str
        .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replace(/\s+/g, "");
};

/**
 * convert to pascal case
 * TODO: Move into seperate module
 * @param str
 * @returns
 */
export const toPascalCase = (str: string) => {
    return `${str}`
        .replace(new RegExp(/[-_]+/, "g"), " ")
        .replace(new RegExp(/[^\w\s]/, "g"), "")
        .replace(
            new RegExp(/\s+(.)(\w+)/, "g"),
            ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
        )
        .replace(new RegExp(/\s/, "g"), "")
        .replace(new RegExp(/\w/), (s) => s.toUpperCase());
};

/**
 * convert to kebab case
 * TODO: Move into seperate module
 * @param str
 * @returns
 */
export const toKebabCase = (str: string) => {
    return str
        .replace(/([a-z])([A-Z])/g, "$1-$2") // get all lowercase letters that are near to uppercase ones
        .replace(/[\s_]+/g, "-") // replace all spaces and low dash
        .toLowerCase();
};

/**
 * convert to sentence case
 * TODO: Move into seperate module
 * @param str
 * @returns
 */
export const toSentenceCase = (str: string) => {
    return str
        .replace(/([A-Z])/g, " $1");
};


