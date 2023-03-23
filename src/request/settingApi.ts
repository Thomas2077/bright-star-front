import { SettingParam, TgSetting } from "../types/tgSetting";
import request from "../utils/request";


export async function getCompanyName(params?: SettingParam) {
  const queryString = new URLSearchParams(params).toString();
  const settingList = await request.get<any, TgSetting[]>(`/v1/settings?${queryString}`, {})
  return settingList.filter(setting => setting.category3 == 1);
}

export async function getJobCategory(params?: SettingParam) {
  const queryString = new URLSearchParams(params).toString();
  return request.get<any, TgSetting[]>(`/v1/settings?${queryString}`, {});
}




