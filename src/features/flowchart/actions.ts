import { createAsyncAction } from "typesafe-actions";
import { StoreActions } from "../../constants/storeActions";

export const loadGraphAsync = createAsyncAction(
  `${StoreActions.GRAPH.LOAD}_${StoreActions.STATUS.REQUEST}`,
  `${StoreActions.GRAPH.LOAD}_${StoreActions.STATUS.SUCCESS}`,
  `${StoreActions.GRAPH.LOAD}_${StoreActions.STATUS.FAILURE}`
)<undefined, Object, string>();
