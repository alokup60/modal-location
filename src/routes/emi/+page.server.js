export async function load() {
  let frequencies = [
    "Quarterly",
    "HalfYeary",
    "Annually",
    "Biannual",
    "Lump sum",
  ];

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
  //function for generating years
  let allYear = JSON.stringify(generateYears());

  return {
    allMonths: JSON.stringify(months),
    allYear,
    frequencies: JSON.stringify(frequencies),
  };
}

export const actions = {
  calculateEmi: async ({ request }) => {
    const data = await request.formData();
    const loanAmt = data.get("loanAmount");
    const rate = data.get("rateOfInterest");
    const tenure = data.get("tenure");
    const month = data.get("month");
    const year = data.get("year");
    const partPayment = data.get("partPayment");
    const freq = data.get("freq");
    const partMonth = data.get("partMonth");
    const partYear = data.get("partYear");
    console.log(partPayment, freq, partMonth, partYear);

    // let partPayment = 0;
    function calculateEMI(principal, interestRate, tenureMonths) {
      const monthlyInterestRate = interestRate / 100 / 12;
      const emi =
        (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -tenureMonths));

      let monthlyChart = [];

      $: {
        monthlyChart;
      }

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
          partPayment,
          closingBalance: closingBalance.toFixed(2),
        });

        openingBalance = closingBalance;
      }
      // console.log(monthlyChart, "server");

      return { monthlyChart, emi };
    }

    let newEmi = calculateEMI(loanAmt, rate, tenure);
    let monthlyEmi = newEmi.emi;
    let totalAmt = Number(monthlyEmi * tenure).toFixed(2);
    let totalInterest = Number(totalAmt - loanAmt).toFixed(2);

    return {
      loanAmt: loanAmt,
      rate: rate,
      tenure: tenure,
      newEmi,
      totalAmt,
      totalInterest,
      month: month,
      year: year,
      partPayment,
      freq,
      partMonth,
      partYear,
      calculateEmi: true,
    };
  },

  // partPayment: async ({ request }) => {
  //   const data = await request.formData();
  //   const partPayment = data.get("partPayment");
  //   const freq = data.get("freq");
  //   const month = data.get("month");
  //   const year = data.get("year");
  //   console.log(partPayment, freq, month, year);

  //   // const findIndex = () => {};
  //   let partPayArr = [partPayment, freq, month, year];
  //   console.log(monthlyChart, "part");
  //   return {
  //     partPayArr,
  //   };
  // },
};
