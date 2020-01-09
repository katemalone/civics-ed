let apiKey = 'fc977c8b-07bd-4fad-9f55-9d8edbc1d22e'


// export const getAllStatesList = async () => {
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-API-KEY': 'apiKey',
//       'Content-Type': 'application/json'
//     }
//   }
//   const allStates = await fetch('http://openstates.org/api/v1/metadata/', options)
//   if (!allStates.ok) {
//     throw new Error('We could not set States! Sorry for the delay')
//   }
//   return allStates.json()
// }

export const getStateInfo = async (stateAbbrv) => {
  console.log("stateAbbrv", stateAbbrv)
  const options = {
    method: 'GET',
    headers: {
      'X-API-KEY': apiKey,
      'Content-Type': 'application/json'
    }
  }
  const url = `https://openstates.org/api/v1/metadata/${stateAbbrv}`;

  const stateInfo = await fetch(url, options)
  if (!stateInfo.ok) {
    throw new Error(`Could not get ${stateAbbrv} info`)
  }
  return stateInfo.json();
}
