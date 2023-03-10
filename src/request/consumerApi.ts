import { ConsumerQueryCommand, ConsumerWithWorker, TorihikisakiTantou } from "../types/consumer";
import { toURLParam } from "../utils/utils";
import request from "../utils/request";

export function getConsumer(command: ConsumerQueryCommand) {
  const query = toURLParam(command).toString();
  return  request.get<any, ConsumerWithWorker[]>(`/v1/consumer-manage?${query}`);
}

export function getTantou(consumerId: number) {
  return request.get<any, TorihikisakiTantou[]>(`/v1/consumer-manage/tantou/${consumerId}`);
}