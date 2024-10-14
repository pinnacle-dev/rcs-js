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
    text: "text",
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
