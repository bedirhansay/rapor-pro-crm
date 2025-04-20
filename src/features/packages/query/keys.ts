export const packageQueryKeys = {
  ALL: ['packages'],
  LIST: (params?: any) => ['packages', params],
  SINGLE: (id: string) => ['packages', id],
}
