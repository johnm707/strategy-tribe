import {
  Order,
  BountyOrderBy,
  BountyQueryParams,
} from '@/lib/models/queryParams';
import { BountyState } from '@/lib/models/status';
import { TargetType } from '@/lib/models/targetType';
import { GoToBountiesPage } from '@/utils/Routes';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

export const useUrlSearchParams = () => {
  const router = useRouter();

  function buildRoute(qry: BountyQueryParams, url = GoToBountiesPage()) {
    router.pathname = url;

    return {
      pathname: router.pathname,
      query: {
        searchTerm: qry.searchTerm,
        order: qry.order,
        orderBy: qry.orderBy,
        minBounty: qry.minBounty?.toString(),
        maxBounty: qry.maxBounty?.toString(),
        states: qry.states,
        targetType: qry.targetType,
        orgName: qry.orgName,
        amount: qry.amount?.toString(),
        specificityOfOrgName: qry.specificityOfOrgName,
        paginate: qry.paginate,
      },
    };
  }

  const query: BountyQueryParams = useMemo(() => {
    const qry = router.query;
    const specificityOfOrgName = qry.specificityOfOrgName as string as
      | 'Exact'
      | 'Loose'
      | undefined;
    const params: BountyQueryParams = {
      searchTerm: qry.searchTerm as string,
      order: qry.order as Order,
      orderBy: qry.orderBy as BountyOrderBy,
      minBounty: parseFloat(qry.minBounty as string),
      maxBounty: parseFloat(qry.maxBounty as string),
      states: qry.states as BountyState[],
      targetType: qry.targetType as TargetType,
      orgName: qry.orgName as string,
      amount: parseFloat(qry.amount as string) || 4 * 4,
      specificityOfOrgName,
      paginate: qry.paginate === 'true',
    };
    return params;
  }, [router.query]);

  return {
    setQuery: (
      qry: BountyQueryParams,
      options?: { scroll?: boolean; url?: string }
    ) => {
      const newRouter = buildRoute(qry, options?.url);
      router.push(newRouter, undefined, { scroll: !!options?.scroll });
    },
    query,
  };
};
