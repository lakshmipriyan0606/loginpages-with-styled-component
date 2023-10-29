import React from 'react';
import styled from 'styled-components';
import img from "../Img/signin.png"

const Main = styled.div`
  flex-direction: column;
  height: 80vh;
  background: rgba(255, 255, 255, 0.19);
  backdrop-filter: blur(8.5px);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 10px;
  color: #00A9FF;
  @media (max-width:450px) {
    width:90vw;
  }
  @media (min-width:450px)and (max-width:1240px) {
    width:60vw;
    height:70vh;
  }
  @media (min-width:1240px) {
    width:30vw;
    height:60vh;
  }
`;

const Header=styled.h1`
text-align:center;
margin:3rem 02rem 0;
letter-spacing: 0.4rem;
padding-top:20px;
color : white ;  

`
const Label=styled.p`
font-size:20px;
margin-top : 19px ; 
color: white
`

const Inputconatiner=styled.div`
display:flex;
flex-direction:column;
padding:20px;
height:30%;
width:100%;
gap:10px;
justify-content:center;
`

const LoginInput = styled.input`
font-size :20px;
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
backdrop-filter: blur(8.5px);
border-radius: 10px;
width: 100%;
height: 3rem;
padding: 1rem;
border: none;
outline: none;
`

const Tick=styled.div`

display:flex; 
flex-direction:column-reverse;
@media (min-width:500px) {
  display:flex; 
  flex-direction:row;
justify-content:space-between;
}
margin-top:20px;
gap:10px;
padding:20px;
`
const Box=styled.p`
cursor:pointer;
font-size:16px;
display:flex;
gap:5px;
`
const B=styled.p`
cursor:pointer;
font-size:16px;
display:flex;
gap:5px;
padding-left:20px;
`
const Span=styled.span`
cursor:pointer;
font-size:18px;
color:#00A9FF;


`
const Underline=styled.span`
font-size:16px;
color:#B6FFFA;
text-decoration:underline;
`
const Register=styled.p`
cursor:pointer;
font-size:14px;
margin-top:20px;
text-align:center;

`
const Button=styled.button`
padding:10px;
margin-left:20%;
margin-top:30px;
background: rgba(255, 255, 255, 0.15);
backdrop-filter: blur(8.5px);
border:none;
outline:none;
width:60%;
cursor:pointer;
transition: all 0.7s;
border-radius : 20px ;
font-size : 20px ; 
&:hover
{background:#00A9FF;color:white}
`
const Container =styled.div`
height:100vh;
width:100%;
display:flex;
flex-direction:column;
gap:20px;
padding:10px;
align-items:center;
overflow-x:hidden;

@media (min-width:450px) {
  flex-direction:row;
}
@media (min-width:1240px) {
  justify-content:space-evenly;
}

`
const Image=styled.img`
@media (min-width:450px)and (max-width:1000px) {
  flex-direction:row;
  width:350px;
  height:350px;
  object-fit : cover;
  
}
@media (min-width:1000px) {
  flex-direction:row;
  width:500px;
  height:400px;
}
margin-top:10px;
width:300px;

`
const Login = () => {
  return <Container>
    <Image src={img}></Image>
    <Main>
    <Header>LOGIN</Header>
    <Inputconatiner>
    <Label>Login Id</Label>
    <LoginInput type="text" placeholder="Enter Login Id"/>
    <Label>Password</Label>
    <LoginInput type="password" placeholder="Enter password"/>
    </Inputconatiner>
    <Tick>
    <Box><input type='checkbox'/>Remember me</Box>
     <Span>Change Password</Span>
    </Tick>
    <B><input type='checkbox'/>Agree to <Underline>Terms & Conditions</Underline></B>
    <Button>Login</Button>
    <Register>Don't have an account <Underline>Register Here</Underline></Register>
  </Main>
  </Container>;
};

export default Login;
