$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("OrderPlacement.feature");
formatter.feature({
  "line": 1,
  "name": "Verify order placement on shoping site",
  "description": "",
  "id": "verify-order-placement-on-shoping-site",
  "keyword": "Feature"
});
formatter.before({
  "duration": 77292255327435,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify login functionality",
  "description": "",
  "id": "verify-order-placement-on-shoping-site;verify-login-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I go to signin page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \"loginid\" and \"password\" and click submit",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I go to Account page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginLogoutTest.i_go_to_signin_page()"
});
matter.result({
  "duration": 195096570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "loginid",
      "offset": 9
    },
    {
      "val": "password",
      "offset": 23
    }
  ],
  "location": "LoginLogoutTest.i_enter_and_and_click_submit(String,String)"
});
formatter.result({
  "duration": 2738025673,
  "status": "passed"
});
formatter.match({
  "location": "LoginLogoutTest.i_go_to_Account_page()"
});
formatter.result({
  "duration": 2252163362,
  "status": "passed"
});
formatter.after({
  "duration": 6500919,
  "status": "passed"
});
});