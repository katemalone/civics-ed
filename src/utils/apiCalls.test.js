import { getStateInfo, getStateReps   } from './apiCalls';


describe('getStateInfo', () => {
  let mockStateInfo = {
    id: "al",
    name: "Alabama",
    abbreviation: "al",
    legislature_name: "Alabama Legislature",
    legislature_url: "http://www.legislature.state.al.us/"
  };
  let stateAbbrv = 'co';
  let apiKey = 'fc977c8b-07bd-4fad-9f55-9d8edbc1d22e';



  let mockOptions = {
    method: 'GET',
    headers: {
      'X-API-KEY': apiKey,
      'Content-Type': 'application/json'
    }
  };

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockStateInfo)
        });
      });
    });

    it('should call fetch with the correct url', () => {
      getStateInfo(stateAbbrv);

      expect(window.fetch).toHaveBeenCalledWith(`https://openstates.org/api/v1/metadata/${stateAbbrv}`, mockOptions);
    });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getStateInfo(stateAbbrv)).rejects.toEqual(Error(`Could not get ${stateAbbrv} info`));
  });
});



describe('getStateReps', () => {
  let mockRepInfo =
    [{
      "id": "AKL000016",
      "leg_id": "AKL000016",
      "all_ids": ["AKL000016", "AKL000089", "AKL000165"],
      "full_name": "Bert Stedman",
      "first_name": "Bert",
      "last_name": "Stedman",
      "suffix": "",
      "photo_url": "http://akleg.gov/images/legislators/smn.jpg"
    }];
  let stateAbbrv = 'co';
  let apiKey = 'fc977c8b-07bd-4fad-9f55-9d8edbc1d22e';


  let mockOptions = {
    method: 'GET',
    headers: {
      'X-API-KEY': apiKey,
      'Content-Type': 'application/json'
    }
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockRepInfo)
      });
    });
  });

  it('should call fetch with the correct url', () => {
    getStateReps(stateAbbrv);

    expect(window.fetch).toHaveBeenCalledWith(`https://openstates.org/api/v1/legislators/?state=${stateAbbrv}`, mockOptions);
  });

  it('should return an error if the response is not okay', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });

    expect(getStateReps(stateAbbrv)).rejects.toEqual(Error(`Could not get ${stateAbbrv} reps info`));
  });
});


