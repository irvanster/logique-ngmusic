import { useQuery } from "@tanstack/react-query";
import { api } from "@/helpers";

export const useSearchMusic = (props) => {
  const { term='', country='', limit='' } = props

  const termQueryParam = term ? `&term=${term}` : '';
  const countryQueryParam = country ? `&country=${country}` : '';
  const limitQueryParam = limit ? `&limit=${limit}` : '';

  const { data, isSuccess, isPending, isLoading, error, refetch, isRefetching } = useQuery({
    queryKey: ["search-music"],
    queryFn: async () => {

      const response = await api.get(`/search?media=music${termQueryParam}${countryQueryParam}${limitQueryParam}`);
      return response.data;
    },
    refetchOnReconnect: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false
  });
  return { data, isSuccess, isPending, isLoading, error, refetch, isRefetching };
};


