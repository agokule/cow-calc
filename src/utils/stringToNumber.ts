/***
  * Examples:
  * > stringToNumber("50%", 50)
  * 25
  * > stringToNumber("100", 100)
  * 100
  * > stringToNumber("10", 100)
  * 10
  */
export function stringToNumber(str: string, total: number): number {
  if (str.at(str.length - 1) == "%") {
    const s = str.slice(0, str.length - 1)
    return (Number(s) / 100) * total
  }

  let x = Number(str)
  if (x > total)
    throw new Error("Inputted number greater than maximum")
  return x
}
