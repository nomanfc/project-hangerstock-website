import styled from "@emotion/styled";

//shop auction page
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
  width: 160px;
  height: 350px;
  margin: auto;
  transform: skew(-35deg);
  position: relative;
  background: #599f22;
`;

export const RrConD1I1 = styled.div`
  width: 98%;
  margin: auto;
  height: 180px;
  position: absolute;
  right: 0px;
  transform: skew(35deg);
  border-radius: 8px;
`;
export const RrConD1I2 = styled.div`
  position: absolute;
  transform: skew(35deg);
  width: 91px;
  left: 20px;
  top: 150px;
  height: 91px;
  border-radius: 8px;
`;

export const RrConD2 = styled.div`
  width: 225px;
  height: 400px;
  margin: 15px;
  transform: skew(-35deg);
  position: relative;
  background: #599f22;
`;

export const RrConD2I1 = styled.div`
  width: 95%;
  margin: auto;
  height: 180px;
  position: absolute;
  transform: skew(35deg);
  right: 10px;
  border-radius: 8px;
`;
export const RrConD2I2 = styled.div`
  width: 95%;
  margin: auto;
  height: 180px;
  position: absolute;
  transform: skew(35deg);
  right: 10px;
  top: 175px;
  border-radius: 8px;
`;

export const RrConD3 = styled.div`
  width: 180px;
  height: 300px;
  margin: auto;
  position: relative;
  transform: skew(-35deg);
  background: #599f22;
`;

export const RrConD3I1 = styled.div`
  width: fit-content;
  margin: auto;
  height: 180px;
  position: absolute;
  transform: skew(35deg);
  left: 0px;
  border-radius: 8px;
`;

export const RrConD3I2 = styled.div`
  position: absolute;
  width: fit-content;
  left: 0px;
  transform: skew(35deg);
  top: 155px;
  height: 91px;
  border-radius: 8px;
`;

//all auctions
export const MainCon = styled.div`
  width: 100%;
  min-height: 1000px;
  margin: 30px auto;

  @media (max-width: 1200px) {
    height: fit-content;
  }

  @media (max-width: 700px) {
    height: fit-content;
  }
`;

export const InnerCon = styled.div`
  width: 80%;
  min-height: 1000px;
  margin: auto;
  display: flex;
  border-top: 1px solid #c4c4c4;
  padding-top: 20px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const FilterCon = styled.div`
  width: 80%;
  height: fit-content;
  margin: 10px auto;
  position: relative;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const FilterInnerCon = styled.div`
  width: 550px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  @media (max-width: 700px) {
    width: 100%;
    display: none;
  }
`;

export const SelectStyle = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const Title = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.6);
`;
export const Icons = styled.div`
  margin-left: 15px;
`;

export const PopoverRegi = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 15px;
  background: #ffffff;
  display: ${(props) => (props.isRegiTrue ? "flex" : "none")};
`;

export const PopoverCat = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background: #ffffff;
  display: ${(props) => (props.isCatTrue ? "flex" : "none")};
  border-radius: 15px;
`;

export const PopoverMarket = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background: #ffffff;
  display: ${(props) => (props.isMarketTrue ? "flex" : "none")};
  border-radius: 15px;28
`;

export const InnerConLeft = styled.div`
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const InnerConRight = styled.div`
  width: calc(100% - 225px);
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  @media (max-width: 1200px) {
    width: 95%;
    margin: auto;
  }
`;

export const CardCon = styled.div`
  width: 200px;
  height: 500px;
  border-radius: 13px;
  margin-bottom: 15px;
  margin-right: 15px;
  cursor: pointer;
  &:hover {
    border: 2px solid #599f22;
  }
  @media (max-width: 1366px) {
    width: 23%;
  }
  @media (max-width: 800px) {
    width: 45%;
    margin: 10px auto;
  }
  @media (max-width: 500px) {
    width: 45%;
    margin: 10px auto;
  }
`;

//Related Categories

export const RelatedCon = styled.div`
  margin-top: 50px;
  height: fit=-content;
  width: 100%;
  flex-wrap: wrap;
`;

export const RelatedConLanding = styled.div`
  margin-top: 50px;
  height: fit=-content;
  width: 100%;
  flex-wrap: wrap;
`;

export const CardHolder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const RelatedConCard = styled.div`
  margin: 20px auto 20px 5px;
  height: 250px;
  width: 160px;
  border-radius: 10px;
  position: relative;
  &:hover {
    transform: scale(1.01);
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

export const ConCardInnerBox = styled.div`
  position: absolute;
  margin: auto;
  height: 160px;
  width: 160px;
  top: 30px;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  @media (max-width: 700px) {
    position: static;
    margin: auto;
  }
`;

export const CateName = styled.div`
  width: 100%;
  position: absolute;
  top: 205px;
  height: fit-content;
  text-align: center;
  color: #599f22;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
`;

//other marketplaces
export const RowFour = styled.div`
  width: 100%;
  height: 490px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 30px;
  margin: 150px auto;
  @media (max-width: 1200px) {
    flex-direction: column;
    height: fit-content;
    padding-bottom: 30px;
  }
`;

export const Cardcon = styled.div`
  width: 100%;
  height: fit-content;
  margin: auto;
  display: flex;
  flex-wrap: wrap;

  align-content: flex-start;
  @media (max-width: 1200px) {
    width: 85%;
    height: 100%;
  }
`;

export const Card = styled.div`
  width: 22%;
  height: 150px;

  border-radius: 15px;
  margin: 10px;
  display: flex;
  align-items: center;
  border: 1px solid rgba(196, 196, 196, 0.48);
  &:hover {
    transform: scale(1.01);
  }
  @media (max-width: 665px) {
    width: 100%;
  }
`;

//GetStartedAsBuyer

export const GetAsBuyerCon = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const CardHolderBuyer = styled.div`
  width: 100%;
  height: auto;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;

export const CardConBuyer = styled.div`
  height: 400px;
  width: 23%;
  min-width: 250px;
  margin-left: 20px;
  margin-bottom: 15px;
  @media (max-width: 1366px) {
    width: 30%;
  }
`;
