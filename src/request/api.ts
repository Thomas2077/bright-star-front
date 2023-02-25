import request from "../utils/request";
export const searchWorkerApi = (id:number) => {
  return request
    .get( '/v1/employee-manage/select/' + id, {})
}


