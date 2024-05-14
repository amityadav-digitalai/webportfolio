---
title: Integrate TeamForge with Digital.ai Platform Identity Service
id: teamforge-integrating-with-identity-service
category: ''
keywords: 
- saml
- external authentication
- identity management
- single sign on
- SSO
tags: 
- sso
- authentication
- site_admin_tasks
- saml]
last_updated: May 29, 2023
Summary: You can query the database if you are a site administrator or have been given
  access to System Tools by another site administrator.
---

## TeamForge SSO using Digital.ai Platform Identity Service {#teamforgedaisaml}

TeamForge supports inbuilt Digital.ai-managed users and single sign-on (SSO) connections that provide multi-tenant SaaS as well as single-tenant on-premises configurations for authentication via web portals or back-end services.

You need to follow this procedure to integrate your SAML compliant IDP with Digital.ai Identity Service and later integrate Digital.ai TeamForge with the Digital.ai Identity Service.

For more information, see: [Digital.ai Platform Documentation](https://docs.digital.ai/bundle/dai-platform/page/index.html) to learn more about the Digital.ai Platform Identity Service.

### Step 1—Get Digital.ai TeamForge URL
As a first step, you must have the Digital.ai TeamForge installed. Once installed, gather and keep the TeamForge URL handy.

### Step 2—Create Your Digital.ai Platform Account
1. You must [contact the Digital.ai Support](https://support.digital.ai/) team to get this account created.
   For more information, see [Account Setup](https://docs.digital.ai/bundle/dai-platform/page/getting_started.html#account-setup).

### Step 3—Download the SAML config descriptor from Digital.ai Platform Identity
1. Log in to the Digital.ai Platform.
2. Go to **Admin** > **Clients**.
3. Click the **Download SAML config** to download SAML config descriptor in your local.

### Step 4—Configure the SAML parameters in the TeamForge
1. Login as a site admin in **TeamForge** application.
2. Navigate to **SAML** tab and configure the following SAML parameters:
   * **IDP ENTITY ID**: Copy and paste the **entityID** from the SAML config descriptor.
   *  **IDP SINGLE SIGN ON URL**: Copy and paste the **Location** of **SingleSignOnService** element from the SAML config descriptor.
   *  **IDP X509 CERTIFICATE**:  Copy and paste the **X509Certificate** from the SAML config descriptor.
   *  **SERVICE PROVIDER ENTITY ID**: A unique IDP entity name not more than 63 characters. 
   *  **ASSERTION CONSUMER SERVICE URL**: `https://tf-domain/sf/saml/callback`
   *  **SERVICE PROVIDER LOGOUT URL**: `https://tf-domain/sf/saml/logout/callback` 
   *  **MAP EMAIL TO USERNAME**: **true**
3. Click **Save** to save the configuration.

### Step 5—Add TeamForge as a SAML Client in the Digital.ai Platform Identity Service
1. Login to the Digital.ai Platform.
2. Go to **Admin** > **Clients** > **Add SAML Client**.
3. In **Name**, enter a client’s name (for example, TeamForge).
4. In **Display Name**, enter a display name for the client.
5. In **Description**, give a short description for the client.
6. Check the **Enabled** checkbox to initiate client login.
7. Check the following SAML client configuration checkboxes:
   * Include AuthnStatement
   * Sign Documents
   * Force POST Binding
   * Force channel logout
   * Force Name ID Format
8.	In **Name ID Format**, choose **Email**.
9.	In **Add Valid redirect URI** enter `https://tf-domain/*`.
10. In **Assertion Consumer Service POST Binding URL** enter `https://tf-domain/sf/saml/callback`.

**Note**: The **Assertion Consumer Service POST Binding URL** must be same as **ASSERTION CONSUMER SERVICE URL** in step 4.

11. Click **Create client**.
    Once you create a client it appears on the **Clients** listing page.
    For more information, see [Add SAML Client](https://docs.digital.ai/bundle/dai-platform/page/clients.html#add-saml-client).

#### Step 6—Set up a Local Admin User to Manage Your Digital.ai Platform Account
Create a non-admin user in the Digital.ai platform account.
For more information, see [Set up Local Users](https://docs.digital.ai/bundle/dai-platform/page/users.html#add-a-local-user).

### Step 7—Connect Digital.ai TeamForge to the Digital.ai Platform
Digital.ai TeamForge has no direct support for SAML. However, you can integrate TeamForge as an SAML client with the Digital.ai Platform Identity Service and in turn connect the Digital.ai Platform Identity Service to your SAML-compliant IDP.

**Prerequisite**: Ensure that the newly created platform identity user must not exist in TeamForge database.

Do the following to connect Digital.ai TeamForge with the Digital.ai Platform.
1.	Open a browser and login to TeamForge application that redirects to Platform Identity login page.
2.	Login with a non-admin user which was created in the Digital.ai platform account.
3.	You will redirect to Create SAML user page in TeamForge after the successful authentication.
4.	Click **Save**.

**Note**: User will be redirected to **My workspace** if the user already exists in the TeamForge database.
For more information, see [Use SAML for TeamForge User Authentication](./saml).

Your SSO setup is completed.

## TeamForge SSO using Third-party Identity Provider (IDP) via Digital.ai Platform Identity Service {#teamforgedaiidp}

You can integrate the TeamForge with SAML-compliant external IDPs via the **Digital.ai Identity Service** that supports multiple protocols, configuration changes with almost nil downtime, and also supports user-friendly workflows for common tasks.

As an administrator, you can connect the Digital.ai Platform to Azure Active Directory (Azure AD) to create a seamless login experience for your users when they log in to Digital.ai applications and portals. You only need to follow this procedure if your company uses Azure AD as an identity provider. For more information, see [Add SAML SSO Connection](https://docs.digital.ai/bundle/dai-platform/page/sso_azuread.html#add-saml-sso-connection).

### Step 1—Get Digital.ai TeamForge URL
As a first step, you must have the Digital.ai TeamForge installed. Once installed, gather and keep the TeamForge URL handy.

### Step 2—Create Your Digital.ai Platform Account
You must [contact the Digital.ai Support](https://support.digital.ai/) team to get this account created.
For more information, see [Account Setup](https://docs.digital.ai/bundle/dai-platform/page/getting_started.html#account-setup).

### Step 3—Configure TeamForge in a Third Party IDP (Azure)
You must configure the SAML IdP with the details of TeamForge, who in this case is the SAML Service Provider.
For more information, see [Setting up TeamForge in a SAML-compliant Third-party IdP Environment](saml#setting-up-teamforge-in-a-saml-compliant-third-party-idp-environment).

### Step 4—Create Connection in Your Digital.ai Platform Account
"**Prerequisite**: You must have the **Single Sign-On Service URL** handy from Azure IDP.

1. Log in to the Platform as an administrator.*
2. In the left navigation, under SSO, click **Identity providers**, then click the **Add identity provider** button.
   * Alternatively, you can click the **Setup identity provider** on the Platform Platform overview page.
3. In **Select Authentication Service**, choose the **Add SAML provider** radio button.
4. In **Select identity provider**, choose **Azure AD** for setting up the authentication.
5. In **IdP display name**, add a unique, user-friendly name for the IdP. This name will appear on the Digital.ai Platform login page.
6. Click **Next**.
7. On the **Config IDP and metadata** page, copy the **Redirect URI** and **Service Provider Entity ID** and save them for later in this procedure.
8. Select **I want to manually configure the identity provider** for configuring the metadata.
9. Click **Next**.
10. In **SAML Configuration**, provide the **Single Sign-On Service URL** from the external Identity Provider (Azure).
11. Click **Next**.
12. In **SAML Advanced Configuration**, provide the **Single Logout Service URL** from the external Identity Provider (Azure).
13. From the **NameID Policy Format** dropdown list, choose **Email**.
14. From the **Principal Type** dropdown list, choose **Subject NameID**.
15. Check **HTTP-POST Binding Response** and **HTTP-POST Binding for AuthnRequest** check boxes.
16. Click **Next**.
17. In **Identity provider display name**, click **Create identity provider**.

### Step 5—Update Newly Created Identity Provider SAML Configuration
1. In **Identity Providers** listing page, click **Edit** icon of the newly created Identity provider.
2. Select **SAML Configuration** and add the **Signing certificate** provided by the external identity provider.
3. Click **Save Changes**.

### Step 6— Update External IDP with DAI Platform Identity Provider Configuration Parameters
Edit the following basic SAML configuration in the external IDP:
1. Identifier (entityID): Service Provider Entity ID
2. Reply URL (Assertion Consumer Service URL): Redirect URI

### Step 7—Connect TeamForge with External IDP (Azure) and Digital.ai Platform Identity Provider
1. Login to TeamForge application.
2. Sign in to your account with IDP created in DAI Platform.
3. Login with your Microsoft user account.

You are redirected to TeamForge **My Workspace**.

Your SSO setup is completed.
