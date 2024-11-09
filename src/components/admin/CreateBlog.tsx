// BlogManagement.tsx
import React, { useState, FormEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Label from '../ui/Label';
import { Blog } from '../../types/types';

interface CreateBlogProps {
    onSave: (blog: Blog) => void;
}

const CreateBlog: React.FC<CreateBlogProps> = ({ onSave }) => {
    const [title, setTitle] = useState<string>('');
    const [editorHtml, setEditorHtml] = useState<string>('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSave({
            title,
            content: editorHtml,
        });
    };

    return (
        <div className="p-6">
            <Card>
                <CardHeader>
                    <CardTitle>Create Blog Post</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="blog-title">Blog Title</Label>
                            <Input
                                id="blog-title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter blog title"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="blog-content">Content</Label>
                            <div className="border rounded-lg">
                                <div className="border-b p-2">
                                    <div className="flex gap-2">
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => {
                                                const selection = window.getSelection();
                                                const range = selection?.getRangeAt(0);
                                                if (range) {
                                                    const span = document.createElement('span');
                                                    span.style.fontWeight = 'bold';
                                                    range.surroundContents(span);
                                                }
                                            }}
                                        >
                                            Bold
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => {
                                                const selection = window.getSelection();
                                                const range = selection?.getRangeAt(0);
                                                if (range) {
                                                    const span = document.createElement('span');
                                                    span.style.fontStyle = 'italic';
                                                    range.surroundContents(span);
                                                }
                                            }}
                                        >
                                            Italic
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => {
                                                const selection = window.getSelection();
                                                const range = selection?.getRangeAt(0);
                                                if (range) {
                                                    const h2 = document.createElement('h2');
                                                    range.surroundContents(h2);
                                                }
                                            }}
                                        >
                                            Heading
                                        </Button>
                                    </div>
                                </div>
                                <div
                                    className="p-4 min-h-[200px]"
                                    contentEditable
                                    onInput={(e) => setEditorHtml(e.currentTarget.innerHTML)}
                                    dangerouslySetInnerHTML={{ __html: editorHtml }}
                                />
                            </div>
                        </div>

                        <Button type="submit" className="w-full">
                            Publish Post
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreateBlog;
