import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
const cryptoApiHeaders = {
  "X-RapidAPI-Key": "2db4e1eb6emsh40766a5abe17b10p18a780jsne7f8e982187e",
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https";
const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coins",
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
    timePeriod: "24h",
    "tiers[0]": "1",
    orderBy: "marketCap",
    orderDirection: "desc",
    limit: "50",
    offset: "0",
  },
  headers: {},
};
