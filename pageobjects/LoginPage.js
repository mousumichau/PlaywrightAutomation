class LoginPage {


    constructor(page){
        this.page =page;
        this.accountListbutton= page.locator("a#nav-link-accountList");
        this.signInbutton = page.locator("span.nav-action-inner");
        this.userName=  page.locator("input#ap_email");
        this.continue_button = page.locator("input#continue");
        this.password= page.locator("input#ap_password");
        this.login_button  =  page.locator("input#signInSubmit");

    }

    async goTo(){
        await this.page.goTo('https://www.amazon.com');
    }

    async validLogin(username, password){
        await this.accountListbutton.click();
        await this.signInbutton.click();
        await this.userName.fill(username);
        await this.continue_button.click();
        await this.password.fill(password);
        await this.login_button.click();

    }
    
}
module.exports  =  {LoginPage};