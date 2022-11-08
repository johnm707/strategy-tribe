import { useAuth } from 'auth/AuthContext';

import { useAccountContext } from './AccountContext';
import { AccountSideMap } from './AccountSideMap';
import { AccountDetails } from './sections/AccountDetails';
import { AccountNotifications } from './sections/AccountNotifications';
import { AccountReviews } from './sections/AccountReviews';
import { AccountRewards } from './sections/AccountRewards';
import { AccountSubmissions } from './sections/AccountSubmissions';
import { AccountWatching } from './sections/AccountWatching';
import { Section } from '../landing/Section';
import { AccountView } from '../../../lib/models/AccountView';

export function AccountContent() {
  const { view } = useAccountContext();

  const { isAdmin, isStaff } = useAuth();

  return (
    <Section className="flex min-h-[20rem] gap-24">
      <AccountSideMap />

      {view === AccountView.Account && (
        <>
          <AccountDetails />
        </>
      )}

      {view === AccountView.Watching && (
        <>
          <AccountWatching />
        </>
      )}

      {view === AccountView.Submissions && (
        <>
          <AccountSubmissions />
        </>
      )}

      {view === AccountView.Rewards && (
        <>
          <AccountRewards />
        </>
      )}

      {view === AccountView.Notifications && (
        <>
          <AccountNotifications />
        </>
      )}

      {view === AccountView.Reviews && (isAdmin || isStaff) && (
        <>
          <AccountReviews />
        </>
      )}
    </Section>
  );
}
