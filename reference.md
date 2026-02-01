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
        forceReload: true
    },
    website: "https://www.pinnacle.sh"
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

Create a new brand or update an existing one.

<Note>
**To create a new brand:** Omit `id` — one will be generated automatically.

All fields are **required** except `description` and `dba`, and will be validated when [submitted](/api-reference/brands/submit).
</Note>
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
        title: "Customer Support Representative"
    },
    dba: "Pinnacle RCS",
    description: "A developer-friendly, compliant API for SMS, MMS, and RCS, built to scale real conversations.",
    ein: "88-1234567",
    email: "founders@trypinnacle.app",
    id: "b_1234567890",
    name: "Pinnacle",
    sector: "TECHNOLOGY",
    type: "PRIVATE_PROFIT",
    entityType: "LLC",
    website: "https://www.pinnacle.sh"
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
await client.brands.get("b_1234567890");

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

**id:** `string` 

The unique identifier of the brand you want to retrieve from your account.
<br><br> This identifier is a string that always begins with the prefix `b_`, for example: `b_1234567890`.
    
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
await client.brands.submit("b_1234567890");

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

**brandId:** `string` 

The unique identifier of the brand you want to submit for review. <br><br>
This identifier is a string that always begins with the prefix `b_`, for example: `b_1234567890` and must correspond to an existing brand in your account that is ready for submission.
    
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
await client.brands.validate({});

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

**request:** `Pinnacle.OptionalBrandInfo` 
    
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
await client.brands.vet("b_1234567890", {});

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

**brandId:** `string` 

The unique identifier of the brand to vet. <br>

This identifier is a string that always begins with the prefix `b_`, for example: `b_1234567890` and must correspond to an existing brand in your account that is ready for vetting.
    
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

