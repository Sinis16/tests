import { render, screen, fireEvent } from "@testing-library/react"
import Like from "../like";

test('Default 0 likes', () => {
    render(<Like />);
    expect(screen.getByText('Likes: 0')).toBeInTheDocument();
  });

  test('Default 1 likes', () => {
    render(<Like />);
    const likeButton = screen.getByText("Like");
    fireEvent.click(likeButton);
    expect(screen.getByText('Likes: 1')).toBeInTheDocument();
  });

  test('Default -1 likes', () => {
    render(<Like />);
    const likeButton = screen.getByText("Dislike");
    fireEvent.click(likeButton);
    expect(screen.getByText('Likes: -1')).toBeInTheDocument();
  });
