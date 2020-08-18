package com.telecom.stepdefination;

import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class AddCustomerSteps {
	static WebDriver driver;
	@Given("User launch telecom site")
	public void user_launch_telecom_site() {
	    System.setProperty("webdriver.chrome.driver",".//driver//Chrome83//chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.get("http://www.demo.guru99.com/telecom/");
	    driver.manage().window().maximize();
	}
	@Given("User Click on add customer button")
	public void user_Click_on_add_customer_button() {
		driver.findElement(By.xpath(" (//a[text()='Add Customer'])[1]")).click();	
	}
	@When("User filling up all the details")
	public void user_filling_up_all_the_details() throws InterruptedException {
		handleFrame();
		driver.findElement(By.xpath("//label[@for = 'done']")).click();
		driver.findElement(By.id("fname")).sendKeys("thamizh");
		driver.findElement(By.id("lname")).sendKeys("selvan");
		driver.findElement(By.id("email")).sendKeys("xyz@gmail.com");
		driver.findElement(By.name("addr")).sendKeys("Ariyalur");
		driver.findElement(By.id("telephoneno")).sendKeys("987654321");
	}
	
	@When("User filling up all the details with one dim list")
	public void user_filling_up_all_the_details_with_one_dim_list(DataTable datas) throws InterruptedException {	
		List<String> cusDatas = datas.asList();
		handleFrame();
		driver.findElement(By.xpath("//label[@for = 'done']")).click();
		driver.findElement(By.id("fname")).sendKeys(cusDatas.get(0));
		driver.findElement(By.id("lname")).sendKeys(cusDatas.get(1));
		driver.findElement(By.id("email")).sendKeys(cusDatas.get(2));
		driver.findElement(By.name("addr")).sendKeys(cusDatas.get(3));
		driver.findElement(By.id("telephoneno")).sendKeys(cusDatas.get(4));
		
	    }
	
	@When("User filling up all the details with one dim map")
	public void user_filling_up_all_the_details_with_one_dim_map(DataTable datas) throws InterruptedException {	
		Map <String,String> cusDatas = datas.asMap(String.class,String.class);
		handleFrame();
		driver.findElement(By.xpath("//label[@for = 'done']")).click();
		driver.findElement(By.id("fname")).sendKeys(cusDatas.get("Fname"));
		driver.findElement(By.id("lname")).sendKeys(cusDatas.get("Lname"));
		driver.findElement(By.id("email")).sendKeys(cusDatas.get("email"));
		driver.findElement(By.name("addr")).sendKeys(cusDatas.get("address"));
		driver.findElement(By.id("telephoneno")).sendKeys(cusDatas.get("phonumber"));
	}
	@When("User filling up all the details with two dim list")
	public void user_filling_up_all_the_details_with_two_dim_list(DataTable datas) throws InterruptedException {	
		List<List<String>> cusDatas = datas.asLists();
		handleFrame();
		driver.findElement(By.xpath("//label[@for = 'done']")).click();
		driver.findElement(By.id("fname")).sendKeys(cusDatas.get(0).get(0));
		driver.findElement(By.id("lname")).sendKeys(cusDatas.get(0).get(1));
		driver.findElement(By.id("email")).sendKeys(cusDatas.get(0).get(2));
		driver.findElement(By.name("addr")).sendKeys(cusDatas.get(0).get(3));
		driver.findElement(By.id("telephoneno")).sendKeys(cusDatas.get(0).get(4));
		
	    }
	@When("User filling up all the details with two dim map")
	public void user_filling_up_all_the_details_with_two_dim_map(DataTable datas) throws InterruptedException {	
		List<Map<String, String>> cusDatas = datas.asMaps(String.class, String.class);
		handleFrame();
		driver.findElement(By.xpath("//label[@for = 'done']")).click();
		driver.findElement(By.id("fname")).sendKeys(cusDatas.get(0).get("FirstN"));
		driver.findElement(By.id("lname")).sendKeys(cusDatas.get(0).get("LastN"));
		driver.findElement(By.id("email")).sendKeys(cusDatas.get(0).get("Mail"));
		driver.findElement(By.name("addr")).sendKeys(cusDatas.get(0).get("Addr"));
		driver.findElement(By.id("telephoneno")).sendKeys(cusDatas.get(0).get("Phono"));
		
	    }
	@When("User filling up all the details {string},{string},{string},{string},{string}")
	public void user_filling_up_all_the_details(String fna, String lna, String email, String add, String po) throws InterruptedException {
		handleFrame();
		driver.findElement(By.xpath("//label[@for = 'done']")).click();
		driver.findElement(By.id("fname")).sendKeys(fna);
		driver.findElement(By.id("lname")).sendKeys(lna);
		driver.findElement(By.id("email")).sendKeys(email);
		driver.findElement(By.name("addr")).sendKeys(add);
		driver.findElement(By.id("telephoneno")).sendKeys(po);
	}
	
	@When("User click on submit button")
	public void user_click_on_submit_button(){
			driver.findElement(By.xpath("(//input[@type='submit'])[1]")).click();
	}
	
	@Then("User will be displayed customer id is generated")
	public void user_will_be_displayed_customer_id_is_generated() throws InterruptedException {
		handleFrame();
		Assert.assertTrue(driver.findElement(By.xpath("(//td[@align='center'])[2]")).isDisplayed());
		driver.findElement(By.xpath("(//td[@align= 'center'])[2]")).getText();
		System.out.println("text");
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