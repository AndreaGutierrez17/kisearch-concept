# KI Platform — Modern concept inspired by kisearch.ch

This package includes a **fully static demo** for contests, with:

- **Hero con slider** y gradientes modernos.
- **Indicador de mercado (filtros)** que vincula varios módulos por categoría.
- **Módulos separados** cuando sus requisitos divergen (p.ej., *Modelos* con medidas + calendario/booking).
- **Expandable gallery by the client** (haz clic en una imagen para abrirla en modal).
- **Checkout (stub)** con anclajes para **PayPal** y **TWINT** (vía PSP).

> Goal: showcase creativity, speed, and a solid technical base; ready to evolve to production.

## Estructura
```
/assets/css/styles.css
/assets/js/app.js
/assets/img/ph-*.svg
index.html
checkout.html
README.md
```

## Edit images yourself
Replace the files in `assets/img/` por tus imágenes. Mantén el mismo nombre o actualiza la ruta en `index.html`. Las imágenes del header se usan en el slider; las de la galería tienen clase `zoomable` y se abren en modal.

## Payment integration
- **PayPal**: coloca tu `client-id` en el script de `checkout.html`. Guía oficial: https://developer.paypal.com/docs/checkout/
- **TWINT**: se integra mediante un **PSP** (Adyen, Checkout.com, Netaxept, Payrexx, etc.) ya que **la API pública no está disponible**. Recomendado: comenzar con Checkout.com (Flow) o Adyen (API-only), según tus bancos y país.

## Performance
- Sin frameworks (HTML/CSS/JS puro) → mínimo JS.
- Imágenes `lazy`, CSS único y fuentes del sistema.
- Listo para CDN estático (Vercel/Netlify/Cloudflare Pages).

## How to view
Abre `index.html` en tu navegador. Para PayPal, abre `checkout.html` y reemplaza `YOUR_CLIENT_ID` (modo *sandbox*).

---

Made with ❤️ to show a clean, winning proposal without heavy dependencies.
