import { KeyboardEvent } from 'react';

export function handleEnterDown(event: KeyboardEvent<HTMLInputElement>, callback: () => void) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    callback();
  }
}
