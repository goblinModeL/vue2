
export function resize (val) {
  let nowClientWidth = document.documentElement.clientWidth
  return val * (nowClientWidth / 1920)
}


