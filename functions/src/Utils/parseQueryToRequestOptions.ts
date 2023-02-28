import { objectKeys } from "./objectKeys";

const checkInstance = <TObj>(obj: unknown): obj is TObj =>
  !!(obj as TObj);

export const parseQueryToRequestOptions =
  <TTarget>(
    query: object,
    defOptions?: TTarget
  ) => {
    type TKeys = keyof TTarget
    const keys = objectKeys(query);
    if (!keys.length && defOptions) {
      return defOptions;
    }
    return objectKeys(query).reduce<TTarget>((combine, nextItem) => {
      if (checkInstance<TKeys>(nextItem)) {
        combine[ nextItem ] = query[ nextItem ];
      }
      return combine;
    }, Object.create({}));
  };
