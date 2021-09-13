export const breakpoints = {
  ms: 480,
  ml: 600,
  ts: 720,
  tl: 960,
  ls: 1024,
  lxl: 1366,
  ds: 1400,
  dm: 1500,
  dl: 1800,
  dxl: 1920,
}

export const mediaQueries = (key: keyof typeof breakpoints) => {
  return (style: TemplateStringsArray | String) => `@media (min-width: ${breakpoints[key]}px) { ${style} }`
}