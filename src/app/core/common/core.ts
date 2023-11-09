import { CONST } from "@app/core/const/constant";

const REG_EMAIL: any = CONST.REG_EMAIL;

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

export function logoutUser() {
  localStorage.clear();
}

export function isValidEmail(value: string): boolean {
  return REG_EMAIL.test(value);
}

//
// export function isValidPassword(value: string): void {}
