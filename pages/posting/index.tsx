import styled from "@emotion/styled";
import React from "react";
import BackBar from "../component/bar/back-bar";
import TabBox from "./component/tab-box";
import CustomMargin from "../component/custom/custom-margin";
import PostBox from "./component/post-box";

const postingList = [
  {
    date: "230701",
    title: "드셉션",
    teamName: "행운이 따라오조",
    teamMemberList: [
      "오예진",
      "이채원",
      "정대철",
      "변수현",
      "최지원",
      "조서은",
      "유호성",
      "박혜신",
    ],
    tagList: ["SF", "인셉션", "꿈"],
    mainImgSrc: "/asset/posting/png/230701.png",
    bannerImgSrc: "",
    content: "",
    youtubeUrl: "",
    cafeUrl: "",
    instaUrl: "",
    bandUrl: "",
    joinUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSdGNRyyCnwybshZX47uT_x7sMvNJKvUj0yj43M3yqzL82JEDw/viewform",
  },
  {
    date: "230527",
    title: "드스상사",
    teamName: "나 지금 되게 신나조",
    teamMemberList: [
      "김미정",
      "백혜진",
      "박상준",
      "오원준",
      "김강희",
      "손예원",
      "장수혁",
      "박경랑",
    ],
    tagList: ["회사", "음료"],
    mainImgSrc: "/asset/posting/png/230527.png",
    bannerImgSrc: "",
    content: "",
    youtubeUrl: "",
    cafeUrl: "",
    instaUrl: "",
    bandUrl: "",
    joinUrl: "",
  },
  {
    date: "230506",
    title: "드스 재판",
    teamName: "그대의 마음을 조준하조",
    teamMemberList: [
      "서기석",
      "조병준",
      "이다은",
      "최지원",
      "최예담",
      "송원섭",
      "이윤아",
      "권세진",
      "윤예원",
    ],
    tagList: ["재판", "말싸움", "토론"],
    mainImgSrc: "/asset/posting/png/230506.png",
    bannerImgSrc: "",
    content:
      "<1부> 드스 로스쿨🏫<br/>1. 드스 로스쿨 변호사 모집📢<br/>본격적인 미션 시작 전, 드스 로스쿨에 입학할 변호사🧳를 찾는 사이트가 오픈되었습니다🔥 모집된 변호사들은 드스 세상에서 일어난 4가지 사건‼️을 해결해야 하는 임무를 부여받았습니다✨<br/>2. 드스 로스쿨 교육🖋 - 양자택일 게임<br/>로스쿨에 입학한 후, 이론 교육📋이 먼저 실시되었습니다🙌🏻 이론 교육의 첫 번째로는 변호사가 되기 위한 중요한 요소 중 하나인 🔥빠른 판단력🔥을 기르기 위한 양자 택일 게임이 진행되었습니다. 마지막까지 살아남은 승자들에게는 사탕🍭이 주어졌는데요😋 게임이 끝난 후, 팀 별로 가지고 있는 사탕의 개수에 따라 각 사건 속 의뢰인을 선택할 수 있는 기회가 주어졌습니다! 👏<br/>3. 드스 로스쿨 교육🖋 - 죄의 무게를 재는 방법<br/>다음으로 갖추어야 할 중요한 요소🔥는 바로 ⚖️죄의 무게를 재는 방법⚖️을 아는 것인데요! 각 조별로 주어진 바구니에 1kg이 될 것 같은 만큼의 물건들을 넣은 후, 저울에 직접 재어보았을 때 1kg에 더 가까운 팀이 승리하게 되는 게임이었습니다. 이긴 팀에게는 추후 재판에서 유용하게 쓰일 수 있는 🎟배심원 매수권🎟과 🎖베네핏🎖이 주어졌습니다!🫢<br/>4. 드스 로스쿨 교육🖋 - 실습교육<br/>이론 교육을 모두 마쳤으니, 이제 현장 실습 교육🏃🏻‍♂️을 받으러 가야겠죠! 각 팀별로 지정된 장소로 향해 의뢰인🙋🏻‍♀️들을 만난 후, 다양한 게임들을 수행하며 사건에 대한 증거들을 수집하는 과정을 갖게 되었습니다🔍<br/><br/><2부> 🛡드스 재판⚔️<br/>로스쿨의 교육 과정이 모두 끝나고, 대망의 드스재판🛡 시간이 다가왔습니다! 드스 변호인단들이 재판을 어떻게 풀어나갈지 기대되는 시간이었는데요👏 치열했던 재판의 현장을 보러 떠나볼까요? 🏃🏻‍♂️🏃🏻‍♂️<br/><br/>[재판 1] 사랑이 죄는 아니잖아!❤️‍🔥<br/>첫 번째 재판⚔️으로는 ‘연인'팀의 재판이 진행되었습니다! 어려운 문제로 갈등하게 된 연인 최해나와 조철용, 둘 중 어느 쪽의 손을 들어주어야 할지 열띤 토론이 이어졌습니다🫢 배심원단의 투표🎟를 통해, 근소한 표 차이로 🔥조철용 측이 승리🔥하게 되었습니다!<br/>[재판 2] 너 까짓게 오빠라고?🥊<br/>두 번째 재판으로는 ‘남매’팀의 재판이 진행되었습니다! 권보니와 권하니👫🏻, 둘 중 누가 오빠이고 누가 누나인지, 평생의 호칭부터 세뱃돈💰까지 걸려 있어 매우 중요한 사건이었는데요🔥 투표 결과는 1.5표의 아슬아슬한 차이‼️로 권하니 측이 승리했습니다!👏<br/>[재판 3] 누가 국가대표가 될 상인가🏹<br/>세 번째 재판으로는 ‘운동선수’팀의 재판이 진행되었습니다! 양궁 국가대표🎯로 활동하고 있는 이안산 선수와 최보배 선수, 둘 사이에 일어난 갈등으로 국가대표 팀이 흔들릴 위기에 처했는데요🫢 열정적인 대결을 펼쳤던 이번 재판의 승자는 바로 👏이안산 변호인단👏이었습니다!<br/>[재판 4] 드라마 주연은 나야 나🎬<br/>마지막 재판으로는 ‘연예인’팀의 재판이 진행되었습니다! 소속사 사장 송수만 대표👨🏻‍🦱와 유명 연예인 윤아👱🏻‍♀️ 사이에 빚어진 갈등으로, 열띤 토론이 이어졌는데요. 투표 결과, 아슬아슬한 차이로 🔥윤아 측이 승리🔥했습니다!<br/><br/>이렇게 4가지 사건에 대한 재판⚔️을 끝으로, 25기 미션 2 ⚖️드스재판⚖️이 마무리되었습니다! 즐거운 추억을 선물해 준 기획조 ‘그대 마음을 조준하조💕🔫’, 미션에 참여해 주신 드스인들 모두💙에게 고생 많으셨다는 말씀을 전해드립니다👏<br/>어느덧 뜨거운 여름의 초입이 다가왔는데요, 더운 날씨만큼 열정으로 불타오를 25기의 다음 미션들도 기대해 주세요🤍",
    youtubeUrl: "",
    cafeUrl: "https://cafe.naver.com/dreamstart28",
    instaUrl: "https://www.instagram.com/p/Csthm93P4UD/",
    bandUrl: "https://band.us/band/53682378/post/430255107",
    joinUrl: "",
  },
  {
    date: "230408",
    title: "드스 잡화점의 기적",
    teamName: "기썬을 제압하조",
    teamMemberList: [
      "최선우",
      "신민규",
      "김동희",
      "김수빈",
      "권태형",
      "방주연",
      "이화연",
      "최민지",
    ],
    tagList: ["감성", "편지", "추억"],
    mainImgSrc: "/asset/posting/png/230408.png",
    bannerImgSrc: "",
    content: "",
    youtubeUrl: "",
    cafeUrl: "",
    instaUrl: "",
    bandUrl: "",
    joinUrl: "",
  },
];

const Posting = () => {
  return (
    <PostingContainer>
      <BackBar />
      <PaddingBox>
        <TabBox numList={[25, 24, 23, 22]} num={25} />
        <CustomMargin h={20} />
        <p className="title textGray500">Mission List</p>
        <CustomMargin h={20} />
        <PostBox postingList={postingList} />
        <CustomMargin h={150} />
      </PaddingBox>
    </PostingContainer>
  );
};

export default Posting;

const PostingContainer = styled.div`
  position: relative;
  height: 100%;
  background: linear-gradient(to right, white 25%, var(--gray-light) 25% 100%);
`;

const PaddingBox = styled.div`
  height: 100vh;
  padding: 0 3rem;

  .title {
    font-size: 1.6rem;
    font-weight: 900;
  }
`;
