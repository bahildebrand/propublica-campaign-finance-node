export interface IEndPoint {
    endpointStr: String;
    apiCall(baseStr: String, endpoint: String, args: any)
}