import CustomImage from "@/pages/component/custom/custom-image";
import CustomMargin from "@/pages/component/custom/custom-margin";
import { convertDate } from "@/util/common/func/convert-date";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";
import TagBox from "../component/tag-box";
import CustomGap from "@/pages/component/custom/custom-gap";
import { compareWithCurrent } from "@/util/common/func/compare-with-current";
import UrlModal from "@/pages/component/modal/url-modal";
import { useDisclosure } from "@chakra-ui/react";

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
    content:
      "✨미션4✨ 드셉션 🛌💤<br/>불치병에 걸린 DS사의 회장과, 그의 일곱 자녀들👨‍👩‍👧‍👦.다양한 계열사의 대표가 되어 각자의 역량을 뽐내고 있다.이미 각자의 자리에서 최고의 역할을 해내고 있는 자녀들이지만,DS사의 뒤를 이을 후계자👑로 정해진 인물은 단 한 명!일곱 남매들 중 회장이 꽁꽁 숨겨둔 후계자를 찾아후계자 자리를 포기하게 하도록 인셉션하라!💭<br/><br/>🗓️일시 : 7월 1일 (토) 오후 12시 50분<br/>🏠장소 : 1부- 코엑스 / 2부-  벨지움재즈카페<br/>‼️참불조사는 6월 28일 (수) 오후 11:59까지 아래 폼으로 작성 부탁드립니다 !<br/>👉🏻 https://docs.google.com/forms/d/e/1FAIpQLSdGNRyyCnwybshZX47uT_x7sMvNJKvUj0yj43M3yqzL82JEDw/viewform?usp=sf_link<br/><br/>후계자를 찾아서 꿈속의 꿈속의 꿈속의 꿈 ..💭으로 들어가 새로운 꿈의 내용을 직접 설계해보자!✏️<br/>그런데 이 꿈을 설계하는 과정에서 .. 잘못된 꿈을 설계하려고 하는 스파이😈가 있다구..?!?<br/>과연 스파이의 유혹을 떨쳐내고 좋은 꿈을 설계해서 새로운 후계자가 되는 사람은 누가 될까 ??🧐<br/><br/>‼️참불조사 구글폼에 뒤풀이 1차, 2차 참석 여부까지 모두 답변 부탁드립니다 !<br/>‼️코엑스 입구에서 모이지 않고, 이후 공지되는 코엑스 내부의 특정 장소에서 모이게 되니 내부에 도착하는 시간까지 넉넉히 고려해서 와주시면 감사하겠습니다 :)",
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
    content:
      "🕴️ < 미션 3: 드스 상사 > 🕴️<br/><br/>⭐ 드스상사 모집 공고 ⭐<br/>누구나 들어가고 싶어하지만 아무나 들어가지 못한다는 꿈의 기업! ☁️드스 상사☁️에서 시그니처 음료 개발에 앞장 설 인재를 모집합니다!! <br/><br/>■ 모집 분야<br/>🍹 음료 개발 연구🍹<br/><br/>■ 담당 업무<br/>💡적극적인 음료 재료 획득 및 신박한 음료 개발💡 <br/><br/>■ 자격 요건<br/>1) 열쩡! 열쩡! 열쩡! 이 넘치는 인재❤️‍🔥<br/>2) 톡톡 튀는 창의성을 가진 인재❤️‍🔥<br/>3) 상사에게 싸바싸바~ 잘 하는 인재❤️‍🔥<br/><br/>■ 복지<br/>1)  신메뉴 개발을 위한 재료 전폭 지원 !!<br/>2) 강권 & 꼰대 없는 회식 자리 !!<br/><br/>전국 인재가 모여있는 ☁️드스상사☁️에서 우리들만의 음료를 개발하고 싶으시다면,  당장 지원해주세요!!🤩<br/><br/><br/>⬇️ 드스상사 입사 지원서 링크 ⬇️<br/>https://forms.gle/8Ypu6yMbEMStSpPP8<br/><br/>📍장소: 낙산공원 중앙광장<br/>📍시간: 12시 40분<br/>📍유의 사항: 1부에 야외활동이 있으니 바지, 운동화 착용을 권장드립니다. 더불어 날씨가 더울 수 있으니 선크림 잊지 마시고, 더위에 약하신 분들은 참고 부탁드려요!!  💦",
    youtubeUrl: "",
    cafeUrl: "",
    instaUrl: "",
    bandUrl: "https://band.us/band/53682378/album/72671753",
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
    cafeUrl: "https://cafe.naver.com/dreamstart28/3835",
    instaUrl: "https://www.instagram.com/p/Csthm93P4UD/",
    bandUrl: "https://band.us/band/53682378/album/72244410",
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
    content:
      "☁️25기 미션 1☁️<br/>📮드스 잡화점의 기적📮(2023.04.08)<br/><br/>25기 첫 번째 미션인 🌸드스 잡화점의 기적🌸 은 서울 올림픽 공원 및 인근 세미나실에서 진행했습니다.<br/><br/><1부><br/>1. 반쪽의 편지를 찾아라💌<br/>어느 날, 드스인들에게 도착한 의문의 편지 한 통🦋 여기저기 얼룩지고 반쯤 찢어져 있는 편지의 내용에는 알 수 없는 누군가의 고민 상담이 적혀 있었는데요. 각 미션조는 총 4개의 힌트를 얻어 나머지 반쪽의 편지를 찾아내야 하는 미션을 전달받았습니다! 기획조원들이 기다리고 있는 4개의 스팟에서 게임을 진행하고, 통과한 미션조에게 편지에 담긴 힌트를 전달했습니다.📢<br/><br/>2. 반쪽의 미션조원을 찾아라💎<br/>완성된 편지의 힌트를 바탕으로 미션조원들은 특정한 ‘장소’를 추리해냈는데요💡 카카오맵에서 what3words라는 프로그램을 이용하여 제시된 단어 3개를 조합하면 가야할 장소를 알 수 있었고, 알맞은 장소에 가게 된다면 해당 기획조원과 나머지 반쪽의 편지를 가지고 있는 조원을 만나, 편지와 미션조를 완성할 수 있었습니다!😎<br/><br/><2부><br/>1. 드스 잡화점🏠에 들어갈 수 있는 자격을 확인하는 ‘드스고사📝’<br/>미션조가 모두 모여 시작한 2부는 시공간이 뒤틀려 시간이 멈춰 있는 드스 잡화점🏠에서 진행하였습니다! 하지만 시간이 뒤틀린 특별한 공간… 아무나 들어올 순 없겠죠?🔥 기획조원들이 준비한 자격 시험, 드스고사📝를 통과해야만 드스 잡화점에서 남은 시간을 보낼 수 있었는데요! 드스고사는 총 10문제로 이루어져 있었습니다. 3문제는 공통 문제, 나머지 7문제는 각 조마다 다른 시대에 관련된 문제가 제시되었습니다. 커트라인은 60점으로 모든 조가 손쉽게(?) 통과하여, '드스 잡화점🏠'에 입장할 수 있는 자격을 얻었습니다👏<br/><br/>2. 편지에 등장하는 인물들의 관계 및 시대배경 알아맞히기📝<br/>본격적으로 편지에 답장을 작성하기 전, 그 인물이 어떠한 환경에서 어떤 관계를 맺고, 어떠한 삶을 살아왔는지 알아야 그에 맞는 답장을 쓸 수 있겠죠?😎 이에 다같이 각 편지에 등장하는 등장인물들의 관계 및 살아온 시대를 알아맞혀 보는 시간을 가졌습니다! 편지를 자세히 읽어보면 기획조원들이 숨겨 놓은 정성스러운 힌트들을 발견할 수 있었는데요😋 편지를 열심히 읽고 추리해내어 거의 모두가 정답을 맞힐 수 있었습니다☀<br/><br/>3. 편지에 직접 답장 작성하기📮<br/>드스 잡화점의 기적 미션의 ✨하이라이트✨ 각 미션조는 받았던 편지에 대한 ‘답장’을 작성하는 시간을 가졌습니다🖋 연애 고민, 진로 고민, 인생 고민, 우정 고민 등 여러 사연들이 있었는데요. 각자 다른 삶을 살아온 드스인들은 본인의 경험담, 생각들을 담아 정성스러운 답장을 작성해 주었답니다🍀<br/><br/>4. 조별로 답장 발표, 공유🙌🏻<br/>마지막으로, 각 조별로 사연에 맞게 쓴 답장을 발표해보는 시간을 가져보았습니다🎙 진심 어린 조언부터, 기획조원들도 예상하지 못했던 창의적인 조언들까지 가지각색으로 다양하고 속 깊은 답변들을 해 주었는데요! 미션을 진행하며, 이 사연들이 단순히 사연자들의 고민이 아닌, 우리 모두의 고민이 될 수도 있다는 점을 다들 깨달은 것 같아 무엇보다도 의미있는 시간이었습니다💙<br/><br/>이렇게 25기 미션 1 📮드스 잡화점의 기적📮이 마무리되었습니다!✨ 첫 미션임에도 불구하고, 누구보다 열정적으로 참여해 준 드스인들에게 감사의 박수를 보내드립니다👏 설레는 봄🌷, 앞으로 계속될 드림스타트 25기의 다른 미션들도 기대해 주세요💙",
    youtubeUrl: "",
    cafeUrl: "https://cafe.naver.com/dreamstart28/3814",
    instaUrl:
      "https://www.instagram.com/p/CrXhxzAORev/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    bandUrl: "https://band.us/band/53682378/album/71675863",
    joinUrl: "",
  },
];

