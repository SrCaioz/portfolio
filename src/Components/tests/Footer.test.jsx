import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './../Footer';


describe('Footer', () => {
  it('renderiza Footer', () => {
    render(<Footer />);
    expect(screen.getByText('Feito com amor por Caio Cezar © Todos os direitos reservados. 2025')).toBeInTheDocument();
  });
});