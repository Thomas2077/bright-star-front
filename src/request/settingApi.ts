import { settingParam } from "../types/tgSetting";
import request from "../utils/request";


export async function getCompanyName (params? : settingParam) {
  const queryString = new URLSearchParams(params).toString();
  return request.get(`/v1/settings/companyName`, {})
}
