import type{ NavItems } from './types'

export const NAV_ITEMS: NavItems = {
    home: {
        path: '/',
        title: 'home'
    },
    blog: {
        path: '/blog',
        title: 'blog'
    },
    tags: {
        path: '/tags',
        title: 'tags'
    },
    media: {
        path: '/media',
        title: 'media'
    },
    about: {
        path: '/about',
        title: 'about'
    }
}

export const SITE = {
    // Your site's detail?
    name: 'Andrew Tarabin',
    title: 'Andrew Tarabin',
    description: 'Welcome to my blog',
    url: 'https://andrewtarabin.com',
    githubUrl: 'https://github.com/theanatar',
    listDrafts: true
    // description ?
}

export const PAGE_SIZE = 8
