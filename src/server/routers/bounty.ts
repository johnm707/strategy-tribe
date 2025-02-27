import { router } from '../procedures';
import { deleteBounty } from '../routes/bounties/deleteBounty';
import { editBounty } from '../routes/bounties/editbounty';
import { getBounties } from '../routes/bounties/getBounties';
import { getBounty } from '../routes/bounties/getBounty';
import { getFilterTags } from '../routes/bounties/getFilterTags';
import { getFullBounty } from '../routes/bounties/getFullBounty';
import { postBounties } from '../routes/bounties/postBounties';
import { getBountySubGraph } from '../routes/submissionGraph/getBountySubGraph';
import { getBountySubGraphs } from '../routes/submissionGraph/getBountySubGraphs';
import { postBountySubGraph } from '../routes/submissionGraph/postBountySubGraph';

export const bountyRouter = router({
  getBounty: getBounty,
  getBounties: getBounties,
  getFilterTags: getFilterTags,
  postBounties: postBounties,
  editBounty: editBounty,
  getFullBounty: getFullBounty,
  deleteBounty: deleteBounty,
  getBountySubGraph: getBountySubGraph,
  getBountySubGraphs: getBountySubGraphs,
  postBountySubGraph: postBountySubGraph,
});
