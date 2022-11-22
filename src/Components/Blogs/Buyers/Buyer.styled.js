import styled from "@emotion/styled";

//DivOneCon
export const DivOneCon = styled.div`
  width: 100%;
  height: fit-content;
`;

export const DivOneInnerCon = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
`;

export const DivOneInnerConLeft = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 40px;
  margin-bottom: 40px;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const DivOneInnerConRight = styled.div`
  width: 300px;
  margin: auto;
  transform: skew(-15deg);
  height: 300px;
  border-radius: 10px;
  display: flex;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const DivTwoCon = styled.div`
  width: 100%;
  height: fit-content;
  margin: 60px 0px;
`;

export const DivTwoInnerCon = styled.div`
  width: 100%;
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
`;

export const DivTwoInnerConLeft = styled.div`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  justify-content: space-around;
  margin-bottom: 40px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const DivTwoInnerConRight = styled.div`
  width: calc(100% - 300px);
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const DivThreeCon = styled.div`
  width: 100%;
  background: #eff6e9;
`;

export const DivThreeInnerCon = styled.div`
  width: 100%;
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: Space-between;
`;

export const DivThreeInnerConLeft = styled.div`
  width: 80%;
  height: fit-content;
  margin: 140px 0px;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const DivThreeInnerConRight = styled.div`
  width: 250px;
  height: 150px;
  margin: 140px 0px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const DivFourCon = styled.div`
  width: 100%;
  margin-top: 100px;
`;

export const DivFourInnerCon = styled.div`
  width: 80%;
  margin: 40px auto;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const DivRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 1367px) {
    flex-direction: column;
    width: 80%;
    margin: auto;
  }
`;

export const Left = styled.div`
  width: 30%;
  margin: auto;
  @media (max-width: 1367px) {
    margin: 20px auto;
    width: fit-content;
    -webkit-box-ordinal-group: 1;
    -moz-box-ordinal-group: 1;
    -ms-flex-order: 1;
    -webkit-order: 1;
    order: 1;
  }
`;

export const Right = styled.div`
  width: 50%;
  margin: auto;
  @media (max-width: 1367px) {
    width: 100%;
    margin: 20px auto;
    -webkit-box-ordinal-group: 2;
    -moz-box-ordinal-group: 2;
    -ms-flex-order: 2;
    -webkit-order: 2;
    order: 2;
  }
`;

export const DivLeft = styled.div`
  margin: 30px auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1367px) {
    flex-direction: column;
    width: 80%;
    margin: auto;
  }
`;

export const ImageCon = styled.div`
  height: 300px;
`;
