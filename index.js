// below line can be written as -> import express from "express"
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
  "login": "Caliber619",
  "id": 101935676,
  "node_id": "U_kgDOBhNqPA",
  "avatar_url": "https://avatars.githubusercontent.com/u/101935676?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Caliber619",
  "html_url": "https://github.com/Caliber619",
  "followers_url": "https://api.github.com/users/Caliber619/followers",
  "following_url": "https://api.github.com/users/Caliber619/following{/other_user}",
  "gists_url": "https://api.github.com/users/Caliber619/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Caliber619/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Caliber619/subscriptions",
  "organizations_url": "https://api.github.com/users/Caliber619/orgs",
  "repos_url": "https://api.github.com/users/Caliber619/repos",
  "events_url": "https://api.github.com/users/Caliber619/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Caliber619/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Kshitij Dev",
  "company": "Vellore Institute Of Technology (Vellore, Tamil Nadu)",
  "blog": "",
  "location": "Vellore",
  "email": null,
  "hireable": true,
  "bio": "🚀 M.Tech Software Engineering @ VIT Vellore | 🔐 Software Security | 🧠 NLP & ML Enthusiast | 💻 Full Stack Developer | 🎯 Continuous Learner | Ideas into code",
  "twitter_username": null,
  "public_repos": 25,
  "public_gists": 0,
  "followers": 3,
  "following": 9,
  "created_at": "2022-03-19T13:59:38Z",
  "updated_at": "2025-04-30T22:34:11Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res)=>{
    res.send("Caliber'sTwitter")
})

app.get('/login', (req, res)=>{
    res.send("<h1>please login at CalTechX</h1>")
})

app.get('/youtube',(req, res)=>{
    res.send("<h2>This is YouTube</h2>")
})

app.get('/github',(req, res)=> {
    res.json(githubData)
})

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})