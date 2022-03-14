
import { render, screen } from '@testing-library/react'

import MenuHeader from '.'

describe('<MenuHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(<MenuHeader />)

    expect(screen.getByRole('heading', { name: /MenuHeader/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
