import request from "../utils/request";
import { EmployeePreviewInfoVO, EmployeeQueryCommand } from "../types/tgSetting";
import { toURLParam } from "../utils/utils";

export function getWorkerInfo(command?: EmployeeQueryCommand) {
  const query = toURLParam(command).toString();
  return request.get<any, EmployeePreviewInfoVO[]>(`/v1/employee-manage/preview?${query}`);
}
