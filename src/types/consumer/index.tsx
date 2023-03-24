import { extend } from "dayjs";
import { atom, RecoilState } from "recoil";

export type ConsumerQueryCommand = {
  consumerName: any,
  consumerAddress?: string
}

export type ConsumerType = {
  torihikiId: number
  torihikiNameAll: string,
  torihikiNameRyaku: string,
  yuubin: string,
  jyusyo1: string,
  jyusyo2: string,
  tel: string,
  fax: string,
  url: string,
  bikou: string,
  seikyusyoKubun1: number,
  seikyusyoKubun2: number,
  seikyusyoKubun3: number,
  seikyusyoKubun4: number,
  seikyusyoKubun5: number,
  seikyusyoKubun6: number,
  seikyusyoKubun7: string,
  seikyusyoKubun8: string,
  seikyusyoKubun9: string,
  seikyusyoKubun10: string,
  seikyusyoKubun11: string,
  honsya: number,
  honsyaKouza: number,
  kinyukikanCode: string,
  kinyukikanName: string,
  sitenCode: string,
  sitenName: string,
  kouzaKind: number,
  kouzaNum: string,
  meigiName: string,
  tourokubi: string,
  kousinnbi: string,
}

export type TorihikisakiTantou = {
  tantouId : number,
  firstName: string,
  lastName: string,
  syozoku: string,

  // 役職: 部長など
  yakusyoku: string,
  mail: string,
  tel: string,
  bikou: string,

}
export type  ConsumerWithWorker = {
  consumer: ConsumerType,
  consumerTantouList: TorihikisakiTantou[]
}

export type TantouList = {
  list: TorihikisakiTantou[]
}
const init=()=>{
  const res : TantouList = {
    list:[],
  }
  return res
}
export const tantouListState: RecoilState<TantouList> = atom({
  default: init(),
  key: 'parm',
})
