<p align="center">
  <img src="https://nvahzazenzjsisbjthhb.supabase.co/storage/v1/object/public/assets/logo.png" alt="SimpliAnimate Logo" width="80" />
</p>

<h1 align="center">SimpliAnimate</h1>

<p align="center">
  Animation videos made simple and easy through templates. Create videos faster without complex editing software.
</p>

SimpliAnimate is a web-based platform that lets you create animation videos using pre-built templates. Pick a template, customize it, and download your video — no video editing skills required.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Background](#background)
- [Features](#features)
  - [Animation Templates](#animation-templates)
  - [File Converter](#file-converter)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Background

SimpliAnimate was born out of a personal need. The creator, Harshith, built it to help his mother with her YouTube channel "Samruddha Kannada" (35K+ subscribers). She needed short quiz videos similar to "Who Wants to Be a Millionaire" for Kannada grammar and general knowledge content. Instead of wrestling with Premiere Pro templates, Harshith built a web app — which evolved into a full platform with multiple animation templates and tools.

## Features

### Animation Templates

9 ready-to-use animation templates:

| Template             | Description                          |
| -------------------- | ------------------------------------ |
| **Matrix Rain**      | Classic falling green text effect    |
| **Text Reveal**      | Text animation with reveal effects   |
| **Quiz**             | Interactive quiz-style videos        |
| **Text Falling**     | Animated falling text effects        |
| **Gradient Aurora**  | Beautiful gradient aurora animations |
| **Text Flyers**      | Text with flying/floating effects    |
| **ASCII Art**        | Convert images to ASCII art          |
| **Pixel Art**        | Pixelated image effects              |
| **Displacement Map** | Image displacement effects           |

### File Converter

A browser-based file converter powered by FFmpeg.wasm — no server uploads, everything runs locally in the browser.

**Supported formats:**

- **Image**: jpg, jpeg, png, gif, bmp, webp, ico, tif, tiff, svg, raw, tga
- **Video**: mp4, m4v, 3gp, 3g2, avi, mov, wmv, mkv, flv, ogv, webm, h264, hevc
- **Audio**: mp3, wav, ogg, aac, wma, flac, m4a

## Tech Stack

| Category            | Technology              |
| ------------------- | ----------------------- |
| **Framework**       | Next.js 14 (App Router) |
| **Language**        | TypeScript              |
| **Styling**         | Tailwind CSS            |
| **Animations**      | Framer Motion           |
| **UI Components**   | Radix UI, Lucide React  |
| **File Processing** | FFmpeg.wasm             |
| **File Upload**     | React Dropzone          |

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn / pnpm / bun)

### Installation

```bash
git clone https://github.com/harshith-ashvi/simplianimate.git
cd simplianimate
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

Other commands:

```bash
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run linting
```

## Project Structure

```
src/
├── app/
│   ├── (basic-info)/      # About, privacy policy, terms pages
│   ├── adobe/             # Adobe Express addon privacy policy
│   ├── templates/         # Template gallery page
│   ├── tools/             # Tools landing & file converter
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Landing page
├── components/
│   ├── landing-page/      # Hero, templates, testimonials, etc.
│   └── ui/                # Shared UI components
├── data/
│   ├── animationTemplates.ts  # Template definitions
│   └── tools.ts               # Tool definitions
├── types/                 # TypeScript type definitions
└── utils/
    └── file-converter.tsx # FFmpeg-based file conversion logic
```

## Usage

1. Visit [simplianimate.vercel.app](https://simplianimate.vercel.app)
2. Browse available templates
3. Sign up for a free account at [app-simplianimate.netlify.app](https://app-simplianimate.netlify.app/signup)
4. Select a template, customize inputs, and download your video
5. Use the [File Converter](https://simplianimate.vercel.app/tools/file-converter) for media format conversion

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is open source and available under the [MIT License](LICENSE).
