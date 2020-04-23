export class StoreActions {
  static get STATUS() {
    return {
      REQUEST: "REQUEST",
      SUCCESS: "SUCCESS",
      FAILURE: "FAILURE",
    };
  }

  static get GRAPH() {
    return {
      LOAD: "LOAD_GRAPH",
    };
  }
}
