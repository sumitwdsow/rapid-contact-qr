
# EmergencyCall.me - Complete Website Plan

## Overview
A modern, mobile-first QR safety tag platform for Indian users with a fintech-inspired design, friendly illustrations, and a focus on trust and safety.

---

## 🎨 Design System

**Color Palette:**
- **Primary**: Deep Saffron/Orange (#FF6B35) - energy, urgency, Indian identity
- **Secondary**: Navy Blue (#1E3A5F) - trust, security, professionalism  
- **Accent**: Emerald Green (#10B981) - safety, success indicators
- **Background**: Clean white with light grey sections
- **Gradients**: Orange-to-red for CTAs, subtle blue gradients for sections

**Typography & Style:**
- Modern fintech aesthetic with friendly touches
- Rounded corners throughout
- Soft shadows and clean cards
- Large, touch-friendly buttons (mobile-first)
- Simple iconography with occasional friendly illustrations

---

## 📄 Page Structure

### 1. Homepage
A conversion-focused landing page that builds trust and explains the product.

**Sections:**
- **Hero**: Bold headline "Protect Your Vehicle & Home" with animated illustration, primary CTA button
- **How It Works**: 3-step visual flow (Scan → Contact → Help) with icons
- **Product Categories**: Cards for Bike, Car, and Home QR options
- **Benefits**: Safety messaging, privacy protection, quick emergency response
- **Testimonials**: User quotes with photos (placeholder)
- **FAQ**: Accordion-style common questions
- **Footer**: Links, contact, social media, "Made in India" badge

---

### 2. QR Purchase Flow (Multi-Step Form)

**Step 1 - Select QR Type**
- Visual cards for Bike, Car, and Home options
- Clean icons and descriptions
- Progress indicator at top

**Step 2 - Enter Details**
*For Bike/Car:*
- Vehicle Number field with "Verify" button (mocked verification)
- Owner Name
- Address (text input)
- Emergency Contact 1 (name + phone)
- Emergency Contact 2 (name + phone)

*For Home:*
- Owner Name
- Address with location picker (Google Maps integration)
- Emergency Contact 1 (name + phone)
- Emergency Contact 2 (name + phone)

**Step 3 - Delivery Options**
- Toggle between Digital QR and Physical QR Tag
- *Digital*: WhatsApp number, Email, instant delivery note
- *Physical*: Delivery address, price display (₹199), shipping info, 3-5 day delivery estimate

**Step 4 - Checkout**
- Order summary card
- Razorpay integration for payments (UPI, Cards, Net Banking, Wallets)
- Price in INR with GST breakdown

**Step 5 - Confirmation**
- Success animation
- Order details
- QR code preview
- Download QR button
- Next steps instructions

---

### 3. Emergency Contact Page (QR Scan Destination)

When someone scans a QR code, they see:
- Emergency banner with urgency indicator
- Vehicle/Home details (type, registration)
- Owner name (first name only for privacy)
- Two emergency contact buttons (click-to-call)
- "Report Emergency" button
- Safety messaging about privacy protection

---

### 4. Simple Dashboard (Order Tracking)

A basic page where users can:
- Track their order status
- View order history
- Download QR codes
- See order details

*Note: Full account management can be added later with authentication*

---

## 🔧 Technical Approach

**Frontend:**
- React with TypeScript
- Tailwind CSS for styling
- Mobile-first responsive design
- Form validation with Zod
- Multi-step form with progress tracking

**Backend (Supabase):**
- Database tables for orders, QR registrations, contacts
- Edge function for Razorpay payment processing
- QR code generation and storage

**Integrations:**
- Razorpay for payments (you'll need to provide API keys)
- Google Maps for location picker (you'll need API key)
- Mocked vehicle verification (can connect real API later)

---

## 📱 Mobile-First Features

- Large tap targets (48px minimum)
- Sticky CTAs on scroll
- Swipeable product cards
- Bottom-sheet style modals
- Simplified forms with smart defaults
- One-thumb navigation

---

## 🚀 Deliverables

1. Complete responsive homepage
2. Multi-step purchase flow with all form types
3. Checkout with Razorpay-ready integration
4. Order confirmation with QR preview
5. Emergency contact page (QR scan destination)
6. Basic order tracking dashboard
7. Supabase database setup for orders and QR data
