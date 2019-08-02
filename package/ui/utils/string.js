export function humpToLink(string) {
  if (typeof string !== 'string') {
    throw new Error('The argument must be string.');
  }
  return string.replace(/([A-Z])/g, function(a, b, c) {
    return '-' + b.toLowerCase();
  });
}
