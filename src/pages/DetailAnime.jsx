import Container from "@/ui/elements/Container";
import { css } from "@emotion/css";
import { useAnime } from "@/hooks/useAnime";
import { useEffect } from "react";
import Loader from "@/ui/elements/Loader";
import CardListsLayout from "@/ui/layouts/CardLists";
import Card from "@/ui/components/Card";
import Button from "@/ui/elements/Button";
import { useParams, useNavigate } from "react-router-dom";
import HeaderDetail from "@/ui/layouts/HeaderDetail";
import DetailLayout from "@/ui/layouts/DetailLayout";

const DetailAnime = () => {
  const {
    fetchDetail,
    fetchRecommendation,
    status,
    error,
    animeDetail,
    animeLists,
  } = useAnime();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchDetail();
    fetchRecommendation();
  }, [id]);

  return (
    <>
      <Loader isVisible={status === "loading"} />
      <Container>
        <HeaderDetail
          title={
            animeDetail?.data?.attributes?.titles?.en ||
            animeDetail?.data?.attributes?.titles?.en_jp ||
            animeDetail?.data?.attributes?.titles?.en_cn ||
            animeDetail?.data?.attributes?.titles?.zh_cn
          }
        />
        <DetailLayout animeDetail={animeDetail} />
        <div
          className={css`
            display: flex;
            justify-content: space-between;
            margin: 36px 0px;
          `}
        >
          <div>Recommended For You</div>
          <Button
            className={css`
              height: fit-content;
            `}
            onClick={() => {
              navigate(`/`);
            }}
          >
            See All
          </Button>
        </div>
        <CardListsLayout>
          {animeLists?.data?.map((anime) => (
            <Card
              id={anime.id}
              key={anime.id}
              title={
                anime.attributes.titles.en ||
                anime.attributes.titles.en_jp ||
                anime.attributes.titles.en_cn ||
                anime.attributes.titles.zh_cn
              }
              japaneseTitle={anime.attributes.titles.ja_jp}
              image={anime.attributes.posterImage?.original || ""}
            />
          ))}
        </CardListsLayout>
      </Container>
    </>
  );
};

export default DetailAnime;