const Info = () => {
  const router = useRouter();
  const { date } = router.query;
  console.log(date);

  // 위에 리스트에서 date 값이 일치하는 객체 찾기
  const info = postingList.find((item) => item.date === date);

  // 모달 관련
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (isJoin: boolean) => {
    if (isJoin) {
      info && window.open(info.joinUrl, "_blank");
    } else {
      // 모달 열기
      onOpen();
    }
  };

  return (
    <InfoContainer>
      <div className="divAbsolute">
        <CustomImage
          src="/asset/posting/png/banner.png"
          isWidth100={true}
          isHeight100={true}
        />
      </div>
      {info && (
        <>
          <Overlay>
            <CustomMargin h={30} />
            <p className="title">{info.title}</p>
            <CustomMargin h={2} />
            <p className="teamName">{info.teamName}</p>
            <CustomMargin h={18} />
            <p className="date">{convertDate(info.date, "info")}</p>
          </Overlay>
          <InfoBox>
            <div style={{ borderRadius: "1.5rem", overflow: "hidden" }}>
              <CustomImage
                src={info.mainImgSrc}
                isWidth100={true}
                isHeight100={true}
              />
            </div>
            <CustomMargin h={10} />
            <p className="textGray500">{info.teamMemberList.join(", ")}</p>
            <CustomMargin h={10} />
            <TagBox tagList={info.tagList} />
            <CustomMargin h={24} />
            <Btn onClick={() => handleClick(compareWithCurrent(info.date))}>
              {compareWithCurrent(info.date)
                ? "미션 신청하기"
                : "미션 보러가기"}
            </Btn>
            <CustomMargin h={24} />
            <ContentBox>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  overflowY: "scroll",
                }}
              >
                <div className="divRow">
                  <CustomImage
                    src="/asset/posting/png/write.png"
                    w={22}
                    h={22}
                  />
                  <CustomGap w={4} />
                  <p className="title textPrimary">소개글</p>
                </div>
                <CustomMargin h={15} />
                <p
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: info.content,
                  }}
                />
              </div>
            </ContentBox>

            <CustomMargin h={150} />
          </InfoBox>
          <UrlModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            urlList={[
              { name: "youtube", url: info.youtubeUrl },
              { name: "cafe", url: info.cafeUrl },
              { name: "insta", url: info.instaUrl },
              { name: "band", url: info.bandUrl },
            ]}
          />
        </>
      )}
    </InfoContainer>
  );
};

