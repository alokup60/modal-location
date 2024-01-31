export async function load() {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let years = [];
  const generateYears = () => {
    let curr = new Date().getFullYear();
    // let min = curr - 20;
    let max = curr + 40;

    for (let i = curr; i <= max; i++) {
      years = [...years, i];
    }

    return years;
  };
  let allYear = JSON.stringify(generateYears());

  return { allMonths: JSON.stringify(months), allYear };
}

export const actions = {
  inputData: async ({ request }) => {
    const data = await request.formData();
    const loanAmt = data.get("loanAmount");
    const rate = data.get("rateOfInterest");
    const tenure = data.get("tenure");
    // const month = data.get("month");
    // const year = data.get("year");

    return {
      loanAmt: loanAmt,
      rate: rate,
      tenure: tenure,
      //   month: month,
      //   year: year,
      sucess: true,
    };
  },

  calculateEmi: async ({ request }) => {
    const data = await request.formData();
    const loanAmt = data.get("loanAmount");
    const rate = data.get("rateOfInterest");
    const tenure = data.get("tenure");
    function calculateEMI(principal, interestRate, tenureMonths) {
      const monthlyInterestRate = interestRate / 100 / 12;
      const emi =
        (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -tenureMonths));

      let monthlyChart = [];

      let openingBalance = principal;

      for (let i = 1; i <= tenureMonths; i++) {
        const interest = openingBalance * monthlyInterestRate;
        const principalPaid = emi - interest;
        const closingBalance = openingBalance - principalPaid;

        monthlyChart.push({
          month: i,
          openingBalance: Number(openingBalance).toFixed(2),
          principal: principalPaid.toFixed(2),
          interest: interest.toFixed(2),
          interestRate: interestRate,
          emi: emi.toFixed(2),
          closingBalance: closingBalance.toFixed(2),
        });

        openingBalance = closingBalance;
      }
      console.log(emi);

      return { monthlyChart, emi };
    }

    let newEmi = calculateEMI(loanAmt, rate, tenure);
    // console.log(newEmi);
    let monthlyEmi = newEmi.emi;

    console.log(tenure, "months");
    console.log(typeof tenure);
    // let principal = newEmi.principal;
    console.log(loanAmt, "principal");
    console.log(typeof loanAmt);
    let totalAmt = Number(monthlyEmi * tenure).toFixed(2);
    // console.log(totalAmt, "ttlAmt");
    let totalInterest = Number(totalAmt - loanAmt).toFixed(2);
    // console.log(totalInterest, "total Interest");

    return {
      loanAmt: loanAmt,
      rate: rate,
      tenure: tenure,
      newEmi,
      totalAmt,
      totalInterest,
      // totAmt: JSON.stringify(totalAmt),
      // totInt: JSON.stringify(totalInterest),
      success: true,
    };
  },
};
