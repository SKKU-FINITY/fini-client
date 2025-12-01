import {
  BusanGyeongnamBankLogo,
  DaeguImBankLogo,
  HanaBankLogo,
  IBKLogo,
  JeonbukGwangjuBankLogo,
  KakaoBankLogo,
  KBankLogo,
  KDBLogo,
  KookminBankLogo,
  NonghyupBankLogo,
  ShinhanJejuBankLogo,
  StandardCharteredBankLogo,
  SuhyupBankLogo,
  TossBankLogo,
  WooriBankLogo,
} from '../assets/svg';

export type BankItem = {
  id: string;
  name: string;
  logo: React.FC;
};

export const BANK_LIST: BankItem[] = [
  { id: '경남은행', name: '경남은행', logo: BusanGyeongnamBankLogo },
  { id: '광주은행', name: '광주은행', logo: JeonbukGwangjuBankLogo },
  { id: '국민은행', name: 'KB국민은행', logo: KookminBankLogo },
  { id: '중소기업은행', name: '기업은행', logo: IBKLogo },
  { id: '농협은행주식회사', name: '농협은행', logo: NonghyupBankLogo },
  { id: '부산은행', name: '부산은행', logo: BusanGyeongnamBankLogo },
  { id: '수협은행', name: '수협은행', logo: SuhyupBankLogo },
  { id: '신한은행', name: '신한은행', logo: ShinhanJejuBankLogo },
  { id: '아이엠뱅크', name: '아이엠은행', logo: DaeguImBankLogo },
  { id: '우리은행', name: '우리은행', logo: WooriBankLogo },
  { id: '전북은행', name: '전북은행', logo: JeonbukGwangjuBankLogo },
  {
    id: '한국스탠다드차타드은행',
    name: 'SC제일은행',
    logo: StandardCharteredBankLogo,
  },
  { id: '제주은행', name: '제주은행', logo: ShinhanJejuBankLogo },
  { id: '주식회사 카카오뱅크', name: '카카오뱅크', logo: KakaoBankLogo },
  { id: '주식회사 케이뱅크', name: '케이뱅크', logo: KBankLogo },
  { id: '토스뱅크 주식회사', name: '토스뱅크', logo: TossBankLogo },
  { id: '주식회사 하나은행', name: '하나은행', logo: HanaBankLogo },
  { id: '한국산업은행', name: '한국산업은행', logo: KDBLogo },
];
