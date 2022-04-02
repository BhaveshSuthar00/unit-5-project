import styled from "styled-components";
const HeaderTitleDiv = styled.div`
  text-align: left;
  margin-left: 20px;
  margin-bottom: 10px;
`;

const HomeDiv = styled.div`
  display: flex;
  & > div:first-child {
    /* background-color: teal; */
    width: 70%;
    margin-left: 50px;
  }
  & > div:nth-child(2) {
    margin: auto;
    margin-top: 80px;
  }
`;

const MainDivHome = styled.div`
  width: 80%;
  margin: auto;
`;
const ElementDiv = styled.div`
  &:hover {
    cursor: pointer;
  }
  & > img {
    width: 200px;
    height: 250px;
    border-radius: 5px;
  }
`;
const SongPoster = styled.div`
    background-image : url(${(props) => props.imgSrc || "https://picsum.photos/200"});  
    background-size : contain;
    display:flex;
    justify-content:center;
    align-items:center;
    height:100px;  
    width:100px;  
    
`;
export { HeaderTitleDiv, MainDivHome, HomeDiv, ElementDiv };
