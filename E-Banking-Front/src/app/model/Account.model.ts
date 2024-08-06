

export interface AccountDetails{
   accountId: String
   balance: number
   currentPage: number
   totalPages: number
   pageSize: number
   accountOperationDTOS: AccountOperation[]

}



export interface AccountOperation {
  id: number
  operationDate: Date
  amount: number
  type: String
  description: String
}
