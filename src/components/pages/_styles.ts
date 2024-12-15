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
  height: 90px;
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

// dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
// a type specimen book.
//     It has survived not only five centuries, but also the leap into electronic typesetting, remaining
// essentially unchanged.
//     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
// more recently
// with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//
//     Why do we use it?
//     It is a long established fact that a reader will be distracted by the readable content of a page when
// looking at its layout.
//     The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
// to using 'Content here,
// content here', making it look like readable English. Many desktop publishing packages and web page
// editors now use Lorem Ipsum
// as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their
// infancy. Various versions
// have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
//
// Where does it come from?
//     Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
// Latin literature from 45 BC,
//     making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
// Virginia, looked up one of the
// more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
// word in classical literature,
//     discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
// Bonorum et Malorum"
// (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
// ethics, very popular during the
// Renaissance.
//     The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.