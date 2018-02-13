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

const utils = {
  getProfileInfo,
  setProfileInfo
}

export default utils
