package stepDefs;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class LoginSteps {

	WebDriver driver = BaseClass.driver;

	@Given("I'm on login page of the application")
	public void i_m_on_login_page_of_the_pplication() {
		driver.get("https://www.saucedemo.com");
	}

	@When("I enter username {string}")
	public void i_enter_username_username(String userName) {
		WebElement usernameElemnt = driver.findElement(By.xpath("//input[@id='user-name']"));
		usernameElemnt.sendKeys(userName);
	}

	@When("I enter password {string}")
	public void i_enter_password_password(String pwd) {
		WebElement pwdElemnt = driver.findElement(By.xpath("//input[@id='password']"));
		pwdElemnt.sendKeys(pwd);
	}

	@When("I click on login button")
	public void i_click_on_login_button() {
		WebElement pwdElemnt = driver.findElement(By.xpath("//input[@id=\"login-button\"]"));
		pwdElemnt.click();
	}

	@Then("I should be landed on home page")
	public void i_should_be_landed_on_home_page() throws InterruptedException {
		Thread.sleep(1000);
		WebElement appLogoElmnt = driver.findElement(By.xpath("//div[@class=\"app_logo\"]"));
		Assert.assertTrue(appLogoElmnt.isDisplayed());
	}

	@Then("I should get the error message as {string}")
	public void i_should_get_the_error_message_as(String errorMsg) {
		String actualError = driver.findElement(By.xpath("//div[@class='error-message-container error']//h3"))
				.getText();
		Assert.assertEquals(errorMsg, actualError);
	}

}
