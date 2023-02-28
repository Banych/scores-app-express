export const objectKeys = <TObj extends object>(obj: TObj): (keyof TObj)[] => {
  return Object.keys(obj) as (keyof TObj)[];
};
