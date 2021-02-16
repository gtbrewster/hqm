describe('React application home page', () => {
    it("Verify that the applinks says Learn React", () => {
        browser.url('/')
        let text= $(".navbar-brand").getText()

        console.log(text)
    })
})

// 7:44 https://dev.to/ailuj876/deploy-react-app-to-heroku-using-gitlab-ci-cd-pipeline-test-in-the-pipeline-with-webdriverio-g18  
// 13:23
{/*
    heroku git:remote -a hqm-qa 
    heroku git:remote -a hqm-prod
    git pull
    git add .
    git commit -m "message"
git push heroku master
git push origin master


*/}