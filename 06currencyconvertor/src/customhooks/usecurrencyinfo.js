import { useState, useCallBack, useEffect } from "react";

function useCurrencyinfo(currency) {
  let [data, setdata] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((response) => response.json)
      .then((response) => setdata(response[currency]));
  }, [currency]);
  console.log(data);
  return data;
}
export default useCurrencyinfo;
