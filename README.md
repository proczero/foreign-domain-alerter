# Foreign Domain Alerter

Automatically alert the user when a foreign domain is entered into the to, cc or bcc fields.

Currently supports only Gmail in Chrome.
User will need to specify their domain in the settings.
User has optional ability to change colors of severity in the settings.

This can be set by clicking the Extension Icon, entering your domain such as 'gmail.com' (no wildcards) in the domain field and click the save button.

Design purpose is for enterprise gmail use, where one may want visual warnings against accidentally adding people outside of your company to emails.
Currently three basic levels.

safe - All addresses are in your current domain. IE, if you are emailing from an @gmail.com address, all your targets are also in the @gmail.com.
caution - There is at least one foreign domain in your address list.
warn - There are at least 2 or more foreign domains in your address list.

At this time this extension does not track the amount of foreign addresses of a certain type or have any exception rules. IE, 
If you are emailing from an @gmail.com address and have the following addresses in the 'to:' field, test@yahoo.com, tester@yahoo.com, support@yahoo.com, 
The color will remain yellow while any of the previous emails are in the field. In other words, it does not warn you HOW MANY of the same foreign domains
are in your address list.

Things to do when I have the time:
- Multi-browser support
- Multi-web email client support


