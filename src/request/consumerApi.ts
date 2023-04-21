import { ConsumerQueryCommand, ConsumerWithWorker, TorihikisakiTantou } from "../types/consumer";
import { toURLParam } from "../utils/utils";
import request from "../utils/request";

export function getConsumer(command: ConsumerQueryCommand) {
  const query = toURLParam(command).toString();
  return  request.get<any, ConsumerWithWorker[]>(`/v1/consumer-manage?${query}`);
}

export function getConsumerById(id: string | undefined) {
  if(id == undefined){
    console.log("error id exception");
  }
  return request.get<any, ConsumerWithWorker[]>(`/v1/consumer-manage/${id}`);
}


export function deleteConsumer(customerId: number) {
  const query = toURLParam({customerId}).toString();
  return  request.delete<any, ConsumerWithWorker[]>(`/v1/consumer-manage?${query}`);
}

export function getTantou(consumerId: number) {
  return request.get<any, TorihikisakiTantou[]>(`/v1/consumer-manage/tantou/${consumerId}`);
}