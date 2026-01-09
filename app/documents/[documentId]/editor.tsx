'use client'

import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'
import Image from '@tiptap/extension-image'
import { ResizableImage } from 'tiptap-extension-resizable-image'
import 'tiptap-extension-resizable-image/styles.css';
import { TableKit } from '@tiptap/extension-table'
import { useEditorStore } from '@/store/use-editor-store'
import { TextStyle, FontFamily, Color, FontSize, LineHeight } from '@tiptap/extension-text-style'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import Ruler from '@/app/documents/[documentId]/ruler'
import { Threads } from "@/app/documents/[documentId]/threads";
import { useStorage } from "@liveblocks/react";
import { LEFT_MARGIN_DEFAULT, RIGHT_MARGIN_DEFAULT } from "@/constants/margins";

interface EditorProps {
    initialContent?: string | undefined;
}

const Tiptap = ({ initialContent }: EditorProps) => {
    const leftMargin = useStorage((root) => root.leftMargin) ?? LEFT_MARGIN_DEFAULT;
    const rightMargin = useStorage((root) => root.rightMargin) ?? RIGHT_MARGIN_DEFAULT;
    const liveblocks = useLiveblocksExtension({
        initialContent: initialContent || "",
        offlineSupport_experimental: true,
    });
    const { setEditor } = useEditorStore()
    const editor = useEditor({
        onCreate({ editor }) {
            setEditor(editor);
        },
        onDestroy() {
            setEditor(null);
        },
        onUpdate({ editor }) {
            setEditor(editor);
        },
        onSelectionUpdate({ editor }) {
            setEditor(editor);
        },
        onTransaction({ editor }) {
            setEditor(editor);
        },
        onFocus({ editor }) {
            setEditor(editor);
        },
        onBlur({ editor }) {
            setEditor(editor);
        },
        onContentError({ editor }) {
            setEditor(editor);
        },
        editorProps: {
            attributes: {
                style: `padding-left: ${leftMargin ?? LEFT_MARGIN_DEFAULT}px; padding-right: ${rightMargin ?? RIGHT_MARGIN_DEFAULT}px;`,
                class:
                    'tiptap focus:outline-none border bg-white min-h-[1054px] w-[816px] pt-10 pb-10 cursor-text',
            },
        },
        extensions: [
            liveblocks,
            StarterKit.configure({
                // The Liveblocks extension comes with its own history handling
                undoRedo: false,
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            TaskList,
            TaskItem.configure({
                nested: true,
            }),

            TableKit,
            Image,
            ResizableImage,
            FontFamily,
            TextStyle,
            Color,
            FontSize,
            LineHeight,
            Highlight.configure({ multicolor: true }),
        ],
        immediatelyRender: false,
    })

    return (
        <div className="size-full overflow-x-auto bg-editor-bg px-4">
            <Ruler />
            <div className="min-w-max flex justify-center py-4 mx-auto">
                <EditorContent editor={editor} />
                <Threads editor={editor} />
            </div>
        </div>
    )
}

export default Tiptap
