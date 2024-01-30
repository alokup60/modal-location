export const actions = {
  inputData: async ({ request }) => {
    const data = await request.formData();
    const loanAmt = data.get("loanAmount");
    const rate = data.get("rateOfInterest");
    const tenure = data.get("tenure");

    return {
      loanAmt: loanAmt,
      rate: rate,
      tenure: tenure,
      sucess: true,
    };
  },

  calculateEmi: async ({ request }) => {
    const data = await request.formData();
    const loanAmt = data.get("loanAmount");
    const rate = data.get("rateOfInterest");
    const tenure = data.get("tenure");

    const calculateEMI = (loanAmt, interestRate, tenure) => {
      const principal = loanAmt;
      const rateOfInterest = interestRate / (12 * 100);
      const numberOfPayments = tenure * 12;

      const emi =
        (principal *
          rateOfInterest *
          Math.pow(1 + rateOfInterest, numberOfPayments)) /
        (Math.pow(1 + rateOfInterest, numberOfPayments) - 1);
      return emi;
    };
    let newEmi = calculateEMI(loanAmt, rate, tenure / 12).toFixed(2);

    let totalAmt = (newEmi * tenure).toFixed(2);
    let totalInterest = (totalAmt - loanAmt).toFixed(2);

    return {
      loanAmt: loanAmt,
      rate: rate,
      tenure: tenure,
      newEmi,
      totalAmt,
      totalInterest,
      success: true,
    };
  },
};
