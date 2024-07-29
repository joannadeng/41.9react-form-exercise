import {render} from '@testing-library/react';
import Box from './Box';

it ('it should render without crashing', () => {
    render(<Box />)
})

it ("should match snapshot", () => {
    const {asFragment} = render(<Box id={1} color={"red"} width={30} height={40}/>);
    expect(asFragment()).toMatchSnapshot()
})

