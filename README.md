# CV Creator

This application creates CV/Resume based on the template from https://github.com/yhabib/nextjs-pdf-cv-generator
The application is a based on:

- Next.js
- tailwindcss
- puppeteer
- PDFShift Api

For job seekers, to create their resume in pdf.
Note: When running in developer mode you can download resume from local using puppeteer. But when deployed on production as serverless deployment, you cannot download using puppeteer as puppeteer needs an active nodejs server. 
You need to create an account in PDFShift and use API key from there to download resume as pdf in production.
If you don't want to use PDFShift, run locally in dev environment.


To run it:

```
npm install
npm run dev                 // to run in dev mode
npm run build               // to create prod level build
npm run start               // to run application in production mode of prod build
```

You can read more about this [here](https://yusefhabib.com/blog/a-programmatically-generated-cv)