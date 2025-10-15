# 🤖 NextWaves Chatbot Setup Guide

## Environment Variables Setup

To enable the chatbot with AI capabilities, you need to set up environment variables:

### 1. Create `.env` file in your project root

Create a `.env` file in `d:\code\nextwaves\nextwaves\` with the following content:

```env
# Chatbot API Configuration
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_CHATBOT_ENABLED=true

# Optional: Other API keys for future features
# VITE_EMAIL_SERVICE_API_KEY=your_email_service_key
# VITE_APPOINTMENT_API_KEY=your_appointment_service_key
```

### 2. Get OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/)
2. Sign up or log in to your account
3. Navigate to "API Keys" section
4. Create a new API key
5. Copy the key and replace `your_openai_api_key_here` in your `.env` file

### 3. Restart Development Server

After creating the `.env` file:

```bash
# Stop your current dev server (Ctrl+C)
# Then restart it
npm run dev
```

## Chatbot Features

### ✅ What's Included:

1. **Smart Responses**: Pre-programmed responses for common questions
2. **AI Integration**: OpenAI GPT-3.5-turbo for advanced conversations
3. **Appointment Booking**: Complete booking form with validation
4. **Responsive Design**: Works on all devices
5. **Theme Support**: Matches your website's dark/light theme
6. **Professional UI**: Modern chat interface with animations

### 🎯 Chatbot Capabilities:

- **Service Information**: Answers about web development, mobile apps, UI/UX, etc.
- **Appointment Booking**: Opens booking form when users ask about scheduling
- **Pricing Inquiries**: Handles questions about costs and quotes
- **Contact Information**: Provides contact details and response times
- **General Support**: AI-powered responses for other questions

### 📱 User Experience:

- **Floating Chat Button**: Always visible in bottom-right corner
- **Smooth Animations**: Professional transitions and interactions
- **Typing Indicators**: Shows when bot is responding
- **Message History**: Maintains conversation context
- **Quick Actions**: Easy appointment booking integration

## Security Notes

- ✅ API keys are stored in `.env` file (already in `.gitignore`)
- ✅ Environment variables are prefixed with `VITE_` for client-side access
- ✅ Fallback responses work even without API key
- ✅ No sensitive data is logged or stored

## Customization

### Adding New Responses:
Edit `src/Components/Chatbot.jsx` and modify the `getBotResponse` function to add new quick responses.

### Styling:
The chatbot uses Tailwind CSS classes and can be customized by modifying the component styles.

### Appointment Form:
The booking form in `src/Components/AppointmentBooking.jsx` can be customized for your specific services and time slots.

## Deployment

When deploying to Vercel/Netlify:

1. Add environment variables in your deployment platform's dashboard
2. Set `VITE_OPENAI_API_KEY` to your actual API key
3. Deploy - the chatbot will work automatically!

## Support

The chatbot includes fallback responses, so it works even without an API key. Users will still get helpful responses about your services and can book appointments.
