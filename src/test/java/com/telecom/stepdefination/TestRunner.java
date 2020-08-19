package com.telecom.stepdefination;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src//test//resources//Features",
				glue = "com.telecom.stepdefination",
				monochrome = true,
				plugin = {"html:target/cucumber-html-report","json:target/reports.json"},
				dryRun = false,
				tags = {"@smoke","@regression"})


public class TestRunner {


}
