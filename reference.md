# Reference

<details><summary><code>client.<a href="/src/Client.ts">getRcsFunctionality</a>({ ...params }) -> Pinnacle.RcsFunctionalities</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the RCS functionality of a phone number. For example checks if a phone number can receive RCS message and if it can receive RCS carousels.

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
await client.getRcsFunctionality();
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

**request:** `Pinnacle.GetRcsFunctionalityRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PinnacleClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

##

## Company

<details><summary><code>client.company.<a href="/src/api/resources/company/client/Client.ts">get</a>({ ...params }) -> Pinnacle.Company[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieve the company's information (i.e. approval status, company name, etc.). Search by company ID or company name.

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
await client.company.get();
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

**request:** `Pinnacle.CompanyGetRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Company.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.company.<a href="/src/api/resources/company/client/Client.ts">register</a>({ ...params }) -> Pinnacle.CompanyRegisterResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Register a company for RCS with the Pinnacle platform

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
await client.company.register({
    company: {
        name: "name",
        category: "Entertainment",
        address: "address",
        ein: "ein",
        description: "description",
        brandColor: "brandColor",
        logoUrl: "logoUrl",
        heroUrl: "heroUrl",
    },
    companyContact: {
        primaryWebsiteUrl: "primaryWebsiteUrl",
        primaryWebsiteLabel: "primaryWebsiteLabel",
        primaryPhone: "primaryPhone",
        primaryPhoneLabel: "primaryPhoneLabel",
        primaryEmail: "primaryEmail",
        primaryEmailLabel: "primaryEmailLabel",
        privacyPolicyUrl: "privacyPolicyUrl",
        tosUrl: "tosUrl",
    },
    messaging: {
        optIn: "By opting in, you agree to receive messages from Pinnacle, including updates and promotions. Reply \u201CSTOP\u201D to unsubscribe. Standard message and data rates may apply.",
        optOut: "Reply with keywords like STOP or UNSUBSCRIBE to opt-out. A confirmation message will be sent, and no further messages will be received unless you re-subscribe.",
        optOutKeywords: ["STOP", "UNSUBSCRIBE"],
        agentUseCase:
            "Pinnacle\u2019s agent assists with product updates, promotions, order tracking, and support. It answers FAQs, provides order updates, and helps with opt-in/out processes. Escalates to live support when needed.",
        expectedAgentResponses:
            "General Inquiry: \u201CHow can I assist you today?\u201D\nOrder Status: \u201CProvide your order number.\u201D\nOpt-In: \u201CYou\u2019re now subscribed!\u201D\nOpt-Out: \u201CYou have unsubscribed.\u201D\nEscalation: \u201CConnecting to a live agent.\u201D    \n",
    },
    pointOfContact: {
        pocName: "pocName",
        pocTitle: "pocTitle",
        pocEmail: "pocEmail",
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

**request:** `Pinnacle.CompanyRegisterRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Company.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.company.<a href="/src/api/resources/company/client/Client.ts">update</a>({ ...params }) -> Pinnacle.CompanyUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a company on the Pinnacle platform

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
await client.company.update({
    companyId: "companyId",
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

**request:** `Pinnacle.CompanyUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Company.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Send

<details><summary><code>client.send.<a href="/src/api/resources/send/client/Client.ts">rcs</a>({ ...params }) -> Pinnacle.SendRcsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send an interactive RCS message with text, media, or cards. Each message can only contain either text, media, or card(s).

Quick replies can also be added to the message.

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
await client.send.rcs({
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

**request:** `Pinnacle.Rcs`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Send.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.send.<a href="/src/api/resources/send/client/Client.ts">sms</a>({ ...params }) -> Pinnacle.SendSmsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send an SMS message to a recipient.

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
await client.send.sms({
    to: "to",
    from: "from",
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

**request:** `Pinnacle.SendSmsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Send.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.send.<a href="/src/api/resources/send/client/Client.ts">mms</a>({ ...params }) -> Pinnacle.SendMmsResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send an MMS message with media attachments.

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
await client.send.mms({
    to: "to",
    from: "from",
    mediaUrls: ["https://example.com/image1.jpg", "https://example.com/video.mp4"],
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

**request:** `Pinnacle.SendMmsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Send.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Tools

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">shortenUrl</a>({ ...params }) -> Pinnacle.ToolsShortenUrlResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a shortened URL with an optional expiration date (default and max expiration is 90 days). The shortened URL will redirect to the original URL and will have the following format https://urls.p1n.io/ABCD5678.

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
await client.tools.shortenUrl({
    url: "https://example.com",
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

**request:** `Pinnacle.ToolsShortenUrlRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.tools.<a href="/src/api/resources/tools/client/Client.ts">uploadUrl</a>({ ...params }) -> Pinnacle.ToolsUploadUrlResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate signed upload (expires in 2 hours) and download URLs for a file (expires in 1 hour).

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
await client.tools.uploadUrl({
    contentType: "image/png",
    size: 1024,
    name: "example.png",
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

**request:** `Pinnacle.ToolsUploadUrlRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tools.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
