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

// field is valid
const fieldIsValid = (field, value, type) => {
  let valid = { 'valid': true, [field]: false, 'message': '' }

  switch (type) {
    case 'int':
      if (isNaN(parseInt(value))) {
        valid['valid'] = false
        valid[field] = true
        valid['message'] = 'please fill in a numeric value'
      }
      break
    case 'time':
      let re = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/
      if (!value.match(re)) {
        valid['valid'] = false
        valid[field] = true
        valid['message'] = 'please fill in a time like 13:00'
      }
      break
    default:
      if (String(value).length === 0) {
        valid['valid'] = false
        valid[field] = true
        valid['message'] = 'please fill in the information'
      }
  }

  return valid
}

const fieldsAreValid = (fields, errors) => {
  let valid = true

  for (let field in fields) {
    if (String(fields[field]).length === 0 || errors[field]) {
      valid = false
      break
    }
  }
  return valid
}

const utils = {
  getProfileInfo,
  setProfileInfo,
  fieldsAreValid,
  fieldIsValid
}

export default utils
