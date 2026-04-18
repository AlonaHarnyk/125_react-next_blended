interface Convert {
  amount: number;
  currency: "USD" | " EUR" | "UAH";
}

function convertCurrency({ amount, currency }: Convert): void {
  console.log(`Converting ${amount} to ${currency}`);
}
