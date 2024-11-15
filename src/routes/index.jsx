import {Home} from '../pages/home/Home.jsx';
import {Post} from '../pages/post/Post.jsx';
import {Contato} from '../pages/contato/Contato.jsx';
import React from 'react';

const components = {
    Home,
    Post,
    Contato
}

export const routes = Object.keys(components).map((route) => ({path: `/${route[0].toLowerCase()+route.slice(1)}`, element:React.createElement(components[route])}));