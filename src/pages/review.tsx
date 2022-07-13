import { Title } from '@/components/utils/Title';
('@/components/utils/Title');
import { Button, ButtonStyle } from '@/components/utils/Button';
import Loading from '@/components/utils/Loading';
import { ImportantMessage } from '@/components/utils/Warning';
import { useGetSubmissions } from '@/hooks/submissionHooks';
import { Order, SubmissionQueryParams } from '@/lib/models/queryParams';
import { SubmissionState } from '@/lib/models/status';
import AppLayout from '@/components/layouts/AppLayout';
import { NextPageWithLayout } from './_app';
import { useBanRegularUsers } from '@/lib/hooks/useBanRegularUsers';
import { SubmissionListEntry } from '@/components/submissions/SubmissionListEntry';

const SubmissionsToReviewPage: NextPageWithLayout = () => {
  useBanRegularUsers();

  const query: SubmissionQueryParams = {
    order: Order.Desc,
    states: [SubmissionState.WaitingForReview],
    amount: 15,
    paginate: false,
    reviewed: false,
  };

  const { submissions, error, isFetching, isLoading, hasMore, nextPage } =
    useGetSubmissions(query);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mx-auto max-w-5xl min-h-screen space-y-8">
      <Title
        title="Submissions to review"
        extraInfo="Submissions waiting to be reviewed"
      />
      <div className="space-y-10">
        {submissions.map((s, i) => {
          return <SubmissionListEntry submission={s} key={i} />;
        })}
      </div>

      {submissions && hasMore && (
        <Button
          info={{
            onClick: nextPage,
            label: 'More',
            icon: 'autorefresh',
            style: ButtonStyle.Filled,
            disabled: isFetching || isLoading,
          }}
        />
      )}

      {!!error && !isLoading && (
        <ImportantMessage
          message="There was an error."
          content={error as string}
          icon="warning"
        />
      )}
    </div>
  );
};

SubmissionsToReviewPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};
export default SubmissionsToReviewPage;
