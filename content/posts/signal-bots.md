---
title: Signal Bot Registration
date: 2024-11-13 09:00:00
tags:
    - signal
    - bot
categories:
    - homelab
keywords:
    - markdown
    - code block
---

# Prepare environment  

``` bash
sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo apt install docker-compose
git clone https://github.com/bbernhard/signal-cli-rest-api.git
cd signal-cli-rest-api
docker-compose up -d
sudo docker update --restart always signal-cli-rest-api-signal-cli-rest-api-1
```

# Register number

	1.	Go to Signal Captcha Generator.
	2.	Complete the CAPTCHA as instructed.
	3.	Right-click on the “Open Signal” link and select “Copy URL.”
	4.	Extract the token from the URL. It will look something Step 2: Solve the CAPTCHA


https://signalcaptchas.org/registration/generate

Send the captcha

```bash
curl -X POST -H "Content-Type: application/json" -d '{"captcha":"signal-hcaptcha.5fad97ac-7d06-4e44-b18a-b950b20148ff.registration.P1_eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.hadwYXNza2V5xQQH3GDDUmGrgkC2BPebvkolZL--DJy1Ht8ZjpvpuMm_IxHscjVYDG-SBB5jwUPzgtgf_JcPylrcVSEWCA2zpRhnSMIfSDSmmb_ovd-XQtyVdckeUyp2kGkwCVOz11IORZqH4elUhadPZ9YrXpOlVBL5CgK2i5J-_TR0J_DSQrXJyyg9FxabA_z2LOo5I0o8YVMWONXzvTVNkIzY4peTHjcHY1tM0fNZh13x9unB3oADKgpUdoJ620IjwO81932cwARhg7YaL2Nw5xpepz_ktDtc1yOFz28T3yXcYlBlllp2HCfFPur5ec1BU2_0SqNE3o9O7k3a5gtLUrcSxNxhYciQSDMIESiln2qTa8VFlU_Dxp45hi4C_YlPWmk8bi3MfX8OLRTtQNv9S7HudC558v-wg0Tt_rvUvmgIWh5Ykji8rgHUNYY-2iWuqzbV9UkklU1O0LaNRMVtsVhBKqwW8JYIchkkgR91pbl2IuoVYXEkw_6HUJf20LS0Za5chxVi40URRc_9huhtWbtOUJsfsmObViPAdK2a4G-fPhmxX1Ck0-7r3SbVxPs7pyM5juiamVkF0axkxJ0MT0Ok9hO6OBZh6PBvgnwpe5TTcBKCthJsThGgerCY4xrc6ovAHs6O8_G7FZdQxVQkX2Jyo6xF334xkTiiWFKixjKrR5gSiHvS0Xw6icG4WoG8CCz1R5mFzd-ZPCoMdhw_uVJfNsnG8Pl6_7iLyrkPJteKJx40dJHScxH4EJikErFFootBQnX7_35AVA5vk7rqwFybZUQ-MK3H_FkP919PfxZg2YQZSv318GKN4QZ6V-BmtUazjpFQ7k4W1EuxlyWPcl2Rg3_Avk_e4B_FnxmU54gd2rje47nyGiNlEIBBnglxlGHEX5jUz27-h-ddf2umvbxfuY-ZXTF49jCXAov5pHwHHc2MoQEUYi6TWjeBj5Z4-zTtegcafi_9fwTQ7YpX1Qeiv1GjZ6TsfM3Gbuh83SETrOUE0WaThF46CV76YVKV57UbmIkrCPWG0OScTkvwo6dGdBrB2jXryxRz7gOTOpjxBJDFm1BiL6NCypJKVgyYiclxYuDZ76gC1bBjYzxLysCVOgErysTI4pWDzvA4kcCO47epaR_VtyB3uYV6N8hEzapKbBgryockCCwW8KU5y_K-UySbOjIkrRr0ZwRXPRxhzZoGZQQ6RlV3PoY_2msJuOKrZe9w-is6CHtaA5DmJkEVdnPrNgt2lt2T4vWXtMw9oE-I718Pq7se8Bqu1Dk9zvIQamlnosW5JARs870UeS543I_xid8fCBudkxaYR9iKiDl27RveVhFKBMXXDucVtGvRsKFhv5d5czKiNjJQj7MhCQCxYuGdaRdicjezO3CjZXhwzmc0dNuoc2hhcmRfaWTOAzGDb6JrcqgyOThhZTdhNqJwZAA.BHUrN00d5QCWdZPAR2DiqLhaulS0XYm4Sh0xDxKrDlw"}' http://localhost:8080/v1/register/{number}
```
Wait and send the SMS verification request

```bash
curl -X POST -H "Content-Type: application/json" -d '{"verification_code": "{code-sms}"}' http://localhost:8080/v1/register/{number}/verify/{code-sms}
```

Test if it is working by sending a message to your own number

```bash
curl -X POST -H "Content-Type: application/json" -d '{"message": "Hello, this is a test message!", "number": "{number}", "recipients": ["{friend-number}"]}' http://localhost:8080/v2/send
```


