import styled from "styled-components";

const NavWrapper = styled.div`
  margin-left: 10px;
  font-size: 20px;

  & > a {
    text-decoration: none;
    color: #1e3786;
  }

  & > a.active {
    text-decoration: none;
    color: #03eaff;
  }

  & > a:hover {
    color: steelblue;
  }
`

const Header = styled.header`
  background-color: #000000;
  width: 100%;
  height: 80px;
  text-align: center;
  color: white;
`

const Body = styled.body`
  display: flex;
`

const Nav = styled.nav`
  background-color: white;
  min-height: 400px;
  width: 30%;
  color: #282c34;
  font-size: 30px;
  text-align: center;
`

const Content = styled.div`
  background-color: #282c34;
  min-height: 400px;
  width: 70%;
  color: white;
  font-size: 30px;
`

const Footer = styled.footer`
  background-color: #000000;
  width: 100%;
  height: 120px;
  text-align: center;
  color: white;
`

const Img = styled.img`
  margin: 20px 0 20px 25px;
  width: 250px;
  height: 250px;
`

const ImgWrap = styled.div`
  display: flex;
  justify-content: center;
`

const ModelWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.h2`
  text-align: center;
`

const Text = styled.p`
  padding: 10px;
`
export const S = {
    NavWrapper,
    Header,
    Body,
    Nav,
    Content,
    Footer,
    Img,
    ImgWrap,
    ModelWrap,
    Title,
    Text
}