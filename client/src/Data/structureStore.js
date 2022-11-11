/*Структура данных приложения */
const structureStore = {
  Continent: [
    {
      id: "key",
      continentName: "name",
      Country: [
        {
          id: "key",
          countryName: "name",
          countryShortName: "name",
          Rate: {
            id: "key",
            rateName: "name",
            rateData: [{ id: "key", rate: "data", date: "date" }],
          },
          YR_10: {
            id: "key",
            yr10Name: "name",
            yr10Data: [{ id: "key", yr10: "data", date: "date" }],
          },
          YR_2: {
            id: "key",
            yr2Name: "name",
            yr2Data: [{ id: "key", yr_2: "data", date: "date" }],
          },
          TReuters_10: {
            id: "key",
            tReuters10Name: "name",
            tReuters10Data: [{ id: "key", tr_10: "data", date: "date" }],
          },
          Stock: {
            id: "key",
            stockName: "name",
            stockData: [{ id: "key", stock: "data", date: "date" }],
          },
          Leading: {
            id: "key",
            leadingName: "name",
            Manufacturing: {
              id: "key",
              manufacturingName: "name",
              manufacturingData: [{ id: "key", manPMI: "data", date: "date" }],
            },
            Service: {
              id: "key",
              servicesName: "name",
              servicesData: [{ id: "key", serPMI: "data", date: "date" }],
            },
            Orders: {
              id: "key",
              ordersName: "name",
              dataOrders: [{ id: "key", orders: "data", date: "date" }],
            },
          },
          Coincident: {
            id: "key",
            coincidentName: "name",
            GDP: {
              id: "key",
              gdpName: "name",
              gdpData: [{ id: "key", gdp: "data", date: "date" }],
            },
            TradeBalance: {
              id: "key",
              tradeBalanceName: "name",
              tradeBalanceData: [
                { id: "key", tradeBalance: "data", date: "date" },
              ],
            },
            Employment: {
              id: "key",
              employmentName: "name",
              employmentData: [{ id: "key", employment: "data", date: "date" }],
            },
            IndustrialProduction: {
              id: "key",
              industrialProductionName: "name",
              industrialProductionData: [
                { id: "key", industrialProduction: "data", date: "date" },
              ],
            },
            RetailSales: {
              id: "key",
              retailSalesName: "name",
              retailSaleData: [{ id: "key", retailSale: "data", date: "date" }],
            },
            PersonalIncome: {
              id: "key",
              personalIncomeName: "name",
              personalIncomeData: [
                { id: "key", personalIncome: "data", date: "date" },
              ],
            },
            PersonalSpending: {
              id: "key",
              personalSpendingName: "name",
              personalSpendingData: [
                { id: "key", personalSpending: "data", date: "date" },
              ],
            },
          },
          Lagging: {
            id: "key",
            laggingName: "name",
            UnemploymentRate: {
              id: "key",
              unemploymentRateName: "name",
              unemploymentRateData: [
                { id: "key", unemploymentRate: "data", date: "date" },
              ],
            },
            InflationRate: {
              id: "key",
              inflationRateName: "name",
              inflationRateData: [
                { id: "key", inflationRate: "data", date: "date" },
              ],
            },
            ProducerPriceIndex: {
              id: "key",
              producerPriceIndexName: "name",
              producerPriceIndexData: [
                { id: "key", producerPriceIndex: "data", date: "date" },
              ],
            },
          },
        },
      ],
    },
  ],
};
