# Eclips Travels - Customization Guide

## Quick Customization Instructions

### 1. Update Company Information

**File:** `index.html`

**Find and replace:**

#### Phone Number
- Find: `+27 (0) 21 456 7890`
- Replace with: Your actual phone number

#### Email
- Find: `info@eclipstravels.co.za`
- Replace with: Your actual email

#### Location/Address
- Find: `Cape Town, South Africa`
- Replace with: Your specific address if different

#### WhatsApp Number
- Find: `https://wa.me/27214567890`
- Replace with: `https://wa.me/[YOUR_COUNTRY_CODE][YOUR_NUMBER]` (remove the +)
- Example: `https://wa.me/27214567890` means +27 21 456 7890

---

### 2. Change Colors

**File:** `css/style.css`

Find the `:root` section at the top (around line 8-13):

```css
:root {
    --primary-color: #3498db;      /* Main blue color */
    --secondary-color: #1abc9c;    /* Teal color */
    --accent-color: #e74c3c;       /* Red color */
    --dark-color: #2c3e50;         /* Dark text */
    --light-color: #ecf0f1;        /* Light background */
}
```

**Replace hex codes with your brand colors:**
- Primary: Main brand color (buttons, highlights)
- Secondary: Accent color (gradients, hover effects)
- Accent: Alert/CTA color (important messages)

