# Reference

## Brands

<details><summary><code>client.brands.<a href="/src/api/resources/brands/client/Client.ts">autofill</a>({ ...params }) -> Pinnacle.OptionalBrandInfo</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Automatically populate brand information based on partial input data you provide.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.brands.autofill({
    additional_info: "A developer-friendly, compliant API for SMS, MMS, and RCS, built to scale real conversations.",
    name: "Pinnacle",
    options: {
        forceReload: true,
    },
    website: "https://www.pinnacle.sh",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.AutofillBrandParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Brands.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.brands.<a href="/src/api/resources/brands/client/Client.ts">upsert</a>({ ...params }) -> Pinnacle.ExtendedBrand</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new brand or update an existing brand by with the provided information.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.brands.upsert({
    address: "500 Folsom St, San Francisco, CA 94105",
    contact: {
        email: "michael.chen@trypinnacle.app",
        name: "Michael Chen",
        phone: "+14155551234",
        title: "Customer Support Representative",
    },
    dba: "Pinnacle RCS",
    description: "A developer-friendly, compliant API for SMS, MMS, and RCS, built to scale real conversations.",
    ein: "88-1234567",
    email: "founders@trypinnacle.app",
    id: 1,
    name: "Pinnacle",
    sector: "TECHNOLOGY",
    type: "PRIVATE_PROFIT",
    website: "https://www.pinnacle.sh",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.UpsertBrandParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Brands.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.brands.<a href="/src/api/resources/brands/client/Client.ts">get</a>(id, { ...params }) -> Pinnacle.ExtendedBrandWithVetting</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve detailed information for a specific brand in your account by ID.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.brands.get(1);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `number` — ID of an existing brand in your account that you want to retrieve.

</dd>
</dl>

<dl>
<dd>

**request:** `Pinnacle.BrandsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Brands.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.brands.<a href="/src/api/resources/brands/client/Client.ts">submit</a>(brandId) -> Pinnacle.SubmissionResults</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submit your brand for review and approval by the compliance team.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.brands.submit(1);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**brandId:** `number`

The unique identifier of the brand you want to submit for review. <br>

Must correspond to an existing brand in your account that is ready for submission.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Brands.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.brands.<a href="/src/api/resources/brands/client/Client.ts">validate</a>({ ...params }) -> Pinnacle.ValidationResults</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validate your brand information for compliance and correctness before submission or storage.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.brands.validate({
    address: "500 Folsom St, San Francisco, CA 94105",
    contact: {
        email: "michael.chen@trypinnacle.app",
        name: "Michael Chen",
        phone: "+14155551234",
        title: "Customer Support Representative",
    },
    dba: "Pinnacle Messaging",
    description: "Pinnacle is an SMS, MMS, and RCS API for scaling conversations with customers you value.",
    ein: "88-1234567",
    email: "founders@trypinnacle.app",
    name: "Pinnacle",
    sector: "TECHNOLOGY",
    type: "PRIVATE_PROFIT",
    website: "https://www.pinnacle.sh",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.ValidateBrandParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Brands.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.brands.<a href="/src/api/resources/brands/client/Client.ts">vet</a>(brandId, { ...params }) -> Pinnacle.VettingResults</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submit a brand for external vetting verification to enhance your brand's trust score and improved message delivery rates.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.brands.vet(1, {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**brandId:** `number`

The unique identifier of the brand to vet. <br>

The brand must be already registered before it can be vetted.

</dd>
</dl>

<dl>
<dd>

**request:** `Pinnacle.VetBrandParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Brands.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Contacts

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">get</a>({ ...params }) -> Pinnacle.Contact</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve contact information for a given number.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.get();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.ContactsGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">create</a>({ ...params }) -> Pinnacle.ContactId</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new contact for a given phone number.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.create({
    phoneNumber: "phoneNumber",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.CreateContactParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.contacts.<a href="/src/api/resources/contacts/client/Client.ts">update</a>({ ...params }) -> Pinnacle.UpdatedContactId</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update an existing contact.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.contacts.update({
    description: "Retired",
    email: "alvaroopedtech@pinnacle.sh",
    name: "Retired Bestie",
    tags: ["friend"],
    id: 137,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.UpdateContactParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Conversations

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">get</a>({ ...params }) -> Pinnacle.Conversation | null</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a specific conversation using either its unique identifier or by matching sender and recipient details.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.get({
    id: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.GetConversationParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">list</a>({ ...params }) -> Pinnacle.ConversationList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves conversations by page with optional filtering based off provided parameters.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.list({
    brandId: 101,
    campaignId: 136,
    campaignType: "TOLL_FREE",
    pageIndex: 0,
    pageSize: 20,
    receiver: "+16509231662",
    sender: "+18445551234",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.ListConversationsParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">update</a>({ ...params }) -> Pinnacle.SuccessfulConversationUpdate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the notes associated with a specific conversation.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.conversations.update({
    id: 123,
    notes: "Follow-up completed. Customer satisfied with resolution.",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.UpdateConversationParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Conversations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Messages

<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">get</a>(id) -> Pinnacle.Message</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a previously sent message.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.get(1240);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `number` — Unique identifier of the message.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.messages.<a href="/src/api/resources/messages/client/Client.ts">react</a>({ ...params }) -> Pinnacle.ReactionResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add or remove an emoji reaction to a previously sent message.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.react({
    messageId: 1410,
    options: {
        force: true,
    },
    reaction: "\uD83D\uDC4D",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.ReactMessageParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Messages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PhoneNumbers

<details><summary><code>client.phoneNumbers.<a href="/src/api/resources/phoneNumbers/client/Client.ts">search</a>({ ...params }) -> Pinnacle.PhoneNumberDetails[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search for available phone numbers that match your exact criteria.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.search({
    features: ["SMS", "MMS"],
    location: {
        city: "New York",
        nationalDestinationCode: "212",
    },
    number: {
        contains: "514",
        startsWith: "45",
    },
    options: {
        limit: 4,
    },
    type: ["LOCAL"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.SearchPhoneNumberParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.phoneNumbers.<a href="/src/api/resources/phoneNumbers/client/Client.ts">buy</a>({ ...params }) -> Pinnacle.PurchasedNumber[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Purchase one or more phone numbers found through the [search endpoint](./search). <br>

Billing uses your account credits and the numbers are ready for immediate use.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.buy({
    numbers: ["+18559491727"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.BuyPhoneNumberParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.phoneNumbers.<a href="/src/api/resources/phoneNumbers/client/Client.ts">get</a>({ ...params }) -> Pinnacle.PhoneNumbersGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve information about any phone number.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.get({
    phone: "+11234567890",
    level: "advanced",
    options: {
        risk: true,
        enhanced_contact_info: {
            context: "This is my friend from JZ. He has done a lot in the crypto space.",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.RetrievePhoneNumberDetailsParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## RCS

<details><summary><code>client.rcs.<a href="/src/api/resources/rcs/client/Client.ts">getCapabilities</a>({ ...params }) -> Pinnacle.RcsCapabilitiesResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Check RCS capabilities for one or more phone numbers.

This endpoint allows you to verify which RCS features (cards, buttons, etc.) are supported
on specific phone numbers before sending RCS messages to them.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.rcs.getCapabilities({
    phoneNumbers: ["+12345678901", "+19876543210"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.RcsCapabilitiesQuery`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Rcs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.rcs.<a href="/src/api/resources/rcs/client/Client.ts">whitelist</a>({ ...params }) -> Pinnacle.RcsWhitelistResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Whitelist a phone number for testing with your test RCS agent.

## Overview

During development and testing, RCS agents can only send messages to whitelisted phone numbers.
Use this endpoint to add test devices to your agent's whitelist before sending test messages.

## Verification Process

After whitelisting a number, you'll need to complete verification:

1. Check the test device for an "RBM Tester Management" request
2. Accept the request on the device
3. Enter the 4-digit verification code in the Pinnacle dashboard at:
    ```
    https://app.pinnacle.sh/dashboard/brands/{brandId}?campaignId={campaignId}&campaignType=RCS
    ```

> **Important Notes**
>
> - **Testing only:** This is only required for test agents. Production agents can message any RCS-enabled number
> - **AT&T limitation:** Whitelisting may currently fail for AT&T numbers
> - **Verification required:** The whitelist request isn't complete until you verify the device.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.rcs.whitelist({
    agentId: "agent_XXXXXXXXXXXX",
    phoneNumber: "+12345678901",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.RcsWhitelistRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Rcs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.rcs.<a href="/src/api/resources/rcs/client/Client.ts">getLink</a>({ ...params }) -> Pinnacle.RcsLinkResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate a link for initiating an RCS conversation with your agent.

Users can click these links to start conversations with your RCS agent directly
from websites, emails, or other applications.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.rcs.getLink({
    agentId: "agent_XXXXXXXXXXXX",
    testMode: false,
    phoneNumber: "+12345678901",
    body: "Hello, I need help with my order",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.RcsLinkRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Rcs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Webhooks

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">get</a>({ ...params }) -> Pinnacle.WebhookResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve all webhook that are set up to receive events for specific URLs or phone numbers.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.get({
    identifiers: [
        "https://www.pinnacle.sh/payment",
        "+14155678901",
        "https://www.pinnacle.sh/sms-callback",
        "+14153456659",
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.GetWebhookParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Campaigns Dlc

<details><summary><code>client.campaigns.dlc.<a href="/src/api/resources/campaigns/resources/dlc/client/Client.ts">autofill</a>({ ...params }) -> Pinnacle.AutofillDlcCampaignResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate campaign details based off existing campaign and the brand it's connected to.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.dlc.autofill({
    additionalInfo: "Please autofill missing DLC campaign fields using my brand profile",
    campaignId: 161,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.AutofillCampaignParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Dlc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.campaigns.dlc.<a href="/src/api/resources/campaigns/resources/dlc/client/Client.ts">get</a>(campaignId) -> Pinnacle.DlcCampaignWithExtendedBrandAndStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve 10DLC campaign.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.dlc.get(28);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**campaignId:** `number` — Unique identifier of the 10DLC campaign.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Dlc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.campaigns.dlc.<a href="/src/api/resources/campaigns/resources/dlc/client/Client.ts">submit</a>(campaignId) -> Pinnacle.CampaignSubmissionResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submit your 10DLC campaign for approval and activation with carriers.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.dlc.submit(161);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**campaignId:** `number` — Unique identifier of the 10DLC campaign to submit.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Dlc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.campaigns.dlc.<a href="/src/api/resources/campaigns/resources/dlc/client/Client.ts">upsert</a>({ ...params }) -> Pinnacle.DlcCampaignWithExtendedBrandAndStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new 10DLC campaign or updates an existing one. <br>

Omit campaignId to create a campaign.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.dlc.upsert({
    autoRenew: true,
    brand: 1,
    campaignId: 161,
    keywords: {
        HELP: {
            message: "Reply HELP for assistance, STOP to opt-out",
            values: ["HELP", "INFO", "SUPPORT"],
        },
        OPT_IN: {
            message: "Welcome! You're now subscribed to Pinnacle.",
            values: ["JOIN", "START", "SUBSCRIBE"],
        },
        OPT_OUT: {
            message: "You've been unsubscribed. Reply START to rejoin.",
            values: ["STOP", "QUIT", "UNSUBSCRIBE"],
        },
    },
    links: {
        privacyPolicy: "https://www.pinnacle.sh/privacy",
        termsOfService: "https://www.pinnacle.sh/terms",
    },
    messageFlow: "Customer initiates -> Automated response -> Agent follow-up if needed",
    name: "Account Notifications",
    options: {
        affiliateMarketing: false,
        ageGated: false,
        directLending: false,
        embeddedLink: "https://www.pinnacle.sh/example",
        embeddedPhone: false,
        numberPooling: false,
    },
    sampleMessages: ["Security alert: Unusual login detected from new device."],
    useCase: {
        sub: ["FRAUD_ALERT"],
        value: "ACCOUNT_NOTIFICATION",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.campaigns.UpsertDlcCampaignParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Dlc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.campaigns.dlc.<a href="/src/api/resources/campaigns/resources/dlc/client/Client.ts">validate</a>({ ...params }) -> Pinnacle.CampaignValidationResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validate your 10DLC campaign configuration against carrier requirements and compliance rules.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.dlc.validate({
    additionalInfo: "Please validate this DLC campaign for 10DLC compliance",
    campaignId: 161,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.ValidateCampaignParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Dlc.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Campaigns TollFree

<details><summary><code>client.campaigns.tollFree.<a href="/src/api/resources/campaigns/resources/tollFree/client/Client.ts">autofill</a>({ ...params }) -> Pinnacle.TollFreeAutofillResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate campaign details based off existing campaign and the brand it's connected to.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.tollFree.autofill({
    additionalInfo: "Please autofill missing DLC campaign fields using my brand profile",
    campaignId: 161,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.AutofillCampaignParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TollFree.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.campaigns.tollFree.<a href="/src/api/resources/campaigns/resources/tollFree/client/Client.ts">get</a>(campaignId) -> Pinnacle.TollFreeCampaignWithExtendedBrandAndStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve Toll-Free campaign.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.tollFree.get(161);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**campaignId:** `number` — Unique identifier of toll-free campaign.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TollFree.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.campaigns.tollFree.<a href="/src/api/resources/campaigns/resources/tollFree/client/Client.ts">submit</a>(campaignId) -> Pinnacle.CampaignSubmissionResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submit your toll-free campaign for approval and activation with carriers.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.tollFree.submit(161);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**campaignId:** `number` — Unique identifier of the toll-free campaign to submit.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TollFree.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.campaigns.tollFree.<a href="/src/api/resources/campaigns/resources/tollFree/client/Client.ts">upsert</a>({ ...params }) -> Pinnacle.TollFreeCampaignWithExtendedBrandAndStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new toll-free campaign or updates an existing one.<br>

Omit campaignId to create a campaign.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.tollFree.upsert({
    brand: 2,
    campaignId: 161,
    monthlyVolume: "1,000",
    name: "Pinnacle",
    optIn: {
        method: "DIGITAL",
        url: "https://www.pinnacle.sh/",
        workflowDescription: "Visit https://www.pinnacle.sh/",
    },
    productionMessageContent: "Join Pinnacle's workshop tomorrow and send your first RCS!",
    useCase: {
        summary: "Alerts clients about any Pinnacle hosted workshops.",
        value: "WORKSHOP_ALERTS",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.campaigns.UpsertTollFreeCampaignParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TollFree.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.campaigns.tollFree.<a href="/src/api/resources/campaigns/resources/tollFree/client/Client.ts">validate</a>({ ...params }) -> Pinnacle.CampaignValidationResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validate your toll-free campaign configuration against carrier requirements and compliance rules.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.tollFree.validate({
    additionalInfo: "Please validate this DLC campaign for 10DLC compliance",
    campaignId: 161,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.ValidateCampaignParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TollFree.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Campaigns Rcs

<details><summary><code>client.campaigns.rcs.<a href="/src/api/resources/campaigns/resources/rcs/client/Client.ts">autofill</a>({ ...params }) -> Pinnacle.RcsAutofillResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate campaign details based off existing campaign and the brand it's connected to.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.rcs.autofill({
    additionalInfo: "Please autofill missing DLC campaign fields using my brand profile",
    campaignId: 161,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.AutofillCampaignParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Rcs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.campaigns.rcs.<a href="/src/api/resources/campaigns/resources/rcs/client/Client.ts">get</a>(campaignId) -> Pinnacle.ExtendedRcsCampaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve RCS campaign.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.rcs.get(161);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**campaignId:** `number` — Unique identifier of the RCS campaign.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Rcs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.campaigns.rcs.<a href="/src/api/resources/campaigns/resources/rcs/client/Client.ts">submit</a>(campaignId) -> Pinnacle.CampaignSubmissionResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submit your RCS campaign for approval and activation with carriers.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.rcs.submit(161);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**campaignId:** `number` — Unique identifier of the RCS campaign to retrieve.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Rcs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.campaigns.rcs.<a href="/src/api/resources/campaigns/resources/rcs/client/Client.ts">upsert</a>({ ...params }) -> Pinnacle.ExtendedRcsCampaign</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new RCS campaign or updates an existing one. <br>

Omit campaignId to create a campaign.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.rcs.upsert({
    agent: {
        color: "#000000",
        description:
            "Engaging campaigns with RBM \u2013 next-gen SMS marketing with rich content and better analytics.",
        emails: [
            {
                email: "founders@trypinnacle.app",
                label: "Email Us",
            },
        ],
        heroUrl: "https://agent-logos.storage.googleapis.com/_/m0bk9mmw7kfynqiKSPfsaoc6",
        iconUrl: "https://agent-logos.storage.googleapis.com/_/m0bk9gvlDunZEw1krfruZmw3",
        name: "Pinnacle Software Development",
        phones: [
            {
                label: "Contact us directly",
                phone: "+14154467821",
            },
        ],
        websites: [
            {
                label: "Get started with Pinnacle",
                url: "https://www.trypinnacle.app/",
            },
        ],
    },
    brandVerificationUrl: "https://www.pinnacle.sh/articles-of-incorporation.pdf",
    brand: 2,
    expectedAgentResponses: [
        "Here are the things I can help you with.",
        "I can assist you with booking an appointment, or you may choose to book manually.",
        "Here are the available times to connect with a representative tomorrow.",
        "Your appointment has been scheduled.",
    ],
    links: {
        privacyPolicy: "https://www.trypinnacle.app/privacy",
        termsOfService: "https://www.trypinnacle.app/terms",
    },
    optIn: {
        method: "WEBSITE",
        termsAndConditions: "Would you like to subscribe to Pinnacle?",
    },
    optOut: {
        description: "Reply STOP to opt-out anytime.",
        keywords: ["STOP", "UNSUBSCRIBE", "END"],
    },
    useCase: {
        behavior: "Acts as a customer service representative.",
        value: "OTHER",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.campaigns.UpsertRcsCampaignParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Rcs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.campaigns.rcs.<a href="/src/api/resources/campaigns/resources/rcs/client/Client.ts">validate</a>({ ...params }) -> Pinnacle.CampaignValidationResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validate your RCS campaign configuration against carrier requirements and compliance rules.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.campaigns.rcs.validate({
    additionalInfo: "Please validate this DLC campaign for 10DLC compliance",
    campaignId: 161,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.ValidateCampaignParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Rcs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Messages Sms

<details><summary><code>client.messages.sms.<a href="/src/api/resources/messages/resources/sms/client/Client.ts">send</a>({ ...params }) -> Pinnacle.SmsSendResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a SMS message immediately or schedule it for future delivery.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.sms.send({
    from: "+14155164736",
    text: "Hey!",
    to: "+14154746461",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.messages.Sms`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.messages.sms.<a href="/src/api/resources/messages/resources/sms/client/Client.ts">validate</a>({ ...params }) -> Pinnacle.SmsValidationResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validate SMS message content without sending it.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.sms.validate({
    text: "Hello from Pinnacle",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.SmsContent`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Sms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Messages Mms

<details><summary><code>client.messages.mms.<a href="/src/api/resources/messages/resources/mms/client/Client.ts">send</a>({ ...params }) -> Pinnacle.MmsSendResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a MMS immediately or schedule it for future delivery.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.mms.send({
    from: "+14155164736",
    mediaUrls: ["https://fastly.picsum.photos/id/941/300/300.jpg?hmac=mDxM9PWSqRDjecwSCEpzU4bj35gqnG7yA25OL29uNv0"],
    options: {
        multiple_messages: true,
        validate: true,
    },
    text: "Check out this image!",
    to: "+14154746461",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.messages.Mms`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.messages.mms.<a href="/src/api/resources/messages/resources/mms/client/Client.ts">validate</a>({ ...params }) -> Pinnacle.MmsValidationResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validate MMS message content without sending it.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.mms.validate({
    mediaUrls: [
        "https://upload.wikimedia.org/wikipedia/commons/b/b9/Pizigani_1367_Chart_1MB.jpg",
        "https://fastly.picsum.photos/id/528/1000/1000.jpg?hmac=aTG0xNif9KbNryFN0ZNZ_nFK6aEpZxqUGCZF1KjOT8w",
        "https://file-examples.com/storage/fefdd7ab126835e7993bb1a/2017/10/file_example_JPG_500kB.jpg",
    ],
    text: "Check out these images!",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.MmsContent`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Mms.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Messages Rcs

<details><summary><code>client.messages.rcs.<a href="/src/api/resources/messages/resources/rcs/client/Client.ts">send</a>({ ...params }) -> Pinnacle.RcsSendResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a RCS message immediately or schedule it for future delivery. <br>

Requires an active RCS agent and recipient devices that support RCS Business Messaging.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.rcs.send({
    quickReplies: [
        {
            type: "openUrl",
            payload: "payload",
            title: "title",
        },
    ],
    text: "text",
    from: "from",
    to: "to",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.RichMessage`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Rcs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.messages.rcs.<a href="/src/api/resources/messages/resources/rcs/client/Client.ts">validate</a>({ ...params }) -> Pinnacle.RcsValidationResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Validate RCS message content without sending it.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.messages.rcs.validate({
    quickReplies: [
        {
            type: "openUrl",
            payload: "payload",
            title: "title",
        },
    ],
    text: "text",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.RcsValidateContent`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Rcs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PhoneNumbers Webhook

<details><summary><code>client.phoneNumbers.webhook.<a href="/src/api/resources/phoneNumbers/resources/webhook/client/Client.ts">attach</a>(phone, { ...params }) -> Pinnacle.ConfiguredWebhook</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Connect a webhook to your phone number to receive real-time notifications for incoming messages, delivery status updates, and other communication events.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.webhook.attach("%2B14155551234", {
    webhookId: 123,
    event: "MESSAGE.STATUS",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**phone:** `string`

The phone number you want to attach the webhook to in E.164 format. Make sure it is url encoded (i.e. replace the leading + with %2B). <br>

Must be a phone number that you own and have already [purchased](./buy) through the API. A phone number can have multiple webhooks attached to it.

</dd>
</dl>

<dl>
<dd>

**request:** `Pinnacle.AttachWebhookParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhook.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.phoneNumbers.webhook.<a href="/src/api/resources/phoneNumbers/resources/webhook/client/Client.ts">detach</a>(phone, webhookId) -> Pinnacle.DetachedWebhookInfo</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Disconnect a webhook from your phone number to stop receiving event notifications for that specific number. <br>

The webhook configuration itself remains intact and available for use with other phone numbers.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.webhook.detach("+14155551234", 123);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**phone:** `string`

The phone number you want to attach the webhook to in E.164 format. Make sure it is url encoded (i.e. replace the leading + with %2B). <br>

Must be a phone number that you own and currently has the specified webhook attached.

</dd>
</dl>

<dl>
<dd>

**webhookId:** `number`

The unique identifier of the webhook you want to detach from the phone number. <br>

This must be a valid webhook ID that is currently attached to the specified phone number.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhook.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PhoneNumbers Campaign

<details><summary><code>client.phoneNumbers.campaign.<a href="/src/api/resources/phoneNumbers/resources/campaign/client/Client.ts">attach</a>({ ...params }) -> Pinnacle.AttachedPhoneNumberResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Link a phone number to a specific campaign. Phone numbers must be linked to a campaign to send messages.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.campaign.attach({
    phones: ["+14155550123", "+14155559876", "+14155550111"],
    campaignType: "TOLL_FREE",
    campaignId: 101,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.phoneNumbers.AttachCampaignParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Campaign.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.phoneNumbers.campaign.<a href="/src/api/resources/phoneNumbers/resources/campaign/client/Client.ts">detach</a>({ ...params }) -> Pinnacle.DetachedPhoneNumberResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove the association between a phone number and its attached campaign.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.phoneNumbers.campaign.detach({
    phones: ["+14155559876", "14155550111"],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.phoneNumbers.DetachCampaignParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Campaign.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Status Get

<details><summary><code>client.status.get.<a href="/src/api/resources/status/resources/get/client/Client.ts">brand</a>(brandId) -> Pinnacle.BrandStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a brand's status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.status.get.brand(28);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**brandId:** `number` — ID of the brand.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Get.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.status.get.<a href="/src/api/resources/status/resources/get/client/Client.ts">tollFree</a>(campaignId) -> Pinnacle.TollFreeCampaignStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a toll-free campaign's status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.status.get.tollFree(28);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**campaignId:** `number` — ID of the toll-free campaign.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Get.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.status.get.<a href="/src/api/resources/status/resources/get/client/Client.ts">dlc</a>(campaignId) -> Pinnacle.DlcCampaignStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a 10DLC campaign's status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.status.get.dlc(28);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**campaignId:** `number` — ID of the 10DLC campaign.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Get.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.status.get.<a href="/src/api/resources/status/resources/get/client/Client.ts">rcs</a>(campaignId) -> Pinnacle.RcsCampaignStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a RCS campaign's status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.status.get.rcs(28);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**campaignId:** `number` — ID of the campaign.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Get.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.status.get.<a href="/src/api/resources/status/resources/get/client/Client.ts">phoneNumber</a>(phoneNumber) -> Pinnacle.PhoneNumberStatus</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a phone number's order status and campaign attachment status. <br>

Check if a number is active and ready to send messages.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.status.get.phoneNumber("+14151234567");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**phoneNumber:** `string` — Phone number in E164 format that is in review.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Get.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tools Url

<details><summary><code>client.tools.url.<a href="/src/api/resources/tools/resources/url/client/Client.ts">create</a>({ ...params }) -> Pinnacle.ShortenedUrl</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a shortened URL that redirects visitors to the provided destination URL.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.url.create({
    url: "https://www.pinnacle.sh/",
    options: {
        expiresAt: "2025-06-23T16:18:25.000Z",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.tools.CreateUrlParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Url.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.url.<a href="/src/api/resources/tools/resources/url/client/Client.ts">get</a>(linkId) -> Pinnacle.ShortenedUrlWithClickData</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve configuration and details for your shortened URL using its unique identifier.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.url.get("ePzVxILF");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**linkId:** `string`

Unique identifier from your shortened URL. For example, for `https://pncl.to/ePzVxILF`, the `linkId` is `ePzVxILF`. <br>

See the response of [Create Shortened URL](./create-url) for more information.

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Url.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.url.<a href="/src/api/resources/tools/resources/url/client/Client.ts">update</a>(linkId, { ...params }) -> Pinnacle.ShortenedUrl</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update the destination or expiration date of an existing shortened URL. Expiring links cannot be updated into a permalink.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.url.update("ePzVxILF", {
    url: "https://www.pinnacle.sh/",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**linkId:** `string`

Unique identifier from your shortened URL. For example, for `https://pncl.to/ePzVxILF`, the `linkId` is `ePzVxILF`. <br>

See the response of [Create Shortened URL](./create-url) for more information.

</dd>
</dl>

<dl>
<dd>

**request:** `Pinnacle.tools.UpdateUrlParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Url.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tools File

<details><summary><code>client.tools.file.<a href="/src/api/resources/tools/resources/file/client/Client.ts">upload</a>({ ...params }) -> Pinnacle.UploadResults</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate presigned URLs that let you upload files directly to our storage and allow your users to download them securely.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.file.upload({
    contentType: "image/jpeg",
    size: 1024,
    name: "test.jpg",
    options: {
        download: {
            expiresAt: "2025-06-30T12:00:00.000Z",
        },
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.tools.UploadFileParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `File_.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.file.<a href="/src/api/resources/tools/resources/file/client/Client.ts">refresh</a>({ ...params }) -> Pinnacle.RefreshedFile[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Refresh expiring presigned URLs for Pinnacle-hosted files to extend their access time.

<Callout type="info">
  This only works for presigned download URLs. At this moment, you cannot refresh a presigned upload URL, generate a new one instead.
</Callout>
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.file.refresh({
    uris: [
        "https://server.trypinnacle.app/storage/v1/object/sign/vault/3/test.jpg?token=oldtoken",
        "https://server.trypinnacle.app/storage/v1/object/sign/vault/3/document.pdf?token=oldtoken2",
        "icons/3/test.jpg",
        "invalid/url",
        "https://google.com",
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.tools.RefreshFileParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `File_.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tools ContactCard

<details><summary><code>client.tools.contactCard.<a href="/src/api/resources/tools/resources/contactCard/client/Client.ts">get</a>({ ...params }) -> Pinnacle.VCardData</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve contact information as a vCard and get a presigned URL to download the file. Contact cards can be sent [via MMS](/api-reference/messages/send-mms) as a media file.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.contactCard.get({
    id: 33,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.tools.GetVcardParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactCard.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.contactCard.<a href="/src/api/resources/tools/resources/contactCard/client/Client.ts">upsert</a>({ ...params }) -> Pinnacle.VcardResource</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new contact card or updates an existing one with full vCard data. Contact cards can be sent [via MMS](/api-reference/messages/send-mms) as a media file.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tools.contactCard.upsert({
    id: 34,
    formattedName: "Jane Smith",
    name: {
        familyName: "Smith",
        givenName: "Jane",
        additionalNames: ["A."],
        honorificPrefixes: ["Dr."],
        honorificSuffixes: ["PhD"],
    },
    nickname: ["Janie"],
    birthday: "1990-02-15",
    addresses: [
        {
            countryName: "USA",
            extendedAddress: "Apt. 4B",
            locality: "Anytown",
            postalCode: "90210",
            postOfficeBox: "PO Box 123",
            region: "CA",
            streetAddress: "123 Main St",
            type: ["HOME", "PREF"],
        },
    ],
    url: "https://app.pinnacle.sh",
    phones: [
        {
            type: ["CELL"],
            value: "+15551234567",
        },
    ],
    emails: [
        {
            type: ["INTERNET"],
            value: "jane.smith@example.com",
        },
    ],
    timezone: "America/Los_Angeles",
    geo: {
        latitude: 34.0522,
        longitude: -118.2437,
    },
    title: "Engineer",
    role: "Developer",
    organization: {
        name: "Acme Co",
        units: ["Engineering", "R&D"],
    },
    categories: ["Friend", "Colleague"],
    note: "Test contact entry",
    photo: "https://fastly.picsum.photos/id/853/200/200.jpg?hmac=f4LF-tVBBnJb9PQAVEO8GCTGWgLUnxQLw44rUofE6mQ",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Pinnacle.tools.UpsertVcardParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactCard.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
