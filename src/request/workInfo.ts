import request from "../utils/request";
import { EmployeePreviewInfoVO, EmployeeQueryCommand } from "../types/tgSetting";
export  function getWorkerInfo(command?: EmployeeQueryCommand) {
  const r = command as EmployeeQueryCommand
  const queryString = new URLSearchParams(r);
  const result =  request.post<any, EmployeePreviewInfoVO[]>(`/v1/employee-manage/preview?${queryString}`, command);
  return result;
}