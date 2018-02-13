// get profile info from local storage
const getProfileInfo = () => {
  try {
    const data = window.localStorage.getItem('eventioSession')
    const dataAsJson = JSON.parse(data)
    return dataAsJson
  } catch (error) {
    return null
  }
}
// set profile info into local storage
const setProfileInfo = userInfoAsString => {
  window.localStorage.setItem('eventioSession', userInfoAsString)
}
const fieldsAreValid = (fields, fieldTypes = {}) => {
  let valid = { 'valid': true, field: '' }
  let fieldValue
  let fieldType

  for (let field in fields) {
    fieldValue = fields[field]
    fieldType = fieldTypes[field] ? fieldTypes[field] : null
    // field is empty
    if (fieldValue === '') {
      valid = { 'valid': false, 'field': field }
      break
    } else if (fieldType === 'int') { // validate int field type
      if (isNaN(parseInt(fieldValue))) {
        valid = { 'valid': false, 'field': field }
        break
      }
    }
  }
  return valid
}

const utils = {
  getProfileInfo,
  setProfileInfo,
  fieldsAreValid
}

export default utils
