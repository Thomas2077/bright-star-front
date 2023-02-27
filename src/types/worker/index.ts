export type SyainMainDTO = {
  firstNameKanji: string
}

export type SyainRirekiDTO = {
  kaisibi: string,
}
export type EmployeeSaveCommand ={
  syainMainDTO : SyainMainDTO
  syainRirekiDTOList : SyainRirekiDTO[]
}
