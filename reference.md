# Reference

<details><summary><code>client.<a href="/src/Client.ts">send</a>({ ...params }) -> Pinnacle.SendResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Send a SMS or RCS message to a phone number

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
await client.send({
    phoneNumber: "phone_number",
    messageType: "card",
    message: {
        cards: [
            {
                title: "title",
            },
        ],
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

**request:** `Pinnacle.SendRequest`

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
