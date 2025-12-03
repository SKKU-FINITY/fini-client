import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AxiosError } from 'axios';
import { signup } from '@shared/api/auth';
import { SignUpStep } from '@shared/constants/signup-step';
import Title from '@shared/components/title/title';
import Input from '@shared/components/input/input';
import Button from '@shared/components/button/button';
import * as styles from './signup-page.css';

const SignupPage = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState<SignUpStep>(SignUpStep.USERNAME);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [email, setEmail] = useState('');

  const handleNext = () => {
    if (step === SignUpStep.USERNAME && username.trim()) {
      setStep(SignUpStep.PASSWORD);
    } else if (
      step === SignUpStep.PASSWORD &&
      password.trim() &&
      passwordCheck.trim() &&
      password === passwordCheck
    ) {
      setStep(SignUpStep.EMAIL);
    }
  };

  const handleSignup = async () => {
    try {
      await signup(username, password, email);
      alert(`${username}님 반갑습니다! 회원가입에 성공했어요.`);
      navigate('/login');
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      alert(err.response?.data?.message || '회원가입에 실패했어요.');
    }
  };

  return (
    <div className={styles.container}>
      <img src='/fini-logo.png' alt='FINI Logo' className={styles.logoImg} />
      <Title>회원가입</Title>

      {/* 아이디 입력 단계 */}
      {step === SignUpStep.USERNAME && (
        <>
          <Input
            label='아이디'
            type='text'
            placeholder='아이디를 입력해주세요 (8~20자, 대소문자/숫자만 가능)'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          {username.trim().length > 20 && (
            <p className={styles.errorMsg}>최대 길이는 20자 이하로 입력해주세요.</p>
          )}

          <Button
            onClick={handleNext}
            disabled={
              username.trim().length < 8 ||
              username.trim().length > 20 ||
              !/^[a-zA-Z0-9]+$/.test(username)
            }
          >
            다음
          </Button>
        </>
      )}

      {/* 비밀번호 입력 단계 */}
      {step === SignUpStep.PASSWORD && (
        <>
          <Input
            label='비밀번호'
            type='password'
            placeholder='비밀번호를 입력해주세요'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showIcon
          />
          <Input
            type='password'
            placeholder='비밀번호 확인'
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            showIcon
          />

          {(password.trim().length > 20 || passwordCheck.trim().length > 20) && (
            <p className={styles.errorMsg}>최대 길이는 20자 이하로 입력해주세요.</p>
          )}
          {password !== passwordCheck && (
            <p className={styles.errorMsg}>비밀번호가 일치하지 않아요.</p>
          )}

          <Button
            onClick={handleNext}
            disabled={
              password.length < 8 ||
              password.length > 20 ||
              !/^[a-zA-Z0-9!@#$%^&*()_\-+=\[\]{}|;:',.<>\/?]+$/.test(password) ||
              password !== passwordCheck
            }
          >
            다음
          </Button>
        </>
      )}

      {/* 이메일 입력 단계 */}
      {step === SignUpStep.EMAIL && (
        <>
          <Input
            label='이메일'
            type='text'
            placeholder='이메일을 입력해주세요'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {email.trim() !== '' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && (
            <p className={styles.errorMsg}>이메일 형식이 올바르지 않아요.</p>
          )}

          <Button onClick={handleSignup} disabled={!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)}>
            회원가입 하기
          </Button>
        </>
      )}

      <div className={styles.moveToLogin}>
        <p className={styles.memberText}>이미 회원이신가요?</p>
        <Button variant='secondary' onClick={() => navigate('/login')}>
          로그인
        </Button>
      </div>
    </div>
  );
};

export default SignupPage;
