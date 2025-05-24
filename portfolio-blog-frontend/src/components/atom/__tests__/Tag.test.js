import { render, screen } from '@testing-library/react';
import Tag from '../tag'; // Path to the Tag component

describe('Tag Component', () => {
  it('renders the tag text, replacing spaces with hyphens', () => {
    render(<Tag text="Test Tag Example" id={1} />); // Using id=1 as colors start from 1
    // The component transforms text: text.split(" ").join("-")
    expect(screen.getByText('Test-Tag-Example')).toBeInTheDocument();
  });

  it('applies the correct classes based on id', () => {
    const { container } = render(<Tag text="Test Tag" id={1} />);
    // For id={1}, color is "border-blue-400 bg-blue-100 text-blue-800"
    // The component structure is <Link><span>text</span></Link>
    // We check the classes on the Link element, which is the firstChild of the container.
    
    // Check for one of the specific color classes
    expect(container.firstChild).toHaveClass('border-blue-400');
    expect(container.firstChild).toHaveClass('bg-blue-100');
    expect(container.firstChild).toHaveClass('text-blue-800');
    
    // Check for common classes as well
    expect(container.firstChild).toHaveClass('me-2');
    expect(container.firstChild).toHaveClass('rounded');
    expect(container.firstChild).toHaveClass('border');
    expect(container.firstChild).toHaveClass('px-2.5');
    expect(container.firstChild).toHaveClass('py-0.5');
    expect(container.firstChild).toHaveClass('text-xs');
    expect(container.firstChild).toHaveClass('font-medium');
  });

  it('renders correctly with a different id', () => {
    render(<Tag text="Another Tag" id={3} />);
    expect(screen.getByText('Another-Tag')).toBeInTheDocument();
    
    // For id={3}, color is "border-red-400 bg-red-100 text-red-800"
    // We access the Link element directly via its role for a more robust query
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveClass('border-red-400');
    expect(linkElement).toHaveClass('bg-red-100');
    expect(linkElement).toHaveClass('text-red-800');
  });

  it('handles id not present in the colors map by applying no specific color class (or default if any)', () => {
    // If an id like 0 or 9 (not in colors map) is passed, `color` will be undefined.
    // The classes string would be "me-2 rounded border undefined px-2.5 py-0.5 text-xs font-medium "
    // This test checks if it gracefully handles it (e.g., doesn't crash and applies common classes)
    render(<Tag text="Default Color Tag" id={0} />);
    expect(screen.getByText('Default-Color-Tag')).toBeInTheDocument();
    const linkElement = screen.getByRole('link');
    
    expect(linkElement).toHaveClass('me-2');
    expect(linkElement).toHaveClass('rounded');
    expect(linkElement).toHaveClass('border');
    // It should NOT have color classes from the map
    expect(linkElement).not.toHaveClass('border-blue-400');
    expect(linkElement).not.toHaveClass('bg-red-100');
    // The class "undefined" might actually be added if not handled.
    // Depending on browser behavior, this might or might not be an issue.
    // For this test, we just ensure it doesn't crash and essential classes are there.
    // A more robust component might define a default color.
    // Checking for the presence of "undefined" as a class can be tricky.
    // Let's check that common classes are there and specific color classes are NOT.
  });
});
