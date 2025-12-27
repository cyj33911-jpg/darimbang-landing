import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "다림방 배달삼겹 | 48시간 숙성의 비밀",
  description: "고기 잡내 0%, 부드러움 100% - 48시간의 기다림이 만든 기적. 자체 개발 시즈닝과 숙성 공법으로 원육 퀄리티를 압도합니다. 다림방 배달삼겹 창업.",
  keywords: ["다림방", "배달삼겹", "삼겹살 창업", "배달 창업", "프랜차이즈", "48시간 숙성"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard - 현대적인 한글 폰트 */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
        {/* 배달의민족 한나는 열한살 - 임팩트있는 타이틀용 */}
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'BMHANNAAir';
            src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.0/BMHANNAAir.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: 'BMHANNAPro';
            src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.0/BMHANNAPro.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
        `}} />
      </head>
      <body className="font-pretendard antialiased">
        {children}
      </body>
    </html>
  );
}
