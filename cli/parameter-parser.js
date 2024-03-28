
export class ParameterParser {
    static parse(params) {
        const { _, $0, ...cleanParams } = params;
        return cleanParams;
    }
}
