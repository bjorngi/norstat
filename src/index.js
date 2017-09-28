
import { bucketByCompany,
         sumByCompany } from './logic';

import BarAccumulatedPerCompany from './graphs/accumulatedPerCompany';

let width = window.innerWidth;
let height = window.innerHeight;

const accumulated = new BarAccumulatedPerCompany('#accumulated', height, width);

fetch("http://localhost/rofs-komplett.json").then(req => {
  return req.json();
}).then(data => {
  const byCompany = bucketByCompany(data);
  const accumulatedSumByCompany = sumByCompany(byCompany);

  renderCrap(accumulatedSumByCompany);
  window.addEventListener('resize', function(){
    renderCrap(accumulatedSumByCompany);
  });
});

function renderCrap(data) {
  width = window.innerWidth;
  height = window.innerHeight;
  console.log(width);

  accumulated.render(data, height, width);
}
