import Head from "next/head";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import * as S from "../styles/Home.styles";

export default function Home() {
  const router = useRouter();
  const onClickMoveToProject = (event: MouseEvent<HTMLDivElement>) => {
    router.push(event.currentTarget.id);
  };
  return (
    <S.Wrapper>
      <Head>
        <title>KMS-MiniProject</title>
        <meta name="description" content="프론트엔드 개발자 김민승의 미니프로젝트 모음" />
      </Head>
      <S.Heading>KMS-MiniProject</S.Heading>
      <S.ProjectName id="/calculater" onClick={onClickMoveToProject}>
        계산기 만들기
      </S.ProjectName>
    </S.Wrapper>
  );
}
