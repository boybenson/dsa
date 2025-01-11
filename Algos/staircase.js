function countStaircaseWays(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  let waysToPrevStep = 2;
  let waysToTwoStepsBack = 1;
  let totalWaysToCurrentStep = 0;

  for (let i = 3; i <= n; i++) {
    totalWaysToCurrentStep = waysToPrevStep + waysToTwoStepsBack;
    waysToTwoStepsBack = waysToPrevStep;
    waysToPrevStep = totalWaysToCurrentStep;
  }

  return totalWaysToCurrentStep;
}

console.log("Result", countStaircaseWays(4));
