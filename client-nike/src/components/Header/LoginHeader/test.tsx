
import { render, screen } from '@testing-library/react'

import LoginHeader from '.'

describe('<LoginHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(<LoginHeader />)
    expect(screen.getByRole('heading', { name: /LoginHeader/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
