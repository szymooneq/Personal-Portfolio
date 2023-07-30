const breakpoints = {
  smDown: 639,
  sm: 640,
  mdDown: 767,
  md: 768,
  lgDown: 1023,
  lg: 1024,
  xlDown: 1279,
  xl: 1280,
  xxlDown: 1535,
  xxl: 1536
}

export const screen = {
  smDown: `max-width ${breakpoints.smDown}px`,
  sm: `min-width ${breakpoints.sm}px`,
  mdDown: `max-width ${breakpoints.mdDown}px`,
  md: `min-width ${breakpoints.md}px`,
  lgDown: `max-width ${breakpoints.lgDown}px`,
  lg: `min-width ${breakpoints.lg}px`,
  xlDown: `max-width ${breakpoints.xlDown}px`,
  xl: `min-width ${breakpoints.xl}px`,
  xxlDown: `max-width ${breakpoints.xxlDown}px`,
  xxl: `min-width ${breakpoints.xxl}px`
}