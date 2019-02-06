import { mutations } from '~/store/mutations'

const { increment, getResponseFilm } = mutations

describe('test all mutations', () => {
  it('INCREMENT', () => {
    // mock state
    const state = { counter: 0 }
    // apply mutation
    increment(state)
    // assert result
    expect(state.counter).toStrictEqual(1)
  })

  it('getResponseFilm', () => {
    const state = { responseFilm: {} }
    const mockResponseFilm = {
      response: 'ululu'
    }
    getResponseFilm(state, mockResponseFilm)

    expect(state.responseFilm).toEqual(mockResponseFilm)
  })
})
