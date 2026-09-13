'use client';

import type { SaveBarProps } from '../types/settings';

export function SaveBar({ state, onSave, onDiscard }: SaveBarProps) {
  if (state === 'idle' || state === 'saved') return null;

  return (
    <div className='ui-save-bar'>
      <span className='ui-save-bar-message'>
        {state === 'saving' ? 'Saving…' : 'You have unsaved changes'}
      </span>
      <div className='flex items-center gap-2'>
        {onDiscard && (
          <button
            type='button'
            onClick={onDiscard}
            className='ui-button ui-button-ghost'
          >
            Discard
          </button>
        )}
        <button
          type='button'
          onClick={onSave}
          disabled={state === 'saving'}
          className='ui-button ui-button-primary'
        >
          Save changes
        </button>
      </div>
    </div>
  );
}