## Audiences
<details><summary><code>client.audiences.<a href="/src/api/resources/audiences/client/Client.ts">get</a>({ ...params }) -> Pinnacle.AudiencesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve an audience by ID with optional pagination.
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
await client.audiences.get({
    id: "aud_abc123"
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

**request:** `Pinnacle.AudiencesGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Audiences.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.audiences.<a href="/src/api/resources/audiences/client/Client.ts">create</a>({ ...params }) -> Pinnacle.AudienceCountOnly</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a new audience with optional initial contacts. Phone numbers that don't exist will be auto-created as contacts.
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
await client.audiences.create({
    name: "Marketing Campaign Q1",
    description: "Contacts for Q1 marketing push"
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

**request:** `Pinnacle.CreateAudienceParams` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Audiences.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.audiences.<a href="/src/api/resources/audiences/client/Client.ts">delete</a>({ ...params }) -> Pinnacle.DeleteAudienceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Permanently delete an audience and all its contact associations.

Note: This will NOT delete the contacts themselves, only the audience and its memberships.
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
await client.audiences.delete({
    id: "aud_abc123"
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

**request:** `Pinnacle.AudiencesDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Audiences.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.audiences.<a href="/src/api/resources/audiences/client/Client.ts">update</a>({ ...params }) -> Pinnacle.AudienceCountOnly</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update audience metadata. This endpoint does NOT modify contacts.

To add or remove contacts, use the [Add Contacts](/api-reference/audiences/add-contacts) or [Remove Contacts](/api-reference/audiences/remove-contacts) endpoints.
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
await client.audiences.update({
    id: "aud_abc123",
    name: "Updated Audience Name",
    description: "New description"
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

**request:** `Pinnacle.UpdateAudienceParams` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Audiences.RequestOptions` 
    
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
await client.contacts.get({
    id: "co_1234567890"
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
    phoneNumber: "phoneNumber"
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
    id: "co_1234567890"
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
    id: "conv_1234567890"
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
    brandId: "b_1234567890",
    campaignId: "tf_1234567890",
    campaignType: "TOLL_FREE",
    pageIndex: 0,
    pageSize: 20,
    receiver: "+16509231662",
    sender: "+18445551234"
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
    id: "conv_1234567890",
    notes: "Follow-up completed. Customer satisfied with resolution."
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

<details><summary><code>client.conversations.<a href="/src/api/resources/conversations/client/Client.ts">listMessages</a>(id, { ...params }) -> Pinnacle.MessageList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve a paginated and filtered list of messages for a specific conversation.
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
await client.conversations.listMessages("id");

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

**id:** `string` — Unique identifier of the conversation. This identifier is a string that always begins with the prefix `conv_`, for example: `conv_1234567890`.
    
</dd>
</dl>

<dl>
<dd>

**request:** `Pinnacle.ConversationsListMessagesRequest` 
    
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
await client.messages.get("msg_1234567890");

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

**id:** `string` — Unique identifier of the message. This identifier is a string that always begins with the prefix `msg_`, for example: `msg_1234567890`.
    
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
    messageId: "msg_1234567890",
    options: {
        force: true
    },
    reaction: "\uD83D\uDC4D"
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
        nationalDestinationCode: "212"
    },
    number: {
        contains: "514",
        startsWith: "45"
    },
    options: {
        limit: 4
    },
    type: ["LOCAL"]
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
    numbers: ["+18559491727"]
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
            context: "This is my friend from JZ. He has done a lot in the crypto space."
        }
    }
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
    phoneNumbers: ["+12345678901", "+19876543210"]
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
Use this endpoint to whitelist specific phone numbers to send and receive messages from the test agent.

## Verification Process
After whitelisting a number, you'll need to complete verification:

1. Check the test device for message from "RBM Tester Management"
2. Click the "Make me a tester" button
3. Enter the separate 4-digit verification SMS code in the Pinnacle dashboard at:
   ```
   https://app.pinnacle.sh/dashboard/brands/{brandId}?campaignId={campaignId}&campaignType=RCS
   ```

 > **⚠️ Important: Re-whitelisting Numbers**
>
> If you whitelist a number that's already whitelisted, you'll receive a new message from "RBM Tester Management". **You must click the "Make me a tester" button again to continue sending and receiving messages.**

> **Important Notes**
>
> - **Verification required:** Messages cannot be sent nor received until you have clicked the "Make me a tester" button on the test device.
> - **Testing only:** This is only required for test agents. Production agents can message any RCS-enabled number.
> - **Network limitations:** Whitelisting may be temporarily unavailable for some carriers but are usually restored shortly.
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
    phoneNumber: "+12345678901"
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
    body: "Hello, I need help with my order"
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
    identifiers: ["https://www.pinnacle.sh/payment", "+14155678901", "https://www.pinnacle.sh/sms-callback", "+14153456659"]
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

## Audiences Contacts
<details><summary><code>client.audiences.contacts.<a href="/src/api/resources/audiences/resources/contacts/client/Client.ts">remove</a>({ ...params }) -> Pinnacle.AudienceCountOnly</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Remove contacts from an existing audience. This operation is idempotent.

- Only removes contacts that exist in the audience
- Contacts not in the audience are ignored
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
await client.audiences.contacts.remove({
    id: "aud_abc123",
    contacts: ["+12125551234", "co_def456"]
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

**request:** `Pinnacle.audiences.RemoveContactsParams` 
    
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

<details><summary><code>client.audiences.contacts.<a href="/src/api/resources/audiences/resources/contacts/client/Client.ts">add</a>({ ...params }) -> Pinnacle.AudienceCountOnly</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Add contacts to an existing audience. This operation is additive and idempotent.

- Phone numbers that don't exist will be auto-created as contacts
- Duplicate adds are ignored
- Contacts already in the audience are ignored
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
await client.audiences.contacts.add({
    id: "aud_abc123",
    contacts: ["+12125551234", "co_def456", "+13105551234"]
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

**request:** `Pinnacle.audiences.AddContactsParams` 
    
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
    additionalInfo: "Please autofill missing campaign fields using my brand profile",
    campaignId: "dlc_1234567890"
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
await client.campaigns.dlc.get("dlc_1234567890");

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

**campaignId:** `string` — Unique identifier of the 10DLC campaign. This identifier is a string that always begins with the prefix `dlc_`, for example: `dlc_1234567890`.
    
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
await client.campaigns.dlc.submit("dlc_1234567890");

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

**campaignId:** `string` 

Unique identifier of the 10DLC campaign to submit.
<br><br> This identifier is a string that always begins with the prefix `dlc_`, for example: `dlc_1234567890`.
    
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

Create a new 10DLC campaign or update an existing one.

<Note>
**To create a new campaign:** Omit `campaignId` — one will be generated automatically.

**Before you start:** Create a [brand](/api-reference/brands/upsert) first — you'll need its `id` for the [`brand`](#request.body.brand) field.

All fields are **required** unless specified otherwise, and will be validated when [submitted](/api-reference/campaigns/10-dlc/submit).

**See the response for example values for each field.**
</Note>
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
    brand: "b_1234567890",
    description: "This campaign sends transactional SMS messages to customers who have opted in, including account notifications, security alerts, and customer care responses. Messages are sent when triggered by account activity such as login attempts, password changes, order updates, or support inquiries. All messages include required STOP/HELP disclosures and comply with TCPA guidelines.",
    keywords: {
        HELP: {
            message: "Pinnacle Software Development Inc.: For assistance, visit https://pinnacle.sh/support or email founders@trypinnacle.app. Msg&data rates may apply. Reply STOP to cancel.",
            values: ["HELP", "SUPPORT", "INFO"]
        },
        OPT_IN: {
            message: "Pinnacle Software Development Inc.: You're enrolled in account & security alerts. Msg&data rates may apply. Message frequency varies. Reply HELP for help, STOP to cancel. Terms: https://pinnacle.sh/terms Privacy: https://pinnacle.sh/privacy",
            values: ["START", "YES", "SUBSCRIBE"]
        },
        OPT_OUT: {
            message: "Pinnacle Software Development Inc.: You're unsubscribed and will receive no further texts. For assistance, visit https://pinnacle.sh or call 877-389-0460. Reply START to resubscribe.",
            values: ["STOP", "CANCEL", "UNSUBSCRIBE"]
        }
    },
    links: {
        privacyPolicy: "https://www.pinnacle.sh/privacy",
        termsOfService: "https://www.pinnacle.sh/terms"
    },
    messageFlow: "The user fills out a paper form during onboarding at [Address] which they learn about at our website (https://pinnacle.sh) in which they provide their phone number and sign their consent. The form includes a disclaimer: \"By signing this form and providing your phone number, you agree to receive SMS Mixed - Account Notification, Customer Care, Security Alert, Delivery Notification from Pinnacle Software Development Inc. Message frequency may vary. Standard Message and Data Rates may apply. Reply STOP to opt out. Reply HELP for help. Consent is not a condition of purchase. Your mobile information will not be sold or shared with third parties for promotional or marketing purposes.\" Once the information is entered into the system, the user receives a confirmation SMS: \"Thank you for signing up for SMS updates from Pinnacle Software Development Inc. Msg freq may vary. Std msg & data rates apply. Reply STOP to opt out, HELP for help.\" Link to paper form: https://www.pinnacle.sh/opt-in",
    name: "Pinnacle's Account Notifications",
    options: {
        affiliateMarketing: false,
        ageGated: false,
        directLending: false,
        embeddedLink: "https://www.pinnacle.sh/example",
        embeddedPhone: false,
        numberPooling: false
    },
    sampleMessages: ["Pinnacle Software Development Inc.: We're here to help. Visit https://pinnacle.sh or call 877-389-0460. Msg&data rates may apply. Reply STOP to cancel.", "Pinnacle Software Development Inc.: You're enrolled in account & security alerts. Msg&data rates may apply. Message frequency varies. Reply HELP for help, STOP to cancel. Terms: https://pinnacle.sh/terms/ Privacy: https://pinnacle.sh/privacy/", "Pinnacle Software Development Inc.: An update has been made to your account. Read it in the portal.", "Pinnacle Software Development Inc.: We received your message. A team member will reply shortly. For immediate help call 877-389-0460. Msg&data rates may apply. Reply STOP to cancel."],
    useCase: {
        sub: ["ACCOUNT_NOTIFICATION", "CUSTOMER_CARE", "SECURITY_ALERT"],
        value: "MIXED"
    }
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
    campaignId: "dlc_1234567890"
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
    additionalInfo: "Please autofill missing campaign fields using my brand profile",
    campaignId: "dlc_1234567890"
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
await client.campaigns.tollFree.get("tf_1234567890");

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

**campaignId:** `string` — Unique identifier of toll-free campaign. Must begin with the prefix `tf_`.
    
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
await client.campaigns.tollFree.submit("tf_1234567890");

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

**campaignId:** `string` — Unique identifier of the toll-free campaign to submit. Must begin with the prefix `tf_`.
    
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

Create a new toll-free campaign or update an existing one.

<Note>
**To create a new campaign:** Omit `campaignId` — one will be generated automatically.

**Before you start:** Create a [brand](/api-reference/brands/upsert) first — you'll need its `id` for the [`brand`](#request.body.brand) field.

All fields are **required** unless specified otherwise, and will be validated when [submitted](/api-reference/campaigns/toll-free/submit).

**See the response for example values for each field.**
</Note>
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
    brand: "b_1234567890",
    campaignId: "tf_1234567890",
    keywords: {
        HELP: {
            message: "Pinnacle Software Development Inc.: For assistance, visit https://pinnacle.sh/support or email founders@trypinnacle.app. Msg&data rates may apply. Reply STOP to cancel."
        },
        OPT_IN: {
            message: "Pinnacle Software Development Inc.: You're enrolled in account & security alerts. Msg&data rates may apply. Message frequency varies. Reply HELP for help, STOP to cancel. Terms: https://pinnacle.sh/terms/ Privacy: https://pinnacle.sh/privacy/",
            keywords: ["START", "SUBSCRIBE"]
        }
    },
    links: {
        privacyPolicy: "https://www.pinnacle.sh/privacy",
        termsOfService: "https://www.pinnacle.sh/terms"
    },
    monthlyVolume: "10,000",
    name: "Pinnacle",
    optIn: {
        method: "PAPER",
        url: "https://www.pinnacle.sh/opt-in",
        workflowDescription: "End users opt-in when filling out the in-person intake forms where they will write their phone numbers and check a box indicating that they've opted in to messages. Link to paper form: https://www.pinnacle.sh/opt-in"
    },
    options: {
        ageGated: false
    },
    productionMessageContent: "Hi [First Name], your order #[Order ID] has shipped and will arrive [Date]. Track here: [URL]. Reply HELP for help or STOP to unsubscribe.",
    useCase: {
        summary: "Customers who have opted into text messages can interact with our automated SMS chatbot to receive transaction-driven notifications (order status, shipping updates, account alerts), ask support questions, share photos with friends, and manage their account details via simple, conversational text flows. All messages are transactional or interactive flows customers opt into. Users can send images (e.g., receipts) and get guided replies.",
        value: "CHATBOT"
    }
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
    campaignId: "dlc_1234567890"
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
    additionalInfo: "Please autofill missing campaign fields using my brand profile",
    campaignId: "dlc_1234567890"
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
await client.campaigns.rcs.get("rcs_1234567890");

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

**campaignId:** `string` — Unique identifier of the RCS campaign. Must begin with the prefix `rcs_`.
    
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
await client.campaigns.rcs.submit("rcs_1234567890");

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

**campaignId:** `string` — Unique identifier of the RCS campaign to retrieve. Must begin with the prefix `rcs_`.
    
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

Create a new RCS campaign or update an existing one.

<Note>
**To create a new campaign:** Omit `campaignId` — one will be generated automatically.

**Before you start:** Create a [brand](/api-reference/brands/upsert) first — you'll need its `id` for the [`brand`](#request.body.brand) field.

All fields are **required** unless specified otherwise, and will be validated when [submitted](/api-reference/campaigns/rcs/submit).
</Note>
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
        description: "Experience the power of RCS messaging with interactive demos. Test rich features like carousels, suggested replies, and media sharing. Get started with our developer-friendly APIs.",
        emails: [{
                email: "founders@trypinnacle.app",
                label: "Email Us"
            }],
        heroUrl: "https://pncl.to/D6pDSqGxqgfbCfQmw4gXdnlHu4uSB4",
        iconUrl: "https://pncl.to/mq_tdIDenRb5eYpJiM8-3THCaUBrZP",
        name: "Pinnacle - RCS Demo",
        phones: [{
                label: "Contact us directly",
                phone: "+14154467821"
            }],
        websites: [{
                label: "Get started with Pinnacle",
                url: "https://www.trypinnacle.app/"
            }]
    },
    brand: "b_1234567890",
    campaignId: "rcs_1234567890",
    expectedAgentResponses: ["Here are the things I can help you with.", "I can assist you with booking an appointment, or you may choose to book manually.", "Here are the available times to connect with a representative tomorrow.", "Your appointment has been scheduled."],
    links: {
        privacyPolicy: "https://www.trypinnacle.app/privacy",
        termsOfService: "https://www.trypinnacle.app/terms"
    },
    useCase: {
        behavior: "Pinnacle is a developer-focused RCS assistant that helps teams design, test, and optimize rich messaging experiences across SMS, MMS, and RCS. The agent acts as both an \u201Conboarding guide\u201D for new customers and a \u201Cbest-practices coach\u201D for existing teams exploring higher-value RCS workflows like rich cards, carousels, and suggested actions.<br>\nThe agent delivers a mix of operational updates and educational content (2\u20136 messages/month). Content includes important platform notices (e.g., deliverability or throughput changes), implementation tips with sample RCS templates, and personalized recommendations on how to upgrade existing SMS campaigns into richer, higher-converting RCS conversations.\n",
        value: "OTHER"
    },
    optInTermsAndConditions: "We ensure consent through an explicit opt-in process that follows 10DLC best practices.Users must agree to receive messages from Pinnacle before the agent sends them any messages.<br>\nUsers agree to these messages by signing an opt-in paper form that they can be found online at https://www.pinnacle.sh/opt-in. We only send messages once users have filled out the form and submitted it to us via email or through the dashboard.\n",
    messagingType: "MULTI_USE",
    carrierDescription: "Demonstrate the power of RCS to medium and large companies already sending massive SMS/MMS volumes through our platform. These clients send conversational messages in industries such as commerce, appointments, and customer support.",
    keywords: {
        HELP: {
            message: "Email founders@trypinnacle.app for support.",
            keywords: ["HELP", "SUPPORT"]
        },
        OPT_IN: {
            message: "Welcome back to Pinnacle!<br>\n\uD83D\uDD14 You're now subscribed to Pinnacle - RCS Demo and will continue receiving important updates and news. Feel free to contact this us at any time for help.<br>\n\nReply STOP to opt out and HELP for support. Message & rates may apply.\n",
            keywords: ["START", "SUBSCRIBE"]
        },
        OPT_OUT: {
            message: "You've been unsubscribed from Pinnacle - RCS Demo and will no longer receive notifications. If you ever change your mind, reply START or SUBSCRIBE to rejoin anytime.",
            keywords: ["STOP", "UNSUBSCRIBE", "END"]
        }
    },
    traffic: {
        monthlyWebsite: 10000,
        monthlyRcsEstimate: 10000
    },
    agentTriggers: "The agent sends the first message when the user subscribes to Pinnacle. Messages are based on user actions such as pressing suggestion buttons. External triggers such as reminders can be setup by users in advance for a later time.",
    interactionDescription: "The agent's primary interaction will be customer service \u2014 helping users with questions, troubleshooting issues, and providing quick assistance through chat. Other interactions include appointment management and sending notifications to the user.",
    isConversational: true,
    ctaLanguage: "By checking this box and submitting this form, you consent to receive transactional text messages for support, appointment, and reminder messages from Pinnacle Software Development Inc. Reply STOP to opt out. Reply HELP for help. Standard message and data rates may apply. Message frequency may vary. View our Terms and Conditions at https://www.pinnacle.sh/terms. View our Privacy Policy at https://www.pinnacle.sh/privacy.",
    demoTrigger: "Text \"START\" to trigger the flow."
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
    campaignId: "dlc_1234567890"
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
    to: "+14154746461"
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
    text: "Hello from Pinnacle"
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
        validate: true
    },
    text: "Check out this image!",
    to: "+14154746461"
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
    mediaUrls: ["https://upload.wikimedia.org/wikipedia/commons/b/b9/Pizigani_1367_Chart_1MB.jpg", "https://fastly.picsum.photos/id/528/1000/1000.jpg?hmac=aTG0xNif9KbNryFN0ZNZ_nFK6aEpZxqUGCZF1KjOT8w", "https://file-examples.com/storage/fefdd7ab126835e7993bb1a/2017/10/file_example_JPG_500kB.jpg"],
    text: "Check out these images!"
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
<details><summary><code>client.messages.rcs.<a href="/src/api/resources/messages/resources/rcs/client/Client.ts">send</a>({ ...params }) -> Pinnacle.SendRichMessageResponse</code></summary>
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
    quickReplies: [{
            type: "openUrl",
            payload: "payload",
            title: "title"
        }],
    text: "text",
    from: "from",
    to: "to"
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

<details><summary><code>client.messages.rcs.<a href="/src/api/resources/messages/resources/rcs/client/Client.ts">sendTyping</a>({ ...params }) -> Pinnacle.SendTypingIndicatorResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a typing indicator from an RCS agent to a recipient.

This endpoint allows RCS agents to display a typing indicator to recipients. The indicator is a message bubble with animated typing dots like this: <img src="https://server.trypinnacle.app/storage/v1/object/public/pinnacle-public-assets/ios-typing-indicator.png" alt="Typing Indicator" style="display: inline; height: 1.5em; vertical-align: middle; margin: 0 4px;" />

**Use Case:** Typing indicators are especially useful for providing feedback to users while the agent is thinking or generating a response that may take some time, creating a more engaging conversational experience.

**Expiration:** Typing indicators automatically expire after around 20 seconds or when the agent sends a message, whichever comes first.

**Frequency:** You can send typing indicators as many times as needed, though only one will be displayed at a time. Sending multiple typing indicators will extend the duration of the current indicator.

> **Note:** Typing indicators are best-effort hints, not delivery-guaranteed state. The platform is allowed to coalesce or drop them, and the client UI decides when to show/hide.
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
await client.messages.rcs.sendTyping({
    agentId: "agent_pinnacle",
    to: "+14154746461",
    options: {
        test_mode: false
    }
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

**request:** `Pinnacle.messages.SendTypingIndicatorSchema` 
    
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
    quickReplies: [{
            type: "openUrl",
            payload: "payload",
            title: "title"
        }],
    text: "text"
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

## Messages Blast
<details><summary><code>client.messages.blast.<a href="/src/api/resources/messages/resources/blast/client/Client.ts">sms</a>({ ...params }) -> Pinnacle.BlastSmsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send an SMS message to all contacts in an audience. <br>

Messages are distributed evenly across the provided sender phone numbers. <br>

Use the optional `schedule` parameter in `options` to schedule the blast for future delivery. When scheduled, the response will contain a `scheduleId` instead of blast details.
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
await client.messages.blast.sms({
    audienceId: "aud_abc123",
    senders: ["+14155164736", "+14155164737"],
    message: {
        text: "Hello from Pinnacle!"
    }
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

**request:** `Pinnacle.messages.BlastSms` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Blast.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.messages.blast.<a href="/src/api/resources/messages/resources/blast/client/Client.ts">mms</a>({ ...params }) -> Pinnacle.BlastMmsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send an MMS message to all contacts in an audience. <br>

Messages are distributed evenly across the provided sender phone numbers. <br>

Use the optional `schedule` parameter in `options` to schedule the blast for future delivery. When scheduled, the response will contain a `scheduleId` instead of blast details.
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
await client.messages.blast.mms({
    audienceId: "aud_abc123",
    senders: ["+14155164736", "+14155164737"],
    message: {
        mediaUrls: ["https://fastly.picsum.photos/id/941/300/300.jpg"],
        text: "Check out this image!"
    },
    options: {
        validate: true
    }
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

**request:** `Pinnacle.messages.BlastMms` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Blast.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.messages.blast.<a href="/src/api/resources/messages/resources/blast/client/Client.ts">rcs</a>({ ...params }) -> Pinnacle.BlastRcsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send an RCS message to all contacts in an audience. <br>

Messages are distributed evenly across the provided RCS agents for load balancing. Requires active RCS agents and recipient devices that support RCS Business Messaging. <br>

Use the optional `schedule` parameter in `options` to schedule the blast for future delivery. When scheduled, the response will contain a `scheduleId` instead of blast details.
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
await client.messages.blast.rcs({
    audienceId: "aud_abc123",
    senders: ["agent_pinnacle", "agent_pinnacle2"],
    message: {
        quickReplies: [{
                type: "trigger",
                payload: "payload",
                title: "title"
            }],
        text: "Hello from Pinnacle RCS!"
    },
    fallback: {
        from: "+14155164736",
        text: "Hello from Pinnacle! Reply LEARN to learn more."
    },
    options: {
        transcode: true,
        validate: true
    }
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

**request:** `Pinnacle.messages.BlastRcs` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Blast.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Messages Schedule
<details><summary><code>client.messages.schedule.<a href="/src/api/resources/messages/resources/schedule/client/Client.ts">cancel</a>(id) -> Pinnacle.ScheduleCancelResult</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Cancel a scheduled message or blast. <br>

Works for both individual scheduled messages and scheduled blasts. Use the `scheduleId` returned when the message or blast was scheduled.
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
await client.messages.schedule.cancel("id");

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

**id:** `string` — Unique identifier of the scheduled message. This identifier is a string that always begins with the prefix `msg_sched_`, for example: `msg_sched_1234567890`.
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Schedule.RequestOptions` 
    
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
    webhookId: "wh_1234567890",
    event: "MESSAGE.STATUS"
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
await client.phoneNumbers.webhook.detach("+14155551234", "wh_1234567890");

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

**webhookId:** `string` 

The unique identifier of the webhook you want to detach from the phone number. <br>

This must be a valid webhook ID that is currently attached to the specified phone number. This identifier is a string that always begins with the prefix `wh_`, for example: `wh_1234567890`.
    
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
    campaignId: "tf_1234567890"
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
    phones: ["+14155559876", "14155550111"]
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
await client.status.get.brand("b_1234567890");

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

**brandId:** `string` — The unique identifier of the brand you want to retrieve the status for. This identifier is a string that always begins with the prefix `b_`, for example: `b_1234567890`.
    
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
await client.status.get.tollFree("tf_1234567890");

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

**campaignId:** `string` — The unique identifier of the toll-free campaign you want to retrieve the status for. This identifier is a string that always begins with the prefix `tf_`, for example: `tf_1234567890`.
    
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
await client.status.get.dlc("dlc_1234567890");

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

**campaignId:** `string` — The unique identifier of the 10DLC campaign you want to retrieve the status for. This identifier is a string that always begins with the prefix `dlc_`, for example: `dlc_1234567890`.
    
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
await client.status.get.rcs("rcs_1234567890");

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

**campaignId:** `string` — The unique identifier of the RCS campaign you want to retrieve the status for. This identifier is a string that always begins with the prefix `rcs_`, for example: `rcs_1234567890`.
    
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
        expiresAt: "2025-06-23T16:18:25.000Z"
    }
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
    url: "https://www.pinnacle.sh/"
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
        deleteAt: "2025-12-31T23:59:59Z",
        download: {
            expiresAt: "2025-06-30T12:00:00.000Z"
        }
    }
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
    urls: ["https://server.trypinnacle.app/storage/v1/object/sign/vault/3/test.jpg?token=oldtoken", "https://server.trypinnacle.app/storage/v1/object/sign/vault/3/document.pdf?token=oldtoken2", "invalid/url", "https://google.com"]
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
    id: "cc_1234567890"
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
    id: "cc_1234567890",
    formattedName: "Jane Smith",
    name: {
        familyName: "Smith",
        givenName: "Jane",
        additionalNames: ["A."],
        honorificPrefixes: ["Dr."],
        honorificSuffixes: ["PhD"]
    },
    nickname: ["Janie"],
    birthday: "1990-02-15",
    addresses: [{
            countryName: "USA",
            extendedAddress: "Apt. 4B",
            locality: "Anytown",
            postalCode: "90210",
            postOfficeBox: "PO Box 123",
            region: "CA",
            streetAddress: "123 Main St",
            type: ["HOME", "PREF"]
        }],
    url: "https://app.pinnacle.sh",
    phones: [{
            type: ["CELL"],
            value: "+15551234567"
        }],
    emails: [{
            type: ["INTERNET"],
            value: "jane.smith@example.com"
        }],
    timezone: "America/Los_Angeles",
    geo: {
        latitude: 34.0522,
        longitude: -118.2437
    },
    title: "Engineer",
    role: "Developer",
    organization: {
        name: "Acme Co",
        units: ["Engineering", "R&D"]
    },
    categories: ["Friend", "Colleague"],
    note: "Test contact entry",
    photo: "https://fastly.picsum.photos/id/853/200/200.jpg?hmac=f4LF-tVBBnJb9PQAVEO8GCTGWgLUnxQLw44rUofE6mQ"
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
