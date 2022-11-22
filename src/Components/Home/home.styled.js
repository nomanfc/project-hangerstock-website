import styled from "@emotion/styled";

export const navs = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

//RowOneOnline
export const RowOne = styled.div`
  width: 100%;
  height: 500px;
  background: #599f22;
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: fit-content;
    padding-bottom: 30px;
  }
`;

export const RowCon = styled.div`
  width: 85%;
  height: 100%;

  margin: auto;
  display: flex;
  @media (max-width: 1366px) {
    width: 100%;
    height: 100%;
  }
`;

export const RowOneLeft = styled.div`
  width: 50%;
  height: 500px;
  background: #599f22;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: fit-content;
  }
`;

export const RlCon = styled.div`
  width: 80%;
  height: fit-content;
  margin: auto;

  background: #599f22;
  @media (max-width: 1200px) {
    width: 90%;
    height: fit-content;
  }
`;

export const RowOneRight = styled.div`
  width: 50%;
  height: 500px;
  background: #599f22;
  margin: auto;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
    margin: 40px auto;
    height: fit-content;
    display: none;
  }
`;

export const RrCon = styled.div`
  width: fit-content;
  height: fit-content;
  background: #599f22;
  display: flex;
  align-items: center;
  margin: auto;
  @media (max-width: 1200px) {
    width: 90%;
    display: none;
    height: fit-content;
  }
`;

export const RrConD1 = styled.div`
  width: 146px;
  height: 350px;
  margin: auto;
  position: relative;
  background: #599f22;
`;

export const RrConD1I1 = styled.div`
  width: 98%;
  margin: auto;
  height: 180px;
  position: absolute;
  right: 0px;
  border-radius: 8px;
`;
export const RrConD1I2 = styled.div`
  position: absolute;

  width: 91px;
  right: 0px;
  top: 195px;
  height: 91px;
  border-radius: 8px;
`;

export const RrConD2 = styled.div`
  width: 225px;
  height: 400px;
  margin: 15px;
  position: relative;
  background: #599f22;
`;

export const RrConD2I1 = styled.div`
  width: 95%;
  margin: auto;
  height: 180px;
  position: absolute;
  right: 10px;
  border-radius: 8px;
`;
export const RrConD2I2 = styled.div`
  width: 95%;
  margin: auto;
  height: 180px;
  position: absolute;
  right: 10px;
  top: 195px;
  border-radius: 8px;
`;

export const RrConD3 = styled.div`
  width: 180px;
  height: 300px;
  margin: auto;
  position: relative;
  background: #599f22;
`;

export const RrConD3I1 = styled.div`
  width: fit-content;
  margin: auto;
  height: 180px;
  position: absolute;
  left: 0px;
  border-radius: 8px;
`;

export const RrConD3I2 = styled.div`
  position: absolute;
  width: fit-content;
  left: 0px;
  top: 195px;
  height: 91px;
  border-radius: 8px;
`;

//RowTwoWel
export const RowTwo = styled.div`
  width: 100%;
  height: fit-content;
  background: #ffffff;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: fit-content;
    width: 100%;
    padding-top: 20px;
  }
`;

export const RowTwoLeft = styled.div`
  width: 50%;
  height: 750px;
  display: flex;
  align-items: center;
  margin: auto;
  @media (max-width: 1200px) {
    width: 100%;
    height: fit-content;
    display: none;
  }
`;

export const R2lCon = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  margin: auto;
  @media (max-width: 1200px) {
    width: 100%;
    display: none;
    height: fit-content;
  }
`;

export const R2lConD1 = styled.div`
  width: 390px;
  height: 620px;
  margin: auto;
  position: relative;
`;

export const R2lConD1I1 = styled.div`
  width: 300px;
  margin: auto;
  height: 320px;
  position: absolute;
  right: 0px;
  border-radius: 8px;
`;
export const R2lConD1I2 = styled.div`
  width: 250px;
  margin: auto;
  height: 280px;
  position: absolute;
  right: 0px;
  top: 335px;
  border-radius: 8px;
`;

export const R2lConD2 = styled.div`
  width: 340px;
  height: 670px;
  margin: 15px;
  position: relative;
