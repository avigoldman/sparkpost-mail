# SparkPost for Meteor
#### Send emails using SparkPost as the SMTP server

## What is SparkPost?
tl;dr - SparkPost is a cloud email delivery service. It's easy to get started with either SMTP or their REST API.

SparkPost is the world’s #1 email delivery and analytics provider. Our customers send over 3 trillion messages a year, 37% of B2C and B2B email.

## Get Started with SparkPost
1. [Sign up](https://app.sparkpost.com/sign-up) for a SparkPost account
2. [Add](https://support.sparkpost.com/customer/en/portal/articles/1933318-creating-sending-domains) and [verify](https://support.sparkpost.com/customer/portal/articles/1933360-verify-sending-domains) a sending domain
3. [Configure SMTP](https://app.sparkpost.com/onboarding/smtp) and save the password

# Setup
### Install
Add this package using the following command
```bash
meteor add agoldman:sparkpost-mail
```

### Example
```javascript
import { Meteor } from 'meteor/meteor';
import { Sparkpost } from 'meteor/agoldman:sparkpost-mail';

Meteor.startup(() => {
    // configure Sparkpost
    Sparkpost.config('YOUR SMTP PASSWORD');

    // Send an email
    Sparkpost.send({
  	    from: 'postmaster@<YOUR SENDING DOMAIN>.com',
  	    to: 'avi.goldman@sparkpost.com',
  	    subject: 'Your Email Subject',
  	    text: 'Message'
    });
});
```

# Documentation
### config([options])
* `password` An SparkPost API Key that has SMTP permissions 
* `username` Username for SMTP account - defaults to `SMTP_Injection`
* `port` Port for SMTP - defaults to `587`
* `host` Host for SMTP - defaults to `smtp.sparkpostmail.com`
* `from` Sets default sending email if none is specified in the `send` function
* `subject` Sets default subject if none is specified in the `send` function
* `headers` Sets default headers if none are specified in the `send` function
* `secure` Boolean to set the connection to `smtps` or `smtp`. Defaults to `false`

### send([options])
##### This is a wrapper function that fills in any defaults specified during configuration before passing the options off to the `Email.send` function.
##### [See documention](https://docs.meteor.com/api/email.html)