**Color Resources:**
- [Colorpicker.com](https://www.colorpicker.com/)
- [Coolors.co](https://coolors.co/) - Generate color palettes
- [Adobe Color](https://color.adobe.com/)

---

### 3. Update Navigation Text

**File:** `index.html`

Find the navbar section (around line 17):

```html
<ul class="navbar-nav ms-auto">
    <li class="nav-item"><a class="nav-link" href="#home">Home</a></li>
    <li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
    <!-- Edit these text values -->
</ul>
```

Change the text between `>` and `</a>` to customize menu items.

---

### 4. Modify Service Offerings

**File:** `index.html`

Find the Services section (around line 80):

```html
<div class="col-md-6 col-lg-3">
    <div class="service-card">
        <div class="icon-box">
            <i class="fas fa-plane"></i>  <!-- Change icon here -->
        </div>
        <h5 class="mt-3">Airport Transfers</h5>  <!-- Change service name -->
        <p>Professional airport pickup...</p>  <!-- Change description -->
        <small class="text-primary">Fixed competitive rates</small>  <!-- Change highlight -->
    </div>
</div>
```

**To change icons:**
1. Go to [fontawesome.com](https://fontawesome.com/icons)
2. Search for icon you want
3. Copy the class name
4. Replace `fas fa-plane` with new icon class

**Example icon classes:**
- `fas fa-car` - Car
- `fas fa-bus` - Bus
- `fas fa-map` - Map/Location
- `fas fa-star` - Star
- `fas fa-users` - People
- `fas fa-phone` - Phone

---

### 5. Update Fleet Information

**File:** `index.html`

Find the Fleet section (around line 150):

```html
<h5 class="mt-3 mb-2">Standard Sedan</h5>
<p class="text-muted">Up to 4 passengers | Air-conditioned | Premium comfort</p>
```

Update vehicle names, capacities, and features to match your actual fleet.

---

### 6. Add Real Testimonials

**File:** `index.html`

Find the Testimonials section (around line 210):

```html
<div class="testimonial-card">
    <div class="stars mb-2">
        <i class="fas fa-star"></i>  <!-- Add/remove stars (max 5) -->
    </div>
    <p>"Excellent service! The driver was punctual..."</p>  <!-- Change quote -->
    <div class="d-flex align-items-center mt-3">
        <div class="avatar me-3">
            <i class="fas fa-user-circle"></i>
        </div>
        <div>
            <strong>Sarah Johnson</strong>  <!-- Change name -->
            <br><small class="text-muted">Business Traveler</small>  <!-- Change title -->
        </div>
    </div>
</div>
```

**To add customer photos:**
Replace:
```html
<div class="avatar me-3">
    <i class="fas fa-user-circle"></i>
</div>
```

With:
```html
<div class="avatar me-3">
    <img src="images/customer1.jpg" alt="Customer Name" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;">
</div>
```

---

### 7. Update Contact Form Fields

**File:** `index.html`

Find the form section (around line 260):

You can:
- Add new fields
- Remove unwanted fields
- Change field labels
- Modify dropdown options

**Example - Add pickup location field:**
```html
<div class="col-md-6">
    <label for="pickup" class="form-label">Pickup Location</label>
    <input type="text" class="form-control form-control-lg" id="pickup" required>
</div>
```

---

### 8. Change Logo

**Option 1: Replace SVG Logo**
1. Create new SVG file or export from design tool
2. Save as `logo.svg` in `images/` folder
3. The website will automatically use the new logo

**Option 2: Use PNG/JPG Logo**
1. Save logo as PNG or JPG
2. In `index.html`, find line ~16:
```html
<img src="data:image/svg+xml,...logo..." alt="Eclips Logo" class="logo-nav">
```
3. Replace with:
```html
<img src="images/your-logo.png" alt="Eclips Travels" class="logo-nav">
```

**Logo Best Practices:**
- Size: at least 200x200px
- Format: PNG with transparency or SVG
- Keep aspect ratio 1:1 for best results

---

### 9. Add Social Media Links

**File:** `index.html`

Find the footer section (around line 340):

```html
<div class="social-links">
    <a href="https://facebook.com/eclipstravels" class="me-3"><i class="fab fa-facebook"></i></a>
    <a href="https://twitter.com/eclipstravels" class="me-3"><i class="fab fa-twitter"></i></a>
    <a href="https://instagram.com/eclipstravels" class="me-3"><i class="fab fa-instagram"></i></a>
    <a href="https://wa.me/27214567890"><i class="fab fa-whatsapp"></i></a>
</div>
```

Replace URLs with your actual social media handles.

**Social media icon classes:**
- `fab fa-facebook`
- `fab fa-twitter`
- `fab fa-instagram`
- `fab fa-tiktok`
- `fab fa-linkedin`
- `fab fa-whatsapp`
- `fab fa-youtube`

---

### 10. Replace SVG Graphics with Real Images

**Current SVG locations:**
- `images/logo.svg` - Company logo
- `images/banner.svg` - Hero section vehicle
- Vehicle illustrations in Fleet section

**How to replace:**

1. Create or source image files
2. Save in `images/` folder
3. Update HTML src attributes

**Example - Replace hero vehicle:**

Find in HTML (around line 67):
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
    <!-- SVG code here -->
</svg>
```

Replace with:
```html
<img src="images/shuttle.jpg" alt="Our Shuttle" class="img-fluid">
```

---

### 11. Update Hero Section Text

**File:** `index.html` (around line 50)

```html
<h1 class="display-3 fw-bold mb-4">Premium Shuttle & Transfer Services</h1>
<p class="lead mb-4">Experience luxury transportation across Cape Town...</p>
```

Change the headline and description to match your brand voice.

---

### 12. Modify Button Text

**File:** `index.html`

Find buttons and change text:
```html
<a href="#contact" class="btn btn-primary btn-lg me-3">Book Now</a>
<a href="#services" class="btn btn-outline-light btn-lg">Learn More</a>
```

---

### 13. Update Meta Information

**File:** `index.html` (top of file, around line 5)

```html
<title>Eclips Travels - Premium Shuttle & Transfer Services Cape Town</title>
```

Change the page title that appears in browser tabs and search results.

**Add/update description (around line 7):**
```html
<meta name="description" content="Experience luxury transportation across Cape Town with Eclips Travels. Safe, reliable shuttle and transfer services.">
```

---

### 14. Change Text in About Section

The website doesn't have a dedicated About section, but you can add one:

1. Add new section in HTML after Hero
2. Style using existing CSS patterns
3. Include company history, values, mission

---

### 15. Update Years/Copyright

**File:** `index.html` (footer around line 340)

Find:
```html
<p class="mb-0">&copy; 2024 Eclips Travels. All rights reserved.</p>
```

Change `2024` to current year or range: `2024 © Eclips Travels`

---

## Advanced Customizations

### Add Custom CSS
Create a new file `css/custom.css` and link it after `style.css`:
```html
<link rel="stylesheet" href="css/custom.css">
```

Then add your custom styles there.

### Add Analytics
In `index.html`, add before closing `</body>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual ID.

### Add Favicon
Add to `<head>` section:
```html
<link rel="shortcut icon" href="images/logo.svg" type="image/svg+xml">
```

---

## Testing Your Changes

After making customizations:

1. **Save files**
2. **Refresh browser** (Ctrl+Shift+R or Cmd+Shift+R for hard refresh)
3. **Test on mobile** (use browser dev tools)
4. **Check form submission**
5. **Verify all links work**
6. **Look for broken images**

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Changes don't appear | Clear browser cache (Ctrl+Shift+R) |
| Images not showing | Check file paths in HTML |
| Styling looks broken | Verify CSS file is linked correctly |
| Form not working | Check browser console for errors |
| Colors look different | Check hex codes are correct |

---

## Need More Help?

- Check **README.md** for general info
- Check **DEPLOYMENT.md** for hosting help
- Check **CHECKLIST.md** for launch checklist
- Search [MDN Web Docs](https://developer.mozilla.org/) for HTML/CSS help

---

**Happy customizing! 🎨**
