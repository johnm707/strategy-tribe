import { Submission } from '@prisma/client';

export const useSubmitReview = (
  grade: 'Accepted' | 'Rejected',
  submission: Submission,
  reviewerId: string,
  reviewerComment?: string,
  onSuccess?: () => void,
  onError?: (e: any) => void
) => {
  // const q = useQueryClient();
  // const { save } = Moralis_useSaveReview(
  //   grade,
  //   submission,
  //   reviewerId,
  //   reviewerComment
  // );

  // const { mutate } = useMutation(() => save(), {
  //   onSuccess: () => {
  //     q.invalidateQueries();
  //     if (onSuccess) onSuccess();
  //   },
  //   onError,
  // });

  return {
    SubmitReview: () => {
      //
    },
  };
};
export const useGetReviews = (config: any, enabled = true) => {
  // const { isInitialized } = useMoralis();
  // const page = config.page || 0;
  // const { fetch } = Moralis_getReviews(config);

  // const [numOfPages, setNumOfPages] = useState(0);

  // const queryId = [Queries.Reviews, config, config.page];

  // const { error, isLoading, data, isFetching, isPreviousData } = useQuery(
  //   queryId,
  //   () => fetch(),
  //   {
  //     getPreviousPageParam: (lastPackage) => {
  //       const { hasLess, page } = lastPackage;
  //       if (hasLess) return page - 1;
  //       else return false;
  //     },
  //     getNextPageParam: (lastPackage) => {
  //       const { hasMore, page } = lastPackage;
  //       if (hasMore) return page + 1;
  //       else return false;
  //     },
  //     enabled: isInitialized && enabled,
  //     keepPreviousData: config.paginate,
  //     refetchOnWindowFocus: false,
  //   }
  // );

  // useEffect(() => {
  //   if (data && config.pageSize && config.paginate) {
  //     const { count } = data;
  //     const _numOfPages = Math.floor((count - 1) / config.pageSize + 1);

  //     setNumOfPages(_numOfPages);
  //   } else {
  //     setNumOfPages(0);
  //   }
  // }, [data, config]);

  return {
    isLoading: true,
    reviews: [],
    isFetching: false,
    page: 0,
    numOfPages: 0,
    count: 0,
    hasNextPage: false,
    hasPreviousPage: false,
    isPreviousData: false,
    error: {
      msg: 'this functionality needs refactoring ',
    },
  };
};
