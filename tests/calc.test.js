import { render, screen, fireEvent, waitFor} from '@testing-library/react'
import Calc from '@/components/calc'

test('renders calculator', async () => {
    render(<Calc />)
    await waitFor(() => screen.getByTestId('display'))
    expect(screen.getByTestId('display').textContent).toBe('0')
  });

test('handles error when input exceeds 9 digits', () => {
    render(<Calc />)
  
    fireEvent.click(screen.getByText('1'))
    fireEvent.click(screen.getByText('2'))
    fireEvent.click(screen.getByText('3'))
    fireEvent.click(screen.getByText('4'))
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('6'))
    fireEvent.click(screen.getByText('7'))
    fireEvent.click(screen.getByText('8'))
    fireEvent.click(screen.getByText('9'))
    fireEvent.click(screen.getByText('0'))

    expect(screen.getByTestId('display').textContent).toBe('ERROR')
  });

  test('performs exponential calculation correctly', async () => {
    render(<Calc />);
    await waitFor(() => screen.getByTestId('display'));
  
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('7'));
    fireEvent.click(screen.getByText('*'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('='));

    expect(screen.getByTestId('display').textContent).toBe('6.46e+8');

  });

  test('handles changing sign correctly', async () => {
    render(<Calc />);
    
    await waitFor(() => screen.getByTestId('display'));
  
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    
    expect(screen.getByTestId('display').textContent).toBe('10');
  
    fireEvent.click(screen.getByText('+/-'));
    
    expect(screen.getByTestId('display').textContent).toBe('-10');
  });

  test('handles division error correctly when dividing by zero', () => {
    render(<Calc />);
  
    fireEvent.click(screen.getByText('5'))
    fireEvent.click(screen.getByText('/'))
    fireEvent.click(screen.getByText('0'))
    fireEvent.click(screen.getByText('='))
  
    expect(screen.getByTestId('display').textContent).toBe('ERROR')
  });

