const data = require('./data');


describe('check for function not refactored', () => {
  it('check with no parameter', () => {
    expect(data.deterministicPartitionKey()).toBe("0");
  });
  it('check with not partition key', () => {
    expect(data.deterministicPartitionKey({})).toHaveLength(128);
  });
  it('check with partition key', () => {
    expect(data.deterministicPartitionKey({
      partitionKey: 23
    })).toBe("23");
  });
});



describe('check for function refactored function', () => {
  it('check with no parameter', () => {
    expect(data.deterministicPartitionKeyRefactored()).toBe("0");
  });
  it('check with not partition key', () => {
    expect(data.deterministicPartitionKeyRefactored({})).toHaveLength(128);
  });
  it('check with partition key', () => {
    expect(data.deterministicPartitionKeyRefactored({
      partitionKey: 23
    })).toBe("23");
  });
});