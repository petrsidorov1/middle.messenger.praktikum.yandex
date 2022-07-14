export function elementsMultiplier(fn, options, ...parameters) {
  const result = parameters
    .map((parameter, index) => fn(parameter, options.options[index]))
    .join("");
  return result;
}
