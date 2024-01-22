const express = require('express');
require('dotenv').config();

const app = express();

const port = 4000;

const githubData = {
    login: 'a092devs',
    id: 35004378,
    node_id: 'MDQ6VXNlcjM1MDA0Mzc4',
    avatar_url: 'https://avatars.githubusercontent.com/u/35004378?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/a092devs',
    html_url: 'https://github.com/a092devs',
    followers_url: 'https://api.github.com/users/a092devs/followers',
    following_url:
        'https://api.github.com/users/a092devs/following{/other_user}',
    gists_url: 'https://api.github.com/users/a092devs/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/a092devs/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/a092devs/subscriptions',
    organizations_url: 'https://api.github.com/users/a092devs/orgs',
    repos_url: 'https://api.github.com/users/a092devs/repos',
    events_url: 'https://api.github.com/users/a092devs/events{/privacy}',
    received_events_url:
        'https://api.github.com/users/a092devs/received_events',
    type: 'User',
    site_admin: false,
    name: 'Arsalan',
    company: null,
    blog: '',
    location: null,
    email: null,
    hireable: true,
    bio: 'Learning Python and Web Development',
    twitter_username: 'a092devs',
    public_repos: 24,
    public_gists: 0,
    followers: 37,
    following: 8,
    created_at: '2018-01-01T15:39:24Z',
    updated_at: '2024-01-13T12:36:21Z',
};

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/github', (req, res) => {
    res.json(githubData);
});

app.get('/login', (req, res) => {
    res.send('<h1>Please login to your account</h1>');
});

app.get('/youtube', (req, res) => {
    app.send('<h2>Chai aur Code</h2>');
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`);
});
