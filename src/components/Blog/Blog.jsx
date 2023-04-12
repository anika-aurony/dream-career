import React from 'react';

const Blog = () => {
    return (
        <div className='blog ps-2 '>
            <h2 className='text-center'>Questions Answer</h2>
            <h2 className='mt-4'>1. When should you use context API?</h2>

            <p>Context API should used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.</p>

            <h2>2. What is a custom hook?</h2>

            <p>A custom hook is a special JavaScript function whose name starts with 'use' and can be used to call other hooks. When you have component logic that needs to be used by multiple components, we can extract that logic to a custom Hook. Custom Hooks start with "use". </p>

            <h2>3. What is useRef?</h2>

            <p>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current. The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>

            <h2>4. What is useMemo?</h2>

            <p>useMemo is a React Hook that lets you cache the result of a calculation between re-renders. The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. </p>
        </div>
    );
};

export default Blog;