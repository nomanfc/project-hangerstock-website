import styled from "@emotion/styled";

//small Small Business
export const DivFourCon = styled.div`
  width: 100%;
  margin-top: 30px;
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

//How it work
export const DivOne = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 100px;
  margin-top: 30px;
`;

export const Title2 = styled.div`
  text-align: center;
  font-size: 40px;
  width: 70%;
  margin: auto;
  color: #599f22;
  font-weight: 700;
  @media (max-width: 1200px) {
    width: 95%;
  }
`;

export const Title1 = styled.div`
  text-align: center;
  font-size: 14px;
  width: 100%;
  margin: 10px auto;
  color: #599f22;
  font-weight: 700;
  color: #444444;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const DivThreeCon = styled.div`
  width: 60%;
  margin: 50px auto;
  @media (max-width: 1200px) {
    width: 95%;
  }
`;

//Div Two Welcome
export const DivOneWel = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 100px;
  margin-top: 30px;
  padding: 50px;
  background: #599f22;
`;

export const ImageCon1 = styled.div`
  max-width: 600px;
  width: fit-content;
  margin: 30px auto;
  @media (max-width: 1200px) {
    width: 95%;
    margin-bottom: 50px;
  }
`;

export const TitleCon2 = styled.div`
  font-size: 40px;
  width: 70%;
  text-align: center;
  margin: auto;
  font-weight: 700;
  @media (max-width: 1200px) {
    width: 95%;
  }
`;

//Channel

export const DivCon = styled.div`
  width: 100%;
  margin-bottom: 100px;
`;

export const Container = styled.div`
  width: 300px;
  height: 300px;
  padding: 10px;
  margin: 10px auto;
  border: 1px solid rgba(196, 196, 196, 0.48);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1200px) {
    width: 95%;
  }
`;

//solutoiuon business of
export const DivConSeller = styled.div`
  width: 100%;
  margin-bottom: 100px;
  background: #f6f7fb;
  padding: 20px;
`;

export const DivConInnerSeller = styled.div`
  width: 85%;
  margin-bottom: 100px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1366px) {
    flex-wrap: wrap;
    width: 95%;
`;

export const CardOneSell = styled.div`
  max-width: 400px;
  height: 250px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
  padding: 15px;
  border-radius: 15px;
  @media (max-width: 1200px) {
    width: 95%;
    margin: 15px auto;
  }
`;
