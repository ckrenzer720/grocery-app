# Grocery List Manager App

A modern, intuitive grocery list application built with React Native for iOS users. Organize your shopping by store sections and efficiently manage your grocery shopping experience.

## 🎯 Project Overview

The Grocery List Manager is a productivity app designed to simplify grocery shopping by providing an organized, user-friendly interface for managing shopping lists. Users can categorize items by store sections, quickly add/remove items, and mark them off as they shop.

## ✨ Key Features

- **Smart List Management**: Add, edit, and remove grocery items with ease
- **Store Section Organization**: Categorize items by produce, dairy, meat, pantry, etc.
- **Intuitive Interface**: Clean, modern design inspired by AnyList
- **Offline Functionality**: Works without internet connection
- **Cross-Device Sync**: Access your lists from multiple devices
- **Quick Actions**: Mark off items with single tap, swipe to delete

## 🚀 Tech Stack

- **Frontend Framework**: React Native with Expo
- **Navigation**: React Navigation 6
- **State Management**: Redux Toolkit
- **Local Storage**: AsyncStorage
- **Cloud Sync**: Firebase
- **UI Components**: React Native Elements
- **Icons**: Expo Vector Icons
- **Development Platform**: iOS (iPhone/iPad)

## 🏗️ Project Structure

```
grocery-app/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── common/          # Generic components using React Native Elements
│   │   │   ├── CustomButton.jsx     # Wrapper around RNE Button with Tailwind
│   │   │   ├── CustomInput.jsx      # Wrapper around RNE Input with Tailwind
│   │   │   └── CustomListItem.jsx   # Wrapper around RNE ListItem with Tailwind
│   │   ├── list/            # List-specific components
│   │   ├── category/        # Category/section components
│   │   └── item/            # Individual item components
│   ├── screens/              # App screens/pages
│   │   ├── MainList.jsx     # Primary shopping list screen
│   │   ├── Settings.jsx     # App settings and preferences
│   │   └── History.jsx      # Shopping history (future)
│   ├── navigation/           # Navigation configuration
│   │   ├── AppNavigator.jsx # Main navigation setup
│   │   └── navigationTypes.js # Navigation type definitions
│   ├── store/                # Redux state management
│   │   ├── slices/          # Redux Toolkit slices
│   │   │   ├── listSlice.js # Shopping list state
│   │   │   ├── categorySlice.js # Category management
│   │   │   └── settingsSlice.js # App settings
│   │   ├── store.js         # Redux store configuration
│   │   └── storeTypes.js    # State type definitions
│   ├── services/             # Business logic and external services
│   │   ├── storage/         # Local storage operations
│   │   ├── categories/      # Category logic and auto-assignment
│   │   └── sync/            # Future cloud sync (Phase 3)
│   ├── utils/                # Helper functions and utilities
│   │   ├── constants.js     # App constants
│   │   ├── helpers.js       # General helper functions
│   │   └── validation.js    # Input validation logic
│   ├── hooks/                # Custom React hooks
│   │   ├── useList.js       # List management logic
│   │   ├── useStorage.js    # Storage operations
│   │   └── useCategories.js # Category management
│   └── styles/               # Global styles and themes
│       ├── tailwind.config.js # Tailwind configuration for NativeWind
│       └── theme.js          # Custom theme extensions
├── assets/                    # Static assets
│   ├── images/               # App images and icons
│   ├── fonts/                # Custom fonts (if any)
│   └── icons/                # App-specific icons
├── docs/                      # Project documentation
│   ├── CORE_FEATURES.md      # Already exists
│   ├── API.md                # API documentation (future)
│   └── COMPONENTS.md         # Component documentation
├── tests/                     # Test files
│   ├── components/           # Component tests
│   ├── hooks/                # Hook tests
│   ├── utils/                # Utility function tests
│   └── setup/                # Test configuration
├── .expo/                     # Expo configuration
├── app.json                   # Expo app configuration
├── package.json               # Dependencies and scripts
├── babel.config.js            # Babel configuration
├── metro.config.js            # Metro bundler configuration
├── tailwind.config.js         # Root Tailwind configuration
├── nativewind-env.js          # NativeWind configuration
├── jest.config.js             # Jest configuration
└── README.md                  # Already exists
```

## 🎨 Design Philosophy

- **Clean & Modern**: Minimalist interface with intuitive navigation
- **User-Centric**: Designed for quick, efficient grocery list management
- **Accessibility**: Easy-to-read fonts and clear visual hierarchy
- **Performance**: Fast, responsive interactions with smooth animations

## 📱 Target Audience

- **Primary**: iPhone users of all ages who grocery shop regularly
- **Secondary**: Families who share grocery responsibilities
- **Tertiary**: Anyone looking for an organized shopping experience

## 🗺️ Development Roadmap

### Phase 1: MVP (Weeks 1-3)

- Basic list functionality
- Category organization
- Add/remove/check off items
- Local storage

### Phase 2: Enhanced (Weeks 4-6)

- Search functionality
- List history
- Improved UI/UX
- Basic settings

### Phase 3: Advanced (Weeks 7-10)

- Cloud sync
- User accounts
- Family sharing
- Advanced features

## 🛠️ Development Setup

### Prerequisites

- macOS (required for iOS development)
- Xcode (latest version)
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI

### Installation

```bash
# Start the development server
npm start

# Run on iOS simulator
npm run ios
```

## 📋 Core Features

See [CORE_FEATURES.md](./docs/CORE_FEATURES.md) for detailed feature specifications.

## 🤝 Contributing

This is a personal project for learning and portfolio development. Contributions and suggestions are welcome!

## My Approach

# Phase 1: Windows Development (Weeks 1-6)

Set up project structure
Develop all core features
Implement UI components
Set up state management
Test on Android and web
Implement local storage
Add navigation

# Phase 2: macOS Testing & Polish (Weeks 7-8)

Transfer to macOS
Test on iOS Simulator
iOS-specific adjustments
Performance optimization
Final testing
App Store preparation

<!-- Initialize the Expo project with the right configuration
Install dependencies (React Native Elements, NativeWind, Redux Toolkit, etc.)
Set up the folder structure as outlined above
Configure NativeWind for Tailwind CSS support
Set up Jest testing infrastructure
Create basic component templates using React Native Elements
The beauty of this setup is that you'll be able to:
Develop rapidly with pre-built components
Style quickly using familiar Tailwind classes
Test thoroughly from the start
Scale easily as you add more features -->
