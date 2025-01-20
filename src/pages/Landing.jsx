import { useEffect } from "react";
import { useAnime } from "@/hooks/useAnime";
import { usePagination } from "@/hooks/usePagination";
import { css } from "@emotion/css";
import Card from "@/ui/components/Card";
import Container from "@/ui/elements/Container";
import Loader from "@/ui/elements/Loader";
import Header from "@/ui/layouts/Header";
import ThemeToggle from "@/ui/elements/ThemeToggle";
import CardListsLayout from "@/ui/layouts/CardLists";
import Pagination from "@/ui/components/Pagination";

const LandingPage = () => {
  const { animeLists, status, error, fetchAnime, page } = useAnime();
  const { totalPages, handlePageChange, renderPageNumbers } = usePagination(
    animeLists?.meta?.count,
    page
  );

  useEffect(() => {
    fetchAnime();
  }, [page]);

  return (
    <>
      <Loader isVisible={true} />
      <Container>
        <Header />
        <ThemeToggle />
        <CardListsLayout>
          {animeLists?.data?.map((anime) => (
            <Card
              id={anime.id}
              key={anime.id}
              title={
                anime.attributes.titles.en ||
                anime.attributes.titles.en_jp ||
                anime.attributes.titles.en_cn ||
                anime.attributes.titles.zh_cn ||
                anime.attributes.titles.ja_jp
              }
              japaneseTitle={anime.attributes.titles.ja_jp}
              image={anime.attributes.posterImage?.original || ""}
            />
          ))}
          <div
            className={css`
              width: 100%;
            `}
          >
            {animeLists?.data.length > 0 && (
              <Pagination
                page={page}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
                renderPageNumbers={renderPageNumbers}
              />
            )}
          </div>
        </CardListsLayout>
      </Container>
    </>
  );
};

export default LandingPage;
