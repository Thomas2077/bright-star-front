export type TgSetting = {
  category1: number,
  category2: number,
  category3: number,

  value1?: String,
  value2?: String,
  value3?: String,
  value4?: String,
  value5?: String,
}
export type SettingParam = {
  category1?: string,
  category2?: string,
  category3?: string
}

export type EmployeeQueryCommand = {
  companyId?:string,
  workerName?:string,
  jobCategoryId?:string,
  onDuty?:string,
  syainId?:string,

}
export type EmployeePreviewInfoVO = {
  workerId:number,
  companyName:string,
  workerName:string,
  genderStr:string,
  jobCategoryId:number,
  jobCategory:string,
  onBoardDate: string,
  offBoardDate:string,

}