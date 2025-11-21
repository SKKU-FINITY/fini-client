export const formatLimit = (limit: string) => {
  if (limit === '제한 없음') return limit;
  return `${limit}원`;
};

export const formatNumber = (num: number | null | undefined) => {
  if (num === null || num === undefined) return '-';
  if (isNaN(Number(num))) return '-';
  return Number(num).toLocaleString();
};

export const formatDiffMoney = (num: number | null | undefined) => {
  if (num === null || num === undefined) return '-';
  const formatted = formatNumber(num);
  if (formatted === '-') return '-';
  return num > 0 ? `+${formatted}원` : `${formatted}원`;
};

export const getDiffText = (num: number, suffix = '') => {
  if (num > 0) return `+${num}${suffix}`;
  return `${num}${suffix}`;
};

export const getDiffClassName = (
  num: number,
  styles: { positive: string; negative: string; zero: string },
) => {
  if (num > 0) return styles.positive;
  if (num < 0) return styles.negative;
  return styles.zero;
};
