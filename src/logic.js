export function bucketByCompany(data) {
  let companies = {};
  data.map(entry => {
    (companies[entry.stottemottakerOrganisasjonsnummer] || (companies[entry.stottemottakerOrganisasjonsnummer] = [])).push(entry);
  });

  return Object.keys(companies).map(function(key) {
    return companies[key];
  });
}

export function sumByCompany(companyBuckets) {
  return companyBuckets.map((entries) => {
    let companySum = 0;
    for (let entry in entries) {
      companySum += entries[entry].tildeltBelop;
    }

    return {
      'stottegiverOrganisasjonsnummer': entries[0].stottegiverOrganisasjonsnummer,
      'stottemottakerNavn': entries[0].stottemottakerNavn,
      'akkumulertSum': companySum,
      'tildelinger': entries
    };
  });
}

export function getMaxAccumulatedSum(accumulatedCompany) {
  return accumulatedCompany.reduce((prev, curr) => {
    return prev.akkumulertSum > curr.akkumulertSum ? prev : curr;
  });
}
