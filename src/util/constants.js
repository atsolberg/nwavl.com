// Used in console logging
export const css = {
  fwb: "font-weight: bold;",
  fwn: "font-weight: normal;",

  black: "color: #777777;",
  gray: "color: #9e9e9e;",
  white: "color: #ffffff",
  blue: "color: #03a9f4;",
  green: "color: #4caf50;",
  red: "color: #f20404;",
  orange: "color: #ff8000;",
};

// Used in console logging
export const styles = {
  normal: `${css.fwn}${css.black}`,
  strong: `${css.fwb}${css.black}`,
  label: `${css.fwb}${css.gray}`,
  value: `${css.fwn}${css.blue}`,
  success: `${css.fwn}${css.green}`,
  error: `${css.fwn}${css.red}`,
  orange: `${css.fwn}${css.orange}`,
};

export const key_codes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  home: 36,
  end: 35,
  n: 78,
  p: 80,
};
key_codes.radio = {
  prev: [key_codes.left, key_codes.up],
  next: [key_codes.right, key_codes.down],
};
key_codes.arrows = [
  key_codes.left,
  key_codes.up,
  key_codes.right,
  key_codes.down,
];
