
import {render, screen, cleanup} from '@testing-library/react'
import renderer from 'react-test-renderer'
import SingleTodo from './SingleTodo';
import '@testing-library/jest-dom'
import { create } from 'domain';

afterEach(()=> {
    cleanup();
})

test('should render SingleTodo not done component', ()=>{  
    let todo ={
        id:2,
        todo:"make wafles",
        isDone: false
    }
    render(<SingleTodo  todo ={todo}
        key={todo.id}
      />);
    const formElement= screen.getByTestId("render-singleTodo" ); 
    expect(formElement).toBeInTheDocument();

  
});

test('should render SingleTodo done component', ()=>{  
    let todo ={
        id:2,
        todo:"make wafles",
        isDone: true
    }
    render(<SingleTodo  todo ={todo}
        key={todo.id}
      />);
    const formElement= screen.getByTestId("render-singleTodo" ); 
    expect(formElement).toBeInTheDocument();

});

test('matches snapshot',()=>{
    let todo ={
        id:2,
        todo:"make wafles",
        isDone: false
    }

    const tree= renderer.create(<SingleTodo  todo ={todo} key={todo.id}/>).toJSON();

    expect(tree).toMatchSnapshot();
})