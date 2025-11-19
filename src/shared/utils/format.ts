export const formatLimit = (limit: string) => {
  if (limit === '제한 없음') return limit;
  return `${limit}원`;
};
