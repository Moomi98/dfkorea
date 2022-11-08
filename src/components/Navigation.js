import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 70px;
  background-color: black;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const HeaderLayout = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  justify-content: space-around;
  gap: 30px;
  align-items: center;
`;

const NavigationLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Text = styled.p`
  color: white;
  font-weight: bold;
`;

const UnderBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: white;
`;

const Navigation = () => {
  return (
    <Container>
      <HeaderLayout>
        <NavigationLayout>
          <Text>안녕1</Text>
          <UnderBar />
        </NavigationLayout>
        <NavigationLayout>
          <Text>안녕2</Text>
          <UnderBar />
        </NavigationLayout>
      </HeaderLayout>
    </Container>
  );
};

export default Navigation;
