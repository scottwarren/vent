const vent = require('./vent')

// This checks if an event has fired
let hasMyTestRun = false

describe('vent', () => {
  beforeEach(() => {
    const testArgs = []

    const exampleEvent = vent.on('test', function() {
      hasMyTestRun = true
    })

    const exampleEventOne = vent.on('anotherTest', function(some, arg, uments) {
      testArgs[0] = some
      testArgs[1] = arg
      testArgs[2] = uments
    })
  })
  test('that no events are bound', () => {
    expect(vent.hasEvent('test')).toEqual(false)
  })

  test('that an error is thrown', () => {
    expect(() => vent.trigger('test')).toThrowError(Error)
  })

  test('that events are triggered', () => {
    // run this manually so we can see if the hasMyTestRun value has changed
    vent.trigger('test')

    vent.trigger('anotherTest', 'some', 'arg', 'uments aaa')

    // assert some arg is passed and is the expected value
    expect(testArgs[0]).toEqual('some')
    expect(testArgs[1]).toEqual('arg')
    expect(testArgs[2]).toEqual('uments aaa')
  })

  test('Check that no events are bound', () => {
    vent.off(exampleEvent)

    expect(vent.hasEvent('test')).toEqual(false)
  })

  test('that the bound event is run', () => {
    expect(hasMyTestRun).toEqual(true)

    expect(vent.hasEvent('test')).toEqual(true)
  })
})
