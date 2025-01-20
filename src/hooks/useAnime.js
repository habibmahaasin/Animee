import { useSelector, useDispatch } from "react-redux";
import { fetchAnimeLists } from "@/store/slices/animeSlice";
import {
  selectAnime,
  selectAnimeError,
  selectAnimeStatus,
  selectDetailAnime,
} from "@/store/selectors/animeSelector";
import { useLocation, useParams } from "react-router-dom";
import { ITEMS_PER_PAGE } from "@/utils/constant/paginationConstant";
import { fetchDetailAnime } from "@/store/slices/animeSlice";

export const useAnime = () => {
  const dispatch = useDispatch();
  const animeLists = useSelector(selectAnime);
  const animeDetail = useSelector(selectDetailAnime);
  const status = useSelector(selectAnimeStatus);
  const error = useSelector(selectAnimeError);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get("page")) || 1;
  const { id } = useParams();

  const fetchAnime = () => {
    const query = {
      limit: ITEMS_PER_PAGE,
      offset: page ? (page - 1) * ITEMS_PER_PAGE : 0,
    };
    dispatch(fetchAnimeLists(query));
  };

  const fetchRecommendation = () => {
    const randomPage = Math.floor(Math.random() * 4203) + 1;
    const query = {
      limit: 5,
      offset: (randomPage - 1) * 5,
    };
    dispatch(fetchAnimeLists(query));
  };

  const fetchDetail = () => {
    dispatch(fetchDetailAnime(id));
  };

  return {
    animeLists,
    status,
    error,
    fetchAnime,
    page,
    fetchDetail,
    animeDetail,
    fetchRecommendation,
  };
};
