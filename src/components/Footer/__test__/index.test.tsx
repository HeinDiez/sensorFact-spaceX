import { render, screen, waitFor } from '@testing-library/react';
import Footer from '../index';

test('Render Application Footer without any errors', async () => {
    render(<Footer />);
    await waitFor(() => {
        expect(screen.getByText(/Space X Program 2023/)).toBeInTheDocument();
    });
});