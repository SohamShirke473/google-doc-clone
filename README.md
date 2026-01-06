# Google Doc Clone

A fully functional Google Docs clone built with modern web technologies. This project features a rich text editor, real-time collaboration, authentication, and a responsive design.

## Features

- **📝 Rich Text Editor**: standard rich text formatting features:
    - Bold, Italic, Underline, Strikethrough
    - Font Family & Size selection
    - Text Color & Highlight Color
    - Keyword Search & Replace
    - Headings (H1-H5)
    - Text Alignments (Left, Center, Right, Justify)
    - Lists (Bullet, Ordered)
    - Link insertion & editing
    - Image upload & resizing
    - Tables
- **🤝 Real-time Collaboration**: Multiple users can edit the same document simultaneously with live cursor tracking.
- **🔐 Authentication**: Secure user sign-up and sign-in via Clerk.
- **🗄️ Database**: Real-time data persistence using Convex.
- **📄 Document Management**: Create, rename, delete, and organize documents.
- **🎨 Modern UI**: Clean and responsive interface built with Tailwind CSS and Radix UI.
- **🌓 Dark Mode**: Built-in support for light and dark themes.
- **⚡ PDF Export**: Print or export documents as PDF (via browser print).

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/) & [Lucide React](https://lucide.dev/)
- **Editor**: [Tiptap](https://tiptap.dev/)
- **State Management**: [Nuqs](https://nuqs.47ng.com/) (URL state) & [Zustand](https://zustand-demo.pmnd.rs/)
- **Database**: [Convex](https://www.convex.dev/)
- **Auth**: [Clerk](https://clerk.com/)
- **Real-time**: [Liveblocks](https://liveblocks.io/)

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- Node.js (v18 or higher)
- npm, yarn, pnpm, or bun

### Installation

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd google-doc
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Environment Setup**

    Create a `.env.local` file in the root directory and add the following environment variables. You will need to obtain these keys from your [Clerk](https://dashboard.clerk.com/), [Convex](https://dashboard.convex.dev/), and [Liveblocks](https://liveblocks.io/dashboard) dashboards.

    ```env
    # Clerk Auth
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
    CLERK_SECRET_KEY=sk_test_...
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

    # Convex Database
    NEXT_PUBLIC_CONVEX_URL=https://...

    # Liveblocks Real-time
    NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY=pk_...
    ```

4.  **Run Development Server**

    Start the Next.js development server and the Convex backend.

    ```bash
    npm run dev
    # In a separate terminal, if not run automatically or if using a custom command:
    # npx convex dev
    ```

5.  **Access the App**

    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components.
- `convex/`: Convex backend functions and schema.
- `constants/`: Constant values and templates.
- `hooks/`: Custom React hooks.
- `lib/`: Utility functions.
- `store/`: Global state management.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
