import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className=' blog_style inter'>
        <div className='p-8'>
            <div>
                <h4 className='font-bold text-2xl'>1. What is the purpose of <span className='font-extrabold roboto text-3xl text-yellow-300'>React Router</span>?</h4><br />
                <p className='px-8'>
                React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. <br /> <br />
                React Router plays an important role to display multiple views in a single page application. Without React Router, it is not possible to display multiple views in React applications. Most of the social media websites like Facebook, Instagram uses React Router for rendering multiple views.
                </p>
            </div><br /><br />
            <div>
                <h4 className='font-bold text-2xl'>2. How Does <span className='font-extrabold roboto text-3xl text-yellow-300'>Context API</span> works?</h4>
                <br />
                <p className='px-8'>
                Context is a built-in API introduced in React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props. <br /> <br />
                The React Context API is a way for a React app to effectively produce global variables that can be passed around.  <br />
                Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
                </p>
            </div><br /><br />
            <div>
                <h4 className='font-bold text-2xl'>3. What is <span className='font-extrabold roboto text-3xl text-yellow-300' >'useHref()'</span> hook?</h4>
                <br />
                <p className='px-8'>
                The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax: const refContainer = useRef(initialValue); The useRef returns a mutable ref object.
                    <br /><br />
                    Use useRef if you need to manage focus, text selection, trigger imperative animations or integrating third-party libraries.
                    <br /><br />
                    useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
                </p>
            </div>
        </div>
        </div>
    );
};

export default Blog;