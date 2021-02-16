This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This site uses incrimental static regeneration in order to keep requests to the underlying ergast api low. Pages are regenerated at most once per 24 hours.


Sitemap 
- / (Next Race, Current Standings, Last Race)
- /schedule/:season (defaults to current year)
- /standings/:season (Defaults to drivers, tab to show constructors)
- /race/:season/:round (Info, Results, Qualfying)


#TODO 
- Impliment Season Selector
- Race overview pages
    - Info 
    - Qualifiying results
    - Race Results
    - Lap Times
- Driver pages?
    - 
