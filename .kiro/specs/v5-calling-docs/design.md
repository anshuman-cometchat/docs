# V5 Calls SDK Documentation - Design Document

## Overview
Technical design for the V5 CometChat Calls SDK documentation structure based on SDK source code analysis.

## SDK Architecture

### Core Classes
1. **CometChatCalls** - Main SDK entry point (static methods)
2. **CallAppSettings** - SDK initialization configuration
3. **SessionSettings** - Call session configuration
4. **CallSession** - Active session management (singleton)
5. **Listeners** - Event handling interfaces

### Key Methods (CometChatCalls)

| Method | Description |
|--------|-------------|
| `init(context, callAppSettings, listener)` | Initialize SDK |
| `login(uid, apiKey, listener)` | Login with UID |
| `login(authToken, listener)` | Login with Auth Token |
| `logout(listener)` | Logout user |
| `getLoggedInUser()` | Get current user |
| `generateToken(sessionId, listener)` | Generate call token |
| `joinSession(sessionId, settings, container, listener)` | Join a session |

### SessionSettings Options

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | String | null | Session title |
| `displayName` | String | null | User display name |
| `startVideoPaused` | Boolean | false | Start with video off |
| `startAudioMuted` | Boolean | false | Start with audio muted |
| `layout` | LayoutType | TILE | TILE, SPOTLIGHT |
| `type` | SessionType | VIDEO | VIDEO, AUDIO |
| `audioMode` | AudioMode | SPEAKER | SPEAKER, EARPIECE, BLUETOOTH |
| `initialCameraFacing` | CameraFacing | FRONT | FRONT, BACK |
| `idleTimeoutPeriod` | Int | 300 | Timeout in seconds |
| `lowBandwidthMode` | Boolean | false | Enable low bandwidth |
| `autoStartRecording` | Boolean | false | Auto-start recording |
| `hideControlPanel` | Boolean | false | Hide bottom controls |
| `hideHeaderPanel` | Boolean | false | Hide top header |
| `hideLeaveSessionButton` | Boolean | false | Hide leave button |
| `hideToggleAudioButton` | Boolean | false | Hide audio toggle |
| `hideToggleVideoButton` | Boolean | false | Hide video toggle |
| `hideSwitchCameraButton` | Boolean | false | Hide camera switch |
| `hideRecordingButton` | Boolean | true | Hide recording button |
| `hideScreenSharingButton` | Boolean | false | Hide screen share |
| `hideAudioModeButton` | Boolean | false | Hide audio mode |
| `hideRaiseHandButton` | Boolean | false | Hide raise hand |
| `hideShareInviteButton` | Boolean | true | Hide share invite |
| `hideParticipantListButton` | Boolean | false | Hide participant list |
| `hideChangeLayoutButton` | Boolean | false | Hide layout change |
| `hideChatButton` | Boolean | true | Hide chat button |
| `hideSessionTimer` | Boolean | false | Hide session timer |

### CallSession Methods

| Category | Method | Description |
|----------|--------|-------------|
| **Audio** | `muteAudio()` | Mute local audio |
| | `unMuteAudio()` | Unmute local audio |
| | `setAudioMode(AudioMode)` | Change audio output |
| **Video** | `pauseVideo()` | Pause local video |
| | `resumeVideo()` | Resume local video |
| | `switchCamera()` | Switch front/back camera |
| **Recording** | `startRecording()` | Start session recording |
| | `stopRecording()` | Stop session recording |
| **Participants** | `muteParticipant(id)` | Mute a participant |
| | `pauseParticipantVideo(id)` | Pause participant video |
| | `pinParticipant()` | Pin participant |
| | `unPinParticipant()` | Unpin participant |
| **Hand Raise** | `raiseHand()` | Raise hand |
| | `lowerHand()` | Lower hand |
| **Layout** | `setLayout(LayoutType)` | Change call layout |
| | `enablePictureInPictureLayout()` | Enable PiP |
| | `disablePictureInPictureLayout()` | Disable PiP |
| **Session** | `leaveSession()` | Leave the session |
| | `isSessionActive()` | Check session status |
| **UI** | `setChatButtonUnreadCount(count)` | Set chat badge |

