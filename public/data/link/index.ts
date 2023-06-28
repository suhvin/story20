enum LinkOption {
  INSTA = "insta",
  CAFE = "cafe",
  YOUTUBE = "youtube",
}

const OPTION_VALUE: { [key: string]: any } = {
  [LinkOption.INSTA]: {
    linkUrl: "https://www.instagram.com/dreamstart28/",
    postMessageName: "openInstagram",
  },
  [LinkOption.CAFE]: {
    linkUrl: "https://cafe.naver.com/dreamstart28",
    postMessageName: "openNaverCafe",
  },
  [LinkOption.YOUTUBE]: {
    linkUrl: "https://www.youtube.com/@user-rn4eh3ip8b",
    postMessageName: "openYoutube",
  },
};

export default function makeLink(op: string, arg?: string) {
  const windowObj = window as any;
  const platform = process.env.PLATFORM;
  const optionValue = OPTION_VALUE[op];

  if (platform === "app") {
    windowObj[optionValue.postMessageName].postMessage(
      optionValue.linkUrl + (arg ?? "")
    );
  } else {
    window.open(optionValue.linkUrl + (arg ?? ""), "_blank");
  }
}
