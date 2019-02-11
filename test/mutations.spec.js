import { mutations } from '~/store/mutations'

const { increment } = mutations

describe('test all mutations', () => {
  it('INCREMENT', () => {
    // mock state
    const state = { counter: 0 }
    // apply mutation
    increment(state)
    // assert result
    expect(state.counter).toStrictEqual(1)
  })
})
