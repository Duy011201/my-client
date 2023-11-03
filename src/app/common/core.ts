export function isEmptyNullUndefined(value: any) {
  if (
    value === null ||
    value === undefined ||
    (typeof value === "string" && value.trim() === "") ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "object" && Object.keys(value).length === 0)
  ) {
    return true;
  }
  return false;
}

// export function isValidEmail(value: string): void {}
//
// export function isValidPassword(value: string): void {}
