import { render, screen } from '@testing-library/react';
import Header from '../index';

test('Render Application Footer without any errors', async () => {
    render(<Header />);
    expect(screen.getByText(/SensorFact/)).toBeInTheDocument();
    expect(screen.getByText(/Space X/)).toBeInTheDocument();
});