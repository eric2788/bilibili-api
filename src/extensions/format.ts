export {}

declare global {
    interface String {
        formatPath(params: object): string
        formatQuery(params: string[], data: object): string
    }    
}

/**
 * Replaces placeholders in a template string with corresponding values from an object.
 * after the placeholders are replaced, the object will be mutated.
 * @param this - The template string containing placeholders in the format "{key}".
 * @param params - The object containing key-value pairs to replace the placeholders.
 * @returns The formatted string with placeholders replaced by their corresponding values.
 */
String.prototype.formatPath = function(this: string, params: object): string {
    let template = this
    const args = /{([^{}]*)}/g.exec(template)
    for (const arg of args) {
        const key = arg.slice(1, -1)
        template = template.replace(arg, params[key])
        delete params[key]
    }
    return template
}

/**
 * Formats the URL parameters by replacing placeholders in the template with actual values.
 * after the placeholders are replaced, the object will be mutated.
 * @param this - The URL template with placeholders.
 * @param params - An array of parameter names to be replaced in the template.
 * @param data - An object containing the values for the parameters.
 * @returns The formatted URL with replaced parameters.
 */
String.prototype.formatQuery = function(this: string, params: string[], data: object): string {
    if (!params.length) return this
    const query = new URLSearchParams()
    for (const param of params) {
        query.append(param, data[param])
        delete data[param]
    }
    return `${this}?${query}`
}