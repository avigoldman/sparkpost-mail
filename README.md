# Sparkpost for Meteor
#### Send emails using Sparkpost as the SMTP server

## What is Sparkpost?
tl;dr - Sparkpost sends up to emails for you. It's easy to get started.

SparkPost, by Message Systems, offers companies of all sizes the same leading email platform trusted by the world’s largest email senders, without requiring them to install and manage their own email systems. It is available in two editions to meet the diverse email needs of companies of any size. SparkPost.com allows organizations to easily integrate pay-as-you-go email delivery into their web and mobile applications in minutes using a credit card.  -- Sparkpost

## Get Started with Sparkpost
1. [Sign up](https://app.sparkpost.com/sign-up) for a sparkpost account
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
* `password` An Sparkpost API Key that has SMTP permissions 
* `username` Username for SMTP account - defaults to `SMTP_Injection`
* `port` Port for SMTP - defaults to `587`
* `host` Host for SMTP - defaults to `smtp.sparkpostmail.com`
* `from` Sets default sending email if none is specified in the `send` function
* `subject` Sets default subject if none is specified in the `send` function
* `headers` Sets default headers if none are specified in the `send` function

### send([options])
##### This is a wrapper function that fills in any defaults specified during configuration before passing the options off to the `Email.send` function.
##### [See documention](https://docs.meteor.com/api/email.html)
