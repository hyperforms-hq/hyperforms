export function merge(...sources: any[]) {
  return mergeTo({}, ...sources);
}

export function mergeTo(target: any, ...sources: any[]) {
  for (const source of sources) {
    if (!source) {
      continue;
    }
    for (const key of Object.keys(source)) {
      const val = source[key];
      if (val !== undefined && val !== null) {
        target[key] = val;
      }
    }
  }
  return target;
}
