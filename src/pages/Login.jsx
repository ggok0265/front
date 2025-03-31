import logo from '../assets/logo.png';
<<<<<<< HEAD
import './Login.css';
=======
>>>>>>> 6bc8a7b987df16a0f1db7876ba9e33c82a101dab
import googleLogin from '../assets/google-login.png';
import kakaoLogin from '../assets/kakao-login.png';
import bg from '../assets/bg.png';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${bg});
  background-size: 80%;
  background-position: center;
  background-repeat: no-repeat;
  color: #6b6b6b;
  font-size: 1rem; 
  text-align: center;
`

const Logo = styled.img`
  width: 18.75rem; 
  transform: translateY(-2rem);
  z-index: 1;
`

const P1 = styled.p`
  margin: 0.3rem 0; 
  font-size: 1.875rem; 
  font-weight: bold;
  margin-top: -1rem !important;
`

const P2 = styled.p`
  margin-bottom: 2rem !important;
  margin-top: -0.5rem !important;
`

const LoginButton = styled.img`
  width: 12.5rem; /* 200px */
  margin-bottom: 0.8rem;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  &:hover{
    transform: translateY(-1px);
    cursor: pointer;
  }
`


const Login = () => {
  return (
    <Wrapper>
      <Logo src={logo} alt='logo' />
      <P1>Welcome to nowSKHU</P1>
      <P2>Please Login</P2> 
      <LoginButton src={googleLogin} alt='googleLogin' />
      <LoginButton src={kakaoLogin} alt='kakaoLogin' />
    </Wrapper>
  );
};

export default Login;
