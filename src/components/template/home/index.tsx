"use client";

import Image from "next/image";

interface HomeTemplateProps {
  viewport: string | undefined;
  os: string | undefined;
}

const HomeTemplate = (props: HomeTemplateProps) => {
  const { os } = props;

  const isMac = os === "mac";

  return (
    <main className="w-screen h-screen flex items-center justify-center bg-background">
      <div className="flex items-center justify-center flex-col max-w-full w-sm h-full border-x-1 border-line border-solid">
        <h1 className="a11y">Alogn</h1>

        <Image
          src={"/assets/images/charactor.png"}
          alt={""}
          width={190}
          height={223}
        />

        <p className="text-foreground text-center whitespace-pre-wrap font-medium mt-5">
          {!isMac &&
            "죄송합니다. \n현재 이 애플리케이션은 iOS 기기를 지원하지 않습니다."}
          {isMac &&
            "Android 기기에서 원활히 사용 가능합니다. \nGoogle Play 스토어에서 설치해 주세요."}
        </p>
      </div>
    </main>
  );
};

export default HomeTemplate;
