// to bad typescript does not have a built in function for this

export function toTitleCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}