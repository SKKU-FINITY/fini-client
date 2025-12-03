export const SignUpStep = {
  USERNAME: 'username',
  PASSWORD: 'password',
  EMAIL: 'email',
} as const;

export type SignUpStep = (typeof SignUpStep)[keyof typeof SignUpStep];