export default Info;

const InfoContainer = styled.div`
  position: relative;
`;

const InfoBox = styled.div`
  position: absolute;
  width: 100%;
  padding: 4rem 3.5rem 0 3.5rem;
  top: 12.5rem;
  border-radius: 3rem 3rem 0 0;
  background-color: white;
  z-index: 3;
  .teamMemberList {
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 30rem;
  padding: 0 3rem;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.6) 0.01%,
    rgba(0, 0, 0, 0) 55.93%
  );
  z-index: 2;
  .title {
    color: white;
    font-size: 2rem;
    font-weight: 700;
  }
  .teamName {
    color: white;
    font-size: 1.1rem;
    font-weight: 500;
  }
  .date {
    color: white;
    font-weight: 500;
    text-align: right;
  }
`;

const Btn = styled.button`
  width: 100%;
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0.1rem solid var(--primary);
  border-radius: 1rem;
  box-shadow: 0px 4px 6px 0px rgba(168, 218, 255, 0.2);

  color: var(--primary);
  font-size: 1.5rem;
  font-weight: 900;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 40rem;
  padding: 2rem;

  border-radius: 1rem;
  border: 0.1rem solid var(--gray-300);

  .title {
    font-size: 1.6rem;
    font-weight: 600;
  }
  .content {
    font-size: 1.2rem;
  }
`;
