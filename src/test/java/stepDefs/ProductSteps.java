package stepDefs;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import io.cucumber.java.en.Then;

public class ProductSteps {

	WebDriver driver = BaseClass.driver;

	@Then("I compare the prices of following products")
	public void i_compare_the_prices_of_following_products(Map<String, String> orders) {
		for (String orderItem : orders.keySet()) {
			String actualPrice = driver.findElement(By.xpath("//div[@class=\"inventory_item_name\"][text()='"
					+ orderItem + "']//following::div[@class=\"inventory_item_price\"]")).getText();
			String expPrice = orders.get(orderItem);
			Assert.assertEquals(expPrice, actualPrice);
		}
	}
}
