# V5 Calls SDK Documentation

## Overview
Create comprehensive documentation for the V5 CometChat Calls SDK covering setup, authentication, session management, methods, and listeners.

## User Stories

### Story 1: SDK Overview & Setup
**As a** developer new to CometChat Calls SDK  
**I want** clear setup instructions and SDK overview  
**So that** I can quickly integrate calling into my application

#### Acceptance Criteria
- [ ] Overview page explains SDK capabilities and architecture
- [ ] Setup page covers installation, dependencies, and permissions
- [ ] CallAppSettings initialization is documented with examples
- [ ] Authentication methods (login with UID, authToken, logout) are documented

### Story 2: Join Session Documentation
**As a** developer implementing calling features  
**I want** detailed documentation on joining call sessions  
**So that** I can properly configure and start call sessions

#### Acceptance Criteria
- [ ] Generate Token method is documented
- [ ] SessionSettings builder with all configuration options is documented
- [ ] joinSession method with examples is documented
- [ ] CallSession object and its lifecycle is explained

### Story 3: Session Methods Documentation
**As a** developer controlling an active call session  
**I want** documentation for all CallSession methods  
**So that** I can implement audio/video controls, recording, and participant management

#### Acceptance Criteria
- [ ] Audio controls (mute, unmute, setAudioMode) are documented
- [ ] Video controls (pause, resume, switchCamera) are documented
- [ ] Recording methods (start, stop) are documented
- [ ] Participant actions (mute, pause video, pin) are documented
- [ ] Layout and UI methods are documented
- [ ] Session control methods (leave, raiseHand) are documented

### Story 4: Listeners Documentation
**As a** developer handling call events  
**I want** documentation for all listener interfaces  
**So that** I can respond to session, participant, and media events

#### Acceptance Criteria
- [ ] SessionStatusListener with all callbacks is documented
- [ ] ParticipantEventListener with all callbacks is documented
- [ ] MediaEventsListener with all callbacks is documented
- [ ] ButtonClickListener with all callbacks is documented
- [ ] LayoutListener with all callbacks is documented

### Story 5: External Resources
**As a** developer exploring the SDK  
**I want** links to sample apps and changelogs  
**So that** I can see working examples and track SDK updates

#### Acceptance Criteria
- [ ] Sample App link is included for each platform
- [ ] GitHub Changelog link is included for each platform

## Documentation Structure (Per Platform)
```
Calling SDK
├── Overview
├── Getting Started
│   ├── Setup
│   └── Authentication
├── Join Session
│   ├── Generate Token
│   ├── Session Settings
│   └── Join Session
├── Session Methods
│   ├── Audio Controls
│   ├── Video Controls
│   ├── Recording
│   ├── Participant Actions
│   ├── Layout & UI
│   └── Session Control
├── Listeners
│   ├── Session Status Listener
│   ├── Participant Event Listener
│   ├── Media Events Listener
│   ├── Button Click Listener
│   └── Layout Listener
├── Sample App (link)
└── Changelog (link)
```
