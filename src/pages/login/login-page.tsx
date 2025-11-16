import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import * as styles from './login-page.css';
import { AxiosError } from 'axios';
import { login } from '../../shared/api/auth';
import Title from '../../shared/components/title/title';
import Input from '../../shared/components/input/input';
import Button from '../../shared/components/button/button';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await login(username, password);

      if (!res.isSuccess) {
        alert(res.message || '로그인에 실패했습니다.');
        return;
      }

      const token = res.result.accessToken;
      localStorage.setItem('accessToken', token);
      navigate('/');
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      alert(err.response?.data?.message || '로그인 중 에러가 발생했습니다.');
    }
  };

  return (
    <div className={styles.container}>
      <Title>로그인</Title>
      <Input
        type='text'
        placeholder='아이디'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type='password'
        placeholder='비밀번호'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin} disabled={!username || !password}>
        로그인
      </Button>
      <Button variant='secondary' onClick={() => navigate('/signup')}>
        회원가입
      </Button>
    </div>
  );
};

export default Login;
