import { addedDiff, diff, updatedDiff } from "deep-object-diff";
import merge from "lodash.merge";

export enum Operation {
  Complement,
  Difference,
  Intersection,
  Union,
}

export function calculateJSONSet(
  a: object,
  b: object,
  op: Operation | null,
): object {
  switch (op) {
    case Operation.Complement:
      return addedDiff(a, b);
    case Operation.Difference:
      return diff(a, b);
    case Operation.Intersection:
      return updatedDiff(a, b);
    case Operation.Union:
      return merge(a, b);
    default:
      throw new Error("Invalid operation");
  }
}
