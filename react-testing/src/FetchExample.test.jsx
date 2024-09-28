import FetchExample from './FetchExample.jsx';
import { it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { act } from 'react';

it('should display fetched data', async () => {
  window.fetch = vi.fn();
  let resolve;
  fetch.mockResolvedValue(
    new Promise((_resolve) => {
      resolve = _resolve;
    }),
  );
  await act(async () => {
    render(<FetchExample />);
  });

  expect(screen.queryByText('42')).toBeNull();
  await act(async () => {
    resolve(42);
  });
  expect(screen.getByText('42')).toBeInTheDocument();
});
