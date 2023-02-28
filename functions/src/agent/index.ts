import axios, { type AxiosResponse } from "axios";
import { FixtureRoundsRequestOptions } from "../models/interfaces/FixtureRoundsRequestOptions";
import { BaseFixtureResults } from "../models/interfaces/Fixtures";
import { BaseFixturesOptions } from
  "../models/interfaces/FixturesRequestOptions";
import { Paths } from "./paths";
axios.defaults.baseURL = `https://${process.env.RAPIDAPI_HOST}/v3`;
axios.defaults.headers.common[ "X-RapidAPI-Key" ] = process.env.RAPIDAPI_API_KEY;
axios.defaults.headers.common[ "X-RapidAPI-Host" ] = process.env.RAPIDAPI_HOST;

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
  get: <T>(url: string, options: Record<PropertyKey, unknown>) =>
    axios.get<T>(url, { params: options }).then(responseBody),
  post: <T>(url: string, body: unknown) =>
    axios.post<T>(url, body).then(responseBody),
  put: <T>(url: string, body: unknown) => axios.put<T>(url, body)
    .then(responseBody),
  del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

export const Matches = {
  list: (options: BaseFixturesOptions) =>
    requests
      .get<BaseFixtureResults<BaseFixturesOptions>>("/fixtures", options),
  rounds: (options: FixtureRoundsRequestOptions) =>
    requests.get<
      BaseFixtureResults<
        FixtureRoundsRequestOptions
      >
    >(Paths.FIXTURES_ROUNDS, options),
  details: (id: string) =>
    requests.get<BaseFixtureResults<BaseFixturesOptions>>(
      "/fixtures/",
      { id }
    ),
};
