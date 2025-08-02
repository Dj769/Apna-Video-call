🔍 Apna-Video-call Project Overview
✅ Tech Stack
Frontend: React.js

Backend Signaling: Node.js with Socket.io

WebRTC: For peer-to-peer video/audio streaming

Features:

1. Create/join meeting rooms

2. Real-time video/audio communication

3. Chat feature during calls

4. Screen sharing

5. Mute/unmute and video toggle

6. Unique Room ID generation for sessions




📘 Full Conceptual Understanding

1. WebRTC Basics
WebRTC (Web Real-Time Communication) allows browsers to directly communicate with each other, enabling P2P video, audio, or data sharing without needing intermediate servers for streaming.

Main Components:

  RTCPeerConnection: Handles audio/video connection between peers.

  MediaStream (getUserMedia): Access to webcam/mic.

  RTCDataChannel: For sending arbitrary data.

2. Signaling with Socket.io
Since WebRTC doesn't define how peers find each other, Socket.io is used as the signaling mechanism to:

   Exchange offer/answer (SDP)

  Share ICE candidates (network paths)

  Join/leave rooms

3. Room Logic
Rooms are created dynamically. Socket.io handles room logic:

  A new socket joins a room.

  If 2 participants exist, connection starts.

  If more than 2 join, they may be denied depending on logic (1-1 vs group).

4. React Frontend
Uses state to manage media stream, connection status, chat messages.

  DOM elements render local and remote video using <video> tags with ref.

  Event listeners for mute/unmute, screen share, etc.
