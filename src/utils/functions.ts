export const getDefaultStaticTitle = (title?: string) => {
  return title ? title : "Unnamed Page";
};

export const getStaticTitleEnd = () => {
  return process.env.NEXT_PUBLIC_STATIC_TITLE
    ? " — " + process.env.NEXT_PUBLIC_STATIC_TITLE
    : "";
};

export const classesJoin = (...args: any) => {
  return args
    .flat()
    .filter((x) => x !== null && x !== undefined && typeof x !== "boolean")
    .join(" ");
};

export function validateEmail(email: string): boolean {
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return expression.test(email);
}