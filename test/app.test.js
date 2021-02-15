describe('React application home page', () => {
    it("Verify that the applinks says Learn React", () => {
        browser.url('/')
        let text= $(".navbar-brand").getText()

        console.log(text)
    })
})

// 7:44 https://dev.to/ailuj876/deploy-react-app-to-heroku-using-gitlab-ci-cd-pipeline-test-in-the-pipeline-with-webdriverio-g18  