### Listeners

#### SessionStatusListener
- `onSessionJoined()`
- `onSessionLeft()`
- `onSessionTimedOut()`
- `onConnectionLost()`
- `onConnectionRestored()`
- `onConnectionClosed()`

#### ParticipantEventListener
- `onParticipantJoined(Participant)`
- `onParticipantLeft(Participant)`
- `onParticipantAudioMuted(Participant)`
- `onParticipantAudioUnmuted(Participant)`
- `onParticipantVideoPaused(Participant)`
- `onParticipantVideoResumed(Participant)`
- `onParticipantHandRaised(Participant)`
- `onParticipantHandLowered(Participant)`
- `onParticipantStartedScreenShare(Participant)`
- `onParticipantStoppedScreenShare(Participant)`
- `onParticipantStartedRecording(Participant)`
- `onParticipantStoppedRecording(Participant)`
- `onDominantSpeakerChanged(Participant)`
- `onParticipantListChanged(List<Participant>)`

#### MediaEventsListener
- `onRecordingStarted()`
- `onRecordingStopped()`
- `onScreenShareStarted()`
- `onScreenShareStopped()`
- `onAudioModeChanged(AudioMode)`
- `onCameraFacingChanged(CameraFacing)`
- `onAudioMuted()`
- `onAudioUnMuted()`
- `onVideoPaused()`
- `onVideoResumed()`

#### ButtonClickListener
- `onLeaveSessionButtonClicked()`
- `onRaiseHandButtonClicked()`
- `onShareInviteButtonClicked()`
- `onChangeLayoutButtonClicked()`
- `onParticipantListButtonClicked()`
- `onToggleAudioButtonClicked()`
- `onToggleVideoButtonClicked()`
- `onSwitchCameraButtonClicked()`
- `onChatButtonClicked()`
- `onRecordingToggleButtonClicked()`

#### LayoutListener
- `onCallLayoutChanged(LayoutType)`
- `onParticipantListVisible()`
- `onParticipantListHidden()`
- `onPictureInPictureLayoutEnabled()`
- `onPictureInPictureLayoutDisabled()`

## File Structure

```
docs/sdk/android/calls/
├── overview.mdx
├── setup.mdx
├── authentication.mdx
├── generate-token.mdx
├── session-settings.mdx
├── join-session.mdx
├── audio-controls.mdx
├── video-controls.mdx
├── recording.mdx
├── participant-actions.mdx
├── layout-ui.mdx
├── session-control.mdx
├── session-status-listener.mdx
├── participant-event-listener.mdx
├── media-events-listener.mdx
├── button-click-listener.mdx
└── layout-listener.mdx
```

## Navigation Structure (docs.json)

```json
{
  "dropdown": "Android",
  "icon": "/images/icons/android.svg",
  "groups": [
    {
      "group": "Overview",
      "pages": ["sdk/android/calls/overview"]
    },
    {
      "group": "Getting Started",
      "pages": [
        "sdk/android/calls/setup",
        "sdk/android/calls/authentication"
      ]
    },
    {
      "group": "Join Session",
      "pages": [
        "sdk/android/calls/generate-token",
        "sdk/android/calls/session-settings",
        "sdk/android/calls/join-session"
      ]
    },
    {
      "group": "Session Methods",
      "pages": [
        "sdk/android/calls/audio-controls",
        "sdk/android/calls/video-controls",
        "sdk/android/calls/recording",
        "sdk/android/calls/participant-actions",
        "sdk/android/calls/layout-ui",
        "sdk/android/calls/session-control"
      ]
    },
    {
      "group": "Listeners",
      "pages": [
        "sdk/android/calls/session-status-listener",
        "sdk/android/calls/participant-event-listener",
        "sdk/android/calls/media-events-listener",
        "sdk/android/calls/button-click-listener",
        "sdk/android/calls/layout-listener"
      ]
    }
  ]
}
```
