import { ConsumerQueryCommand, ConsumerType, ConsumerWithWorker } from "../types/consumer";
import { toURLParam } from "../utils/utils";
import request from "../utils/request";

export function getConsumer(command?: ConsumerQueryCommand) {
  const query = toURLParam(command).toString();
  const result = request.get<any, ConsumerWithWorker[]>(`/v1/consumer-manage?${query}`);
  return result;
}