
import {render, screen, cleanup} from '@testing-library/react'
import InputField from "./InputField";
import '@testing-library/jest-dom'

test('should render inputField component', ()=>{
    render(<InputField/>);
    const formElement= screen.getByTestId('render-input'); 
    expect(formElement).toBeInTheDocument();
});