import { GoToBountyPage } from '@/lib/utils/Routes';

import { Button, ButtonStyle } from '@/components/utils/Button';

import { useNewSubmissionContext } from './NewSubmissionContext';

export function NewSubmissionHeader() {
  const { bounty, ctaButton, backToEdit, editPhase } =
    useNewSubmissionContext();

  return (
    <header className="sticky top-[3.8rem] z-50 flex w-full justify-between border-b-2 border-surface bg-surface-dark py-5">
      <div>
        <h2 className="title">New Submission</h2>
        <Button
          info={{
            style: ButtonStyle.TextPurple,
            removePadding: true,
            label: bounty?.title,
            isALink: GoToBountyPage(bounty?.slug as string),
          }}
        />
      </div>

      <div className="flex h-fit items-center gap-8">
        {!editPhase && (
          <Button
            info={{
              label: 'Back to edit',
              icon: 'arrow_back',
              style: ButtonStyle.TextPurple,
              onClick: backToEdit,
            }}
          />
        )}
        {ctaButton && (
          <div className="">
            <Button info={ctaButton} />
          </div>
        )}
      </div>
    </header>
  );
}
