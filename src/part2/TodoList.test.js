import {render,fireEvent} from '@testing-library/react';
import TodoList from './TodoList';

it ('it should render without crashing', () => {
    render(<TodoList />)
})

it ("should match snapshot", () => {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot()
})

it("should add new todo", function() {
    const {queryByText, getByLabelText} = render(<TodoList />);
    const input = getByLabelText("Task");
    const btn = queryByText("Add!");
    expect(queryByText('3:do chore')).not.toBeInTheDocument();
    fireEvent.change(input,{target:{value:'do chore'}});
    fireEvent.click(btn);
    expect(queryByText('3:do chore')).toBeInTheDocument();
})