import {render} from '@testing-library/react';
import BoxList from './BoxList';

it ('it should render without crashing', () => {
    render(<BoxList />)
})

it ("should match snapshot", () => {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot()
})

