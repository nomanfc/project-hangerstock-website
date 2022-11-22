import styled from "@emotion/styled";

export const Navs = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
`;

export const navsp = styled.p`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

//Footer

export const FooterCon = styled.div`
  width: 100%;
  height: 450px;
  @media (max-width: 1200px) {
    height: 350px;
  }

  @media (max-width: 750px) {
    height: 550px;
  }
`;
export const FooterLinks = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media (max-width: 1200px) {
    width: 75%;
    padding-bottom: 20px;
    margin: auto;
  }

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const FootCon = styled.div`
  width: 85%;
  height: 50%;
  margin: auto;
  border-bottom: 1px solid rgba(68, 68, 68, 0.08);
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    width: 75%;
    height: 100%;
    border-bottom: none;
    flex-direction: column;
  }
`;

export const FootOneLeft = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    width: 100%;
    margin-bottom: 50px;
    height: fit-content;
  }
`;

export const FootOneRight = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    width: 100%;
    height: fit-content;
  }
`;

export const Parts = styled.div`
  width: fit-content;
  height: 100%;
  @media (max-width: 700px) {
    width: 50%;
    height: 100%;
  }
`;

export const Text = styled.div`
  font-size: 14px;
  font-weight: 600;

  @media (max-width: 750px) {
    font-size: 10px;
    margin-top: 20px;
  }
`;
