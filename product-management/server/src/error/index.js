export class RouteNotImplementedError extends Error {
  constructor(message= "Route not implemented") {
    super(message);
    this.name = "RouteNotImplementedError";
    this.statusCode = 501;
  } 
}