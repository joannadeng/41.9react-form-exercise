import {render} from '@testing-library/react';
import Todo from './Todo';

it ('it should render without crashing', () => {
    render(<Todo />)
})

it ("should match snapshot", () => {
    const {asFragment} = render(<Todo id={1} task={"do chores"}/>);
    expect(asFragment()).toMatchSnapshot()
})

