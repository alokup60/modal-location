import { seoColl } from "$lib/db/database.js";

export async function load() {
  let seo = await seoColl.findOne({ name: "anshu" });
  let seoData = JSON.stringify(seo.newdata);

  let frequencies = [
    { key: "Quarterly", value: 3 },
    { key: "HalfYearly", value: 6 },
    { key: "Annually", value: 1 },
    { key: "Biannual", value: 2 },
    { key: "Lump sum", value: 1 },
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

  let allYear = JSON.stringify(generateYears());

  return {
    seoData,
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
    const month = parseInt(data.get("month"));
    const year = data.get("year");
    let partPayment = data.get("partPayment");
    let freq = data.get("freq");
    const partMonth = parseInt(data.get("partMonth"));
    const partYear = data.get("partYear");
    console.log(partPayment, freq, partMonth, partYear);

    function calculateEMI(principal, interestRate, tenureMonths) {
      const monthlyInterestRate = interestRate / 100 / 12;
      let emi =
        (principal * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -tenureMonths));

      let monthlyChart = [];

      $: {
        monthlyChart;
      }

      let openingBalance = principal;
      // console.log(partPayment, "partpay");

      // difference b/w month & year
      let diffMonth = Math.abs(month - partMonth);
      console.log(diffMonth, "diffM");
      let diffYear = Math.abs(year - partYear);
      console.log(diffYear, "diffY");

      if ((freq = 3)) {
        // partPayment = month + 3;
        // partPayment = month / 4;
        // partPayment = 0;
        // partPayment = month + 3;
      }

      for (let i = 1; i <= tenureMonths; i++) {
        const interest = openingBalance * monthlyInterestRate;
        let principalPaid = emi - interest;
        // principalPaid += partPayment;
        let closingBalance = openingBalance - principalPaid;

        // console.log(principalPaid, "partpay");

        if (closingBalance <= 1) {
          break;
        } else if (closingBalance < emi) {
          emi = interest + closingBalance;
          closingBalance = 0;
        }

        // frequencies.map((item) => {
        // if (freq.key == "Quarterly") {
        //   partPayment = tenure / 4;
        // }
        // });
        // if (freq == "Quarterly") {
        //   let value = 3;
        //   return value;
        // }

        // } else {
        //   partPayment = 0;
        // }

        monthlyChart.push({
          month: i,
          openingBalance: Number(openingBalance).toFixed(2),
          principal: Number(principalPaid).toFixed(2),
          interest: interest.toFixed(2),
          interestRate: interestRate,
          emi: emi.toFixed(2),
          freq: Number(freq),
          partPayment: partPayment,
          closingBalance: closingBalance.toFixed(2),
        });

        openingBalance = closingBalance - partPayment;
      }

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
  addSeo: async ({ request }) => {
    const data = await request.formData();
    const seoName = data.get("seoName");
    console.log(seoName);
    let user = await seoColl.updateOne(
      {
        name: "anshu",
      },
      { $push: { newdata: seoName } }
    );
    return { success: true };
  },
};
