export const padId = (id) => (id ? String(id).padStart(3, '0') : '')

export const capitalizeFirst = (str) =>
  str ? str.replace(/\b\w/g, (c) => c.toUpperCase()) : ''

export const capitalizeAll = (str) =>
  str ? str.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase()) : ''

export const replaceAndCapitalizeAll = (str, search, replace) =>
  str ? capitalizeAll(str.replaceAll(search, replace)) : ''
