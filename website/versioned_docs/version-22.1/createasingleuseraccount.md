---
Summary: To participate in a TeamForge site, a person must have a user account on
  that site. TeamForge administrators can create these user accounts. This topic applies
  to sites with no LDAP authentication.
category: ''
id: createasingleuseraccount
keywords:
- user management
- roles
- rbac
lastUpdatedAt: Feb 22, 2019
product: teamforge
tags:
- site_admin_tasks
- users
- role_based_access_control
- license
- ldap
- authentication
- saml
title: Create a Single User Account
---

![](/docs/assets/images/status-success-small.png) If your TeamForge site uses LDAP authentication, TeamForge administrators cannot create new user accounts. On a site with LDAP authentication, each user must log into TeamForge using his or her LDAP credentials.
<br></br>
![](/docs/assets/images/status-success-small.png) On sites with LDAP/SAML/SAML+LDAP integrations, site administrators can designate select users that do not have a SAML or LDAP account as local users. Local users can log on to TeamForge using just the TeamForge credentials while bypassing the SAML/LDAP/SAML+LDAP authentication realms. A local user can also change and reset his password. For more information, see [ALLOW LOCAL USER](./siteadmin-configuresiteviaui#allowlocaluser).

1. Go to **My Workspace > Admin**.
2. Click **USERS** from the **Projects** menu.
3. Click the drop-down arrow next to **Create** and click **Single User**.
4. On the **Create User** page, enter the field values appropriately.
   1. Enter a user name for the user.

      Your user name must meet these criteria:
      * User name is case-sensitive. However, to make usernames case-insensitive set the site-options token [ALLOW_CASE_INSENSITIVE_LOGIN](./siteoptiontokens#allowcaseinsensitivelogin) to `true`.
      * Minimum number of characters as specified in the site-options.conf file.
      * No spaces.
      * Should have at least one letter.
      * The first character is a letter.
   2. Enter and confirm a password for the user, if you prefer to set the user's password yourself.
      :::tip
      To invite users to create their own password, leave the PASSWORD field blank. A password ticket email will be sent to users to let them create a password.
      :::
   1. Enter the **FULL NAME** and **EMAIL ADDRESS** of the user.
      :::tip
      You can add more email addresses for the user after you finish creating their profile.
      :::
   1. Enter the user's organization.

      Organization can be a geographic designation, a corporate division, or whatever you want. It's advised to keep it consistent across your site.
   2. Select the language from the **LOCALE** drop-down list.
      :::note
      TeamForge supports English, Chinese, Japanese and Korean languages.
      :::
   1. From the **TIME ZONE** drop-down list, select the preferred time zone for the user.
      :::important
      Selecting the time zone overrides the default time zone set by the site options token, [DISPLAY_TIMEZONE](./siteoptiontokens#displaytimezone). It reflects in all the email notifications and TeamForge pages excluding integrated application pages.
      :::
   1. Choose the user's TeamForge LICENSE TYPE. 
      * You can assign users a combination of multiple license types such as ALM and SCM.
      ![](/docs/assets/images/createanuser_licensing.PNG)
   2. Choose a user type. You can choose only one user type for each user.
      * SITE ADMIN: Administrators have unlimited access to all the data in TeamForge.
      * RESTRICTED USER: Restricted users can only access projects of which they are members.
        :::important
        If you do not select **RESTRICTED USER**, the user will be unrestricted and able to access all projects that have not been made private by a project administrator.
        :::
   1. To send a welcome message to the user, select **SEND WELCOME MESSAGE?**.
1. Click **Create**.
   
   The user account is created.

