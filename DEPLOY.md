# Deployment Guide — rungolf.club Marketing Site

## Railway setup

1. Create a new Railway service pointing to this repo (`hillviewkarl/rungolf-club`)
2. Set build command: `npm run build`
3. Set start command: `npm run start`
4. Set the custom domain: `rungolf.club`

## Required environment variables

Set all of these in Railway → your service → Variables:

```
NEXT_PUBLIC_APP_URL=https://rungolf.club
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX           # Google Analytics 4 measurement ID

NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...         # Never expose to browser

STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

STRIPE_PRICE_STARTER_MONTHLY=price_...
STRIPE_PRICE_STARTER_ANNUAL=price_...
STRIPE_PRICE_CLUB_MONTHLY=price_...
STRIPE_PRICE_CLUB_ANNUAL=price_...
STRIPE_PRICE_PRO_MONTHLY=price_...
STRIPE_PRICE_PRO_ANNUAL=price_...

RESEND_API_KEY=re_...
```

## Stripe setup

1. Create 6 products/prices in Stripe dashboard (Starter/Club/Pro × monthly/annual)
2. Annual prices should have `interval: year`
3. Add webhook endpoint: `https://rungolf.club/api/webhooks/stripe`
4. Enable event: `checkout.session.completed`
5. Copy webhook signing secret → `STRIPE_WEBHOOK_SECRET`

## Supabase setup

Uses the same Supabase project as the main app (`parpl-ai`).
The sales site only needs the service role key to:
- Check slug availability (read clubs)
- Provision clubs on signup (write clubs, members, auth users)

## DNS

| Record | Type | Value |
|--------|------|-------|
| `rungolf.club` | A / CNAME | Railway IP / domain |
| `www.rungolf.club` | CNAME | `rungolf.club` |

www → apex redirect is handled in `next.config.mjs`.

## Post-launch checklist

- [ ] `rungolf.club` resolves with valid SSL
- [ ] `/signup` flow completes with Stripe test card (4242 4242 4242 4242)
- [ ] Webhook creates club + user in Supabase on test payment
- [ ] Welcome email arrives from `no-reply@rungolf.club`
- [ ] Magic link in email opens correct dashboard URL
- [ ] Swap `STRIPE_SECRET_KEY` to live key
- [ ] Google Analytics recording sessions at `/`
- [ ] Submit `https://rungolf.club/sitemap.xml` to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Verify no console errors in production build
