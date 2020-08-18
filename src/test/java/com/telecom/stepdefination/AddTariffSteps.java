package com.telecom.stepdefination;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class AddTariffSteps {

	static WebDriver driver;
	@Given("User launch the telecom site")
	public void user_launch_telecom_site() {
	    System.setProperty("webdriver.chrome.driver",".//driver//Chrome83//chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.get("http://www.demo.guru99.com/telecom/");
	    driver.manage().window().maximize();
	}
	
	@Given("User Click on Add Tariff Plan button")
	public void user_Click_on_Add_Tariff_Plan_button() throws Exception {
	WebElement tar = driver.findElement(By.xpath("(//a[@href='addtariffplans.php'])[1]"));
	tar.click();
	}

	@When("User filling up all the details of the tariff plan")
	public void user_filling_up_all_the_details_of_the_tariff_plan() throws Exception {
	handleFrame();
		driver.findElement(By.id("rental1")).sendKeys("200");
		driver.findElement(By.id("local_minutes")).sendKeys("100");
		driver.findElement(By.id("inter_minutes")).sendKeys("150");
		driver.findElement(By.id("sms_pack")).sendKeys("100");
		driver.findElement(By.id("minutes_charges")).sendKeys("1");
		driver.findElement(By.id("inter_charges")).sendKeys("5");
		driver.findElement(By.id("sms_charges")).sendKeys("1");
	}
	
	@When("User filling up all the details of the tariff plan with one dim list")
	public void user_filling_up_all_the_details_of_the_tariff_plan_with_one_dim_list(DataTable datas) throws InterruptedException {
	    List<String> cusdatas = datas.asList();
	    handleFrame();
		driver.findElement(By.id("rental1")).sendKeys(cusdatas.get(0));
		driver.findElement(By.id("local_minutes")).sendKeys(cusdatas.get(1));
		driver.findElement(By.id("inter_minutes")).sendKeys(cusdatas.get(2));
		driver.findElement(By.id("sms_pack")).sendKeys(cusdatas.get(3));
		driver.findElement(By.id("minutes_charges")).sendKeys(cusdatas.get(4));
		driver.findElement(By.id("inter_charges")).sendKeys(cusdatas.get(5));
		driver.findElement(By.id("sms_charges")).sendKeys(cusdatas.get(6));
	}
	
	@When("User filling up all the details of the tariff plan with one dim map")
	public void user_filling_up_all_the_details_of_the_tariff_plan_with_one_dim_map(DataTable datas2) throws InterruptedException {
		Map<String, String> cusdatas = datas2.asMap(String.class, String.class);
		handleFrame();
		driver.findElement(By.id("rental1")).sendKeys(cusdatas.get("Rent"));
		driver.findElement(By.id("local_minutes")).sendKeys(cusdatas.get("Flm"));
		driver.findElement(By.id("inter_minutes")).sendKeys(cusdatas.get("Fim"));
		driver.findElement(By.id("sms_pack")).sendKeys(cusdatas.get("Fsp"));
		driver.findElement(By.id("minutes_charges")).sendKeys(cusdatas.get("Lpm"));
		driver.findElement(By.id("inter_charges")).sendKeys(cusdatas.get("Ipm"));
		driver.findElement(By.id("sms_charges")).sendKeys(cusdatas.get("Spc"));		
	}
	
	@When("User filling up all the details of the tariff plan with two dim list")
	public void user_filling_up_all_the_details_of_the_tariff_plan_with_two_dim_list(DataTable datas) throws InterruptedException {
		List<List<String>> cusdatas = datas.asLists();
	    handleFrame();
		driver.findElement(By.id("rental1")).sendKeys(cusdatas.get(0).get(1));
		driver.findElement(By.id("local_minutes")).sendKeys(cusdatas.get(1).get(2));
		driver.findElement(By.id("inter_minutes")).sendKeys(cusdatas.get(0).get(3));
		driver.findElement(By.id("sms_pack")).sendKeys(cusdatas.get(3).get(2));
		driver.findElement(By.id("minutes_charges")).sendKeys(cusdatas.get(4).get(2));
		driver.findElement(By.id("inter_charges")).sendKeys(cusdatas.get(2).get(1));
		driver.findElement(By.id("sms_charges")).sendKeys(cusdatas.get(1).get(0));
	}
	
	@When("User filling up all the details of the tariff plan with two dim map")
	public void user_filling_up_all_the_details_of_the_tariff_plan_with_two_dim_map(DataTable datas) throws InterruptedException {
		List<Map<String, String>> cusdatas = datas.asMaps(String.class, String.class);
	    handleFrame();
		driver.findElement(By.id("rental1")).sendKeys(cusdatas.get(0).get("Rent"));
		driver.findElement(By.id("local_minutes")).sendKeys(cusdatas.get(1).get("Flm"));
		driver.findElement(By.id("inter_minutes")).sendKeys(cusdatas.get(2).get("Fim"));
		driver.findElement(By.id("sms_pack")).sendKeys(cusdatas.get(3).get("Fsp"));
		driver.findElement(By.id("minutes_charges")).sendKeys(cusdatas.get(4).get("Lpm"));
		driver.findElement(By.id("inter_charges")).sendKeys(cusdatas.get(2).get("Ipm"));
		driver.findElement(By.id("sms_charges")).sendKeys(cusdatas.get(1).get("Spc"));
	}
	
	@When("User clicks the submit button")
	public void user_clicks_the_submit_button() throws Exception {
		WebElement sub = driver.findElement(By.xpath("//input[@type='submit']"));
		sub.click();
	}

	@Then("User will be displayed with congratulation message")
	public void user_will_be_displayed_with_congratulation_message() throws Exception {
		handleFrame();
		String text = driver.findElement(By.tagName("h2")).getText();
		System.out.println(text);
		driver.close();
	}
	public void handleFrame() throws InterruptedException {
		try {
		Thread.sleep(5000);
		driver.switchTo().frame("flow_close_btn_iframe");
		driver.findElement(By.xpath("//div [@id = 'closeBtn']")).click();
		driver.switchTo().defaultContent();
	}catch (Exception e) {
		// TODO: handle exception
	}

		}
}
