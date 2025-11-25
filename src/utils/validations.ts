export function isEmail(v?: string) {
  if (!v) return false;
  return /^\S+@\S+\.\S+$/.test(v);
}

export function isPassword(v?: string) {
  if (!v) return false;
  return v.length >= 6;
}