`;

export const R2lConD2I1 = styled.div`
  width: 290px;
  margin: auto;
  height: 310px;
  position: absolute;
  left: 0px;
  border-radius: 8px;
`;
export const R2lConD2I2 = styled.div`
  width: 230px;
  margin: auto;
  height: 260px;
  position: absolute;
  left: 0px;
  top: 330px;
  border-radius: 8px;
`;

export const RowTwoRight = styled.div`
  width: 50%;
  height: 750px;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: fit-content;
  }
`;

export const R2rCon = styled.div`
  width: 95%;
  height: 90%;

  display: flex;

  flex-direction: column;
  @media (max-width: 1200px) {
    width: 90%;
    margin: auto;
    height: fit-content;
  }
`;

//Row three How it works
export const RowThree = styled.div`
  width: 100%;
  height: 660px;
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: fit-content;
    padding-bottom: 30px;
    padding-top: 20px;
  }
`;

export const RowThreeCon = styled.div`
  width: 85%;
  height: 100%;

  margin: auto;
  display: flex;
  @media (max-width: 1366px) {
    width: 95%;
    height: 100%;
    height: fit-content;
  }
`;
export const RowThreeLeft = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;

    height: fit-content;
  }
`;

export const R3lCon = styled.div`
  width: 100%;
  height: 100%;

  display: flex;

  flex-direction: column;
  @media (max-width: 1200px) {
    width: 90%;
    margin: auto 10px;
    height: fit-content;
  }
`;

export const RowThreeRight = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
    height: fit-content;
    display: none;
  }
`;

export const R3rCon = styled.div`
  width: 450px;
  height: 450px;
  display: flex;
  margin: auto;
  border-radius: 10px;
  align-items: center;
  @media (max-width: 1200px) {
    margin: auto;
  }
`;

//RowFourGarment
export const RowFour = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  align-items: center;
  background: #fafafa;
  flex-direction: column;
  padding-bottom: 30px;
  margin: 40px auto;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: fit-content;
    padding-bottom: 30px;
  }
`;

export const Cardcon = styled.div`
  width: 85%;
  height: fit-content;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: 85%;
    height: 100%;
  }
`;

export const Card = styled.div`
  width: 30%;
  height: 250px;

  border-radius: 15px;
  margin: 10px;
  display: flex;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  @media (max-width: 665px) {
    width: 100%;
  }
`;

//RowFiveCate
export const RowFive = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: fit-content;
    padding-bottom: 30px;
  }
`;

export const Cardcon5 = styled.div`
  width: 85%;
  height: fit-content;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: 85%;
    height: 100%;
  }
`;

export const Card5 = styled.div`
  width: 30%;
  height: 250px;
  border-radius: 15px;
  margin: 10px;
  display: flex;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  @media (max-width: 665px) {
    width: 100%;
  }
`;

//RowSixQuote
export const RowSix = styled.div`
  width: 80%;
  height: 400px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    height: fit-content;
    padding-bottom: 30px;
  }

  @media (max-width: 730px) {
    display: none;
  }
`;

//RowSevenBlog
export const RowSeven = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  margin: 200px auto 50px auto;
  flex-direction: column;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: fit-content;
    padding-bottom: 30px;
    margin: 50px auto 50px auto;
  }
`;

export const CardCon7 = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 1200px) {
    height: fit-content;

    width: 90%;
  }
`;

export const Card7 = styled.div`
  width: 25%;
  min-width: 300px;
  height: 570px;
  border-radius: 25px;
  margin: 10px;
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

//RowEightBlog
export const RowEight = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  margin: 40px auto 50px auto;
  flex-direction: column;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: fit-content;
    padding-bottom: 30px;
    margin: 50px auto 50px auto;
  }
`;

export const RowCon8 = styled.div`
  width: 85%;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  @media (max-width: 1366px) {
    width: 100%;
    height: 100%;
  }
`;

export const Row8Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    width: 100%;
    display: none;
    height: fit-content;
  }
`;

export const Row8Right = styled.div`
  width: 50%;
  height: 315px;
  display: flex;
  align-items: left;
  flex-direction: column;
  @media (max-width: 1200px) {
    width: 100%;
    height: fit-content;
  }
`;
