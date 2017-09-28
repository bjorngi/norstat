import { bucketByCompany,
         sumByCompany,
         getMaxAccumulatedSum } from './logic';

import { testdata } from '../testdata/testdata';

test('companies are sorted correctly in buckets', () => {
  const buckededCompanies = bucketByCompany(testdata);
  expect(buckededCompanies.length).toBe(2);
});

test('accumulated sum is correct pr. bucket', () => {
  const buckededCompanies = bucketByCompany(testdata);
  const sumByCompanyBuckets = sumByCompany(buckededCompanies);

  expect(sumByCompanyBuckets[0].akkumulertSum).toBe(30);
  expect(sumByCompanyBuckets[1].akkumulertSum).toBe(10);
});

test('check for max sum in buckets', () => {
  const buckededCompanies = bucketByCompany(testdata);
  const sumByCompanyBuckets = sumByCompany(buckededCompanies);
  const maxAccumulated = getMaxAccumulatedSum(sumByCompanyBuckets);

  expect(maxAccumulated.akkumulertSum).toBe(30);
});
